"use strict";

/* =====================================================================
 * dados — fonte única pro terminal e pras seções da página
 * ===================================================================== */

const CV_BASE = "https://lusqinha.github.io/curriculum-vitae/";

const PROFILE = {
  name: "Lucas Borges da Silva",
  email: "lucas18sborges@gmail.com",
  github: "https://github.com/Lusqinha",
  linkedin: "https://www.linkedin.com/in/lucas-borges-da-silva-rs/",
  dultimahora: "https://dultimahora.com.br",
  cv: {
    pt: CV_BASE + encodeURI("Lucas Borges da Silva - Desenvolvedor Back-end - cv.pdf"),
    en: CV_BASE + "en/" + encodeURI("Lucas Borges da Silva - Back-end Developer - cv.pdf"),
  },
};

const SKILLS = [
  { id: "backend", items: ["Ruby", "Ruby on Rails", "PHP", "Laravel", "ActiveRecord", "REST APIs", "MVC"] },
  { id: "dados", items: ["PostgreSQL", "MySQL", "Redis", "Sidekiq"] },
  { id: "qualidade", items: ["RSpec", "TDD", "Git", "GitHub"] },
  { id: "ia", items: ["Claude Code", "LLMs", "AI Agents", "AI-First Development"] },
];

const CONTENT = {
  pt: {
    summary:
      "Desenvolvedor back-end com experiência em Ruby on Rails e PHP/Laravel, atuando em sistemas ERP, APIs REST, " +
      "plataformas de e-commerce e módulos financeiros. Histórico de entrega em projetos de COMEX, CRM e cobranças " +
      "em produção. Conhecimento sólido em PostgreSQL, MySQL, Redis, Sidekiq e desenvolvimento orientado a testes com RSpec e TDD. " +
      "Contribuo com a comunidade open source mantendo ferramentas públicas no GitHub.",
    skillGroups: { backend: "back-end", dados: "dados & filas", qualidade: "qualidade & versionamento", ia: "ia" },
    jobs: [
      {
        company: "Zimobi", role: "Desenvolvedor Full Stack", period: "set 2026 — atual", place: "remoto",
        bullets: [
          "Sustentação e evolução da plataforma: bugs e chamados de clientes em produção, com resposta rápida a incidentes.",
          "Desenvolvimento de novas features, com foco em chatbot para WhatsApp.",
          "Manutenção e desenvolvimento de integrações com ERPs/CRMs de terceiros e ferramentas internas que automatizam a comunicação com clientes.",
        ],
        tags: ["Full Stack", "WhatsApp", "Integrações", "ERP/CRM"],
      },
      {
        company: "Mainô", role: "Desenvolvedor Back-end", period: "fev 2025 — jun 2026", place: "remoto",
        bullets: [
          "Integrações REST do módulo de COMEX (comércio exterior), conectando o ERP a sistemas aduaneiros e parceiros logísticos.",
          "Implementei e mantive o sistema interno de cobranças: faturamento, controle de inadimplência e régua de cobrança automatizada.",
          "Funcionalidades do módulo de CRM e refatoração de código legado com otimização de queries SQL, reduzindo débito técnico.",
          "Adotei fluxo AI-first com Claude Code e apoiei a criação de agentes de IA e automações integradas ao ERP.",
        ],
        tags: ["Ruby on Rails", "PostgreSQL", "Sidekiq", "RSpec", "COMEX", "Claude Code"],
      },
      {
        company: "Prática Certificação Digital", role: "Agente de Suporte ao Cliente", period: "set 2023 — ago 2024", place: "Pelotas, RS",
        bullets: [
          "Suporte técnico na emissão e renovação de certificados digitais A1 e A3 para pessoas físicas e jurídicas.",
          "Resolução de problemas de infraestrutura de chave pública (PKI) e configuração de certificados em sistemas operacionais e navegadores.",
        ],
        tags: ["PKI", "Suporte técnico"],
      },
    ],
    projects: [
      {
        name: "D'ultimahora", kind: "co-fundador · dev líder",
        desc: "Marketplace peer-to-peer de revenda de ingressos em Ruby on Rails. Projetei a arquitetura (anúncios, transações, usuários) e integrei um LLM que modera anúncios e sinaliza indícios de fraude antes da revisão manual.",
        tags: ["Rails", "LLM", "Marketplace"], link: PROFILE.dultimahora,
      },
      {
        name: "Zimobi", kind: "plataforma de atendimento · zimobi",
        desc: "Plataforma omnichannel com IA para imobiliárias, em Ruby on Rails e Vue.js. Atuo na sustentação da plataforma, na correção de bugs e no desenvolvimento de novas funcionalidades.",
        tags: ["Ruby on Rails", "Vue.js", "WhatsApp", "Integrações CRM"], link: "https://zimobi.com.br",
      },
      {
        name: "Mainô ERP", kind: "erp fiscal & comex · mainô",
        desc: "ERP fiscal e de comércio exterior especializado em importação, em Ruby on Rails. Desenvolvi integrações REST com sistemas aduaneiros e parceiros logísticos, o sistema interno de cobranças e funcionalidades de CRM.",
        tags: ["Ruby on Rails", "PostgreSQL", "Sidekiq", "COMEX", "Fiscal"], link: "https://maino.com.br",
      },
      {
        name: "jukeboxdl", kind: "open source · CLI/TUI",
        desc: "Baixa músicas do YouTube e YouTube Music como MP3, Opus ou M4A com tags, por interface de terminal ou comandos. Monorepo TypeScript com Ink, yt-dlp e ffmpeg.",
        tags: ["TypeScript", "Ink", "yt-dlp", "SQLite"], link: "https://github.com/Lusqinha/jukeboxdl",
      },
      {
        name: "PecMan", kind: "open source · bot",
        desc: "Bot de Telegram para controle de gastos em texto livre (\"35 mercado\"). Parsing determinístico com regex e palavras-chave; um LLM local só entra quando a categoria não é reconhecida.",
        tags: ["Ruby", "Telegram", "SQLite", "LLM local"], link: "https://github.com/Lusqinha/ruby-pecmanager",
      },
    ],
    edu: { school: "PUC-RS", course: "Tecnólogo em Análise e Desenvolvimento de Sistemas", period: "out 2023 — jun 2026" },
  },

  en: {
    summary:
      "Back-end developer experienced in Ruby on Rails and PHP/Laravel, building ERP systems, REST APIs, e-commerce " +
      "platforms and financial modules. Track record of shipping foreign trade (COMEX), CRM and billing projects in " +
      "production. Solid knowledge of PostgreSQL, MySQL, Redis, Sidekiq and test-driven development with RSpec and TDD. " +
      "I contribute to the open source community by maintaining public tools on GitHub.",
    skillGroups: { backend: "back-end", dados: "data & queues", qualidade: "quality & vcs", ia: "ai" },
    jobs: [
      {
        company: "Zimobi", role: "Full Stack Developer", period: "Sep 2026 — present", place: "remote",
        bullets: [
          "Maintain and evolve the platform: fixing bugs and handling customer tickets in production with fast incident response.",
          "Build new features, focused on WhatsApp chatbot functionality.",
          "Maintain and build integrations with third-party ERP/CRM systems and internal tools that automate customer communication.",
        ],
        tags: ["Full Stack", "WhatsApp", "Integrations", "ERP/CRM"],
      },
      {
        company: "Mainô", role: "Back-end Developer", period: "Feb 2025 — Jun 2026", place: "remote",
        bullets: [
          "Built REST integrations for the COMEX (foreign trade) module, connecting the ERP to customs systems and logistics partners.",
          "Implemented and maintained the internal billing system: invoicing, delinquency control and automated dunning workflows.",
          "Developed CRM features and refactored legacy code with SQL query optimization, reducing technical debt.",
          "Adopted an AI-first workflow with Claude Code and helped build AI agents and automations integrated with the ERP.",
        ],
        tags: ["Ruby on Rails", "PostgreSQL", "Sidekiq", "RSpec", "COMEX", "Claude Code"],
      },
      {
        company: "Prática Certificação Digital", role: "Customer Support Agent", period: "Sep 2023 — Aug 2024", place: "Pelotas, RS",
        bullets: [
          "Technical support for issuing and renewing A1 and A3 digital certificates for individual and corporate customers.",
          "Troubleshot public key infrastructure (PKI) and certificate configuration issues across operating systems and browsers.",
        ],
        tags: ["PKI", "Tech support"],
      },
    ],
    projects: [
      {
        name: "D'ultimahora", kind: "co-founder · lead dev",
        desc: "Peer-to-peer ticket resale marketplace built with Ruby on Rails. Designed the architecture (listings, transactions, users) and integrated an LLM that moderates listings and flags fraud signals before manual review.",
        tags: ["Rails", "LLM", "Marketplace"], link: PROFILE.dultimahora,
      },
      {
        name: "Zimobi", kind: "customer service platform · zimobi",
        desc: "AI-powered omnichannel platform for real estate agencies, built with Ruby on Rails and Vue.js. I work on platform maintenance, bug fixing and new feature development.",
        tags: ["Ruby on Rails", "Vue.js", "WhatsApp", "CRM integrations"], link: "https://zimobi.com.br",
      },
      {
        name: "Mainô ERP", kind: "tax & foreign trade erp · mainô",
        desc: "Tax and foreign trade (COMEX) ERP specialized in imports, built with Ruby on Rails. I developed REST integrations with customs systems and logistics partners, the internal billing system and CRM features.",
        tags: ["Ruby on Rails", "PostgreSQL", "Sidekiq", "COMEX", "Tax"], link: "https://maino.com.br",
      },
      {
        name: "jukeboxdl", kind: "open source · CLI/TUI",
        desc: "Downloads music from YouTube and YouTube Music as tagged MP3, Opus or M4A files, from a terminal UI or plain commands. TypeScript monorepo with Ink, yt-dlp and ffmpeg.",
        tags: ["TypeScript", "Ink", "yt-dlp", "SQLite"], link: "https://github.com/Lusqinha/jukeboxdl",
      },
      {
        name: "PecMan", kind: "open source · bot",
        desc: "Telegram bot for tracking expenses in free text (\"35 groceries\"). Deterministic parsing with regex and keywords; a local LLM is only asked when the category isn't recognized.",
        tags: ["Ruby", "Telegram", "SQLite", "Local LLM"], link: "https://github.com/Lusqinha/ruby-pecmanager",
      },
    ],
    edu: { school: "PUC-RS", course: "Associate Degree in Systems Analysis and Development", period: "Oct 2023 — Jun 2026" },
  },
};

