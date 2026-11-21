/* =====================================================================
   1) SEUS DADOS – edite apenas esta parte
   ===================================================================== */

const CONFIG = {
  nome: "[SEU NOME COMPLETO]",
  formatura: "2026-12-12T20:00:00",          // data e hora da sua formatura (AAAA-MM-DDTHH:MM:SS)
  frases: ["[uma frase sobre você]", "[outra frase]", "[mais uma]"]  // aparecem digitando depois de "Eu sou"
};

/* Memórias: cada item é uma estação da trilha. Fotos ficam em assets/img/memorias/ */
const MEMORIAS = [
  { icone: "🧸", rotulo: "Pré-escola", etapa: "Jardim de Infância / Pré-escola", periodo: "[ANO] a [ANO]", escola: "[NOME DA ESCOLA]",
    texto: `[Conte como foi essa fase: primeiros dias, professora, amigos.]`,
    causos: ["[Causo marcante]", "[Curiosidade]"], desafio: "[Desafio superado]",
    fotos: [{ src: "assets/img/memorias/pre-escola-1.jpg", legenda: "[Legenda da foto]" }] },
  { icone: "🎒", rotulo: "1º ao 5º ano", etapa: "Ensino Fundamental I", periodo: "[ANO] a [ANO]", escola: "[NOME DA ESCOLA]",
    texto: `[Conte como foi essa fase.]`,
    causos: ["[Causo marcante]", "[Curiosidade]"], desafio: "[Desafio superado]",
    fotos: [{ src: "assets/img/memorias/fund1-1.jpg", legenda: "[Legenda da foto]" }] },
  { icone: "📐", rotulo: "6º ao 9º ano", etapa: "Ensino Fundamental II", periodo: "[ANO] a [ANO]", escola: "[NOME DA ESCOLA]",
    texto: `[Conte como foi essa fase.]`,
    causos: ["[Causo marcante]", "[Curiosidade]"], desafio: "[Desafio superado]",
    fotos: [{ src: "assets/img/memorias/fund2-1.jpg", legenda: "[Legenda da foto]" }] },
  { icone: "📘", rotulo: "1º ano EM", etapa: "1º ano do Ensino Médio", periodo: "[ANO]", escola: "[NOME DA ESCOLA]",
    texto: `[Conte como foi o 1º ano.]`,
    causos: ["[Causo marcante]", "[Curiosidade]"], desafio: "[Desafio superado]",
    fotos: [{ src: "assets/img/memorias/em1-1.jpg", legenda: "[Legenda da foto]" }] },
  { icone: "🧪", rotulo: "2º ano EM", etapa: "2º ano do Ensino Médio", periodo: "[ANO]", escola: "[NOME DA ESCOLA]",
    texto: `[Conte como foi o 2º ano.]`,
    causos: ["[Causo marcante]", "[Curiosidade]"], desafio: "[Desafio superado]",
    fotos: [{ src: "assets/img/memorias/em2-1.jpg", legenda: "[Legenda da foto]" }] },
  { icone: "🎓", rotulo: "3º ano EM", etapa: "3º ano do Ensino Médio", periodo: "[ANO]", escola: "[NOME DA ESCOLA]",
    texto: `[Conte como foi o 3º ano e o que sente ao se formar.]`,
    causos: ["[Causo marcante]", "[Momento inesquecível]"], desafio: "[Desafio superado]",
    fotos: [{ src: "assets/img/memorias/em3-1.jpg", legenda: "[Legenda da foto]" }] }
];

