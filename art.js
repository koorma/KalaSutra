// Shared artwork data + rendering for KalaSutra (preview site)
const PALETTES = [
  ["#d8c3a5","#a3927b","#6f5740"],
  ["#cfd8d0","#9fb0a3","#5e6f63"],
  ["#e7d8c9","#c9a98b","#8a6b4f"],
  ["#d6d2c4","#b0a890","#7a7259"],
  ["#e3dcd2","#b9a48e","#7c6450"],
  ["#cdd3d8","#9aa3ab","#5f6870"],
  ["#e8dcc8","#c2a378","#8f6f45"],
  ["#dcd4cc","#a89c8d","#6e6155"],
  ["#d2c7bb","#9c8e7e","#675a4b"]
];

// builds a calm abstract "painting" as an inline SVG data URI
function artSVG(seed){
  const p = PALETTES[seed % PALETTES.length];
  const styles = [
    `<rect width='400' height='500' fill='${p[0]}'/><circle cx='200' cy='250' r='130' fill='${p[1]}'/><circle cx='200' cy='250' r='70' fill='${p[2]}'/>`,
    `<rect width='400' height='500' fill='${p[0]}'/><rect x='0' y='0' width='400' height='250' fill='${p[1]}'/><rect x='120' y='120' width='160' height='260' fill='${p[2]}'/>`,
    `<rect width='400' height='500' fill='${p[1]}'/><path d='M0 380 Q200 240 400 380 L400 500 L0 500 Z' fill='${p[2]}'/><circle cx='300' cy='120' r='55' fill='${p[0]}'/>`,
    `<rect width='400' height='500' fill='${p[0]}'/><polygon points='200,60 340,440 60,440' fill='${p[2]}'/><polygon points='200,160 280,410 120,410' fill='${p[1]}'/>`,
    `<rect width='400' height='500' fill='${p[2]}'/><rect x='40' y='40' width='320' height='420' fill='none' stroke='${p[0]}' stroke-width='18'/><line x1='40' y1='250' x2='360' y2='250' stroke='${p[1]}' stroke-width='14'/>`
  ];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'>${styles[seed % styles.length]}</svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const ARTWORKS = [
  {id:0, title:"Still Morning", artist:"Aiko Tanaka", price:"₹ 18,500", cat:"Painting", medium:"Acrylic on canvas", size:"60 × 90 cm", year:"2025"},
  {id:1, title:"Folded Light", artist:"Ravi Menon", price:"₹ 24,000", cat:"Painting", medium:"Oil on linen", size:"70 × 100 cm", year:"2024"},
  {id:2, title:"Quiet Vessel", artist:"Mira Sen", price:"₹ 31,000", cat:"Sculpture", medium:"Stoneware ceramic", size:"32 × 18 cm", year:"2025"},
  {id:3, title:"Earth Study No.4", artist:"Kenji Mori", price:"₹ 14,200", cat:"Painting", medium:"Mixed media", size:"50 × 50 cm", year:"2025"},
  {id:4, title:"Threshold", artist:"Leela Nair", price:"₹ 27,800", cat:"Painting", medium:"Acrylic & sand", size:"80 × 110 cm", year:"2023"},
  {id:5, title:"Grey Tide", artist:"Sora Ito", price:"₹ 9,900", cat:"Print", medium:"Giclée print, ed. 12", size:"40 × 60 cm", year:"2025"},
  {id:6, title:"Two Stones", artist:"Mira Sen", price:"₹ 42,000", cat:"Sculpture", medium:"Carved teak & bronze", size:"45 × 22 cm", year:"2024"},
  {id:7, title:"Warm Field", artist:"Ravi Menon", price:"₹ 16,400", cat:"Painting", medium:"Oil on board", size:"55 × 70 cm", year:"2025"},
  {id:8, title:"Paper Horizon", artist:"Aiko Tanaka", price:"₹ 11,300", cat:"Print", medium:"Woodblock print", size:"42 × 59 cm", year:"2024"}
];

function renderCards(container, items){
  if(!container) return;
  container.innerHTML = items.map(a => `
    <a class="card" href="artwork.html?id=${a.id}">
      <img class="art" src="${artSVG(a.id)}" alt="${a.title} by ${a.artist}">
      <div class="card-body">
        <div class="title">${a.title}</div>
        <div class="artist">${a.artist}</div>
        <div class="row">
          <span class="price">${a.price}</span>
          <span class="tag">${a.cat}</span>
        </div>
      </div>
    </a>`).join("");
}