/* textos fixos da interface */
const UI = {
  pt: {
    skip: "pular para o conteúdo",
    teaserOpen: "abrir terminal interativo",
    teaserHint: "clique aqui, aperte <kbd>/</kbd> ou escolha um comando abaixo",
    marquee: "☆ Bem-vindo(a) ao meu portfólio! ☆",
    tagline: "Desenvolvedor Back-end · Ruby on Rails &amp; PHP",
    navTerminal: "[ terminal ]", navSobre: "[ sobre ]", navExp: "[ experiência ]", navProj: "[ projetos ]", navContato: "[ contato ]",
    themeLabel: "tema",
    termHint: "não curte terminal? tudo tá aqui embaixo também ↓",
    reopen: "[ reabrir terminal ]",
    secSobre: "// sobre", secExp: "// experiência", secProj: "// projetos", secEdu: "// formação",
    secAutor: "// autor", secContato: "// contato", secSelos: "// selos",
    ctaCv: "[ ⬇ baixar cv.pdf ]", ctaContato: "[ ✉ falar comigo ]",
    location: "São Lourenço do Sul, RS · Brasil",
    hackathon: "Amante de hackathons",
    status: "aberto a oportunidades",
    visits: "suas visitas aqui:",
    footerKeys: "atalhos: <kbd>/</kbd> foca o terminal · <kbd>Esc</kbd> sai dele",
    viewRepo: "ver no github →", viewSite: "visitar site →",
    copyEmail: "copiar", copied: "e-mail copiado pro clipboard ✓",
    themes: { cosmico: "cósmico", fosforo: "fósforo", ambar: "âmbar" },
  },
  en: {
    skip: "skip to content",
    teaserOpen: "open interactive terminal",
    teaserHint: "click here, press <kbd>/</kbd> or pick a command below",
    marquee: "☆ Welcome to my portfolio! ☆",
    tagline: "Back-end Developer · Ruby on Rails &amp; PHP",
    navTerminal: "[ terminal ]", navSobre: "[ about ]", navExp: "[ experience ]", navProj: "[ projects ]", navContato: "[ contact ]",
    themeLabel: "theme",
    termHint: "not into terminals? everything is down below too ↓",
    reopen: "[ reopen terminal ]",
    secSobre: "// about", secExp: "// experience", secProj: "// projects", secEdu: "// education",
    secAutor: "// author", secContato: "// contact", secSelos: "// badges",
    ctaCv: "[ ⬇ download cv.pdf ]", ctaContato: "[ ✉ get in touch ]",
    location: "São Lourenço do Sul, RS · Brazil",
    hackathon: "Hackathon lover",
    status: "open to opportunities",
    visits: "your visits here:",
    footerKeys: "shortcuts: <kbd>/</kbd> focuses the terminal · <kbd>Esc</kbd> leaves it",
    viewRepo: "view on github →", viewSite: "visit site →",
    copyEmail: "copy", copied: "email copied to clipboard ✓",
    themes: { cosmico: "cosmic", fosforo: "phosphor", ambar: "amber" },
  },
};

