const subjects=[
  {name:"Applied Anatomy",code:"ANAT 105",credits:"3 cr",color:"#E1F5EE",tc:"#085041",bc:"#1D9E75"},
  {name:"Applied Physiology",code:"PHYS 110",credits:"3 cr",color:"#E6F1FB",tc:"#042C53",bc:"#185FA5"},
  {name:"Applied Sociology",code:"SOCI 115",credits:"3 cr",color:"#EEEDFE",tc:"#26215C",bc:"#534AB7"},
  {name:"Applied Psychology",code:"PSYC 120",credits:"3 cr",color:"#FAEEDA",tc:"#412402",bc:"#854F0B"},
  {name:"Nursing Foundation I",code:"NNF(I) 125",credits:"10 cr",color:"#FBEAF0",tc:"#4B1528",bc:"#993556"},
  {name:"Communicative English",code:"ENGL 101",credits:"2 cr",color:"#FAECE7",tc:"#4A1B0C",bc:"#993C1D"},
];

const units=[
  {num:1,title:"Introduction, Cell & Tissue",hrs:8,sections:[
    {label:"Anatomical terms",pts:["<b>Standard position:</b> erect, face forward, palms anterior","<b>Anterior/Posterior</b> — front/back | <b>Superior/Inferior</b> — above/below","<b>Medial/Lateral</b> — towards/away from midline | <b>Proximal/Distal</b> — closer/farther from trunk","<b>Superficial/Deep</b> — near/away from surface | <b>Prone/Supine</b> — face down/face up"]},
    {label:"Anatomical planes",table:{h:["Plane","Also called","Divides into"],r:[["Sagittal","Median","Left & right halves"],["Coronal","Frontal","Anterior & posterior"],["Transverse","Axial","Superior & inferior"]]}},
    {label:"Body movements",pts:["<b>Flexion/Extension</b> — decrease/increase joint angle","<b>Abduction/Adduction</b> — away from/towards midline","<b>Supination/Pronation</b> — palm up/palm down","<b>Inversion/Eversion</b> — sole inward/outward","<b>Dorsiflexion/Plantar flexion</b> — toes up/toes down"]},
    {label:"Cell organelles",pts:["<b>Nucleus</b> — DNA, controls cell activities","<b>Mitochondria</b> — ATP production (powerhouse)","<b>Ribosome</b> — protein synthesis","<b>Golgi apparatus</b> — packaging & secretion","<b>Lysosome</b> — intracellular digestion","<b>Mitosis</b> — 2 identical diploid cells (46 chr) | <b>Meiosis</b> — 4 haploid gametes (23 chr)"]},
    {label:"Tissue types",table:{h:["Tissue","Features","Examples"],r:[["Epithelial","Avascular; covers surfaces","Skin, GI lining, alveoli"],["Connective","Abundant; supports & binds","Bone, cartilage, blood"],["Muscle","Contractile","Cardiac, skeletal, smooth"],["Nervous","Conducts impulses","Brain, spinal cord, nerves"]]}},
    {label:"Cartilage",table:{h:["Type","Location","Feature"],r:[["Hyaline","Articular surfaces, trachea","Most common; smooth"],["Fibrocartilage","IV discs, symphysis pubis","Strongest; compression-resistant"],["Elastic","Pinna, epiglottis","Flexible; springs back"]]}}
  ],warn:["Mitosis = 2 cells (somatic) | Meiosis = 4 cells (gametes) — frequently confused in MCQs"],clinical:["ROM exercises use all movement terms — document correctly","Cancer = uncontrolled mitosis — key to oncology nursing"],mcqs:[{q:"Mitosis produces how many daughter cells?",o:["1","2","4","8"],a:1,e:"Mitosis produces 2 genetically identical diploid daughter cells."},{q:"The sagittal plane divides the body into:",o:["Front & back","Left & right","Top & bottom","Inner & outer"],a:1,e:"The sagittal (median) plane divides body into left and right halves."},{q:"'Distal' means:",o:["Closer to trunk","Farther from trunk","Towards midline","Near surface"],a:1,e:"Distal = farther from the point of origin or trunk."}]},

  {num:2,title:"Respiratory System",hrs:6,sections:[
    {label:"Organs of respiration",pts:["<b>Upper tract:</b> Nose → Nasopharynx → Oropharynx → Larynx","<b>Lower tract:</b> Trachea → Bronchi → Bronchioles → Alveoli","<b>Trachea:</b> 10–12 cm; C-shaped cartilage rings; bifurcates at <b>carina</b> (T4/T5)","<b>Right lung:</b> 3 lobes | <b>Left lung:</b> 2 lobes (cardiac notch present)","<b>Pleura:</b> Visceral (covers lung) + Parietal (lines thorax); pleural fluid between","<b>Alveoli:</b> ~300 million; Type I (gas exchange), Type II (surfactant — prevents collapse)"]},
    {label:"Muscles of respiration",pts:["<b>Primary:</b> Diaphragm — contracts and descends → ↑ thoracic volume → inspiration","<b>Secondary:</b> External intercostals — raise ribs during inspiration","<b>Forced expiration:</b> Internal intercostals + abdominal muscles"]}
  ],warn:["Right lung = 3 lobes | Left lung = 2 lobes — most common anatomy MCQ trap"],clinical:["ET tube must be 2–3 cm above carina — too deep = right main bronchus intubation","Surfactant deficiency in prematurity → Respiratory Distress Syndrome (RDS)"],mcqs:[{q:"The carina is at the level of:",o:["T1–T2","T2–T3","T4–T5","T6–T7"],a:2,e:"The trachea bifurcates at the carina at T4–T5 (sternal angle)."},{q:"Surfactant is produced by:",o:["Type I pneumocytes","Type II pneumocytes","Goblet cells","Alveolar macrophages"],a:1,e:"Type II pneumocytes produce surfactant, reducing surface tension to prevent alveolar collapse."},{q:"The right lung has:",o:["1 lobe","2 lobes","3 lobes","4 lobes"],a:2,e:"The right lung has 3 lobes: upper, middle, and lower."}]},

  {num:3,title:"Digestive System",hrs:6,sections:[
    {label:"Alimentary canal sequence",pts:["Mouth → Pharynx → Oesophagus (25 cm) → Stomach → Small intestine → Large intestine → Rectum → Anus","<b>Stomach:</b> regions — cardia, fundus, body, pylorus; secretes HCl + pepsin","<b>Small intestine (~6 m):</b> Duodenum → Jejunum → Ileum; villi & microvilli ↑ absorption surface","<b>Large intestine (~1.5 m):</b> Caecum → Colon (ascending → transverse → descending → sigmoid) → Rectum"]},
    {label:"Accessory organs",table:{h:["Organ","Key functions"],r:[["Liver (largest gland)","Bile production, detoxification, glycogen storage, clotting factors"],["Gallbladder","Stores & concentrates bile; releases on fat ingestion"],["Pancreas","Exocrine: amylase/lipase/trypsin | Endocrine: insulin (β) / glucagon (α)"],["Salivary glands","Salivary amylase — starts carbohydrate digestion in mouth"]]}}
  ],warn:["Pancreas = BOTH exocrine AND endocrine — both functions tested together in MCQs"],clinical:["McBurney's point (1/3 from ASIS to umbilicus) = appendix — tenderness in appendicitis","NG tube insertion: 25 cm oesophagus — know 3 natural constrictions"],mcqs:[{q:"Which pancreatic cells produce insulin?",o:["Alpha cells","Beta cells","Delta cells","Acinar cells"],a:1,e:"Beta cells of the Islets of Langerhans produce insulin."},{q:"Primary site of nutrient absorption?",o:["Duodenum","Jejunum","Ileum","Caecum"],a:1,e:"The jejunum has the most villi and is the primary site of nutrient absorption."},{q:"Bile is stored in the:",o:["Liver","Pancreas","Gallbladder","Duodenum"],a:2,e:"Bile is produced in the liver but stored and concentrated in the gallbladder."}]},

  {num:4,title:"Circulatory & Lymphatic System",hrs:6,sections:[
    {label:"Heart anatomy",pts:["Located in mediastinum; apex at 5th ICS, mid-clavicular line (left)","<b>Layers:</b> Pericardium → Myocardium → Endocardium","<b>4 chambers:</b> RA → RV → LA → LV; LV has thickest wall (systemic circulation)"]},
    {label:"Heart valves",table:{h:["Valve","Side","Direction"],r:[["Tricuspid (3 cusps)","Right AV","RA → RV"],["Pulmonary semilunar","Right","RV → Pulmonary artery"],["Mitral/Bicuspid (2 cusps)","Left AV","LA → LV"],["Aortic semilunar","Left","LV → Aorta"]]}},
    {label:"Conducting system",pts:["<b>SA node</b> (pacemaker, right atrium wall) — intrinsic rate 60–100 bpm","SA → <b>AV node</b> (delay 0.1s) → <b>Bundle of His</b> → <b>Bundle branches</b> → <b>Purkinje fibres</b>","Backup rates: AV node 40–60 bpm | Purkinje fibres 20–40 bpm"]},
    {label:"IV access & blood values",pts:["<b>Preferred IV site:</b> Median cubital vein (antecubital fossa) — large & stable","Others: Cephalic vein, Basilic vein, Dorsal hand veins"],table:{h:["Component","Normal value"],r:[["Hb (male)","13.5–17.5 g/dL"],["Hb (female)","12.0–15.5 g/dL"],["WBC","4,000–11,000/µL"],["Platelets","1,50,000–4,50,000/µL"]]}}
  ],warn:["Tricuspid = RIGHT (3 cusps) | Mitral = LEFT (2 cusps/bicuspid) — most common exam confusion"],clinical:["Cardiac auscultation: Aortic 2nd ICS right, Pulmonary 2nd ICS left, Tricuspid lower-left sternal, Mitral 5th ICS MCL"],mcqs:[{q:"The pacemaker of the heart is the:",o:["AV node","Bundle of His","SA node","Purkinje fibres"],a:2,e:"The sinoatrial (SA) node generates the cardiac impulse at 60–100 bpm."},{q:"The mitral valve separates:",o:["RA & RV","LA & LV","RV & pulmonary artery","LV & aorta"],a:1,e:"The mitral (bicuspid) valve is the left AV valve separating LA from LV."},{q:"Preferred vein for IV cannulation:",o:["Basilic","Cephalic","Median cubital","Femoral"],a:2,e:"The median cubital vein in the antecubital fossa is most preferred."}]},

  {num:5,title:"Endocrine System",hrs:4,sections:[
    {label:"Glands & hormones",table:{h:["Gland","Hormones","Effect"],r:[["Hypothalamus","Releasing/inhibiting hormones","Master regulator"],["Anterior pituitary","GH, TSH, ACTH, FSH, LH, Prolactin","Controls other glands"],["Posterior pituitary","ADH, Oxytocin","Water retention; uterine contractions"],["Thyroid","T3, T4, Calcitonin","Metabolism; ↓ blood Ca²⁺"],["Parathyroid (×4)","PTH","↑ blood Ca²⁺"],["Adrenal cortex","Cortisol, Aldosterone","Stress; Na⁺ retention"],["Adrenal medulla","Adrenaline, Noradrenaline","Fight-or-flight"],["Pancreas β-cells","Insulin","↓ blood glucose"],["Pancreas α-cells","Glucagon","↑ blood glucose"],["Pineal","Melatonin","Sleep-wake cycle"]]}}
  ],warn:["PTH ↑ calcium (parathyroid) | Calcitonin ↓ calcium (thyroid) — opposite glands, opposite effects"],clinical:["Thyroid storm, DKA, Addisonian crisis = endocrine emergencies","Never stop steroids abruptly — Addisonian crisis risk"],mcqs:[{q:"ADH is secreted by the:",o:["Anterior pituitary","Posterior pituitary","Adrenal cortex","Thyroid"],a:1,e:"ADH is produced in the hypothalamus and released from the posterior pituitary."},{q:"Which hormone RAISES blood calcium?",o:["Calcitonin","Insulin","PTH","Aldosterone"],a:2,e:"PTH (parathormone) from parathyroid glands raises blood calcium levels."},{q:"Aldosterone primarily acts on:",o:["Liver","Kidney tubules","Heart","Lungs"],a:1,e:"Aldosterone acts on kidney distal tubules — retains Na⁺, excretes K⁺."}]},

  {num:6,title:"Sensory Organs",hrs:4,sections:[
    {label:"Skin",pts:["<b>Epidermis</b> — avascular, keratinised, 5 layers (basale to corneum)","<b>Dermis</b> — blood vessels, nerves, sweat glands, hair follicles","<b>Hypodermis</b> — adipose tissue; site of SC injections","Functions: protection, temperature regulation, sensation, vitamin D synthesis"]},
    {label:"Eye",pts:["Light path: Cornea → Aqueous humour → Lens → Vitreous humour → Retina → Optic nerve","<b>Rods</b> — dim/night vision | <b>Cones</b> — colour vision (3 types)","<b>Aqueous humour</b> drains via Canal of Schlemm — obstruction → Glaucoma (↑ IOP)"]},
    {label:"Ear",pts:["<b>Outer:</b> Pinna → External auditory canal → Tympanic membrane","<b>Middle:</b> Ossicles — <b>Malleus → Incus → Stapes</b> (MIS) — smallest bones","<b>Inner:</b> Cochlea (hearing) | Semicircular canals + utricle + saccule (balance)"]}
  ],warn:["Ossicle order: Malleus→Incus→Stapes (MIS) | Rods = night vision, Cones = colour — classic MCQ"],clinical:["Glaucoma = raised IOP from blocked aqueous drainage — medical emergency","Check tympanic membrane integrity before ear irrigation"],mcqs:[{q:"Balance is controlled by the:",o:["Cochlea","Semicircular canals","Organ of Corti","Tympanic membrane"],a:1,e:"Semicircular canals, utricle, and saccule of the inner ear control balance."},{q:"SC injections are given into:",o:["Epidermis","Dermis","Hypodermis","Muscle"],a:2,e:"Subcutaneous injections are given into the hypodermis (fat layer)."},{q:"Aqueous humour drains via:",o:["Cornea","Canal of Schlemm","Lens","Vitreous chamber"],a:1,e:"Aqueous humour drains through the Canal of Schlemm; blockage → glaucoma."}]},

  {num:7,title:"Musculoskeletal System",hrs:10,sections:[
    {label:"Skeleton — key facts",pts:["<b>206 bones</b> in adults | 270–300 in newborns (many bones fuse during development)","<b>Axial (80):</b> Skull (22) + Vertebral column (26) + Thoracic cage (25)","<b>Appendicular (126):</b> Upper limbs (60) + Lower limbs (60) + Girdles (6)"]},
    {label:"Joints",table:{h:["Type","Mobility","Example"],r:[["Fibrous (synarthrosis)","Immovable","Skull sutures"],["Cartilaginous (amphiarthrosis)","Slightly movable","Symphysis pubis, IV discs"],["Synovial (diarthrosis)","Freely movable","Knee, hip, shoulder"]]}},
    {label:"IM injection sites",table:{h:["Site","Age group","Safety note"],r:[["Ventrogluteal","All ages — PREFERRED","Safest — no major nerves or vessels"],["Vastus lateralis","Infants & children","No major nerves nearby — paediatric first choice"],["Deltoid","Adults (small volumes)","Lateral upper arm"],["Dorsogluteal","Avoid if possible","Sciatic nerve risk"]]}}
  ],warn:["Ventrogluteal = SAFEST IM site | Dorsogluteal = AVOID (sciatic nerve) — top exam topic"],clinical:["Ventrogluteal now recommended for ALL age groups","206 adult bones; newborns have more (bones haven't fused yet)"],mcqs:[{q:"Safest IM injection site:",o:["Dorsogluteal","Deltoid","Ventrogluteal","Rectus femoris"],a:2,e:"Ventrogluteal is safest — free from sciatic nerve and superior gluteal artery."},{q:"Adult human skeleton has:",o:["200","206","212","220"],a:1,e:"The adult human skeleton has 206 bones."},{q:"Preferred IM site for infants:",o:["Deltoid","Dorsogluteal","Ventrogluteal","Vastus lateralis"],a:3,e:"Vastus lateralis (anterolateral thigh) is preferred for infants and young children."}]},

  {num:8,title:"Renal System",hrs:5,sections:[
    {label:"Kidney & urinary tract",pts:["<b>Location:</b> Retroperitoneal; right kidney slightly lower than left (displaced by liver)","<b>Structure:</b> Cortex (outer) → Medulla (pyramids) → Pelvis → Ureter","<b>Nephron (functional unit):</b> Bowman's capsule + Glomerulus + PCT → Loop of Henle → DCT → Collecting duct","<b>Ureters:</b> 25–30 cm; 3 natural narrowings — PUJ, pelvic brim, VUJ (stones lodge here)"]},
    {label:"Male vs female urethra",table:{h:["","Male","Female"],r:[["Length","~20 cm","~4 cm"],["UTI risk","Lower","Higher (short urethra)"],["Catheter size","14–16 Fr","12–14 Fr"]]}}
  ],warn:["Short female urethra (~4 cm) = higher UTI incidence — classic MCQ rationale question"],clinical:["Normal urine output: 30–50 mL/hr (0.5–1 mL/kg/hr)","Oliguria < 30 mL/hr — report immediately — renal dysfunction or hypovolaemia"],mcqs:[{q:"Functional unit of the kidney:",o:["Glomerulus","Nephron","Tubule","Ureter"],a:1,e:"The nephron is the structural and functional unit of the kidney."},{q:"Why are women more prone to UTIs?",o:["Hormonal","Shorter urethra","Wider urethra","Bladder anatomy"],a:1,e:"Female urethra (~4 cm) is much shorter than male (~20 cm) — bacteria migrate more easily."},{q:"Kidney stones most commonly lodge at:",o:["Renal pelvis","PUJ, pelvic brim, VUJ","Collecting duct","Renal cortex"],a:1,e:"Calculi lodge at 3 natural narrowings: pelvi-ureteric junction, pelvic brim, vesico-ureteric junction."}]},

  {num:9,title:"Reproductive System",hrs:5,sections:[
    {label:"Female reproductive system",pts:["<b>Ovaries:</b> produce ova + oestrogen + progesterone","<b>Fallopian tubes:</b> 10 cm; parts — infundibulum, ampulla, isthmus; <b>fertilisation = AMPULLA</b>","<b>Uterus:</b> 3 layers — Perimetrium → Myometrium → Endometrium (shed in menstruation)","<b>Vagina:</b> 8–10 cm; acidic pH (Lactobacillus protection)"]},
    {label:"Male reproductive system",pts:["<b>Testes:</b> in scrotum — 2°C below core body temperature (needed for spermatogenesis)","<b>Sperm path:</b> Testes → Epididymis → Vas deferens → Ejaculatory duct → Urethra","<b>Accessory glands:</b> Seminal vesicles + Prostate + Bulbourethral glands → semen"]}
  ],warn:["Fertilisation = ampulla of fallopian tube | Implantation = endometrium of uterus — two distinct sites"],clinical:["Ectopic pregnancy = implantation outside uterus — obstetric emergency","Perineal anatomy essential for catheterisation, postnatal care, episiotomy care"],mcqs:[{q:"Fertilisation normally occurs in the:",o:["Uterus","Ovary","Ampulla of fallopian tube","Cervix"],a:2,e:"Fertilisation normally occurs in the ampulla (widest part) of the fallopian tube."},{q:"Testes are in the scrotum because:",o:["Easier access","Spermatogenesis needs 2°C below core temp","Hormonal reasons","Protective position"],a:1,e:"Spermatogenesis requires ~2°C below core body temperature."},{q:"Endometrium is shed during:",o:["Ovulation","Fertilisation","Menstruation","Implantation"],a:2,e:"The endometrium (inner uterine lining) is shed during menstruation when no fertilisation occurs."}]},

  {num:10,title:"Nervous System",hrs:6,sections:[
    {label:"Divisions",pts:["<b>CNS:</b> Brain + Spinal cord","<b>PNS:</b> 12 cranial nerves + 31 pairs of spinal nerves","<b>ANS:</b> Sympathetic (fight or flight) + Parasympathetic (rest and digest)"]},
    {label:"Brain regions",table:{h:["Region","Key functions"],r:[["Cerebrum (largest)","Voluntary movement, sensation, speech, memory, personality"],["Cerebellum","Balance, coordination, fine motor control"],["Brainstem","Vital centres: RR, HR, BP, consciousness, swallowing"],["Hypothalamus","Thermoregulation, hunger, thirst, hormone control"],["Thalamus","Sensory relay station (all senses except smell"]]}},
    {label:"ANS comparison",table:{h:["Effect","Sympathetic","Parasympathetic"],r:[["Heart rate","↑ (tachycardia)","↓ (bradycardia)"],["Blood pressure","↑","↓"],["Bronchi","Dilates","Constricts"],["Pupils","Dilates (mydriasis)","Constricts (miosis)"],["GI motility","↓","↑"],["Neurotransmitter","Noradrenaline","Acetylcholine"]]}},
    {label:"Spinal cord & CSF",pts:["<b>Length:</b> ~45 cm; ends at <b>L1–L2</b> (conus medullaris)","<b>Lumbar puncture:</b> done at L3–L4 or L4–L5 — below cord","<b>CSF:</b> produced by choroid plexus in lateral ventricles","<b>Cushing's triad (raised ICP):</b> ↑ BP + bradycardia + irregular respirations"]}
  ],warn:["LP at L3–L4 or L4–L5 — NEVER above L2 | Cushing's triad = late & dangerous sign of raised ICP"],clinical:["GCS max = 15; score ≤8 = comatose → consider intubation","Vagus nerve (CN X) — controls heart, lungs, GI; bradycardia risk during suctioning (vasovagal)"],mcqs:[{q:"The spinal cord ends at:",o:["T12–L1","L1–L2","L3–L4","L4–L5"],a:1,e:"Spinal cord ends at L1–L2 (conus medullaris). LP done at L3–L4 or L4–L5 to avoid cord injury."},{q:"CSF is produced by the:",o:["Arachnoid villi","Pia mater","Choroid plexus","Dura mater"],a:2,e:"Choroid plexus in the lateral ventricles produces CSF."},{q:"Cushing's triad indicates:",o:["Hypoglycaemia","Raised intracranial pressure","Cardiac arrest","Spinal shock"],a:1,e:"Cushing's triad (hypertension + bradycardia + irregular breathing) = raised ICP — emergency."}]}
];

