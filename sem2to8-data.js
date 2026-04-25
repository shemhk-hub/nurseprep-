// ═══════════════════════════════════════════════════════
// SEMESTER 2 — 8 COMPLETE NOTES DATA (INC 2020 / RGUHS)
// ═══════════════════════════════════════════════════════

const sem2Units = [
  {num:1, sem:2, subj:"Applied Biochemistry", code:"BIOC 205", title:"Carbohydrate & Lipid Metabolism", hrs:10,
   sections:[
     {label:"Carbohydrates",pts:[
       "<b>Carbohydrates:</b> C, H, O in ratio 1:2:1 — primary energy source (4 kcal/g)",
       "<b>Monosaccharides:</b> glucose, fructose, galactose — absorbed directly",
       "<b>Disaccharides:</b> sucrose (glucose+fructose), lactose (glucose+galactose), maltose (glucose+glucose)",
       "<b>Polysaccharides:</b> starch (plant storage), glycogen (animal/human storage in liver & muscle), cellulose (dietary fibre)",
       "<b>Blood glucose:</b> normal fasting 70–100 mg/dL; postprandial < 140 mg/dL",
       "<b>Glycolysis:</b> glucose → pyruvate → acetyl CoA → Krebs cycle → ATP (energy)",
       "<b>Glycogenesis:</b> glucose → glycogen (storage) | <b>Glycogenolysis:</b> glycogen → glucose (release)",
       "<b>Gluconeogenesis:</b> synthesis of new glucose from non-carbohydrate sources (amino acids, lactate, glycerol)"
     ]},
     {label:"Lipid metabolism",pts:[
       "<b>Lipids:</b> energy-dense (9 kcal/g); fat-soluble vitamins A, D, E, K require lipids",
       "<b>LDL ('bad' cholesterol):</b> carries cholesterol TO cells — high LDL → atherosclerosis",
       "<b>HDL ('good' cholesterol):</b> carries cholesterol FROM cells BACK to liver — protective",
       "<b>Normal lipid values:</b> Total cholesterol < 200 mg/dL | LDL < 100 mg/dL | HDL > 60 mg/dL | TG < 150 mg/dL",
       "<b>Beta-oxidation:</b> breakdown of fatty acids to produce acetyl CoA → Krebs cycle → ATP",
       "<b>Ketone bodies:</b> acetoacetate, beta-hydroxybutyrate, acetone — produced in starvation/DKA → ketonuria, fruity breath"
     ]},
     {label:"Normal values to memorise",table:{h:["Test","Normal range","Clinical significance"],r:[
       ["Fasting blood glucose","70–100 mg/dL","Diabetes > 126 mg/dL fasting"],
       ["HbA1c","< 5.7% (normal)","Diabetes management (target < 7%)"],
       ["Total cholesterol","< 200 mg/dL","CV risk assessment"],
       ["LDL","< 100 mg/dL","Primary target in dyslipidaemia"],
       ["HDL","> 60 mg/dL (protective)","Low HDL = CV risk factor"],
       ["Triglycerides","< 150 mg/dL","Raised in metabolic syndrome"],
     ]}}
   ],
   warn:["LDL = 'Lousy' (bad) — takes cholesterol TO walls | HDL = 'Healthy' (good) — takes it AWAY — classic MCQ","Glycogenesis = making glycogen | Glycogenolysis = breaking glycogen — opposite processes"],
   clinical:["DKA: fruity breath = acetone; Kussmaul breathing = metabolic acidosis compensation","Lactose intolerance = deficiency of lactase enzyme → bloating, diarrhoea after milk"],
   mcqs:[
     {q:"Normal fasting blood glucose?",o:["50–70 mg/dL","70–100 mg/dL","100–126 mg/dL","126–200 mg/dL"],a:1,e:"Normal fasting blood glucose = 70–100 mg/dL."},
     {q:"HDL is known as 'good cholesterol' because:",o:["It provides more energy","It carries cholesterol away from walls to liver","It dissolves in water","It is produced by the liver"],a:1,e:"HDL removes cholesterol from arterial walls and returns it to the liver — protective against atherosclerosis."},
     {q:"Ketone bodies are produced in:",o:["Normal fed state","Starvation and DKA","After exercise","During sleep"],a:1,e:"Ketone bodies (acetoacetate, beta-hydroxybutyrate) are produced in starvation and DKA when fat is used as primary fuel."}
   ]},

  {num:2, sem:2, subj:"Applied Biochemistry", code:"BIOC 205", title:"Protein, Enzyme & Vitamin Metabolism", hrs:10,
   sections:[
     {label:"Proteins",pts:[
       "<b>Proteins:</b> made of amino acids — 20 types; 9 essential (must come from diet)",
       "<b>Energy value:</b> 4 kcal/g — same as carbohydrates",
       "<b>Functions:</b> structural (collagen), enzymatic, transport (Hb), immune (antibodies), hormonal (insulin)",
       "<b>Nitrogen balance:</b> positive (growth, pregnancy) | negative (malnutrition, burns, surgery)",
       "<b>Serum albumin:</b> normal 3.5–5 g/dL — low albumin = malnutrition, liver disease, nephrotic syndrome",
       "<b>Serum total protein:</b> normal 6–8 g/dL"
     ]},
     {label:"Enzymes",pts:[
       "<b>Enzymes:</b> biological catalysts — proteins; lower activation energy; specific to substrate",
       "<b>Key nursing-relevant enzymes and their significance:</b>",
       "<b>Troponin I/T:</b> rises in MI — most specific cardiac marker; rises 3–6 hrs, peaks 24 hrs",
       "<b>CK-MB:</b> rises in MI — peaks 24 hrs",
       "<b>LDH:</b> rises in MI, haemolysis, liver disease",
       "<b>AST/SGOT & ALT/SGPT:</b> liver enzymes — raised in hepatitis, liver injury; ALT more specific for liver",
       "<b>Amylase & Lipase:</b> elevated in pancreatitis — lipase more specific",
       "<b>ALP (Alkaline Phosphatase):</b> raised in bone disease, liver disease, obstructive jaundice"
     ]},
     {label:"Vitamins",table:{h:["Vitamin","Type","Deficiency disease","Source"],r:[
       ["A (Retinol)","Fat-soluble","Night blindness, xerophthalmia","Liver, egg yolk, dairy"],
       ["B1 (Thiamine)","Water-soluble","Beri-beri (dry: neurological; wet: cardiac)","Whole grains, legumes"],
       ["B2 (Riboflavin)","Water-soluble","Angular stomatitis, cheilosis","Milk, eggs, meat"],
       ["B3 (Niacin)","Water-soluble","Pellagra (Dermatitis, Diarrhoea, Dementia — 3 Ds)","Meat, fish, peanuts"],
       ["B6 (Pyridoxine)","Water-soluble","Peripheral neuropathy","Meat, poultry, fish"],
       ["B9 (Folate)","Water-soluble","Megaloblastic anaemia; NTDs in pregnancy","Green leafy vegetables"],
       ["B12 (Cobalamin)","Water-soluble","Megaloblastic anaemia + subacute combined degeneration","Animal products only"],
       ["C (Ascorbic acid)","Water-soluble","Scurvy (bleeding gums, perifollicular haemorrhage)","Citrus fruits, amla"],
       ["D (Calciferol)","Fat-soluble","Rickets (children), Osteomalacia (adults)","Sunlight, fish liver oil"],
       ["E (Tocopherol)","Fat-soluble","Haemolytic anaemia in premature infants","Vegetable oils, nuts"],
       ["K (Phylloquinone)","Fat-soluble","Bleeding disorder (↓ clotting factors)","Green leafy vegetables"],
     ]}}
   ],
   warn:["Fat-soluble vitamins A,D,E,K — stored in body, can accumulate and become toxic | Water-soluble B,C — not stored, daily intake needed","Pellagra = 3 Ds: Dermatitis + Diarrhoea + Dementia (Niacin B3 deficiency)"],
   clinical:["Folate supplement started pre-conception — prevents neural tube defects (spina bifida)","Vitamin K given IM at birth — prevents haemorrhagic disease of newborn","B12 deficiency: vegetarians and vegans at highest risk — monitor and supplement"],
   mcqs:[
     {q:"Scurvy is caused by deficiency of:",o:["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"],a:2,e:"Scurvy = Vitamin C (ascorbic acid) deficiency — bleeding gums, perifollicular haemorrhage."},
     {q:"Pellagra is caused by deficiency of:",o:["Niacin (B3)","Thiamine (B1)","Riboflavin (B2)","Pyridoxine (B6)"],a:0,e:"Pellagra = Niacin (B3) deficiency — the 3 Ds: Dermatitis, Diarrhoea, Dementia."},
     {q:"Most specific enzyme marker for acute MI?",o:["LDH","CK-MB","Troponin I/T","AST"],a:2,e:"Troponin I/T is the most specific and sensitive cardiac marker for MI."}
   ]},

  {num:3, sem:2, subj:"Applied Nutrition & Dietetics", code:"NUTR 210", title:"Nutrition Fundamentals & Therapeutic Diets", hrs:12,
   sections:[
     {label:"Macronutrients",table:{h:["Nutrient","Energy","RDA (adult)","Sources"],r:[
       ["Carbohydrates","4 kcal/g","55–60% of total energy","Cereals, rice, wheat, potato"],
       ["Proteins","4 kcal/g","0.8–1 g/kg body weight/day","Meat, fish, eggs, legumes, dairy"],
       ["Fats","9 kcal/g","20–30% of total energy","Oils, nuts, dairy, meat"],
       ["Dietary fibre","0 kcal","25–30 g/day","Fruits, vegetables, whole grains"],
     ]}},
     {label:"Balanced diet",pts:[
       "<b>Balanced diet:</b> provides all nutrients in right amounts for health, growth, and activity",
       "<b>ICMR Dietary Guidelines (India):</b> cereals 45%, pulses 15%, vegetables & fruits 30%, fat & oil 10%",
       "<b>Caloric requirements:</b> sedentary adult ~1800–2000 kcal/day | active adult ~2500–3000 kcal/day",
       "<b>Pregnancy:</b> additional 300 kcal/day | <b>Lactation:</b> additional 500 kcal/day",
       "<b>BMR (Basal Metabolic Rate):</b> energy needed at rest — Harris-Benedict equation"
     ]},
     {label:"Therapeutic diets",table:{h:["Diet","Indication","Key features"],r:[
       ["Low sodium","Hypertension, heart failure, oedema","< 2g Na/day; avoid pickles, papad, processed food"],
       ["Low fat","Hyperlipidaemia, gallbladder disease","< 30% calories from fat; avoid fried food"],
       ["Diabetic diet","Diabetes mellitus","Low GI foods; controlled carbs; regular meal times"],
       ["High protein","Burns, post-surgery, malnutrition","1.5–2 g/kg/day; milk, eggs, meat, pulses"],
       ["Low protein","Chronic kidney disease (CKD)","0.6 g/kg/day; reduce phosphorus"],
       ["High fibre","Constipation, diverticular disease","25–35 g/day; fruits, vegetables, bran"],
       ["Soft diet","Post-surgery, dysphagia, dental problems","Easy to chew & swallow; avoid raw vegetables, hard meats"],
       ["Clear liquid","Pre/post-op, acute gastritis","Water, juices, broth, gelatin — no solids"],
       ["Full liquid","Transition from clear liquid","Includes milk, soups, smoothies"],
       ["Ketogenic","Epilepsy (paediatric)","High fat, very low carb — reduces seizure frequency"],
     ]}},
     {label:"Nutritional assessment — ABCD",pts:[
       "<b>A — Anthropometric:</b> weight, height, BMI, MUAC, skin fold thickness",
       "<b>B — Biochemical:</b> serum albumin, Hb, serum proteins, transferrin",
       "<b>C — Clinical:</b> physical signs — oedema, hair changes, skin lesions, muscle wasting",
       "<b>D — Dietary:</b> 24-hour dietary recall, food frequency questionnaire"
     ]}
   ],
   warn:["Low protein diet = CKD | High protein diet = burns/surgery — opposite conditions, often mixed up in MCQs","BMI: underweight <18.5 | normal 18.5–24.9 | overweight 25–29.9 | obese ≥30"],
   clinical:["24-hour dietary recall is the nurse's primary tool for nutrition assessment","Oedema in malnutrition = hypoalbuminaemia (protein deficiency) — albumin < 3.5 g/dL","Refeeding syndrome: hypophosphataemia on restarting nutrition after starvation — monitor electrolytes"],
   mcqs:[
     {q:"Caloric value of 1 gram of fat?",o:["4 kcal","7 kcal","9 kcal","11 kcal"],a:2,e:"Fat provides 9 kcal/gram — the highest energy density of all macronutrients."},
     {q:"Therapeutic diet for chronic kidney disease (CKD)?",o:["High protein","Low sodium only","Low protein","High fibre"],a:2,e:"CKD requires low protein diet (0.6 g/kg/day) to reduce urea load on kidneys."},
     {q:"ABCD nutritional assessment — B stands for?",o:["Body weight","Biochemical tests","Blood pressure","Body composition"],a:1,e:"ABCD = Anthropometric, Biochemical, Clinical, Dietary assessment."}
   ]},

  {num:4, sem:2, subj:"Nursing Foundation II", code:"NNF2 225", title:"Medication Administration & IV Therapy", hrs:16,
   sections:[
     {label:"Medication administration — 10 rights",pts:[
       "<b>10 Rights of medication administration:</b>",
       "1. Right <b>Patient</b> — verify with 2 identifiers (name + DOB/ID)",
       "2. Right <b>Drug</b> — check generic and trade name",
       "3. Right <b>Dose</b> — calculate carefully; check with second nurse for high-alert drugs",
       "4. Right <b>Route</b> — oral, IM, SC, IV, ID, rectal, topical",
       "5. Right <b>Time</b> — frequency and interval",
       "6. Right <b>Documentation</b> — record immediately after administration",
       "7. Right to <b>Refuse</b> — patient has the right",
       "8. Right <b>Reason</b> — nurse must know why drug is given",
       "9. Right <b>Response</b> — monitor therapeutic and adverse effects",
       "10. Right <b>Education</b> — explain drug to patient"
     ]},
     {label:"Routes of administration",table:{h:["Route","Onset","Advantages","Disadvantages"],r:[
       ["Oral (PO)","30–60 min","Safe, convenient, cheap","Slow onset; first-pass metabolism; not for unconscious"],
       ["Sublingual (SL)","2–5 min","Rapid; bypasses first-pass","Small dose only; drug must dissolve"],
       ["Intravenous (IV)","Seconds","Fastest; precise control","Irreversible; risk of phlebitis, infection"],
       ["Intramuscular (IM)","10–30 min","Good for depot drugs","Painful; nerve injury risk"],
       ["Subcutaneous (SC)","15–30 min","Self-injection possible","Limited volume (< 2 mL)"],
       ["Intradermal (ID)","Local only","Allergy testing, BCG, TB test","Very small volume (0.1 mL)"],
       ["Rectal (PR)","30 min","Useful if vomiting","Inconvenient; unpredictable absorption"],
     ]}},
     {label:"IV therapy",pts:[
       "<b>Types of IV fluids:</b>",
       "<b>Isotonic:</b> same osmolality as plasma (~285–295 mOsm/L) — 0.9% NaCl (Normal Saline), Ringer's Lactate, 5% Dextrose",
       "<b>Hypotonic:</b> lower osmolality — 0.45% NaCl — used in cellular dehydration; moves water INTO cells",
       "<b>Hypertonic:</b> higher osmolality — 3% NaCl, 10% Dextrose — draws water OUT of cells; used in hyponatraemia, cerebral oedema",
       "<b>Colloids:</b> large molecules stay in vascular space — albumin, gelatin, dextran — used in hypovolaemia",
       "<b>Drop rate formula:</b> mL/hr × drop factor ÷ 60 = drops per minute",
       "<b>Standard drop factors:</b> 15 drops/mL (most sets) | 60 drops/mL (micro-drip/paediatric)"
     ]},
     {label:"IV complications",table:{h:["Complication","Signs & Symptoms","Nursing action"],r:[
       ["Phlebitis","Redness, warmth, pain along vein","Remove IV; apply warm compress; restart new site"],
       ["Infiltration","Swelling, coolness, pain at site; IV not dripping","Stop infusion; remove IV; elevate limb; warm compress"],
       ["Air embolism","Sudden dyspnoea, chest pain, hypotension","Trendelenburg position (left lateral); clamp tubing; call doctor"],
       ["Fluid overload","Oedema, SOB, crackles, JVD, hypertension","Slow/stop infusion; sit upright; call doctor; monitor vitals"],
       ["Infection/Sepsis","Fever, chills, redness at site","Remove IV; send tip for culture; antibiotics as ordered"],
     ]}}
   ],
   warn:["First-pass metabolism = oral drugs metabolised in liver before reaching systemic circulation — reduces bioavailability","Air embolism = Trendelenburg LEFT lateral position — to trap air in right heart"],
   clinical:["High-alert medications (insulin, heparin, concentrated electrolytes) require double-check by two nurses","Change IV site every 72–96 hours (or per policy) to prevent phlebitis and infection"],
   mcqs:[
     {q:"Which IV fluid is isotonic?",o:["0.45% NaCl","0.9% NaCl","3% NaCl","10% Dextrose"],a:1,e:"0.9% Normal Saline is isotonic — same osmolality as plasma (~308 mOsm/L)."},
     {q:"The 10 rights of medication include 'Right Refusal'. This means:",o:["Nurse can refuse to give","Patient has the right to refuse","Doctor can refuse to prescribe","Pharmacist can refuse to dispense"],a:1,e:"The patient has the legal right to refuse any medication after being informed of consequences."},
     {q:"Drop rate formula gives drops per minute. Standard drop factor most common sets?",o:["10 drops/mL","15 drops/mL","20 drops/mL","60 drops/mL"],a:1,e:"Standard (macrodrip) sets deliver 15 drops/mL. Microdrip (paediatric) delivers 60 drops/mL."}
   ]},

  {num:5, sem:2, subj:"Nursing Foundation II", code:"NNF2 225", title:"Wound Care, Oxygenation & Specimen Collection", hrs:14,
   sections:[
     {label:"Wound healing",pts:[
       "<b>Phases of wound healing:</b> Haemostasis (0–3 hrs) → Inflammatory (1–5 days) → Proliferative (5–21 days) → Maturation/Remodelling (21 days – 2 years)",
       "<b>Primary intention:</b> wound edges approximated (sutured) — minimal scarring",
       "<b>Secondary intention:</b> wound left open — heals from base up — more scarring",
       "<b>Tertiary intention (delayed primary closure):</b> wound cleaned, left open, then closed later",
       "<b>Factors delaying healing:</b> infection, malnutrition (esp. protein, Vit C, Zinc), diabetes, poor circulation, steroids, age",
       "<b>Pressure injury staging (NPIAP):</b> Stage I (non-blanchable redness) → II (partial thickness) → III (full thickness, visible fat) → IV (exposed tendon/bone) → Unstageable → Deep tissue injury"
     ]},
     {label:"Oxygen therapy",table:{h:["Device","FiO₂","Flow rate","Notes"],r:[
       ["Nasal cannula","24–44%","1–6 L/min","Comfortable; eating allowed; preferred for mild hypoxia"],
       ["Simple face mask","35–50%","5–10 L/min","Min 5 L/min to flush CO₂; meals difficult"],
       ["Partial rebreather","50–70%","8–12 L/min","Reservoir bag; 1/3 exhaled air recirculated"],
       ["Non-rebreather","70–90%","10–15 L/min","One-way valve; for severe hypoxia"],
       ["Venturi mask","24–60% (precise)","Variable","Most precise FiO₂; COPD management"],
     ]}},
     {label:"Specimen collection",pts:[
       "<b>Urine:</b> midstream clean catch (MSU) for routine and culture; catheter specimen (CSU) for culture",
       "<b>Stool:</b> fresh sample in clean container; avoid contamination with urine",
       "<b>Sputum:</b> early morning before eating; deep cough; 3 consecutive days for TB AFB",
       "<b>Blood cultures:</b> before antibiotics; aseptic technique; two sets from different sites",
       "<b>Throat swab:</b> posterior pharynx and tonsils; avoid tongue",
       "<b>Wound swab:</b> clean wound first; swab from base of wound; avoid edges"
     ]}
   ],
   warn:["Venturi mask = most precise oxygen delivery — preferred in COPD (known CO₂ retainers needing controlled FiO₂)","Pressure injury Stage III/IV are NOT staged downward as they heal — document highest stage reached"],
   clinical:["COPD patients: target SpO₂ 88–92% (not 95–100%) — avoid suppressing hypoxic drive","Sputum for TB: 3 consecutive EARLY MORNING samples — highest mycobacterial count in morning"],
   mcqs:[
     {q:"Which oxygen device delivers most precise FiO₂?",o:["Nasal cannula","Simple face mask","Non-rebreather mask","Venturi mask"],a:3,e:"Venturi mask delivers precise FiO₂ using specific colour-coded adaptors — preferred in COPD."},
     {q:"Wound healing phase involving collagen formation?",o:["Haemostasis","Inflammatory","Proliferative","Maturation"],a:2,e:"Proliferative phase (days 5–21): fibroblasts produce collagen; granulation tissue forms; wound contracts."},
     {q:"Sputum for TB AFB should be collected:",o:["Any time of day","After eating","Early morning (3 consecutive days)","Only once"],a:2,e:"Early morning sputum (before eating) has highest mycobacterial concentration. 3 consecutive samples for AFB."}
   ]},

  {num:6, sem:2, subj:"Health Informatics & Technology", code:"HIT 230", title:"Health Informatics & Nursing Technology", hrs:8,
   sections:[
     {label:"Health informatics basics",pts:[
       "<b>Health informatics:</b> use of information technology to manage health data and improve patient care",
       "<b>EHR (Electronic Health Record):</b> digital version of patient's medical record — accessible across providers",
       "<b>EMR (Electronic Medical Record):</b> digital record within one practice/hospital only",
       "<b>Benefits of EHR:</b> reduces errors, improves legibility, enables decision support, facilitates research, reduces duplication",
       "<b>CDSS (Clinical Decision Support System):</b> alerts nurses to drug interactions, allergy conflicts, abnormal values",
       "<b>HIS (Hospital Information System):</b> integrated system — admission, labs, pharmacy, billing"
     ]},
     {label:"Telemedicine & digital health",pts:[
       "<b>Telemedicine:</b> delivery of healthcare services using telecommunication technology across distances",
       "<b>Types:</b> synchronous (real-time video), asynchronous (store-and-forward), remote patient monitoring",
       "<b>Applications:</b> teleconsultation, telepsychiatry, teledermatology, remote ICU monitoring",
       "<b>Wearables:</b> smartwatches monitor HR, SpO₂, activity; diabetic patches for continuous glucose monitoring",
       "<b>mHealth:</b> mobile health — apps for medication reminders, appointment management, health education"
     ]},
     {label:"Data privacy & ethics",pts:[
       "<b>Patient data privacy:</b> confidentiality of health information is a legal and ethical right",
       "<b>Informed consent for data:</b> patients must consent to use of their data for research",
       "<b>Cyber security in healthcare:</b> password protection, two-factor authentication, no sharing login credentials",
       "<b>Social media ethics:</b> never post patient photos, videos, or identifiable information — violates privacy"
     ]}
   ],
   warn:["EHR = across providers (interoperable) | EMR = within one organisation only — common MCQ distinction"],
   clinical:["Nurses are gatekeepers of EHR — document accurately, never share login, log out after use","Telemedicine expanded significantly post-COVID — understand basic telehealth consultation etiquette"],
   mcqs:[
     {q:"EHR differs from EMR in that EHR:",o:["Is paper-based","Is accessible across multiple providers","Is only for billing","Is less detailed"],a:1,e:"EHR (Electronic Health Record) is designed to be shared across different healthcare providers, unlike EMR (Electronic Medical Record) which is organisation-specific."},
     {q:"CDSS in healthcare stands for:",o:["Clinical Data Storage System","Clinical Decision Support System","Centralised Drug Supply System","Computerised Diagnosis System"],a:1,e:"CDSS = Clinical Decision Support System — provides alerts, reminders, and recommendations to clinicians."},
     {q:"Telemedicine that uses real-time video consultation is called:",o:["Asynchronous","Store-and-forward","Synchronous","Remote monitoring"],a:2,e:"Synchronous telemedicine = real-time, two-way communication (video/audio) between patient and provider."}
   ]}
];