/* =====================================================================
 * estado + utilidades
 * ===================================================================== */

const THEMES = ["cosmico", "fosforo", "ambar"];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* modo privado */ } },
};

const state = {
  lang: store.get("lang") || ((navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en"),
  theme: THEMES.includes(store.get("theme")) ? store.get("theme") : "cosmico",
};

const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const t = (k) => UI[state.lang][k];
const data = () => CONTENT[state.lang];

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
}

/* destaca a seção de destino de um link interno */
function flash(el) {
  if (!el.classList.contains("panel")) return;
  el.classList.remove("flash");
  void el.offsetWidth; // reinicia a animação se já estiver rodando
  el.classList.add("flash");
  el.addEventListener("animationend", () => el.classList.remove("flash"), { once: true });
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(PROFILE.email);
    toast(t("copied"));
  } catch {
    window.location.href = "mailto:" + PROFILE.email;
  }
}

/* =====================================================================
 * renderização das seções
 * ===================================================================== */

function tagList(tags) {
  return `<ul class="tags">${tags.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
}

function renderPage() {
  const d = data();
  document.documentElement.lang = state.lang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t(el.dataset.i18n);
    if (v !== undefined) el.innerHTML = v;
  });

  $("#btn-lang").innerHTML = state.lang === "pt"
    ? '[ PT | <span class="dim">EN</span> ]'
    : '[ <span class="dim">PT</span> | EN ]';
  $("#theme-name").textContent = t("themes")[state.theme];

  $("#summary").textContent = d.summary;
  $("#cta-cv").href = PROFILE.cv[state.lang];

  $("#exp-list").innerHTML = d.jobs.map((j) => `
    <li>
      <div class="job-head">
        <h3 class="job-company">${esc(j.company)}</h3>
        <span class="job-role">${esc(j.role)}</span>
      </div>
      <p class="date-stamp">${esc(j.period)} · ${esc(j.place)}</p>
      <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      ${tagList(j.tags)}
    </li>`).join("");

  $("#proj-list").innerHTML = d.projects.map((p) => {
    const link = `<a class="card-link" href="${p.link}" target="_blank" rel="noopener">${p.link.includes("github.com") ? t("viewRepo") : t("viewSite")}</a>`;
    return `
    <article class="card">
      <h3>${esc(p.name)}</h3>
      <p class="kind">${esc(p.kind)}</p>
      <p>${esc(p.desc)}</p>
      ${tagList(p.tags)}
      ${link}
    </article>`;
  }).join("");

  $("#edu").innerHTML = `
    <p class="edu-name">${esc(d.edu.school)}</p>
    <p class="small">${esc(d.edu.course)}</p>
    <p class="date-stamp">${esc(d.edu.period)}</p>`;

  $("#skills").innerHTML = SKILLS.map((g) => `
    <div class="skill-group">
      <h3>${esc(d.skillGroups[g.id])}/</h3>
      ${tagList(g.items)}
    </div>`).join("");

  $("#contact-list").innerHTML = `
    <li><span class="k">email</span> <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>
      · <button type="button" data-copy-email>${t("copyEmail")}</button></li>
    <li><span class="k">github</span> <a href="${PROFILE.github}" target="_blank" rel="noopener">/Lusqinha</a></li>
    <li><span class="k">linkedin</span> <a href="${PROFILE.linkedin}" target="_blank" rel="noopener">/in/lucas-borges-da-silva-rs</a></li>
    <li><span class="k">cv</span> <a href="${PROFILE.cv[state.lang]}" target="_blank" rel="noopener">cv.pdf</a>
      · <a href="${state.lang === "pt" ? CV_BASE : CV_BASE + "en/"}" target="_blank" rel="noopener">html</a></li>
`;

  renderChips();
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  $("#theme-name").textContent = t("themes")[state.theme];
}

function setLang(lang) {
  state.lang = lang;
  store.set("lang", lang);
  renderPage();
}

function setTheme(name) {
  state.theme = name;
  store.set("theme", name);
  applyTheme();
}

/* =====================================================================
 * terminal
 * ===================================================================== */

const out = $("#term-out");
const input = $("#term-input");
const screen = $("#screen");
const history = [];
let histIdx = 0;
let cwd = "~";

function print(html = "", cls = "") {
  const div = document.createElement("div");
  div.className = "line" + (cls ? " " + cls : "");
  div.innerHTML = html;
  out.appendChild(div);
  screen.scrollTop = screen.scrollHeight;
  return div;
}

const c = (cls, s) => `<span class="${cls}">${s}</span>`;
const link = (href, label) => `<a href="${href}" target="_blank" rel="noopener">${esc(label)}</a>`;
const runBtn = (cmd) => `<button type="button" class="t-btn" data-run="${esc(cmd)}">${esc(cmd)}</button>`;

/* textos do terminal por idioma */
const TT = {
  pt: {
    welcome: `Bem-vindo(a)! Digite ${runBtn("help")} pra ver os comandos ou clique nos botões abaixo.`,
    notFound: (cmd) => `bash: ${cmd}: comando não encontrado. Tente ${runBtn("help")}.`,
    helpTitle: "comandos disponíveis:",
    helpFoot: "dica: <Tab> completa, ↑/↓ navegam no histórico, Ctrl+L limpa a tela.",
    noFile: (f) => `cat: ${f}: arquivo ou diretório inexistente`,
    noDir: (d) => `cd: ${d}: diretório inexistente`,
    opening: (x) => `abrindo ${x}...`,
    sudo: "[sudo] senha para visitante: ********\nvisitante não está no arquivo sudoers. Este incidente será reportado. 🚨\n(mas se for pra contratar, use: ",
    hired: "★ Excelente escolha! ★ Mandando um sinal de fumaça pro Lucas...",
    exit: "obrigado pela visita! 👋",
    rm: "boa tentativa. o portfólio sobrevive. 🛡",
    matrix: "acorde, Neo... (clique ou aperte uma tecla pra voltar)",
    secret: "arquivo secreto encontrado ✨\ncuriosidade: este site é HTML, CSS e JavaScript puros, sem framework e sem build.\ncódigo-fonte e outros projetos em github.com/Lusqinha",
    langSet: "idioma: português",
    themeSet: (n) => `tema: ${n}`,
    themeUsage: "uso: theme [cosmico|fosforo|ambar]",
    desc: {
      help: "mostra esta ajuda", whoami: "quem sou eu", exp: "experiência profissional", projects: "projetos",
      skills: "stack técnica", edu: "formação", contact: "contatos", cv: "abre o currículo em PDF",
      email: "copia meu e-mail", neofetch: "info do sistema (com estilo)", ls: "lista arquivos", cat: "lê um arquivo",
      theme: "muda o tema (cosmico|fosforo|ambar)", lang: "muda o idioma (pt|en)", history: "histórico de comandos",
      clear: "limpa a tela", hire: "o melhor comando", matrix: "???", oss: "projetos open source",
    },
  },
  en: {
    welcome: `Welcome! Type ${runBtn("help")} to list commands or click the buttons below.`,
    notFound: (cmd) => `bash: ${cmd}: command not found. Try ${runBtn("help")}.`,
    helpTitle: "available commands:",
    helpFoot: "tip: <Tab> completes, ↑/↓ browse history, Ctrl+L clears the screen.",
    noFile: (f) => `cat: ${f}: no such file or directory`,
    noDir: (d) => `cd: ${d}: no such directory`,
    opening: (x) => `opening ${x}...`,
    sudo: "[sudo] password for guest: ********\nguest is not in the sudoers file. This incident will be reported. 🚨\n(but if you want to hire, use: ",
    hired: "★ Excellent choice! ★ Sending smoke signals to Lucas...",
    exit: "thanks for stopping by! 👋",
    rm: "nice try. the portfolio survives. 🛡",
    matrix: "wake up, Neo... (click or press a key to return)",
    secret: "secret file found ✨\nfun fact: this site is plain HTML, CSS and JavaScript, no framework and no build step.\nsource and other projects at github.com/Lusqinha",
    langSet: "language: english",
    themeSet: (n) => `theme: ${n}`,
    themeUsage: "usage: theme [cosmico|fosforo|ambar]",
    desc: {
      help: "show this help", whoami: "who am I", exp: "work experience", projects: "projects",
      skills: "tech stack", edu: "education", contact: "contact info", cv: "open the PDF résumé",
      email: "copy my email", neofetch: "system info (with style)", ls: "list files", cat: "read a file",
      theme: "change theme (cosmico|fosforo|ambar)", lang: "change language (pt|en)", history: "command history",
      clear: "clear the screen", hire: "the best command", matrix: "???", oss: "open source projects",
    },
  },
};
const tt = () => TT[state.lang];

const FILES = {
  "sobre.txt": "whoami", "about.txt": "whoami",
  "experiencia.log": "exp", "experience.log": "exp",
  "projetos/": "projects", "projects/": "projects",
  "skills.json": "skills", "formacao.md": "edu", "education.md": "edu",
  "contato.vcf": "contact", "contact.vcf": "contact",
  "cv.pdf": "cv",
};

const BANNER = [
  " _    _   _  ___   _   ___ ",
  "| |  | | | |/ __| /_\\ / __|",
  "| |__| |_| | (__ / _ \\\\__ \\",
  "|____|\\___/ \\___/_/ \\_\\___/",
].join("\n");

const CAN = [
  "  ____________  ",
  " |.----------.| ",
  " ||> ruby    || ",
  " ||> rails   || ",
  " ||> php_    || ",
  " ||__________|| ",
  " '------------' ",
  "    _|____|_    ",
  "   [________]   ",
].join("\n");

function section(title) { print(c("t-mag", `── ${title} ` + "─".repeat(Math.max(0, 34 - title.length)))); }

const COMMANDS = {
  help() {
    print(c("t-yel", tt().helpTitle));
    const order = ["whoami", "exp", "projects", "skills", "edu", "contact", "cv", "email", "neofetch", "oss", "ls", "cat", "theme", "lang", "history", "clear", "hire", "matrix"];
    order.forEach((k) => print(`  ${runBtn(k)}${" ".repeat(Math.max(1, 10 - k.length))}${c("t-dim", tt().desc[k])}`));
    print(c("t-dim", esc(tt().helpFoot)));
  },

  whoami() {
    const d = data();
    print(c("t-cyan", PROFILE.name) + c("t-dim", " — ") + c("t-yel", esc(t("tagline").replace("&amp;", "&"))));
    print(c("t-dim", esc(t("location"))));
    print("");
    print(esc(d.summary));
    print("");
    print(`${c("t-grn", "●")} ${esc(t("status"))} — ${runBtn("contact")} · ${runBtn("cv")}`);
  },

  exp() {
    data().jobs.forEach((j, i) => {
      if (i) print("");
      print(`${c("t-cyan", esc(j.company))} ${c("t-dim", "|")} ${c("t-yel", esc(j.role))}`);
      print(c("t-grn", `[${esc(j.period)} · ${esc(j.place)}]`));
      j.bullets.forEach((b) => print(`  ${c("t-mag", "›")} ${esc(b)}`));
    });
  },

  projects() {
    data().projects.forEach((p, i) => {
      if (i) print("");
      print(`${c("t-cyan", "▸ " + esc(p.name))} ${c("t-dim", "(" + esc(p.kind) + ")")}`);
      print("  " + esc(p.desc));
      print("  " + c("t-grn", p.tags.map(esc).join(" · ")) + (p.link ? "  " + link(p.link, p.link.replace("https://", "")) : ""));
    });
  },

  skills() {
    const d = data();
    print(c("t-dim", "{"));
    SKILLS.forEach((g, i) => {
      const items = g.items.map((x) => c("t-grn", `"${esc(x)}"`)).join(", ");
      print(`  ${c("t-cyan", `"${esc(d.skillGroups[g.id])}"`)}: [${items}]${i < SKILLS.length - 1 ? "," : ""}`);
    });
    print(c("t-dim", "}"));
  },

  edu() {
    const e = data().edu;
    print(`${c("t-cyan", esc(e.school))} ${c("t-dim", "|")} ${c("t-yel", esc(e.course))}`);
    print(c("t-grn", `[${esc(e.period)}]`));
  },

  contact() {
    print(`${c("t-mag", "email    ")} <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>  ${runBtn("email")}`);
    print(`${c("t-mag", "github   ")} ${link(PROFILE.github, "github.com/Lusqinha")}`);
    print(`${c("t-mag", "linkedin ")} ${link(PROFILE.linkedin, "linkedin.com/in/lucas-borges-da-silva-rs")}`);
    print(`${c("t-mag", "cv       ")} ${link(PROFILE.cv[state.lang], "cv.pdf")}`);
  },

  cv() {
    print(c("t-dim", tt().opening("cv.pdf")));
    window.open(PROFILE.cv[state.lang], "_blank", "noopener");
  },

  oss() {
    print(c("t-yel", "open source") + c("t-dim", " — github.com/Lusqinha"));
    data().projects.filter((p) => p.link.includes("github.com")).forEach((p) => {
      print(`  ${c("t-cyan", "▸ " + esc(p.name))}  ${link(p.link, p.link.replace("https://", ""))}`);
    });
  },

  email() { copyEmail(); print(c("t-grn", "✓ " + PROFILE.email)); },

  neofetch() {
    const d = data();
    const job = d.jobs[0];
    const info = [
      c("t-cyan", "visitante") + "@" + c("t-mag", "dev"),
      c("t-dim", "─────────────────"),
      `${c("t-yel", "OS")}: LBOS 2026 (Y2K edition)`,
      `${c("t-yel", "Host")}: ${esc(job.company)} · ${esc(job.role)}`,
      `${c("t-yel", "Kernel")}: Ruby on Rails / PHP Laravel`,
      `${c("t-yel", "Open source")}: jukeboxdl, PecMan`,
      `${c("t-yel", "Packages")}: ${SKILLS.reduce((n, g) => n + g.items.length, 0)} (skills)`,
      `${c("t-yel", "DB")}: PostgreSQL, MySQL, Redis`,
      `${c("t-yel", "Shell")}: bash + Claude Code`,
      `${c("t-yel", "Locale")}: ${esc(t("location"))}`,
      "",
      ["#f00", "#ff0", "#0f0", "#0ff", "#00f", "#f0f"].map((col) => `<span style="color:${col}">███</span>`).join(""),
    ];
    const art = CAN.split("\n");
    const rows = Math.max(art.length, info.length);
    let html = "";
    for (let i = 0; i < rows; i++) {
      html += c("t-cyan", esc((art[i] || "").padEnd(17))) + "  " + (info[i] || "") + "\n";
    }
    print(`<pre>${html}</pre>`);
  },

  ls(args) {
    const all = args.includes("-a") || args.includes("-la");
    const names = state.lang === "pt"
      ? ["sobre.txt", "experiencia.log", "projetos/", "skills.json", "formacao.md", "contato.vcf", "cv.pdf"]
      : ["about.txt", "experience.log", "projects/", "skills.json", "education.md", "contact.vcf", "cv.pdf"];
    if (all) names.unshift(".", "..", ".segredo");
    print(names.map((n) => (n.endsWith("/") ? c("t-cyan", n) : n.startsWith(".") ? c("t-dim", n) : runBtn("cat " + n).replace(">cat ", ">"))).join("   "));
  },

  cat(args) {
    const f = args[0];
    if (!f) return print(c("t-dim", "uso: cat <arquivo>"));
    if (f === ".segredo") return print(c("t-yel", esc(tt().secret)));
    const target = FILES[f] || FILES[f + "/"];
    if (!target) return print(c("t-err", esc(tt().noFile(f))));
    COMMANDS[target]([]);
  },

  cd(args) {
    const d = args[0] || "~";
    if (d === "~" || d === "/" || d === "..") { cwd = "~"; }
    else if (["projetos", "projetos/", "projects", "projects/"].includes(d)) { cwd = "~/" + d.replace("/", ""); COMMANDS.projects(); }
    else print(c("t-err", esc(tt().noDir(d))));
    $("#p-path").textContent = cwd;
  },

  pwd() { print("/home/visitante/" + cwd.replace("~", "").replace(/^\//, "")); },

  theme(args) {
    let name = args[0];
    if (!name) name = THEMES[(THEMES.indexOf(state.theme) + 1) % THEMES.length];
    if (!THEMES.includes(name)) return print(c("t-dim", tt().themeUsage));
    setTheme(name);
    print(c("t-grn", tt().themeSet(t("themes")[name])));
  },

  lang(args) {
    const l = args[0] || (state.lang === "pt" ? "en" : "pt");
    if (!["pt", "en"].includes(l)) return print(c("t-dim", "uso: lang [pt|en]"));
    setLang(l);
    print(c("t-grn", tt().langSet));
  },

  history() { history.forEach((h, i) => print(`${c("t-dim", String(i + 1).padStart(4))}  ${esc(h)}`)); },

  clear() { out.innerHTML = ""; },

  echo(args) { print(esc(args.join(" "))); },

  date() { print(new Date().toLocaleString(state.lang === "pt" ? "pt-BR" : "en-US")); },

  banner() { print(`<pre class="t-cyan">${esc(BANNER)}</pre>`); },

  sudo(args) {
    if (args[0] === "hire" || args[0] === "contratar") return COMMANDS.hire();
    print(c("t-err", esc(tt().sudo)) + runBtn("hire") + c("t-err", ")"));
  },

  hire() {
    print(c("t-yel", tt().hired));
    const subject = state.lang === "pt" ? "Oportunidade de trabalho" : "Job opportunity";
    setTimeout(() => { window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}`; }, 600);
  },

  matrix() { print(c("t-grn", tt().matrix)); startMatrix(); },

  exit() { print(c("t-mag", tt().exit)); },

  rm() { print(c("t-err", tt().rm)); },
};

