// ── STATE ──
const savedLB={},doneUnits=new Set(),quizHist=[],tasks=[],exams=[];
let curLBSem=1,fcTopic='anatomy',fcIdx=0,fcFlipped=false,fcReviewed=0;
let quizTopic=null,quizQs=[],quizIdx=0,quizScore=0,quizAnswered=false,timerInt=null,timerLeft=30;
const mcqAns={};

function sv(k,v){try{localStorage.setItem('np_'+k,JSON.stringify(v));}catch(e){}}
function ld(k,d){try{const v=localStorage.getItem('np_'+k);return v!=null?JSON.parse(v):d;}catch(e){return d;}}

function initState(){
  const lb=ld('lb',{});Object.assign(savedLB,lb);
  ld('du',[]).forEach(n=>doneUnits.add(n));
  ld('qh',[]).forEach(h=>quizHist.push(h));
  ld('tasks',[]).forEach(i=>tasks.push(i));
  ld('exams',[]).forEach(i=>exams.push(i));
  fcReviewed=ld('fcr',0);
}

// ── NAVIGATION ──
const pids=['pg-home','pg-notes','pg-logbook','pg-quiz','pg-flash'];
const nids=['nav-home','nav-notes','nav-logbook','nav-quiz','nav-flash'];
function goTab(pid){
  pids.forEach(p=>document.getElementById(p).classList.remove('active'));
  nids.forEach(n=>document.getElementById(n).classList.remove('active'));
  document.getElementById(pid).classList.add('active');
  const i=pids.indexOf(pid);if(i>=0)document.getElementById(nids[i]).classList.add('active');
  if(pid==='pg-home')updateAllDash();
  if(pid==='pg-notes'){backToUnits();renderNotesPage();}
  if(pid==='pg-logbook')renderLogbook(curLBSem);
  if(pid==='pg-flash')renderFC();
  if(pid==='pg-quiz')renderQuizHome();
  if(pid==='pg-calc')showCalc('dose',document.querySelector('#pg-calc .tabs .tab'));
  if(pid==='pg-ref')showRef('vitals',document.querySelector('#pg-ref .tabs .tab'));
  window.scrollTo(0,0);
}

// ── HOME ──
function initSubjGrid(){
  document.getElementById('subj-grid').innerHTML=subjects.map(s=>`<div class="scard" onclick="goTab('pg-notes')"><div class="sbadge" style="background:${s.color};color:${s.tc};">${s.code}</div><div class="sname">${s.name}</div><div class="smeta">${s.credits}</div><div class="spb"><div class="spbf" style="width:${s.code==='ANAT 105'?Math.round(doneUnits.size/units.length*100):0}%;background:${s.bc};"></div></div></div>`).join('');
}
function updateDash(){
  let tot=0,don=0;
  Object.keys(logbookData).forEach(n=>{logbookData[n].groups.forEach((g,gi)=>g.skills.forEach((_,si)=>{tot++;if(savedLB[`${n}_${gi}_${si}`])don++;}));});
  document.getElementById('h-skills').textContent=tot?Math.round(don/tot*100)+'%':'0%';
  document.getElementById('h-quiz').textContent=quizHist.reduce((a,h)=>a+h.total,0);
  document.getElementById('h-fc').textContent=fcReviewed;
  initSubjGrid();
}