const sem3Units = [
  {num:1, sem:3, subj:"Applied Microbiology", code:"MICR 305", title:"Microbiology & Infection Control", hrs:15,
   sections:[
     {label:"Classification of microorganisms",table:{h:["Type","Size","Examples","Disease"],r:[
       ["Bacteria","0.5–5 µm","Staphylococcus, E.coli, Mycobacterium","Pneumonia, UTI, TB"],
       ["Viruses","20–300 nm","HIV, Hepatitis B, Influenza","AIDS, hepatitis, flu"],
       ["Fungi","2–100 µm","Candida, Aspergillus","Candidiasis, aspergillosis"],
       ["Parasites","Vary (micro to macro)","Plasmodium, Entamoeba","Malaria, amoebiasis"],
       ["Prions","Sub-viral","Misfolded proteins","CJD (Creutzfeldt-Jakob disease)"],
     ]}},
     {label:"Gram staining",pts:[
       "<b>Gram positive:</b> thick peptidoglycan wall — stains PURPLE — e.g. Staph, Strep, Pneumococcus",
       "<b>Gram negative:</b> thin peptidoglycan + outer lipopolysaccharide — stains PINK — e.g. E.coli, Klebsiella, Pseudomonas",
       "<b>Significance:</b> guides antibiotic choice — Gram +ve usually sensitive to penicillin; Gram -ve may need broader spectrum",
       "<b>Acid-fast bacteria (AFB):</b> Mycobacterium TB — resists Gram stain; use Ziehl-Neelsen stain — stains RED"
     ]},
     {label:"Chain of infection",pts:[
       "1. <b>Infectious agent</b> (pathogen) → 2. <b>Reservoir</b> (humans, animals, environment) → 3. <b>Portal of exit</b> (respiratory, GI, skin, blood) → 4. <b>Mode of transmission</b> → 5. <b>Portal of entry</b> → 6. <b>Susceptible host</b>",
       "<b>Breaking the chain:</b> hand hygiene (most effective), PPE, isolation, sterilisation, immunisation, proper disposal"
     ]},
     {label:"HAIs (Hospital Acquired Infections)",table:{h:["HAI type","Common pathogen","Prevention"],r:[
       ["CAUTI (catheter-associated UTI)","E. coli, Klebsiella","Aseptic insertion; daily care; early removal"],
       ["CLABSI (central line bloodstream)","Staph aureus, CoNS","Maximal barrier precautions; chlorhexidine"],
       ["VAP (ventilator-assoc. pneumonia)","Pseudomonas, Klebsiella","HOB 30–45°; oral hygiene; VAP bundle"],
       ["SSI (surgical site infection)","Staph aureus","Aseptic technique; pre-op antibiotics; wound care"],
       ["C. difficile colitis","Clostridium difficile","Contact precautions; hand washing (NOT rub); sporicidal"],
     ]}}
   ],
   warn:["C. difficile: alcohol hand RUB is INEFFECTIVE — must use soap and WATER (alcohol doesn't kill spores)","Gram positive = Purple/Violet | Gram negative = Pink/Red — MCQ reversal is common trap"],
   clinical:["CAUTI prevention: maintain closed drainage system; keep bag below bladder; don't irrigate unless blocked","VAP bundle: HOB 30–45°, daily sedation vacation, oral chlorhexidine, DVT/PUD prophylaxis, daily extubation assessment"],
   mcqs:[
     {q:"Mycobacterium TB is detected using:",o:["Gram staining","Ziehl-Neelsen staining","India ink staining","Giemsa staining"],a:1,e:"AFB (acid-fast bacilli) like M. TB resist Gram stain; Ziehl-Neelsen stain uses carbolfuchsin — TB stains RED."},
     {q:"For C. difficile infection, hand hygiene should be done using:",o:["Alcohol hand rub","Chlorhexidine rub","Soap and water","Any of the above"],a:2,e:"Alcohol is INEFFECTIVE against C. difficile spores — soap and water with friction must be used."},
     {q:"CAUTI prevention key nursing measure:",o:["Change catheter daily","Irrigate bladder regularly","Maintain closed drainage and early removal","Use antibiotics prophylactically"],a:2,e:"CAUTI prevention: aseptic insertion, maintain closed system, daily care, and remove catheter as soon as possible."}
   ]},

  {num:2, sem:3, subj:"Pharmacology I", code:"PHRM 310", title:"Pharmacology Fundamentals & ANS Drugs", hrs:14,
   sections:[
     {label:"Pharmacokinetics — ADME",pts:[
       "<b>Absorption:</b> drug moves from site of administration into bloodstream; affected by route, drug properties, GI motility, food",
       "<b>Distribution:</b> drug spread throughout body; affected by plasma protein binding, blood-brain barrier, body fat",
       "<b>Metabolism (biotransformation):</b> mainly in liver by CYP450 enzymes — converts drug to active/inactive metabolites",
       "<b>Excretion:</b> mainly by kidneys (renal); also bile, lungs, sweat; half-life determines dosing interval",
       "<b>First-pass metabolism:</b> oral drugs absorbed from GI → portal vein → liver → metabolised before reaching systemic circulation → reduces bioavailability",
       "<b>Bioavailability:</b> fraction of drug reaching systemic circulation; IV = 100%; oral varies"
     ]},
     {label:"Drug interactions & adverse effects",pts:[
       "<b>Synergism:</b> combined effect > sum of individual effects — e.g. alcohol + sedatives",
       "<b>Antagonism:</b> one drug reduces effect of another — e.g. naloxone blocks morphine",
       "<b>Side effect:</b> predictable, unintended effect at therapeutic dose — e.g. constipation with morphine",
       "<b>Adverse drug reaction (ADR):</b> harmful, unintended response — report to pharmacovigilance",
       "<b>Idiosyncrasy:</b> abnormal, unpredictable response due to genetic factors — e.g. G6PD deficiency",
       "<b>Tolerance:</b> decreased response with repeated use — higher dose needed",
       "<b>Dependence:</b> physical or psychological need for drug — withdrawal symptoms on stopping"
     ]},
     {label:"Autonomic nervous system drugs",table:{h:["Drug class","Action","Examples","Uses"],r:[
       ["Cholinergic agonists","Mimic acetylcholine (parasympathetic)","Pilocarpine, Neostigmine","Glaucoma, myasthenia gravis, urinary retention"],
       ["Anticholinergics","Block acetylcholine","Atropine, Hyoscine","Bradycardia, premedication, organophosphate poisoning"],
       ["Adrenergic agonists (sympathomimetics)","Mimic noradrenaline","Adrenaline, Salbutamol, Dopamine","Anaphylaxis, asthma, shock"],
       ["Beta-blockers","Block beta-adrenoceptors","Atenolol, Propranolol, Metoprolol","Hypertension, angina, MI, arrhythmias"],
       ["Alpha-blockers","Block alpha-adrenoceptors","Prazosin, Tamsulosin","Hypertension, BPH"],
     ]}}
   ],
   warn:["Atropine = anticholinergic → causes dry mouth, urinary retention, tachycardia, blurred vision — DUMBELS mnemonic for cholinergic overdose (opposite)","First-pass metabolism = why oral bioavailability is lower than IV for many drugs"],
   clinical:["Adrenaline (epinephrine) = first drug in anaphylaxis — 0.5 mg IM into lateral thigh (adults)","Atropine = treatment for organophosphate poisoning AND bradycardia — large doses for poisoning","Beta-blockers: never stop abruptly — risk of rebound hypertension and angina"],
   mcqs:[
     {q:"First drug of choice in anaphylaxis?",o:["Antihistamine","Corticosteroid","Adrenaline (epinephrine)","Atropine"],a:2,e:"Adrenaline (epinephrine) 0.5 mg IM is the first and most important drug in anaphylaxis."},
     {q:"Atropine is used in organophosphate poisoning because:",o:["It is an antidote","It blocks muscarinic effects of excess acetylcholine","It stimulates the heart","It reduces inflammation"],a:1,e:"Organophosphates cause ACh accumulation. Atropine blocks muscarinic receptors — countering the SLUDGE effects."},
     {q:"First-pass metabolism primarily occurs in the:",o:["Kidney","Lung","Liver","Small intestine"],a:2,e:"First-pass metabolism occurs in the liver after oral drugs are absorbed from GI tract via portal circulation."}
   ]},

  {num:3, sem:3, subj:"Pathology I", code:"PATH 315", title:"Cell Injury, Inflammation & Neoplasia", hrs:10,
   sections:[
     {label:"Cell injury",pts:[
       "<b>Reversible injury:</b> cell can recover if stimulus removed — fatty change, hydropic degeneration",
       "<b>Irreversible injury:</b> cell cannot recover — leads to cell death",
       "<b>Necrosis:</b> uncontrolled cell death — releases inflammatory mediators; types:",
       "<b>Coagulative necrosis:</b> most common; ischaemia (MI, renal infarct) — preserved ghost outline",
       "<b>Liquefactive necrosis:</b> brain infarct, abscess (pus) — tissue dissolves",
       "<b>Caseous necrosis:</b> TB — cheese-like appearance",
       "<b>Apoptosis:</b> programmed cell death — controlled, no inflammation; normal (embryogenesis) and pathological"
     ]},
     {label:"Inflammation",pts:[
       "<b>Cardinal signs (Celsus):</b> Rubor (redness), Calor (heat), Dolor (pain), Tumor (swelling) + Functio laesa (loss of function)",
       "<b>Acute inflammation:</b> rapid onset; neutrophils dominant; days to weeks",
       "<b>Chronic inflammation:</b> prolonged; lymphocytes and macrophages; weeks to years — e.g. TB, RA",
       "<b>Exudate:</b> protein-rich fluid leaving vessels in inflammation (specific gravity > 1.020)",
       "<b>Transudate:</b> protein-poor fluid — due to hydrostatic/oncotic pressure changes (heart failure, cirrhosis)"
     ]},
     {label:"Neoplasia",table:{h:["Feature","Benign","Malignant"],r:[
       ["Growth","Slow","Rapid"],
       ["Boundaries","Well-defined capsule","Irregular, invasive"],
       ["Metastasis","No","Yes (hallmark of malignancy)"],
       ["Differentiation","Well-differentiated","Poorly differentiated (anaplastic)"],
       ["Effect on patient","Usually harmless (unless compressing)","Life-threatening"],
       ["Examples","Lipoma, fibroma, adenoma","Carcinoma, sarcoma, lymphoma"],
     ]}}
   ],
   warn:["Exudate vs transudate: exudate = inflammation (protein-rich) | transudate = mechanical/pressure (protein-poor)","Metastasis = hallmark of MALIGNANCY — benign tumours do NOT metastasise"],
   clinical:["Tumour markers: PSA (prostate), CA-125 (ovarian), AFP (liver/testicular), CEA (colorectal) — used for monitoring, not screening","Inflammation = protective response; nurse's role: RICE (Rest, Ice, Compression, Elevation) for acute trauma"],
   mcqs:[
     {q:"Caseous necrosis is characteristically seen in:",o:["MI","Brain abscess","Tuberculosis","Wet gangrene"],a:2,e:"Caseous necrosis = cheese-like appearance; characteristic of tuberculosis granuloma."},
     {q:"The hallmark of malignant tumours is:",o:["Rapid growth","Capsule formation","Metastasis","Large size"],a:2,e:"Metastasis (spread to distant sites) is the defining hallmark of malignancy."},
     {q:"Exudate differs from transudate in having:",o:["Lower specific gravity","Higher protein content","Lower cell count","Less colour"],a:1,e:"Exudate (from inflammation) has high protein content (SG > 1.020). Transudate (mechanical) has low protein (SG < 1.015)."}
   ]},

  {num:4, sem:3, subj:"Adult Health Nursing I", code:"AHN1 320", title:"Cardiovascular Nursing", hrs:10,
   sections:[
     {label:"Hypertension",pts:[
       "<b>Definition:</b> systolic ≥ 140 mmHg AND/OR diastolic ≥ 90 mmHg on ≥ 2 occasions",
       "<b>Classification:</b> Stage 1: 140–159/90–99 | Stage 2: ≥160/≥100 | Hypertensive crisis: >180/120",
       "<b>Primary (essential) HT:</b> 90–95% of cases — no identifiable cause — multifactorial",
       "<b>Secondary HT:</b> 5–10% — renal disease (CKD), endocrine (Cushing's, phaeochromocytoma), renal artery stenosis",
       "<b>Risk factors:</b> age, male sex, family history, obesity, sedentary lifestyle, high-salt diet, smoking, alcohol, stress",
       "<b>Target organ damage:</b> Heart (LVH, HF) | Brain (stroke) | Kidneys (CKD) | Eyes (retinopathy) | Peripheral arteries"
     ]},
     {label:"Nursing management — HT",pts:[
       "<b>Non-pharmacological (lifestyle modifications):</b>",
       "DASH diet: Dietary Approaches to Stop Hypertension — low sodium (< 2g/day), high fruits/vegetables/whole grains",
       "Weight reduction (target BMI 18.5–24.9) | Regular exercise 30 min/day, 5 days/week",
       "Limit alcohol | Quit smoking | Stress management (yoga, relaxation techniques)",
       "<b>Monitoring:</b> BP both arms; record time, position, arm used; 24-hour ambulatory monitoring",
       "<b>Patient education:</b> medication adherence, self-monitoring, when to seek help (headache, visual changes, chest pain)"
     ]},
     {label:"Myocardial Infarction (MI)",pts:[
       "<b>Pathophysiology:</b> coronary artery occlusion → ischaemia → necrosis (if > 20–40 min without reperfusion)",
       "<b>Classic symptoms:</b> crushing chest pain (SOCRATES), radiating to left arm/jaw/back, sweating, nausea, dyspnoea",
       "<b>Silent MI:</b> common in diabetics and elderly — no chest pain",
       "<b>Diagnosis:</b> ECG (ST elevation in STEMI) + Troponin I/T (rises 3–6 hrs, most specific) + history",
       "<b>Emergency management (MONA):</b> Morphine | Oxygen (if SpO₂ < 94%) | Nitrates | Aspirin",
       "<b>STEMI management:</b> Primary PCI (within 90 min) preferred; or thrombolysis (within 12 hrs)"
     ]},
     {label:"Nursing care in MI",pts:[
       "Continuous cardiac monitoring — watch for arrhythmias",
       "Bed rest initially — activity as tolerated; gradually increase",
       "Oxygen to maintain SpO₂ > 94%",
       "IV access — two large-bore cannulae",
       "Pain assessment with NRS; administer morphine as prescribed",
       "NPO initially — liquid diet then low-fat, low-sodium diet",
       "Monitor vital signs every 15–30 min (acute phase)",
       "Prevent complications: DVT (anticoagulation, early mobility), Dressler's syndrome (pericarditis 2–10 weeks post-MI)"
     ]}
   ],
   warn:["MONA in MI: Morphine, Oxygen (only if SpO₂<94%), Nitrates (avoid if hypotensive/right MI), Aspirin","Silent MI in diabetics — peripheral neuropathy masks pain — present with fatigue or dyspnoea only"],
   clinical:["Door-to-balloon time for STEMI = < 90 minutes — every minute of delay = more myocardium lost","Aspirin 300 mg STAT (chewed, not swallowed) is given as soon as MI is suspected — reduces platelet aggregation"],
   mcqs:[
     {q:"Most specific marker for acute MI?",o:["LDH","CK-MB","Troponin I/T","AST"],a:2,e:"Troponin I/T is the most specific and sensitive marker for myocardial injury — rises 3–6 hours after MI."},
     {q:"MONA therapy in MI: O stands for?",o:["Ondansetron","Oxygen","Omeprazole","Oral fluids"],a:1,e:"MONA = Morphine, Oxygen (if SpO₂ < 94%), Nitrates, Aspirin."},
     {q:"Primary target for STEMI reperfusion?",o:["Thrombolysis within 30 min","Primary PCI within 90 min","CABG within 6 hours","Beta-blocker within 24 hours"],a:1,e:"Primary PCI (percutaneous coronary intervention) within 90 minutes of first medical contact is the gold standard for STEMI."}
   ]}
];