/* apelidos em português e de shell */
const ALIASES = {
  sobre: "whoami", about: "whoami",
  experiencia: "exp", "experiência": "exp", experience: "exp", trabalho: "exp", work: "exp",
  projetos: "projects", proj: "projects",
  stack: "skills", habilidades: "skills",
  formacao: "edu", "formação": "edu", education: "edu",
  contato: "contact", contatos: "contact",
  curriculo: "cv", "currículo": "cv", resume: "cv",
  contratar: "hire", "hire-me": "hire", contrate: "hire",
  opensource: "oss", "open-source": "oss",
  tema: "theme", idioma: "lang", limpar: "clear", cls: "clear", ajuda: "help", "?": "help",
  dir: "ls", "ls -la": "ls", type: "cat", quit: "exit", logout: "exit",
};

const COMPLETIONS = [...Object.keys(COMMANDS), ...Object.keys(ALIASES)].filter((k) => !k.includes(" "));

function run(raw, { echo = true } = {}) {
  const line = raw.trim();
  if (echo) print(`${c("p-user", "lucas")}${c("p-at", "@")}${c("p-host", "dev")}:${c("p-path", esc(cwd))}$ ${c("cmd", esc(line))}`);
  if (!line) return;
  history.push(line);
  histIdx = history.length;

  const [first, ...args] = line.split(/\s+/);
  const name = first.toLowerCase();
  const key = COMMANDS[name] ? name : ALIASES[name];
  if (!key) return print(c("t-err", tt().notFound(esc(first))));
  COMMANDS[key](args);
}

