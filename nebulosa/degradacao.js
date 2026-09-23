/* ============================================================
   NEBULOSA — DEGRADAÇÃO DE LINGUAGEM (integração do motor de 21/09/2026)
   Camadas, por deriva linguística (0–100):
     0–32  Português           33–65  Inglês técnico     66–84  Kirilica (cirílico)
     85–99 Ελληνικά + Σύμβολα  100    Puro símbolo (raro)
   Cada camada diferente do português mostra a TRADUÇÃO (o original em português) abaixo do texto.
   Determinístico por fragmento (semente): o texto não "treme" sozinho; as falhas ao vivo continuam
   sendo só as rajadas de erro de transmissão e o glitch da fase 4.
   ============================================================ */
(function(){
const LAYERS=[
  {id:'pt',min:0,  code:'PT', name:'Português'},
  {id:'en',min:33, code:'EN', name:'English (Technical)'},
  {id:'ru',min:66, code:'КИР',name:'Kirilica'},
  {id:'gr',min:85, code:'ΕΛ', name:'Ελληνικά + Σύμβολα'},
  {id:'sy',min:100,code:'◈',  name:'◈ ◆ ◇ ℵ ℶ'}
];
const NOTE={
  en:'CAMADA TÉCNICA — inglês parcial; o que não foi traduzido ficou no original',
  ru:'CAMADA CIRÍLICA — alfabeto latino substituído',
  gr:'CAMADA GREGA — o sistema perde coerência linguística',
  sy:'PARADOXO — a linguagem colapsou em símbolo; a mensagem perdeu o significado'
};

/* ---------- Inglês técnico: substituição por PALAVRA INTEIRA (não troca pedaços de outras palavras) ---------- */
const EN=('aprovação=approval;aprovações=approvals;aprovei=approved;aprovo=approve;aprovar=approve;aprovado=approved;aprovada=approved;'
+'validação=validation;validar=validate;validado=validated;validando=validating;sistema=system;morte=death;mortes=deaths;morrer=die;morreu=died;'
+'criança=child;irmão=brother;mãe=mother;corpo=body;dor=pain;tempo=time;dado=datum;dados=data;erro=error;erros=errors;falha=failure;falhas=failures;'
+'falhando=failing;protocolo=protocol;leitor=reader;leitura=reading;arquivo=archive;fragmento=fragment;fragmentos=fragments;registro=log;registros=logs;'
+'saída=exit;entrada=entry;nome=name;número=number;realidade=reality;realidades=realities;existência=existence;existe=exists;verdade=truth;falso=false;'
+'vazio=void;você=you;eu=I;mundo=world;sinal=signal;transmissão=transmission;resposta=answer;pergunta=question;cálculo=calculation;previsão=forecast;'
+'futuro=future;passado=past;presente=present;ordem=order;culpa=guilt;rejeição=rejection;rejeitar=reject;fila=queue;painel=panel;trabalho=work;meta=target;'
+'horas=hours;hora=hour;remédio=medicine;pulso=pulse;batida=beat;batidas=beats;respiração=breathing;silêncio=silence;mensagem=message;lado=side;'
+'ramo=branch;versão=version;versões=versions;cópia=copy;original=original;permissão=permission;contrato=contract;dia=day;dias=days;noite=night;'
+'porta=door;janela=window;quarto=room;espelho=mirror;mão=hand;olho=eye;voz=voice;palavra=word;palavras=words;lembrança=memory;memória=memory;'
+'esquecer=forget;procurar=search;encontrar=find;sair=leave;entrar=enter;continuar=continue;esperar=wait;deixar=leave;ler=read;dizer=say;disse=said;'
+'ativou=activated;recuperou=recovered;restauração=restoration;recuperação=recovery;concluída=completed;respeito=respect;fidelidade=fidelity;'
+'degradação=degradation;monitorado=monitored;usuário=user;agora=now;ontem=yesterday;hoje=today;amanhã=tomorrow;sempre=always;nunca=never;'
+'ambos=both;todos=all;nada=nothing;tudo=everything;ninguém=nobody;alguém=someone;isto=this;isso=that;não=not;sim=yes;quando=when;onde=where;'
+'porque=because;mas=but;ou=or;com=with;sem=without;para=to;por=by;de=of;em=in;que=that;é=is;são=are;foi=was;está=is;estou=am;sou=am;tem=has;há=there is').split(';')
  .map(p=>p.split('='));
const EN_SORTED=EN.sort((a,b)=>b[0].length-a[0].length);          // mais longas primeiro
const EN_RX=new RegExp('(?<![\\p{L}])('+EN_SORTED.map(p=>p[0]).join('|')+')(?![\\p{L}])','giu');
const EN_MAP=Object.fromEntries(EN_SORTED.map(p=>[p[0],p[1]]));
function toEN(t){return t.replace(EN_RX,m=>{const k=m.toLowerCase(),v=EN_MAP[k];return m[0]===m[0].toUpperCase()&&m[0]!==m[0].toLowerCase()?v[0].toUpperCase()+v.slice(1):v})}

/* ---------- Cirílico (letra por letra, como no motor original) ---------- */
const RU={a:'а',e:'е',o:'о',i:'и',u:'у',y:'ы',p:'р',c:'с',n:'н',t:'т',l:'л',d:'д',m:'м',g:'г',b:'б',v:'в',f:'ф',h:'х',k:'к',z:'з','ã':'ӓ','õ':'ӗ','ç':'ќ'};
const toRU=t=>[...t.toLowerCase()].map(c=>RU[c]||c).join('');

/* ---------- Grego + símbolos: dígrafos primeiro, depois letras; palavras-chave e pontuação viram símbolo ---------- */
const GR={a:'α',e:'ε',i:'ι',o:'ο',u:'υ',b:'β',g:'γ',d:'δ',z:'ζ',l:'λ',m:'μ',n:'ν',p:'π',r:'ρ',s:'σ',t:'τ',y:'υ',x:'ξ','é':'ξ','ã':'ℵ','õ':'ℶ'};
function toGR(t){
  let r=t.toLowerCase().replace(/(?<![\p{L}])verdade(?![\p{L}])/gu,'◆').replace(/(?<![\p{L}])falso(?![\p{L}])/gu,'◇').replace(/(?<![\p{L}])vazio(?![\p{L}])/gu,'◈');
  r=r.replace(/th/g,'θ').replace(/ph/g,'φ').replace(/ch/g,'χ').replace(/ps/g,'ψ');
  return [...r].map(c=>GR[c]||({'!':'⚠','?':'⟍','.':'●',',':'◦'})[c]||c).join('');
}
/* ---------- Puro símbolo: cada letra vira um símbolo (semente: estável por fragmento) ---------- */
const SYM=['◆','◇','◈','⚠','✗','✓','⟍','●','◦','⊗','⊕','ℵ','ℶ','ℷ','ℸ','∞','∅','⟂'];
const toSY=(t,r)=>[...t].map(c=>/\p{L}/u.test(c)?SYM[Math.floor(r()*SYM.length)]:c).join('');

const api={
  LAYERS,
  layerFor(d){let L=LAYERS[0];for(const l of LAYERS)if(d>=l.min)L=l;return L},          // limiares 33 / 66 / 85 / 100, como no motor
  // deriva linguística (guia): ilha (0–50) + tempo de leitura (0–25, 1 h = 25) + erros (0–25, 5 cada)
  drift(ilhaN,horas,erros,forcada){
    if(forcada)return [10,40,70,90][forcada-1];                                        // F1–F4 (debug) fixam a camada
    return Math.min(100,(ilhaN/12)*50+Math.min(horas*25,25)+Math.min(erros*5,25));
  },
  render(text,layer,rng){
    switch(layer.id){case 'en':return toEN(text);case 'ru':return toRU(text);case 'gr':return toGR(text);case 'sy':return toSY(text,rng);default:return text}
  },
  note(layer){return NOTE[layer.id]||''},
  toEN,toRU,toGR
};
window.LANG=api;
})();
