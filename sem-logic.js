// ═══════════════════════════════════════════════════════
// MULTI-SEMESTER LOGIC — handles Semester 1-8 navigation
// ═══════════════════════════════════════════════════════

let activeSem = 1;
let doneUnitsPerSem = {};  // { semNum: Set of done unit nums }

function getDoneSet(sem) {
  if (!doneUnitsPerSem[sem]) doneUnitsPerSem[sem] = new Set();
  return doneUnitsPerSem[sem];
}

function getUnitsForSem(sem) {
  if (sem === 1) return units;  // from app-data.js
  return (allSemesterUnits[sem] || []);
}

function saveDone() {
  const out = {};
  Object.keys(doneUnitsPerSem).forEach(s => {
    out[s] = [...doneUnitsPerSem[s]];
  });
  sv('du_all', out);
}

function loadDone() {
  const saved = ld('du_all', {});
  Object.keys(saved).forEach(s => {
    doneUnitsPerSem[parseInt(s)] = new Set(saved[s]);
  });
  // backwards compat with old format
  const oldDu = ld('du', []);
  if (oldDu.length && !doneUnitsPerSem[1]) doneUnitsPerSem[1] = new Set(oldDu);
}

// ── Render semester selector ──────────────────────────
function renderSemSelector() {
  let h = '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px;">';
  for (let s = 1; s <= 8; s++) {
    const meta = semesterMeta[s];
    const done = getDoneSet(s);
    const total = getUnitsForSem(s).length;
    const pct = total ? Math.round(done.size / total * 100) : 0;
    h += `<button onclick="switchSem(${s})" id="semtab-${s}" style="padding:7px 13px;border-radius:10px;border:1.5px solid ${activeSem===s ? meta.bc : 'var(--border)'};background:${activeSem===s ? meta.color : 'var(--card)'};color:${activeSem===s ? meta.tc : 'var(--text2)'};font-size:12px;font-weight:${activeSem===s?'600':'400'};cursor:pointer;font-family:inherit;position:relative;">
      Sem ${s}${pct>0 ? `<span style="display:inline-block;margin-left:5px;font-size:10px;color:${meta.bc};">${pct}%</span>` : ''}
    </button>`;
  }
  h += '</div>';
  return h;
}

function switchSem(s) {
  activeSem = s;
  backToUnits();
  renderNotesPage();
}

// ── Main notes page render ────────────────────────────
function renderNotesPage() {
  const meta = semesterMeta[activeSem];
  const semUnits = getUnitsForSem(activeSem);
  const done = getDoneSet(activeSem);
  const pct = semUnits.length ? Math.round(done.size / semUnits.length * 100) : 0;

  // Semester tabs
  document.getElementById('sem-tabs-wrap').innerHTML = renderSemSelector();

  // Header
  document.getElementById('sem-header').innerHTML = `
    <div style="background:${meta.color};border-radius:14px;padding:14px;margin-bottom:12px;">
      <div style="font-size:10px;font-weight:600;color:${meta.bc};margin-bottom:2px;">${meta.name} · ${meta.credits} Credits · INC 2020</div>
      <div style="font-size:17px;font-weight:700;color:${meta.tc};margin-bottom:8px;">${meta.subtitle}</div>
      <div style="display:flex;justify-content:space-between;font-size:12px;color:${meta.tc};opacity:.8;margin-bottom:6px;">
        <span>${done.size}/${semUnits.length} units completed</span><span>${pct}%</span>
      </div>
      <div style="height:6px;background:rgba(0,0,0,.1);border-radius:3px;overflow:hidden;">
        <div style="height:100%;width:${pct}%;background:${meta.bc};border-radius:3px;transition:width .4s;"></div>
      </div>
    </div>`;

  // Unit list
  document.getElementById('unit-list').innerHTML = semUnits.map(u => {
    const isDone = done.has(u.num);
    return `<div class="unit-card" onclick="showSemUnit(${u.num},${activeSem})">
      <div class="unit-n${isDone?' done':''}" style="${isDone?'':'background:'+meta.bc+';"}'>${u.num}</div>
      <div class="unit-info">
        <div class="unit-title">${u.subj ? `<span style="font-size:10px;color:var(--text3);">${u.subj}</span><br>` : ''}${u.title}</div>
        <div class="unit-meta">${u.hrs} hrs · ${u.sections.length} sections · ${u.mcqs?u.mcqs.length:0} MCQs</div>
      </div>
      <svg style="width:16px;height:16px;fill:none;stroke:var(--text3);stroke-width:2;" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
    </div>`;
  }).join('') || `<div style="text-align:center;padding:32px 16px;color:var(--text3);font-size:13px;">Content for this semester coming soon.</div>`;
}