/* 17 redações: [título, tema, série, texto]. Separe os parágrafos com uma linha em branco. */
const REDACOES = [
  ["[Título 1]",  "[Tema]", "[Série]", `[Cole aqui o texto da redação 1.]`],
  ["[Título 2]",  "[Tema]", "[Série]", `[Cole aqui o texto da redação 2.]`],
  ["[Título 3]",  "[Tema]", "[Série]", `[Cole aqui o texto da redação 3.]`],
  ["[Título 4]",  "[Tema]", "[Série]", `[Cole aqui o texto da redação 4.]`],
  ["[Título 5]",  "[Tema]", "[Série]", `[Cole aqui o texto da redação 5.]`],
  ["[Título 6]",  "[Tema]", "[Série]", `[Cole aqui o texto da redação 6.]`],
  ["[Título 7]",  "[Tema]", "[Série]", `[Cole aqui o texto da redação 7.]`],
  ["[Título 8]",  "[Tema]", "[Série]", `[Cole aqui o texto da redação 8.]`],
  ["[Título 9]",  "[Tema]", "[Série]", `[Cole aqui o texto da redação 9.]`],
  ["[Título 10]", "[Tema]", "[Série]", `[Cole aqui o texto da redação 10.]`],
  ["[Título 11]", "[Tema]", "[Série]", `[Cole aqui o texto da redação 11.]`],
  ["[Título 12]", "[Tema]", "[Série]", `[Cole aqui o texto da redação 12.]`],
  ["[Título 13]", "[Tema]", "[Série]", `[Cole aqui o texto da redação 13.]`],
  ["[Título 14]", "[Tema]", "[Série]", `[Cole aqui o texto da redação 14.]`],
  ["[Título 15]", "[Tema]", "[Série]", `[Cole aqui o texto da redação 15.]`],
  ["[Título 16]", "[Tema]", "[Série]", `[Cole aqui o texto da redação 16.]`],
  ["[Título 17]", "[Tema]", "[Série]", `[Cole aqui o texto da redação 17.]`]
].map(([titulo, tema, serie, texto]) => ({ titulo, tema, serie, texto }));

/* Quiz "Você me conhece?": p = pergunta, o = opções, c = número da opção certa (0 = primeira) */
const QUIZ = [
  { p: "[Pergunta 1 sobre você]", o: ["[Opção A]", "[Opção B]", "[Opção C]"], c: 0 },
  { p: "[Pergunta 2 sobre você]", o: ["[Opção A]", "[Opção B]", "[Opção C]"], c: 1 },
  { p: "[Pergunta 3 sobre você]", o: ["[Opção A]", "[Opção B]", "[Opção C]"], c: 2 },
  { p: "[Pergunta 4 sobre você]", o: ["[Opção A]", "[Opção B]", "[Opção C]"], c: 0 }
];

/* =====================================================================
   2) COMPORTAMENTO – não precisa mexer daqui para baixo
   ===================================================================== */

const $ = (s) => document.querySelector(s);
const criar = (tag, classe, texto) => {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto) e.textContent = texto;
  return e;
};
const paragrafos = (t) => t.trim().split(/\n\s*\n/).map((p) => criar("p", "", p.trim()));
const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
const ler = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const gravar = (k, v) => { try { localStorage.setItem(k, v); } catch {} };

/* ---- Confete ---- */
function confete(n = 80) {
  if (reduz) return;
  const cores = ["#FFC83D", "#FF7A9C", "#3A5BFF", "#6EE7B7", "#ffffff"];
  for (let k = 0; k < n; k++) {
    const p = criar("i", "confete");
    p.style.cssText = `left:${Math.random() * 100}vw;background:${cores[k % 5]}`;
    document.body.append(p);
    p.animate(
      [{ transform: "translateY(-10vh) rotate(0)" },
       { transform: `translate(${Math.random() * 200 - 100}px,105vh) rotate(${Math.random() * 900}deg)` }],
      { duration: 1800 + Math.random() * 1800, delay: Math.random() * 300, easing: "cubic-bezier(.2,.6,.4,1)" }
    ).onfinish = () => p.remove();
  }
}