const sem4Units = [
  {num:1, sem:4, subj:"Pharmacology II", code:"PHRM2 410", title:"CNS, Cardiovascular & Antibiotic Drugs", hrs:14,
   sections:[
     {label:"CNS drugs",table:{h:["Class","Examples","Uses","Key nursing points"],r:[
       ["Opioid analgesics","Morphine, Fentanyl, Codeine","Severe pain, post-op","Monitor RR (hold if < 12/min); have naloxone ready; constipation, sedation"],
       ["Non-opioid analgesics","Paracetamol, Ibuprofen, Diclofenac","Mild-moderate pain, fever","Paracetamol: max 4g/day (hepatotoxicity); NSAIDs: avoid in renal disease, peptic ulcer"],
       ["Benzodiazepines","Diazepam, Lorazepam, Midazolam","Anxiety, seizures, sedation","Respiratory depression; dependence; flumazenil is antidote"],
       ["Antiepileptics","Phenytoin, Valproate, Carbamazepine","Epilepsy","Teratogenic (valproate); monitor drug levels; never stop suddenly"],
       ["Antipsychotics","Haloperidol, Risperidone, Clozapine","Schizophrenia, mania","Haloperidol: EPS (extrapyramidal symptoms); Clozapine: agranulocytosis (monitor WBC)"],
       ["Antidepressants (SSRIs)","Fluoxetine, Sertraline, Citalopram","Depression, anxiety","4–6 weeks for effect; serotonin syndrome if combined with MAOIs"],
     ]}},
     {label:"Cardiovascular drugs",table:{h:["Drug","Class","Mechanism","Key nursing"],r:[
       ["Digoxin","Cardiac glycoside","↑ cardiac contractility; ↓ HR","Check apical pulse > 60/min before giving; narrow TI; toxicity: nausea, yellow vision, bradycardia"],
       ["Furosemide","Loop diuretic","Inhibits Na/K/Cl in loop of Henle","Monitor K⁺ (hypokalaemia); weigh daily; input/output"],
       ["Atenolol/Metoprolol","Beta-blocker","Block β1 → ↓ HR, ↓ BP","Don't stop abruptly; check HR before giving (hold if < 60)"],
       ["Amlodipine","CCB (dihydropyridine)","Vasodilation → ↓ BP","Ankle oedema; flushing"],
       ["Warfarin","Anticoagulant (Vit K antagonist)","Inhibits clotting factors II,VII,IX,X","Monitor INR (target 2–3); dietary Vit K consistency; antidote = Vit K + FFP"],
       ["Heparin","Anticoagulant","Activates antithrombin III","Monitor APTT; antidote = protamine sulphate; risk of HIT"],
     ]}},
     {label:"Antibiotics",table:{h:["Class","Examples","Spectrum","Key notes"],r:[
       ["Penicillins","Amoxicillin, Ampicillin","Gram +ve mainly","Allergy common; beta-lactamase can destroy them"],
       ["Cephalosporins","Cefazolin, Ceftriaxone","Broad spectrum","1st gen = Gram +ve; 3rd gen = Gram -ve/CNS; 10% cross-react with penicillin allergy"],
       ["Aminoglycosides","Gentamicin, Amikacin","Gram -ve","Nephrotoxic + ototoxic; monitor renal function and drug levels"],
       ["Macrolides","Azithromycin, Erythromycin","Atypicals (Mycoplasma, Chlamydia)","Alternative in penicillin allergy; GI side effects"],
       ["Fluoroquinolones","Ciprofloxacin, Levofloxacin","Broad spectrum, UTI","Avoid in children (cartilage damage); avoid with antacids"],
       ["Metronidazole","Metronidazole","Anaerobes, protozoa","Avoid alcohol (disulfiram reaction); metallic taste"],
     ]}}
   ],
   warn:["Digoxin toxicity: always check apical pulse for 1 full minute before giving — hold if < 60 bpm","Warfarin: highly affected by diet (Vit K), drugs, and illness — needs regular INR monitoring"],
   clinical:["Naloxone = antidote for opioid overdose | Flumazenil = antidote for benzodiazepine | Protamine = antidote for heparin | Vitamin K = antidote for warfarin","Heparin-Induced Thrombocytopaenia (HIT): drop in platelets 5–10 days after heparin → stop heparin immediately"],
   mcqs:[
     {q:"Antidote for heparin overdose?",o:["Vitamin K","Protamine sulphate","Flumazenil","Naloxone"],a:1,e:"Protamine sulphate is the specific antidote for heparin overdose."},
     {q:"Before giving digoxin, the nurse should:",o:["Check blood pressure","Check apical pulse for 1 minute","Check respiratory rate","Check temperature"],a:1,e:"Digoxin increases vagal tone and slows HR — check apical pulse for 1 full minute; hold if < 60 bpm."},
     {q:"Aminoglycosides are particularly toxic to:",o:["Liver and bone marrow","Kidney and ear (eighth nerve)","Heart and lung","Skin and GI tract"],a:1,e:"Aminoglycosides (gentamicin, amikacin) are nephrotoxic and ototoxic — monitor renal function and hearing."}
   ]},

  {num:2, sem:4, subj:"Adult Health Nursing II", code:"AHN2 420", title:"Critical Care, Emergency & Oncology Nursing", hrs:14,
   sections:[
     {label:"ICU nursing fundamentals",pts:[
       "<b>ICU care bundles:</b> evidence-based sets of practices implemented together",
       "<b>ABCDEF bundle:</b> Awaken (daily SAT) | Breathe (SBT daily) | Coordination (SAT+SBT) | Delirium (assess with CAM-ICU) | Early mobility | Family engagement",
       "<b>ABG interpretation:</b> pH 7.35–7.45 | PaCO₂ 35–45 | HCO₃ 22–26 | PaO₂ 80–100",
       "<b>Respiratory acidosis:</b> ↓pH, ↑PaCO₂ — hypoventilation (COPD, sedation)",
       "<b>Respiratory alkalosis:</b> ↑pH, ↓PaCO₂ — hyperventilation (anxiety, pain, early PE)",
       "<b>Metabolic acidosis:</b> ↓pH, ↓HCO₃ — DKA, sepsis, lactic acidosis, renal failure",
       "<b>Metabolic alkalosis:</b> ↑pH, ↑HCO₃ — vomiting, NG suction, excess antacids, diuretics"
     ]},
     {label:"Emergency nursing — triage",table:{h:["Triage category","Colour","Examples","Priority"],r:[
       ["Immediate","Red","MI, major trauma, respiratory arrest","First — life-threatening"],
       ["Urgent","Yellow","Fracture, moderate burns, high fever","Second — serious but stable"],
       ["Non-urgent","Green","Minor lacerations, mild illness","Third — can wait"],
       ["Expectant","Black","Unsalvageable, death expected","Last — focus on comfort"],
     ]}},
     {label:"Oncology nursing",pts:[
       "<b>Cancer warning signs (CAUTION):</b> Change in bowel/bladder | A sore that doesn't heal | Unusual bleeding | Thickening/lump | Indigestion/dysphagia | Obvious change in mole | Nagging cough/hoarseness",
       "<b>Chemotherapy side effects and nursing care:</b>",
       "<b>Myelosuppression:</b> ↓WBC (infection risk), ↓platelets (bleeding risk), ↓RBC (anaemia) — monitor CBC; neutropenic precautions",
       "<b>Nausea/Vomiting:</b> 5-HT3 antagonists (ondansetron) prophylactically",
       "<b>Alopecia:</b> expected; reversible; cold cap therapy; psychological support",
       "<b>Mucositis:</b> oral care — soft toothbrush, saline rinses, avoid spicy/hot food",
       "<b>Extravasation:</b> chemotherapy leaking from vein — STOP immediately, do not remove cannula, aspirate residual drug, antidote per protocol, cold/warm compress per drug type"
     ]},
     {label:"Palliative care principles",pts:[
       "<b>WHO definition:</b> approach that improves quality of life for patients and families facing life-threatening illness",
       "<b>Not euthanasia:</b> palliative care neither hastens nor postpones death",
       "<b>Symptom management:</b> pain (WHO analgesic ladder), breathlessness, nausea, anxiety, depression",
       "<b>WHO analgesic ladder:</b> Step 1 (mild pain) → non-opioids (paracetamol/NSAIDs) | Step 2 (moderate) → weak opioids (codeine) | Step 3 (severe) → strong opioids (morphine)",
       "<b>Liverpool Care Pathway (LCP):</b> framework for care in last days of life"
     ]}
   ],
   warn:["Chemotherapy extravasation: STOP infusion immediately — do NOT remove cannula — aspirate drug first — antidote protocol varies by drug","Triage black tag = expectant — NOT dead — focus resources where they can save most lives"],
   clinical:["Neutropenic precautions: private room, HEPA filter, no fresh flowers/fruits, mask for visitors, no rectal temps/suppositories","Pain assessment in palliative care: 'total pain' concept — physical + psychological + social + spiritual components"],
   mcqs:[
     {q:"Respiratory acidosis is characterised by:",o:["↑pH, ↓PaCO₂","↓pH, ↑PaCO₂","↑pH, ↑HCO₃","↓pH, ↓HCO₃"],a:1,e:"Respiratory acidosis = low pH (acid) + high PaCO₂ — caused by hypoventilation (CO₂ retention)."},
     {q:"In triage, a red tag indicates:",o:["Dead or unsalvageable","Minor injury — can wait","Life-threatening — treat immediately","Serious but stable"],a:2,e:"Red (Immediate) = life-threatening conditions requiring immediate treatment."},
     {q:"WHO analgesic ladder Step 3 uses:",o:["Non-opioids","Weak opioids","Strong opioids (morphine)","Adjuvant drugs only"],a:2,e:"Step 3 of WHO analgesic ladder = strong opioids like morphine for severe pain."}
   ]}
];