const logbookData={
  1:{label:"Semester I — Nursing Foundation",groups:[
    {title:"I. Communication & Documentation",skills:["Communication with patient/family","Verbal report","Recording/Documentation"]},
    {title:"II. Vital Signs",skills:["Temperature — Oral","Temperature — Axillary","Temperature — Rectal","Temperature — Tympanic","Pulse — Radial","Pulse — Apical","Respiration rate","Blood Pressure"]},
    {title:"III. Hot & Cold Applications",skills:["Cold Compress","Hot Compress","Ice Cap","Tepid Sponge"]},
    {title:"IV. Health Assessment",skills:["Health History","Physical Assessment (system-wise)","Documentation of findings"]},
    {title:"V. Infection Control",skills:["Hand hygiene (Wash & Rub)","PPE usage"]},
    {title:"VI. Comfort & Positioning",skills:["Open Bed making","Occupied Bed making","Post-operative Bed","Supine Position","Fowler's Position","Lateral Position","Prone Position","Trendelenburg Position","Lithotomy Position","Moving/Turning/Logrolling patient","Pain Assessment"]},
    {title:"VII. Safety",skills:["Side rail use","Physical Restraint","Fall risk assessment & post-fall"]},
    {title:"VIII. Admission & Discharge",skills:["Admission procedure","Discharge procedure","Transfer within hospital"]},
    {title:"IX. Mobility",skills:["Ambulation","Transfer bed to wheelchair","Transfer bed to stretcher","ROM Exercises"]},
    {title:"X. Patient Education",skills:["Individual Patient Teaching"]}
  ]},
  2:{label:"Semester II — Nursing Foundation",groups:[
    {title:"XI. Hygiene",skills:["Sponge/Bed bath","Pressure Injury Assessment","Oral hygiene","Hair wash","Perineal/Meatal care","Urinary catheter care"]},
    {title:"XII. Nursing Process",skills:["Assessment & nursing diagnosis","Planning nursing care","Implementation","Evaluation"]},
    {title:"XIII. Nutrition & Fluid",skills:["24-hour dietary recall","IV Infusion Plan","Nasogastric tube feeding","Intake & output chart"]},
    {title:"XIV. Medication Administration",skills:["Oral medications","Intramuscular (IM)","Subcutaneous (SC)","Rectal suppositories"]},
    {title:"XV. Oxygenation",skills:["Deep breathing & coughing","Oxygen — face mask","Oxygen — nasal prongs"]},
    {title:"XVI. First Aid & Bandages",skills:["Basic CPR","Circular bandage","Spiral bandage","Figure of eight bandage","Arm sling","Abdominal binder"]}
  ]}
};