/* ---- Hero: nome, frases digitadas, contagem, figurinhas ---- */
function hero() {
  const h = $("#nome");
  h.textContent = "";
  let i = 0;
  CONFIG.nome.split(" ").forEach((palavra, k, todas) => {
    const w = criar("span", "palavra");
    [...palavra].forEach((c) => { const l = criar("span", "letra", c); l.style.setProperty("--i", i++); w.append(l); });
    h.append(w);
    if (k < todas.length - 1) h.append(" ");
  });
  document.title = `${CONFIG.nome} – Memórias e Redações`;

  const el = $("#digita");
  let f = 0, j = 0, apaga = false;
  if (reduz) el.textContent = CONFIG.frases[0];
  else (function passo() {
    const frase = CONFIG.frases[f];
    el.textContent = frase.slice(0, j);
    if (!apaga && j === frase.length) { apaga = true; return setTimeout(passo, 1600); }
    if (apaga && j === 0) { apaga = false; f = (f + 1) % CONFIG.frases.length; }
    j += apaga ? -1 : 1;
    setTimeout(passo, apaga ? 30 : 70);
  })();

  const box = $("#contagem"), alvo = new Date(CONFIG.formatura);
  const tic = () => {
    const ms = alvo - Date.now();
    if (ms <= 0) { box.textContent = "Já somos formados! 🎓"; return; }
    const s = Math.floor(ms / 1000);
    box.replaceChildren(...[["dias", Math.floor(s / 86400)], ["horas", Math.floor(s % 86400 / 3600)],
      ["min", Math.floor(s % 3600 / 60)], ["seg", s % 60]].map(([r, n]) => {
      const d = criar("div"); d.append(criar("b", "", String(n).padStart(2, "0")), criar("small", "", r)); return d;
    }));
  };
  tic(); setInterval(tic, 1000);

  $("#festa").addEventListener("click", () => confete(120));

  document.querySelectorAll(".fig").forEach((fig) => {
    fig.addEventListener("pointerdown", (e) => {
      fig.setPointerCapture(e.pointerId);
      fig.classList.add("pega");
      const sx = e.clientX - fig.offsetLeft, sy = e.clientY - fig.offsetTop;
      const mover = (ev) => { fig.style.left = ev.clientX - sx + "px"; fig.style.top = ev.clientY - sy + "px"; };
      const soltar = () => { fig.classList.remove("pega"); fig.removeEventListener("pointermove", mover); fig.removeEventListener("pointerup", soltar); };
      fig.addEventListener("pointermove", mover);
      fig.addEventListener("pointerup", soltar);
    });
  });
}

/* ---- Trilha de memórias ---- */
function trilha() {
  const nav = $("#estacoes"), painel = $("#painel");
  nav.style.setProperty("--n", MEMORIAS.length);
  MEMORIAS.forEach((m, i) => {
    const b = criar("button", "estacao");
    b.type = "button";
    b.append(criar("span", "ico", m.icone), criar("small", "", m.rotulo));
    b.addEventListener("click", () => mostrar(i));
    nav.append(b);
  });

  function polaroid(x) {
    const fig = criar("figure", "polaroid");
    const img = new Image();
    img.src = x.src; img.alt = x.legenda; img.loading = "lazy";
    img.onerror = () => { fig.classList.add("sem-foto"); fig.append(criar("span", "", `Adicione a foto em ${x.src}`)); };
    fig.append(img, criar("figcaption", "", x.legenda));
    fig.addEventListener("click", () => {
      if (fig.classList.contains("sem-foto")) return;
      $("#foto-img").src = x.src; $("#foto-img").alt = x.legenda;
      $("#foto-leg").textContent = x.legenda;
      $("#foto").showModal();
    });
    return fig;
  }

  function mostrar(i) {
    const m = MEMORIAS[i];
    nav.querySelectorAll(".estacao").forEach((b, k) => {
      b.classList.toggle("ativa", k === i);
      b.classList.toggle("feita", k < i);
      b.setAttribute("aria-pressed", k === i);
    });
    nav.style.setProperty("--p", i / (MEMORIAS.length - 1));
    const c = criar("div", "conteudo");
    c.append(criar("h3", "", m.etapa), criar("p", "quando", `${m.periodo} – ${m.escola}`), ...paragrafos(m.texto));
    const notas = criar("div", "notas");
    m.causos.forEach((t) => notas.append(criar("p", "nota", t)));
    const med = criar("p", "medalha");
    med.append(criar("b", "", "🏅 Desafio superado: "), m.desafio);
    const fotos = criar("div", "polaroids");
    m.fotos.forEach((x) => fotos.append(polaroid(x)));
    c.append(criar("h4", "", "Causos e curiosidades"), notas, med, fotos);
    painel.replaceChildren(c);
  }
  mostrar(0);
}

/* ---- Redações ---- */
const favoritas = new Set(JSON.parse(ler("favoritas") || "[]"));
const leitor = $("#leitor");
let atual = 0, tamanho = 1.1;