const sem5Units = [
  {num:1, sem:5, subj:"Child Health Nursing I", code:"CHN1 510", title:"Paediatric Assessment & Growth", hrs:12,
   sections:[
     {label:"Growth and development milestones",table:{h:["Age","Motor","Language","Social"],r:[
       ["2 months","Lifts head briefly","Coos","Social smile"],
       ["4 months","Head steady; rolls","Laughs","Recognises family"],
       ["6 months","Sits with support","Babbles","Stranger anxiety begins"],
       ["9 months","Stands holding","'Mama/Dada' (non-specific)","Waves bye-bye"],
       ["12 months","Walks with support","2–3 words meaningful","Points to wants"],
       ["18 months","Walks alone","10–20 words","Parallel play"],
       ["2 years","Runs; climbs stairs","50+ words; 2-word phrases","Parallel → associative play"],
       ["3 years","Tricycle; one foot balance","3-word sentences","Co-operative play"],
       ["5 years","Skips; hops","Fluent speech","Competitive play"],
     ]}},
     {label:"Neonatal assessment",pts:[
       "<b>APGAR at 1 & 5 minutes:</b> 7–10 = normal | 4–6 = moderate concern | 0–3 = severe — immediate resuscitation",
       "<b>Normal newborn vitals:</b> HR 120–160 | RR 30–60 | Temp 36.5–37.5°C | BP 65–85/45–55 mmHg",
       "<b>Newborn reflexes:</b> Moro (startle), Rooting (turns to touch), Sucking, Grasp, Babinski (extension), Tonic neck",
       "<b>Reflexes disappear:</b> Moro at 4–6 months | Rooting at 3–4 months | Grasp at 3–6 months | Babinski persists to 2 years",
       "<b>Newborn care:</b> clear airway, warmth (radiant warmer/skin-to-skin), cord care, eye prophylaxis (tetracycline/silver nitrate), Vitamin K IM, BCG + OPV + Hep B"
     ]},
     {label:"IMNCI assessment",pts:[
       "<b>IMNCI:</b> Integrated Management of Neonatal and Childhood Illness — WHO/UNICEF strategy for < 5 years",
       "<b>General danger signs (GDS):</b> unable to drink/breastfeed | vomiting everything | convulsions | lethargy/unconsciousness",
       "<b>Classify and treat:</b> IMNCI uses colour-coded classification — Pink (urgent referral) | Yellow (treat at home with ORS/antibiotics) | Green (home care, counselling)",
       "<b>Assess for:</b> pneumonia (fast breathing) | diarrhoea | fever | ear problems | malnutrition | anaemia | immunisation status"
     ]},
     {label:"Malnutrition",pts:[
       "<b>PEM (Protein-Energy Malnutrition):</b>",
       "<b>Marasmus:</b> severe calorie + protein deficiency — 'skin and bones'; weight < 60% of expected; no oedema",
       "<b>Kwashiorkor:</b> protein deficiency with adequate calories — oedema (pitting), distended abdomen, 'flaky paint' skin, depigmented hair; weight 60–80% expected",
       "<b>Marasmic kwashiorkor:</b> combined",
       "<b>SAM management (F-75 → F-100):</b> 10 steps — treat hypoglycaemia, hypothermia, dehydration, electrolytes, infection, micronutrients, cautious feeding, rebuilding, stimulation, follow-up"
     ]}
   ],
   warn:["Marasmus = looks emaciated (no oedema) | Kwashiorkor = oedematous with moon face — opposite presentations","Babinski reflex: NORMAL in infants up to 2 years; ABNORMAL if present in older children/adults (upper motor neuron lesion)"],
   clinical:["Denver Developmental Screening Test II (DDST II) — screens for developmental delays in children < 6 years","Therapeutic play: use play to explain procedures to children — reduces fear and increases cooperation"],
   mcqs:[
     {q:"Age at which a child normally walks alone?",o:["9 months","12 months","18 months","2 years"],a:1,e:"Most children walk independently by 12 months (range 9–15 months)."},
     {q:"Kwashiorkor is characterised by:",o:["Severe emaciation, no oedema","Pitting oedema, moon face, skin changes","Both emaciation and oedema equally","Only skin changes"],a:1,e:"Kwashiorkor = protein deficiency with adequate calories → pitting oedema, distended abdomen, flaky skin."},
     {q:"General danger sign in IMNCI includes:",o:["Mild fever","Cough < 2 weeks","Unable to drink or breastfeed","Mild diarrhoea"],a:2,e:"IMNCI general danger signs: unable to drink/breastfeed, vomiting everything, convulsions, lethargy/unconsciousness."}
   ]},

  {num:2, sem:5, subj:"Mental Health Nursing I", code:"MHN1 515", title:"Mental Health Concepts & Psychotic Disorders", hrs:10,
   sections:[
     {label:"Concepts of mental health",pts:[
       "<b>Mental health (WHO):</b> state of well-being where individual realises own potential, copes with normal stresses, works productively, contributes to community",
       "<b>Continuum:</b> mental health ↔ mental illness — not binary; all people move along the continuum",
       "<b>Stigma:</b> major barrier to help-seeking — nurse's role: non-judgmental, person-centred language ('person with schizophrenia' not 'schizophrenic')",
       "<b>Mental Status Examination (MSE):</b> Appearance | Behaviour | Speech | Mood & Affect | Thought form & content | Perceptions | Cognition | Insight & Judgement"
     ]},
     {label:"Schizophrenia",pts:[
       "<b>Positive symptoms</b> (added experiences — treat with antipsychotics):",
       "Hallucinations (auditory most common in schizophrenia), Delusions, Disorganised speech/thought, Grossly disorganised behaviour",
       "<b>Negative symptoms</b> (diminished functions — harder to treat):",
       "Flat affect, Alogia (poverty of speech), Avolition (lack of motivation), Anhedonia (inability to feel pleasure), Social withdrawal",
       "<b>Diagnosis:</b> ≥ 2 symptoms for ≥ 1 month, with ≥ 6 months of social/occupational dysfunction",
       "<b>Pharmacotherapy:</b> Typical antipsychotics (Haloperidol — EPS) | Atypical (Risperidone, Olanzapine, Clozapine — less EPS; Clozapine → agranulocytosis)"
     ]},
     {label:"Extrapyramidal side effects (EPS)",table:{h:["EPS type","Onset","Features","Treatment"],r:[
       ["Acute dystonia","Hours-days","Muscle spasm, twisted posture (torticollis, oculogyric crisis)","IM benztropine or diphenhydramine"],
       ["Akathisia","Days-weeks","Restlessness, inability to sit still","Reduce dose; propranolol; lorazepam"],
       ["Parkinsonism","Weeks","Tremor, rigidity, bradykinesia, mask face","Anticholinergics (benztropine)"],
       ["Tardive dyskinesia","Months-years","Involuntary oral-facial movements","Stop/reduce antipsychotic; clonazepam"],
     ]}},
     {label:"Therapeutic communication",pts:[
       "<b>Principles:</b> accept patient as they are | listen actively | maintain therapeutic boundaries | avoid false reassurance",
       "<b>Techniques:</b> open-ended questions | reflection | clarification | silence | empathy | exploring",
       "<b>Avoid:</b> arguing with delusions | giving advice without being asked | 'why' questions (puts patient on defensive)",
       "<b>With hallucinating patient:</b> acknowledge experience without reinforcing ('I notice you seem distracted; I don't hear what you are hearing but I can see you are distressed')"
     ]}
   ],
   warn:["Positive symptoms = ADDED (hallucinations, delusions) | Negative symptoms = TAKEN AWAY (flat affect, avolition) — terminology trap","Tardive dyskinesia = LATE onset EPS (months–years); irreversible in some — cannot be treated with anticholinergics"],
   clinical:["Oculogyric crisis (acute dystonia): eyes deviate upward — emergency; IM benztropine or diphenhydramine immediately","Never argue with a patient's delusion — avoid reinforcing but don't bluntly contradict — therapeutic neutral stance"],
   mcqs:[
     {q:"Most common type of hallucination in schizophrenia?",o:["Visual","Auditory","Tactile","Olfactory"],a:1,e:"Auditory hallucinations (hearing voices) are the most common type in schizophrenia."},
     {q:"Tardive dyskinesia is caused by:",o:["Short-term antipsychotic use","Long-term antipsychotic use","Antidepressants","Benzodiazepines"],a:1,e:"Tardive dyskinesia = late-onset, potentially irreversible involuntary movements from long-term antipsychotic use."},
     {q:"Clozapine's most dangerous side effect?",o:["Hypertension","Agranulocytosis","Hepatotoxicity","Nephrotoxicity"],a:1,e:"Clozapine can cause agranulocytosis (life-threatening) — requires mandatory regular WBC monitoring."}
   ]},

  {num:3, sem:5, subj:"Community Health Nursing I", code:"COHN1 520", title:"Epidemiology & National Health Programs", hrs:12,
   sections:[
     {label:"Epidemiology concepts",pts:[
       "<b>Incidence rate:</b> new cases in a time period ÷ population at risk — measures RISK of disease",
       "<b>Prevalence rate:</b> ALL existing cases (new + old) at a point in time ÷ total population — measures BURDEN",
       "<b>Case fatality rate (CFR):</b> deaths ÷ number of cases × 100 — severity of disease",
       "<b>Attack rate:</b> cases ÷ exposed population — used in outbreaks",
       "<b>MMR (Maternal Mortality Rate):</b> maternal deaths per 1,00,000 live births | India MMR 2020 = ~97",
       "<b>IMR (Infant Mortality Rate):</b> deaths < 1 year per 1,000 live births | India IMR 2020 = ~28",
       "<b>Under-5 mortality rate:</b> deaths < 5 years per 1,000 live births"
     ]},
     {label:"National health programs",table:{h:["Program","Focus","Key component"],r:[
       ["NHM (National Health Mission)","Strengthening health systems","ASHA, MMU, free drugs and diagnostics"],
       ["RMNCH+A","Reproductive, maternal, newborn, child, adolescent health","Janani Suraksha Yojana, JSSK, RBSK"],
       ["NVBDCP","Vector-borne diseases","Malaria, dengue, filaria, kala-azar, JE, chikungunya"],
       ["RNTCP/NTP","Tuberculosis","DOTS; free diagnosis and treatment; Nikshay portal"],
       ["NLEP","Leprosy","MDT (Multi-Drug Therapy); elimination target"],
       ["NPCDCS","Cancer, diabetes, CVD, stroke","Screening at sub-district level; lifestyle intervention"],
       ["NMHP","Mental health","Integration of mental health into PHC; DMHP"],
       ["NPCB","Blindness prevention","Cataract surgery; school screening; Vitamin A supplementation"],
     ]}},
     {label:"Primary Health Centre (PHC) and health infrastructure",pts:[
       "<b>Sub-Health Centre (SHC):</b> peripheral unit; 1 ANM + 1 MPHW; serves 3,000–5,000 population",
       "<b>Primary Health Centre (PHC):</b> first contact with qualified doctor; 24/7 delivery services; serves 20,000–30,000",
       "<b>Community Health Centre (CHC):</b> 30-bed referral hospital; 4 specialists (surgeon, physician, OBG, paediatrician); serves 80,000–1,20,000",
       "<b>Sub-District Hospital:</b> 31–100 beds; speciality care",
       "<b>District Hospital:</b> 100–500 beds; referral for CHC",
       "<b>ASHA:</b> community health activist; 1 per 1,000 population; selected from village itself; incentive-based"
     ]}
   ],
   warn:["Incidence = NEW cases (measures risk) | Prevalence = ALL cases (measures burden) — fundamental epidemiology distinction","NVBDCP covers malaria, dengue, filaria, kala-azar, JE, chikungunya — NOT TB (separate RNTCP/NTP program)"],
   clinical:["DOTS = Directly Observed Treatment Short-course for TB; patient takes drugs in front of health worker — ensures adherence","Janani Suraksha Yojana (JSY): cash incentive for institutional delivery — aim to reduce home births and maternal mortality"],
   mcqs:[
     {q:"Prevalence rate measures:",o:["New cases only","All existing cases at a point in time","Deaths from disease","Cases in exposed population"],a:1,e:"Prevalence = all existing cases (new + old) at a specific point or period; measures the burden of disease."},
     {q:"ASHA serves a population of approximately:",o:["500","1,000","5,000","10,000"],a:1,e:"One ASHA is designated for approximately 1,000 population in rural areas."},
     {q:"DOTS stands for:",o:["Direct Observation Treatment Schedule","Directly Observed Treatment Short-course","Drug Oriented TB Service","Daily Oral Treatment Strategy"],a:1,e:"DOTS = Directly Observed Treatment Short-course — the cornerstone of TB control under RNTCP/NTP."}
   ]}
];

