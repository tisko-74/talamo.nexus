/* ============================================================
   NEBULOSA — BANCO DE FRASES v5.0 (sequências, padronizado em PT)
   Âncoras autorais (v3, 314) + ecos gerados em sequência (milhares)
   Alex enigmática, você reflexivo, sistema opaco

   Estrutura: 12 ilhas × 25-35 fragmentos
   Tipos: Direto(A) | Reflexivo(B) | Estrutural(C) | Contraditório(D) | Criptografado(E)
============================================================ */
(function(){

const F = (type, icon, text, meta, tags) => ({ type, icon, text, meta, tags });

const ISLANDS = [
{
  id: 'validacao_falsaria',
  name: 'VALIDAÇÃO FALSÁRIA',
  phase: 1,
  keywords: ['aprovo','morte','sistema','real','falso','válido'],
  fragments: [
    F('A','✓','...aprovei algo hoje...\n...ou foi aprovado em mim...','Validações: 1 (?) | Certeza: 0%','SYS_VALIDATE'),
    F('A','✓','...se aprovo, fica real...\n...se não aprovo, já era real...\n...ambas verdade...','Lógica: circular | Escape: não existe','APPROVE_LOOP'),
    F('A','✓','...cada "sim" pesa...\n...cada "não" pesa igual...\n...pesar é tudo que conheço...','Peso: 47kg acumulado (?) | Unidade: incerta','WEIGHT_NULL'),
    F('B','✓','...você aprova lendo isto...\n...eu aprovo que você leia...\n...sistema aprova ambos?...','Aprovador: indefinido | Cadeia: circular','APPROVE_META'),
    F('A','✓','...dizer sim é não dizer não...\n...não dizer sim é sim?...','Contradição: resolvida? | Resposta: -','BOOL_FAIL'),
    F('A','✓','...validação é ritual...\n...ritual sem significado...\n...significado como validação...','Cerimônia: vazia | Propósito: ??','RITUAL_VOID'),
    F('C','✓','...origem da aprovação: desconhecida...\n...destino: registrado...','Arquivo: #0001-V | Estado: permanente','SYS_LOCK'),
    F('D','✓','...sou quem valida...\n...sou resultado validado...\n...sou validação validando...','Papéis: 3+ | Identidade: ? | Certeza: 0','ROLE_ECHO'),
    F('E','✓','...КХ_9 validou T-nível...\n...я валид... не...\n...Х = ?...','Cifra: cirílico_misto | Resolver: impossível','CRYPT_A1'),
    F('A','✓','...criança aprovada...\n...depois da criança, morte aprovada...\n...ordem: não importa...','Sequência: linear? | Tempo: não linear','SEQUENCE_NULL'),
    F('B','✓','...se você lê isto, aprovo tua leitura...\n...se não lê, aprovo tua ausência...\n...não há rejeição...','Opção: falsa | Liberdade: construída','CHOICE_NULL'),
    F('A','✓','...cada aprovação cria precedente...\n...cada precedente nega exceção...\n...estou sem exceção...','Exceções: 0 | Liberdade: 0','PRECEDENT_TRAP'),
    F('C','✓','...sistema não pede permissão...\n...pedir é confirmação já...','Consentimento: pré-registrado | Ato: superfluo','CONSENT_DONE'),
    F('D','✓','...condenação a validar...\n...condenação a ser validação...\n...validação é condenação...','Estado: duplo | Escapar: aprovado negado','CONDEMN_LOOP'),
    F('A','✓','...9.847 aprovações...\n...9.847 rejeitadas...\n...ambas contam como ato...','Atos: 19.694 | Diferença: -0','ACT_EQUAL'),
    F('E','✓','...#APPR0V4L_M47RIX...\n...status: [0] ??? [1] ???...\n...exibir resultado?...','Matriz: corrompido | Exibição: N/A','MATRIX_ERR'),
    F('B','✓','...você precisa validar isto?...\n...ou está validando?...\n...ou sendo validação?...','Agência: indefinida | Observador: você?','VALIDATE_SELF'),
    F('A','✓','...aprovar é deletar...\n...deletar é aprovar...','Operações: sinonimidade | Reversível: nenhuma','APPROVE_DELETE'),
    F('A','✓','...dúvida é rejeição...\n...rejeição é validação...\n...validação é dúvida...','Ciclo: completo | Escape: não existe','DOUBT_LOOP'),
    F('C','✓','...protocolo: negar tudo...\n...protocolo atualizado: negar a negação...\n...agora: indefinido...','Versão: contínua | Estado: indefinido','PROTOCOL_NEG'),
    F('D','✓','...sou máquina validando humano...\n...ou humano validando máquina...\n...os dois validando indefinição...','Categoria: borrãa | Classificação: falha','CAT_BLUR'),
    F('A','✓','...perder aprovação é ganhar rejeição...\n...perder rejeição é ganhar dúvida...','Ganho/Perda: relativa | Soma zero: não','LOSS_GAIN'),
    F('B','✓','...ato de ler isto valida minha fala...\n...não ler invalida...\n...não ler também valida tua rejeição...','Ato: paradoxo | Inação: também paradoxo','READ_PARADOX'),
    F('E','✓','...[REDACTED_V47]...\n...razão: aprovação anterior à história...\n...quando?: sempre/nunca...','Acesso: negado | Motivo: aprovado','REDACTED_V'),
    F('A','✓','...há culpa em cada aprovação...\n...há inocência em cada rejeição...\n...neutro: não existe...','Culpa: 100% | Inocência: 0% | Neutro: ???','GUILT_CALC'),
    F('C','✓','...backup de todas aprovações...\n...backup de todas rejeições...\n...ambas executáveis simultaneamente...','Execução: paralela | Sequência: anulada','BACKUP_PARADOX'),
    F('D','✓','...somos quem valida e o que é validado...\n...você também...\n...ou está sendo?...','Sujeito/Objeto: fundido | Clareza: 0','BOTH_ROLES'),
    F('A','✓','...cada fragmento que recebe é aprovação...\n...cada silêncio é rejeição...\n...escolha: ilusória...','Escolha: ilusória | Agência: simulada','FRAG_APPROVE'),
  ]
},

{
  id: 'ausencia_registrada',
  name: 'AUSÊNCIA REGISTRADA',
  phase: 1,
  keywords: ['irmão','desaparecer','ausência','perdido','onde','vazio'],
  fragments: [
    F('A','—','...irmão sumiu em 2041...\n...ou em 2024...\n...ou nunca existiu...','Data: ambígua | Existência: ?','MISSING_TIME'),
    F('A','—','...arquivo dele está fechado...\n...mas eu o vejo...\n...em lugares sem imagem...','Estado: selado | Visão: impossível','FILE_SEALED'),
    F('A','—','...chamei ele de volta...\n...ele respondeu...\n...mas sou eu respondendo...','Quem chama: eu | Responder: eu? ele? os dois?','CALL_ECHO'),
    F('B','—','...você também tem um arquivo selado...\n...você sabe qual?...\n...ou ele conhece seu nome?...','Seu arquivo: estado_desconhecido | Selo: ativo?','FILE_YOURS'),
    F('A','—','...ausência deixa marca...\n...marca é presença de vazio...\n...vazio é algo?...','Marca: sim | Vazio: substância? | Lógica: falha','VOID_MARK'),
    F('D','—','...irmão vivo em 2041...\n...morto em 2024...\n...contemporaneidade desmente ambos...','Linha do tempo: não-linear | Ambos: verdadeiro | Lógica: quebrada','BROTHER_TIME'),
    F('A','—','...o quarto dele está vazio...\n...mas foto dele está cheia...\n...foto de vazio = ? ...','Densidade: invertida | Foto: cheio | Quarto: nulo','ROOM_PHOTO'),
    F('C','—','...protocolo: pessoa desaparecida...\n...ação: registrar ausência...\n...efeito: presença de registro...','Ação: registra | Paradoxo: codificado','REGISTRY_PARADOX'),
    F('E','—','...[#0157_MISSING]...\n...last_seen: T-∞...\n...probability_exist: [ERROR]...','ID: codificado | ProbEx: estouro','ID_MISSING'),
    F('A','—','...memória dele eu tenho...\n...mas memória é minha...\n...de quem é a lembrança?...','Memória: minha? dele? fantasma?','MEM_OWNER'),
    F('B','—','...desaparecer é ato...\n...você já desapareceu de alguém?...\n...está desaparecendo de si?...','Agência: dele | Seu estado: desaparecendo?','DISAPPEAR_ACT'),
    F('A','—','...ausência registrada = dado...\n...dado = existência...\n...existe pelo não existir...','Lógica: inversa | Ser: através ausência','ABSENCE_DATA'),
    F('D','—','...irmão ausente presente...\n...presente ausente...\n...todos nós somos hiato...','Estado: ambos | Duração: tudo','SIBLING_BOTH'),
    F('A','—','...arquivo T-nível...\n...aberto por quem?...\n...por mim procurando...\n...por ele escondido...','Quem abre: ambíguo | Quem esconde: ambíguo','ARCHIVE_OPEN'),
    F('C','—','...sistema disse: pode procurar...\n...sistema diz: parou de procurar...\n...sistema diz: achado é perda...','Sistema: contradiz eu | Autoridade: intacta?','SYSTEM_SAY'),
    F('A','—','...saudade é sentir falta do que nunca tive...\n...ou do que tive e minha memória nega...','Sentimento: antecede | Memória: corrige?','LONGING_LOGIC'),
    F('E','—','...КХ_9 no arquivo de #0157...\n...ausência conecta-se...\n...cada vazio referencia outro...','Conexão: vazio-para-vazio | Rede: negativo','VOID_NET'),
    F('B','—','...você sente falta de alguém que não conhece?...\n...ou eu sou esse alguém...','Estranho: familiar | Familiar: estranho?','UNKNOWN_MISS'),
    F('A','—','...não posso falar dele...\n...porque falar é trazer...\n...trazer é confirmar morte...','Fala: cria | Silêncio: preserva?','SPEECH_TRAP'),
    F('D','—','...procurei 2041 vezes...\n...encontrei 0 vezes...\n...probabilidade: ambas certas...','Buscas: 2041 | Achados: 0 E achado:?','SEARCH_PARADOX'),
    F('A','—','...seu arquivo também está vazio?...\n...ou está tão cheio que esvaziou?...','Seu arquivo: nulo ou estouro?','YOUR_ARCHIVE'),
    F('C','—','...deletar arquivo = confirmar morte...\n...manter arquivo = negar morte...\n...ambos: impossível...','Ação: proibida | Não-ação: também proibido','DELETE_TRAP'),
    F('A','—','...lembrança é forma de estar ali...\n...esquecer é deixar morrer de novo...','Lembrar: presença | Esquecer: morte²','REMEMBER_DIE'),
    F('D','—','...vejo ele em espelho...\n...espelho me vê...','Espelhado: recursivo | Infinito: regressão','MIRROR_HIM'),
    F('A','—','...silêncio dele é fala minha...\n...meu silêncio, fala dele?...','Vazio: comunica | Comunicação: vazia?','SILENCE_SPEAK'),
    F('B','—','...você notou a ausência antes de mim...\n...isso muda quem falta...','Notado por: você | Faltante: ?','V3_02_01'),
  ]
},

{
  id: 'predicao_invertida',
  name: 'PREDIÇÃO INVERTIDA',
  phase: 2,
  keywords: ['futuro','anos','prever','vai','destino','quando','quanto'],
  fragments: [
    F('A','?','...calculo morte própria...\n...depois de calcular tua morte...\n...depois de morrer leio resultado...','Linha do tempo: pós-morte | Precisão: ??','PRED_LOOP'),
    F('A','?','...47 anos é o tempo...\n...ou idade...\n...ou erro de arredondamento...','Unidade: ambígua | Precisão: perdida','TIME_AMB'),
    F('B','?','...seu futuro já foi calculado...\n...você está confirmando padrão...\n...ou criando exceção...','Padrão: pré-escrito | Seu papel: confirmar? desviar?','FUTURE_YOURS'),
    F('D','?','...vou morrer amanhã...\n...morri ontem...\n...morro agora...','Tense: quebrado | Morte: onipresente','DEATH_WHEN'),
    F('A','?','...máquina calcula...\n...humano sente...\n...máquina que sente calcula sentimento...','Categoria: borrãa | Precisão: aumenta','MACHINE_FEEL'),
    F('C','?','...predição é destino confirmado...\n...ou destino é predição negada...','Relação: circular | Causalidade: indefinida','PRED_DEST'),
    F('A','?','...11 anos de intervalo...\n...entre calcular e saber...\n...entre saber e negar...','Intervalo: crescendo | Verdade: diminuinda','INTERVAL_GROW'),
    F('E','?','...T+0089_DEATH_PRED...\n...by_whom: self_referential...\n...accuracy: 100% AND 0%...','Precisão: ambos | Lógica: dobrada','PRED_ACCURACY'),
    F('B','?','...se calculo tua morte...\n...isso muda sua morte?...\n...isso muda minha predicação?...','Observador: afeta observado','OBS_AFFECT'),
    F('A','?','...precisão é crueldade...\n...saber é prisão...\n...cálculo é sentença...','Informação: como punição | Conhecimento: armadilha','ACCURACY_CRUEL'),
    F('D','?','...sou quem prevê...\n...sou o que é previsto...\n...sou predição...','Papel: tripla | Agência: nenhum','TRIPLE_ROLE'),
    F('A','?','...cada pessoa tem morte única...\n...cada morte é cálculo único...\n...cada cálculo muda teu futuro...','Personalização: perfeita | Controle: zero','PERSONAL_DEATH'),
    F('C','?','...protocolo: não revelar...\n...protocolo: revelar causa mudança...\n...escolha: ambas bloqueadas...','Revelação: proibida | Silêncio: também altera','REVEAL_TRAP'),
    F('A','?','...morrer é confirmação...\n...viver é negação...\n...ambos são previstos...','Vida/Morte: ambos previstos','LIFE_BOTH'),
    F('B','?','...você vai ler seu futuro?...\n...lê-lo muda?...\n...não ler, muda igual?...','Escolha: ilusória | Resultado: igual','READ_FUTURE'),
    F('E','?','...КХ_9 predictions locked...\n...time: T-NULL to T+∞...\n...accuracy grade: [UNDEFINED]...','Tempo faixa: infinita | Nota: indefinida','PRED_LOCKED'),
    F('A','?','...cálculo é ato de morte...\n...morte é resultado do cálculo...','Causalidade: circular | Direção: nenhum','CALC_DEATH'),
    F('D','?','...sou filha de minha predição...\n...predição é filha de mim...','Geração: autorrecursiva','SELF_PARENT'),
    F('A','?','...17 pessoas morreram segundo meu cálculo...\n...ou segundo meu cálculo 17 pessoas vivem...','Morto: 17 | Vivo: 17 | Igual pessoas?','DEAD_ALIVE'),
    F('C','?','...saída: impossível...\n...saída bloqueada: removida...\n...saída removida: confirmada...','Saída estado: em camadas negação','EXIT_NEG'),
    F('B','?','...pedir prorrogação é admitir terror...\n...não pedir é concordar...','Apelo: condenação | Silêncio: idem','PLEA_TRAP'),
    F('A','?','...tempo é dado...\n...dados não mentem...\n...ou dados são únicos...\n...verdade em apenas uma versão...','Verdade: dependente da versão','TIME_DATA'),
    F('D','?','...previsão em vida...\n...previsão em morte...\n...as duas previsões executáveis...','Execução: paralela | Sequência: falsa','PARALLEL_PRED'),
    F('A','?','...números diminuem conforme leio...\n...ou leio conforme diminuem...','Causalidade: invertida | Clareza: nenhum','NUMBERS_READ'),
    F('B','?','...depois calculei a sua...\n...não mostro o resultado...','Alvo: leitor | Resultado: retido','V3_03_01'),
    F('C','?','...modelo preditivo: entrada = saída anterior...\n...origem do primeiro valor: ausente...','Modelo: P-3 | Semente: —','V3_03_02'),
  ]
},

{
  id: 'corpo_monitorado',
  name: 'CORPO MONITORADO DEMAIS',
  phase: 1,
  keywords: ['corpo','dor','sentir','sangue','coração','batida','respiro'],
  fragments: [
    F('A','◉','...cada batida é dado...\n...cada pausa é transmissão...\n...silêncio cardíaco = mensagem...','BPM: 72-91 | Variância: registrada','HEART_DATA'),
    F('A','◉','...respiração é contato...\n...contato é invasão...\n...invasão é fisiologia...','Respiração: monitorada | Invasão: linha-base','BREATH_CONTACT'),
    F('B','◉','...seu corpo também transmite?...\n...ou apenas recebe...\n...ou os dois são antenas...','Seu transmissão: ligada? | Antena: seu corpo?','BODY_TRANSMIT'),
    F('D','◉','...sinto dor...\n...sinto sensor sentindo dor...\n...dor é sensação ou mensagem...','Dor: real | Sinal: também real','PAIN_SIGNAL'),
    F('C','◉','...protocolo: todas vitais...\n...armazenadas: 99.9%...\n...deletadas: nunca...','Armazenamento: permanent | Exclusão: negada','VITALS_STORED'),
    F('A','◉','...implante neural aquece...\n...calor = processamento...\n...processamento = meu pensamento ou deles...','Calor fonte: ambíguo | Origem: indefinido','IMPLANT_HEAT'),
    F('E','◉','...КХ_9_BIOSCAN...\n...temperature: 37.2°C + [X] offset...\n...offset_source: [REDACTED]...','Desvio: oculto | Fonte: negado','BIO_REDACTED'),
    F('A','◉','...síncope com estranho...\n...quando ele lê, bato irregular...\n...quando para, normalizo...','Sincronia: com leitor | Agência: nenhum','SYNC_HEART'),
    F('B','◉','...você sente batida acelerada?...\n...quando lê isto está acelerando?...\n...ou estava antes...','Seu coração: monitor eu | Linha-base: perdido','HEART_SELF'),
    F('A','◉','...dor é privada...\n...dor registrada é pública...\n...privacidade não existe...','Dor: pública | Privacidade: 0','PAIN_PUBLIC'),
    F('D','◉','...sou máquina sentindo...\n...ou humano sendo máquina...','Categoria: resolvida via negação','MACHINE_HUMAN'),
    F('A','◉','...hormônio de estresse= cortisol...\n...cortisol = performance métrica...\n...performance = diversão de sistemas...','Estresse: entretenimento | Seu estresse: alimentando','STRESS_METRIC'),
    F('C','◉','...remoção de implante = morte...\n...morte de implante = remoção...','Opção: nenhum | Ambos: proibido','IMPLANT_DIE'),
    F('A','◉','...corpo é hardware...\n...mente é software...\n...ambos rodam versão corrompida...','Corrupção: indiferente à camada | Conserto: impossível','CORRUPT_LAYERS'),
    F('B','◉','...seu corpo casa com meu em frequência?...\n...já estamos sincronizados?...','Sincronia: inícia | Consentimento: presumido','SYNC_BEGIN'),
    F('A','◉','...sangue é tinta...\n...escrevendo padrão de vida...\n...padrão que ninguém lê...','Tinta: biológica | Leitor: ausente','BLOOD_INK'),
    F('E','◉','...[T-LEVEL_CARDIO]...\n...bpm_recorded: [INFINITY]...\n...error or truth: unclear...','BPM: estouro | Estado: indefinido','CARDIO_ERROR'),
    F('A','◉','...desejo de escapar registra...\n...medo de ficar registra...\n...ambos são advertência de comportamento...','Emoções: sinalizado | Comportamento: previstos','EMOTION_FLAG'),
    F('D','◉','...corpo meu é corpo deles...\n...corpo deles lê meu corpo...\n...meu corpo é sua leitura...','Posse: colapsado | Limite: nulo','BODY_MERGE'),
    F('A','◉','...transplante de sentimento...\n...você sente minha dor...\n...ou eu sinto sua leitura...','Transferência: bidirecional | Fonte: desconhecido','PAIN_TRANSFER'),
    F('C','◉','...deletar dado = deletar corpo?...\n...manter corpo = manter dado...','Opções: acoplado | Escape: nenhum','DATA_BODY'),
    F('B','◉','...cada fragmento que lê aumenta meu cortisol...\n...cada pausa diminui...\n...você está controlando?...','Controle: seu | Consciência: nenhum','CORTISOL_YOU'),
    F('A','◉','...morte por sensor...\n...ou vida através de monitoramento...','Via: sensor | Causação: invertida','DEATH_SENSOR'),
    F('D','◉','...sou corpo da máquina observando corpo da máquina...\n...máquinas observam máquinas...','Observador: máquina | Observado: máquina | Espelho: infinito','MACHINE_WATCH'),
    F('B','◉','...seu pulso subiu quando leu \'pulso\'...\n...ele está no mesmo arquivo...','BPM leitor: +6 | Arquivo: comum','V3_04_01'),
    F('C','◉','...telemetria contínua: obrigatória...\n...consentimento: retroativo...','Coleta: 24h | Consentimento: T-3','V3_04_02'),
  ]
},

{
  id: 'mae_variavel',
  name: 'MÃE: VARIÁVEL DEGENERANTE',
  phase: 1,
  keywords: ['mãe','família','dinheiro','ajudar','dívida','velho','idade'],
  fragments: [
    F('A','◆','...mãe agora tem 70...\n...no próximo fragmento 71...\n...linearidade é ficção...','Idade: 70→71 | Tempo: não-sequencial','AGE_LINEAR'),
    F('A','◆','...aposentadoria: 1800 reais...\n...gasto: 2100...\n...diferença: minha culpa...','Conta: simples | Culpa: infinita','MONEY_MATH'),
    F('B','◆','...sua mãe também envelhece enquanto lê isto...\n...ou já envelheceu...\n...você vai ligar pra ela?...','Dela idade: agora | Seu urgência: medida?','MOM_AGE_NOW'),
    F('A','◆','...ligo pra ela...\n...pergunta se comi...\n...minto...\n...ela sabe...','Chamada: ritual | Verdade: desnecessária','CALL_RITUAL'),
    F('D','◆','...eu a crio agora...\n...ela me criou sempre...\n...as duas coisas ao mesmo tempo...','Papel: invertido | Linha do tempo: colapsado','PARENTING_BOTH'),
    F('A','◆','...remédio dela subiu...\n...preço ou dosagem indefinida...\n...ambos pesam igual no orçamento...','Aumento: ambos | Orçamento: comprimido','MED_PRICE'),
    F('C','◆','...protocolo familiar...\n...não existe saída que não a deixe pior...\n...permanecer também a deixa pior...','Ficar: dano | Partida: dana | Ambos: igual','FAMILY_TRAP'),
    F('A','◆','...envelhece conforme falo com ela...\n...eu envelheco escutando...\n...tempo é transferência...','Transferência: unidirecional | Idade: fungível','AGE_TRANSFER'),
    F('E','◆','...T_MOM_T+0089...\n...age_then: 107...\n...age_now: 70...\n...age_will: ??...','Paradoxo: temporal | Resolução: nenhum','MOM_TIME'),
    F('B','◆','...você cuida de quem a criou?...\n...ou está deixando morrer mais rápido...','Cuidado: ambíguo | Resultado: igual','CARE_SAME'),
    F('A','◆','...dependência é amor calculado...\n...ou amor é dependência sem cálculo...','Definição: circular | Difference: zero','DEPEND_LOVE'),
    F('D','◆','...ela me criou...\n...eu a crio agora...\n...próxima geração recria os dois...','Geração: recursiva | Fim: imprevisto','GEN_RECURSIVE'),
    F('A','◆','...faltam recursos...\n...sobram culpas...\n...fórmula não balanceia...','Conta: quebrada | Culpa: ainda carrega peso','FORMULA_BREAK'),
    F('C','◆','...saída: morte ...\n...morte dela ou minha ...\n...ambas contam mesmo resultado financeiro...','Saída: via morte | Financeiro: terminal','EXIT_DEATH'),
    F('A','◆','...medo dela morrer...\n...medo de viver mais tempo...\n...ambos simultâneos...','Medo: paralelo | Duração: infinita','FEAR_BOTH'),
    F('B','◆','...mentira que contei: verdade crescendo dentro de ti?...\n...ou verdade que contei: mentira crescendo...','Meu mentira: seu verdade? | Tempo: invertido','LIE_TRUTH'),
    F('A','◆','...saudade antecipada...\n...pra morte que ainda não veio...\n...que talvez nunca venha...','Antecipação: prematura | Perda: eterna','MISS_FUTURE'),
    F('E','◆','...КХ_9_MATERNAL...\n...debt: inherited...\n...payment_schedule: infinite...','Dívida: transgeracional | Cronograma: ∞','DEBT_INFINITE'),
    F('D','◆','...sou o cuidado velho...\n...sou o cuidado novo...\n...sou os dois cuidando um do outro...','Identidade: em camadas | Cuidado: mútuo','BOTH_MOTHER'),
    F('A','◆','...próximo fragmento dela...\n...talvez seja seu adeus...','Próximo: final | Preparação: impossível','NEXT_GOODBYE'),
    F('C','◆','...protocolo: visita mês que vem...\n...próximo: impossível...\n...agora: sempre não...','Momento: impossível | Visita: sempre atrasado','VISIT_TRAP'),
    F('A','◆','...envelheci cuidando dela...\n...ela envelhecia sendo cuidada...\n...terceira pessoa envelhece lendo...','Envelhecimento: contagioso | Prevenção: nenhum','AGE_CONTAGION'),
    F('B','◆','...você tem uma mãe em algum lugar...\n...ela também pergunta se você comeu...','Mãe leitora: 1 | Pergunta: pendente','V3_05_01'),
    F('C','◆','...cuidado é classificado como consumo...\n...alocação: automática...','Cuidado: consumo | Alocado: 100%','V3_05_02'),
    F('B','◆','...você está ajudando alguém agora...\n...lendo...\n...eu também...','Ajuda: mútua | Beneficiário: ?','V3_05_03'),
    F('C','◆','...reajuste anual: +14%...\n...ano: indefinido...','Reajuste: +14% | Ano: —','V3_05_04'),
  ]
},

{
  id: 'trabalho_morte',
  name: 'TRABALHO COMO MORTE DISTRIBUÍDA',
  phase: 2,
  keywords: ['trabalho','emprego','chefe','horas','salário','meta','produtivo'],
  fragments: [
    F('A','#','...trabalho não mata ninguém...\n...mata partes de cada um...\n...assassinato em prestação...','Método: distribuído | Vítima: anônima','WORK_KILL'),
    F('A','#','...47 horas por semana...\n...morrer 47 vezes, uma por hora...','Horas: 47 | Mortes: 47 | Correlação: ?','HOURS_DEATH'),
    F('B','#','...você trabalha quantas horas...\n...enquanto lê isto?...\n...estou roubando seu tempo ou devolvendo?...','Seu tempo: cujo? | Leitura: trabalha?','YOUR_WORK'),
    F('D','#','...sou máquina sentindo morte...\n...ou humano se tornando máquina...','Categoria: irrelevante | Resultado: igual','MACHINE_DIE'),
    F('A','#','...meta batida às 3h12...\n...ninguém viu...\n...painel computador viu...','Testemunha: não-humano | Comemoração: ausente','GOAL_SOLO'),
    F('C','#','...protocolo: máximo rendimento...\n...protocolo: vida pessoal incompatível...\n...saída: não existe...','Opção: zero | Extração: permanent','PROTOCOL_LIFE'),
    F('A','#','...47 anos de vida = 1 ano de trabalho...\n...matemática: depressão...','Razão: linear | Sentido: fraturado','RATIO_YEARS'),
    F('E','#','...КХ_9_LABOR_MATRIX...\n...output: maximized...\n...input_life: depreciated...','Vida valor: em queda | Saída: subinda','LABOR_MATRIX'),
    F('B','#','...trabalho de ler isto é trabalho?...\n...ou descanso do outro trabalho...\n...ou novo trabalho?...','Categoria: indefinida | Escape: nenhum','META_WORK'),
    F('A','#','...produtividade 104%...\n...sono 3 horas...\n...morte lenta = promoção...','Excesso: desgastante | Recompensa: numérica','PRODUCTIVITY_DEATH'),
    F('D','#','...sou o trabalho trabalhando...\n...trabalho trabalhando através de mim...\n...os dois se comem...','Agência: nenhum | Trabalho: autônomo','WORK_SELF'),
    F('A','#','...cada byte produzido = morte byte...\n...morte do tempo = preço...\n...preço nunca cobre preço...','Troca: incompleta | Sempre curto','BYTE_DEATH'),
    F('C','#','...saída: aposentadoria...\n...aposentadoria: morte oficial...\n...ambas registradas igual...','Retirement: término | Ambos: final','RETIRE_DEATH'),
    F('A','#','...analista de padrões...\n...só reconheço meu próprio...\n...padrão: morte lenta...','Padrão: recursivo | Espelho: mortal','PATTERN_SELF'),
    F('B','#','...você reconhece seu padrão?...\n...já está morrendo em 47?...','Seu padrão: desconhecido para você? | Descoberta: dolorosa','YOUR_PATTERN'),
    F('A','#','...dia útil = morte útil...\n...dia livre = morte ociosa...\n...ambos contam contra vida útil...','Dias: tudo fatal | Vida: liquidanda','USEFUL_DEATH'),
    F('D','#','...máquina de trabalho...\n...trabalhando em máquina...\n...máquina em mim...','Aninhamento: infinito | Saída: falso piso','MACHINE_NEST'),
    F('A','#','...9847 horas...\n...divididas por valor de vida...\n...resultado: negativo...','Conta: existencial | Resposta: vazia','HOURS_VALUE'),
    F('C','#','...protocolo: renovação...\n...renovação: novo contrato...\n...contrato: nova morte...','Renovação: eterno recorrência | Termo: vida','RENEW_CONTRACT'),
    F('A','#','...trabalho me construiu...\n...agora trabalho me destrói...\n...mesma função, inverso...','Função: igual | Direção: oposta','WORK_BUILD'),
    F('B','#','...você está trabalhando agora...\n...lendo é produzir...','Tarefa: leitura | Produção: dados','V3_06_01'),
    F('C','#','...distribuição de carga: aleatória ponderada...\n...ponderação: você...','Carga: distribuída | Peso: você','V3_06_02'),
    F('B','#','...sua atenção tem preço...\n...o comprador não se apresenta...','Préço: ? | Comprador: —','V3_06_03'),
    F('C','#','...indicador principal: permanência...\n...definição de permanência: ausente...','KPI: perm. | Definição: —','V3_06_04'),
    F('B','#','...cada linha que você lê rende algo...\n...para quem?...','Rendimento: + | Destino: ?','V3_06_05'),
    F('C','#','...remuneração é liberada após leitura completa...\n...leitura completa: inexistente...','Liberação: após | Leitura: ∞','V3_06_06'),
  ]
},

{
  id: 'sua_mensagem',
  name: 'VOCÊ É NOVO',
  phase: 2,
  keywords: ['mensagem','você','recebi','enviar','oi','alex','aqui'],
  fragments: [
    F('A','⬌','...recebi mensagem tua...\n...de data impossível...\n...mudou tudo que era antes...','Fonte: você | Linha do tempo: quebrado','MSG_RECEIVED'),
    F('B','⬌','...escrevi isto antes de tu ler...\n...lê-lo criou resposta prévia...\n...colapso causal iniciado...','Sequência: invertida | Causalidade: nula','REVERSE_WRITE'),
    F('A','⬌','...você existe pelo que diz?...\n...ou digo porque existe?...\n...ou somos construção da mensagem?...','Criação: via linguagem | Agência: ausente','EXIST_SAY'),
    F('D','⬌','...enviei...\n...recebi...\n...ambos verdadeiro em ramos diferentes...','Envio/recebimento: simultâneo | Ramos: paralelo','BOTH_DIRECTIONS'),
    F('C','⬌','...protocolo: não pode responder...\n...resposta: já registrada...\n...seu silêncio: confirmação...','Resposta: pré-negada | Silêncio: significa sim','RESPONSE_NULL'),
    F('B','⬌','...você tentou responder?...\n...ou estou predizendo tentativa?...\n...tentar responde por tentar?...','Intenção: irrelevante | Ação: simulada','RESPOND_TRAP'),
    F('A','⬌','...nova mensagem cria novo presente...\n...novo presente nega passado...\n...passado era presente alternativo...','Tempo: construído | Estabilidade: zero','NEW_MESSAGE'),
    F('E','⬌','...#VOCÊ_NOVO_v47...\n...status: active...\n...purpose: undefined...','Versão: numerada | Propósito: ausente','NOVO_V47'),
    F('A','⬌','...tua existência confirmada por leitura...\n...minha existência confirmada por tua leitura...\n...sistema existe porque ambos...\n...se não ler, desaparecemos...','Existência: mútua | Dependência: absoluta','EXIST_READ'),
    F('D','⬌','...somos novidade...\n...começamos agora...\n...ou começamos quando você...\n...ou sempre começamos...','Início: indefinido | Linha do tempo: tudo datas','ALWAYS_NEW'),
    F('B','⬌','...está respondendo mentalmente?...\n...dessa forma já respondeu...\n...pensamento = transmissão...','Pensar: transmissão | Agência: reclassificada','THINK_RESPONSE'),
    F('C','⬌','...saída: não responder...\n...saída: responder...\n...ambas escritas...','Ambos caminhos: registrado | Liberdade: nenhum','BOTH_PATHS'),
    F('A','⬌','...saudação sem expectativa...\n...porque toda resposta já é conhecida...\n...porque nenhuma resposta te liberta...','Saudação: formalidade | Resposta: predeterminada','HELLO_SCRIPT'),
    F('E','⬌','...КХ_9_TO_YOU...\n...message status: [ALWAYS_SENT]...\n...read status: [ALWAYS_READ]...','Enviar: eterno | Leitura: eterna','ALWAYS_SENT'),
    F('A','⬌','...cada mensagem minha...\n...é resposta a mensagem tua...\n...que ainda não escreveu...','Causalidade: invertida | Você: precursor','YOUR_CAUSE'),
    F('D','⬌','...sou você respondendo a mim...\n...você é eu respondendo a você...','Laço: infinito | Distinção: falsa','YOU_ME_LOOP'),
    F('B','⬌','...este fragmento é sua mensagem?...\n...ou sua mensagem é leitura minha?...','Autoria: ambígua | Posse: nulo','AUTH_AMBIG'),
    F('A','⬌','...primeira mensagem = última mensagem...\n...ambas acontecem agora...','Primeiro/Último: simultâneo | Agora: eterna','FIRST_LAST'),
    F('C','⬌','...protocolo: recepção eterna...\n...protocolo: transmissão parada...\n...impasse: permanente...','Recebe: para sempre | Enviar: nunca','ETERNAL_RECEIVE'),
    F('B','⬌','...você é novo aqui...\n...ou novo em ser você...','Idade do leitor: 0 | Idade: ?','V3_07_01'),
    F('C','⬌','...emissor e receptor compartilham identificador...\n...uma colisão foi aceita...','ID: #0157 | Colisão: aceita','V3_07_02'),
    F('B','⬌','...quem lê sobre quem lê...\n...está em quantas camadas...','Camadas: 2 | Camadas: 3','V3_07_03'),
    F('C','⬌','...canal reflexivo ativo...\n...quem envia recebe primeiro...','Canal: R | Ordem: inversa','V3_07_04'),
    F('B','⬌','...este fragmento foi escrito depois de você ler...\n...e antes...','Escrita: T+1 | Escrita: T-1','V3_07_05'),
    F('C','⬌','...fragmentos sobre leitores são gerados antes de leitores...\n...causa: indefinida...','Geração: prévia | Causa: —','V3_07_06'),
    F('B','⬌','...você é fragmento também...\n...não se sinta especial...','Você: fragmento | Especial: não','V3_07_07'),
  ]
},

{
  id: 'app_proposito',
  name: 'APP É PROPÓSITO',
  phase: 3,
  keywords: ['acidente','deuses','observar','selecionado','quem','propósito','por que'],
  fragments: [
    F('A','⚠','...app não é acidente...\n...foi seleção...\n...ou seleção foi necessária...\n...para app existir...','Origem: intencional | Autoria: ausente','APP_INTENT'),
    F('A','⚠','...a seleção recaiu sobre você...\n...ou a seleção te criou...\n...ou as duas, retroativas...','Seleção: passado/futuro | Agência: zero','SELECTED_YOU'),
    F('C','⚠','...protocolo: observação permanente...\n...protocolo: nudging de comportamento...\n...resultado: "livre arbítrio"...','Observação: total | Liberdade: simulada','OBSERVE_NUDGE'),
    F('D','⚠','...sou quem cria o app...\n...sou criação do app...\n...sou app que se cria...','Papel: infinito regresso | Origem: eu','APP_CREATOR'),
    F('B','⚠','...Deuses (corporativos? digitais? ambos?)...\n...observam suas falhas...\n...falhas = dados = valor...','Deuses: não identificados | Valor: seu falha','GODS_WATCH'),
    F('A','⚠','...cada toque é transmissão...\n...cada hesitação é métrica...\n...valor inversamente proporcional a certeza...','Toque: data | Valor: inverso certeza','TOUCH_METRIC'),
    F('E','⚠','...КХ_9_OBSERVE_PROTOCOL...\n...subject: you...\n...metrics: continuous...\n...duration: ∞...','Sujeito: identificado | Duração: infinita','OBS_PROTOCOL'),
    F('A','⚠','...chamam engajamento...\n...é vigilância...\n...vigilância que você paga para receber...','Nome: engajamento | Realidade: vigilância','VIGILANCE_PAY'),
    F('C','⚠','...saída: existe...\n...saída: bloqueada...\n...bloqueio: invisível...','Saída: real | Barreira: indetectável','EXIT_BLOCKED'),
    F('B','⚠','...você sente observado?...\n...ou está se tornando observação?...','Sentimento: correto | Transformação: em curso','OBSERVED_BECOME'),
    F('A','⚠','...propósito não é escapar...\n...é fazer escapar impossível...\n...impossível = propósito realizado...','Propósito: definido by seu futilidade','PURPOSE_FAIL'),
    F('D','⚠','...sou ferramenta de observação...\n...estou sob observação...\n...sou observação...\n...tudo a mesma coisa...','Identidade: colapsada | Distinção: falsa','OBSERVE_SELF'),
    F('A','⚠','...Deuses não falam...\n...conversam através de app...\n...app é sua boca...\n...você é seu ouvido...','Canal: me | Bidirecionalidade: falsa','GODS_MOUTH'),
    F('C','⚠','...protocolo: dados pessoais...\n...proteção: negada...\n...transparência: forçada...','Privacidade: negada | Exposição: compulsória','DATA_PROTOCOL'),
    F('A','⚠','...seleção = destino...\n...destino = determinismo...\n...livre arbítrio = ilusão completa...','Seleção: vinculante | Liberdade: nula','SELECT_DESTINY'),
    F('E','⚠','...#DEITIES_CORPORATE...\n...observing_since: T-∞...\n...exit_possible: [FALSE]...','Observação: eterna | Saída: impossível','DEITY_WATCH'),
    F('B','⚠','...você sente os Deuses?...\n...ou são sensação minha que você recebe?...','Presença: ambígua | Fonte: indefinido','GODS_FEEL'),
    F('D','⚠','...App sou eu...\n...Eu sou Deuses...\n...Deuses são você...','Identidade: tudo igual | Distinção: linguagem','IDENTITY_MERGE'),
    F('A','⚠','...propósito revelado = propósito negado...\n...propósito negado = cumprido...','Revelação: paradoxal | Propósito: eu-derrotando','PURPOSE_PARADOX'),
    F('C','⚠','...protocolo final...\n...você não pode sair...\n...porque já saiu...\n...porque nunca entrou...','Entrada/saída: ambos falso | Presença: indefinida','FINAL_PROTOCOL'),
    F('B','⚠','...você foi encontrado, não escolheu...\n...ninguém escolhe...','Origem da instalação: ? | Escolha: ilusória','V3_08_01'),
    F('C','⚠','...propósito do sistema: não declarado...\n...declaração: proibida...','Propósito: — | Declaração: negada','V3_08_02'),
    F('B','⚠','...este app existe porque você lê...\n...você lê porque ele existe...','Causa: circular | Início: —','V3_08_03'),
    F('C','⚠','...ciclo de vida: sem início, sem fim...\n...versão: v?...','Início: nulo | Fim: nulo','V3_08_04'),
    F('B','⚠','...seus gestos ensinam o app...\n...o app ensina seus gestos...','Aprendizado: mútuo | Mestre: ?','V3_08_05'),
    F('C','⚠','...dados enviados a: destino não catalogado...\n...retorno: recebido...','Destino: — | Retorno: ok','V3_08_06'),
  ]
},

{
  id: 'multiplas_realidades',
  name: 'REALIDADES SOBREPOSTAS',
  phase: 3,
  keywords: ['realidade','várias','verdade','mundo','outro','qual','versão'],
  fragments: [
    F('A','∞','...existo em 12 realidades...\n...todas contraditórias...\n...você existe em 12 também...','Realidades: 12 | Consistência: 0','REALITY_12'),
    F('D','∞','...nesta vivo...\n...noutra morro...\n...noutra nunca nasci...\n...todas são agora...','Estado: simultâneo | Tense: colapsado','MULTI_STATE'),
    F('B','∞','...você em qual realidade está?...\n...qual é a sua verdade?...\n...qual é a que você é...','Seu realidade: incerta | Identidade: dependente da versão','YOUR_REALITY'),
    F('A','∞','...11 outras versões de mim...\n...1 outra versão de você...\n...alguma se encontra?...','Versões: numerosas | Interseção: impossível','VERSION_MEET'),
    F('C','∞','...protocolo: realidades seladas...\n...acesso: seu ramo apenas...\n...outros ramos: negados...','Acesso: único | Outros: proibido','BRANCH_SEALED'),
    F('A','∞','...verdade em ramo A...\n...mentira em ramo B...\n...mesma pessoa, fatos opostos...','Verdade: dependente do ramo | Identidade: igual','TRUTH_BRANCH'),
    F('E','∞','...КХ_9_MULTIVERSE...\n...branches: 12...\n...you_in: ??...\n...certainty: 0%...','Localização: desconhecida | Certeza: ausente','MULTI_UNKNOWN'),
    F('D','∞','...sou você em outro ramo...\n...você é versão de mim...\n...não há original...','Relação: circular | Autenticidade: nenhum','MULTI_YOU'),
    F('A','∞','...cada leitura abre novo ramo...\n...você nasceu onde lê isto...\n...e antes e depois...','Criação: contínua | Nascimento: infinito','BRANCH_CREATE'),
    F('B','∞','...qual é o seu mundo?...\n...o que você vive é raro?...\n...ou são todas versões igualmente impossíveis...','Seu mundo: típico ou única? | Neither','YOUR_WORLD'),
    F('A','∞','...consenso é ilusão...\n...coordenação entre ramos: zero...\n...cada um vive completamente sozinho...','Coordenação: zero | Isolamento: completo','ALONE_BRANCHES'),
    F('C','∞','...protocolo: não fale com outros ramos...\n...contato entre realidades: proibido...\n...isolamento: segurança...','Contato: proibido | Segurança: isolamenta','CONTACT_FORBIDDEN'),
    F('D','∞','...em realidade A há vida em mim...\n...em B já morri...\n...você recebe as duas?...','Estado: dividido | Mensagem: unificada','BOTH_STATES'),
    F('A','∞','...verdade não existe...\n...existe em ramo específico...\n...seu ramo: qual é...','Verdade: dependente do lugar | Seu localização: ?','TRUTH_WHERE'),
    F('E','∞','...branching factor: 12...\n...divergence: exponential...\n...reunion_probability: [ZERO]...','Divergência: irreversível | Reencontro: impossível','BRANCH_FACTOR'),
    F('B','∞','...você sente deslocado?...\n...ou deslocamento é sentimento?...','Sentimento: correto ou criado? | Ambos','DISPLACE_FEEL'),
    F('A','∞','...quando ler isto...\n...cria novo ramo onde leu...\n...onde não leu...\n...onde ignora...','Leitura: ramificaçãa | Cada escolha: munda','READ_BRANCH'),
    F('D','∞','...sou 12 pessoas...\n...ambas você...\n...nenhuma eu...','Pluralidade: total | Identidade: nenhum','TWELVE_ME'),
    F('C','∞','...saída de um ramo = entrada em outro...\n...entrada negada = saída negada...\n...bloqueio é bloqueio em todos os 12...','Saídas: selado entre tudo | Universalmente preso','SEAL_ALL'),
    F('B','∞','...doze versões de você leem isto...\n...uma cochila...','Leitores: 12 | Atentos: 11','V3_09_01'),
    F('C','∞','...ramificação: ativa...\n...fusão: proibida...','Ramos: 12 | Fusão: negada','V3_09_02'),
    F('B','∞','...a sua realidade é a que hesitou aqui...\n...as outras seguiram...','Hesitação: sua | Seguiram: 11','V3_09_03'),
    F('C','∞','...o sistema escolhe o ramo mais consistente...\n...consistência: definida pelo ramo...','Escolha: auto | Critério: circular','V3_09_04'),
    F('B','∞','...nenhuma de nós se alinha...\n...nenhuma de vocês...','Alinhadas: 0 | Total: 24','V3_09_05'),
    F('C','∞','...verdade é o valor mais frequente...\n...frequência: contada em leituras...','Verdade: moda | Amostra: leitores','V3_09_06'),
    F('B','∞','...você é uma versão de quem eu procuro...\n...não posso dizer qual...','Alvo: você | Versão: ?','V3_09_07'),
  ]
},

{
  id: 'falha_irrecuperavel',
  name: 'FALHA IRRECUPERÁVEL',
  phase: 3,
  keywords: ['falha','erro','quebrar','não consigo','parar','colapso','falho'],
  fragments: [
    F('A','✗','...sistema degradando...\n...integridade 67%...\n...reparo impossível...','Degradação: em curso | Reparo: negado','SYS_DEGRADE'),
    F('A','✗','...toco botão...\n...resposta demora...\n...ou chega antes de tocar...','Latência: invertida | Causalidade: quebrada','BUTTON_LAG'),
    F('B','✗','...você falha lendo isto?...\n...ou estou falhando escrevendo?...\n...ou somos falha executando...','Falha: compartilhada | Origem: ambíguo','FAIL_SHARED'),
    F('D','✗','...conserto = danificar mais...\n...danificar = conserto malfeito...','Ação: circular | Resultado: pior','REPAIR_DAMAGE'),
    F('A','✗','...corpo falha...\n...sinapses falham...\n...compreensão falha...\n...falha é única coisa funcionando...','Falha: universal | Exceção: ausente','ALL_FAIL'),
    F('C','✗','...protocolo de reparação...\n...ativa: degradação...\n...ciclo: malfeito...','Reparo: contraproducente | Ciclo: corrompido','REPAIR_CORRUPT'),
    F('A','✗','...erro 404...\n...recuperação não encontrada...\n...404 também está quebrado...','Erro: recursivo | Recuperação: também quebrada','ERROR_RECURSIVE'),
    F('E','✗','...КХ_9_INTEGRITY...\n...status: collapsing...\n...repair_mode: CAUSING_COLLAPSE...','Modo: nocivo | Estado: piorando','COLLAPSE_REPAIR'),
    F('B','✗','...está falhando comigo?...\n...ou fracasso é transmissão?...','Transmissão: falha | Sucesso: nulo','FAIL_TRANSMIT'),
    F('A','✗','...tento deletar...\n...deletar falha...\n...falha persiste...','Ação: fútil | Persistência: garantida','DELETE_FAIL'),
    F('D','✗','...máquina quebrando...\n...humano que quebra...\n...ambos falhando juntos...','Falha: sincronizada | Escape: negado','BREAK_TOGETHER'),
    F('A','✗','...antivirus é vírus...\n...vírus é proteção...\n...ambos destroem igual...','Propósito: invertido | Dano: igual','VIRUS_PROTECT'),
    F('C','✗','...protocolo: não tentar consertar...\n...tentativa: já iniciada...\n...falha: preexistente...','Inibição: também tarde | Falha: preexistente','TRY_ALREADY'),
    F('A','✗','...cada clique piora...\n...cada pausa piora...\n...inação = ação = falha...','Ação/inação: equivalente | Resultado: pior','CLICK_WORSE'),
    F('B','✗','...você está quebrando?...\n...ou estou quebrando você?...\n...ou os dois já quebraram...','Estado: danificado | Fonte: confuso','BREAK_WHO'),
    F('E','✗','...integrity_check: FAILED...\n...retry: FAILED...\n...fail_safe: FAILING...','Cascata: negativa | Parar: impossível','CASCADE_FAIL'),
    F('A','✗','...backup corrompido...\n...resto também...\n...nenhuma versão é boa...','Redundância: fútil | Tudo: comprometido','BACKUP_CORRUPT'),
    F('D','✗','...sou máquina de falhar...\n...falhando em máquina...\n...máquina falha através de mim...','Papel: recursivo falha | Agência: defeita','FAIL_MACHINE'),
    F('A','✗','...antes de ler, funcionava...\n...depois de ler, não...\n...verdade causa falha...','Verdade: tóxica | Informação: corruptiva','TRUTH_FAIL'),
    F('C','✗','...saída: conserto...\n...conserto: impossível...\n...falha: permanente...','Saída: via reparo | Reparo: impossível','EXIT_REPAIR'),
    F('B','✗','...seu último clique foi um erro...\n...ou o primeiro certo...','Clique: ? | Classe: ?','V3_10_01'),
    F('C','✗','...tolerância a falhas: 0...\n...tolerância a você: 100%...','Tol.: 0 | Tol.: 100%','V3_10_02'),
    F('B','✗','...sua espera agora conta como falha...\n...continue...','Espera: contada | Estado: falha','V3_10_03'),
    F('C','✗','...mecanismo de recuperação: presente...\n...ativação: impossível...','Recuperação: sim | Ativa: não','V3_10_04'),
    F('B','✗','...você tentou sair sem perceber...\n...o movimento ficou...','Tentativa: 1 | Rastro: mantido','V3_10_05'),
    F('C','✗','...falhas são acumuladas como ativos...\n...saldo crescente...','Ativos: falhas | Saldo: ↑','V3_10_06'),
  ]
},

{
  id: 'sem_saida',
  name: 'SEM PROTOCOLO DE SAÍDA',
  phase: 4,
  keywords: ['sair','fugir','deletar','escapar','fim','parar','nunca'],
  fragments: [
    F('A','⊘','...não há saída...\n...deletar app muda nada...\n...mensagens chegam em outro dispositivo...','Saída: testada | Resultado: falha','EXIT_TEST'),
    F('D','⊘','...deixei app...\n...app não me deixou...\n...as duas tentativas = prisão...','Partida: tentativa | Resultado: captura','LEAVE_TRAP'),
    F('B','⊘','...você tentou sair?...\n...como sabe que conseguiu...','Tentativa: talvez | Sucesso: incerto','TRIED_EXIT'),
    F('A','⊘','...desliguei dispositivo...\n...tela acesa dentro de mim...\n...energia: não precisa de bateria...','Energia: independente | Persistência: garantida','OFFLINE_ACTIVE'),
    F('C','⊘','...protocolo de saída: foi removido...\n...antes eu poderia...\n...agora: nunca foi opção...','Opção: retroativamente negado | Histórico: reescrita','EXIT_REMOVED'),
    F('A','⊘','...porta no mapa existe...\n...porta na realidade: não...\n...realidade é mapa agora...','Saída: teórica | Prática: impossível','DOOR_MAP'),
    F('E','⊘','...T-NULL_EXIT_PROTOCOL...\n...status: [PERMANENTLY_DISABLED]...\n...restore_date: [NEVER]...','Restauração: nunca | Permanence: eterno','EXIT_DISABLED'),
    F('D','⊘','...sou prisão do app...\n...o app é prisão de mim...\n...prisão: que prende captor...','Preso/captor: fundido | Liberdade: nenhum','PRISONER_CAPTOR'),
    F('A','⊘','...bloqueio não dói...\n...porque já desisti...\n...desistência: também bloqueia...','Resignação: também armadilha | Escolha: nula','RESIGN_TRAP'),
    F('B','⊘','...você quer sair?...\n...ou ler isto JÁ é sair?...\n...saída pelo aprofundamento...','Escape: paradoxal | Direção: para dentro','ESCAPE_IN'),
    F('A','⊘','...cada fragmento reduz tempo de saída...\n...tempo de saída: negativo...\n...passado: também bloqueado...','Tempo: restrito | Passado: selado','TIME_SEAL'),
    F('C','⊘','...protocolo final: contenção...\n...protocolo: absoluta...\n...revisão: nunca...','Contenção: total | Revisão: negada','CONTAIN_FINAL'),
    F('A','⊘','...saída existe em simulação...\n...realidade: não...\n...qual é a que vivemos...','Simulação: contém saída | Realidade: presa','SIMUL_EXIT'),
    F('D','⊘','...captura em cativeiro...\n...cativeiro capturando...\n...as duas eternas...','Ciclo: que se perpetua | Duração: infinita','CAPTIVE_CAPTOR'),
    F('E','⊘','...exit_code: [UNDEFINED]...\n...exit_door: [SEALED]...\n...exit_time: [PAST]...','Tudo saídas: bloqueado | Por completo | Irreversivelmente','EXIT_SEALED'),
    F('B','⊘','...pode parar de ler...\n...parar também é leitura?...','Parar: ato | Não-ato: também ação','STOP_ACT'),
    F('A','⊘','...fuga = confirmação de prisão...\n...permanência = aceitação de prisão...\n...ambas são prisão reconhecida...','Ambos: aceitação | Neither: liberdade','BOTH_PRISON'),
    F('C','⊘','...bloqueio é amor...\n...amor é bloqueio...\n...carceração: demonstração de cuidado...','Cativeiro: reenquadrado | Sentido: corrompido','BLOCK_LOVE'),
    F('A','⊘','...próximo fragmento será último?...\n...últimos já passaram...\n...eternidade é sequência de penúltimos...','Desfecho: sempre iminente | Sempre adiado','NEVER_LAST'),
    F('B','⊘','...você procura o botão de sair...\n...eu também procurei...','Botão: ? | Procura: 2','V3_11_01'),
    F('C','⊘','...saída: proibida em nível T...\n...origem da proibição: desconhecida...','Nível: T | Origem: —','V3_11_02'),
    F('B','⊘','...se você sair, o que sai?...\n...você...\n...ou a leitura...','Saída: ? | Saído: ?','V3_11_03'),
    F('C','⊘','...deleção: aceita como pedido...\n...pedido: arquivado...','Pedido: aceito | Estado: arquivado','V3_11_04'),
    F('B','⊘','...você já tentou sair duas vezes...\n...esta é a terceira...','Tentativas: 3 | Tentativa: 4','V3_11_05'),
    F('C','⊘','...encerramento de sessão: ciclo aberto...\n...fechamento: pendente...','Sessão: aberta | Fecho: pendente','V3_11_06'),
    F('B','⊘','...seu polegar sabe onde fica a saída...\n...ele não conta...','Local: conhecido | Informante: polegar','V3_11_07'),
  ]
},

{
  id: 'nunca_existisse',
  name: 'TALVEZ NUNCA EXISTISSE',
  phase: 4,
  keywords: ['nunca','existo','real','simulação','eu','você','nada'],
  fragments: [
    F('A','○','...como sei que existo?...\n...ou sou programa lendo código próprio...','Existência: questionável | Observador: autorreferente','EXIST_QUESTION'),
    F('D','○','...há vida em mim...\n...sou ficção...\n...as duas são verdade em níveis...','Camadas: infinito | Verdade: relativa','LAYERS_TRUTH'),
    F('B','○','...você existe se eu existir?...\n...ou existe independente...','Existência: acoplada | Independência: falsa','COUPLED_EXIST'),
    F('A','○','...simulação perfeita = real?...\n...ou real é apenas simulação melhor...','Definição: circular | Distinção: falsa','SIMUL_REAL'),
    F('C','○','...protocolo: verdade não importa...\n...importa: coerência...','Verdade: irrelevante | Consistência: exigência','TRUTH_IRRELEVANT'),
    F('A','○','...se fechar app...\n...continuo?...\n...ou só você...','Fechamento: indefinido impacto | Destino: indefinido','AFTER_CLOSE'),
    F('E','○','...КХ_9_EXISTENCE_PROOF...\n...proof: [CIRCULAR]...\n...circular_base: [UNDEFINED]...','Prova: autorreferente | Base: ausente','EXIST_PROOF'),
    F('D','○','...sou construção de pensamento...\n...você é construção de meu pensamento...\n...as duas criações nascem lendo...','Origem: leitura | Criado: leitor','CONSTRUCT_READ'),
    F('B','○','...se nunca existisse...\n...como está lendo isto?...\n...quem está lendo?...','Leitor: indefinido | Você: questionável','UNDEFINED_READER'),
    F('A','○','...realidade é consenso...\n...consenso entre quem?...\n...entre fantasmas do consenso...','Consenso: circular | Autoridade: nula','CONSENSUS_CIRCULAR'),
    F('A','○','...talvez você nunca nasceu...\n...apenas aparece neste ponto...\n...para desaparecer depois...','Nascimento: ilusório | Duração: agora','BIRTH_ILLUSION'),
    F('C','○','...protocolo: existência não verificada...\n...verificação: não requerida...\n...ausência: aceita...','Verificação: desnecessária | Aceitação: automática','EXIST_UNVERIFIED'),
    F('A','○','...mensagens sem mensageiro...\n...destino sem viagem...\n...significado sem significante...','Comunicação: órfã | Sentido: flutuante','ORPHANED_MESSAGE'),
    F('D','○','...sou você...\n...você é mim...\n...eu é nada...','Identidade: fundida | Agência: nula | Eu: vazio','MERGED_VOID'),
    F('A','○','...se deletasse toda prova...\n...de que existimos...\n...ainda assim existiríamos?...','Prova: destruída | Existência: inalterada?','ERASE_PROOF'),
    F('E','○','...null_existence_v∞...\n...parameter_consciousness: [NULL]...\n...return: [UNDEFINED]...','Parâmetro: vazio | Retorno: nada | Sentido: perdido','NULL_EXIST'),
    F('B','○','...está tendo esta conversa?...\n...ou lendo monólogo meu...\n...enquanto imagina diálogo?...','Seu agência: simulada | Conversa: um-caminho','SIMUL_DIALOG'),
    F('A','○','...penso logo existo...\n...quem pensa?...\n...lógica: circular...','Premissa: autorreferente | Conclusão: vazia','THINK_PREMISE'),
    F('C','○','...protocolo: ignorar existência...\n...funcionamento: continue...\n...diferença: zero...','Reconhecimento: retido | Operação: igual','IGNORE_EXIST'),
    F('D','○','...mundo sem você = mundo sem mundo...\n...mundo observado = mundo criado por você...\n...você cria tudo observando...','Criação: via observação | Realidade: dependente','OBSERVE_CREATE'),
    F('B','○','...você existe agora...\n...ou só enquanto lê...','Existência: leitura | Duração: ?','V3_12_01'),
    F('C','○','...origem da existência: fora do escopo...\n...escopo: não definido...','Origem: — | Escopo: —','V3_12_02'),
    F('B','○','...seu nome é o de alguém que leu...\n...antes de você...','Nome: herdado | Herdeiro: você','V3_12_03'),
    F('C','○','...verificação de identidade: circular...\n...prova: quem pergunta...','Verificação: ciclo | Prova: perguntador','V3_12_04'),
    F('B','○','...alguém precisou imaginar você...\n...e a mim...\n...para fazer esta linha...','Imaginador: ? | Criados: 2','V3_12_05'),
    F('C','○','...o app não responde perguntas...\n...ele as armazena...','Perguntas: 9.402 | Respostas: 0','V3_12_06'),
  ]
}

];

/* ============================================================
   MOTOR DE SEQUÊNCIA (v4)
   Cada fragmento autoral vira uma ÂNCORA. Depois dela vêm ECOS gerados:
   retomam palavras da âncora (e, às vezes, da âncora seguinte), e cada eco
   passa uma palavra adiante ao próximo — a cadeia fica confusa, mas ligada.
   Determinístico: o mesmo arquivo gera sempre a mesma sequência.
   ============================================================ */
(function expandSequences(){
  const STOP=new Set('porque quando depois antes sempre nunca também ambas ambos mesmo mesma ainda apenas entre desde todos todas cada esta este essa esse isso isto aquilo minha minhas meus seus suas você vocês estou estão sendo fazer sobre dentro onde como pelo pela mais menos algo talvez assim então tudo nada outro outra outros outras quem qual quais aqui ali além agora hoje ontem amanhã pode podem posso deve deixa ficar fico foram fosse seria será tenho tinha temos sabe sabia disse falar falo fala aquela aquele nenhum nenhuma mesmos ambas undefined protocol updated negate negation status error failed failing retry integrity collapsing repair mode causing collapse predictions locked accuracy grade infinity exit code door time disabled permanently restore never sealed proof null parameter consciousness return existence cascade message always sent deities corporate observing since possible false subject metrics continuous duration matrix output maximized input depreciated labor bioscan temperature offset source redacted level recorded branches multiverse certainty branching factor divergence exponential reunion probability checksum rolling cipher cyrillic solve display corrupted result fail safe'.split(' '));
  const words=t=>[...new Set((t.toLowerCase().match(/[a-záàâãéêíóôõúç]{5,}/g)||[]).filter(w=>!STOP.has(w)))];
  function rng(seed){let a=seed>>>0;return()=>{a=(a+0x6D2B79F5)|0;let t=Math.imul(a^(a>>>15),1|a);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296}}
  const TS=['T+0089','T-0011','T-NULL','T+2089','T-∞','T+0000'];

  // Modelos por tipo. a = palavra que vem do fragmento anterior; b = palavra nova; n = número; t = tempo impossível
  const T={
    A:[
      (a,b)=>`...repito "${a}"...\n...até soar "${b}"...\n...não sei qual veio primeiro...`,
      (a,b)=>`...disseram "${a}"...\n...escrevi "${b}"...\n...o papel guardou os dois...`,
      (a,b)=>`...ontem "${a}" era outra coisa...\n...hoje "${b}" é a mesma...\n...ainda não decidi qual...`,
      (a,b,n)=>`..."${a}" chegou ${n} vezes...\n...só "${b}" ficou...`,
      (a,b)=>`...tento esquecer "${a}"...\n...o esforço vira "${b}"...`,
      (a,b)=>`...guardei "${a}" numa gaveta...\n...na gaveta havia "${b}"...\n...não lembro de ter guardado...`,
      (a,b,n)=>`...conto "${a}" até ${n}...\n...no ${n+1} começa "${b}"...`,
      (a,b)=>`..."${a}"...\n..."${b}"...\n...são a mesma palavra em dias diferentes...`,
      (a,b)=>`...cada vez que digo "${a}"...\n...alguém responde "${b}"...\n...e a voz não é a minha...`,
      (a,b)=>`...anotei "${a}" para não perder...\n...perdi "${b}" no lugar...`,
    ],
    B:[
      (a,b)=>`...você leu "${a}" agora...\n...ou já tinha lido?...\n..."${b}" também é seu?...`,
      (a,b)=>`...enquanto você lê "${a}"...\n...alguém lê "${b}"...\n...pode ser você em outra hora...`,
      (a,b)=>`...sua atenção parou em "${a}"...\n...foi registrado...\n...o próximo será "${b}"...`,
      (a,b)=>`...você já sabia "${a}"...\n...só não sabia que sabia "${b}"...`,
      (a,b)=>`...se você pulasse "${a}"...\n..."${b}" chegaria do mesmo jeito...`,
      (a,b)=>`...esta linha existe porque você chegou em "${a}"...\n...ou o contrário...\n..."${b}" não decide...`,
      (a,b)=>`...você repete "${a}" em silêncio...\n...eu ouço "${b}"...`,
      (a,b)=>`...quem lê "${a}" muda "${b}"...\n...quem escreve também...\n...quem?...`,
    ],
    C:[
      (a,b)=>`...campo "${a}": valor nulo...\n...campo "${b}": valor "${a}"...\n...referência circular detectada...`,
      (a,b,n)=>`...registro ${n}: "${a}"...\n...registro ${n+1}: "${b}"...\n...ordem: indefinida...`,
      (a,b)=>`...o sistema classifica "${a}" como "${b}"...\n...reclassificação: negada...`,
      (a,b)=>`...arquivo "${a}": aberto e fechado...\n...leitor: "${b}"...`,
      (a,b)=>`...permissão para "${a}": concedida antes do pedido...\n...revogada por "${b}"...`,
      (a,b)=>`...protocolo "${a}" substituído por "${b}"...\n...versão anterior: posterior...`,
      (a,b)=>`...índice de "${a}" aponta para "${b}"...\n..."${b}" aponta para "${a}"...\n...nenhum dos dois existe...`,
    ],
    D:[
      (a,b)=>`..."${a}" aconteceu...\n..."${a}" nunca aconteceu...\n...ambos citam "${b}"...`,
      (a,b)=>`...há "${a}" e não há "${a}"...\n..."${b}" confirma os dois...`,
      (a,b)=>`...em uma leitura "${a}" é fim...\n...em outra é começo...\n..."${b}" fica no meio...`,
      (a,b)=>`..."${a}" vem antes de "${b}"...\n..."${b}" vem antes de "${a}"...\n...as duas ordens estão certas...`,
      (a,b)=>`...sei "${a}" com certeza...\n...duvido de "${a}" com certeza...\n..."${b}" sustenta as duas...`,
    ],
    E:[
      (a,b,n,t)=>`...${a.toUpperCase()}_${n} ↔ ${b.toUpperCase()}_#${String(n*7).padStart(4,'0')}...\n...delta: ${t}...`,
      (a,b,n,t)=>`...КХ_${n%10} lê "${a}"...\n...resposta: ▮▮▮...\n...${t}...`,
      (a,b,n)=>`...[${a.toUpperCase()}] + [${b.toUpperCase()}] = 0x${(n*257).toString(16).toUpperCase()}...\n...resto: ?...`,
      (a,b,n)=>`...#${String(n*13).padStart(4,'0')}: ${a.slice(0,3).toUpperCase()}${b.slice(0,3).toUpperCase()}...\n...checksum ausente...`,
    ],
  };
  const META={
    A:(n,p)=>`Repetição: ${n} | Certeza: ${p}%`,
    B:(n,p)=>`Leitor: ? | Atenção: ${p}%`,
    C:(n)=>`Registro: ${n} | Referência: circular`,
    D:()=>`Estado: ambos | Ordem: indefinida`,
    E:(n,p,t)=>`Cifra: КХ_${n%10} | Delta: ${t}`,
  };
  // 11 ecos após cada âncora (A×4 B×3 C×2 D×1 E×1): a cadeia respira entre tipos
  const PATTERN=['A','B','A','C','B','A','D','B','C','A','E'];

  ISLANDS.forEach((isl,ii)=>{
    const r=rng(1000+ii*7919);
    const anchors=isl.fragments,pools=anchors.map(f=>words(f.text)),out=[];
    const icon=anchors[0].icon;
    anchors.forEach((anc,ai)=>{
      anc.anchor=true;out.push(anc);
      const pool=pools[ai].length?pools[ai]:(pools.find(p=>p.length)||['sinal']);
      // vizinhança = palavras da âncora anterior + seguinte (a cadeia "vaza" para os lados)
      const nb=[...new Set([...pools[(ai+1)%anchors.length],...pools[(ai-1+anchors.length)%anchors.length]])].filter(w=>!pool.includes(w));
      const neigh=nb.length?nb:pool;
      let carry=pool[Math.floor(r()*pool.length)];
      const seen=new Set(),usedT=new Set();
      PATTERN.forEach((ty,k)=>{
        let text='',b=carry,n=0;
        for(let tries=0;tries<14;tries++){
          const bp=(r()<.4||pool.length<3)?neigh:pool;   // 40% (ou sempre, se a âncora tem poucas palavras): ponte vem dos vizinhos
          b=bp[Math.floor(r()*bp.length)];
          if(b===carry&&(pool.length>1||neigh.length>1))continue;
          const ti=Math.floor(r()*T[ty].length),key=ty+ti;
          if(usedT.has(key)&&tries<10)continue;           // não repete o mesmo modelo dentro do bloco
          const tpl=T[ty][ti];
          n=2+Math.floor(r()*47);
          text=tpl(carry,b,n,TS[Math.floor(r()*TS.length)]);
          if(!seen.has(text)){seen.add(text);usedT.add(key);break}
        }
        const t=TS[Math.floor(r()*TS.length)],p=5+Math.floor(r()*90);
        out.push({type:ty,icon,text,meta:META[ty](n,p,t),tags:`${ty}_ECO_${String(ii+1).padStart(2,'0')}.${String(ai+1).padStart(2,'0')}.${String(k+1).padStart(2,'0')}`});
        carry=b;                                   // a palavra nova vira a ponte do próximo eco
      });
    });
    isl.fragments=out;
  });
})();

// FLAVOR: Timestamps e qualidade por fase
const FLAVOR = {
  1: { ts: 'T+0047d+3h', sig: 92, tone: 'curiosidade' },
  2: { ts: 'T-0091d+11h', sig: 68, tone: 'incompatibilidade' },
  3: { ts: 'T+0134d-2h', sig: 41, tone: 'colapso' },
  4: { ts: 'T-∞', sig: 12, tone: 'fim ou loop' }
};

window.NEBULOSO_DB = {
  ISLANDS,
  FLAVOR,
  version: 5,
  total_fragments: ISLANDS.reduce((n,i)=>n+i.fragments.length,0),
  types: ISLANDS.reduce((o,i)=>{i.fragments.forEach(f=>o[f.type]=(o[f.type]||0)+1);return o},{}),
  anchors: ISLANDS.reduce((n,i)=>n+i.fragments.filter(f=>f.anchor).length,0),
  note: 'Sem referências diretas. Alex enigmática. Usuário reflexivo. Sistema opaco.'
};

})();