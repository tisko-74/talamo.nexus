/* ============================================================
   NEBULOSA — idiomas (PT · EN)
   Escolha: ?lang=xx na URL (e fica lembrada) → escolha salva → idioma do navegador
   (português para pt-*, inglês para o resto). Carrega o banco e as revelações do idioma
   e expõe t('chave', ...args) para os textos da interface. Português é a referência:
   chave sem tradução cai no português.
   ============================================================ */
(function(){
// Bandas do seletor giratório. off:true = ainda sem tradução (aparece apagada; ao tocar, "sem sinal").
const BANDS=[{code:'pt',lbl:'PT',name:'Português'},{code:'en',lbl:'EN',name:'English'},{code:'zh',lbl:'中',name:'中文',off:true}];
const SUP=BANDS.filter(b=>!b.off).map(b=>b.code);
let q=null,saved=null;
try{q=new URLSearchParams(location.search).get('lang')}catch(e){}
try{saved=localStorage.getItem('nebuloso_lang')}catch(e){}
const nav=(navigator.language||'pt').toLowerCase();
const L=SUP.includes(q)?q:SUP.includes(saved)?saved:(nav.startsWith('pt')?'pt':'en');
if(SUP.includes(q))try{localStorage.setItem('nebuloso_lang',q)}catch(e){}
window.LANG_CODE=L;window.LANG_BANDS=BANDS;
document.documentElement.lang=L==='en'?'en':'pt-BR';

const STR={
pt:{
  hubAria:'HUB: novo início aleatório', gavAria:'Análise do receptor',
  prevAria:'Fragmento anterior na cadeia', prevLbl:'← ANTERIOR',
  listenAria:'Pausar ou retomar a leitura', lockAria:'Travar o fragmento na tela',
  undoAria:'Desfazer: voltar ao fragmento visto antes',
  nextAria:'Próximo fragmento na cadeia', nextLbl:'PRÓXIMO →',
  syncTitle:'Toque: próximo · Segure: aceitar', standby:'SISTEMA EM REPOUSO',
  bandLbl:'BANDA', bandAria:n=>`Seletor de idioma (banda). Atual: ${n}. Toque para girar.`, bandOff:n=>`> BANDA ${n}: sem sinal`,
  marks:['confirmada? negada? ambas','sempre esteve aqui','lida antes de enviada','pendente desde T-NULL'],
  favOn:n=>`> ILHA FAVORITA: ${n}`, favOff:'> FAVORITA REMOVIDA',
  phase:'FASE', dbgAuto:'Automático', dbgPhase:p=>'Fase '+p,
  acceptDenied:'> ACEITAÇÃO NEGADA: sinal insuficiente',
  mode:d=>`> MODO ${d?'DEMO (15s/fase)':'REAL (horas de uso)'}`,
  escape:'> ESCAPE: não existe', blocked:'> TRAVADO: destrave para navegar', locked:'> FRAGMENTO TRAVADO',
  sealDenied:'> SELO NEGADO: sinal insuficiente', sealAlready:n=>`> JÁ SELADO (${n} no Arquivo)`,
  sealed:n=>`> SELADO no Arquivo (${n})`, undoNone:'> UNDO: sem histórico anterior',
  locDenied:'LOC: SINAL BLOQUEADO', locNone:'LOC: SEM SENSOR', locWait:'LOC: aguardando sinal...',
  locAsk:'> LOC: o receptor pede a sua posição. Ela fica só neste aparelho: não é gravada nem enviada.',
  east:'L', west:'O', origin:'ORIGEM: 23.5505°S 46.6333°O · SÃO PAULO',
  burst:'⚠ ERRO DE TRANSMISSÃO | retransmitindo…',
  mSent:'enviado', mRead:'lido', mMade:'criado', mOrigin:'origem: desconhecida', mReading:'leitura',
  accepted:'ACEITO', sealedTag:'SELADO',
  revPart:(k,n)=>`Revelação ${k}/${n}`, revIsland:n=>`Ilha: ${n}`,
  rxPause:'PAUSA', rxNew:n=>`+${n} novos`, rxRecv:'RECEBENDO', rxListen:'LISTEN', lockOn:'TRAVADO', lockOff:'LOCK',
  mSeal:'SEAL: selar no Arquivo', mAnalyze:'ANALYZE: abrir a análise (fragmento, ramos, fita, espectro, arquivo)',
  mFav:'FAVORECER: marcar a Ilha atual', mUndo:'UNDO: voltar ao fragmento visto antes',
  /* temporal.js */
  tipo:{A:'direto',B:'reflexivo',C:'estrutural',D:'contraditório',E:'criptografado',R:'revelação'},
  tabs:['ANALISAR','RAMOS','FITA','ESPECTRO','ARQUIVO'], closeAria:'Fechar análise',
  tapeAhead:'[linha adiantada]', tapeSent:'env', tapeRead:'lido', tapeBranch:'ramo',
  hFrag:'FRAGMENTO', rIsland:'Ilha', rPhase:'fase', rType:'Tipo', rTag:'Tag', rPos:'Posição',
  posRev:(a,b)=>`revelação ${a}/${b}`, posChain:(a,b)=>`${a}/${b} na cadeia`,
  rSent:'Enviado', rRead:'Lido', rMade:'Criado', rReading:'Leitura', rSealed:'Selado', yes:'sim', no:'não',
  rFav:'Favorita', none:'nenhuma', hLang:'LINGUAGEM', rLayer:'Camada', rLangDrift:'Deriva linguística', rNote:'Nota',
  hTime:'LINHA DO TEMPO', rBranch:'Ramo atual', rCons:'Autoconsistência', rDrift:'Deriva',
  rfPhase:'· fase', rfRej:'· rejeições', rfBurst:'· erros de transmissão', rfUndo:'· voltas no tempo',
  hMirror:'ESPELHO', you:'VOCÊ', mTaps:'BPM/toques', mHes:'cort/hesit.', mAtt:'temp/atenção',
  mirrorNote:'Toques por minuto e hesitação vêm só da sua interação com esta página; nada é medido do seu corpo nem enviado.',
  hMatrix:'MATRIZ DE RAMOS · 12 ILHAS', matrixLegend:'verde: atual · âmbar: já visitada · apagada: ainda não liberada',
  hBranches:(a,b)=>`RAMOS · ${a} · ${b} nós`, current:'ATUAL', go:'IR', goAria:b=>`Ir para o ramo ${b}`,
  branchNote:'Visitar um ramo muda o caminho ativo; os nós antigos não são reescritos. Voltar custa deriva.',
  hTape:'FITA DE REGISTRO', tapeEmpty:'(fita vazia)',
  hArchive:'ARQUIVO', archiveEmpty:'Nenhum fragmento selado ainda. Use ◈ (SEAL) para guardar.',
  hArchiveN:n=>`ARQUIVO · ${n} selados`, archRev:n=>' · revelação '+n, dateLocale:'pt-BR',
  hSpectrum:'ESPECTRO · SINTONIA', impossible:'IMPOSSÍVEL', band:'banda',
  csLine:alt=>`EXIT: ${alt?'[REDACTED]':'DISABLED'} | ESC: NEGADO<br>RESTORE: NEVER | sessão: aberta`
},
en:{
  hubAria:'HUB: new random start', gavAria:'Receiver analysis',
  prevAria:'Previous fragment in the chain', prevLbl:'← PREV',
  listenAria:'Pause or resume reading', lockAria:'Lock the fragment on screen',
  undoAria:'Undo: go back to the fragment seen before',
  nextAria:'Next fragment in the chain', nextLbl:'NEXT →',
  syncTitle:'Tap: next · Hold: accept', standby:'SYSTEM AT REST',
  bandLbl:'BAND', bandAria:n=>`Language selector (band). Current: ${n}. Tap to turn.`, bandOff:n=>`> BAND ${n}: no signal`,
  marks:['confirmed? denied? both','was always here','read before it was sent','pending since T-NULL'],
  favOn:n=>`> FAVORITE ISLAND: ${n}`, favOff:'> FAVORITE REMOVED',
  phase:'PHASE', dbgAuto:'Automatic', dbgPhase:p=>'Phase '+p,
  acceptDenied:'> ACCEPTANCE DENIED: insufficient signal',
  mode:d=>`> MODE ${d?'DEMO (15s/phase)':'REAL (hours of use)'}`,
  escape:'> ESCAPE: does not exist', blocked:'> LOCKED: unlock to navigate', locked:'> FRAGMENT LOCKED',
  sealDenied:'> SEAL DENIED: insufficient signal', sealAlready:n=>`> ALREADY SEALED (${n} in the Archive)`,
  sealed:n=>`> SEALED in the Archive (${n})`, undoNone:'> UNDO: no earlier history',
  locDenied:'LOC: SIGNAL BLOCKED', locNone:'LOC: NO SENSOR', locWait:'LOC: awaiting signal...',
  locAsk:'> LOC: the receiver asks for your position. It stays on this device only: never stored, never sent.',
  east:'E', west:'W', origin:'ORIGIN: 23.5505°S 46.6333°W · SÃO PAULO',
  burst:'⚠ TRANSMISSION ERROR | retransmitting…',
  mSent:'sent', mRead:'read', mMade:'created', mOrigin:'origin: unknown', mReading:'reading',
  accepted:'ACCEPTED', sealedTag:'SEALED',
  revPart:(k,n)=>`Revelation ${k}/${n}`, revIsland:n=>`Island: ${n}`,
  rxPause:'PAUSED', rxNew:n=>`+${n} new`, rxRecv:'RECEIVING', rxListen:'LISTEN', lockOn:'LOCKED', lockOff:'LOCK',
  mSeal:'SEAL: seal into the Archive', mAnalyze:'ANALYZE: open the analysis (fragment, branches, tape, spectrum, archive)',
  mFav:'FAVOR: mark the current Island', mUndo:'UNDO: go back to the fragment seen before',
  tipo:{A:'direct',B:'reflexive',C:'structural',D:'contradictory',E:'encrypted',R:'revelation'},
  tabs:['ANALYZE','BRANCHES','TAPE','SPECTRUM','ARCHIVE'], closeAria:'Close analysis',
  tapeAhead:'[line printed ahead]', tapeSent:'sent', tapeRead:'read', tapeBranch:'branch',
  hFrag:'FRAGMENT', rIsland:'Island', rPhase:'phase', rType:'Type', rTag:'Tag', rPos:'Position',
  posRev:(a,b)=>`revelation ${a}/${b}`, posChain:(a,b)=>`${a}/${b} in the chain`,
  rSent:'Sent', rRead:'Read', rMade:'Created', rReading:'Reading', rSealed:'Sealed', yes:'yes', no:'no',
  rFav:'Favorite', none:'none', hLang:'LANGUAGE', rLayer:'Layer', rLangDrift:'Linguistic drift', rNote:'Note',
  hTime:'TIMELINE', rBranch:'Current branch', rCons:'Self-consistency', rDrift:'Drift',
  rfPhase:'· phase', rfRej:'· rejections', rfBurst:'· transmission errors', rfUndo:'· time reversals',
  hMirror:'MIRROR', you:'YOU', mTaps:'BPM/taps', mHes:'cort/hesit.', mAtt:'temp/attention',
  mirrorNote:'Taps per minute and hesitation come only from your interaction with this page; nothing is measured from your body or sent anywhere.',
  hMatrix:'BRANCH MATRIX · 12 ISLANDS', matrixLegend:'green: current · amber: visited · dark: not yet unlocked',
  hBranches:(a,b)=>`BRANCHES · ${a} · ${b} nodes`, current:'CURRENT', go:'GO', goAria:b=>`Go to branch ${b}`,
  branchNote:'Visiting a branch changes the active path; old nodes are never rewritten. Going back costs drift.',
  hTape:'LOG TAPE', tapeEmpty:'(empty tape)',
  hArchive:'ARCHIVE', archiveEmpty:'No sealed fragments yet. Use ◈ (SEAL) to keep one.',
  hArchiveN:n=>`ARCHIVE · ${n} sealed`, archRev:n=>' · revelation '+n, dateLocale:'en-US',
  hSpectrum:'SPECTRUM · TUNING', impossible:'IMPOSSIBLE', band:'band',
  csLine:alt=>`EXIT: ${alt?'[REDACTED]':'DISABLED'} | ESC: DENIED<br>RESTORE: NEVER | session: open`
}};
window.t=function(k,...a){const v=(k in STR[L])?STR[L][k]:STR.pt[k];return typeof v==='function'?v(...a):v};
// troca de idioma: recarrega com ?lang= (fica lembrado)
window.setLang=function(c){const u=new URL(location.href);u.searchParams.set('lang',c);location.href=u.toString()};

// conteúdo do idioma (carregado aqui, antes do script principal, na mesma ordem de antes)
const sfx=L==='pt'?'':'.'+L;
document.write('<script src="banco-de-frases-v5'+sfx+'.js"><\/script><script src="revelacoes'+sfx+'.js"><\/script>');
})();