const flashcards={
  anatomy:[
    {q:"Normal adult resting pulse rate?",a:"60–100 beats per minute (bpm)"},
    {q:"Valve between left atrium and left ventricle?",a:"Mitral (bicuspid) valve"},
    {q:"SA node is called the?",a:"Pacemaker of the heart — fires at 60–100 bpm"},
    {q:"Normal adult blood pressure?",a:"< 120/80 mmHg"},
    {q:"Brain part that controls balance & coordination?",a:"Cerebellum"},
    {q:"Functional unit of the kidney?",a:"Nephron (Bowman's capsule + glomerulus + tubules)"},
    {q:"Which organ produces insulin?",a:"Pancreas — beta cells of Islets of Langerhans"},
    {q:"Normal adult respiratory rate?",a:"12–20 breaths per minute"},
    {q:"Largest organ of the human body?",a:"Skin"},
    {q:"How many bones in adult human body?",a:"206 bones"},
    {q:"Fertilisation occurs in the?",a:"Ampulla of the fallopian tube"},
    {q:"Where is lumbar puncture (LP) performed?",a:"L3–L4 or L4–L5 (cord ends at L1–L2)"},
    {q:"Right lung — how many lobes?",a:"3 lobes (upper, middle, lower)"},
    {q:"Safest IM injection site?",a:"Ventrogluteal — no major nerves or vessels nearby"},
  ],
  physiology:[
    {q:"Normal GFR?",a:"~125 mL/min (180 L/day filtered)"},
    {q:"Primary stimulus for breathing?",a:"Rising CO₂ and falling pH (not low O₂)"},
    {q:"Normal tidal volume?",a:"~500 mL per normal breath"},
    {q:"Day of ovulation in a 28-day cycle?",a:"Day 14"},
    {q:"Normal serum potassium?",a:"3.5–5.0 mEq/L"},
    {q:"Normal serum sodium?",a:"135–145 mEq/L"},
    {q:"Normal blood pH?",a:"7.35–7.45"},
    {q:"Normal serum calcium?",a:"8.5–10.5 mg/dL"},
    {q:"Normal serum glucose (fasting)?",a:"70–100 mg/dL"},
    {q:"Cardiac output formula?",a:"CO = Heart Rate × Stroke Volume (~5 L/min normally)"},
  ],
  nursing:[
    {q:"ADPIE stands for?",a:"Assess → Diagnose → Plan → Implement → Evaluate"},
    {q:"WHO 5 moments of hand hygiene?",a:"Before patient | Before aseptic procedure | After fluid exposure | After patient | After surroundings"},
    {q:"CPR ratio (adults)?",a:"30 compressions : 2 breaths"},
    {q:"CPR compression rate?",a:"100–120 per minute"},
    {q:"CPR compression depth (adults)?",a:"At least 5 cm (2 inches)"},
    {q:"Normal oral temperature?",a:"36.4–37.4°C"},
    {q:"Fowler's position?",a:"45–60° (High Fowler's = 90°; used for dyspnoea)"},
    {q:"Oliguria definition?",a:"Urine output < 30 mL/hr — report immediately"},
    {q:"SBAR stands for?",a:"Situation → Background → Assessment → Recommendation"},
    {q:"Normal adult urine output?",a:"30–50 mL/hr (0.5–1 mL/kg/hr)"},
    {q:"Lateral position used for?",a:"Unconscious patient (airway protection), post-op, pressure relief"},
    {q:"Trendelenburg position?",a:"Head down, legs elevated — used in hypotension/shock"},
  ]
};