// ── NOTES ──
function renderUnitList(){
  document.getElementById('unit-list').innerHTML=units.map(u=>{
    const done=doneUnits.has(u.num);
    return `<div class="unit-card" onclick="showUnit(${u.num})"><div class="unit-n${done?' done':''}">${u.num}</div><div class="unit-info"><div class="unit-title">${u.title}</div><div class="unit-meta">${u.hrs} hrs · ${u.sections.length} sections · ${u.mcqs.length} MCQs</div></div><svg style="width:16px;height:16px;fill:none;stroke:var(--text3);stroke-width:2;" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></div>`;
  }).join('');
  updateAnatProg();
}
function updateAnatProg(){
  const pct=Math.round(doneUnits.size/units.length*100);
  document.getElementById('anat-pb').style.width=pct+'%';
  document.getElementById('anat-pct').textContent=pct+'%';
  document.getElementById('anat-lbl').textContent=`${doneUnits.size}/${units.length} units completed`;
}
function showUnit(num){
  const u=units.find(x=>x.num===num);
  document.getElementById('notes-ov').style.display='none';
  document.getElementById('unit-detail').style.display='block';
  let h=`<div style="background:var(--teal-l);border-radius:14px;padding:14px;margin-bottom:12px;"><div style="font-size:10px;font-weight:600;color:var(--teal);margin-bottom:4px;">UNIT ${u.num} · ANAT 105 · INC 2020</div><div style="font-size:17px;font-weight:700;color:var(--teal-d);margin-bottom:2px;">${u.title}</div><div style="font-size:12px;color:var(--teal-m);margin-bottom:10px;">${u.hrs} theory hours</div><button style="padding:8px 18px;border-radius:20px;border:1.5px solid var(--teal);background:${doneUnits.has(u.num)?'var(--teal)':'transparent'};color:${doneUnits.has(u.num)?'white':'var(--teal)'};font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;" onclick="toggleUnitDone(${u.num},this)">${doneUnits.has(u.num)?'Completed ✓':'Mark as done'}</button></div>`;
  u.sections.forEach(s=>{
    h+=`<div class="sl">${s.label}</div>`;
    if(s.pts)s.pts.forEach(p=>{h+=`<div class="pt"><div class="pt-dot"></div><div class="pt-text">${p}</div></div>`;});
    if(s.table)h+=`<div class="tbl-w"><table><thead><tr>${s.table.h.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${s.table.r.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  });
  if(u.warn){h+=`<div class="sl">Exam traps</div>`;u.warn.forEach(w=>{h+=`<div class="warn"><b>⚠ Trap:</b> ${w}</div>`;});}
  if(u.clinical){h+=`<div class="sl">Clinical links</div>`;u.clinical.forEach(c=>{h+=`<div class="clin"><b>★ Clinical:</b> ${c}</div>`;});}
  if(u.mcqs){
    h+=`<div class="sl">Practice MCQs</div>`;
    u.mcqs.forEach((m,mi)=>{
      const id=`u${u.num}q${mi}`;
      h+=`<div class="mcq"><div class="mcq-top">MCQ ${mi+1}</div><div class="mcq-q">${m.q}</div>${m.o.map((o,oi)=>`<button class="mcq-opt" id="${id}o${oi}" onclick="doMCQ('${id}',${oi},${m.a},'${id}e')">${String.fromCharCode(65+oi)}. ${o}</button>`).join('')}<div class="mcq-exp" id="${id}e">${m.e}</div></div>`;
    });
  }
  document.getElementById('unit-detail-content').innerHTML=h;
}
function backToUnits(){document.getElementById('notes-ov').style.display='block';document.getElementById('unit-detail').style.display='none';}
function toggleUnitDone(num,btn){
  if(doneUnits.has(num)){doneUnits.delete(num);btn.textContent='Mark as done';btn.style.background='transparent';btn.style.color='var(--teal)';}
  else{doneUnits.add(num);btn.textContent='Completed ✓';btn.style.background='var(--teal)';btn.style.color='white';}
  sv('du',[...doneUnits]);updateAnatProg();
}
function doMCQ(id,chosen,correct,expId){
  if(mcqAns[id])return;mcqAns[id]=true;
  document.querySelectorAll(`[id^="${id}o"]`).forEach((b,i)=>{b.disabled=true;if(i===correct)b.classList.add('correct');else if(i===chosen&&chosen!==correct)b.classList.add('wrong');});
  const e=document.getElementById(expId);if(e)e.style.display='block';
}

// ── LOGBOOK ──
function initLBTabs(){
  document.getElementById('lb-tabs').innerHTML=[1,2].map((n,i)=>`<button class="tab${i===0?' active':''}" onclick="showLBSem(${n},this)">Sem ${n}</button>`).join('');
}
function showLBSem(n,btn){document.querySelectorAll('#lb-tabs .tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');curLBSem=n;renderLogbook(n);}
function renderLogbook(n){
  const data=logbookData[n];
  if(!data){document.getElementById('lb-content').innerHTML='<p style="color:var(--text3);font-size:13px;padding:8px 0;">Content coming in next update.</p>';return;}
  document.getElementById('lb-label').textContent=data.label;
  let tot=0,don=0,h='';
  data.groups.forEach((g,gi)=>{
    h+=`<div class="sl">${g.title}</div>`;
    g.skills.forEach((s,si)=>{
      const key=`${n}_${gi}_${si}`;const done=savedLB[key]||false;tot++;if(done)don++;
      h+=`<div class="skill-item"><div class="ski-row"><div class="ski-chk${done?' done':''}" onclick="toggleSkill('${key}',this)"><svg viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="ski-name">${s}</div><div class="ski-lvl${done?' l3':''}">${done?'Level 3':'Pending'}</div><button class="note-t" onclick="toggleNote('n_${key}')">Notes</button></div><div class="ski-note" id="n_${key}"><textarea placeholder="Add notes (supervisor, date, setting)..." onchange="saveNote('${key}',this.value)">${savedLB[key+'_note']||''}</textarea></div></div>`;
    });
  });
  const pct=tot?Math.round(don/tot*100):0;
  document.getElementById('lb-pb').style.width=pct+'%';document.getElementById('lb-pct').textContent=pct+'%';
  document.getElementById('lb-content').innerHTML=h;
}
function toggleSkill(key,el){
  savedLB[key]=!savedLB[key];el.classList.toggle('done');
  if(savedLB[key])savedLB[key+'_date']=new Date().toLocaleDateString('en-IN');
  const item=el.closest('.skill-item'),lvl=item.querySelector('.ski-lvl');
  lvl.classList.toggle('l3');lvl.textContent=savedLB[key]?'Level 3':'Pending';
  sv('lb',savedLB);
  const data=logbookData[curLBSem];let tot=0,don=0;
  if(data)data.groups.forEach((g,gi)=>g.skills.forEach((_,si)=>{tot++;if(savedLB[`${curLBSem}_${gi}_${si}`])don++;}));
  const pct=tot?Math.round(don/tot*100):0;
  document.getElementById('lb-pb').style.width=pct+'%';document.getElementById('lb-pct').textContent=pct+'%';
  updateAllDash();
}
function toggleNote(id){const el=document.getElementById(id);if(el)el.classList.toggle('open');}
function saveNote(key,val){savedLB[key+'_note']=val;sv('lb',savedLB);}

// ── FLASHCARDS ──
function initFCTabs(){
  document.getElementById('fc-tabs').innerHTML=[['anatomy','Anatomy'],['physiology','Physiology'],['nursing','Nursing']].map(([id,lbl],i)=>`<button class="tab${i===0?' active':''}" onclick="setFCTopic('${id}',this)">${lbl}</button>`).join('');
  renderMnemonics();renderFC();
}
function setFCTopic(t,btn){document.querySelectorAll('#fc-tabs .tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');fcTopic=t;fcIdx=0;fcFlipped=false;document.getElementById('fc-card').classList.remove('flip');renderFC();}
function renderFC(){
  const cards=flashcards[fcTopic]||[];if(!cards.length)return;
  const c=cards[fcIdx];
  document.getElementById('fc-q').textContent=c.q;document.getElementById('fc-a').textContent=c.a;
  document.getElementById('fc-ctr').textContent=`${fcIdx+1} / ${cards.length}`;
  fcFlipped=false;document.getElementById('fc-card').classList.remove('flip');
}
function flipFC(){document.getElementById('fc-card').classList.toggle('flip');fcFlipped=!fcFlipped;if(fcFlipped){fcReviewed++;sv('fcr',fcReviewed);updateAllDash();}}
function prevFC(){const c=flashcards[fcTopic]||[];fcIdx=(fcIdx-1+c.length)%c.length;renderFC();}
function nextFC(){const c=flashcards[fcTopic]||[];fcIdx=(fcIdx+1)%c.length;renderFC();}
function shuffleFC(){const c=flashcards[fcTopic]||[];for(let i=c.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[c[i],c[j]]=[c[j],c[i]];}fcIdx=0;renderFC();}
function renderMnemonics(){
  document.getElementById('mnem-list').innerHTML=mnemonics.map(m=>`<div class="mnem"><div class="mnem-title">${m.title}</div><div class="mnem-word">${m.word}</div>${m.items.map(([l,t])=>`<div class="mnem-item"><b>${l}</b> — ${t}</div>`).join('')}</div>`).join('');
}

// ── QUIZ ──
function renderQuizHome(){
  document.getElementById('quiz-list').innerHTML=quizTopics.map(t=>{
    const hist=quizHist.filter(h=>h.topic===t.id);const best=hist.length?Math.max(...hist.map(h=>h.pct)):null;
    return `<div class="qtopic" onclick="startQuiz('${t.id}')"><div class="qico" style="background:${t.color};">${t.icon}</div><div><h3>${t.label}</h3><p>${t.desc}${best!==null?' · Best: '+best+'%':''}</p></div><svg style="width:16px;height:16px;fill:none;stroke:var(--text3);stroke-width:2;margin-left:auto;" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></div>`;
  }).join('');
}
function startQuiz(topic){
  quizTopic=topic;quizQs=[...(quizBank[topic]||[])].sort(()=>Math.random()-.5);
  quizIdx=0;quizScore=0;quizAnswered=false;
  document.getElementById('quiz-home').style.display='none';
  document.getElementById('quiz-active').style.display='block';
  renderQuestion();
}
function exitQuiz(){
  clearInterval(timerInt);
  document.getElementById('quiz-home').style.display='block';
  document.getElementById('quiz-active').style.display='none';
  renderQuizHome();
}
function renderQuestion(){
  if(quizIdx>=quizQs.length){showQuizResult();return;}
  const q=quizQs[quizIdx];quizAnswered=false;
  document.getElementById('q-prog').textContent=`Q ${quizIdx+1}/${quizQs.length}`;
  document.getElementById('q-score').textContent=quizScore;
  startTimer();
  document.getElementById('quiz-body').innerHTML=`<div class="qcard"><div class="qcat">${quizTopic}</div><div class="qtext">${q.q}</div>${q.o.map((o,i)=>`<button class="qopt" onclick="selectAns(${i})">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}<div class="qexp" id="q-exp">${q.e}</div></div><button class="qnext" id="q-next" onclick="nextQ()">Next question →</button>`;
}
function startTimer(){
  clearInterval(timerInt);timerLeft=30;document.getElementById('tmrf').style.width='100%';
  timerInt=setInterval(()=>{timerLeft--;document.getElementById('tmrf').style.width=Math.round(timerLeft/30*100)+'%';if(timerLeft<=0){clearInterval(timerInt);if(!quizAnswered)selectAns(-1);}},1000);
}
function selectAns(i){
  if(quizAnswered)return;quizAnswered=true;clearInterval(timerInt);
  const q=quizQs[quizIdx];
  document.querySelectorAll('.qopt').forEach((b,idx)=>{b.disabled=true;if(idx===q.a)b.classList.add('correct');else if(idx===i&&i!==q.a)b.classList.add('wrong');});
  if(i===q.a)quizScore++;
  const e=document.getElementById('q-exp');if(e)e.style.display='block';
  const nx=document.getElementById('q-next');if(nx)nx.style.display='block';
  document.getElementById('q-score').textContent=quizScore;
}
function nextQ(){quizIdx++;renderQuestion();}
function showQuizResult(){
  clearInterval(timerInt);
  const pct=Math.round(quizScore/quizQs.length*100);
  quizHist.push({topic:quizTopic,score:quizScore,total:quizQs.length,pct,date:new Date().toLocaleDateString('en-IN')});
  sv('qh',quizHist);
  let grade='Outstanding',bg='#E1F5EE',c='#085041';
  if(pct<50){grade='Keep practising';bg='#FCEBEB';c='#A32D2D';}else if(pct<65){grade='Average (C)';bg='#FAEEDA';c='#854F0B';}else if(pct<75){grade='Good (B+)';bg='#FAEEDA';c='#412402';}else if(pct<80){grade='Very Good (A)';bg='#EEEDFE';c='#26215C';}else if(pct<85){grade='Excellent (A+)';bg='#E6F1FB';c='#042C53';}
  document.getElementById('quiz-body').innerHTML=`<div class="qresult"><div class="qr-score">${quizScore}/${quizQs.length}</div><div class="qr-label">${pct}% correct</div><div class="qr-grade" style="background:${bg};color:${c};">${grade}</div><div><button class="qr-btn" onclick="startQuiz('${quizTopic}')">Retry</button><button class="qr-sec" onclick="exitQuiz()">All topics</button></div></div>`;
  updateAllDash();
}

// ── CALCULATORS ──
function showCalc(type,btn){
  document.querySelectorAll('#pg-calc .tabs .tab').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');
  const b=document.getElementById('calc-body');
  if(type==='dose'){b.innerHTML=`<div class="card"><h3>Paediatric drug dose calculator</h3><div class="calc-field"><label>Drug name</label><input id="dn" placeholder="e.g. Paracetamol"></div><div class="calc-field"><label>Dose (mg/kg/day)</label><input type="number" id="dpkg" placeholder="e.g. 15"></div><div class="calc-field"><label>Child weight (kg)</label><input type="number" id="dwt" placeholder="e.g. 12"></div><div class="calc-field"><label>Doses per day</label><input type="number" id="ddpd" placeholder="e.g. 3"></div><div class="calc-field"><label>Concentration mg/mL (optional)</label><input type="number" id="dconc" placeholder="e.g. 120"></div><button class="calc-btn" onclick="calcDose()">Calculate</button><div id="dres"></div></div>`;}
  else if(type==='bmi'){b.innerHTML=`<div class="card"><h3>BMI calculator</h3><div class="calc-field"><label>Weight (kg)</label><input type="number" id="bwt" placeholder="e.g. 65"></div><div class="calc-field"><label>Height (cm)</label><input type="number" id="bht" placeholder="e.g. 165"></div><button class="calc-btn" onclick="calcBMI()">Calculate BMI</button><div id="bres"></div></div>`;}
  else if(type==='fluid'){b.innerHTML=`<div class="card"><h3>Fluid balance</h3><div style="font-size:12px;color:var(--teal);font-weight:600;margin-bottom:8px;">Intake (mL)</div><div class="calc-field"><label>IV fluids</label><input type="number" id="fiv" value="0"></div><div class="calc-field"><label>Oral intake</label><input type="number" id="foral" value="0"></div><div class="calc-field"><label>Blood products</label><input type="number" id="fblood" value="0"></div><div style="font-size:12px;color:var(--red);font-weight:600;margin-bottom:8px;">Output (mL)</div><div class="calc-field"><label>Urine</label><input type="number" id="furine" value="0"></div><div class="calc-field"><label>Drain/NG</label><input type="number" id="fdrain" value="0"></div><div class="calc-field"><label>Vomiting/diarrhoea</label><input type="number" id="fvomit" value="0"></div><button class="calc-btn" onclick="calcFluid()">Calculate balance</button><div id="fres"></div></div>`;}
  else if(type==='apgar'){
    const rows=[['Appearance','Blue all over','Blue extremities','Pink all over'],['Pulse','Absent','< 100 bpm','≥ 100 bpm'],['Grimace','None','Grimace','Cry/cough'],['Activity','Limp','Some flexion','Active'],['Respiration','Absent','Weak/irregular','Good cry']];
    b.innerHTML=`<div class="card"><h3>APGAR score</h3><div class="tbl-w"><table><thead><tr><th>Sign</th><th>0</th><th>1</th><th>2</th><th>Score</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><select id="ap${i}" onchange="calcApgar()" style="border:1px solid var(--border);border-radius:6px;padding:4px;font-size:13px;background:var(--card);"><option value="0">0</option><option value="1">1</option><option value="2">2</option></select></td></tr>`).join('')}</tbody></table></div><div id="apres"></div></div>`;
    calcApgar();
  }else if(type==='gcs'){b.innerHTML=`<div class="card"><h3>Glasgow Coma Scale</h3><div class="calc-field"><label>Eye opening</label><select id="ge" onchange="calcGCS()" style="width:100%;padding:11px;border-radius:10px;border:1px solid var(--border);background:var(--card);font-size:13px;font-family:inherit;"><option value="0">— select —</option><option value="4">4 — Spontaneous</option><option value="3">3 — To voice</option><option value="2">2 — To pain</option><option value="1">1 — None</option></select></div><div class="calc-field"><label>Verbal response</label><select id="gv" onchange="calcGCS()" style="width:100%;padding:11px;border-radius:10px;border:1px solid var(--border);background:var(--card);font-size:13px;font-family:inherit;"><option value="0">— select —</option><option value="5">5 — Oriented</option><option value="4">4 — Confused</option><option value="3">3 — Words</option><option value="2">2 — Sounds</option><option value="1">1 — None</option></select></div><div class="calc-field"><label>Motor response</label><select id="gm" onchange="calcGCS()" style="width:100%;padding:11px;border-radius:10px;border:1px solid var(--border);background:var(--card);font-size:13px;font-family:inherit;"><option value="0">— select —</option><option value="6">6 — Obeys commands</option><option value="5">5 — Localises</option><option value="4">4 — Withdraws</option><option value="3">3 — Flexion</option><option value="2">2 — Extension</option><option value="1">1 — None</option></select></div><div id="gres"></div></div>`;}
}
function calcDose(){const dpkg=parseFloat(document.getElementById('dpkg').value)||0;const wt=parseFloat(document.getElementById('dwt').value)||0;const dpd=parseFloat(document.getElementById('ddpd').value)||1;const conc=parseFloat(document.getElementById('dconc').value)||0;const day=dpkg*wt;const per=day/dpd;const vol=conc?per/conc:0;document.getElementById('dres').innerHTML=`<div class="calc-res"><div class="big">${per.toFixed(1)} mg/dose</div><div class="sub">Total daily: ${day.toFixed(1)} mg${conc?' · Volume: '+vol.toFixed(1)+' mL':''}<br>Based on ${dpkg} mg/kg/day for ${wt} kg child</div></div>`;}
function calcBMI(){const w=parseFloat(document.getElementById('bwt').value)||0;const h=parseFloat(document.getElementById('bht').value)||0;if(!w||!h)return;const bmi=w/((h/100)**2);let cat,bg='#E1F5EE',c='#085041';if(bmi<18.5){cat='Underweight';bg='#E6F1FB';c='#042C53';}else if(bmi<25){cat='Normal weight';}else if(bmi<30){cat='Overweight';bg='#FAEEDA';c='#412402';}else{cat='Obese';bg='#FCEBEB';c='#A32D2D';}document.getElementById('bres').innerHTML=`<div class="calc-res" style="background:${bg};"><div class="big" style="color:${c};">${bmi.toFixed(1)}</div><div class="sub" style="color:${c};">${cat} — WHO BMI Classification</div></div>`;}
function calcFluid(){const i=(parseFloat(document.getElementById('fiv').value)||0)+(parseFloat(document.getElementById('foral').value)||0)+(parseFloat(document.getElementById('fblood').value)||0);const o=(parseFloat(document.getElementById('furine').value)||0)+(parseFloat(document.getElementById('fdrain').value)||0)+(parseFloat(document.getElementById('fvomit').value)||0);const bal=i-o;let bg='#E1F5EE',c='#085041',cat='Balanced';if(bal>500){cat='Positive — watch for overload';bg='#FAEEDA';c='#412402';}else if(bal<-500){cat='Negative — watch for dehydration';bg='#FCEBEB';c='#A32D2D';}document.getElementById('fres').innerHTML=`<div class="calc-res" style="background:${bg};"><div class="big" style="color:${c};">${bal>0?'+':''}${bal} mL</div><div class="sub" style="color:${c};">In: ${i} mL · Out: ${o} mL<br>${cat}</div></div>`;}
function calcApgar(){let t=0;for(let i=0;i<5;i++){const el=document.getElementById('ap'+i);if(el)t+=parseInt(el.value)||0;}let bg='#E1F5EE',c='#085041',cat='Normal (7–10)';if(t<4){cat='Severe (0–3) — immediate resuscitation';bg='#FCEBEB';c='#A32D2D';}else if(t<7){cat='Moderate concern (4–6) — stimulation needed';bg='#FAEEDA';c='#412402';}document.getElementById('apres').innerHTML=`<div class="calc-res" style="background:${bg};"><div class="big" style="color:${c};">${t}/10</div><div class="sub" style="color:${c};">${cat}</div></div>`;}
function calcGCS(){const e=parseInt(document.getElementById('ge').value)||0;const v=parseInt(document.getElementById('gv').value)||0;const m=parseInt(document.getElementById('gm').value)||0;const t=e+v+m;if(!t){document.getElementById('gres').innerHTML='';return;}let bg='#E1F5EE',c='#085041',cat='Mild (13–15)';if(t<=8){cat='Severe (≤8) — consider intubation';bg='#FCEBEB';c='#A32D2D';}else if(t<=12){cat='Moderate (9–12)';bg='#FAEEDA';c='#412402';}document.getElementById('gres').innerHTML=`<div class="calc-res" style="background:${bg};"><div class="big" style="color:${c};">${t}/15</div><div class="sub" style="color:${c};">E${e} V${v} M${m} — ${cat}</div></div>`;}

// ── REFERENCE ──
function showRef(type,btn){
  document.querySelectorAll('#pg-ref .tabs .tab').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');
  const srch=document.getElementById('ref-search');
  srch.style.display=type==='abbr'?'block':'none';srch.value='';
  renderRefTable(refData[type],type);
}
function filterRef(){
  const q=(document.getElementById('ref-search').value||'').toLowerCase();
  renderRefTable(refData.abbr.filter(r=>r[0].toLowerCase().includes(q)||r[1].toLowerCase().includes(q)),'abbr');
}
function renderRefTable(data,type){
  if(!data||!data.length){document.getElementById('ref-body').innerHTML='<p style="color:var(--text3);font-size:13px;">No results.</p>';return;}
  const is2=type==='abbr';
  let h=`<div class="tbl-w"><table><thead><tr>${is2?'<th>Abbreviation</th><th>Meaning</th>':'<th>Parameter</th><th>Group</th><th>Value</th>'}</tr></thead><tbody>`;
  h+=data.map(r=>`<tr>${r.map((c,i)=>`<td${i===r.length-1?' style="color:var(--teal-d);font-weight:600;"':''}>${c}</td>`).join('')}</tr>`).join('');
  h+=`</tbody></table></div>`;
  document.getElementById('ref-body').innerHTML=h;
}

// ── PLANNER ──
function initPlanner(){
  document.getElementById('today-date').textContent=new Date().toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  if(!tasks.length){['Review Anatomy — cardiovascular system','Practice drug dose calculations','Complete Logbook Sem I skills','Read Community Health — PHC structure','Revise APGAR scoring'].forEach(t=>tasks.push({label:t,done:false}));}
  renderTasks();renderExams();
  document.getElementById('weekly-sched').innerHTML=[{d:'Monday',s:'Anatomy & Physiology (2h) + Flashcards'},{d:'Tuesday',s:'Pharmacology (2h) + Dose calculations'},{d:'Wednesday',s:'Adult Health Nursing (2h) + Quiz'},{d:'Thursday',s:'Community Health (2h) + Reference review'},{d:'Friday',s:'Child Health + OBG (2h) + Mnemonics'},{d:'Saturday',s:'Mental Health (1h) + Mock Quiz (1h) + Logbook'},{d:'Sunday',s:'Revision + CGPA check + Rest'}].map(s=>`<div style="display:flex;gap:10px;padding:8px 0;border-bottom:0.5px solid var(--border);"><div style="font-size:12px;font-weight:600;color:var(--teal);min-width:70px;">${s.d}</div><div style="font-size:13px;color:var(--text2);">${s.s}</div></div>`).join('');
}
function addTask(){const inp=document.getElementById('task-inp');const v=inp.value.trim();if(!v)return;tasks.push({label:v,done:false});inp.value='';sv('tasks',tasks);renderTasks();}
function renderTasks(){document.getElementById('task-list').innerHTML=tasks.map((t,i)=>`<div class="task-item"><div class="task-chk${t.done?' done':''}" onclick="toggleTask(${i})"><svg viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="task-lbl${t.done?' done':''}">${t.label}</div><button class="task-del" onclick="delTask(${i})">✕</button></div>`).join('')||'<p style="color:var(--text3);font-size:13px;padding:8px 0;">No tasks yet.</p>';}
function toggleTask(i){tasks[i].done=!tasks[i].done;sv('tasks',tasks);renderTasks();}
function delTask(i){tasks.splice(i,1);sv('tasks',tasks);renderTasks();}
function addExam(){const n=document.getElementById('exam-name').value.trim();const d=document.getElementById('exam-date').value;if(!n||!d)return;exams.push({name:n,date:d});document.getElementById('exam-name').value='';document.getElementById('exam-date').value='';sv('exams',exams);renderExams();}
function renderExams(){
  const today=new Date();today.setHours(0,0,0,0);
  document.getElementById('exam-list').innerHTML=exams.map((e,i)=>{
    const d=new Date(e.date);d.setHours(0,0,0,0);const diff=Math.round((d-today)/864e5);
    const lbl=diff<0?`${Math.abs(diff)} days ago`:diff===0?'Today!':diff===1?'Tomorrow':`${diff} days left`;
    const col=diff<0?'var(--red)':diff<=3?'var(--ambr)':'var(--teal)';
    return `<div class="cd-card" style="border-color:${col};"><div class="cd-label" style="color:${col};">${e.name}</div><div class="cd-days" style="color:${col};">${lbl}</div><div class="cd-sub">${new Date(e.date).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}</div><button class="cd-rm" onclick="delExam(${i})">Remove</button></div>`;
  }).join('')||'<p style="color:var(--text3);font-size:13px;">Add your exam dates above.</p>';
}
function delExam(i){exams.splice(i,1);sv('exams',exams);renderExams();}

// ── CGPA ──
const semCredits=[12,31,17,21,11,21,26,12];
const gp={'O':10,'A+':9,'A':8,'B+':7,'B':6,'C':5,'P':4,'F':0,'Ab':0,'—':null};
function initCGPA(){
  const grades=['—','O','A+','A','B+','B','C','P','F','Ab'];
  document.getElementById('cgpa-rows').innerHTML=['Semester I','Semester II','Semester III','Semester IV','Semester V','Semester VI','Semester VII','Semester VIII'].map((n,i)=>`<div class="cgpa-row"><div class="cgpa-lbl">${n}</div><select class="cgpa-sel" id="gr${i}" onchange="calcCGPA()">${grades.map(g=>`<option value="${g}">${g}</option>`).join('')}</select><div class="cgpa-cr">${semCredits[i]} cr</div></div>`).join('');
  calcCGPA();
}
function calcCGPA(){
  let tc=0,tp=0;
  semCredits.forEach((cr,i)=>{const sel=document.getElementById('gr'+i);if(!sel)return;const g=gp[sel.value];if(g!=null&&sel.value!=='—'){tc+=cr;tp+=cr*g;}});
  if(!tc){document.getElementById('cgpa-val').textContent='—';document.getElementById('cgpa-grade').textContent='';return;}
  const cgpa=(tp/tc).toFixed(2);document.getElementById('cgpa-val').textContent=cgpa;
  const n=parseFloat(cgpa);let grade,bg='#E1F5EE',c='#085041';
  if(n>=9.5)grade='Outstanding (O)';else if(n>=9){grade='Excellent (A+)';bg='#E6F1FB';c='#042C53';}else if(n>=8){grade='Very Good (A)';bg='#EEEDFE';c='#26215C';}else if(n>=7){grade='Good (B+)';bg='#FAEEDA';c='#412402';}else if(n>=6){grade='Above Average (B)';bg='#FAEEDA';c='#854F0B';}else if(n>=5)grade='Average — Pass (C)';else{grade='Fail (F)';bg='#FCEBEB';c='#A32D2D';}
  const el=document.getElementById('cgpa-grade');el.style.background=bg;el.style.color=c;el.textContent=grade;
}

// ── PWA INSTALL ──
let deferredPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;document.getElementById('install-banner').classList.add('show');});
document.getElementById('ib-yes').addEventListener('click',()=>{if(deferredPrompt){deferredPrompt.prompt();deferredPrompt.userChoice.then(()=>{deferredPrompt=null;document.getElementById('install-banner').classList.remove('show');});}});
document.getElementById('ib-no').addEventListener('click',()=>document.getElementById('install-banner').classList.remove('show'));
window.addEventListener('online',()=>document.getElementById('offline-badge').style.display='none');
window.addEventListener('offline',()=>document.getElementById('offline-badge').style.display='block');
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));

// ── BOOT ──
window.addEventListener('load',()=>{
  initState();
  setTimeout(()=>{
    document.getElementById('splash').classList.add('hide');
    document.getElementById('app').classList.add('show');
    initSubjGrid();initLBTabs();initFCTabs();initPlanner();initCGPA();
    renderQuizHome();renderLogbook(1);renderUnitList();
    showCalc('dose',null);showRef('vitals',null);
    updateAllDash();
  },1900);
});

// Multi-sem overrides
function updateDash() { if(typeof updateAllDash === 'function') updateAllDash(); }