const sem6Units = [
  {num:1, sem:6, subj:"Child Health Nursing II", code:"CHN2 610", title:"Paediatric Surgical & Haematological Conditions", hrs:10,
   sections:[
     {label:"Common surgical conditions in children",table:{h:["Condition","Presentation","Key nursing care"],r:[
       ["Intussusception","'Redcurrant jelly' stool; colicky pain; palpable sausage mass","NPO; IV access; enema reduction or surgery; post-op care"],
       ["Pyloric stenosis","Projectile vomiting in 2–6 week old male; olive mass; hypochloraemic alkalosis","Pre-op: correct electrolytes and dehydration; Ramstedt's pyloromyotomy post-op feeding"],
       ["Congenital dislocation of hip (CDH)","Asymmetric skin folds; limited abduction; Ortolani/Barlow signs","Early detection; Pavlik harness 6–12 weeks; surgery if late"],
       ["Cleft lip/palate","Facial deformity; feeding difficulty","Special feeding techniques (Haberman feeder); lip repair 3 months; palate repair 12–18 months"],
       ["Hirschsprung's disease","Failure to pass meconium in 48 hrs; chronic constipation; abdomen distension","Bowel management; colostomy; pull-through surgery"],
     ]}},
     {label:"Haematological disorders in children",pts:[
       "<b>Iron deficiency anaemia (IDA):</b> most common anaemia in children — pallor, fatigue, pica (eating dirt/ice), koilonychia (spoon nails), impaired cognition",
       "<b>Hb threshold for anaemia:</b> < 11 g/dL (6 months–5 years) | < 11.5 g/dL (5–12 years)",
       "<b>Treatment:</b> oral iron (3–6 mg/kg/day elemental iron) for 3 months after Hb normalises; give with Vitamin C (↑ absorption); avoid tea",
       "<b>Sickle cell disease:</b> autosomal recessive; HbS — sickles in low O₂ → vaso-occlusion → crises",
       "<b>Vaso-occlusive crisis:</b> severe pain — trigger: dehydration, infection, cold, hypoxia; management: hydration, analgesia, warmth, O₂",
       "<b>Thalassaemia major (Cooley's anaemia):</b> autosomal recessive; severe haemolytic anaemia; needs monthly transfusions; chelation therapy (deferoxamine)"
     ]}
   ],
   warn:["Pyloric stenosis: PROJECTILE vomiting + HYPOCHLORAEMIC ALKALOSIS in MALE infants 2–8 weeks — must correct electrolytes BEFORE surgery","IDA: give iron with Vitamin C to INCREASE absorption; avoid tea (tannins reduce absorption)"],
   clinical:["Sickle cell crisis: avoid cold (causes vasoconstriction and sickling); keep warm; aggressive hydration","Thalassaemia major: iron overload from transfusions → chelation therapy needed; splenomegaly → splenectomy"],
   mcqs:[
     {q:"Intussusception classically presents with:",o:["Projectile vomiting","Redcurrant jelly stool","Olive mass in abdomen","Distended abdomen only"],a:1,e:"Intussusception = telescoping of bowel → 'redcurrant jelly' stool (blood + mucus), colicky pain, palpable sausage mass."},
     {q:"Iron absorption is enhanced by:",o:["Tea","Milk","Vitamin C","Antacids"],a:2,e:"Vitamin C (ascorbic acid) converts ferric (Fe³⁺) to ferrous (Fe²⁺) form, enhancing iron absorption."},
     {q:"Sickle cell crisis is precipitated by:",o:["Overhydration","High oxygen","Dehydration and infection","High temperature"],a:2,e:"Dehydration, infection, cold, hypoxia, and stress trigger sickling — causing vaso-occlusive crisis."}
   ]},

  {num:2, sem:6, subj:"Mental Health Nursing II", code:"MHN2 615", title:"Mood, Personality & Substance Use Disorders", hrs:10,
   sections:[
     {label:"Mood disorders",pts:[
       "<b>Major Depressive Disorder (MDD):</b> depressed mood/anhedonia for ≥ 2 weeks + ≥ 5 symptoms (SIG E CAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicide)",
       "<b>Bipolar Disorder:</b> Type I (mania + depression) | Type II (hypomania + depression)",
       "<b>Mania features:</b> elevated/irritable mood, decreased need for sleep, grandiosity, racing thoughts, pressured speech, impulsivity, risk-taking",
       "<b>Safety in depression:</b> assess suicidal ideation (ALWAYS ask directly — does NOT increase risk); remove means; 1:1 supervision if high risk",
       "<b>Suicide risk:</b> highest during early recovery phase (energy returns before mood lifts); also: recent loss, social isolation, previous attempts, substance use, chronic illness"
     ]},
     {label:"Substance use disorders",table:{h:["Substance","Intoxication features","Withdrawal features","Treatment"],r:[
       ["Alcohol","Slurred speech, ataxia, disinhibition","Tremors, seizures, DTs (12–48 hrs)","Benzodiazepines for withdrawal; thiamine (Wernicke's); naltrexone/disulfiram"],
       ["Opioids","Sedation, pinpoint pupils, respiratory depression","Yawning, piloerection, diarrhoea, muscle aches","Methadone/buprenorphine maintenance; naloxone for overdose"],
       ["Benzodiazepines","Sedation, anterograde amnesia, respiratory depression","Anxiety, seizures (dangerous)","Gradual taper; no abrupt stop"],
       ["Cocaine/Amphetamines","Euphoria, tachycardia, hypertension, dilated pupils","Crash: depression, fatigue, increased sleep","Supportive; no specific pharmacotherapy"],
       ["Cannabis","Euphoria, conjunctival injection, increased appetite","Mild anxiety, irritability","Supportive; CBT"],
     ]}},
     {label:"Nursing management — substance use",pts:[
       "<b>Brief intervention (AUDIT screening for alcohol):</b> Alcohol Use Disorders Identification Test",
       "<b>Motivational Interviewing (MI):</b> collaborative, patient-centred — builds intrinsic motivation to change",
       "<b>CAGE questionnaire:</b> C (Cut down) A (Annoyed) G (Guilty) E (Eye-opener) — ≥ 2 positive = significant problem",
       "<b>Delirium Tremens (DTs):</b> severe alcohol withdrawal — confusion, hallucinations, hyperthermia, autonomic instability — medical emergency; benzodiazepines + monitoring",
       "<b>Wernicke's encephalopathy:</b> thiamine deficiency in alcoholism — confusion, ataxia, ophthalmoplegia — give IV thiamine BEFORE glucose"
     ]}
   ],
   warn:["Alcohol withdrawal SEIZURES are life-threatening — benzodiazepines are treatment | Opioid withdrawal is very uncomfortable but rarely life-threatening — important distinction","Wernicke's: ALWAYS give thiamine BEFORE glucose in alcoholism — glucose alone can precipitate/worsen Wernicke's"],
   clinical:["De-escalation: CALM (Contact calmly, Assess risk, Listen actively, Manage environment) — for agitated patients","Opioid overdose: classic triad — pinpoint pupils, respiratory depression, coma — naloxone 0.4–2 mg IV/IM/intranasal"],
   mcqs:[
     {q:"Delirium Tremens occurs in:",o:["Opioid overdose","Severe alcohol withdrawal","Cocaine intoxication","Cannabis use"],a:1,e:"Delirium Tremens (DTs) = severe alcohol withdrawal syndrome — confusion, hallucinations, seizures, autonomic instability."},
     {q:"In Wernicke's encephalopathy, give BEFORE glucose:",o:["Folate","Vitamin B12","Thiamine (Vitamin B1)","Niacin"],a:2,e:"Thiamine (B1) must be given BEFORE glucose in alcoholism — administering glucose first can precipitate or worsen Wernicke's."},
     {q:"CAGE questionnaire is used to screen for:",o:["Depression","Anxiety","Alcohol use disorder","Psychosis"],a:2,e:"CAGE = Cut down, Annoyed, Guilty, Eye-opener — brief screening tool for alcohol use disorder; ≥2 positive = significant problem."}
   ]},

  {num:3, sem:6, subj:"Midwifery / OBG Nursing I", code:"OBG1 625", title:"Normal Pregnancy, Labour & Delivery", hrs:14,
   sections:[
     {label:"Antenatal care",pts:[
       "<b>First ANC visit:</b> as early as possible (before 12 weeks) — booking visit",
       "<b>Recommended ANC visits (WHO 2016 ANC model):</b> minimum 8 contacts",
       "<b>Naegele's rule (EDD):</b> LMP + 9 months + 7 days (or LMP + 280 days = 40 weeks)",
       "<b>Fundal height:</b> corresponds to gestational age in weeks from 20–34 weeks (e.g. 28 cm = 28 weeks)",
       "<b>Routine ANC investigations:</b> Hb, blood group & Rh, VDRL/RPR, HIV, HbsAg, urine for protein & sugar, ultrasound",
       "<b>Danger signs in pregnancy (PROMPT):</b> Pallor (severe) | Rupture of membranes early | Oedema of face/hands | Muscle cramps | Pain (abdominal/headache) | Threatened bleed | Decreased foetal movement"
     ]},
     {label:"Stages of labour",table:{h:["Stage","Duration (primipara)","Cervical change","Key events"],r:[
       ["First stage (latent)","8–20 hours total","0–3 cm dilation","Cervical effacement; mild irregular contractions"],
       ["First stage (active)","Included above","4–10 cm (1 cm/hr)","Regular contractions; show; ROM"],
       ["Second stage","30–90 minutes","10 cm (full)","Pushing; delivery of baby"],
       ["Third stage","5–30 minutes","Post-delivery","Delivery of placenta; signs of separation"],
       ["Fourth stage","First 2 hours post-delivery","Recovery","Monitor for PPH; vital signs every 15 min"],
     ]}},
     {label:"Normal delivery care",pts:[
       "<b>Active management of third stage (AMTSL):</b> Oxytocin 10 IU IM within 1 min of delivery → controlled cord traction → uterine massage",
       "<b>AMTSL reduces PPH risk by 60%</b>",
       "<b>Apgar at 1 & 5 minutes:</b> 7–10 normal | 4–6 moderate | 0–3 severe → immediate resuscitation",
       "<b>Newborn care (within first hour):</b> dry and stimulate | assess breathing | skin-to-skin (kangaroo care) | early breastfeeding | prevent hypothermia | eye care | cord care | Vitamin K IM | BCG + OPV + HepB",
       "<b>Complications to watch:</b> PPH (blood loss > 500 mL normal delivery, > 1000 mL CS) | Shoulder dystocia | Cord prolapse | Perineal tears"
     ]},
     {label:"Postpartum care",pts:[
       "<b>Involution of uterus:</b> uterus returns to normal size by 6 weeks; descends 1 cm/day after delivery",
       "<b>Lochia:</b> Rubra (red, days 1–3) → Serosa (pink-brown, days 4–9) → Alba (white/yellow, days 10–14)",
       "<b>Breast care:</b> support bra; nipple care; demand feeding; signs of mastitis (fever, localised pain, redness) → continue breastfeeding + antibiotics",
       "<b>Postnatal check (6 weeks):</b> BP, weight, Hb, uterine involution, perineal healing, contraception counselling, mental health (Edinburgh Postnatal Depression Scale)"
     ]}
   ],
   warn:["AMTSL must include OXYTOCIN (not ergometrine as first choice) — oxytocin within 1 minute of delivery is standard","Lochia order: Rubra → Serosa → Alba (R-S-A) — any reversal or foul smell = sign of infection"],
   clinical:["PPH management (HAEMOSTASIS): H=Help | A=Assess/resuscitate | E=Establish IV access/fluids | M=Massage uterus | O=Oxytocin | S=Shift to OT | T=Tamponade | A=Apply compression sutures | S=Systematic devascularisation | I=Interventional radiology | S=Subtotal hysterectomy"],
   mcqs:[
     {q:"Lochia rubra lasts for:",o:["1–2 days","1–3 days","4–9 days","10–14 days"],a:1,e:"Lochia rubra (red) = days 1–3 post-delivery (bright red, contains blood, decidua, trophoblasts)."},
     {q:"Active management of third stage (AMTSL) includes:",o:["Expectant management only","Oxytocin IM within 1 minute + CCT + uterine massage","Ergometrine only","Manual removal of placenta"],a:1,e:"AMTSL = oxytocin 10 IU IM within 1 min of delivery + controlled cord traction (CCT) + uterine massage — reduces PPH by 60%."},
     {q:"PPH is defined as blood loss > __ after normal vaginal delivery?",o:["300 mL","500 mL","1000 mL","200 mL"],a:1,e:"PPH = blood loss > 500 mL after normal vaginal delivery (> 1000 mL after caesarean section)."}
   ]}
];