function renderChips() {
  const chips = state.lang === "pt"
    ? [["sobre", "whoami"], ["experiência", "exp"], ["projetos", "projects"], ["stack", "skills"], ["contato", "contact"], ["cv.pdf", "cv"], ["open source", "oss"], ["neofetch", "neofetch"], ["help", "help"]]
    : [["about", "whoami"], ["experience", "exp"], ["projects", "projects"], ["stack", "skills"], ["contact", "contact"], ["cv.pdf", "cv"], ["open source", "oss"], ["neofetch", "neofetch"], ["help", "help"]];
  $("#chips").innerHTML = chips.map(([label, cmd]) => `<button type="button" data-run="${cmd}">${label}</button>`).join("");
}

let autotyping = false;

function typeCommand(cmd) {
  if (autotyping || booting) return;
  if (reducedMotion) return run(cmd);
  autotyping = true;
  input.value = "";
  let i = 0;
  const tick = () => {
    input.value = cmd.slice(0, ++i);
    if (i < cmd.length) setTimeout(tick, 35);
    else setTimeout(() => { input.value = ""; autotyping = false; run(cmd); }, 120);
  };
  tick();
}

function complete() {
  const v = input.value;
  const parts = v.split(/\s+/);
  if (parts.length === 1) {
    const hits = COMPLETIONS.filter((k) => k.startsWith(parts[0].toLowerCase()));
    if (hits.length === 1) input.value = hits[0] + " ";
    else if (hits.length > 1) { print(`${c("t-dim", "$ " + esc(v))}`); print(hits.map(esc).join("   ")); }
  } else if (["cat", "type"].includes(parts[0])) {
    const files = Object.keys(FILES).concat(".segredo");
    const hits = files.filter((f) => f.startsWith(parts[1]));
    if (hits.length === 1) input.value = parts[0] + " " + hits[0];
    else if (hits.length > 1) print(hits.join("   "));
  }
}

