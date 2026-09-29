const portfolio = {
  nav: [{ label: "Hakkımda", href: "#hakkimda" }, { label: "Teknolojiler", href: "#teknolojiler" }, { label: "Projeler", href: "#projeler" }, { label: "Eğitim", href: "#egitim" }],
  stats: [{ value: "4+", label: "Yıl deneyim" }, { value: "18", label: "Tamamlanan proje" }, { value: "∞", label: "Öğrenme isteği" }],
  skills: [
    { icon: "☕", name: "Java", type: "Backend", text: "Güvenilir ve sürdürülebilir uygulamalar" },
    { icon: "◈", name: "Spring Boot", type: "Backend", text: "Ölçeklenebilir REST servisleri" },
    { icon: "▣", name: "PostgreSQL", type: "Database", text: "İlişkisel veri ve performans" },
    { icon: "◆", name: "Docker", type: "DevOps", text: "Her ortamda tutarlı deploy" },
    { icon: "⌘", name: "Python", type: "Backend", text: "Otomasyon ve veri odaklı çözümler" },
    { icon: "C", name: "C", type: "Core", text: "Güçlü temeller ve sistem programlama" }
  ],
  projects: [
    { title: "Finans Akış", description: "Kişisel finans yönetimini kolaylaştıran, güvenli ve hızlı bir mikroservis platformu.", tags: ["Java", "Spring Boot", "PostgreSQL"], category: "Backend", color: "violet", year: "2024", link: "https://github.com/" },
    { title: "Deployly", description: "Ekiplerin CI/CD süreçlerini tek panelden takip etmesini sağlayan geliştirici aracı.", tags: ["Docker", "Python", "React"], category: "DevOps", color: "mint", year: "2023", link: "https://github.com/" },
    { title: "Study Buddy", description: "Öğrencilerin çalışma rutinlerini planladığı ve ilerlemelerini görselleştirdiği web uygulaması.", tags: ["Java", "Spring Boot", "JavaScript"], category: "Full Stack", color: "amber", year: "2023", link: "https://github.com/" },
    { title: "IoT Monitor", description: "Düşük kaynaklı cihazlardan gelen sensör verilerini gerçek zamanlı izleme sistemi.", tags: ["C", "Python", "MQTT"], category: "Systems", color: "blue", year: "2022", link: "https://github.com/" }
  ],
  education: [{ date: "2017 — 2021", school: "İstanbul Teknik Üniversitesi", degree: "Bilgisayar Mühendisliği", detail: "Lisans · 3.42 / 4.00" }, { date: "2022", school: "Patika.dev", degree: "Java Backend Web Development", detail: "Profesyonel gelişim programı" }],
  socials: [{ name: "GitHub", href: "https://github.com/" }, { name: "LinkedIn", href: "https://linkedin.com/" }, { name: "Twitter / X", href: "https://x.com/" }],
  email: "hello@denizkaya.dev"
};

const $ = (selector) => document.querySelector(selector);
const icon = (name) => ({ Backend: "⌁", DevOps: "◌", Database: "▦", Core: "⌘", "Full Stack": "✦", Systems: "◈" }[name] || "✦");

$("#desktop-nav").innerHTML = portfolio.nav.map((item) => `<a href="${item.href}" class="transition hover:text-mint">${item.label}</a>`).join("");
$("#mobile-nav").innerHTML = portfolio.nav.map((item) => `<a href="${item.href}" class="block border-b border-line py-3 text-sm text-slate-300">${item.label}</a>`).join("");
$("#stats").innerHTML = portfolio.stats.map((stat) => `<div><strong class="font-display text-2xl text-white">${stat.value}</strong><p class="mt-1 text-xs text-slate-500">${stat.label}</p></div>`).join("");
$("#skills").innerHTML = portfolio.skills.map((skill) => `<article class="skill-card reveal rounded-xl border border-line bg-panel/70 p-5"><div class="flex items-start justify-between"><span class="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-xl text-mint">${skill.icon}</span><span class="font-mono text-[10px] uppercase tracking-widest text-slate-600">${skill.type}</span></div><h3 class="mt-5 font-display text-lg font-bold text-white">${skill.name}</h3><p class="mt-2 text-sm text-slate-500">${skill.text}</p></article>`).join("");