const sem7Units = [
  {num:1, sem:7, subj:"Community Health Nursing II", code:"COHN2 710", title:"Primary Health Care & Advanced Community Programs", hrs:14,
   sections:[
     {label:"Primary Health Care (PHC)",pts:[
       "<b>Alma Ata Declaration (1978):</b> 'Health for All by Year 2000' through PHC",
       "<b>8 essential components of PHC:</b> Education (health) | Nutrition | Safe water/Sanitation | MCH + family planning | Immunisation | Endemic disease control | Appropriate treatment | Essential drugs",
       "<b>3 principles of PHC:</b> Equity | Community participation | Multi-sectoral collaboration",
       "<b>Sustainable Development Goals (SDGs):</b> SDG 3 = Good Health and Well-being | SDG 3.1 = Reduce MMR | SDG 3.2 = End preventable deaths of children",
       "<b>Universal Health Coverage (UHC):</b> all people access quality health services without financial hardship — India's Ayushman Bharat scheme"
     ]},
     {label:"Ayushman Bharat — Pradhan Mantri Jan Arogya Yojana (PM-JAY)",pts:[
       "World's largest government-funded health insurance scheme",
       "Covers 10.74 crore poor and vulnerable families (~50 crore beneficiaries)",
       "Cover: ₹5 lakh per family per year for secondary and tertiary care",
       "Cashless and paperless at empanelled hospitals",
       "Includes pre and post-hospitalisation expenses",
       "<b>Health and Wellness Centres (HWCs):</b> upgraded SHCs and PHCs — comprehensive primary health care"
     ]},
     {label:"School health programme",pts:[
       "<b>Rashtriya Bal Swasthya Karyakram (RBSK):</b> 4Ds — Defects at birth, Deficiencies, Diseases, Development delays — screening from birth to 18 years",
       "<b>School health services:</b> medical inspection, immunisation, nutrition (Mid-Day Meal), health education, sanitation",
       "<b>Mid-Day Meal Scheme:</b> reduces absenteeism; improves nutritional status; 2.37 crore children covered",
       "<b>Anganwadi workers (AWW):</b> frontline worker for ICDS — nutrition, pre-school education, immunisation, health check-ups (0–6 years)"
     ]},
     {label:"Communicable disease surveillance",pts:[
       "<b>IDSP (Integrated Disease Surveillance Programme):</b> real-time surveillance for outbreaks — S, P, L forms (community, outpatient, lab)",
       "<b>Outbreak investigation steps (STEPS):</b> 1. Confirm diagnosis | 2. Confirm outbreak | 3. Define cases | 4. Describe (person, place, time) | 5. Generate hypothesis | 6. Test hypothesis | 7. Implement control | 8. Communicate",
       "<b>Epidemic curve:</b> point source (sharp bell curve) | Propagated (progressive increase) | Mixed",
       "<b>Herd immunity threshold:</b> measles 92–95% | polio 80–85% | influenza 33–44%"
     ]}
   ],
   warn:["Incubation period vs generation time: incubation = exposure to symptoms (individual) | generation time = primary to secondary case (population-level) — distinct concepts","Ayushman Bharat covers SECONDARY and TERTIARY care — PRIMARY care handled by Health and Wellness Centres"],
   clinical:["ASHA's role in home visits: antenatal care, immunisation tracking, family planning counselling, neonatal care support, TB DOTS — document visit in Village Health Register","Epidemic curve shape tells the source: point source = common source event (food poisoning); propagated = person-to-person spread"],
   mcqs:[
     {q:"Ayushman Bharat PM-JAY coverage per family per year?",o:["₹1 lakh","₹2 lakh","₹5 lakh","₹10 lakh"],a:2,e:"PM-JAY provides health cover of ₹5 lakh per family per year for secondary and tertiary hospitalisation."},
     {q:"RBSK screens children for the 4Ds. These are:",o:["Diseases, Disorders, Deficits, Deaths","Defects at birth, Deficiencies, Diseases, Developmental delays","Diabetes, Deficiency, Diphtheria, Death","Diet, Discipline, Development, Disease"],a:1,e:"RBSK 4Ds = Defects at birth, Deficiencies (nutritional), Diseases, Development delays — screened from birth to 18 years."},
     {q:"IDSP is used for:",o:["Immunisation tracking","Disease outbreak surveillance","Drug supply management","Hospital accreditation"],a:1,e:"IDSP (Integrated Disease Surveillance Programme) monitors and responds to disease outbreaks in real time."}
   ]},

  {num:2, sem:7, subj:"Midwifery / OBG Nursing II", code:"OBG2 720", title:"High-Risk Pregnancy & Gynaecological Conditions", hrs:14,
   sections:[
     {label:"Pre-eclampsia & eclampsia",pts:[
       "<b>Pre-eclampsia:</b> BP ≥ 140/90 mmHg + proteinuria (≥ 300 mg/24 hrs) after 20 weeks gestation",
       "<b>Severe pre-eclampsia:</b> BP ≥ 160/110 + severe features (headache, visual disturbances, epigastric pain, oliguria, pulmonary oedema)",
       "<b>HELLP syndrome:</b> Haemolysis + Elevated Liver enzymes + Low Platelets — variant of severe pre-eclampsia",
       "<b>Eclampsia:</b> seizures in pre-eclamptic patient; can occur antenatally, intrapartally, postnatally (up to 48 hrs)",
       "<b>Management of eclampsia:</b> Magnesium sulphate (MgSO4) — prevents and treats seizures; antidote = calcium gluconate",
       "<b>MgSO4 toxicity:</b> absent patellar reflexes (first sign), respiratory depression, cardiac arrest — monitor RR, urine output, patellar reflexes"
     ]},
     {label:"Obstetric emergencies",table:{h:["Emergency","Key features","Immediate nursing action"],r:[
       ["Cord prolapse","Cord visible/palpable; FHR drop","Knee-chest position; push cord back; O₂; emergency CS"],
       ["Shoulder dystocia","Head delivered; shoulder stuck (turtle sign)","HELPERR mnemonic; McRobert's position; suprapubic pressure"],
       ["Placenta praevia","Painless bright red bleeding","No vaginal exam; IV access; monitor FHR; planned CS"],
       ["Abruption placentae","Painful dark bleeding; board-like uterus","IV access; monitor FHR; prepare for emergency delivery"],
       ["Ruptured uterus","Sudden cessation of contractions; FHR loss; shock","Emergency laparotomy; massive transfusion protocol"],
     ]}},
     {label:"Gynaecological conditions",pts:[
       "<b>Menorrhagia:</b> excessive menstrual bleeding (> 80 mL/cycle or > 7 days); causes: fibroids, endometrial polyp, PCOS, coagulopathy",
       "<b>PCOS (Polycystic Ovary Syndrome):</b> Rotterdam criteria — 2 of 3: oligomenorrhoea, hyperandrogenism (acne/hirsutism), polycystic ovaries on USS; associated with insulin resistance",
       "<b>Cervical cancer:</b> most common gynaecological cancer in India; HPV (strains 16,18) the primary cause; screening by Pap smear (every 3 years from age 21 or 3 years after sexual debut)",
       "<b>Breast cancer:</b> most common cancer in women; BRCA1/BRCA2 mutation; BSE monthly; mammography annually (> 40 years); triple assessment (clinical + mammography + biopsy)"
     ]}
   ],
   warn:["Placenta praevia: NEVER do a vaginal examination — risk of catastrophic haemorrhage | Cord prolapse: knee-chest position (not Trendelenburg) — immediate action","MgSO4 toxicity monitoring: RR > 12/min | Urine output > 25 mL/hr | Patellar reflexes present — if absent, STOP infusion"],
   clinical:["Safe Delivery App: evidence-based guide for midwives covering normal birth, complications, and newborn care — approved by WHO","Pap smear technique: collect from transformation zone (squamocolumnar junction) — highest yield for pre-cancerous cells"],
   mcqs:[
     {q:"Antidote for MgSO4 toxicity?",o:["Protamine sulphate","Calcium gluconate","Naloxone","Flumazenil"],a:1,e:"Calcium gluconate 10 mL of 10% solution IV is the antidote for MgSO4 toxicity — given slowly over 10 minutes."},
     {q:"In cord prolapse, immediate nursing action is:",o:["High Fowler's position","Knee-chest position + push presenting part up","Fundal pressure","Apply CTG immediately"],a:1,e:"Knee-chest position (or Trendelenburg) relieves pressure on cord; push presenting part upward; O₂; emergency CS."},
     {q:"HPV strains most commonly associated with cervical cancer?",o:["6 and 11","16 and 18","31 and 33","45 and 52"],a:1,e:"HPV strains 16 and 18 cause ~70% of cervical cancers — targeted by bivalent and quadrivalent HPV vaccines."}
   ]},

  {num:3, sem:7, subj:"Nursing Research & Statistics", code:"NRES 730", title:"Research Methodology & Statistics", hrs:14,
   sections:[
     {label:"Research process",pts:[
       "<b>Steps:</b> 1. Identify problem → 2. Review literature → 3. Define objectives/hypotheses → 4. Choose research design → 5. Select sample → 6. Data collection → 7. Data analysis → 8. Interpret results → 9. Disseminate findings",
       "<b>Research problem statement:</b> should be specific, measurable, researchable, ethical, and feasible",
       "<b>Hypothesis:</b> testable prediction; Null hypothesis (H₀) = no difference; Alternative hypothesis (H₁) = difference exists",
       "<b>Variables:</b> Independent (cause/manipulated) | Dependent (effect/measured) | Confounding (interferes with relationship)"
     ]},
     {label:"Research designs",table:{h:["Design","Type","Example","Strength"],r:[
       ["RCT","Experimental","Drug A vs Drug B (randomised)","Highest evidence; controls bias"],
       ["Quasi-experimental","Near experimental","Before-after without randomisation","Feasible; less control"],
       ["Cohort study","Observational (prospective)","Follow smokers → cancer","Incidence; temporal sequence"],
       ["Case-control","Observational (retrospective)","Lung cancer ← smoking history","Rare diseases; quick; cheap"],
       ["Cross-sectional","Observational","Prevalence survey","Point-in-time; cheap; no causation"],
       ["Case study","Qualitative","In-depth single case","Rich data; not generalisable"],
     ]}},
     {label:"Sampling methods",pts:[
       "<b>Probability sampling (random):</b> every member has known chance of selection — more representative",
       "Simple random | Systematic | Stratified (groups, then random) | Cluster (geographical areas)",
       "<b>Non-probability sampling:</b> convenient selection — less representative",
       "Convenience | Purposive (specific criteria) | Snowball (chain referral — hidden populations) | Quota",
       "<b>Sample size:</b> larger = more representative; determined by power analysis, confidence interval, effect size"
     ]},
     {label:"Statistics",pts:[
       "<b>Descriptive statistics:</b> describe data — mean, median, mode, standard deviation, range",
       "<b>Mean:</b> sum ÷ n (affected by outliers) | <b>Median:</b> middle value (not affected by outliers) | <b>Mode:</b> most frequent",
       "<b>Inferential statistics:</b> make inferences about population from sample",
       "<b>p-value:</b> probability of results occurring by chance; p < 0.05 = statistically significant (5% significance level)",
       "<b>Confidence interval (CI):</b> 95% CI means 95% probability true value lies within the range",
       "<b>Parametric tests:</b> t-test (compare 2 means), ANOVA (compare > 2 means), Pearson correlation",
       "<b>Non-parametric tests:</b> Mann-Whitney U, Chi-square test (for categorical data), Spearman correlation",
       "<b>Chi-square test:</b> compares observed vs expected frequencies in categorical data (e.g. gender vs outcome)"
     ]}
   ],
   warn:["p < 0.05 = statistically significant | p > 0.05 = not significant — NOT the same as clinically significant","RCT = highest level of evidence for intervention studies | Systematic review/meta-analysis = highest overall evidence level"],
   clinical:["Evidence-Based Practice (EBP): integrate best evidence + clinical expertise + patient values — the foundation of modern nursing practice","PICO framework for research question: Patient | Intervention | Comparison | Outcome"],
   mcqs:[
     {q:"A p-value of 0.03 indicates:",o:["Not statistically significant","Statistically significant (p < 0.05)","The study is biased","The null hypothesis is true"],a:1,e:"p < 0.05 means there is less than 5% probability the results occurred by chance — statistically significant."},
     {q:"RCT (Randomised Controlled Trial) provides which level of evidence?",o:["Lowest","Moderate","Highest individual study level","Not useful"],a:2,e:"RCT provides the highest level of evidence for evaluating interventions (below only systematic reviews/meta-analyses)."},
     {q:"Chi-square test is used for:",o:["Comparing two means","Categorical data (comparing frequencies)","Correlation between continuous variables","Survival analysis"],a:1,e:"Chi-square test compares observed vs expected frequencies — used for categorical/nominal data."}
   ]}
];

