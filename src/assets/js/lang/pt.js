/*
 * BEEP - Translations
 * Author: Pim van Gennip (pim@iconize.nl)
 *
 */
const translations = {
  /* Date picker */
  monthsFull: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthsShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  weekdaysFull: [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ],
  weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  Today: 'Hoje',
  Clear: 'Limpar',
  Close: 'Fechar',
  firstDay: 1,
  format: 'dddd d mmmm yyyy',

  /* main */
  Website: 'Site da internet',
  Feedback: 'Comentários',
  Feedback_mail_header: 'Comentários da aplicação BEEP',
  Feedback_mail_body:
    'Cara fundação BEEP,%0D%0A%0D%0ADeixo abaixo os meus comentários sobre a aplicação BEEP.%0D%0A%0D%0AEncontrei isto:%0D%0A%0D%0AMesmo antes de isto acontecer, fiz o seguinte:%0D%0A%0D%0AO monitor estava assim (por favor inclua uma captura de ecrã):%0D%0A%0D%0A%0D%0A%0D%0A',
  Diagnostic_info:
    'Informação de diagnóstico (no caso de um bug/problema):%0D%0A',
  back: 'Para trás',
  menu: 'Menu',
  lighting: 'Iluminação',
  camera: 'Câmera',
  weather: 'Tempo',
  sensors: 'Sensores',
  sensors_na:
    'Os sensores BEEP sensors para monitorizar remotamente a sua colmeia estarão brevemente disponíveis...',

  no_valid_authentication: 'Nenhuns dados de autenticação recebidos',
  succesfully_saved: 'Salvo com sucesso',

  switch_language: 'Trocar linguagem',
  Delete: 'Apagar',
  Search: 'Procurar...',

  /* user error messages */
  User: 'Utilizador',
  User_data: 'Dados de utilizador',
  user_data: 'dados de utilizador ',
  updated: 'atualizado',
  delete_complete_account:
    'Tem a certeza que quer apagar a sua conta por completo, incluindo todos os apiários, colmeias e inspeções? Esta ação é irrecuperável.',
  username_is_required: 'Por favor introduza o seu nome de usuário',
  username_already_exists: 'Nome de usuário já existe',
  password_is_required: 'Por favor introduza uma senha',
  email_is_required: 'Por favor introduza um email válido',
  email_already_exists: 'Este email já está a ser utilizado',
  policy_accepted_is_required:
    'Precisa de aceitar os termos de serviço para se poder registar',

  already_registered: 'Já estou registado',
  invalid_user: 'Usuário desconhecido ou senha errada',
  no_password_match: 'As senhas não coincidem',
  invalid_token: 'Código inválido',

  no_valid_email: 'Email inválido',

  empty_fields: 'Por favor preencha todos os campos',
  match_passwords: 'As passwords não coincidem',

  succesfully_registered: 'Foi registado com sucesso.',
  authentication_failed: 'Erro de autenticação',

  no_valid_input_received:
    'Os dados não puderam ser salvos, nenhuma entrada válida recebida.',

  remove_all_settings: 'Remover todas as configurações',
  remove_apiary: 'Remover apiário',
  remove_hive: 'Remover colmeia',
  remove_inspection: 'Remover inspeção',

  Error: 'Erro',
  Warning: 'Aviso',
  first_remove_hives:
    'Atenção: ainda há colmeias neste apiário. Pode salvar colmeias específicas (e suas inspeções) movendo-as primeiro para outro apiário. Se continuar com a eliminação, excluirá TODAS as colmeias e inspeções presentes neste local.',

  Date: 'Data',
  ok: 'Ok',
  previous: 'Anterior',
  prev: 'anterior',
  next: 'Próximo',
  add: 'Adicionar',
  create_new: 'Criar novo',
  New: 'Novo',

  warning: 'Aviso',

  apply: 'Aplicar',
  Cancel: 'Cancelar',
  automatic: 'Automático',
  manually: 'Manual',
  on: 'On',
  off: 'Off',

  /* login */
  login_title: 'Login',
  login: 'Login',
  back_to_login: 'Regressar ao login',
  forgot_password: 'Esqueceu-se da sua senha?',

  username: 'Nome de usuário',
  password: 'Password',
  confirm_password: 'Confirmar senha',
  email: 'Email',
  token: 'Código',

  create_login_question: 'Ainda não tem conta? Registe-se como novo usuário',
  create_login: 'Registo como novo usuário',
  create_login_summary: 'Criar uma nova conta de usuário',
  save: 'Salvar',
  save_and_return: 'Salvar e regressar',

  logout: 'Sair',
  logout_title: 'Sair como ',
  logout_now: 'Quer mesmo sair agora?',
  member_since: 'A usar o BEEP desde',

  /* password recovery */
  password_recovery_title: ' Esqueceu-se da sua senha?',
  password_recovery_remembered: 'Oh, lembrei-me agora da minha senha!',
  password_recovery_user: 'Informação de usuário',
  password_recovery_send_mail: 'Enviar código de verificação',
  password_recovery_code_not_received:
    'Código de verificação não recebido no espaço de 5 minutos? ',
  password_recovery_enter_code:
    'Já tem um código de verificação? Coloque-o aqui',
  password_recovery_reset_title: 'Insira nova senha',
  password_recovery_reset_password: 'Alterar senha',
  password_recovery_reminder_success:
    ' Foi enviado um email. Clique no link do seu email para redefinir sua senha para esta conta.',
  password_recovery_reminder_summary:
    ' Insira o seu endereço de email. Receberá um email com um link para alterar sua senha na próxima etapa.',

  password_recovery_reset_summary:
    'Use o código que recebeu para definir uma nova senha para a sua conta',
  password_recovery_reset_success:
    'A sua senha foi alterada com sucesso e está logado.',

  new_password: 'Nova senha',
  confirm_new_password: 'Confirmar nova senha',

  go_to_dashboard: 'Ir para o meu painel',

  /* overview */
  overview_title: 'Visão global',
  overview: 'Visão global',
  color: 'Cor',
  state: 'On/off',
  connection_state: 'Estado da conexão',

  /* hives */
  locations_title: 'BEEP',
  hives_title: 'BEEP',
  Hive: 'Colmeia | Colmeias',
  hive: 'colmeia | colmeias',
  Location: 'Apiário | Apiários',
  location: 'apiário | apiários',
  Name: 'Nome',
  name: 'nome',
  Type: 'Tipo',
  type: 'tipo',
  Layer: 'Alça',
  layer: 'alça',
  brood: 'Criação',
  honey: 'Mel',
  inspect: 'Inspecionar',
  inspection: 'inspeção | inspeções',
  Inspection: 'Inspeção | Inspeções',
  New_inspection: 'Nova inspeção',
  Edit_inspection: 'Editar inspeção',
  Actions: 'Ações',
  Conditions: 'Condições (inspecionada)',
  edit: 'Edição',
  Hive_layer_amount: 'Quantidade de alças',
  Bee_race: 'Raça de abelha',
  Birth_date: 'Data de nascimento',
  Color: 'Cor',
  Queen_colored: 'Rainha com cor',
  Queen_clipped: 'Rainha com asa cortada',
  Queen_fertilized: 'Rainha fertilizada',
  Age: 'Idade',
  years_old: 'anos',

  /* Hive check items */
  Date_of_inspection: 'Data de inspeção',
  action: 'Ação',
  reminder: 'Lembrete',
  remind_date: 'Data de notificação',

  overall: 'No geral',
  positive_impression: 'Impressão total',
  needs_attention: 'Precisa de atenção',
  notes: 'Notas',
  notes_for_next_inspection:
    'Nota curta para a próxima inspecção (visível na visão global)',
  Not_implemented_yet: ' Este item ainda não foi implementado',
  save_input_first: ' Deseja salvar a sua entrada primeiro?',

  /* dashboard */
  dashboard_title: 'Painel de controlo',
  dashboard: 'Painel de controlo',
  measurementsError:
    'Não é possível carregar medições, verificar ligação à internet',
  last_measurement: 'Última medição',
  at: 'em',
  measurement_system: 'Sistema de medição BEEP',
  no_data: 'Sem dados disponíveis',
  no_chart_data: 'Nenhum dado do gráfico para o período selecionado',

  /* settings */
  General: 'Geral',
  Place: 'Localização',
  Country: 'País',
  City: 'Cidade',
  Address: 'Morada',
  Lattitude: 'Latitude',
  Longitude: 'Longitude',
  Street: 'Rua',
  Number: 'Número',
  Postal_code: 'Código Postal',
  Description: 'Descrição',
  Hive_settings: 'Configurações da colmeia',
  Hive_amount: 'Quantidade de colmeias nesta localização',
  Hive_prefix: 'Prefixo do nome da colmeia (antes do número)',
  Hive_number_offset: 'Número de colmeias inciais',
  Hive_type: 'Tipo de colmeias',
  Hive_layers: 'Alças da colmeia',
  Hive_frames: 'Quadros por alça',
  Hive_color: 'Cor da colmeia',
  Queen: 'Rainha',
  queen: 'rainha',

  settings_title: 'Definições',
  settings_description: 'Definições dos sensores',
  Settings: 'Definições',
  settings: 'definições',

  sensors_title: 'Definições do sensor',
  sensors_description: 'Estado dos sensores e registo',
  //   sensors: 'Sensores',
  sensor: 'Device',

  Select: 'Selecionar',
  Not_selected: 'Não selecionado',
  Poor: 'Pobre',
  Fair: 'Razoável',
  Average: 'Médio',
  Good: 'Bom',
  Excellent: 'Excelente',
  Low: 'Baixo',
  Medium: 'Médio',
  High: 'Alto',
  Extreme: 'Extremo',

  /* colors */
  select_color: 'Selecionar uma cor',
  advanced: 'Avançado',

  /* sensors */
  Select_sensor: 'Selecionar um sensor',
  temperature: 'Temperatura',
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
  light: 'Luz solar',
  l: 'Luz solar',
  water: 'Água',
  w: 'Água',
  humidity: 'Humidade',
  h: 'Humidade',
  air_pressure: 'Pressão atmosférica',
  p: 'Pressão atmosférica',
  weight: 'Peso',
  w_v: 'Sensor de peso valor de todos os sensores',
  w_fl: 'Sensor de peso valor frente esquerda',
  w_fr: 'Sensor de peso valor frente direita',
  w_bl: 'Sensor de peso valor trás esquerda',
  w_br: 'Sensor de peso valor trás direita',
  weight_kg: 'Peso',
  weight_kg_corrected: 'Peso (corr)',
  weight_combined_kg: 'Peso combi',
  bat_volt: 'Bateria',
  bv: 'Bateria',
  sound_fanning_4days: 'Ventilação 4d abelhas',
  s_fan_4: 'Ventilação 4d abelhas',
  sound_fanning_6days: 'Ventilação 6d abelhas',
  s_fan_6: 'Ventilação 6d abelhas',
  sound_fanning_9days: 'Ventilação 9d abelhas',
  s_fan_9: 'Ventilação 9d abelhas',
  sound_flying_adult: 'Abelhas em voo',
  s_fly_a: 'Abelhas em voo',
  sound_total: 'Som total',
  s_tot: 'Som total',
  s_spl: 'Som total',
  bee_count_in: 'Contagem de abelhas dentro',
  bc_i: 'Contagem de abelhas dentro',
  bee_count_out: 'Contagem de abelhas fora',
  bc_o: 'Contagem de abelhas fora',
  t_i: 'Temp. dentro',
  rssi: 'Força do sinal',
  snr: 'Ruido do sinal',
  lat: 'Latitude',
  lon: 'Longitude',
  Sound_measurements: 'Medições de som',
  Sensor_info: 'Informação do sensor',
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
  hour: 'Hora',
  day: 'Dia',
  week: 'Semana',
  month: 'Mês',
  year: 'Ano',

  /* settings */
  could_not_load_settings: 'Não foi possível carregar as configurações',
  offline: 'Sem coneção',
  remote: 'Remota',
  connected: 'Direta',

  yes: 'Sim',
  no: 'Não',

  footer_text: 'Apicultura em código aberto',
  beep_foundation: 'A fundação BEEP',

  Checklist: 'Lista de verificação | Listas de verificação',
  checklist: 'lista de verificação | listas de verificação',
  Checklist_items: 'Itens da lista de verificação',
  edit_hive_checklist:
    'Marque/desmarque as caixas na lista abaixo para adicionar/remover itens da sua lista de verificação da colmeia. Também pode desdobrar/dobrar e arrastar/soltar os itens para reordená-los ao seu próprio estilo.',

  /* user */
  Data_export: 'Exportação de dados',
  Export_your_data:
    'Exportar todos os dados que estão na sua conta BEEP e enviar um email contendo os dados como um ficheiro Excel. O ficheiro Excel possui seções diferentes que contêm os seus dados pessoais, das colmeias, de localização e de inspeção.',

  Terms_of_use: 'Termos de serviço',
  accept_policy:
    'Aceito os termos de serviço do BEEP, compatíveis com a nova lei de privacidade europeia',
  policy_url: 'https://beep.nl/terms-of-service',
  policy_version: 'beep_terms_2018_05_25_avg_v1',
  approve_policy: 'Você ainda não cumpriu com os últimos termos de serviço.',

  /* weight calibration settings */
  calibrate_weight: 'Calibrar peso',
  calibrate_explanation:
    'Defina o peso dos sensores para 0 subtraindo o valor atual da medição.',
  set_as_zero_value: 'D efina esses valores como 0',
  set_weight_factor: 'Definir fator de peso',
  own_weight_kg: 'Qual é o seu próprio peso em kg?',
  start_calibration:
    'Agora, pise na balança e pressione o botão abaixo para definir o fator de peso. Distribua seu peso igualmente.',
  currently_there_is: 'Há um peso de',
  nothing: 'nada',
  on_the_scale: 'Na balança',
  calibration_started:
    'A calibração iniciou... Aguarde que a próxima medição entre em vigor.',
  calibration_ended: 'Calibração bem sucedida!',

  /* General items */
  server_down:
    'A app está indisponível devido a trabalhos de manutenção. Tente novamente mais tarde',
  add_to_calendar: 'Adicionar ao calendário',
  sort_on: 'Classificar em',
  Whats_new: 'Novo!',
  Manual: 'Manual',

  Site_title: 'BEEP | Monitorização de abelhas',

  could_not_create_user:
    'O usuário não pode ser criado neste momento. Desculpe pelo transtorno, tente novamente mais tarde.',
  email_verified: 'O seu endereço de email foi verificado.',
  email_not_verified: 'O seu endereço de email ainda não foi verificado.',
  email_new_verification:
    ' Clique neste link para enviar um novo email de verificação.',
  email_verification_sent:
    'Uma mensagem com um link de verificação foi enviada para o seu endereço de email. Clique no link do email para ativar sua conta e fazer login.',

  not_filled: 'é obrigatório, mas não está preenchido',
  cannot_deselect:
    'Não foi possível remover este item, pois contém um item obrigatório',
  Undelete: 'Não apagar',
  the_field: 'O',
  is_required: 'é obrigatório',

  No_groups: 'Nenhum grupo disponível',
  not_available_yet: 'ainda não disponível. Por favor, crie o primeiro aqui.',
  Users: 'Usuários',
  member: 'membro do grupo | membros do grupo',
  Member: 'Membro do grupo | Membros do grupo',
  Invite: 'Convidar',
  Invited: 'Convidado',
  Invitation: 'Convite | Convites',
  Admin: 'Administrador',
  Creator: 'Proprietário do grupo',
  Collaborate: 'Colaborar',
  Group: 'Grupo de colaboração | Grupos de colaboração',
  group: 'grupo de colaboração | grupos de colaboração',
  group_short: 'grupo | grupos',
  to_share:
    'para partilhar com este grupo. 1 clique = os membros do grupo apenas podem visualizar, 2 cliques = os membros do grupo podem editar',
  Invitation_accepted: 'Convite aceite',
  Accept: 'Aceitar',
  My_shared: 'Minha partilha',
  invitee_name: 'Nome do convidado',
  Remove_group:
    'Tem a certeza de que deseja remover completamente este grupo de partilha para todos os seus membros ',
  Detach_from_group: 'Remova-me e às minhas colmeias deste grupo',
  my_hive: 'Minha colmeia',
  created: 'criada',
  group_detached: 'Deixou o grupo com sucesso',
  group_activated: 'Convite para o grupo aceite',
  group_explanation_1:
    '1. Crie um novo grupo de cooperação com um título claro e uma descrição opcional',
  group_explanation_2:
    '2. Convide outros usuários do BEEP através do seu endereço de email do BEEP',
  group_explanation_3:
    '3. Compartilhar colmeias específicas para serem vistas por outras pessoas, ou para cooperar',
  Filter_and_sort_on: 'Filtrar e classificar:',

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
  Hive_short: 'Hive | Hives',

  Image: 'Image | Images',
  Size: 'Size',
  preview: 'preview',

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
    "If you have a BEEP base (shown in the picture above), please use the BEEP base app (iOS and Android) to set-up the communication with this app. If you don't have a BEEP base yet, please click on the menu item 'BEEP website' for updates on how to get a BEEP base. I you have your own measurement device and would like to see the data in the BEEP app, please send us a message to ask for joining our Slack community and you can get access to the API description.",

  sample_code_hive: 'First select a hive, to generate a unique sample code',
  sample_code_generate: 'Generate unique sample code',
  sample_code_delete: 'Delete unique sample code',

  measurement_interval: 'interval',
  from_weather_service: 'from weather service',

  /* New translations v3 */
  click_hives_to_filter: 'Clique nas seções para filtrar',
  for: 'para',
  last_visit: 'Ultima visita',
  apiary_details: 'Detalhes do apiário',
  group_details: 'Detalhes do grupo',
  diary: 'Diário',
  data: 'Dados',
  photo: 'foto | fotos',
  add_checklist: 'Adicionar lista de verificação',
  add_hive: 'Adicionar colmeia',
  delete_apiary: 'Excluir apiário',
  edit_apiary: 'Editar apiário',
  new_apiary: 'Novo apiário',
  delete_group: 'Excluir grupo',
  edit_group: 'Editar grupo',
  new_group: 'Novo grupo',
  verification_code: 'código de verificação',

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
  no_results: 'No results',
  Hive_brood_layer: 'Alça de criação | Alças de criação',
  Hive_honey_layer: 'Alça de mel | Alças de mel',
  Hive_queen_excluder_layer: 'Queen excluder | Queen excluders',
  Hive_feeding_box_layer: 'Feeding box | Feeding boxes',
  overrides_layer_colors: 'overrides layer colors',
  drag_layers: 'Drag layers to configure hive',
  page: 'page | pages',
  not_found: 'not found',
  sorry: 'Sorry',
  delete_layer: 'Delete layer',
  not_saved_error: 'Os dados não puderam ser salvos',
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
  accept_policy_1: 'Aceito os ',
  accept_policy_2:
    ' do BEEP, compatíveis com a nova lei de privacidade europeia',
  terms_of_use: 'termos de serviço',
  invalid_password:
    'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number and one special character (\\]{}()?\\-"!@#%&/\\,><\':;|_~`)',
  sensor_definition: 'sensor definition | sensor definitions',
  measurement: 'medição | medições',
  remove_device: 'Remove device',
  last_message_received: 'Last message received',
  transmission_ratio: 'Transmission ratio',
  period: 'Período',
  download: 'Download',
  different_end_start: 'End and start date must differ',
  later_end_start: 'Start date must be earlier than end date',
  new_email_verification_sent:
    'A message with a verification link has been sent to your new e-mail address. Click the link in the e-mail to confirm your new e-mail address and log in.',
  sensordef_info:
    "A sensor definition is intended to convert a sensor value from an incoming 'raw' sensor value into a value according to a physical quantity and unit (e.g. w_v = 1098273 => weight_kg = 62,400 kg) or to calibrate a sensor (e.g. t_0 = 15.3 ° C => t_0 = 15.8 ° C). This can be done by setting an 'offset' and a 'multiplier'. The input and output value remains the same if offset '0' and multiplier '1' is set. The BEEP base app (from the App Store) will provide you with the right sensor definitions at the initial setup of your BEEP base.",
  or: 'or',
  select_all_hives: 'Select all hives',
  select_all_editable_hives: 'Selecteer alle aanpasbare bijenkasten',
  Alert: 'Alert | Alerts',
  alert: 'alert | alerts',
  remove_alert: 'Remove alert',
  alerts_enabled: 'Alerts enabled',
  alerts_disabled: 'Alerts disabled',
  edit_checklist_confirm:
    'Are you sure you want to edit the checklist? Any unsaved changes to your inspection will be lost.',
  edit_checklist_confirm_deselectedhives:
    'Are you sure you want to edit the checklist? Any unsaved changes to your inspection and your hive selection will be lost.',
  user_not_edited:
    'User data has not been edited. Possibly the user data is identical to the user data already in the database, or one or more fields are not correctly filled in. Please check your data and try again.',
  user_not_deleted: 'Something went wrong, user has not been deleted.',
  research_consent: 'Research consent',
  checklist_types: 'Personal, shared, research',
  edit_hive_checklist_no_touch:
    'Check/uncheck the boxes in the list below to add/remove items from your hive checklist. You can also unfold/fold and drag/drop the items to re-order them to your own style (N.B. this is not possible on a touchscreen device).',
  edit_hive_checklist_touch:
    'Check/uncheck the boxes in the list below to add/remove items from your hive checklist. Changing the order of items is only possible on a desktop computer.',
  input_not_possible_for_bulkinspection:
    'This item is not available when multiple hives are selected for an inspection, as it can only be filled in per individual hive. It is possible to fill in this item for a single hive at a later time, by editing the inspection for that hive.',
  save_bulkinspection_confirm:
    'Are you sure that you want to save this inspection for multiple hives at the same time?',
  deleted_but_not_saved_devices_warning:
    "N.B.: devices will only be removed after clicking the 'Save Devices' button in the top right corner.",
  no_alerts: 'No new alerts',
  alertrule: 'alert rule | alert rules',
  alertrule_pagetitle: 'Alert settings',
  Measurement: 'Measurement | Measurements',
  Calculation: 'Calculation',
  calculation: 'calculation',
  Calculation_minutes: 'Calculate per x number of minutes',
  Alert_on_occurences: 'When would you like to receive this alert?',
  Alert_on_occurences_hint:
    'Directly, or only after it has occurred an x number of times?',
  Direct: 'Directly',
  After: 'After ',
  times: ' times',
  Comparator: 'Comparator',
  comparator: 'comparator',
  Comparison: 'Comparison',
  comparison: 'comparison',
  Threshold_value: 'Threshold value',
  Minimum: 'Minimum',
  Maximum: 'Maximum',
  Derivative: 'Derivative (increase or decrease)',
  Count: 'Count',
  Value: 'Value',
  Difference: 'Difference',
  Absolute_value: 'Absolute value',
  Absolute_value_of_dif: 'Absolute value of the difference',
  Exclude_months: 'Deactivate this alert during the following months:',
  Exclude_hours: 'Deactivate this alert during the following hours:',
  Exclude_hives: 'Deactivate this alert for the following hives:',
  Exclude_hives_details:
    'N.B. By default, this alert will be executed for all hives with a measurement device.',
  months: 'months',
  hours: 'hours',
  delete_alertrule: 'Delete alert rule',
  Active: 'Active',
  Alert_via_email: 'Alert via email',
  Webhook_url: 'Webhook url',
  this_field: 'This field',
  alertrule_default: 'Default alert rule | Default alert rules',
  copy: 'Copy',
  Home: 'Home',
  Select_default_alertrule: 'Copy default alert rule',
  alertrule_main_sentence:
    'I would like to receive an alert if the [calculation] [comparison] of the [measurement_quantity] [comparator] [threshold_value][measurement_unit]. This calculation will be executed every [calculation_minutes] hours, ',
  alertrule_occurences_direct_sentence:
    'and I would like to receive the alert directly. ',
  alertrule_occurences_indirect_sentence:
    ' but I would like to receive the alert only if it occurs [alert_on_occurences] times. ',
  alertrule_exclude_months_sentence:
    'This alert will be deactivated during the following months: [exclude_months]. ',
  alertrule_exclude_hours_sentence:
    'This alert will be deactivated during the following hours: [exclude_hours]. ',
  alertrule_exclude_hives_sentence:
    'This alert will be deactivated for the following hives: [exclude_hive_ids].',
  min: 'minimum',
  max: 'maximum',
  ave: 'average',
  der: 'derivative',
  cnt: 'count',
  equal_to: 'is equal to',
  less_than: 'is less than',
  greater_than: 'is greater than',
  less_than_or_equal: 'is less than or equal to',
  greater_than_or_equal: 'is greater than or equal to',
  alertrule_not_active:
    "This alert has been deactivated. You can activate it by checking the 'Active' box and saving this alert rule.",
  export_email_sent: 'Email with Excel file has been sent.',
  Updated_at: 'Updated at',
  Not_yet_saved: 'Not yet saved',
  add_own_device: 'Add own device',
  devices_info_text:
    'Please note: do you own a BEEP base? Use the BEEP base app to add your device. It will then automatically appear in the list below.',
  devices_url_text: 'Here you can find more information on the BEEP base app.',
  alert_explanation_1:
    'If you own a BEEP base or another device you can set alerts, such that you will receive an alert when the measurement data meets certain requirements. For example, a sudden drop in weight because of swarming. Alerts will be shown in this app, you can choose to receive them via email as well.',
  alert_explanation_2:
    'To get you started there are a few default alert rules you can use (and adapt to your own needs). In addition, you can create your own alert rules.',
  alertrules_url_text:
    "Go to 'Alert settings' to create your first alert rule.",
  Apiary_management: 'Apiary management',
  Move: 'Move',
  Current_apiary: 'Current apiary',
  sensor_key: 'Device unique identifier',
  disabled_settings: 'Manually editing these settings is disabled.',
  Address_placeholder: 'Number, Street name, City',
}

export default translations