const quizTopics=[
  {id:'anatomy',label:'Anatomy',icon:'🦴',color:'#E1F5EE',desc:'10 questions · Sem I'},
  {id:'pharmacology',label:'Pharmacology',icon:'💊',color:'#EEEDFE',desc:'10 questions'},
  {id:'child',label:'Child Health',icon:'👶',color:'#FAEEDA',desc:'10 questions'},
  {id:'community',label:'Community Health',icon:'🏘',color:'#E6F1FB',desc:'10 questions'},
  {id:'medical',label:'Adult Health',icon:'🩺',color:'#FAECE7',desc:'10 questions'},
  {id:'midwifery',label:'Midwifery / OBG',icon:'🤱',color:'#FBEAF0',desc:'10 questions'},
  {id:'mental',label:'Mental Health',icon:'🧠',color:'#EAF3DE',desc:'10 questions'},
];

const quizBank={
  anatomy:[
    {q:"SA node intrinsic rate?",o:["40–60 bpm","60–100 bpm","100–120 bpm","20–40 bpm"],a:1,e:"SA node fires at 60–100 bpm."},
    {q:"Right lung has how many lobes?",o:["1","2","3","4"],a:2,e:"Right = 3 lobes; left = 2 lobes."},
    {q:"Functional unit of the kidney?",o:["Glomerulus","Nephron","Tubule","Ureter"],a:1,e:"Nephron is the structural and functional unit."},
    {q:"Safest IM injection site?",o:["Dorsogluteal","Deltoid","Ventrogluteal","Vastus lateralis"],a:2,e:"Ventrogluteal is safest — free of major nerves and vessels."},
    {q:"Fertilisation occurs in the?",o:["Uterus","Ovary","Ampulla of fallopian tube","Cervix"],a:2,e:"Fertilisation normally occurs in the ampulla."},
    {q:"LP is performed at?",o:["L1–L2","L2–L3","L3–L4","T12–L1"],a:2,e:"LP at L3–L4 or L4–L5, below the cord (ends L1–L2)."},
    {q:"Carina is at level?",o:["T1–T2","T4–T5","T8–T9","T12"],a:1,e:"Carina at T4–T5 (sternal angle / angle of Louis)."},
    {q:"Mitral valve separates?",o:["RA & RV","LA & LV","RV & pulmonary artery","LV & aorta"],a:1,e:"Mitral (bicuspid) = left AV valve."},
    {q:"Adult human body has?",o:["200 bones","206 bones","212 bones","220 bones"],a:1,e:"Adults have 206 bones."},
    {q:"Cushing's triad indicates?",o:["Hypoglycaemia","Raised ICP","Cardiac arrest","Spinal shock"],a:1,e:"↑BP + bradycardia + irregular breathing = raised ICP."},
  ],
  pharmacology:[
    {q:"Fastest drug action route?",o:["Oral","SC","IV","IM"],a:2,e:"IV = directly into bloodstream = fastest."},
    {q:"Aspirin is classified as?",o:["Opioid","NSAID","Antibiotic","Antifungal"],a:1,e:"Aspirin = NSAID (Non-Steroidal Anti-Inflammatory Drug)."},
    {q:"Primary organ of drug metabolism?",o:["Kidney","Lung","Liver","Intestine"],a:2,e:"Liver = primary site of drug metabolism."},
    {q:"Drug half-life means?",o:["Time to take effect","Time for 50% elimination","Duration of action","Peak time"],a:1,e:"Half-life = time for plasma concentration to fall 50%."},
    {q:"Morphine is classified as?",o:["NSAID","Opioid analgesic","Antipyretic","Antihistamine"],a:1,e:"Morphine = potent opioid analgesic."},
    {q:"An antagonist?",o:["Activates receptor","Blocks receptor","Amplifies agonist","Enhances metabolism"],a:1,e:"Antagonist binds receptor without activating it."},
    {q:"Anaphylaxis is?",o:["Side effect","Drug tolerance","Life-threatening allergic reaction","Idiosyncrasy"],a:2,e:"Anaphylaxis = severe, life-threatening hypersensitivity reaction."},
    {q:"Insulin is typically given by?",o:["Oral","IV only","Subcutaneous","IM only"],a:2,e:"Insulin = subcutaneous injection typically."},
    {q:"Pharmacokinetics studies?",o:["What drug does to body","What body does to drug","Drug interactions","Side effects"],a:1,e:"Pharmacokinetics = ADME (Absorption, Distribution, Metabolism, Excretion)."},
    {q:"Penicillin belongs to?",o:["Aminoglycoside","Beta-lactam","Macrolide","Fluoroquinolone"],a:1,e:"Penicillin = beta-lactam, acts on bacterial cell wall synthesis."},
  ],
  child:[
    {q:"Newborn normal respiratory rate?",o:["12–20/min","20–30/min","30–60/min","60–80/min"],a:2,e:"Newborn RR = 30–60 breaths/min."},
    {q:"ORT is used for?",o:["Fever","Diarrhoea & dehydration","Pneumonia","Malnutrition"],a:1,e:"ORT = primary treatment for dehydration from diarrhoea."},
    {q:"BCG vaccine given at?",o:["6 weeks","3 months","At birth","9 months"],a:2,e:"BCG given at birth."},
    {q:"IMNCI stands for?",o:["Integrated Management of Neonatal and Childhood Illness","Immunisation Manual for Newborn Care Initiative","Indian Management of Neonatal Care Index","Integrated Midwifery Neonatal Care Intervention"],a:0,e:"IMNCI = Integrated Management of Neonatal and Childhood Illness."},
    {q:"Anterior fontanelle closes by?",o:["3 months","6 months","12–18 months","24 months"],a:2,e:"Anterior fontanelle closes by 12–18 months."},
    {q:"SAM = WHZ score below?",o:["−1 SD","−2 SD","−3 SD","−4 SD"],a:2,e:"Severe Acute Malnutrition = WHZ < −3 SD."},
    {q:"Koplik's spots are seen in?",o:["Chickenpox","Measles","Rubella","Mumps"],a:1,e:"Koplik's spots are pathognomonic of measles."},
    {q:"Normal term birth weight?",o:["1.5–2 kg","2–2.5 kg","2.5–4 kg","4–5 kg"],a:2,e:"Normal term birth weight = 2.5–4 kg."},
    {q:"Febrile convulsions most common age?",o:["0–6 months","6 months–5 years","5–10 years","10–15 years"],a:1,e:"Febrile convulsions most common between 6 months and 5 years."},
    {q:"Play therapy helps children to?",o:["Administer medications","Assess growth","Reduce anxiety & support development","Prevent infection"],a:2,e:"Play therapy reduces hospital anxiety and supports normal development."},
  ],
  community:[
    {q:"PHC serves approximately?",o:["5,000","20,000–30,000","50,000","1,00,000"],a:1,e:"PHC = ~20,000–30,000 population in plains."},
    {q:"ASHA is part of?",o:["ICDS","NHM/NRHM","School Health","Mid-Day Meal"],a:1,e:"ASHA = community health worker under NHM."},
    {q:"IMR definition?",o:["Deaths <5 yr per 1000 LB","Deaths <1 yr per 1000 LB","Deaths <1 month per 1000 LB","Deaths per 100,000"],a:1,e:"IMR = deaths under 1 year per 1000 live births."},
    {q:"Alma Ata 1978 goal?",o:["Universal vaccination","Health for All by 2000 via PHC","ICDS","NHM"],a:1,e:"Alma Ata Declaration = Health for All through primary health care."},
    {q:"Cholera spreads via?",o:["Airborne","Faeco-oral","Direct contact","Vector-borne"],a:1,e:"Cholera = faeco-oral route through contaminated water/food."},
    {q:"Anganwadi centres are part of?",o:["NHM","ICDS","MGNREGS","JSY"],a:1,e:"Anganwadi = part of ICDS (Integrated Child Development Services)."},
    {q:"Incubation period means?",o:["Exposure to onset of symptoms","Duration of illness","Recovery time","Period of infectiousness"],a:0,e:"Incubation period = time between exposure and onset of symptoms."},
    {q:"Herd immunity achieved when?",o:["Everyone vaccinated","Only children vaccinated","Sufficient proportion immune","Virus mutates"],a:2,e:"Herd immunity = enough people immune to protect unvaccinated."},
    {q:"SHC serves?",o:["1,000","5,000","10,000","30,000"],a:1,e:"Sub-Health Centre serves ~5,000 population."},
    {q:"Epidemiology studies?",o:["Individual disease","Distribution & determinants of health","Lab diagnosis","Drug effects"],a:1,e:"Epidemiology = distribution, determinants, and control of disease in populations."},
  ],
  medical:[
    {q:"MI occurs due to?",o:["Excessive exercise","Coronary artery blockage","Viral infection","High potassium"],a:1,e:"MI = coronary artery blocked → myocardial ischaemia."},
    {q:"Max GCS score?",o:["10","13","15","18"],a:2,e:"Max GCS = 15 (Eyes 4 + Verbal 5 + Motor 6)."},
    {q:"Normal urine output per hour?",o:["10–20 mL","30–50 mL","60–80 mL","100 mL"],a:1,e:"Normal UO = 30–50 mL/hr."},
    {q:"Trousseau's sign indicates?",o:["Hypercalcaemia","Hypocalcaemia","Hypernatraemia","Hypokalaemia"],a:1,e:"Trousseau's sign (carpal spasm on BP cuff) = hypocalcaemia."},
    {q:"DKA most common in?",o:["Type 2 DM","Type 1 DM","Gestational DM","LADA"],a:1,e:"DKA = mainly Type 1 DM (absolute insulin deficiency)."},
    {q:"Peaked T waves on ECG?",o:["Hyponatraemia","Hyperkalaemia","Hypocalcaemia","Hypomagnesaemia"],a:1,e:"Hyperkalaemia (↑ K⁺) causes peaked T waves."},
    {q:"First priority post-operatively?",o:["Pain","Airway & breathing","Wound","IV site"],a:1,e:"ABC — Airway and breathing always first."},
    {q:"Classic PE presentation?",o:["Bradycardia + hypertension","Sudden dyspnoea + chest pain + hypoxia","Fever + cough","Abdominal pain"],a:1,e:"PE = sudden dyspnoea, pleuritic chest pain, haemoptysis, hypoxia."},
    {q:"Barrel chest in COPD is due to?",o:["Lung collapse","Air trapping & hyperinflation","Pleural effusion","Pulmonary fibrosis"],a:1,e:"Air trapping → hyperinflation → barrel chest."},
    {q:"Normal serum K⁺?",o:["2.5–3.5 mEq/L","3.5–5.0 mEq/L","5.0–6.5 mEq/L","1.5–2.5 mEq/L"],a:1,e:"Normal serum potassium = 3.5–5.0 mEq/L."},
  ],
  midwifery:[
    {q:"Full-term pregnancy duration?",o:["36 weeks","37 weeks","38–42 weeks","44 weeks"],a:2,e:"Full-term = 38–42 weeks from LMP."},
    {q:"Normal foetal heart rate?",o:["60–80 bpm","80–100 bpm","110–160 bpm","160–200 bpm"],a:2,e:"Normal FHR = 110–160 bpm."},
    {q:"Eclampsia is?",o:["Hypertension only","Proteinuria only","Seizures in pre-eclampsia patient","Normal BP with fits"],a:2,e:"Eclampsia = seizures in a pre-eclampsia patient."},
    {q:"APGAR assessed at?",o:["Birth only","1 & 5 minutes","10 minutes","15 minutes"],a:1,e:"APGAR at 1 minute and 5 minutes after birth."},
    {q:"Gravida means?",o:["No. of deliveries","No. of pregnancies","No. of live births","No. of abortions"],a:1,e:"Gravida = total number of pregnancies."},
    {q:"Placenta delivered within?",o:["2–5 min","5–30 min","30–60 min","1–2 hours"],a:1,e:"3rd stage of labour = within 5–30 minutes."},
    {q:"Colostrum is?",o:["At 6 weeks postpartum","First milk in first few days","During pregnancy only","After 1 month"],a:1,e:"Colostrum = first milk in days after delivery — rich in IgA."},
    {q:"Bishop's score assesses?",o:["Foetal well-being","Cervical readiness for induction","Amniotic fluid","Placental location"],a:1,e:"Bishop's score = cervical ripeness before induction."},
    {q:"Bloody show indicates?",o:["Rupture of membranes","True labour onset","Placenta praevia","Foetal distress"],a:1,e:"Bloody show = cervical ripening — sign of true labour."},
    {q:"Leopold's manoeuvres assess?",o:["FHR","Foetal lie, presentation & position","Cervical dilation","Amniotic fluid"],a:1,e:"Leopold's = 4-step abdominal palpation for foetal position."},
  ],
  mental:[
    {q:"Hallucinations are?",o:["False beliefs","Perceptions without external stimulus","Mood changes","Memory loss"],a:1,e:"Hallucinations = perceptions without external stimulus."},
    {q:"Delusions are?",o:["False sensory perceptions","Fixed false beliefs","Mood disturbances","Cognitive impairment"],a:1,e:"Delusions = fixed false beliefs not amenable to change."},
    {q:"Bipolar disorder involves?",o:["Delusions only","Alternating mania and depression","Anxiety only","Hallucinations"],a:1,e:"Bipolar disorder = alternating episodes of mania and depression."},
    {q:"MMSE screens for?",o:["Depression","Cognitive impairment","Anxiety","Personality disorder"],a:1,e:"MMSE screens for cognitive impairment/dementia."},
    {q:"ECT is primarily used for?",o:["Schizophrenia","Severe medication-resistant depression","Anxiety","Addiction"],a:1,e:"ECT = severe depression resistant to medication."},
    {q:"Haloperidol is a?",o:["Atypical antipsychotic","Typical (1st generation) antipsychotic","Antidepressant","Anxiolytic"],a:1,e:"Haloperidol = first-generation (typical) antipsychotic."},
    {q:"Suicide risk is highest during?",o:["Manic episode","Early recovery from depression","Psychotic episode","Acute anxiety"],a:1,e:"Risk highest in early recovery — energy returns before mood fully lifts."},
    {q:"OCD is characterised by?",o:["Delusions","Obsessions & compulsions","Mania","Hallucinations"],a:1,e:"OCD = recurrent obsessions (thoughts) + compulsions (behaviours)."},
    {q:"Therapeutic communication involves?",o:["Giving advice","Active listening & empathy","Prescribing medication","Documentation"],a:1,e:"Therapeutic communication = active listening + empathy + non-judgmental."},
    {q:"De-escalation in psychiatric emergencies?",o:["Restraint first","Calm verbal communication","Immediate sedation","Isolation"],a:1,e:"De-escalation = calm empathetic verbal communication + reduced stimulation."},
  ]
};

