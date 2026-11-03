/* ─── ВКЛАДКИ ─── */
const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    if (tab.classList.contains("active")) return;
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const target = document.getElementById(tab.dataset.tab);
    sections.forEach(s => {
      if (s.classList.contains("active")) {
        s.style.opacity = "0";
        s.style.transform = "translateY(10px)";
        setTimeout(() => {
          s.classList.remove("active");
          s.style.opacity = "";
          s.style.transform = "";
        }, 200);
      }
    });
    setTimeout(() => {
      target.classList.add("active");
      target.style.opacity = "0";
      target.style.transform = "translateY(20px)";
      void target.offsetWidth;
      target.style.transition = "opacity 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)";
      target.style.opacity = "1";
      target.style.transform = "translateY(0)";
      if (tab.dataset.tab === "map" && typeof map !== "undefined") {
        setTimeout(() => map.invalidateSize(), 100);
      }
    }, 180);
  });
});
/* ─── карта ─── */
const map = L.map("map-container", {
  minZoom: 2,
  maxZoom: 18,
  maxBounds: [
    [-85, -180],
    [85, 180]
  ],
  maxBoundsViscosity: 1.0,
  worldCopyJump: false,
  zoomControl: true
}).setView([48, 20], 3);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap",
  maxZoom: 18,
  noWrap: true
}).addTo(map);
const places = [
  {
    coords: [59.9311, 30.3609],
    title: "«Брат»",
    info: "Санкт-Петербург — город, где происходит действие фильма Алексея Балабанова."
  },
  {
    coords: [40.7128, -74.006],
    title: "«Мстители»",
    info: "Нью-Йорк — финальная битва с Локи и читаури. Также тут находится башня Мстителей."
  },
  {
    coords: [43.2965, 5.3698],
    title: "«Такси»",
    info: "Марсель, Франция — место действия культовой комедии Люка Бессона."
  },
  {
    coords: [51.752, -1.2577],
    title: "«Гарри Поттер»",
    info: "Оксфорд — здесь снимали сцены Хогвартса."
  },
  {
    coords: [51.5237, -0.1585],
    title: "«Шерлок»",
    info: "Бейкер-стрит, 221Б, Лондон — дом Шерлока Холмса."
  },
  {
    coords: [-44.6833, 169.1667],
    title: "«Властелин колец»",
    info: "Хоббитон, Новая Зеландия — съёмки Шира."
  },
  {
    coords: [41.9028, 12.4964],
    title: "«Римские каникулы»",
    info: "Рим, Италия — классика с Одри Хепбёрн."
  },
  {
    coords: [48.8566, 2.3522],
    title: "«Амели»",
    info: "Париж — место действия знаменитого французского фильма."
  },
  {
    coords: [55.7558, 37.6173],
    title: "«Ночной дозор»",
    info: "Москва — российский фэнтези-блокбастер Тимура Бекмамбетова."
  },
  {
    coords: [-33.8688, 151.2093],
    title: "«В поисках Немо»",
    info: "Сидней, Австралия — гавань, откуда началось путешествие Марлина."
  },
  {
    coords: [35.6762, 139.6503],
    title: "«Форсаж: Токио дрифт»",
    info: "Токио, Япония — гонки по ночным улицам."
  },
  {
    coords: [25.2048, 55.2708],
    title: "«Миссия невыполнима»",
    info: "Дубай, ОАЭ — знаменитая сцена на Бурдж-Халифе."
  }
];
places.forEach(place => {
  L.marker(place.coords)
    .addTo(map)
    .bindPopup(`<b>${place.title}</b><br>${place.info}`);
});
/* ─── новости ─── */
const newsList = document.getElementById("news-list");
news.forEach(n => {
  const card = document.createElement("div");
  card.className = "news-card fx-btn";
  card.innerHTML = `
    <div class="news-date">${n.date} • ${n.tag}</div>
    <h3>${n.title}</h3>
    <p>${n.text}</p>
  `;
  newsList.appendChild(card);
});
/* ─── подбор ─── */
const answers = {};
const optionButtons = document.querySelectorAll(".option");
const submitBtn = document.getElementById("submit");
const resultEl = document.getElementById("result");
const cardsEl = document.getElementById("cards");
const restartBtn = document.getElementById("restart");
const TOTAL = 6;
function getMaxScore() {
  return Object.keys(answers).reduce(
    (sum, key) => sum + (key === "type" ? 2 : 1),
    0
  );
}
optionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const q = btn.dataset.q;
    document
      .querySelectorAll(`.option[data-q="${q}"]`)
      .forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    answers[q] = btn.dataset.v;
    if (Object.keys(answers).length === TOTAL) submitBtn.disabled = false;
  });
});
submitBtn.addEventListener("click", () => {
  const scored = recommendations.map(item => {
    let score = 0;
    for (const key in answers) {
      if (key === "type") {
        if (answers.type === "any" || item.type === answers.type) score += 2;
      } else if (item.tags[key] === answers[key]) {
        score += 1;
      }
    }
    return { ...item, score };
  });
  scored.sort((a, b) => b.score - a.score);
  let top = scored.filter(i => i.score > 0).slice(0, 3);
  if (!top.length) top = scored.slice(0, 3);
  const maxScore = getMaxScore();
  cardsEl.innerHTML = "";
  top.forEach(item => {
    const card = document.createElement("div");
    card.className = "card fx-btn";
    card.innerHTML = `
      <h3>${item.type === "movie" ? "🎥" : "📚"} ${item.title}</h3>
      <p>${item.desc}</p>
      <div class="meta">Совпадение: ${item.score}/${maxScore}</div>
    `;
    cardsEl.appendChild(card);
  });
  resultEl.classList.remove("hidden");
  submitBtn.classList.add("hidden");
});
restartBtn.addEventListener("click", () => {
  Object.keys(answers).forEach(k => delete answers[k]);
  document.querySelectorAll(".option").forEach(b => b.classList.remove("selected"));
  submitBtn.disabled = true;
  submitBtn.classList.remove("hidden");
  resultEl.classList.add("hidden");
});
/* ─── история ─── */
const timeline = document.getElementById("timeline");
history.forEach(item => {
  const el = document.createElement("div");
  el.className = "timeline-item fx-btn";
  el.innerHTML = `
    <div class="timeline-year">${item.year}</div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  `;
  timeline.appendChild(el);
});
