/*
 * Beep - Translations
 * Author: Pim van Gennip (pim@iconize.nl)
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
    'Junie',
    'Julie',
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
  weekdaysFull: [
    'Duminică',
    'Luni',
    'Marți',
    'Miercuri',
    'Joi',
    'Vineri',
    'Sâmbătă',
  ],
  weekdaysShort: ['Dum.', 'Lun.', 'Mar.', 'Mie.', 'Joi', 'Vin.', 'Sâm.'],
  Today: 'Astăzi',
  Clear: 'Ștergeți',
  Close: 'închideți',
  firstDay: 1,
  format: 'dddd d mmmm yyyy',

  /* main */
  Website: 'Website',
  Feedback: 'Feedback',
  Feedback_mail_header: 'Feedback aplicație Beep ',
  Feedback_mail_body:
    'Dragă fundație Beep,%0D%0A%0D%0APrin prezenta feedbackul meu pentru aplicația Beep%0D%0A%0D%0AI am descoperit această:%0D%0A%0D%0înainte să apară acest mesaj, am efectuat:%0D%0A%0D%0APe ecran a apărut (vă rugăm să includeți o captură de ecran):%0D%0A%0D%0A%0D%0A%0D%0A',
  Diagnostic_info: 'Informații diagnostic (în cazul unei erori):%0D%0A',
  back: 'Înapoi',
  menu: 'Meniu',
  lighting: 'Lumină',
  camera: 'Cameră foto',
  weather: 'Vreme',
  sensors: 'Senzori',
  sensors_na:
    'Senzorii BEEP pentru monitorizarea la distanță a coloniei dvs. vor fi disponibili în curând...',

  no_valid_authentication: 'Nu au fost primite date valide de autentificare',
  succesfully_saved: 'Salvate cu succes',

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
  invalid_password: 'Parola este prea scurtă (min. 8 caractere)',
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
    'Atenție încă există stupi în această stupină. Puteți salva stupi specifici (și inspecțiilelor) prin mutarea acestora într-o altă stupină. Dacă veți continua cu ștergerea, vor fi șterse toate inspecțiile și toți stupii din prezenta locație.',

  Date: 'Data',
  ok: 'Ok',
  previous: 'Anterior',
  prev: 'anterior',
  next: 'Următorul',
  add: 'Adăugațti',
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
  member_since: 'Membru Beep din',

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
  locations_title: 'Beep',
  hives_title: 'Beep',
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
  inspect: 'Inspect',
  inspection: 'inspecție | inspecții',
  Inspection: 'Inspecție | Inspecții',
  New_inspection: 'Inspecție nouă',
  Edit_inspection: 'Editați inspecția',
  Actions: 'Actiune',
  Conditions: 'Condiții(inspectate)',
  edit: 'Editare',
  Hive_brood_layers: 'Straturi cu puiet',
  Hive_honey_layers: 'Straturi cu miere',
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
  Not_implemented_yet: 'Acest element nu este încă implementat',
  save_input_first: 'Doriți să salvați prima intrare?',

  /* dashboard */
  dashboard_title: 'Tablou de bord',
  dashboard: 'Tablou de bord',
  measurements: 'Măsurători',
  measurementsError:
    'Nu pot fi încărcate măsurătorile, verificați conexiunea la rețea',
  last_measurement: 'Ultima măsurare',
  at: 'la',
  measurement_system: 'Sistem de măsurare Beep',
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
  Hive_layers: 'Straturi stups',
  Hive_frames: 'Rame pe strat',
  Hive_color: 'Culoarea stupului',
  Queen: 'Matcă',
  queen: 'Matcă',

  settings_title: 'Setări',
  settings_description: 'Setări ale senzorilor',
  settings: 'Setări',

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
  icon: 'Icon',
  precipIntensity: 'Rainfall',
  precipProbability: 'Rain probability',
  precipType: 'Rain type',
  outsideTemperature: 'Outside temperature',
  apparentTemperature: 'Apparent temperature',
  dewPoint: 'Dew point',
  //   humidity: 'Humidity',
  pressure: 'Air pressure',
  windSpeed: 'Wind speed',
  windGust: 'Wind gust',
  windBearing: 'Wind bearing',
  cloudCover: 'Cloud cover',
  uvIndex: 'UV index',
  visibility: 'Visibility',
  ozone: 'Ozone',

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
  Checklist_items: 'Elemente din lista de verificare',
  edit_hive_checklist:
    'Bifați/debifați casetele din lista de mai jos pentru a adăuga/elimina elemente din lista de verificare a stupului. De asemenea, puteți desfășura/acoperi și glisa/fixa elementele pentru a le rearanja stilului dumneavoastră. Recomandare: dacă introduceți un termen în câmpul de căutare, toate elementele care conțin termenul respectiv vor apărea pe ecran și vor avea culoarea roșie.',

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
  calibrate_weight: 'Calivrați greutatea',
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
    'Calibrarea a început... Vă rugîm așteptați ca măsuratoarea următoare să intre în vigoare.',
  calibration_ended: 'Calbrarea a reușit!',

  /* General items */
  server_down:
    'Aplicația nu este disponibilă din cauza lucrărilor de întreținere, vă rugăm încercați din nou mai târziu.',
  add_to_calendar: 'Adăugați în calendar',
  sort_on: 'Sortează pe',
  Whats_new: 'Nou!',
  Manual: 'Manual',

  Site_title: 'BEEP | Bee monitor',

  could_not_create_user:
    'Utilizatorul nu poate fi creat în acest moment. Ne pare rău pentru neplăcerile cauzate, vă rugăm încercațimai târziu.',
  email_verified: 'Adresa dvs. de e-mail a fost verificată.',
  email_not_verified: 'Adresa dvs. de e-mail nu a fost încă verificată',
  email_new_verification:
    'Faceți clic pe acest linl pentru a trimite un nou e-mail de verificare.',
  email_verification_sent:
    'Un mesaj cu un link pentru verificare a fost trimis pe adresa dvs. de e-mail. Faceți click pe link-ul din e-mail pentru a vă activa contul și pentru a vă conecta.',

  not_filled: 'este necesar, dar nu a fost completat',
  cannot_deselect:
    'Acest element nu poate fi eliminat, deoarece conține un element obligatoriu',
  sensor_key: 'Cheie senzor',
  Undelete: 'Nu ștergeți',
  the_field: 'Acest',
  is_required: 'este necesar.',

  No_groups: 'Nu există grupuri disponibile',
  not_available_yet: 'nu este încă disponibil. Vă rugăm să creați primul aici.',
  Users: 'Utilizatori',
  member: 'membrul grupului | membrii grupului',
  Member: 'Membrul grupului | Membrii grupului',
  Invite: 'Invită',
  Invited: 'Invitat',
  invitations: 'invitații',
  Admin: 'Administrator',
  Creator: 'Proprietarul grupului',
  Collaborate: 'Colabora',
  Group: 'Grup de colaborare | Grupuri de colaborare',
  group: 'grup de colaborare | grupuri de colaborare',
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
  group_detached: 'grupul a fost părăsit cu succes',
  group_activated: 'Invitația în grup a fost acceptată.',
  group_explanation_1:
    '1. Creați un nou grup de colaborare cu un titlu clar și o descriere opțională',
  group_explanation_2:
    '2. Invitați alți utilizatori Beep adresa lor de e-mail Beep',
  group_explanation_3:
    '3. Împărțiți informații specifice despre anumite colonii, care pot fi văzute de alți utilizatori pentru a coopera pe',
  Filter_and_sort_on: 'Filtrați și sortați pe:',

  /* New translations v2.2.0 */
  roofed: 'Does the apiary have a roof?',
  info: 'Info',

  research: 'Research',
  research_explanation:
    'This screen contains the available researches for which you can opt-in to share your data with. When you consent to share your BEEP account data, you contribute to research to support honeybee health. Before you consent, please review the research description provided through the link below and request for additional details if needed. You can withdraw your consent at any time, no new data will be shared from that moment. The data that your shared in the period that you did consent to will remain available for research. In case of questions, please direct these to the contact person provided.',
  research_info:
    'By sharing your data with researchers, you help them to being able to analyse more data and come to better conclusions for their research.',
  start_date: 'Start date',
  end_date: 'End date',
  purpose: 'Research purpose',
  institution: 'Research institution',
  type_of_data_used: 'Data usage',
  link: 'Link',
  Consent: 'Consent',
  history: 'history',
  Current_consent: 'Current consent',
  consent_yes: 'I consent to share my data',
  consent_no: 'I do NOT consent to share my data',
  my_beep_data: 'My own BEEP data',
  Consent_can_only_be_set: 'Consent can only be adjusted to',
  earlier: 'an earlier',
  later: 'a later',

  new_apiary_explanation: 'Create a new apiary in 4 steps',
  start_here: 'Click here to start',
  optional: 'optional',
  dimensions: 'dimensions',
  details: 'details',
  configuration: 'configuration',
  adjustments: 'adjustments',
  changes_queen_color: 'editing changes the color',

  Brood_box_and_frame: 'Brood box and frame',
  Hive_order: 'Hive order at apiary',
  bb_width_cm: 'Brood box width (cm)',
  bb_height_cm: 'Brood box height (cm)',
  bb_depth_cm: 'Brood box depth (cm)',
  fr_width_cm: 'Frame width (cm)',
  fr_height_cm: 'Frame height (cm)',
  queen_line: 'line',
  queen_tree: 'tree',
  queen_description: 'notes',
  Hive_short: 'Hive',

  Images: 'Images',
  Size: 'Size',
  preview: 'preview',

  Sensor_definitions: 'Sensor definitions',
  Inside: 'Measures inside',
  Offset: 'Offset',
  Multiplier: 'Multiplier',
  Input: 'Input',
  Output: 'Output',
  Last: 'Last',

  Export_sensor_data:
    "Export all data per device in the highest possible resolution as a .csv file that you can open in Excel, or SPSS. NB: The date time data in the 'time' column is in GMT time, formatted by the RFC 3339 date-time standard.",
  CSV_export_separator: 'CSV data column separator',
  Selected_date: 'Selected time span',
  Sensor_measurements: 'Sensor measurements',
  too_much_data:
    'Too much data to process, please select fewer Sensor measurements, or reduce the timespan between start and end date.',

  beep_base_explanation:
    "If you have a BEEP base (shown in the picture above), please use the native app (iOS and Android) to set-up the communication with this app. If you don't have a BEEP base yet, please click on the menu item 'BEEP website' for updates on how to get a BEEP base. I you have your own measurement device and would like to see the data in the BEEP app, please send us a message to ask for joining our Slack community and you can get access to the API description.",

  /* New translations v3 */
  click_hives_to_filter: 'Faceți clic pe stupi pentru a filtra',
  for: 'pentru',
  last_visit: 'Ultima vizită',
  apiary_details: 'Detalii Stupine',
  group_details: 'Detalii de Grup',
  diary: 'jurnal',
  data: 'date',
  photo: 'fotografie | fotografii',
  add_checklist: 'Adăugați lista de verificare',
  add_hive: 'Adăugați stup',
  delete_apiary: 'Ștergeți stupina',
  edit_apiary: 'Editează stupina',
  new_apiary: 'Nouă stupină',
  delete_group: 'Ștergeți grupul',
  edit_group: 'Editează grupul',
  new_group: 'Nou grup',
  verification_code: 'cod de verificare',

  /* TO BE TRANSLATED */
  limit_exceeded: 'Limit has been reached, try again later',
  confirm_email_title: 'Confirm your email',
  confirm_email_summary:
    "You've received a verification code in your email. Enter it below to verify your email adress",
  confirm: 'Confirm',
  Profile: 'Profile',
  Checklist_template: 'Checklist template | Checklist templates',
  Help: 'Help',
  Privacy: 'Privacy',
  FAQ: 'FAQ',
  Support: 'Support',
  no_inspections: 'No inspections yet',
}

export default translations