$("#term-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const v = input.value;
  input.value = "";
  run(v);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (histIdx > 0) input.value = history[--histIdx];
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (histIdx < history.length - 1) input.value = history[++histIdx];
    else { histIdx = history.length; input.value = ""; }
  } else if (e.key === "Tab") {
    e.preventDefault();
    complete();
  } else if (e.key === "l" && e.ctrlKey) {
    e.preventDefault();
    COMMANDS.clear();
  } else if (e.key === "Escape") {
    input.blur();
  }
});

screen.addEventListener("click", (e) => {
  if (!window.getSelection().toString() && !e.target.closest("a, button")) input.focus({ preventScroll: true });
});

document.addEventListener("click", (e) => {
  const r = e.target.closest("[data-run]");
  if (r) return r.closest("#chips") ? openTerminal(r.dataset.run) : run(r.dataset.run);
  const anchor = e.target.closest('a[href^="#"]');
  if (anchor && anchor.getAttribute("href").length > 1) {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.history.replaceState(null, "", anchor.getAttribute("href"));
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
      flash(target);
    }
    return;
  }
  if (e.target.closest("[data-copy-email]")) copyEmail();
});

/* janela: começa minimizada; o boot roda na primeira vez que é aberta */
const win = $("#terminal");
const finePointer = window.matchMedia("(pointer: fine)").matches;
let booted = false;