const sem8Units = [
  {num:1, sem:8, subj:"Internship — Adult Health Nursing", code:"INT8 810", title:"Internship: Adult Health & Critical Care", hrs:80,
   sections:[
     {label:"Clinical competencies — Adult Health Nursing",pts:[
       "<b>Assessment skills:</b> comprehensive physical assessment, systems review, vital signs monitoring",
       "<b>Monitoring:</b> cardiac monitoring and basic ECG interpretation, haemodynamic monitoring, CVP measurement, ABG interpretation",
       "<b>Procedures:</b> IV cannulation, blood sampling, wound care and dressing, urinary catheterisation, NG tube insertion and care, tracheostomy care",
       "<b>Critical care:</b> ventilator care, ICU care bundles, management of CAUTI/CLABSI/VAP prevention",
       "<b>Medication administration:</b> IV drug administration (bolus and infusion), calculation of drug doses and drip rates, management of high-alert medications"
     ]},
     {label:"OSCE assessment domains",table:{h:["Domain","Skills assessed","Marks"],r:[
       ["Adult Health Nursing","History taking, physical assessment, procedures, medication","20 marks"],
       ["Child Health Nursing","Paediatric assessment, immunisation, IMNCI, growth monitoring","20 marks"],
       ["Mental Health Nursing","MSE, therapeutic communication, risk assessment","20 marks"],
       ["Community Health Nursing","Home visit, community assessment, health education","20 marks"],
       ["Midwifery / OBG Nursing","ANC examination, Leopold's manoeuvres, newborn care","20 marks"],
       ["Total","Integrated OSCE across all 5 specialties","100 marks"],
     ]}},
     {label:"Competency levels",pts:[
       "<b>Level 1:</b> Can describe the procedure but cannot perform",
       "<b>Level 2:</b> Can perform with assistance/supervision",
       "<b>Level 3:</b> Can perform independently with supervision present",
       "<b>Level 4:</b> Can perform competently and independently",
       "<b>Logbook requirement:</b> all skills must be at Level 3 or above before degree award",
       "<b>Attendance:</b> 100% attendance in clinical areas mandatory for degree; minimum 80% for theory"
     ]},
     {label:"Professional responsibilities during internship",pts:[
       "Adhere to nursing code of ethics and professional conduct at all times",
       "Maintain patient confidentiality and privacy",
       "Document all care accurately and legibly in nursing notes",
       "Report to charge nurse/senior nurse any adverse event, incident, or near miss",
       "Participate in ward rounds and multidisciplinary team meetings",
       "Reflect on practice — clinical supervision and reflective diaries",
       "Prepare for final OSCE — practice skills in simulation lab",
       "Complete all logbook entries and get tutor signatures"
     ]}
   ],
   warn:["100% clinical attendance is MANDATORY — even one unexcused day can delay degree award | 80% theory attendance minimum","OSCE: each specialty = 20 marks; total 100 marks; must pass each component separately — no overall grace marks"],
   clinical:["Use each clinical posting to maximise exposure — ask for supervised opportunities beyond the minimum required","Reflective practice (Gibbs cycle): Description → Feelings → Evaluation → Analysis → Conclusion → Action plan"],
   mcqs:[
     {q:"Minimum clinical attendance required for B.Sc Nursing degree award?",o:["75%","80%","90%","100%"],a:3,e:"100% attendance in clinical areas is mandatory for the award of the B.Sc Nursing degree under INC regulations 2020."},
     {q:"Level 3 competency in clinical skills means:",o:["Can describe only","Can perform with assistance","Can perform independently with supervision present","Can teach others"],a:2,e:"Level 3 = can perform the skill independently while supervisor is present — the minimum required for logbook sign-off."},
     {q:"The integrated OSCE for Semester VIII covers how many specialties?",o:["3","4","5","6"],a:2,e:"The Semester VIII OSCE covers 5 specialties × 20 marks = 100 marks total."}
   ]}
];