const mnemonics=[
  {title:"APGAR Score",word:"APGAR",items:[["A","Appearance (skin colour)"],["P","Pulse (heart rate)"],["G","Grimace (reflex irritability)"],["A","Activity (muscle tone)"],["R","Respiration"]]},
  {title:"Nursing Process",word:"ADPIE",items:[["A","Assessment"],["D","Diagnosis"],["P","Planning"],["I","Implementation"],["E","Evaluation"]]},
  {title:"Emergency Survey",word:"ABCDE",items:[["A","Airway"],["B","Breathing"],["C","Circulation"],["D","Disability (neuro)"],["E","Exposure"]]},
  {title:"Drug Phases",word:"ADME",items:[["A","Absorption"],["D","Distribution"],["M","Metabolism"],["E","Excretion"]]},
  {title:"Handover Tool",word:"SBAR",items:[["S","Situation"],["B","Background"],["A","Assessment"],["R","Recommendation"]]},
];

const refData={
  vitals:[["Temperature (oral)","Adult","36.4–37.4°C"],["Temperature (axillary)","Adult","35.9–36.9°C"],["Temperature (rectal)","Adult","37.0–37.9°C"],["Pulse","Adult","60–100 bpm"],["Pulse","Newborn","120–160 bpm"],["Pulse","Infant","80–140 bpm"],["Pulse","Child 1–5 yr","80–130 bpm"],["Respiration","Adult","12–20/min"],["Respiration","Newborn","30–60/min"],["Blood Pressure","Normal","< 120/80 mmHg"],["Blood Pressure","Hypertension","≥ 140/90 mmHg"],["Blood Pressure","Hypotension","< 90/60 mmHg"],["SpO₂","Normal","95–100%"],["SpO₂","Concerning","< 94%"],["Urine output","Adult","30–50 mL/hr"]],
  labs:[["Hb","Male","13.5–17.5 g/dL"],["Hb","Female","12.0–15.5 g/dL"],["Hb","Newborn","14–24 g/dL"],["WBC","Adult","4,000–11,000/µL"],["Platelets","Adult","1,50,000–4,50,000/µL"],["Sodium Na⁺","Serum","135–145 mEq/L"],["Potassium K⁺","Serum","3.5–5.0 mEq/L"],["Calcium Ca²⁺","Serum","8.5–10.5 mg/dL"],["Blood glucose","Fasting","70–100 mg/dL"],["BUN","Serum","7–20 mg/dL"],["Creatinine","Serum","0.6–1.2 mg/dL"],["pH","ABG","7.35–7.45"],["PaO₂","ABG","80–100 mmHg"],["PaCO₂","ABG","35–45 mmHg"],["HCO₃⁻","ABG","22–26 mEq/L"]],
  imm:[["BCG","At birth","0.1 mL intradermal — left upper arm"],["OPV-0","At birth","2 drops oral"],["Hep B-0","At birth","0.5 mL IM — right anterolateral thigh"],["OPV-1, DPT-1, Hib-1, Hep B-1","6 weeks","Per national schedule"],["OPV-2, DPT-2","10 weeks","Per schedule"],["OPV-3, DPT-3, IPV","14 weeks","Per schedule"],["MR-1, JE-1","9 months","0.5 mL SC — left upper arm"],["DPT Booster-1, MR-2","16–24 months","Per schedule"],["DPT Booster-2","5–6 years","0.5 mL IM"],["Td vaccine","10 & 16 years","0.5 mL IM"]],
  abbr:[["ADPIE","Assess, Diagnose, Plan, Implement, Evaluate"],["SBAR","Situation, Background, Assessment, Recommendation"],["ABG","Arterial Blood Gas"],["OSCE","Objective Structured Clinical Examination"],["PRN","Pro Re Nata (as needed)"],["IM / SC / IV / ID","Intramuscular / Subcutaneous / Intravenous / Intradermal"],["ORT","Oral Rehydration Therapy"],["INC","Indian Nursing Council"],["RGUHS","Rajiv Gandhi University of Health Sciences"],["PHC / SHC / CHC","Primary / Sub / Community Health Centre"],["ASHA","Accredited Social Health Activist"],["ANM","Auxiliary Nurse Midwife"],["IMNCI","Integrated Management of Neonatal and Childhood Illness"],["GCS","Glasgow Coma Scale (max 15: E4 V5 M6)"],["CPR","Cardiopulmonary Resuscitation"],["AED","Automated External Defibrillator"],["NHM","National Health Mission"],["ICDS","Integrated Child Development Services"]]
};