function openTerminal(cmd) {
  win.hidden = false;
  $(".term-hint").hidden = false;
  $(".reopen").hidden = true;
  win.classList.remove("collapsed");
  if (!booted) {
    booted = true;
    boot().then(() => setTimeout(() => typeCommand(cmd || "whoami"), reducedMotion ? 0 : 300));
  } else if (cmd) {
    typeCommand(cmd);
  }
  // no celular, focar abriria o teclado virtual por cima da saída
  if (finePointer || !cmd) input.focus({ preventScroll: true });
}

function collapseTerminal() {
  win.classList.add("collapsed");
  win.classList.remove("maximized");
  document.body.style.overflow = "";
}

$("#term-teaser").addEventListener("click", () => openTerminal());
$(".titlebar").addEventListener("click", (e) => {
  if (win.classList.contains("collapsed") && !e.target.closest("button")) openTerminal();
});
$("#win-min").addEventListener("click", () => (win.classList.contains("collapsed") ? openTerminal() : collapseTerminal()));
$("#win-max").addEventListener("click", () => {
  if (win.classList.contains("collapsed")) openTerminal();
  win.classList.toggle("maximized");
  document.body.style.overflow = win.classList.contains("maximized") ? "hidden" : "";
  input.focus();
});
$("#win-close").addEventListener("click", () => {
  win.hidden = true;
  win.classList.remove("maximized");
  document.body.style.overflow = "";
  $(".term-hint").hidden = true;
  $(".reopen").hidden = false;
});
$("#win-reopen").addEventListener("click", () => openTerminal());

