/*
 * BEEP - Translations
 * Author: Pim van Gennip (pim@iconize.nl), Alex Giurgiu
 *
 */
const translations = {
  /* Date picker */
  monthsFull: [
    'Ianuarie',
    'Februarie',
    'Martie',
    'Aprilie',
    'Mai',
    'Iunie',
    'Iulie',
    'August',
    'Septembrie',
    'Octombrie',
    'Noiembrie',
    'Decembrie',
  ],
  monthsShort: [
    'Ian',
    'Feb',
    'Mar',
    'Apr',
    'Mai',
    'Iun',
    'Iul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  Today: 'Astăzi',
  Clear: 'Ștergeți',
  Close: 'închideți',
  firstDay: 1,
  format: 'dddd d mmmm yyyy',

  /* main */
  Website: 'Website',
  Feedback: 'Feedback',
  Feedback_mail_header: 'Feedback aplicație BEEP ',
  Feedback_mail_body:
    'Dragă fundație BEEP,%0D%0A%0D%0APrin prezenta feedbackul meu pentru aplicația BEEP%0D%0A%0D%0AI am descoperit această:%0D%0A%0D%0înainte să apară acest mesaj, am efectuat:%0D%0A%0D%0A Pe ecran a apărut (vă rugăm să includeți o captură de ecran):%0D%0A%0D%0A%0D%0A%0D%0A',
  Diagnostic_info: 'Informații diagnostic (în cazul unei erori):%0D%0A',
  back: 'Înapoi',
  menu: 'Meniu',
  lighting: 'Lumină',
  camera: 'Cameră foto',
  weather: 'Vreme',
  sensors: 'Senzori',
  no_valid_authentication: 'Nu au fost primite date valide de autentificare',
  succesfully_saved: 'Salvat cu succes',
  switch_language: 'Schimbați limba',
  Delete: 'Ștergeți',
  Search: 'Căutare...',

  /* user error messages */
  User: 'Utilizator',
  User_data: 'Datele utilizatorului',
  user_data: 'datele utilizatorului',
  updated: 'actualizare',
  delete_complete_account:
    'Sunteți sigur că doriți să ștergeți complet contul dumneavoastră, inclusiv toate stupinele, stupii și inspecțiile? Datele nu vor putea fi recuperate',
  username_is_required: 'Vă rugăm introduceți numele de utilizator',
  username_already_exists: 'Acest nume de utilizator există deja',
  password_is_required: 'Vă rugăm intorduceți parola',
  email_is_required: 'Vă rugăm introduceți adresa de e-mail',
  email_already_exists: 'Această adresă de  e-mail este deja folosită',
  policy_accepted_is_required:
    'Trebuie să acceptați termenii și condițiile de înregistrare',
  already_registered: 'Sunt deja înregistrat',
  invalid_user: 'Utilizator necunoscut sau parolă greșită',
  no_password_match: 'Parolele nu se potrivesc',
  invalid_token: 'Cod invalid',
  no_valid_email: 'Adresă de e-mail invalidă',
  empty_fields: 'Vă rugăm să completați toate câmpurile',
  match_passwords: 'Parolele nu se potrivesc',
  succesfully_registered: 'Sunteți înregistrat cu succes.',
  authentication_failed: 'Nu sa reușit autentificarea.',
  no_valid_input_received:
    'Datele nu au putut fi salvate, nu au fost primite intrări valide.',
  remove_all_settings: 'Eliminați toate setările',
  remove_apiary: 'Eliminați stupina',
  remove_hive: 'Eliminare stup',
  remove_inspection: 'Eliminați inspecția',
  Error: 'Eroare',
  Warning: 'Advertisment',
  first_remove_hives:
    'Atenție încă există stupi în această stupină. Puteți salva stupi specifici (și inspecțiile lor) prin mutarea acestora într-o altă stupină. Dacă veți continua cu ștergerea, vor fi șterse toate inspecțiile și toți stupii din prezenta locație.',
  Date: 'Data',
  ok: 'Ok',
  previous: 'Anterior',
  prev: 'anterior',
  next: 'Următorul',
  add: 'Adăugați',
  create_new: 'Creați un nou',
  New: 'Nou',
  warning: 'Advertisment',
  apply: 'Aplicați',
  Cancel: 'Anulați',
  automatic: 'Automat',
  manually: 'Manual',
  on: 'Pornit',
  off: 'Oprit',

  /* login */
  login_title: 'Autentificare',
  login: 'Autentificare',
  back_to_login: 'Înapoi la autentificare',
  forgot_password: 'Ați uitat parola?',
  username: 'Nume utilizator',
  password: 'Parolă',
  confirm_password: 'Confirmare parolă',
  email: 'E-mail',
  token: 'Cod',
  create_login_question:
    'Nu aveți încă un cont? Înregistrați-vă ca utilizator nou',
  create_login: 'Înregistrați-vă ca un utilizator nou',
  create_login_summary: 'Creați un cont de utilizator nou',
  save: 'Salvați',
  save_and_return: 'Salvare și întoarcere.',
  logout: 'Deconectați-vă',
  logout_title: 'Deconectați-vă ca',
  logout_now: 'Doriți să vă deconectați acum?',
  member_since: 'Membru BEEP din',

  /* password recovery */
  password_recovery_title: 'Ați uitat parola?',
  password_recovery_remembered: 'Oh, acum mi-am reamintit parola!',
  password_recovery_user: 'Informații despre utilizator',
  password_recovery_send_mail: 'Trimiteți cod de verificare',
  password_recovery_code_not_received:
    'Codul nu a fost primit în mai puțin de 5 minute?',
  password_recovery_enter_code:
    'Ați primit deja un cod de verificare? Introduceți codul aici',
  password_recovery_reset_title: 'Introduceți o parolă nouă',
  password_recovery_reset_password: 'Schimbarea parolei',
  password_recovery_reminder_success:
    'A fost trimis un  e-mail. Faceți clic pe link-ul din e-mail pentru a vă putea reseta parola pentru acest cont.',
  password_recovery_reminder_summary:
    'Introduceți adresa dvs. de e-mail. Veți primi un e-mail cu un link pentru a vă putea schimba parola în pasul următor.',
  password_recovery_reset_summary:
    'Utilizați codul pe care l-ați primit pentru a seta o nouă parolă pentru contul dvs.',
  password_recovery_reset_success:
    'Parola dvs. a fost modificată cu succes și ați fost logat.',
  new_password: 'Parolă nouă',
  confirm_new_password: 'Confirmare parolă nouă',
  go_to_dashboard: 'Mergeți la panoul de control',

  /* overview */
  overview_title: 'Prezentare generală',
  overview: 'Prezentare generală',
  color: 'Culoare',
  state: 'Pornit/oprit',
  connection_state: 'Starea conexiunii',

  /* hives */
  locations_title: 'BEEP',
  hives_title: 'BEEP',
  Hive: 'Stup | Stupi',
  hive: 'stup | stupi',
  Location: 'Stupină | Stupine',
  location: 'stupină | stupine',
  Name: 'Nume',
  name: 'nume',
  Type: 'Tip',
  type: 'tip',
  Layer: 'Strat',
  layer: 'strat',
  brood: 'Puiet',
  honey: 'Miere',
  inspect: 'Inspectați',
  inspection: 'inspecție | inspecții',
  Inspection: 'Inspecție | Inspecții',
  New_inspection: 'Inspecție nouă',
  Edit_inspection: 'Editați inspecția',
  Actions: 'Actiune',
  Conditions: 'Condiții(inspectate)',
  edit: 'Editare',
  // Hive_brood_layers: 'Straturi cu puiet',
  // Hive_honey_layers: 'Straturi cu miere',
  Hive_layer_amount: 'Numărul de straturi',
  Bee_race: 'Rasa albinelor',
  Birth_date: 'Data nașterii',
  Color: 'Culoare',
  Queen_colored: 'Matcă marcată',
  Queen_clipped: 'Matcă mutilată',
  Queen_fertilized: 'Matcă fertilizată',
  Age: 'Vârstă',
  years_old: 'ani',

  /* Hive check items */
  Date_of_inspection: 'Data inspecției',
  action: 'Acțiune',
  reminder: 'Memento',
  remind_date: 'Data notificării',
  overall: 'În ansamblu',
  positive_impression: 'Impresia generală',
  needs_attention: 'Necesită atenție',
  notes: 'Notițe',
  notes_for_next_inspection:
    'Notă scurtă pentru inspecția următoare (vizibilă în ansamblu)',
  Not_implemented_yet: 'Acest element nu a fost implementat încă',
  save_input_first: 'Doriți să salvați informația introdusă?',

  /* dashboard */
  dashboard_title: 'Tablou de bord',
  dashboard: 'Tablou de bord',
  measurementsError:
    'Măsurătorile nu pot fi încărcate, verificați conexiunea la rețea',
  last_measurement: 'Ultima măsurare',
  at: 'la',
  measurement_system: 'Sistem de măsurare BEEP',
  no_data: 'Nu există date disponibile',
  no_chart_data: 'Nu există date din grafic pentru perioada selectată',

  /* settings */
  General: 'General',
  Place: 'Locație',
  Country: 'Țară',
  City: 'Oraș',
  Address: 'Adresă',
  Lattitude: 'Latitudine',
  Longitude: 'Longitudine',
  Street: 'Stradă',
  Number: 'Nr.',
  Postal_code: 'Cod poștal',
  Description: 'Descriere',
  Hive_settings: 'Setările stupului',
  Hive_amount: 'Numărul de stupi în această locație',
  Hive_prefix: 'Prefixul stupului (înainte de număr)',
  Hive_number_offset: 'Numărul de pornire al stupilor',
  Hive_type: 'Tipul de stup',
  Hive_layers: 'Straturi stup',
  Hive_frames: 'Rame pe strat',
  Hive_color: 'Culoarea stupului',
  Queen: 'Matcă',
  queen: 'Matcă',
  settings_title: 'Setări',
  settings_description: 'Setări ale senzorilor',
  Settings: 'Setări',
  settings: 'setări',
  sensors_title: 'Setările senzorului',
  sensors_description: 'Statusul senzorilor și înregisrtarea',
  //   sensors: 'Senzori',
  sensor: 'Senzor',
  Select: 'Selectați',
  Not_selected: 'Nu a fost selectat',
  Poor: 'Slab',
  Fair: 'Potrivit',
  Average: 'Mediu',
  Good: 'Bine',
  Excellent: 'Excelent',
  Low: 'Scăzut',
  Medium: 'Mediu',
  High: 'Ridicat',
  Extreme: 'Extrem',

  /* colors */
  select_color: 'Selectați o culoare',
  advanced: 'Avansat',

  /* sensors */
  Select_sensor: 'Selectați un senzor',
  temperature: 'Temperatură',
  t: 'Temperatură',
  t_0: 'Temperatură 1',
  t_1: 'Temperatură 2',
  t_2: 'Temperatură 3',
  t_3: 'Temperatură 4',
  t_4: 'Temperatură 5',
  t_5: 'Temperatură 6',
  t_6: 'Temperatură 7',
  t_7: 'Temperatură 8',
  t_8: 'Temperatură 9',
  t_9: 'Temperatură 10',
  light: 'Lumina (soarelui)',
  l: 'Lumina (soarelui)',
  water: 'Apă',
  w: 'Apă',
  humidity: 'Umiditate',
  h: 'Umiditate',
  air_pressure: 'Presiune atmosferică',
  p: 'Presiune atmosferică',
  weight: 'Greutate',
  w_v: 'Senzorul de greutate, valoarea tuturor senzorilor',
  w_fl: 'Senzorul de greutate, valorare față stânga',
  w_fr: 'Senzorul de greutate, valoare față dreapta',
  w_bl: 'Senzorul de greutate, valoare spate stânga',
  w_br: 'Senzorul de greutate, valoare spate dreapta',
  weight_kg: 'Greutate',
  weight_kg_corrected: 'Greutate (corecție)',
  weight_combined_kg: 'Greutate, combinată ',
  bat_volt: 'Baterie',
  bv: 'Baterie',
  sound_fanning_4days: 'Ventilație albine 4z',
  s_fan_4: 'Ventilație albine 4z',
  sound_fanning_6days: 'Ventilație albine 6z',
  s_fan_6: 'Ventilație albine 6z',
  sound_fanning_9days: 'Ventilație albine 9z',
  s_fan_9: 'Ventilație albine 9z',
  sound_flying_adult: 'Albine care zboară',
  s_fly_a: 'Albine care zboară',
  sound_total: 'Sunet total',
  s_tot: 'Sunet total',
  s_spl: 'Sunet total',
  bee_count_in: 'Număr albine intrate',
  bc_i: 'Număr albine intrate',
  bee_count_out: 'Număr albine ieșite',
  bc_o: 'Număr albine ieșite',
  t_i: 'Temp. interior',
  rssi: 'Puterea semnalului',
  snr: 'Raport semnal/zgomot',
  lat: 'Latitudine',
  lon: 'Longitudine',
  Sound_measurements: 'Măsurători sunet',
  Sensor_info: 'Informații senzor',
  s_bin098_146Hz: '098-146Hz',
  s_bin146_195Hz: '146-195Hz',
  s_bin195_244Hz: '195-244Hz',
  s_bin244_293Hz: '244-293Hz',
  s_bin293_342Hz: '293-342Hz',
  s_bin342_391Hz: '342-391Hz',
  s_bin391_439Hz: '391-439Hz',
  s_bin439_488Hz: '439-488Hz',
  s_bin488_537Hz: '488-537Hz',
  s_bin537_586Hz: '537-586Hz',
  s_bin_71_122: '071-122Hz',
  s_bin_122_173: '122-173Hz',
  s_bin_173_224: '173-224Hz',
  s_bin_224_276: '224-276Hz',
  s_bin_276_327: '276-327Hz',
  s_bin_327_378: '327-378Hz',
  s_bin_378_429: '378-429Hz',
  s_bin_429_480: '429-480Hz',
  s_bin_480_532: '480-532Hz',
  s_bin_532_583: '532-583Hz',
  s_bin_0_201: '0-201Hz',
  s_bin_201_402: '201-402Hz',
  s_bin_402_602: '402-602Hz',
  s_bin_602_803: '602-803Hz',
  s_bin_803_1004: '803-1004Hz',
  s_bin_1004_1205: '1004-1205Hz',
  s_bin_1205_1406: '1205-1406Hz',
  s_bin_1406_1607: '1406-1607Hz',
  s_bin_1607_1807: '1607-1807Hz',
  s_bin_1807_2008: '1807-2008Hz',
  icon: 'Pictogramă',
  precipIntensity: 'Precipitații',
  precipProbability: 'RProbabilitate precipitații',
  precipType: 'Ploaie',
  outsideTemperature: 'Temperatură exterioară',
  apparentTemperature: 'Temperatura resimțită',
  dewPoint: 'Punct de condensare',
  //   humidity: 'Umiditate',
  pressure: 'Presiune atmosferică',
  windSpeed: 'Viteza vântului',
  windGust: 'Rafale de vânt',
  windBearing: 'Direcția vântului',
  cloudCover: 'Nebulozitate',
  uvIndex: 'index UV',
  visibility: 'Vizibilitate',
  ozone: 'Ozon',

  /* Measurements */
  hour: 'Oră',
  day: 'Zi',
  week: 'Săptămână',
  month: 'Lună',
  year: 'An',

  /* settings */
  could_not_load_settings: 'Setările nu au putut fi încărcate',
  offline: 'Nici o conexiune',
  remote: 'La distanță',
  connected: 'Direct',
  yes: 'Da',
  no: 'Nu',
  footer_text: 'Apicultură cu sursă deschisă',
  beep_foundation: 'fundația BEEP',
  Checklist: 'Listă de verificare | Liste de verificare',
  checklist: 'listă de verificare | liste de verificare',
  Checklist_items: 'Elemente din lista de verificare',
  edit_hive_checklist:
    'Bifați/debifați casetele din lista de mai jos pentru a adăuga/elimina elemente din lista de verificare a stupului. De asemenea, puteți desfășura/acoperi și glisa/fixa elementele pentru a le rearanja stilului dumneavoastră.',

  /* user */
  Data_export: 'Exportarea datelor',
  Export_your_data:
    'Exportați toate datele din contul dvs. BEEP și trimiteți un e-mail care conține datele într-un fișier Excel. Fișierul va avea file diferite care conțin datele dvs. personale despre stup, locație și inspecție. ',
  Terms_of_use: 'Termenii serviciului',
  accept_policy:
    'Accept termenii serviciului BEEP, care sunt compatibili cu noua lege Europeană privind confidențialitatea datelor.',
  policy_url: 'https://beep.nl/terms-of-service',
  policy_version: 'beep_terms_2018_05_25_avg_v1',
  approve_policy:
    'Nu v-ați dat încă acordul pentru ultimii termeni și condiții.',

  /* weight calibration settings */
  calibrate_weight: 'Calibrați greutatea',
  calibrate_explanation:
    'Setați greutatea senzorilor la 0 scăzând valoarea măsurată curentă.',
  set_as_zero_value: 'Setați aceste valori ca valoare 0.',
  set_weight_factor: 'Definiți factorul de greutate',
  own_weight_kg: 'Care este greutatea proprie în Kg?',
  start_calibration:
    'Acum, urcațivă pe cântar și apăsați butonul de mai jos pentru a defini factorul greutate. Distribuiți greutatea în mod egal.',
  currently_there_is: 'există o greutate de',
  nothing: 'nimic',
  on_the_scale: 'pe cântar',
  calibration_started:
    'Calibrarea a început... Vă rugăm așteptați ca măsuratoarea următoare să intre în vigoare.',
  calibration_ended: 'Calibrarea a reușit!',

  /* General items */
  server_down:
    'Aplicația nu este disponibilă din cauza lucrărilor de întreținere, vă rugăm încercați din nou mai târziu.',
  add_to_calendar: 'Adăugați în calendar',
  sort_on: 'Sortează pe',
  Whats_new: 'Noutăți!',
  Manual: 'Manual',
  Site_title: 'BEEP | Bee monitor',
  could_not_create_user:
    'Utilizatorul nu poate fi creat în acest moment. Ne pare rău pentru neplăcerile cauzate, vă rugăm încercați mai târziu.',
  email_verified: 'Adresa dvs. de e-mail a fost verificată.',
  email_not_verified: 'Adresa dvs. de e-mail nu a fost încă verificată',
  email_new_verification:
    'Faceți clic pe acest link pentru a trimite un nou e-mail de verificare.',
  email_verification_sent:
    'Un mesaj cu un link pentru verificare a fost trimis pe adresa dvs. de e-mail. Faceți click pe link-ul din e-mail pentru a vă activa contul și pentru a vă conecta.',
  email_verification_resent:
    'Un mesaj nou cu un link pentru verificare a fost trimis pe adresa dvs. de e-mail. Faceți click pe link-ul din e-mail pentru a vă activa contul și pentru a vă conecta.',

  not_filled: 'este necesar, dar nu a fost completat',
  cannot_deselect:
    'Acest element nu poate fi eliminat, deoarece conține un element obligatoriu',
  Undelete: 'Nu ștergeți',
  the_field: 'Acest câmp',
  is_required: 'este necesar.',
  No_groups: 'Nu există grupuri disponibile',
  not_available_yet: 'Nu este încă disponibil. Vă rugăm să creați primul aici.',
  Users: 'Utilizatori',
  member: 'membrul grupului | membrii grupului',
  Member: 'Membrul grupului | Membrii grupului',
  Invite: 'Invită',
  Invited: 'Invitat',
  Invitation: 'Invitație | Invitații',
  Admin: 'Administrator',
  Creator: 'Proprietarul grupului',
  Collaborate: 'Colabora',
  Group: 'Grup de colaborare | Grupuri de colaborare',
  group: 'grup de colaborare | grupuri de colaborare',
  group_short: 'grup | grupuri',
  to_share:
    'pentru a partaja cu acest grup. 1 click = numai membrii grupului pot vedea, 2 click-uri = membrii grupului pot edita.',
  Invitation_accepted: 'Invitație acceptată',
  Accept: 'Accept',
  My_shared: 'Partajarea mea',
  invitee_name: 'Nume invitat',
  Remove_group:
    'Sigur doriți să eliminați complet acest grup partajat pentru toți membrii acestuia.',
  Detach_from_group: 'Scoateți-mă pe mine și stupii mei din acest grup',
  my_hive: 'Stupul meu',
  created: 'creat',
  group_detached: 'Grupul a fost părăsit cu succes',
  group_activated: 'Invitația în grup a fost acceptată.',
  group_explanation_1:
    '1. Creați un nou grup de colaborare cu un titlu clar și o descriere opțională',
  group_explanation_2:
    '2. Invitați alți utilizatori BEEP adresa lor de e-mail BEEP',
  group_explanation_3:
    '3. Împărtășiți informații specifice despre anumite colonii, care pot fi văzute de alți utilizatori pentru a coopera pe',
  Filter_and_sort_on: 'Filtrați și sortați pe:',

  /* TO BE TRANSLATED */
  /* New translations v2.2.0 */
  roofed: 'Does the apiary have a roof?',
  info: 'Info',
  research: 'Cercetare',
  start_date: 'Data începerii',
  end_date: 'End date',
  purpose: 'Data de încheiere',
  institution: 'Instituția de cercetare',
  type_of_data_used: 'Date utilizate',
  link: 'Link',
  Consent: 'Consimţământ',
  history: 'Istoric',
  Current_consent: 'Consimțământul actual',
  consent_yes: 'Sunt de acord să împărtășesc datele mele',
  consent_no: 'NU SUNT de acord să împărtășesc datele mele',
  my_beep_data: 'Datele mele BEEP',
  Consent_can_only_be_set: 'consimțământul poate fi ajustat la',
  earlier: 'mai devreme',
  later: 'mai tarziu',
  new_apiary_explanation: 'Creați o nouă stupină în 4 pași',
  start_here: 'Click pentru a începe',
  optional: 'optional',
  dimensions: 'dimensiuni',
  details: 'detalii',
  configuration: 'configurație',
  adjustments: 'ajustări',
  changes_queen_color: 'edittarea, schimba culoarea',
  Brood_box_and_frame: 'Ladă cuib și rame',
  Hive_order: 'Ordinul stupului în stupină',
  bb_width_cm: 'Lățime ladă cuib (cm)',
  bb_height_cm: 'Înalțime ladă cuib (cm)',
  bb_depth_cm: 'Ladă cuib adâncime(cm)',
  fr_width_cm: 'Lăţime ramă(cm)',
  fr_height_cm: 'Înalțime ramă (cm)',
  queen_line: 'linie',
  queen_tree: 'arbore',
  queen_description: 'Note',
  Hive_short: 'Stup | Stupi',
  Image: 'Imagine | Imagini',
  Size: 'Marime',
  preview: 'Previzualizare',
  Inside: 'Măsuri în interior',
  Offset: 'Decalaj',
  Multiplier: 'Multiplicator',
  Input: 'Input',
  Output: 'Output',
  Last: 'Ultimul',
  Export_sensor_data:
    'Exportați toate datele/ dispozitiv cu cea mai mare rezoluție posibilă ca fișier .csv pe care îl puteți deschide în Excel sau SPSS. N.B.: Datele privind data și ora din coloana „timp” sunt în format GMT, formatat după standardul de dată-oră RFC 3339.',
  CSV_export_separator: 'separator de coloane de date format CSV',
  Selected_date: 'Perioada de timp selectată',
  Sensor_measurements: 'Măsurători senzori',
  too_much_data:
    "Prea multa informa'ie de procesat, Va rugam să selectați mai puține măsuraori ale senzorilor, sau să reduceți perioada selectată.",
  beep_base_explanation:
    "Dacă aveți o bază BEEP (prezentă în poza de deasupra), va rugam utilizați aplicația BEEP base (iOS sau Android) pentru a seta comunicarea cu această aplicație.Dacă nu aveți o baza BEEP încă, dați clic pe elementul din meniu 'Website BEEP' pentru informații actualizate despre cum să obțineți o bază BEEP. Dacă aveți propriul dispozitiv pentru efectuarea măsurătorilor și doriți să vedeți datele în aplicația BEEP, vă rugăm să ne trimiteți un mesaj pentru a solicita să vă alăturați la comunitatea noastră Slack și să primiții acces la descrierea API.",
  sample_code_hive:
    'Mai întâi selectați un stup pentru a genera un cod unic pentru probă',
  sample_code_generate: 'Generați cod unic pentru probă',
  sample_code_delete: 'Ștergeți cod unic probă',
  measurement_interval: 'interval',
  from_weather_service: 'de la serviciul meteo',

  /* New translations v3 */
  click_hives_to_filter: 'Faceți clic pe stupi pentru a filtra',
  for: 'pentru',
  last_visit: 'Ultima vizită',
  apiary_details: 'Detalii Stupine',
  group_details: 'Detalii ale Grupului',
  diary: 'Jurnal',
  data: 'Date',
  photo: 'fotografie | fotografii',
  add_checklist: 'Adăugați lista de verificare',
  add_hive: 'Adăugați stup',
  delete_apiary: 'Ștergeți stupină',
  edit_apiary: 'Editează stupină',
  new_apiary: 'Stupină nouă',
  delete_group: 'Ștergeți grupul',
  edit_group: 'Editează grupul',
  new_group: 'Grup nou',
  verification_code: 'cod de verificare',
  limit_exceeded: 'Limita a fost atinsă, încercați din nou mai târziu',
  confirm_email_title: 'Confirmați adresa de e-mail',
  confirm_email_summary:
    'Ați primit un cod de autentificare pe adresa de e-mail. Introduceți codul aici pentru a confirma adresa de e-mail.',
  confirm: 'Confirmați',
  Profile: 'Profil',
  Checklist_template: 'Șablon lista de verificare | Sablon liste de verificare',
  Help: 'Ajutor',
  Privacy: 'Confidențialitate',
  FAQ: 'FAQ',
  Support: 'Suport',
  no_inspections: 'Nu există încă inspecții',
  no_results: 'Fără rezultate',
  Hive_brood_layer: 'Strat cu puiet | Straturi cu puiet',
  Hive_honey_layer: 'HStrat cu miere | Straturi cu miere',
  Hive_queen_excluder_layer: 'Gratie Hanneman | Gratii Hanneman',
  Hive_feeding_box_layer: 'Cutie pentru hrănire | FCutie pentru hrăniri',
  overrides_layer_colors: 'anulează culorile stratului',
  drag_layers: 'Trageți straturile pentru a configura stupul',
  page: 'pagina | pagini',
  not_found: 'nu a fost găsit',
  sorry: 'Ne pare rău.',
  delete_layer: 'Ștergeți strat',
  not_saved_error: 'Datele nu au putut fi salvate',
  something_wrong: 'Ceva n-a mers bine',
  not_editable: 'nu se poate modifica',
  unsaved_changes: 'Modificări nu au fost salvate',
  save_changes:
    'Sigur doriți să părăsiți această pagină? Toate modificările care nu au fost salvate vor fi pierdute.',
  no_apiaries_yet: 'Nu aveți încă stupine',
  need_help: 'Aveți nevoie de ajutor?',
  Apiary_color: 'Culoarea stupinei',
  Set_notification_date: 'Setați data notificării',
  remove_image: 'Eliminați imaginea',
  Total_colony_size: 'Dimensiunea totală a coloniei.',
  bee: 'albină | albine',
  with_bees: 'cu albine',
  change_checklist_confirm:
    'Sigur doriți să selectați o altă listă de verificare? Valorile câmpurilor deja completate vor fi păstrate.',
  view: 'Vizualizați',
  share: 'Distribuiți',
  edit_details: 'Editați detalii',
  remove_queen: 'Înlăturați matcă',
  remove_group_short: 'Înlăturați grup de colaborare',
  device: 'Dispozitiv | Dispozitive',
  click_date_to_edit: 'Faceți clic pe dată pentru a edita.',
  accept_policy_1: 'Accept ',
  accept_policy_2:
    ' termenii BEEP,  sunt compatibili cu noua lege Europeană privind confidențialitatea datelor.',
  terms_of_use: 'termenii serviciului',
  invalid_password:
    'Parola trebuie să conțină cel puțin 8 caractere, o literă mică, o literă mare, un număr și un caracter special (\\]{}()?\\-"!@#%&/\\,><\':|_~`)',
  sensor_definition: 'definirea senzorului| definirea senzorilor',
  measurement: 'măsurare| măsurători',
  remove_device: 'înlăturați dispozitiv',
  last_message_received: 'Ultimul mesaj primit',
  transmission_ratio: 'Raportul de transmisie',
  period: 'Perioada',
  download: 'Descărcați',
  different_end_start: 'Data de început și încheiere trebuie să fie diferită',
  later_end_start:
    'Data de începere trebuie să fie mai devreme decât data de încheiere',
  new_email_verification_sent:
    'Un mesaj nou cu un link de verificare a fost trimis la noua dvs. adresă de e-mail. Faceți clic pe linkul din e-mail pentru a vă confirma noua adresă de e-mail și pentru a vă autentifica',
  sensordef_info:
    'O definiție a senzorului este destinată să convertească o valoare a senzorului dintr-o valoare primară a senzorului „brut” într-o valoare în funcție de o cantitate fizică și o unitate (e.x. w_v = 1098273 => weight_kg = 62,400 kg) sau o calibrare a senzorului (e.x. t_0 = 15.3 ° C => t_0 = 15.8 ° C). Acest lucru se poate face prin setarea unui „offset” și a unui „multiplicator”. Valoarea de intrare și ieșire rămâne aceeași dacă este setat decalajul „0” și multiplicatorul „1”. Aplicația  BEEP base (din App Store) vă va oferi definițiile corecte ale senzorilor la configurarea inițială a bazei dvs. BEEP. ',
  or: 'sau',
  select_all_hives: 'Selectați toți stupii',
  select_all_editable_hives: 'Selectați toate stupii personalizabili',
  Alert: 'Alertă | Alerte',
  alert: 'alertă | alerte',
  remove_alert: 'Înlăturați alertă',
  alerts_enabled: 'Alerte activă',
  alerts_disabled: 'Alerte inactive ',
  edit_checklist_confirm:
    'Sigur doriți să editați lista de verificare? Orice modificare nesalvată a inspecției dvs. se va pierde.',
  edit_checklist_confirm_deselectedhives:
    'Sigur doriți să editați lista de verificare? Orice modificare nesalvată a inspecției și a selecției stupului dvs. se va pierde.',
  user_not_edited:
    'Datele utilizatorului nu au fost editate. Este posibil ca datele utilizatorului să fie identice cu datele utilizatorului aflate deja în baza de date sau este posibil ca unul sau mai multe câmpuri să nu fie completate corect. Vă rugăm să verificați datele și să încercați din nou.',
  user_not_deleted: 'A apărut o eroare, utilizatorul nu a fost șters.',
  research_consent: 'Consimțământ pentru cercetare',
  checklist_types: 'Cercetare personală, distribuită',
  edit_hive_checklist_no_touch:
    'bifați / debifați casetele din lista de mai jos pentru a adăuga / elimina articole din lista de verificare a stupului. Puteți, de asemenea, să derulați / pliați și să glisați / să fixați articolele pentru a le rorganiza în stilul dvs. (N.B. acest lucru nu este posibil pe un dispozitiv cu ecran tactil).',
  edit_hive_checklist_touch:
    'Bifați / debifați casetele din lista de mai jos pentru a adăuga / elimina articole din lista de verificare a stupului. Schimbarea ordinii articolelor este posibilă numai pe un computer desktop.',
  input_not_possible_for_bulkinspection:
    'Acest articol nu este disponibil atunci când sunt selectați mai mulți stupi pentru o inspecție, deoarece poate fi completat doar pentru fiecare stup individual. Este posibil să completați acest element pentru un singur stup ulterior, modificând inspecția pentru acest stup.',
  save_bulkinspection_confirm:
    'Are you sure that you want to save this inspection for multiple hives at the same time?',
  deleted_but_not_saved_devices_warning:
    'N.B.: dispozitivele vor fi eliminate numai după ce faceți clic pe butonul „Salvați și ștergeți” din colțul din dreapta sus.',
  no_alerts: 'Nu sunt alerte noi',
  alertrule: 'regulă alertă| reguli alerte',
  alertrule_pagetitle: 'Setări alertă',
  Measurement: 'Măsurătoare | Măsurători',
  Calculation: 'Calcul',
  calculation: 'calcul',
  Calculation_minutes: 'Calculați per x număr de minute',
  Alert_on_occurences: 'Când doriți să primiți această alertă?',
  Alert_on_occurences_hint: 'Direct sau numai după ce a avut loc de x ori?',
  Direct: 'Direct',
  After: 'După ',
  times: ' ori',
  Comparator: 'Comparator',
  comparator: 'comparator',
  Comparison: 'Comparație',
  comparison: 'comparașie',
  Threshold_value: 'Valoarea pragului',
  Minimum: 'Minim',
  Maximum: 'Maxim',
  Derivative: 'Derivat (creștere sau scădere)',
  Count: 'Counăra',
  Value: 'Valoare',
  Difference: 'Diferență',
  Absolute_value: 'Valoare absolută',
  Absolute_value_of_dif: 'Valoarea absolută a diferenței',
  Exclude_months:
    '<strong>Dezactivați</strong> această alertă în timpul următoarelor luni:',
  Exclude_hours:
    '<strong>Dezactivați</strong> această alertă pe perioada următoarelor ore:',
  Exclude_hives:
    '<strong>Dezactivați</strong> această alertă pentru umătorii stupi:',
  Exclude_hives_details:
    'N.B. În mod implicit, această alertă va fi executată pentru toți stupii cu un dispozitiv de măsurare.',
  months: 'luni',
  hours: 'ore',
  delete_alertrule: 'Ștergeți regula pentru alertă',
  Active: 'Activați',
  Alert_via_email: 'Alertă prin e-mail',
  Webhook_url: 'Adresa URL webhook',
  this_field: 'Acest câmp',
  alertrule_default: 'Default alert rule | Reguli de alertă implicite',
  copy: 'Copiere',
  Home: 'Acasă',
  Select_default_alertrule: 'Copiați regula de alertă implicită',
  /* below, please keep all terms between [] in english: */
  alertrule_main_sentence:
    'Aș dori să primesc o alertă dacă [calculation] [comparison] din [measurement_quantity] [comparator] [threshold_value][measurement_unit]. Acest calcul va fi executat la fiecare [calculation_minutes] ore, ',
  alertrule_occurences_direct_sentence: 'și aș dori să primesc alerta direct. ',
  alertrule_occurences_indirect_sentence:
    ' dar aș dori să primesc alerta numai dacă apare [alert_on_occurences] ori. ',
  alertrule_exclude_months_sentence:
    'Această alertă va fi dezactivată pentru următoarele luni: [exclude_months]. ',
  alertrule_exclude_hours_sentence:
    'Această alertă va fi dezactivată pentru următoarele ore: [exclude_hours]. ',
  alertrule_exclude_hives_sentence:
    'Această alertă va fi dezactivată pentru următorii stupi: [exclude_hive_ids].',
  min: 'minim',
  max: 'maxim',
  ave: 'medie',
  der: 'derivat',
  cnt: 'cumărătoare',
  equal_to: 'este egal cu',
  less_than: 'este mai mic ca',
  greater_than: 'este mai mare decât',
  less_than_or_equal: 'este mai mic sau egal cu',
  greater_than_or_equal: 'este mai mare sau egal cu ',
  alertrule_not_active:
    'Această alertă a fost dezactivată. O puteți activa bifând caseta „Activați” și salvând această regulă de alertă.',
  export_email_sent: 'A fost trimis un e-mail cu fișier Excel',
  export_file_saved: 'Fișierul Excel a fost salvat în folderul Descărcări',
  Updated_at: 'Actualizat la',
  Not_yet_saved: 'Nu a fost încă salvat',
  add_own_device: 'Adăugați propriul dispozitiv',
  devices_info_text:
    'Vă rugăm să rețineți: dețineți o bază BEEP? Utilizați aplicația  BEEP base pentru a vă adăuga dispozitivul. In acest caz aceasta va apărea automat în lista de mai jos.',
  devices_url_text:
    'Aici puteți găsi mai multe informații despre aplicația de BEEP base.',
  alert_explanation_1:
    'Dacă dețineți o bază BEEP sau un alt dispozitiv, puteți seta alerte, astfel încât să primiți o alertă atunci când datele de măsurare îndeplinesc anumite cerințe. De exemplu, o scădere bruscă a greutății din cauza roirii. Alertele vor fi afișate în această aplicație, puteți alege să le primiți și prin e-mail.',
  alert_explanation_2:
    'Pentru a putea începe, există câteva reguli implicite de alertă pe care le puteți utiliza (și adapta la propriile nevoi). În plus, vă puteți crea propriile reguli de alertă.',
  alertrules_url_text:
    'Accesați „Setări de alertă” pentru a crea prima regulă de alertă.',
  Apiary_management: 'Managementul stupinei',
  Move: 'Mutați',
  Current_apiary: 'Stupina actuală',
  sensor_key: 'Identificator unic al dispozitivului',
  disabled_settings: 'Editarea manuală a acestor setări este dezactivată.',
  Address_placeholder: 'Număr, Nume stradă, Oraș',
  first_create_apiary: 'Mai întâi, creați o stupină',
  Unknown: 'Necunoscut',
  unknown: 'necunoscut',
  research_warning:
    'Vă rugăm să rețineți: dacă nu ați primit o invitație de participare, nu este necesar să vă dați consimțământul pentru a vă partaja datele, deoarece datele dvs. nu vor fi utilizate în acest caz.',
  research_explanation_p1:
    'Platforma BEEP este utilizată în proiectele de cercetare enumerate mai jos. După ce sunteți invitat să participați la un proiect de cercetare, trebuie să dați consimțământul pentru ca cercetătorii să vă acceseze datele despre albine.',
  research_explanation_p2:
    'Vă puteți retrage consimțământul în orice moment. Din acel moment, nu vor mai fi distribuite date noi. Datele pe care le-ați distribuit în perioada pentru care ați dat consimțământul vor rămâne disponibile pentru cercetare. În caz de întrebări, vă rugăm să le adresați persoanei de contact a proiectului dvs. de cercetare.',
  research_info:
    'Înainte de a vă da consimțământul, vă rugăm să consultați descrierea cercetării oferită prin linkul de mai jos și să solicitați detalii suplimentare, dacă considerați necesar.',
  save_and_delete: 'Salvați și ștergeți',
  drag_layers_info_text:
    'Trageți straturile din partea stângă în poziția dorită la stupul din partea dreaptă. Ștergeți un strat din stup făcând clic pe acesta și apoi făcând clic pe pictograma in forma unui coș roșu  . În interiorul stratului dintr-un stup se poate trage și pentru a edita pozițiaacestuia, de asemenea culoarea stratului poate fi editată făcând clic pe strat.',
  New_hive: 'Stup nou',
  New_alertrule: 'Regulă nouă pentru alertă',
  Add_alertrule: 'Adăugați o regulă de alertă',
  Add_apiary: 'Adăugați o stupină',
  Add_sensor_definition: 'Adăugați definiția senzorului',
  Add_member: 'Adăugați un membru',
  alert_rule_deleted: 'Regula de alertă a fost ștearsă',

  /* TO BE TRANSLATED FOR 3.1 */
  new_but_not_saved_sensor_defs_warning:
    'N.B.: sensor definitions will only be added after clicking the green check icon at the end of the sensor definition row in the table.',
  delete_sensordef: 'Delete sensor definition',
  delete_all_alerts: 'Delete all alerts',
  delete_all_alerts_warning:
    'Are you sure you want to delete all alerts? This cannot be undone.',
  delete_all_alerts_warning_filter_active:
    'Are you sure you want to delete all alerts? Alerts that do not match your search term will be deleted as well. This cannot be undone.',
  already_verified: 'I have verified my email address and would like to login',
  password_recovery_resend_mail: 'Send new verification code',
  alert_rule_created: 'New alert rule has been created',
  select_all: 'Select all',
  During: 'During', // context: 'During 2 days', or 'During 1 hour', to notify the period during which the same alert has been triggered (each evaluation) in a row

  // For soon to be launched new log data import page
  Log_data_import: 'Import log data',
  Log_files: 'Log files',
  Upload_date: 'Upload date',
  Messages: 'Messages',
  Log_time: 'Time logged',
  File_size: 'File size',
  check_log_data: 'Check log data',
  delete_log_file: 'Delete log file',
  commit_log_data_short: 'Import log data',
  commit_log_data: 'Import data from this log file to the BEEP app: ',
  import_log_data_explanation:
    "In the BEEP base app you can download log data from the internal memory of the BEEP base. Every time you download log data, the internal memory gets cleared and the data gets uploaded to the BEEP app. Below is the list of your downloaded log data. You can replace the data in the database by the data inside the downloaded log files by clicking the button 'Check log data'. This will first check how much data will be replaced inside the database, and if the time of the data in the log file is correct. You will get a confirmation box with the resulting info, and the possibility to apply or deny the replacement.",
  import_log_data_url_text:
    'Here you can find the support article on downloading log data with the BEEP base app.',
  import_log_data_support_url:
    'https://beepsupport.freshdesk.com/ro/support/solutions/articles/60000697129-desc%C4%83rca%C8%9Bi-datele-de-baz%C4%83-beep-prin-bluetooth',
}

export default translations