// Combine all semester units
const allSemesterUnits = {
  2: sem2Units,
  3: sem3Units,
  4: sem4Units,
  5: sem5Units,
  6: sem6Units,
  7: sem7Units,
  8: sem8Units
};

// Semester metadata
const semesterMeta = {
  1: {name:"Semester I", subtitle:"Foundation Sciences", color:"#E1F5EE", tc:"#085041", bc:"#1D9E75", credits:12},
  2: {name:"Semester II", subtitle:"Bio-Sciences & Informatics", color:"#E6F1FB", tc:"#042C53", bc:"#185FA5", credits:31},
  3: {name:"Semester III", subtitle:"Clinical Sciences", color:"#EEEDFE", tc:"#26215C", bc:"#534AB7", credits:17},
  4: {name:"Semester IV", subtitle:"Advanced Adult Health", color:"#FAEEDA", tc:"#412402", bc:"#854F0B", credits:21},
  5: {name:"Semester V", subtitle:"Specialty Nursing", color:"#FAECE7", tc:"#4A1B0C", bc:"#993C1D", credits:11},
  6: {name:"Semester VI", subtitle:"Advanced Specialties", color:"#FBEAF0", tc:"#4B1528", bc:"#993556", credits:21},
  7: {name:"Semester VII", subtitle:"Research & OBG", color:"#EAF3DE", tc:"#173404", bc:"#3B6D11", credits:26},
  8: {name:"Semester VIII", subtitle:"Internship & OSCE", color:"#F1EFE8", tc:"#2C2C2A", bc:"#5F5E5A", credits:12},
};