/* atalhos globais */
const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let konamiPos = 0;

document.addEventListener("keydown", (e) => {
  konamiPos = e.key === KONAMI[konamiPos] ? konamiPos + 1 : (e.key === KONAMI[0] ? 1 : 0);
  if (konamiPos === KONAMI.length) { konamiPos = 0; startMatrix(); }

  const typing = /input|textarea/i.test(document.activeElement.tagName);
  if (e.key === "/" && !typing) {
    e.preventDefault();
    win.scrollIntoView({ block: "center" });
    openTerminal();
  }
  if (e.key === "Escape" && win.classList.contains("maximized")) $("#win-max").click();
});

$("#btn-lang").addEventListener("click", () => setLang(state.lang === "pt" ? "en" : "pt"));
$("#btn-theme").addEventListener("click", () => setTheme(THEMES[(THEMES.indexOf(state.theme) + 1) % THEMES.length]));

/* =====================================================================
 * efeitos: matrix, contador, boot do terminal
 * ===================================================================== */

function startMatrix() {
  const cv = $("#matrix");
  if (!cv.hidden) return;
  cv.hidden = false;
  const ctx = cv.getContext("2d");
  const size = 16;
  let cols, drops, raf;
  const resize = () => {
    cv.width = innerWidth; cv.height = innerHeight;
    cols = Math.ceil(cv.width / size);
    drops = Array.from({ length: cols }, () => Math.random() * -50);
  };
  resize();
  const glyphs = "アイウエオカキクケコサシスセソタチツテトナニヌネノRAILSRUBY01$#@";
  const color = getComputedStyle(document.documentElement).getPropertyValue("--green").trim() || "#0f0";
  let last = 0;
  const frame = (ts) => {
    raf = requestAnimationFrame(frame);
    if (ts - last < 45) return;
    last = ts;
    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = color;
    ctx.font = size + "px monospace";
    drops.forEach((y, i) => {
      ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], i * size, y * size);
      drops[i] = y * size > cv.height && Math.random() > 0.975 ? 0 : y + 1;
    });
  };
  raf = requestAnimationFrame(frame);
  const stop = () => {
    cancelAnimationFrame(raf);
    cv.hidden = true;
    removeEventListener("resize", resize);
    removeEventListener("keydown", stop);
    cv.removeEventListener("click", stop);
  };
  addEventListener("resize", resize);
  setTimeout(() => { addEventListener("keydown", stop); cv.addEventListener("click", stop); }, 300);
  if (reducedMotion) setTimeout(stop, 1500);
}

function initCounter() {
  const n = (parseInt(store.get("visits") || "0", 10) || 0) + 1;
  store.set("visits", String(n));
  $("#counter").textContent = String(n).padStart(6, "0");
}

const BOOT_LINES = {
  pt: [
    "LBOS BIOS v2.0.26  (C) 1998-2026 Lucas Borges",
    "",
    "CPU: Ruby 3 @ 4.77 MHz ........................ <ok>OK</ok>",
    "Memória: 640K ...................... deve bastar pra qualquer um",
    "Detectando IDE: PostgreSQL, Redis, Sidekiq .... <ok>OK</ok>",
    "Teclado <ok>OK</ok>   Mouse <ok>OK</ok>   Rede <ok>OK</ok>",
    "",
    "Carregando PORTFOLIO.EXE ...",
  ],
  en: [
    "LBOS BIOS v2.0.26  (C) 1998-2026 Lucas Borges",
    "",
    "CPU: Ruby 3 @ 4.77 MHz ........................ <ok>OK</ok>",
    "Memory: 640K ................. ought to be enough for anybody",
    "Detecting IDE: PostgreSQL, Redis, Sidekiq ..... <ok>OK</ok>",
    "Keyboard <ok>OK</ok>   Mouse <ok>OK</ok>   Network <ok>OK</ok>",
    "",
    "Loading PORTFOLIO.EXE ...",
  ],
};

let booting = false;

function intro() {
  print(`<pre class="t-cyan">${esc(BANNER)}</pre>`);
  print(c("t-dim", "LBOS 2026 · tty1 · " + new Date().toLocaleDateString(state.lang === "pt" ? "pt-BR" : "en-US")));
  print(tt().welcome);
  print("");
}

/* POST da BIOS dentro do terminal, depois limpa e mostra o banner */
function boot() {
  const lines = BOOT_LINES[state.lang].map((l) => esc(l).replace(/&lt;ok&gt;(.*?)&lt;\/ok&gt;/g, '<span class="t-grn">$1</span>'));
  if (reducedMotion) { intro(); return Promise.resolve(); }
  booting = true;
  input.disabled = true;
  return new Promise((resolve) => {
    let i = 0;
    const next = () => {
      if (i < lines.length) { print(lines[i++], "t-dim"); setTimeout(next, 110 + Math.random() * 110); return; }
      setTimeout(() => {
        COMMANDS.clear();
        intro();
        booting = false;
        input.disabled = false;
        if (document.activeElement === document.body || finePointer) input.focus({ preventScroll: true });
        resolve();
      }, 450);
    };
    next();
  });
}

/* =====================================================================
 * início
 * ===================================================================== */

applyTheme();
renderPage();
initCounter();