function listar(filtro = "") {
  const grade = $("#grade");
  const q = filtro.trim().toLowerCase();
  const cartoes = [];
  REDACOES.forEach((r, i) => {
    if (q && !`${r.titulo} ${r.tema}`.toLowerCase().includes(q)) return;
    const b = criar("button", "cartao");
    b.type = "button";
    b.append(criar("span", "num", `Redação ${String(i + 1).padStart(2, "0")}`), criar("strong", "", r.titulo), criar("small", "", r.tema));
    if (favoritas.has(i)) b.append(criar("span", "coracao", "♥"));
    b.addEventListener("click", () => abrir(i));
    cartoes.push(b);
  });
  grade.replaceChildren(...(cartoes.length ? cartoes : [criar("p", "vazio", "Nenhuma redação encontrada. Tente outra palavra.")]));
}

function abrir(i) {
  atual = i;
  const r = REDACOES[i];
  const minutos = Math.max(1, Math.round(r.texto.split(/\s+/).length / 180));
  $("#leitor-titulo").textContent = r.titulo;
  $("#leitor-meta").textContent = `${r.serie} – Tema: ${r.tema} – leitura de ${minutos} min`;
  const corpo = $("#leitor-texto");
  corpo.replaceChildren(...paragrafos(r.texto));
  corpo.style.setProperty("--fs", tamanho + "rem");
  corpo.scrollTop = 0;
  $("#posicao").textContent = `${i + 1} de ${REDACOES.length}`;
  $("#anterior").disabled = i === 0;
  $("#proxima").disabled = i === REDACOES.length - 1;
  const fav = favoritas.has(i);
  $("#fav").setAttribute("aria-pressed", fav);
  $("#fav").textContent = fav ? "♥ Favorita" : "♡ Favoritar";
  if (!leitor.open) leitor.showModal();
}

function redacoes() {
  listar();
  $("#busca").addEventListener("input", (e) => listar(e.target.value));
  $("#sorteio").addEventListener("click", () => abrir(Math.floor(Math.random() * REDACOES.length)));
  $("#anterior").addEventListener("click", () => atual > 0 && abrir(atual - 1));
  $("#proxima").addEventListener("click", () => atual < REDACOES.length - 1 && abrir(atual + 1));
  $("#menos").addEventListener("click", () => { tamanho = Math.max(0.9, tamanho - 0.15); abrir(atual); });
  $("#mais").addEventListener("click", () => { tamanho = Math.min(1.8, tamanho + 0.15); abrir(atual); });
  $("#fav").addEventListener("click", () => {
    favoritas.has(atual) ? favoritas.delete(atual) : favoritas.add(atual);
    gravar("favoritas", JSON.stringify([...favoritas]));
    abrir(atual); listar($("#busca").value);
  });
  document.addEventListener("keydown", (e) => {
    if (!leitor.open) return;
    if (e.key === "ArrowLeft" && atual > 0) abrir(atual - 1);
    if (e.key === "ArrowRight" && atual < REDACOES.length - 1) abrir(atual + 1);
  });
}

/* ---- Quiz ---- */
function quiz() {
  const box = $("#quiz");
  let q = 0, pontos = 0;
  (function tela() {
    box.replaceChildren();
    if (q >= QUIZ.length) {
      const ganhou = pontos === QUIZ.length;
      const b = criar("button", "btn", "Jogar de novo");
      b.addEventListener("click", () => { q = 0; pontos = 0; tela(); });
      box.append(criar("h3", "", `Você acertou ${pontos} de ${QUIZ.length}!`),
                 criar("p", "", ganhou ? "Você me conhece de verdade! 🎉" : "Quase lá. Que tal tentar de novo?"), b);
      if (ganhou) confete(140);
      return;
    }
    const item = QUIZ[q];
    const opcoes = criar("div", "opcoes");
    item.o.forEach((texto, k) => {
      const b = criar("button", "opcao", texto);
      b.type = "button";
      b.addEventListener("click", () => {
        opcoes.querySelectorAll("button").forEach((x, n) => { x.disabled = true; if (n === item.c) x.classList.add("certa"); });
        if (k === item.c) pontos++; else b.classList.add("errada");
        setTimeout(() => { q++; tela(); }, 1100);
      });
      opcoes.append(b);
    });
    box.append(criar("p", "qn", `Pergunta ${q + 1} de ${QUIZ.length}`), criar("h3", "", item.p), opcoes);
  })();
}

/* ---- Geral ---- */
document.querySelectorAll("dialog").forEach((d) => {
  d.addEventListener("click", (e) => { if (e.target === d || e.target.hasAttribute("data-fechar")) d.close(); });
});
addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  $("#lapis").style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
}, { passive: true });

hero();
trilha();
redacoes();
quiz();