function showSemUnit(num, sem) {
  const semUnits = getUnitsForSem(sem);
  const u = semUnits.find(x => x.num === num);
  if (!u) return;
  const meta = semesterMeta[sem];
  const done = getDoneSet(sem);

  document.getElementById('notes-ov').style.display = 'none';
  document.getElementById('unit-detail').style.display = 'block';

  let h = `<div style="background:${meta.color};border-radius:14px;padding:14px;margin-bottom:12px;">
    <div style="font-size:10px;font-weight:600;color:${meta.bc};margin-bottom:4px;">UNIT ${u.num} · ${u.code || 'SEM '+sem} · INC 2020</div>
    <div style="font-size:17px;font-weight:700;color:${meta.tc};margin-bottom:2px;">${u.title}</div>
    <div style="font-size:12px;color:${meta.tc};opacity:.8;margin-bottom:10px;">${u.hrs} theory hours${u.subj ? ' · '+u.subj : ''}</div>
    <button style="padding:8px 18px;border-radius:20px;border:1.5px solid ${meta.bc};background:${done.has(u.num)?meta.bc:'transparent'};color:${done.has(u.num)?'white':meta.bc};font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;" onclick="toggleSemUnitDone(${u.num},${sem},this)">${done.has(u.num)?'Completed ✓':'Mark as done'}</button>
  </div>`;

  u.sections.forEach(s => {
    h += `<div class="sl">${s.label}</div>`;
    if (s.pts) s.pts.forEach(p => { h += `<div class="pt"><div class="pt-dot"></div><div class="pt-text">${p}</div></div>`; });
    if (s.table) h += `<div class="tbl-w"><table><thead><tr>${s.table.h.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${s.table.r.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  });

  if (u.warn) { h += `<div class="sl">Exam traps</div>`; u.warn.forEach(w => { h += `<div class="warn"><b>⚠ Trap:</b> ${w}</div>`; }); }
  if (u.clinical) { h += `<div class="sl">Clinical links</div>`; u.clinical.forEach(c => { h += `<div class="clin"><b>★ Clinical:</b> ${c}</div>`; }); }
  if (u.mcqs && u.mcqs.length) {
    h += `<div class="sl">Practice MCQs</div>`;
    u.mcqs.forEach((m, mi) => {
      const id = `s${sem}u${u.num}q${mi}`;
      h += `<div class="mcq"><div class="mcq-top">MCQ ${mi+1}</div><div class="mcq-q">${m.q}</div>${m.o.map((o,oi)=>`<button class="mcq-opt" id="${id}o${oi}" onclick="doMCQ('${id}',${oi},${m.a},'${id}e')">${String.fromCharCode(65+oi)}. ${o}</button>`).join('')}<div class="mcq-exp" id="${id}e">${m.e}</div></div>`;
    });
  }

  document.getElementById('unit-detail-content').innerHTML = h;
}

function toggleSemUnitDone(num, sem, btn) {
  const done = getDoneSet(sem);
  const meta = semesterMeta[sem];
  if (done.has(num)) {
    done.delete(num);
    btn.textContent = 'Mark as done';
    btn.style.background = 'transparent';
    btn.style.color = meta.bc;
  } else {
    done.add(num);
    btn.textContent = 'Completed ✓';
    btn.style.background = meta.bc;
    btn.style.color = 'white';
  }
  saveDone();
}

// ── Dashboard update for all semesters ───────────────
function getDashStats() {
  let totalUnits = units.length;
  let doneTotal = getDoneSet(1).size;
  for (let s = 2; s <= 8; s++) {
    totalUnits += getUnitsForSem(s).length;
    doneTotal += getDoneSet(s).size;
  }
  return { totalUnits, doneTotal, pct: totalUnits ? Math.round(doneTotal / totalUnits * 100) : 0 };
}

// ── Override home grid to show all semesters ─────────
function initAllSemGrid() {
  let h = '';
  for (let s = 1; s <= 8; s++) {
    const meta = semesterMeta[s];
    const semUnits = getUnitsForSem(s);
    const done = getDoneSet(s);
    const pct = semUnits.length ? Math.round(done.size / semUnits.length * 100) : 0;
    h += `<div class="scard" onclick="goToSem(${s})">
      <div class="sbadge" style="background:${meta.color};color:${meta.tc};">Sem ${s}</div>
      <div class="sname">${meta.subtitle}</div>
      <div class="smeta">${meta.credits} credits · ${semUnits.length} units</div>
      <div class="spb"><div class="spbf" style="width:${pct}%;background:${meta.bc};"></div></div>
    </div>`;
  }
  document.getElementById('subj-grid').innerHTML = h;
}

function goToSem(s) {
  activeSem = s;
  goTab('pg-notes');
}

// ── Stats for home dashboard ─────────────────────────
function updateAllDash() {
  // Logbook
  let lbTot = 0, lbDon = 0;
  Object.keys(logbookData).forEach(n => {
    logbookData[n].groups.forEach((g, gi) => g.skills.forEach((_, si) => {
      lbTot++; if (savedLB[`${n}_${gi}_${si}`]) lbDon++;
    }));
  });
  document.getElementById('h-skills').textContent = lbTot ? Math.round(lbDon / lbTot * 100) + '%' : '0%';

  // Quiz
  document.getElementById('h-quiz').textContent = quizHist.reduce((a, h) => a + h.total, 0);
  document.getElementById('h-fc').textContent = fcReviewed;

  // All semester progress
  const { doneTotal, totalUnits } = getDashStats();
  // Update progress label if element exists
  const prog = document.getElementById('overall-prog');
  if (prog) prog.textContent = `${doneTotal}/${totalUnits} units`;

  initAllSemGrid();
}

// ── Boot integration ──────────────────────────────────
function initNotesPageHTML() {
  // Inject the multi-semester structure into the notes page
  const notesOv = document.getElementById('notes-ov');
  if (notesOv) {
    notesOv.innerHTML = `
      <div id="sem-tabs-wrap"></div>
      <div id="sem-header"></div>
      <div id="unit-list"></div>`;
  }
}

// Called from main boot
function bootMultiSem() {
  loadDone();
  initNotesPageHTML();
  renderNotesPage();
}