const filters = ["Tümü", ...new Set(portfolio.projects.map((project) => project.category))];
$("#filters").innerHTML = filters.map((filter, index) => `<button data-filter="${filter}" class="filter-btn rounded-full border px-4 py-2 text-xs font-semibold transition ${index === 0 ? "border-mint bg-mint text-ink" : "border-line text-slate-400 hover:border-mint/50 hover:text-mint"}">${filter}</button>`).join("");
const renderProjects = (filter = "Tümü") => {
  $("#projects").innerHTML = portfolio.projects.filter((project) => filter === "Tümü" || project.category === filter).map((project) => `<article class="project-card reveal group rounded-2xl border border-line bg-panel/70 p-6"><div class="flex items-center justify-between"><span class="grid h-11 w-11 place-items-center rounded-xl ${project.color === "mint" ? "bg-mint/10 text-mint" : project.color === "amber" ? "bg-amber-300/10 text-amber-300" : project.color === "blue" ? "bg-sky-300/10 text-sky-300" : "bg-violet/10 text-violet"} text-xl">${icon(project.category)}</span><span class="font-mono text-xs text-slate-600">${project.year}</span></div><h3 class="mt-8 font-display text-2xl font-bold text-white">${project.title}</h3><p class="mt-3 min-h-14 text-sm leading-6 text-slate-400">${project.description}</p><div class="mt-6 flex flex-wrap gap-2">${project.tags.map((tag) => `<span class="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-400">${tag}</span>`).join("")}</div><a href="${project.link}" target="_blank" rel="noreferrer" class="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition group-hover:text-mint">Projeyi incele <span>↗</span></a></article>`).join("");
  observeReveals();
};
renderProjects();
$("#education").innerHTML = portfolio.education.map((item) => `<div class="reveal grid gap-3 border-t border-line py-7 sm:grid-cols-[180px_1fr]"><p class="font-mono text-xs text-mint">${item.date}</p><div><h3 class="font-display text-xl font-bold text-white">${item.school}</h3><p class="mt-2 text-slate-300">${item.degree}</p><p class="mt-1 text-sm text-slate-500">${item.detail}</p></div></div>`).join("");
$("#socials").innerHTML = portfolio.socials.map((social) => `<a href="${social.href}" target="_blank" rel="noreferrer" class="text-sm text-slate-500 transition hover:text-mint">${social.name} ↗</a>`).join("");
$("#email-link").href = `mailto:${portfolio.email}`;
$("#email-text").textContent = portfolio.email;
$("#year").textContent = new Date().getFullYear();

document.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-btn");
  if (button) {
    document.querySelectorAll(".filter-btn").forEach((item) => item.className = "filter-btn rounded-full border border-line px-4 py-2 text-xs font-semibold text-slate-400 transition hover:border-mint/50 hover:text-mint");
    button.className = "filter-btn rounded-full border border-mint bg-mint px-4 py-2 text-xs font-semibold text-ink transition";
    renderProjects(button.dataset.filter);
  }
});

const menuToggle = $("#menu-toggle");
menuToggle.addEventListener("click", () => {
  const isOpen = !$("#mobile-nav").classList.toggle("hidden");
  menuToggle.setAttribute("aria-expanded", isOpen);
});
$("#mobile-nav").addEventListener("click", () => { $("#mobile-nav").classList.add("hidden"); menuToggle.setAttribute("aria-expanded", "false"); });

let observer;
function observeReveals() {
  if (!observer) {
    observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); }), { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal:not(.visible)").forEach((element) => observer.observe(element));
}
observeReveals();
