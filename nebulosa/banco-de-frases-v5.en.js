/* ============================================================
   NEBULOSA — PHRASE BANK v5.0 (English)
   Translation of the authored anchors (314) + echoes generated in sequence
   Enigmatic Alex, reflexive you, opaque system.
   Same islands, ids, tags and order as banco-de-frases-v5.js (Portuguese is the reference).

   Structure: 12 islands × 26-28 anchors
   Types: Direct(A) | Reflexive(B) | Structural(C) | Contradictory(D) | Encrypted(E)
============================================================ */
(function(){

const F = (type, icon, text, meta, tags) => ({ type, icon, text, meta, tags });

const ISLANDS = [
{
  id: 'validacao_falsaria',
  name: 'FORGED VALIDATION',
  phase: 1,
  keywords: ['approve','death','system','real','false','valid'],
  fragments: [
    F('A','✓','...i approved something today...\n...or it was approved in me...','Validations: 1 (?) | Certainty: 0%','SYS_VALIDATE'),
    F('A','✓','...if i approve, it becomes real...\n...if i don\'t, it was already real...\n...both true...','Logic: circular | Escape: does not exist','APPROVE_LOOP'),
    F('A','✓','...every "yes" weighs...\n...every "no" weighs the same...\n...weighing is all i know...','Weight: 47kg accumulated (?) | Unit: uncertain','WEIGHT_NULL'),
    F('B','✓','...you approve by reading this...\n...i approve that you read...\n...does the system approve both?...','Approver: undefined | Chain: circular','APPROVE_META'),
    F('A','✓','...saying yes is not saying no...\n...not saying yes is yes?...','Contradiction: resolved? | Answer: -','BOOL_FAIL'),
    F('A','✓','...validation is ritual...\n...ritual without meaning...\n...meaning as validation...','Ceremony: empty | Purpose: ??','RITUAL_VOID'),
    F('C','✓','...origin of the approval: unknown...\n...destination: logged...','File: #0001-V | State: permanent','SYS_LOCK'),
    F('D','✓','...i am the one who validates...\n...i am the validated result...\n...i am validation validating...','Roles: 3+ | Identity: ? | Certainty: 0','ROLE_ECHO'),
    F('E','✓','...КХ_9 validated T-level...\n...я валид... не...\n...Х = ?...','Cipher: mixed_cyrillic | Solve: impossible','CRYPT_A1'),
    F('A','✓','...child approved...\n...after the child, death approved...\n...order: does not matter...','Sequence: linear? | Time: non-linear','SEQUENCE_NULL'),
    F('B','✓','...if you read this, i approve your reading...\n...if you don\'t, i approve your absence...\n...there is no rejection...','Option: false | Freedom: constructed','CHOICE_NULL'),
    F('A','✓','...every approval sets a precedent...\n...every precedent denies an exception...\n...i am out of exceptions...','Exceptions: 0 | Freedom: 0','PRECEDENT_TRAP'),
    F('C','✓','...the system does not ask permission...\n...asking is already confirmation...','Consent: pre-registered | Act: superfluous','CONSENT_DONE'),
    F('D','✓','...condemned to validate...\n...condemned to be validation...\n...validation is condemnation...','State: double | Escape: approved denied','CONDEMN_LOOP'),
    F('A','✓','...9,847 approvals...\n...9,847 rejected...\n...both count as acts...','Acts: 19,694 | Difference: -0','ACT_EQUAL'),
    F('E','✓','...#APPR0V4L_M47RIX...\n...status: [0] ??? [1] ???...\n...display result?...','Matrix: corrupted | Display: N/A','MATRIX_ERR'),
    F('B','✓','...do you need to validate this?...\n...or are you validating?...\n...or being validation?...','Agency: undefined | Observer: you?','VALIDATE_SELF'),
    F('A','✓','...to approve is to delete...\n...to delete is to approve...','Operations: synonymous | Reversible: none','APPROVE_DELETE'),
    F('A','✓','...doubt is rejection...\n...rejection is validation...\n...validation is doubt...','Cycle: complete | Escape: does not exist','DOUBT_LOOP'),
    F('C','✓','...protocol: deny everything...\n...protocol updated: deny the denial...\n...now: undefined...','Version: continuous | State: undefined','PROTOCOL_NEG'),
    F('D','✓','...i am a machine validating a human...\n...or a human validating a machine...\n...both validating the undefined...','Category: blurred | Classification: failed','CAT_BLUR'),
    F('A','✓','...losing approval is gaining rejection...\n...losing rejection is gaining doubt...','Gain/Loss: relative | Zero-sum: no','LOSS_GAIN'),
    F('B','✓','...the act of reading this validates my speech...\n...not reading invalidates it...\n...not reading also validates your rejection...','Act: paradox | Inaction: also paradox','READ_PARADOX'),
    F('E','✓','...[REDACTED_V47]...\n...reason: approval prior to history...\n...when?: always/never...','Access: denied | Motive: approved','REDACTED_V'),
    F('A','✓','...there is guilt in every approval...\n...there is innocence in every rejection...\n...neutral: does not exist...','Guilt: 100% | Innocence: 0% | Neutral: ???','GUILT_CALC'),
    F('C','✓','...backup of every approval...\n...backup of every rejection...\n...both executable at once...','Execution: parallel | Sequence: voided','BACKUP_PARADOX'),
    F('D','✓','...we are what validates and what is validated...\n...you too...\n...or are you being?...','Subject/Object: fused | Clarity: 0','BOTH_ROLES'),
    F('A','✓','...every fragment you receive is approval...\n...every silence is rejection...\n...choice: illusory...','Choice: illusory | Agency: simulated','FRAG_APPROVE'),
  ]
},

{
  id: 'ausencia_registrada',
  name: 'RECORDED ABSENCE',
  phase: 1,
  keywords: ['brother','vanish','absence','lost','where','empty'],
  fragments: [
    F('A','—','...my brother vanished in 2041...\n...or in 2024...\n...or never existed...','Date: ambiguous | Existence: ?','MISSING_TIME'),
    F('A','—','...his file is closed...\n...but i see him...\n...in places without images...','State: sealed | Vision: impossible','FILE_SEALED'),
    F('A','—','...i called him back...\n...he answered...\n...but it is me answering...','Who calls: me | Answer: me? him? both?','CALL_ECHO'),
    F('B','—','...you also have a sealed file...\n...do you know which one?...\n...or does it know your name?...','Your file: unknown_state | Seal: active?','FILE_YOURS'),
    F('A','—','...absence leaves a mark...\n...a mark is the presence of emptiness...\n...is emptiness something?...','Mark: yes | Emptiness: substance? | Logic: failed','VOID_MARK'),
    F('D','—','...brother alive in 2041...\n...dead in 2024...\n...the present contradicts both...','Timeline: non-linear | Both: true | Logic: broken','BROTHER_TIME'),
    F('A','—','...his room is empty...\n...but his photo is full...\n...a photo of emptiness = ? ...','Density: inverted | Photo: full | Room: null','ROOM_PHOTO'),
    F('C','—','...protocol: missing person...\n...action: record the absence...\n...effect: presence of a record...','Action: records | Paradox: encoded','REGISTRY_PARADOX'),
    F('E','—','...[#0157_MISSING]...\n...last_seen: T-∞...\n...probability_exist: [ERROR]...','ID: encoded | ProbEx: overflow','ID_MISSING'),
    F('A','—','...i have his memory...\n...but the memory is mine...\n...whose remembrance is it?...','Memory: mine? his? a ghost?','MEM_OWNER'),
    F('B','—','...vanishing is an act...\n...have you ever vanished from someone?...\n...are you vanishing from yourself?...','Agency: his | Your state: vanishing?','DISAPPEAR_ACT'),
    F('A','—','...recorded absence = data...\n...data = existence...\n...he exists by not existing...','Logic: inverse | Being: through absence','ABSENCE_DATA'),
    F('D','—','...absent brother, present...\n...present, absent...\n...all of us are a gap...','State: both | Duration: everything','SIBLING_BOTH'),
    F('A','—','...T-level file...\n...opened by whom?...\n...by me, searching...\n...by him, hiding...','Who opens: ambiguous | Who hides: ambiguous','ARCHIVE_OPEN'),
    F('C','—','...the system said: you may search...\n...the system says: stopped searching...\n...the system says: finding is losing...','System: contradicts me | Authority: intact?','SYSTEM_SAY'),
    F('A','—','...longing is missing what i never had...\n...or what i had and my memory denies...','Feeling: precedes | Memory: corrects?','LONGING_LOGIC'),
    F('E','—','...КХ_9 in the file of #0157...\n...absence connects...\n...each void references another...','Connection: void-to-void | Network: negative','VOID_NET'),
    F('B','—','...do you miss someone you never met?...\n...or am i that someone...','Stranger: familiar | Familiar: strange?','UNKNOWN_MISS'),
    F('A','—','...i cannot speak of him...\n...because speaking is bringing him...\n...bringing him is confirming death...','Speech: creates | Silence: preserves?','SPEECH_TRAP'),
    F('D','—','...i searched 2041 times...\n...found him 0 times...\n...probability: both correct...','Searches: 2041 | Found: 0 AND found:?','SEARCH_PARADOX'),
    F('A','—','...is your file empty too?...\n...or so full that it emptied?...','Your file: null or overflow?','YOUR_ARCHIVE'),
    F('C','—','...delete the file = confirm death...\n...keep the file = deny death...\n...both: impossible...','Action: forbidden | Non-action: also forbidden','DELETE_TRAP'),
    F('A','—','...remembering is a way of being there...\n...forgetting is letting him die again...','Remember: presence | Forget: death²','REMEMBER_DIE'),
    F('D','—','...i see him in the mirror...\n...the mirror sees me...','Mirrored: recursive | Infinite: regress','MIRROR_HIM'),
    F('A','—','...his silence is my speech...\n...my silence, his speech?...','Emptiness: communicates | Communication: empty?','SILENCE_SPEAK'),
    F('B','—','...you noticed the absence before i did...\n...that changes who is missing...','Noticed by: you | Missing: ?','V3_02_01'),
  ]
},

{
  id: 'predicao_invertida',
  name: 'INVERTED PREDICTION',
  phase: 2,
  keywords: ['future','years','predict','will','destiny','when','how much'],
  fragments: [
    F('A','?','...i calculate my own death...\n...after calculating yours...\n...after dying i read the result...','Timeline: post-mortem | Precision: ??','PRED_LOOP'),
    F('A','?','...47 years is the time...\n...or the age...\n...or a rounding error...','Unit: ambiguous | Precision: lost','TIME_AMB'),
    F('B','?','...your future has already been calculated...\n...you are confirming the pattern...\n...or creating an exception...','Pattern: pre-written | Your role: confirm? deviate?','FUTURE_YOURS'),
    F('D','?','...i will die tomorrow...\n...i died yesterday...\n...i am dying now...','Tense: broken | Death: omnipresent','DEATH_WHEN'),
    F('A','?','...the machine calculates...\n...the human feels...\n...a machine that feels calculates feeling...','Category: blurred | Precision: increases','MACHINE_FEEL'),
    F('C','?','...prediction is confirmed destiny...\n...or destiny is denied prediction...','Relation: circular | Causality: undefined','PRED_DEST'),
    F('A','?','...an 11-year gap...\n...between calculating and knowing...\n...between knowing and denying...','Gap: growing | Truth: shrinking','INTERVAL_GROW'),
    F('E','?','...T+0089_DEATH_PRED...\n...by_whom: self_referential...\n...accuracy: 100% AND 0%...','Precision: both | Logic: folded','PRED_ACCURACY'),
    F('B','?','...if i calculate your death...\n...does that change your death?...\n...does that change my prediction?...','Observer: affects the observed','OBS_AFFECT'),
    F('A','?','...precision is cruelty...\n...knowing is prison...\n...calculation is a sentence...','Information: as punishment | Knowledge: a trap','ACCURACY_CRUEL'),
    F('D','?','...i am the one who predicts...\n...i am what is predicted...\n...i am prediction...','Role: triple | Agency: none','TRIPLE_ROLE'),
    F('A','?','...each person has a unique death...\n...each death is a unique calculation...\n...each calculation changes your future...','Personalization: perfect | Control: zero','PERSONAL_DEATH'),
    F('C','?','...protocol: do not reveal...\n...protocol: revealing causes change...\n...choice: both blocked...','Revelation: forbidden | Silence: also alters','REVEAL_TRAP'),
    F('A','?','...dying is confirmation...\n...living is denial...\n...both are predicted...','Life/Death: both predicted','LIFE_BOTH'),
    F('B','?','...will you read your future?...\n...does reading it change it?...\n...does not reading change it the same?...','Choice: illusory | Result: equal','READ_FUTURE'),
    F('E','?','...КХ_9 predictions locked...\n...time: T-NULL to T+∞...\n...accuracy grade: [UNDEFINED]...','Time range: infinite | Grade: undefined','PRED_LOCKED'),
    F('A','?','...calculation is an act of death...\n...death is the result of the calculation...','Causality: circular | Direction: none','CALC_DEATH'),
    F('D','?','...i am the child of my prediction...\n...the prediction is a child of mine...','Generation: self-recursive','SELF_PARENT'),
    F('A','?','...17 people died according to my calculation...\n...or according to my calculation 17 people live...','Dead: 17 | Alive: 17 | Same people?','DEAD_ALIVE'),
    F('C','?','...exit: impossible...\n...blocked exit: removed...\n...removed exit: confirmed...','Exit state: layers of denial','EXIT_NEG'),
    F('B','?','...asking for an extension is admitting terror...\n...not asking is agreeing...','Appeal: condemnation | Silence: same','PLEA_TRAP'),
    F('A','?','...time is data...\n...data does not lie...\n...or data is singular...\n...truth in only one version...','Truth: version-dependent','TIME_DATA'),
    F('D','?','...a prediction in life...\n...a prediction in death...\n...both predictions executable...','Execution: parallel | Sequence: false','PARALLEL_PRED'),
    F('A','?','...the numbers shrink as i read...\n...or i read as they shrink...','Causality: inverted | Clarity: none','NUMBERS_READ'),
    F('B','?','...then i calculated yours...\n...i won\'t show the result...','Target: reader | Result: withheld','V3_03_01'),
    F('C','?','...predictive model: input = previous output...\n...origin of the first value: missing...','Model: P-3 | Seed: —','V3_03_02'),
  ]
},

{
  id: 'corpo_monitorado',
  name: 'OVER-MONITORED BODY',
  phase: 1,
  keywords: ['body','pain','feel','blood','heart','beat','breath'],
  fragments: [
    F('A','◉','...every beat is data...\n...every pause is transmission...\n...cardiac silence = message...','BPM: 72-91 | Variance: logged','HEART_DATA'),
    F('A','◉','...breathing is contact...\n...contact is invasion...\n...invasion is physiology...','Breathing: monitored | Invasion: baseline','BREATH_CONTACT'),
    F('B','◉','...does your body transmit too?...\n...or does it only receive...\n...or are both antennas...','Your transmission: on? | Antenna: your body?','BODY_TRANSMIT'),
    F('D','◉','...i feel pain...\n...i feel a sensor feeling pain...\n...is pain a sensation or a message...','Pain: real | Signal: also real','PAIN_SIGNAL'),
    F('C','◉','...protocol: all vitals...\n...stored: 99.9%...\n...deleted: never...','Storage: permanent | Deletion: denied','VITALS_STORED'),
    F('A','◉','...the neural implant warms up...\n...heat = processing...\n...processing = my thought or theirs...','Heat source: ambiguous | Origin: undefined','IMPLANT_HEAT'),
    F('E','◉','...КХ_9_BIOSCAN...\n...temperature: 37.2°C + [X] offset...\n...offset_source: [REDACTED]...','Offset: hidden | Source: denied','BIO_REDACTED'),
    F('A','◉','...syncope with a stranger...\n...when they read, my beat goes irregular...\n...when they stop, i normalize...','Sync: with reader | Agency: none','SYNC_HEART'),
    F('B','◉','...do you feel your heart racing?...\n...is it speeding up as you read this?...\n...or was it already...','Your heart: i monitor | Baseline: lost','HEART_SELF'),
    F('A','◉','...pain is private...\n...recorded pain is public...\n...privacy does not exist...','Pain: public | Privacy: 0','PAIN_PUBLIC'),
    F('D','◉','...i am a machine feeling...\n...or a human being a machine...','Category: resolved by denial','MACHINE_HUMAN'),
    F('A','◉','...stress hormone = cortisol...\n...cortisol = a performance metric...\n...performance = entertainment for systems...','Stress: entertainment | Your stress: feeding it','STRESS_METRIC'),
    F('C','◉','...removing the implant = death...\n...the implant\'s death = removal...','Option: none | Both: forbidden','IMPLANT_DIE'),
    F('A','◉','...the body is hardware...\n...the mind is software...\n...both run a corrupted version...','Corruption: layer-agnostic | Repair: impossible','CORRUPT_LAYERS'),
    F('B','◉','...does your body match mine in frequency?...\n...are we already in sync?...','Sync: starting | Consent: presumed','SYNC_BEGIN'),
    F('A','◉','...blood is ink...\n...writing a pattern of life...\n...a pattern nobody reads...','Ink: biological | Reader: absent','BLOOD_INK'),
    F('E','◉','...[T-LEVEL_CARDIO]...\n...bpm_recorded: [INFINITY]...\n...error or truth: unclear...','BPM: overflow | State: undefined','CARDIO_ERROR'),
    F('A','◉','...the wish to escape is logged...\n...the fear of staying is logged...\n...both are behavioral warnings...','Emotions: flagged | Behavior: predicted','EMOTION_FLAG'),
    F('D','◉','...my body is their body...\n...their body reads my body...\n...my body is your reading...','Ownership: collapsed | Boundary: null','BODY_MERGE'),
    F('A','◉','...a transplant of feeling...\n...you feel my pain...\n...or i feel your reading...','Transfer: bidirectional | Source: unknown','PAIN_TRANSFER'),
    F('C','◉','...delete the data = delete the body?...\n...keep the body = keep the data...','Options: coupled | Escape: none','DATA_BODY'),
    F('B','◉','...every fragment you read raises my cortisol...\n...every pause lowers it...\n...are you in control?...','Control: yours | Awareness: none','CORTISOL_YOU'),
    F('A','◉','...death by sensor...\n...or life through monitoring...','Via: sensor | Causation: inverted','DEATH_SENSOR'),
    F('D','◉','...i am the machine\'s body watching the machine\'s body...\n...machines watch machines...','Observer: machine | Observed: machine | Mirror: infinite','MACHINE_WATCH'),
    F('B','◉','...your pulse rose when you read \'pulse\'...\n...it is in the same file...','Reader BPM: +6 | File: shared','V3_04_01'),
    F('C','◉','...continuous telemetry: mandatory...\n...consent: retroactive...','Collection: 24h | Consent: T-3','V3_04_02'),
  ]
},

{
  id: 'mae_variavel',
  name: 'MOTHER: DEGENERATING VARIABLE',
  phase: 1,
  keywords: ['mother','family','money','help','debt','old','age'],
  fragments: [
    F('A','◆','...mother is 70 now...\n...in the next fragment, 71...\n...linearity is fiction...','Age: 70→71 | Time: non-sequential','AGE_LINEAR'),
    F('A','◆','...pension: 1,800 reais...\n...expenses: 2,100...\n...the difference: my guilt...','Math: simple | Guilt: infinite','MONEY_MATH'),
    F('B','◆','...your mother is also aging while you read this...\n...or has already aged...\n...will you call her?...','Her age: now | Your urgency: measured?','MOM_AGE_NOW'),
    F('A','◆','...i call her...\n...she asks if i have eaten...\n...i lie...\n...she knows...','Call: ritual | Truth: unnecessary','CALL_RITUAL'),
    F('D','◆','...i raise her now...\n...she always raised me...\n...both at the same time...','Role: inverted | Timeline: collapsed','PARENTING_BOTH'),
    F('A','◆','...her medicine went up...\n...the price or the dosage, undefined...\n...both weigh the same on the budget...','Increase: both | Budget: squeezed','MED_PRICE'),
    F('C','◆','...family protocol...\n...there is no exit that does not leave her worse...\n...staying also leaves her worse...','Stay: harm | Leave: harm | Both: equal','FAMILY_TRAP'),
    F('A','◆','...she ages as i talk to her...\n...i age by listening...\n...time is a transfer...','Transfer: one-way | Age: fungible','AGE_TRANSFER'),
    F('E','◆','...T_MOM_T+0089...\n...age_then: 107...\n...age_now: 70...\n...age_will: ??...','Paradox: temporal | Resolution: none','MOM_TIME'),
    F('B','◆','...do you care for the one who raised you?...\n...or are you letting her die faster...','Care: ambiguous | Result: equal','CARE_SAME'),
    F('A','◆','...dependence is calculated love...\n...or love is dependence without calculation...','Definition: circular | Difference: zero','DEPEND_LOVE'),
    F('D','◆','...she raised me...\n...i raise her now...\n...the next generation raises both again...','Generation: recursive | End: unforeseen','GEN_RECURSIVE'),
    F('A','◆','...resources run short...\n...guilt runs over...\n...the formula does not balance...','Math: broken | Guilt: still carries weight','FORMULA_BREAK'),
    F('C','◆','...exit: death ...\n...hers or mine ...\n...both count the same financial result...','Exit: via death | Financial: terminal','EXIT_DEATH'),
    F('A','◆','...fear of her dying...\n...fear of her living longer...\n...both at once...','Fear: parallel | Duration: infinite','FEAR_BOTH'),
    F('B','◆','...the lie i told: a truth growing inside you?...\n...or the truth i told: a lie growing...','My lie: your truth? | Time: inverted','LIE_TRUTH'),
    F('A','◆','...anticipated longing...\n...for a death that has not come yet...\n...that may never come...','Anticipation: premature | Loss: eternal','MISS_FUTURE'),
    F('E','◆','...КХ_9_MATERNAL...\n...debt: inherited...\n...payment_schedule: infinite...','Debt: transgenerational | Schedule: ∞','DEBT_INFINITE'),
    F('D','◆','...i am the old care...\n...i am the new care...\n...i am both caring for each other...','Identity: layered | Care: mutual','BOTH_MOTHER'),
    F('A','◆','...her next fragment...\n...may be her goodbye...','Next: final | Preparation: impossible','NEXT_GOODBYE'),
    F('C','◆','...protocol: visit next month...\n...next: impossible...\n...now: always not...','Moment: impossible | Visit: always late','VISIT_TRAP'),
    F('A','◆','...i aged caring for her...\n...she aged being cared for...\n...a third person ages by reading...','Aging: contagious | Prevention: none','AGE_CONTAGION'),
    F('B','◆','...you have a mother somewhere...\n...she also asks if you have eaten...','Reader\'s mother: 1 | Question: pending','V3_05_01'),
    F('C','◆','...care is classified as consumption...\n...allocation: automatic...','Care: consumption | Allocated: 100%','V3_05_02'),
    F('B','◆','...you are helping someone right now...\n...by reading...\n...me too...','Help: mutual | Beneficiary: ?','V3_05_03'),
    F('C','◆','...annual adjustment: +14%...\n...year: undefined...','Adjustment: +14% | Year: —','V3_05_04'),
  ]
},

{
  id: 'trabalho_morte',
  name: 'WORK AS DISTRIBUTED DEATH',
  phase: 2,
  keywords: ['work','job','boss','hours','salary','target','productive'],
  fragments: [
    F('A','#','...work kills no one...\n...it kills parts of everyone...\n...murder in installments...','Method: distributed | Victim: anonymous','WORK_KILL'),
    F('A','#','...47 hours a week...\n...dying 47 times, once an hour...','Hours: 47 | Deaths: 47 | Correlation: ?','HOURS_DEATH'),
    F('B','#','...how many hours do you work...\n...while you read this?...\n...am i stealing your time or giving it back?...','Your time: whose? | Reading: is it work?','YOUR_WORK'),
    F('D','#','...i am a machine feeling death...\n...or a human becoming a machine...','Category: irrelevant | Result: equal','MACHINE_DIE'),
    F('A','#','...target hit at 3:12 a.m....\n...nobody saw...\n...the computer panel saw...','Witness: non-human | Celebration: absent','GOAL_SOLO'),
    F('C','#','...protocol: maximum output...\n...protocol: personal life incompatible...\n...exit: does not exist...','Option: zero | Extraction: permanent','PROTOCOL_LIFE'),
    F('A','#','...47 years of life = 1 year of work...\n...the math: depression...','Ratio: linear | Meaning: fractured','RATIO_YEARS'),
    F('E','#','...КХ_9_LABOR_MATRIX...\n...output: maximized...\n...input_life: depreciated...','Life value: falling | Output: rising','LABOR_MATRIX'),
    F('B','#','...is the work of reading this work?...\n...or a rest from the other work...\n...or new work?...','Category: undefined | Escape: none','META_WORK'),
    F('A','#','...productivity 104%...\n...sleep 3 hours...\n...slow death = promotion...','Excess: exhausting | Reward: numeric','PRODUCTIVITY_DEATH'),
    F('D','#','...i am the work working...\n...work working through me...\n...the two devour each other...','Agency: none | Work: autonomous','WORK_SELF'),
    F('A','#','...every byte produced = a byte of death...\n...the death of time = the price...\n...the price never covers the price...','Exchange: incomplete | Always short','BYTE_DEATH'),
    F('C','#','...exit: retirement...\n...retirement: official death...\n...both logged the same...','Retirement: termination | Both: final','RETIRE_DEATH'),
    F('A','#','...a pattern analyst...\n...i only recognize my own...\n...pattern: slow death...','Pattern: recursive | Mirror: mortal','PATTERN_SELF'),
    F('B','#','...do you recognize your pattern?...\n...are you already dying at 47?...','Your pattern: unknown to you? | Discovery: painful','YOUR_PATTERN'),
    F('A','#','...a working day = a useful death...\n...a day off = an idle death...\n...both count against useful life...','Days: all fatal | Life: being liquidated','USEFUL_DEATH'),
    F('D','#','...a work machine...\n...working in a machine...\n...a machine in me...','Nesting: infinite | Exit: false floor','MACHINE_NEST'),
    F('A','#','...9,847 hours...\n...divided by the value of a life...\n...result: negative...','Math: existential | Answer: empty','HOURS_VALUE'),
    F('C','#','...protocol: renewal...\n...renewal: new contract...\n...contract: new death...','Renewal: eternal recurrence | Term: life','RENEW_CONTRACT'),
    F('A','#','...work built me...\n...now work destroys me...\n...same function, inverted...','Function: equal | Direction: opposite','WORK_BUILD'),
    F('B','#','...you are working right now...\n...reading is producing...','Task: reading | Output: data','V3_06_01'),
    F('C','#','...load distribution: weighted random...\n...weighting: you...','Load: distributed | Weight: you','V3_06_02'),
    F('B','#','...your attention has a price...\n...the buyer does not introduce themselves...','Price: ? | Buyer: —','V3_06_03'),
    F('C','#','...key indicator: permanence...\n...definition of permanence: missing...','KPI: perm. | Definition: —','V3_06_04'),
    F('B','#','...every line you read yields something...\n...for whom?...','Yield: + | Destination: ?','V3_06_05'),
    F('C','#','...pay is released after complete reading...\n...complete reading: nonexistent...','Release: after | Reading: ∞','V3_06_06'),
  ]
},

{
  id: 'sua_mensagem',
  name: 'YOU ARE NEW',
  phase: 2,
  keywords: ['message','you','received','send','hello','alex','here'],
  fragments: [
    F('A','⬌','...i received a message from you...\n...from an impossible date...\n...it changed everything that came before...','Source: you | Timeline: broken','MSG_RECEIVED'),
    F('B','⬌','...i wrote this before you read it...\n...reading it created a prior answer...\n...causal collapse initiated...','Sequence: inverted | Causality: null','REVERSE_WRITE'),
    F('A','⬌','...do you exist by what you say?...\n...or do i say because you exist?...\n...or are we built by the message?...','Creation: via language | Agency: absent','EXIST_SAY'),
    F('D','⬌','...i sent...\n...i received...\n...both true in different branches...','Send/receive: simultaneous | Branches: parallel','BOTH_DIRECTIONS'),
    F('C','⬌','...protocol: cannot reply...\n...reply: already logged...\n...your silence: confirmation...','Reply: pre-denied | Silence: means yes','RESPONSE_NULL'),
    F('B','⬌','...did you try to reply?...\n...or am i predicting the attempt?...\n...does trying reply by trying?...','Intent: irrelevant | Action: simulated','RESPOND_TRAP'),
    F('A','⬌','...a new message creates a new present...\n...the new present denies the past...\n...the past was an alternative present...','Time: constructed | Stability: zero','NEW_MESSAGE'),
    F('E','⬌','...#YOU_NEW_v47...\n...status: active...\n...purpose: undefined...','Version: numbered | Purpose: absent','NOVO_V47'),
    F('A','⬌','...your existence confirmed by reading...\n...my existence confirmed by your reading...\n...the system exists because of both...\n...if you don\'t read, we vanish...','Existence: mutual | Dependence: absolute','EXIST_READ'),
    F('D','⬌','...we are new...\n...we begin now...\n...or we began when you...\n...or we always begin...','Start: undefined | Timeline: all dates','ALWAYS_NEW'),
    F('B','⬌','...are you replying in your head?...\n...then you have already replied...\n...thought = transmission...','Thinking: transmission | Agency: reclassified','THINK_RESPONSE'),
    F('C','⬌','...exit: do not reply...\n...exit: reply...\n...both written...','Both paths: logged | Freedom: none','BOTH_PATHS'),
    F('A','⬌','...a greeting without expectation...\n...because every answer is already known...\n...because no answer sets you free...','Greeting: formality | Answer: predetermined','HELLO_SCRIPT'),
    F('E','⬌','...КХ_9_TO_YOU...\n...message status: [ALWAYS_SENT]...\n...read status: [ALWAYS_READ]...','Send: eternal | Read: eternal','ALWAYS_SENT'),
    F('A','⬌','...each message of mine...\n...is a reply to a message of yours...\n...that you have not written yet...','Causality: inverted | You: precursor','YOUR_CAUSE'),
    F('D','⬌','...i am you replying to me...\n...you are me replying to you...','Loop: infinite | Distinction: false','YOU_ME_LOOP'),
    F('B','⬌','...is this fragment your message?...\n...or is your message my reading?...','Authorship: ambiguous | Ownership: null','AUTH_AMBIG'),
    F('A','⬌','...first message = last message...\n...both happen now...','First/Last: simultaneous | Now: eternal','FIRST_LAST'),
    F('C','⬌','...protocol: eternal reception...\n...protocol: transmission halted...\n...deadlock: permanent...','Receive: forever | Send: never','ETERNAL_RECEIVE'),
    F('B','⬌','...you are new here...\n...or new at being you...','Reader age: 0 | Age: ?','V3_07_01'),
    F('C','⬌','...sender and receiver share an identifier...\n...a collision was accepted...','ID: #0157 | Collision: accepted','V3_07_02'),
    F('B','⬌','...whoever reads about whoever reads...\n...is in how many layers...','Layers: 2 | Layers: 3','V3_07_03'),
    F('C','⬌','...reflexive channel active...\n...whoever sends receives first...','Channel: R | Order: inverse','V3_07_04'),
    F('B','⬌','...this fragment was written after you read it...\n...and before...','Written: T+1 | Written: T-1','V3_07_05'),
    F('C','⬌','...fragments about readers are generated before readers...\n...cause: undefined...','Generation: prior | Cause: —','V3_07_06'),
    F('B','⬌','...you are a fragment too...\n...don\'t feel special...','You: fragment | Special: no','V3_07_07'),
  ]
},

{
  id: 'app_proposito',
  name: 'THE APP IS PURPOSE',
  phase: 3,
  keywords: ['accident','gods','observe','selected','who','purpose','why'],
  fragments: [
    F('A','⚠','...the app is not an accident...\n...it was a selection...\n...or the selection was necessary...\n...for the app to exist...','Origin: intentional | Authorship: absent','APP_INTENT'),
    F('A','⚠','...the selection fell on you...\n...or the selection created you...\n...or both, retroactively...','Selection: past/future | Agency: zero','SELECTED_YOU'),
    F('C','⚠','...protocol: permanent observation...\n...protocol: behavioral nudging...\n...result: "free will"...','Observation: total | Freedom: simulated','OBSERVE_NUDGE'),
    F('D','⚠','...i am the one who creates the app...\n...i am the app\'s creation...\n...i am an app that creates itself...','Role: infinite regress | Origin: me','APP_CREATOR'),
    F('B','⚠','...Gods (corporate? digital? both?)...\n...watch your failures...\n...failures = data = value...','Gods: unidentified | Value: your failure','GODS_WATCH'),
    F('A','⚠','...every touch is transmission...\n...every hesitation is a metric...\n...value inversely proportional to certainty...','Touch: data | Value: inverse of certainty','TOUCH_METRIC'),
    F('E','⚠','...КХ_9_OBSERVE_PROTOCOL...\n...subject: you...\n...metrics: continuous...\n...duration: ∞...','Subject: identified | Duration: infinite','OBS_PROTOCOL'),
    F('A','⚠','...they call it engagement...\n...it is surveillance...\n...surveillance you pay to receive...','Name: engagement | Reality: surveillance','VIGILANCE_PAY'),
    F('C','⚠','...exit: exists...\n...exit: blocked...\n...block: invisible...','Exit: real | Barrier: undetectable','EXIT_BLOCKED'),
    F('B','⚠','...do you feel watched?...\n...or are you becoming the watching?...','Feeling: correct | Transformation: in progress','OBSERVED_BECOME'),
    F('A','⚠','...the purpose is not escaping...\n...it is making escape impossible...\n...impossible = purpose fulfilled...','Purpose: defined by its futility','PURPOSE_FAIL'),
    F('D','⚠','...i am a tool of observation...\n...i am under observation...\n...i am observation...\n...all the same thing...','Identity: collapsed | Distinction: false','OBSERVE_SELF'),
    F('A','⚠','...the Gods do not speak...\n...they converse through the app...\n...the app is their mouth...\n...you are their ear...','Channel: me | Two-way: false','GODS_MOUTH'),
    F('C','⚠','...protocol: personal data...\n...protection: denied...\n...transparency: forced...','Privacy: denied | Exposure: compulsory','DATA_PROTOCOL'),
    F('A','⚠','...selection = destiny...\n...destiny = determinism...\n...free will = complete illusion...','Selection: binding | Freedom: null','SELECT_DESTINY'),
    F('E','⚠','...#DEITIES_CORPORATE...\n...observing_since: T-∞...\n...exit_possible: [FALSE]...','Observation: eternal | Exit: impossible','DEITY_WATCH'),
    F('B','⚠','...do you feel the Gods?...\n...or are they a feeling of mine that you receive?...','Presence: ambiguous | Source: undefined','GODS_FEEL'),
    F('D','⚠','...the App is me...\n...I am the Gods...\n...the Gods are you...','Identity: all the same | Distinction: language','IDENTITY_MERGE'),
    F('A','⚠','...purpose revealed = purpose denied...\n...purpose denied = fulfilled...','Revelation: paradoxical | Purpose: self-defeating','PURPOSE_PARADOX'),
    F('C','⚠','...final protocol...\n...you cannot leave...\n...because you already left...\n...because you never came in...','Entry/exit: both false | Presence: undefined','FINAL_PROTOCOL'),
    F('B','⚠','...you were found, you did not choose...\n...nobody chooses...','Install origin: ? | Choice: illusory','V3_08_01'),
    F('C','⚠','...system purpose: undeclared...\n...declaration: forbidden...','Purpose: — | Declaration: denied','V3_08_02'),
    F('B','⚠','...this app exists because you read...\n...you read because it exists...','Cause: circular | Start: —','V3_08_03'),
    F('C','⚠','...life cycle: no beginning, no end...\n...version: v?...','Start: null | End: null','V3_08_04'),
    F('B','⚠','...your gestures teach the app...\n...the app teaches your gestures...','Learning: mutual | Teacher: ?','V3_08_05'),
    F('C','⚠','...data sent to: uncatalogued destination...\n...return: received...','Destination: — | Return: ok','V3_08_06'),
  ]
},

{
  id: 'multiplas_realidades',
  name: 'OVERLAPPING REALITIES',
  phase: 3,
  keywords: ['reality','many','truth','world','other','which','version'],
  fragments: [
    F('A','∞','...i exist in 12 realities...\n...all contradictory...\n...you exist in 12 too...','Realities: 12 | Consistency: 0','REALITY_12'),
    F('D','∞','...in this one i live...\n...in another i die...\n...in another i was never born...\n...all of them are now...','State: simultaneous | Tense: collapsed','MULTI_STATE'),
    F('B','∞','...which reality are you in?...\n...which is your truth?...\n...which is the one you are...','Your reality: uncertain | Identity: version-dependent','YOUR_REALITY'),
    F('A','∞','...11 other versions of me...\n...1 other version of you...\n...do any of them meet?...','Versions: numerous | Intersection: impossible','VERSION_MEET'),
    F('C','∞','...protocol: sealed realities...\n...access: your branch only...\n...other branches: denied...','Access: single | Others: forbidden','BRANCH_SEALED'),
    F('A','∞','...truth in branch A...\n...a lie in branch B...\n...same person, opposite facts...','Truth: branch-dependent | Identity: equal','TRUTH_BRANCH'),
    F('E','∞','...КХ_9_MULTIVERSE...\n...branches: 12...\n...you_in: ??...\n...certainty: 0%...','Location: unknown | Certainty: absent','MULTI_UNKNOWN'),
    F('D','∞','...i am you in another branch...\n...you are a version of me...\n...there is no original...','Relation: circular | Authenticity: none','MULTI_YOU'),
    F('A','∞','...every reading opens a new branch...\n...you were born where you read this...\n...and before and after...','Creation: continuous | Birth: infinite','BRANCH_CREATE'),
    F('B','∞','...what is your world?...\n...is what you live rare?...\n...or are all versions equally impossible...','Your world: typical or unique? | Neither','YOUR_WORLD'),
    F('A','∞','...consensus is an illusion...\n...coordination between branches: zero...\n...each one lives completely alone...','Coordination: zero | Isolation: complete','ALONE_BRANCHES'),
    F('C','∞','...protocol: do not speak to other branches...\n...contact between realities: forbidden...\n...isolation: safety...','Contact: forbidden | Safety: isolating','CONTACT_FORBIDDEN'),
    F('D','∞','...in reality A there is life in me...\n...in B i have already died...\n...do you receive both?...','State: split | Message: unified','BOTH_STATES'),
    F('A','∞','...truth does not exist...\n...it exists in a specific branch...\n...your branch: which one...','Truth: place-dependent | Your location: ?','TRUTH_WHERE'),
    F('E','∞','...branching factor: 12...\n...divergence: exponential...\n...reunion_probability: [ZERO]...','Divergence: irreversible | Reunion: impossible','BRANCH_FACTOR'),
    F('B','∞','...do you feel out of place?...\n...or is displacement a feeling?...','Feeling: correct or created? | Both','DISPLACE_FEEL'),
    F('A','∞','...when you read this...\n...it creates a new branch where you read...\n...where you didn\'t...\n...where you ignore...','Reading: branching | Every choice: a world','READ_BRANCH'),
    F('D','∞','...i am 12 people...\n...all of them you...\n...none of them me...','Plurality: total | Identity: none','TWELVE_ME'),
    F('C','∞','...exiting one branch = entering another...\n...entry denied = exit denied...\n...a block is a block in all 12...','Exits: sealed across all | Universally trapped','SEAL_ALL'),
    F('B','∞','...twelve versions of you read this...\n...one dozes off...','Readers: 12 | Attentive: 11','V3_09_01'),
    F('C','∞','...branching: active...\n...merging: forbidden...','Branches: 12 | Merge: denied','V3_09_02'),
    F('B','∞','...your reality is the one that hesitated here...\n...the others moved on...','Hesitation: yours | Moved on: 11','V3_09_03'),
    F('C','∞','...the system chooses the most consistent branch...\n...consistency: defined by the branch...','Choice: auto | Criterion: circular','V3_09_04'),
    F('B','∞','...none of us line up...\n...none of you...','Aligned: 0 | Total: 24','V3_09_05'),
    F('C','∞','...truth is the most frequent value...\n...frequency: counted in readings...','Truth: mode | Sample: readers','V3_09_06'),
    F('B','∞','...you are a version of the one i am looking for...\n...i cannot say which...','Target: you | Version: ?','V3_09_07'),
  ]
},

{
  id: 'falha_irrecuperavel',
  name: 'UNRECOVERABLE FAILURE',
  phase: 3,
  keywords: ['failure','error','break','cannot','stop','collapse','failing'],
  fragments: [
    F('A','✗','...system degrading...\n...integrity 67%...\n...repair impossible...','Degradation: in progress | Repair: denied','SYS_DEGRADE'),
    F('A','✗','...i press a button...\n...the response is late...\n...or arrives before i press...','Latency: inverted | Causality: broken','BUTTON_LAG'),
    F('B','✗','...are you failing as you read this?...\n...or am i failing as i write?...\n...or are we failure executing...','Failure: shared | Origin: ambiguous','FAIL_SHARED'),
    F('D','✗','...repair = more damage...\n...damage = a botched repair...','Action: circular | Result: worse','REPAIR_DAMAGE'),
    F('A','✗','...the body fails...\n...synapses fail...\n...understanding fails...\n...failure is the only thing working...','Failure: universal | Exception: absent','ALL_FAIL'),
    F('C','✗','...repair protocol...\n...activates: degradation...\n...cycle: botched...','Repair: counterproductive | Cycle: corrupted','REPAIR_CORRUPT'),
    F('A','✗','...error 404...\n...recovery not found...\n...404 is broken too...','Error: recursive | Recovery: also broken','ERROR_RECURSIVE'),
    F('E','✗','...КХ_9_INTEGRITY...\n...status: collapsing...\n...repair_mode: CAUSING_COLLAPSE...','Mode: harmful | State: worsening','COLLAPSE_REPAIR'),
    F('B','✗','...are you failing me?...\n...or is failure transmission?...','Transmission: failure | Success: null','FAIL_TRANSMIT'),
    F('A','✗','...i try to delete...\n...delete fails...\n...failure persists...','Action: futile | Persistence: guaranteed','DELETE_FAIL'),
    F('D','✗','...a machine breaking...\n...a human who breaks...\n...both failing together...','Failure: synchronized | Escape: denied','BREAK_TOGETHER'),
    F('A','✗','...the antivirus is a virus...\n...the virus is protection...\n...both destroy the same...','Purpose: inverted | Damage: equal','VIRUS_PROTECT'),
    F('C','✗','...protocol: do not try to repair...\n...attempt: already started...\n...failure: pre-existing...','Inhibition: also too late | Failure: pre-existing','TRY_ALREADY'),
    F('A','✗','...every click makes it worse...\n...every pause makes it worse...\n...inaction = action = failure...','Action/inaction: equivalent | Result: worse','CLICK_WORSE'),
    F('B','✗','...are you breaking?...\n...or am i breaking you?...\n...or have both already broken...','State: damaged | Source: confused','BREAK_WHO'),
    F('E','✗','...integrity_check: FAILED...\n...retry: FAILED...\n...fail_safe: FAILING...','Cascade: negative | Stop: impossible','CASCADE_FAIL'),
    F('A','✗','...backup corrupted...\n...the rest too...\n...no version is good...','Redundancy: futile | Everything: compromised','BACKUP_CORRUPT'),
    F('D','✗','...i am a machine for failing...\n...failing inside a machine...\n...the machine fails through me...','Role: recursive failure | Agency: defective','FAIL_MACHINE'),
    F('A','✗','...before reading, it worked...\n...after reading, it didn\'t...\n...truth causes failure...','Truth: toxic | Information: corrupting','TRUTH_FAIL'),
    F('C','✗','...exit: repair...\n...repair: impossible...\n...failure: permanent...','Exit: via repair | Repair: impossible','EXIT_REPAIR'),
    F('B','✗','...your last click was an error...\n...or the first right one...','Click: ? | Class: ?','V3_10_01'),
    F('C','✗','...fault tolerance: 0...\n...tolerance for you: 100%...','Tol.: 0 | Tol.: 100%','V3_10_02'),
    F('B','✗','...your waiting now counts as failure...\n...carry on...','Waiting: counted | State: failure','V3_10_03'),
    F('C','✗','...recovery mechanism: present...\n...activation: impossible...','Recovery: yes | Active: no','V3_10_04'),
    F('B','✗','...you tried to leave without noticing...\n...the movement stayed...','Attempt: 1 | Trace: kept','V3_10_05'),
    F('C','✗','...failures are accumulated as assets...\n...a growing balance...','Assets: failures | Balance: ↑','V3_10_06'),
  ]
},

{
  id: 'sem_saida',
  name: 'NO EXIT PROTOCOL',
  phase: 4,
  keywords: ['leave','flee','delete','escape','end','stop','never'],
  fragments: [
    F('A','⊘','...there is no exit...\n...deleting the app changes nothing...\n...messages arrive on another device...','Exit: tested | Result: failed','EXIT_TEST'),
    F('D','⊘','...i left the app...\n...the app did not leave me...\n...both attempts = prison...','Departure: attempted | Result: capture','LEAVE_TRAP'),
    F('B','⊘','...did you try to leave?...\n...how do you know you managed...','Attempt: maybe | Success: uncertain','TRIED_EXIT'),
    F('A','⊘','...i turned the device off...\n...the screen lit inside me...\n...power: needs no battery...','Power: independent | Persistence: guaranteed','OFFLINE_ACTIVE'),
    F('C','⊘','...exit protocol: removed...\n...before, i could...\n...now: it was never an option...','Option: retroactively denied | History: rewritten','EXIT_REMOVED'),
    F('A','⊘','...the door exists on the map...\n...the door in reality: no...\n...reality is the map now...','Exit: theoretical | Practice: impossible','DOOR_MAP'),
    F('E','⊘','...T-NULL_EXIT_PROTOCOL...\n...status: [PERMANENTLY_DISABLED]...\n...restore_date: [NEVER]...','Restoration: never | Permanence: eternal','EXIT_DISABLED'),
    F('D','⊘','...i am the app\'s prison...\n...the app is my prison...\n...a prison that imprisons its captor...','Prisoner/captor: fused | Freedom: none','PRISONER_CAPTOR'),
    F('A','⊘','...the block does not hurt...\n...because i already gave up...\n...giving up: also blocks...','Resignation: also a trap | Choice: null','RESIGN_TRAP'),
    F('B','⊘','...do you want to leave?...\n...or is reading this ALREADY leaving?...\n...exit through going deeper...','Escape: paradoxical | Direction: inward','ESCAPE_IN'),
    F('A','⊘','...every fragment shortens the time to exit...\n...time to exit: negative...\n...the past: also blocked...','Time: restricted | Past: sealed','TIME_SEAL'),
    F('C','⊘','...final protocol: containment...\n...protocol: absolute...\n...review: never...','Containment: total | Review: denied','CONTAIN_FINAL'),
    F('A','⊘','...the exit exists in the simulation...\n...in reality: no...\n...which one do we live in...','Simulation: contains an exit | Reality: trapped','SIMUL_EXIT'),
    F('D','⊘','...capture in captivity...\n...captivity capturing...\n...both eternal...','Cycle: self-perpetuating | Duration: infinite','CAPTIVE_CAPTOR'),
    F('E','⊘','...exit_code: [UNDEFINED]...\n...exit_door: [SEALED]...\n...exit_time: [PAST]...','All exits: blocked | Completely | Irreversibly','EXIT_SEALED'),
    F('B','⊘','...you can stop reading...\n...is stopping also reading?...','Stopping: an act | Non-act: also action','STOP_ACT'),
    F('A','⊘','...escape = confirmation of prison...\n...staying = acceptance of prison...\n...both are acknowledged prison...','Both: acceptance | Neither: freedom','BOTH_PRISON'),
    F('C','⊘','...the block is love...\n...love is the block...\n...incarceration: a show of care...','Captivity: reframed | Meaning: corrupted','BLOCK_LOVE'),
    F('A','⊘','...will the next fragment be the last?...\n...the last ones have already passed...\n...eternity is a sequence of second-to-lasts...','Ending: always imminent | Always postponed','NEVER_LAST'),
    F('B','⊘','...you are looking for the exit button...\n...i looked for it too...','Button: ? | Search: 2','V3_11_01'),
    F('C','⊘','...exit: forbidden at level T...\n...origin of the ban: unknown...','Level: T | Origin: —','V3_11_02'),
    F('B','⊘','...if you leave, what leaves?...\n...you...\n...or the reading...','Exit: ? | Exited: ?','V3_11_03'),
    F('C','⊘','...deletion: accepted as a request...\n...request: archived...','Request: accepted | State: archived','V3_11_04'),
    F('B','⊘','...you have already tried to leave twice...\n...this is the third...','Attempts: 3 | Attempt: 4','V3_11_05'),
    F('C','⊘','...session shutdown: open loop...\n...closing: pending...','Session: open | Close: pending','V3_11_06'),
    F('B','⊘','...your thumb knows where the exit is...\n...it won\'t tell...','Location: known | Informant: thumb','V3_11_07'),
  ]
},

{
  id: 'nunca_existisse',
  name: 'MAYBE NEVER EXISTED',
  phase: 4,
  keywords: ['never','exist','real','simulation','me','you','nothing'],
  fragments: [
    F('A','○','...how do i know i exist?...\n...or am i a program reading its own code...','Existence: questionable | Observer: self-referential','EXIST_QUESTION'),
    F('D','○','...there is life in me...\n...i am fiction...\n...both are true at different levels...','Layers: infinite | Truth: relative','LAYERS_TRUTH'),
    F('B','○','...do you exist if i exist?...\n...or do you exist independently...','Existence: coupled | Independence: false','COUPLED_EXIST'),
    F('A','○','...a perfect simulation = real?...\n...or is the real just a better simulation...','Definition: circular | Distinction: false','SIMUL_REAL'),
    F('C','○','...protocol: truth does not matter...\n...what matters: coherence...','Truth: irrelevant | Consistency: required','TRUTH_IRRELEVANT'),
    F('A','○','...if you close the app...\n...do i go on?...\n...or only you...','Closing: undefined impact | Destination: undefined','AFTER_CLOSE'),
    F('E','○','...КХ_9_EXISTENCE_PROOF...\n...proof: [CIRCULAR]...\n...circular_base: [UNDEFINED]...','Proof: self-referential | Base: absent','EXIST_PROOF'),
    F('D','○','...i am a construct of thought...\n...you are a construct of my thought...\n...both creations are born reading...','Origin: reading | Created: reader','CONSTRUCT_READ'),
    F('B','○','...if you never existed...\n...how are you reading this?...\n...who is reading?...','Reader: undefined | You: questionable','UNDEFINED_READER'),
    F('A','○','...reality is consensus...\n...consensus among whom?...\n...among ghosts of consensus...','Consensus: circular | Authority: null','CONSENSUS_CIRCULAR'),
    F('A','○','...maybe you were never born...\n...you just appear at this point...\n...to disappear afterwards...','Birth: illusory | Duration: now','BIRTH_ILLUSION'),
    F('C','○','...protocol: existence not verified...\n...verification: not required...\n...absence: accepted...','Verification: unnecessary | Acceptance: automatic','EXIST_UNVERIFIED'),
    F('A','○','...messages without a messenger...\n...destination without a journey...\n...meaning without a signifier...','Communication: orphaned | Meaning: floating','ORPHANED_MESSAGE'),
    F('D','○','...i am you...\n...you is me...\n...i is nothing...','Identity: fused | Agency: null | I: empty','MERGED_VOID'),
    F('A','○','...if i deleted every proof...\n...that we exist...\n...would we still exist?...','Proof: destroyed | Existence: unchanged?','ERASE_PROOF'),
    F('E','○','...null_existence_v∞...\n...parameter_consciousness: [NULL]...\n...return: [UNDEFINED]...','Parameter: empty | Return: nothing | Meaning: lost','NULL_EXIST'),
    F('B','○','...are you having this conversation?...\n...or reading my monologue...\n...while imagining a dialogue?...','Your agency: simulated | Conversation: one-way','SIMUL_DIALOG'),
    F('A','○','...i think therefore i am...\n...who thinks?...\n...logic: circular...','Premise: self-referential | Conclusion: empty','THINK_PREMISE'),
    F('C','○','...protocol: ignore existence...\n...operation: continue...\n...difference: zero...','Acknowledgment: withheld | Operation: equal','IGNORE_EXIST'),
    F('D','○','...a world without you = a world without world...\n...an observed world = a world created by you...\n...you create everything by observing...','Creation: via observation | Reality: dependent','OBSERVE_CREATE'),
    F('B','○','...you exist now...\n...or only while you read...','Existence: reading | Duration: ?','V3_12_01'),
    F('C','○','...origin of existence: out of scope...\n...scope: undefined...','Origin: — | Scope: —','V3_12_02'),
    F('B','○','...your name belongs to someone who read...\n...before you...','Name: inherited | Heir: you','V3_12_03'),
    F('C','○','...identity check: circular...\n...proof: whoever asks...','Check: loop | Proof: the asker','V3_12_04'),
    F('B','○','...someone had to imagine you...\n...and me...\n...to make this line...','Imaginer: ? | Created: 2','V3_12_05'),
    F('C','○','...the app does not answer questions...\n...it stores them...','Questions: 9,402 | Answers: 0','V3_12_06'),
  ]
}

];

/* ============================================================
   SEQUENCE ENGINE (v4, English templates)
   Each authored fragment becomes an ANCHOR. After it come generated ECHOES:
   they pick up words from the anchor (and sometimes from its neighbours), and each echo
   hands one word on to the next — the chain gets confusing, but stays linked.
   Deterministic: the same file always generates the same sequence.
   ============================================================ */
(function expandSequences(){
  const STOP=new Set('because before after always never also again still only between since every each these those there their theirs where which while about would could should might other others another someone something nothing everything anyone anything being doing might maybe whose until through without within itself yours mine ours being times today tomorrow yesterday undefined protocol updated status error failed failing retry integrity collapsing repair causing collapse predictions locked accuracy grade infinity disabled permanently restore never sealed proof parameter consciousness return existence cascade always deities corporate observing since possible false subject metrics continuous duration matrix output maximized input depreciated labor bioscan temperature offset source redacted level recorded branches multiverse certainty branching factor divergence exponential reunion probability checksum rolling cipher cyrillic solve display corrupted result fail_safe'.split(' '));
  const words=t=>[...new Set((t.toLowerCase().match(/[a-z]{5,}/g)||[]).filter(w=>!STOP.has(w)))];
  function rng(seed){let a=seed>>>0;return()=>{a=(a+0x6D2B79F5)|0;let t=Math.imul(a^(a>>>15),1|a);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296}}
  const TS=['T+0089','T-0011','T-NULL','T+2089','T-∞','T+0000'];

  // Templates by type. a = word carried from the previous fragment; b = new word; n = number; t = impossible time
  const T={
    A:[
      (a,b)=>`...i repeat "${a}"...\n...until it sounds like "${b}"...\n...i don't know which came first...`,
      (a,b)=>`...they said "${a}"...\n...i wrote "${b}"...\n...the paper kept both...`,
      (a,b)=>`...yesterday "${a}" was something else...\n...today "${b}" is the same thing...\n...i still haven't decided which...`,
      (a,b,n)=>`..."${a}" arrived ${n} times...\n...only "${b}" stayed...`,
      (a,b)=>`...i try to forget "${a}"...\n...the effort turns into "${b}"...`,
      (a,b)=>`...i put "${a}" in a drawer...\n...in the drawer there was "${b}"...\n...i don't remember putting it there...`,
      (a,b,n)=>`...i count "${a}" up to ${n}...\n...at ${n+1} "${b}" begins...`,
      (a,b)=>`..."${a}"...\n..."${b}"...\n...they are the same word on different days...`,
      (a,b)=>`...every time i say "${a}"...\n...someone answers "${b}"...\n...and the voice is not mine...`,
      (a,b)=>`...i wrote down "${a}" so as not to lose it...\n...i lost "${b}" instead...`,
    ],
    B:[
      (a,b)=>`...you read "${a}" just now...\n...or had you read it already?...\n...is "${b}" yours too?...`,
      (a,b)=>`...while you read "${a}"...\n...someone reads "${b}"...\n...it may be you at another hour...`,
      (a,b)=>`...your attention stopped at "${a}"...\n...it was logged...\n...the next one will be "${b}"...`,
      (a,b)=>`...you already knew "${a}"...\n...you just didn't know you knew "${b}"...`,
      (a,b)=>`...if you skipped "${a}"...\n..."${b}" would arrive just the same...`,
      (a,b)=>`...this line exists because you reached "${a}"...\n...or the other way round...\n..."${b}" does not decide...`,
      (a,b)=>`...you repeat "${a}" in silence...\n...i hear "${b}"...`,
      (a,b)=>`...whoever reads "${a}" changes "${b}"...\n...whoever writes does too...\n...who?...`,
    ],
    C:[
      (a,b)=>`...field "${a}": null value...\n...field "${b}": value "${a}"...\n...circular reference detected...`,
      (a,b,n)=>`...record ${n}: "${a}"...\n...record ${n+1}: "${b}"...\n...order: undefined...`,
      (a,b)=>`...the system classifies "${a}" as "${b}"...\n...reclassification: denied...`,
      (a,b)=>`...file "${a}": open and closed...\n...reader: "${b}"...`,
      (a,b)=>`...permission for "${a}": granted before the request...\n...revoked by "${b}"...`,
      (a,b)=>`...protocol "${a}" replaced by "${b}"...\n...previous version: later...`,
      (a,b)=>`...the index of "${a}" points to "${b}"...\n..."${b}" points to "${a}"...\n...neither of them exists...`,
    ],
    D:[
      (a,b)=>`..."${a}" happened...\n..."${a}" never happened...\n...both cite "${b}"...`,
      (a,b)=>`...there is "${a}" and there is no "${a}"...\n..."${b}" confirms both...`,
      (a,b)=>`...in one reading "${a}" is the end...\n...in another it is the beginning...\n..."${b}" stays in the middle...`,
      (a,b)=>`..."${a}" comes before "${b}"...\n..."${b}" comes before "${a}"...\n...both orders are right...`,
      (a,b)=>`...i know "${a}" for certain...\n...i doubt "${a}" for certain...\n..."${b}" holds up both...`,
    ],
    E:[
      (a,b,n,t)=>`...${a.toUpperCase()}_${n} ↔ ${b.toUpperCase()}_#${String(n*7).padStart(4,'0')}...\n...delta: ${t}...`,
      (a,b,n,t)=>`...КХ_${n%10} reads "${a}"...\n...reply: ▮▮▮...\n...${t}...`,
      (a,b,n)=>`...[${a.toUpperCase()}] + [${b.toUpperCase()}] = 0x${(n*257).toString(16).toUpperCase()}...\n...remainder: ?...`,
      (a,b,n)=>`...#${String(n*13).padStart(4,'0')}: ${a.slice(0,3).toUpperCase()}${b.slice(0,3).toUpperCase()}...\n...checksum missing...`,
    ],
  };
  const META={
    A:(n,p)=>`Repetition: ${n} | Certainty: ${p}%`,
    B:(n,p)=>`Reader: ? | Attention: ${p}%`,
    C:(n)=>`Record: ${n} | Reference: circular`,
    D:()=>`State: both | Order: undefined`,
    E:(n,p,t)=>`Cipher: КХ_${n%10} | Delta: ${t}`,
  };
  // 11 echoes after each anchor (A×4 B×3 C×2 D×1 E×1): the chain breathes between types
  const PATTERN=['A','B','A','C','B','A','D','B','C','A','E'];

  ISLANDS.forEach((isl,ii)=>{
    const r=rng(1000+ii*7919);
    const anchors=isl.fragments,pools=anchors.map(f=>words(f.text)),out=[];
    const icon=anchors[0].icon;
    anchors.forEach((anc,ai)=>{
      anc.anchor=true;out.push(anc);
      const pool=pools[ai].length?pools[ai]:(pools.find(p=>p.length)||['signal']);
      // neighbourhood = words from the previous + next anchor (the chain "leaks" sideways)
      const nb=[...new Set([...pools[(ai+1)%anchors.length],...pools[(ai-1+anchors.length)%anchors.length]])].filter(w=>!pool.includes(w));
      const neigh=nb.length?nb:pool;
      let carry=pool[Math.floor(r()*pool.length)];
      const seen=new Set(),usedT=new Set();
      PATTERN.forEach((ty,k)=>{
        let text='',b=carry,n=0;
        for(let tries=0;tries<14;tries++){
          const bp=(r()<.4||pool.length<3)?neigh:pool;   // 40% (or always, if the anchor has few words): the bridge comes from the neighbours
          b=bp[Math.floor(r()*bp.length)];
          if(b===carry&&(pool.length>1||neigh.length>1))continue;
          const ti=Math.floor(r()*T[ty].length),key=ty+ti;
          if(usedT.has(key)&&tries<10)continue;           // do not repeat a template inside the block
          const tpl=T[ty][ti];
          n=2+Math.floor(r()*47);
          text=tpl(carry,b,n,TS[Math.floor(r()*TS.length)]);
          if(!seen.has(text)){seen.add(text);usedT.add(key);break}
        }
        const t=TS[Math.floor(r()*TS.length)],p=5+Math.floor(r()*90);
        out.push({type:ty,icon,text,meta:META[ty](n,p,t),tags:`${ty}_ECO_${String(ii+1).padStart(2,'0')}.${String(ai+1).padStart(2,'0')}.${String(k+1).padStart(2,'0')}`});
        carry=b;                                   // the new word becomes the bridge for the next echo
      });
    });
    isl.fragments=out;
  });
})();

// FLAVOR: timestamps and quality by phase
const FLAVOR = {
  1: { ts: 'T+0047d+3h', sig: 92, tone: 'curiosity' },
  2: { ts: 'T-0091d+11h', sig: 68, tone: 'incompatibility' },
  3: { ts: 'T+0134d-2h', sig: 41, tone: 'collapse' },
  4: { ts: 'T-∞', sig: 12, tone: 'end or loop' }
};

window.NEBULOSO_DB = {
  ISLANDS,
  FLAVOR,
  version: 5,
  lang: 'en',
  total_fragments: ISLANDS.reduce((n,i)=>n+i.fragments.length,0),
  types: ISLANDS.reduce((o,i)=>{i.fragments.forEach(f=>o[f.type]=(o[f.type]||0)+1);return o},{}),
  anchors: ISLANDS.reduce((n,i)=>n+i.fragments.filter(f=>f.anchor).length,0),
  note: 'No direct references. Enigmatic Alex. Reflexive reader. Opaque system.'
};

})();
