/*
 * Beep - Translations
 * Author: Pim van Gennip (pim@iconize.nl)
 *
 */
const translations = {
  /* Date picker */
  monthsFull: [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
  ],
  monthsShort: [
    'Gen',
    'Feb',
    'Mar',
    'Apr',
    'Mag',
    'Giu',
    'Lug',
    'Ago',
    'Set',
    'Ott',
    'Nov',
    'Dic',
  ],
  weekdaysFull: [
    'Domenica',
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
  ],
  weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
  Today: 'Oggi',
  Clear: 'Cancella',
  Close: 'Chiudi',
  firstDay: 1,
  format: 'dddd d mmmm yyyy',

  /* main */
  Website: 'Sitoweb',
  Feedback: 'Opinione',
  Feedback_mail_header: 'Opinione App Beep',
  Feedback_mail_body:
    'Cara Fondazione BEEP,%0D%0A%0D%0AEcco la mia opinione sulla App BEEP.%0D%0A%0D%0AHo riscontrato questo:%0D%0A%0D%0AAppena prima che accadesse, ho fatto:%0D%0A%0D%0ALo schermo appariva così (allega una foto dello schermo):%0D%0A%0D%0A%0D%0A%0D%0A',
  Diagnostic_info:
    'Informazione diagnostica (in caso di malfunzionamento):%0D%0A',
  back: 'Indietro',
  menu: 'Menu',
  lighting: 'Luminosità',
  camera: 'Camera',
  weather: 'Meteo',
  sensors: 'Dispositivi',
  sensors_na:
    'I sensori BEEP per il monitoraggio remoto del tuo alveare saranno presto disponibili...',

  no_valid_authentication: 'I dati di autenticazione trasmessi non sono validi',
  succesfully_saved: 'Salvataggio avvenuto',

  switch_language: 'Cambia lingua',
  Delete: 'Cancella',
  Search: 'Cerca...',

  /* user error messages */
  User: 'Utente',
  User_data: 'Dati utente',
  user_data: 'dati utente',
  updated: 'aggiornato',
  delete_complete_account:
    "Sei sicuro di voler cancellare il tuo account, incluso tutti gli apiari, alveari e visite? L'azione è irreversibile.",
  username_is_required: 'Prego, inserisci il nome utente',
  username_already_exists: 'Nome utente già esistente',
  password_is_required: 'Prego inserisci la password',
  email_is_required: 'Prego inserisci un indirizzo email',
  email_already_exists: "L'indirizzo email è già in uso",
  'policy accepted_is_required':
    'Devi accettare i termini di servizio per registrarti',

  already_registered: 'Sono già registrato',
  invalid_user: 'Utente sconosciuto, o password errata',
  no_password_match: 'Le passwords non coincidono',
  invalid_token: 'Codice non valido',

  no_valid_email: 'Indirizzo email non valido',

  empty_fields: 'Prego, compila tutti i campi',
  match_passwords: 'le passwords non coincidono',

  succesfully_registered: 'Sei registrato con successo.',
  authentication_failed: 'Autenticazione fallita',

  no_valid_input_received:
    'I dati non possono essere salvati, i dati immessi non sono validi.',

  remove_all_settings: 'Rimuovi tutte le impostazioni',
  remove_apiary: 'Rimuovi apiario',
  remove_hive: 'Rimuovi alveare',
  remove_inspection: 'Rimuovi visita',

  Error: 'Errore',
  Warning: 'Attenzione',
  first_remove_hives:
    'Attenzione: ci sono ancora alveari in questo apiario. Puoi salvare alveari specifici (e le loro visita) spostandoli prima in un altro apiario. Se continui, cancellerai TUTTI gli alveari e dati di visite per questa località.',

  Date: 'Data',
  ok: 'Ok',
  previous: 'Precedente',
  prev: 'precedente',
  next: 'Prossimo',
  add: 'Aggiungi',
  create_new: 'Crea nuovo',
  New: 'Nuovo',

  warning: 'Attenzione',

  apply: 'Applica',
  Cancel: 'Cancella',
  automatic: 'Automatico',
  manually: 'Manuale',
  on: 'On',
  off: 'Off',

  /* login */
  login_title: 'Accedi',
  login: 'Accedi',
  back_to_login: 'Torna alla pagina di accesso',
  forgot_password: 'Password dimenticata?',

  username: 'Nome Utente',
  password: 'Password',
  confirm_password: 'Conferma password',
  email: 'E-mail',
  token: 'Codice',

  create_login_question: 'Non hai un account? Registrati come nuovo utente',
  create_login: 'Registrati come nuovo utente',
  create_login_summary: 'Crea un account per nuovo utente',
  save: 'Salva',
  save_and_return: 'Salva e torna indietro',

  logout: 'Disconnetti',
  logout_title: 'Disconnetti come',
  logout_now: 'Vuoi disconnetterti ora?',
  member_since: 'utente BEEP dal',

  /* password recovery */
  password_recovery_title: 'Dimenticato la password?',
  password_recovery_remembered: 'Oh, ora mi ricordo la password!',
  password_recovery_user: 'Informazioni utente',
  password_recovery_send_mail: 'Manda codice di verifica',
  password_recovery_code_not_received:
    'Non hai ricevuto il codice entro 5 minuti?',
  password_recovery_enter_code:
    'Ricevuto il codice di verifica? Inseriscilo qui',
  password_recovery_reset_title: 'Inserisci una nuova password',
  password_recovery_reset_password: 'Cambia password',
  password_recovery_reminder_success:
    'Una e-mail è stata inviata. Clicca il link nella tua e-mail per ripristinare la password di questo account.',
  password_recovery_reminder_summary:
    'Inserisci il tuo indirizzo e-mail. Riceverai una e-mail con un link per cambiare la password al prossimo passaggio.',

  password_recovery_reset_summary:
    'Usa il codice che hai ricevuto per impostare una nuova password per il tuo account',
  password_recovery_reset_success:
    "La tua passowrd è stata modificata con successo, ed ora hai eseguito l'accesso.",

  new_password: 'Nuova password',
  confirm_new_password: 'Conferma nuova password',

  go_to_dashboard: 'Vai al mio pannello di controllo',

  /* overview */
  overview_title: 'Panoramica',
  overview: 'Panoramica',
  color: 'Colore',
  state: 'On/off',
  connection_state: 'Stato connessione',

  /* hives */
  locations_title: 'Beep',
  hives_title: 'Beep',
  Hive: 'Alveare | Alveari',
  hive: 'alveare | alveari',
  Location: 'Apiario | Apiari',
  location: 'apiario | apiari',
  Name: 'Nome',
  name: 'nome',
  Type: 'Tipo',
  type: 'tipo',
  Layer: 'Strato',
  layer: 'strato',
  brood: 'Covata',
  honey: 'Miele',
  inspect: 'Visita',
  inspection: 'visita | visite',
  Inspection: 'Visita | Visite',
  New_inspection: 'Nuova visita',
  Edit_inspection: 'Modifica visita',
  Actions: 'Azioni',
  Conditions: 'Condizioni (visitate)',
  edit: 'Modifica',
  // Hive_brood_layers: 'Strati di covata',
  // Hive_honey_layers: 'Strati di miele',
  Hive_layer_amount: 'Totale strati',
  Bee_race: 'Razza di api',
  Birth_date: 'Data di nascita',
  Color: 'Colore',
  Queen_colored: 'Regina marcata',
  Queen_clipped: 'Regina clippata',
  Queen_fertilized: 'Regina feconda',
  Age: 'Età',
  years_old: 'anni',

  /* Hive check items */
  Date_of_inspection: 'Data di visita',
  action: 'Azione',
  reminder: 'Ricorda',
  remind_date: 'Data di notifica',

  overall: 'Generale',
  positive_impression: 'Impressione totale',
  needs_attention: 'Necessita attenzione',
  notes: 'Note',
  notes_for_next_inspection:
    'Breve nota per prossima visita (visibile nella panoramica)',
  Not_implemented_yet: 'Questo elemento non è ancora stato aggiunto',
  save_input_first: 'Vuoi salvare i dati immessi prima?',

  /* dashboard */
  dashboard_title: 'Pannello di controllo',
  dashboard: 'Pannello di controllo',
  // measurements: 'Misurazioni',
  measurementsError:
    'Non posso caricare le misurazioni, verifica la connessione',
  last_measurement: 'Ultima misurazione',
  at: 'a',
  measurement_system: 'Sistema di misurazioni Beep',
  no_data: 'Nessun dato disponibile',
  no_chart_data: 'Nessun grafico per il periodo selezionato',

  /* settings */
  General: 'Generale',
  Place: 'Posizione',
  Country: 'Nazione',
  City: 'Città',
  Address: 'Indirizzo',
  Lattitude: 'Latitudine',
  Longitude: 'Longitudine',
  Street: 'Via',
  Number: 'N.',
  Postal_code: 'CAP',
  Description: 'Descrizione',
  Hive_settings: 'Configurazione alveare',
  Hive_amount: 'Totale alveari in questa località',
  Hive_prefix: 'Prefisso nome alveare (prima del numero)',
  Hive_number_offset: 'Inizia numerazione alveari',
  Hive_type: 'Tipo di alveare',
  Hive_layers: "Strati dell'alveare",
  Hive_frames: 'Favi per strato',
  Hive_color: 'Colore alveare',
  Queen: 'Regina',
  queen: 'regina',

  settings_title: 'Impostazioni',
  settings_description: 'Impostazioni dei sensori',
  settings: 'Impostazioni',

  sensors_title: 'Impostazioni dispositivo',
  sensors_description: 'Stato e registrazione del dispositivo',
  // sensors: 'Dispositivi',
  sensor: 'Dispositivo',

  Select: 'Seleziona',
  Not_selected: 'Non selezionato',
  Poor: 'Scarso',
  Fair: 'Sufficiente',
  Average: 'Medio',
  Good: 'Buono',
  Excellent: 'Eccellente',
  Low: 'Basso',
  Medium: 'Medio',
  High: 'Alto',
  Extreme: 'Estremo',

  /* colors */
  select_color: 'Seleziona un colore',
  advanced: 'Avanzate',

  /* sensors */
  Select_sensor: 'Seleziona un sensore',
  // temperature: 'Temperatura',
  t: 'Temperatura',
  t_0: 'Temperatura 1',
  t_1: 'Temperatura 2',
  t_2: 'Temperatura 3',
  t_3: 'Temperatura 4',
  t_4: 'Temperatura 5',
  t_5: 'Temperatura 6',
  t_6: 'Temperatura 7',
  t_7: 'Temperatura 8',
  t_8: 'Temperatura 9',
  t_9: 'Temperatura 10',
  light: 'Irraggiamento solare',
  l: 'Irraggiamento solare',
  water: 'Acqua',
  w: 'Acqua',
  humidity: 'Umidità',
  h: 'Umidità',
  air_pressure: 'Pressione atmosferica',
  p: 'Pressione atmosferica',
  weight: 'Peso',
  w_v: 'Sensore di peso valore tutti i sensori',
  w_fl: 'Sensore di peso valore anteriore sinistr',
  w_fr: 'Sensore di peso valore anteriore destro',
  w_bl: 'Sensore di peso valore posteriore sinistro',
  w_br: 'Sensore di peso valore posteriore destro',
  weight_kg: 'Peso',
  weight_kg_corrected: 'Peso (corretto)',
  weight_combined_kg: 'Peso combinato',
  bat_volt: 'Batteria',
  bv: 'Batteria',
  sound_fanning_4days: 'Rumore ventilazione api 4gg',
  s_fan_4: 'Rumore ventilazione api 4gg',
  sound_fanning_6days: 'Rumore ventilazione api 6gg',
  s_fan_6: 'Rumore ventilazione api 6gg',
  sound_fanning_9days: 'Rumore ventilazione api 9gg',
  s_fan_9: 'Rumore ventilazione api 9gg',
  sound_flying_adult: 'Api in volo',
  s_fly_a: 'Api in volo',
  sound_total: 'Suono complessivo',
  s_tot: 'Suono complessivo',
  s_spl: 'Livello di pressione del suono',
  bee_count_in: 'Conta ape in ingresso',
  bc_i: 'Conta ape in ingresso',
  bee_count_out: 'Conta ape in uscita',
  bc_o: 'Conta ape in uscita',
  t_i: 'Temp. interna',
  rssi: 'Intensità segnale',
  snr: 'Rumore segnale',
  lat: 'Latitudine',
  lon: 'Longitudine',
  Sound_measurements: 'Misurazioni acustiche',
  Sensor_info: 'Info sensore',
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
  icon: 'Icona',
  precipIntensity: 'Pioggia',
  precipProbability: 'Probabilità di pioggia',
  precipType: 'Tipo di pioggia',
  temperature: 'Temperatura esterna',
  apparentTemperature: 'Tempreatura percepita',
  dewPoint: 'Punto di rugiada',
  // humidity: 'Umidità',
  pressure: 'Pressione atmosferica',
  windSpeed: 'Velocità vento',
  windGust: 'Raffica di vento',
  windBearing: 'Direzione vento',
  cloudCover: 'Nuvolosità',
  uvIndex: 'Indice UV',
  visibility: 'Visibilità',
  ozone: 'Ozono',

  /* Measurements */
  hour: 'Ora',
  day: 'Giorno',
  week: 'Settimana',
  month: 'Mese',
  year: 'Anno',

  /* settings */
  could_not_load_settings: 'Le impostazioni non possono essere caricate',
  offline: 'Nessuna connessione',
  remote: 'Remoto',
  connected: 'Diretto',

  yes: 'Sì',
  no: 'No',

  footer_text: 'Apicoltura open source',
  beep_foundation: 'la Fondazione BEEP',

  Checklist: 'Lista di controllo | Liste di controllo',
  checklist: 'lista di controllo | liste di controllo',
  Checklist_items: 'Elementi lista di controllo',
  edit_hive_checklist:
    "Seleziona/Deseleziona le caselle nella lista sottostante per aggiungere/togliere l'elemento dalla tua lista di controlli. Puoi anche mostrare/nascondere o trascinare gli elementi per riordinarli secondo il tuo stile.. Consiglio: se inserisci una parola nel campo ricerca, tutti gli elementi contenenti quella parola saranno mostrati ed evidenziati in rosso.",

  /* user */
  Data_export: 'Esporta i dati',
  Export_your_data:
    'Esporta tutti i dati del tuo account Beep e invia una e-mail con allegati i dati in formato Excel. Il file Excel ha vari fogli di lavoro, contenenti i tuoi dati personali, alveari, posizioni e visite.',

  Terms_of_use: 'Condizioni di servizio',
  accept_policy:
    'Accetto le condizioni di servizio proposte da BEEP, che sono compatibili con la normativa Europea vigente in materia di Privacy',
  policy_url: 'https://beep.nl/terms-of-service',
  policy_version: 'beep_terms_2018_05_25_avg_v1',
  approve_policy: 'Non hai ancora accettato le ultime Condizioni di Servizio.',

  /* weight calibration settings */
  calibrate_weight: 'Calibrazione peso',
  calibrate_explanation:
    'Imposta il peso del sensore su 0 sottraendo il valore di misura attualmente visualizzato.',
  set_as_zero_value: 'Imposta questi valori come Valore 0',
  set_weight_factor: 'Definisci il fattore peso',
  own_weight_kg: "Qual'è il tuo peso in kg?",
  start_calibration:
    'Ora sali sulla bilancia, premi il bottone sottostante per definire il fattore peso. Distribuisci il tuo peso equamente.',
  currently_there_is: 'Il peso è di',
  nothing: 'nulla',
  on_the_scale: 'sulla bilancia',
  calibration_started:
    'Calibrazione iniziata... Attendi la prossima misura per renderla effettiva.',
  calibration_ended: 'Calibrazione avvenuta con successo!',

  /* General items */
  server_down:
    'La App è al momento non disponibile causa lavori di manutenzione, riprova più tardi',
  add_to_calendar: 'Aggiungi al calendario',
  sort_on: 'ordina',
  Whats_new: 'Nuovo!',
  Manual: 'Manuale',

  Site_title: 'BEEP | Monitoraggio Alveari',

  could_not_create_user:
    "L'utente non può essere creato in questo momento. Ci scusiamo per l'inconveniente, riprova più tardi.",
  email_verified: 'Il tuo indirizzo e-mail è stato verificato.',
  email_not_verified: 'Il tuo indirizzo e-mail non è ancora stato verificato.',
  email_new_verification:
    'Clicca su questo link per inviare una nuova e-mail di verifica.',
  email_verification_sent:
    "Un messaggio con in link di verifica è stato inviato al tuo indirizzo e-mail. Clicca sul link nella email per attivare il tuo account ed eseguire l'accesso.",

  not_filled: 'è richiesto, ma non compilato',
  cannot_deselect:
    'Impossibile rimuovere questo elemento, perchè contiene informazioni obbligatorie',
  sensor_key: 'Chiave sensore',
  Undelete: 'Non cancellare',
  the_field: 'Il',
  is_required: "E' richiesto",

  No_groups: 'Non ci sono gruppi disponibili',
  not_available_yet:
    'non ancora disponibile. Clicca sul bottone in alto a destra per aggiungerne uno.',
  Users: 'Utenti',
  member: 'membro del gruppo | membri del gruppo',
  Member: 'Membro del gruppo | Membri del gruppo',
  Invite: 'Invita',
  Invited: 'Invitato',
  Invitation: 'Invito | Inviti',
  Admin: 'Amministratore',
  Creator: 'Proprietario del gruppo',
  Group: 'Gruppo di collaborazione | Gruppi di collaborazione',
  group: 'gruppo di collaborazione | gruppi di collaborazione',
  group_short: 'gruppo | gruppi',
  to_share:
    'per condividere con questo gruppo. clicca 1 = i membri del gruppo possono solo vedere, clicca 2 = i membri del gruppo possono modificare',
  Invitation_accepted: 'Invito accettato',
  Accept: 'Accetta',
  My_shared: 'Le mie condivisioni',
  invitee_name: "Nome dell'invitato",
  Remove_group:
    'Sei sicuro di voler completamente rimuovere questo gruppo per tutti i suoi membri?',
  Detach_from_group: 'Rimuovi me ed i miei alveari da questo gruppo',
  my_hive: 'Il mio alveare',
  created: 'creato',
  group_detached: 'Gruppo abbandonato con successo',
  group_activated: 'Invito al gruppo accettato',
  group_explanation_1:
    '1. Crea un nuovo gruppo di collaborazione con un nome chiaro, e una (opzionale) descrizione',
  group_explanation_2:
    '2. Invita altri utenti Beep tramite il loro indirizzo e-mail Beep',
  group_explanation_3:
    '3. Condividi specifici alveari per essere visti da altri o consentire loro di collaborare',
  Filter_and_sort_on: 'Ordina e filtra:',

  /* New translations v2.2.0 */
  roofed: "L'apiario ha un tetto?",
  info: 'Info',

  research: 'Ricerca',
  research_explanation:
    'Questa schermata contiene le rierche disponibili per cui puoi decidere di condividere i dati. Quando consenti di la condivisione dei dati del tuo account BEEP, stai contribuendo alla ricerca per migliorare la salute delle api. Prima di acconsentire, prego rileggi la descrizione della ricerca tramite il link sottostante e chiedi informazioni aggiuntive se necessario. Puoi revocare il tuo consenso in ogni momento, e nessun ulteriore dato sarà più condiviso a partire da quel momento. I dati che tu hai già condiviso durante il periodo di consenso, resteranno disponibili alla ricerca. In caso di dubbi, contatta la persona di riferimento.',
  research_info:
    'Condividendo i tuoi dati con i ricercatori, li aiuterai ad analizzare più dati ed ottenere conclusioni migliori.',
  start_date: 'Data di inizio',
  end_date: 'Data di fine',
  purpose: 'Scopo della ricerca',
  institution: 'Istituto di ricerca',
  type_of_data_used: 'Utilizzo dei dati',
  link: 'Link',
  Consent: 'Consenti',
  history: 'storia',
  Current_consent: 'Consenso attuale',
  consent_yes: 'Acconsento a condividere i miei dati',
  consent_no: 'NON acconsento a condividere i miei dati',
  my_beep_data: 'I miei dati BEEP',
  Consent_can_only_be_set: 'Il consenso può essere adatto solo a',
  earlier: 'una precedente',
  later: 'una successiva',

  new_apiary_explanation: 'Crea un nuovo apiario in 4 passaggi',
  start_here: 'Clicca qui per iniziare',
  optional: 'opzionale',
  dimensions: 'dimansioni',
  details: 'dettagli',
  configuration: 'configurazione',
  adjustments: 'adattamenti',
  changes_queen_color: 'modifica i cambi di colore',

  Brood_box_and_frame: 'Camera di covata e telai',
  Hive_order: "Ordina gli alveari nell'apiario",
  bb_width_cm: 'Larghezza camera di covata (cm)',
  bb_height_cm: 'Altezza camera di covata (cm)',
  bb_depth_cm: 'Profondità camera di covata (cm)',
  fr_width_cm: 'Larghezza telaio (cm)',
  fr_height_cm: 'Altezza telatio (cm)',
  queen_line: 'linea',
  queen_tree: 'genealogia',
  queen_description: 'note',
  Hive_short: 'Alveare | Alveari',

  Image: 'Immagine | Immagini',
  Size: 'Dimensione',
  preview: 'anteprima',

  Sensor_definitions: 'Definizioni del sensore',
  Inside: 'Misure interne',
  Offset: 'Compensazione',
  Multiplier: 'Moltiplicatore',
  Input: 'Ingresso',
  Output: 'Uscita',
  Last: 'Ultimo',

  Export_sensor_data:
    "Esporta tutti i dati per ogni dispositivo nella massima risoluzione possibile in formato .csv che potrai aprire in Excel, o SPSS. NB: La data e l'orario nella colonna 'time' è mostrato nel fuso di Greenwich (GMT), formattato nello standard RFC 3339.",
  CSV_export_separator: 'separatore di colonne per i dati CSV',
  Selected_date: 'Seleziona un intervallo di tempo',
  Sensor_measurements: 'Misurazioni del sensore',
  too_much_data:
    "Troppi dati da processare, prego seleziona un minor numero di misurazioni del sensore, o riduci l'intervallo di tempo.",

  beep_base_explanation:
    "Se hai un dispositivo BEEP (mostrato nella foto sopra), per favore usa la App nativa (iOS e Android) per l'installazione e per impostare la comunicazione con la App. Se ancora non hai un dispositivo BEEP, premi sul menu l'opzione  'sitoweb BEEP' per aggiornamenti su come ottenerne uno. Se hai un tuo dispositivo di rilevazione dati e vuoi importare i dati nella App BEEP, mandaci un messaggio di richiesta per unirti alla nostra communuty su Slack, e potrai avere accesso alle descrizioni API.",

  sample_code_hive:
    'Prima seleziona un alveare, per generare un codice campione univoco',
  sample_code_generate: 'Genera un codice campione univoco',
  sample_code_delete: 'Cancella codice campione univoco',

  measurement_interval: 'intervallo',
  from_weather_service: 'dal servizio meteo',

  /* New translations v3 */
  Collaborate: 'Collaborare',
  click_hives_to_filter: 'Click hives to filter',
  for: 'for',
  last_visit: 'Last visit',
  apiary_details: 'Apiary details',
  group_details: 'Group details',
  diary: 'Diary',
  data: 'Data',
  photo: 'photo | photos',
  add_checklist: 'Add checklist',
  add_hive: 'Add hive',
  delete_apiary: 'Delete apiary',
  edit_apiary: 'Edit apiary',
  new_apiary: 'New apiary',
  delete_group: 'Delete group',
  edit_group: 'Edit group',
  new_group: 'New group',
  verification_code: 'verification code',
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
  no_inspections: 'Add first inspection',
  no_results: 'No results',
  Hive_brood_layer: 'Strato di covata | Strati di covata',
  Hive_honey_layer: 'Strato di miele | Strati di miele',
  Hive_queen_excluder_layer: 'Queen excluder | Queen excluders',
  Hive_feeding_box_layer: 'Feeding box | Feeding boxes',
  overrides_layer_colors: 'overrides layer colors',
  drag_layers: 'Drag layers to configure hive',
  page: 'page | pages',
  not_found: 'not found',
  sorry: 'Sorry',
  delete_layer: 'Delete layer',
  not_saved_error: 'Data could not be saved',
  something_wrong: 'Something went wrong',
  not_editable: 'not editable',
  unsaved_changes: 'Unsaved changes',
  save_changes:
    'Are you sure you want to leave this page? Any unsaved changes will be lost.',
  no_apiaries_yet: "You don't have any apiaries yet",
  need_help: 'Need help?',
  Apiary_color: 'Apiary color',
  Set_notification_date: 'Set notification date',
  remove_image: 'Remove image',
  Total_colony_size: 'Total colony size',
  bee: 'bee | bees',
  with_bees: 'with bees',
  change_checklist_confirm:
    'Are you sure you want to select a different checklist? Values of already filled in fields will be kept.',
  view: 'View',
  share: 'Share',
  edit_details: 'Edit details',
  remove_queen: 'Remove queen',
  remove_group_short: 'Remove collaboration group',
  device: 'Device | Devices',
  click_date_to_edit: 'Click date to edit.',
  accept_policy_1: 'I accept the BEEP ',
  accept_policy_2: ', that are compatible with the new European privacy law',
  terms_of_use: 'terms of service',
  invalid_password:
    'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number and one special character (\\]{}()?\\-"!@#%&/\\,><\':;|_~`)',
  sensor_definition: 'sensor definition | sensor definitions',
  measurement: 'misurazione | misurazioni',
  remove_device: 'Remove device',
  last_message_received: 'Last message received',
  transmission_ratio: 'Transmission ratio',
  period: 'Period',
  download: 'Download',
  different_end_start: 'End and start date must differ',
  new_email_verification_sent:
    'A message with a verification link has been sent to your new e-mail address. Click the link in the e-mail to confirm your new e-mail address and log in.',
  sensordef_info:
    "A sensor definition is intended to convert a sensor value from an incoming 'raw' sensor value into a value according to a physical quantity and unit (e.g. w_v = 1098273 => weight_kg = 62,400 kg) or to calibrate a sensor (e.g. t_0 = 15.3 ° C => t_0 = 15.8 ° C). This can be done by setting an 'offset' and a 'multiplier'. The input and output value remains the same if offset '0' and multiplier '1' is set. The BEEP base app (from the App Store) will provide you with the right sensor definitions at the initial setup of your BEEP base.",
  or: 'or',
  select_all_hives: 'Select all hives',
  select_all_editable_hives: 'Selecteer alle aanpasbare bijenkasten',
  alert: 'Alert | Alerts',
}

export default translations
