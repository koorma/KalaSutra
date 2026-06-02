// Shared artwork data + rendering for KalaSutra (preview site)
// Images are public-domain works served live from Wikimedia Commons.
// Special:FilePath always redirects to the current file, so links stay valid.
function imgURL(file){
  return "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(file) + "?width=900";
}

// Neutral fallback shown only if an image fails to load
const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'><rect width='400' height='500' fill='#f4f4f4'/><text x='200' y='250' font-family='Georgia' font-size='17' fill='#bbb' text-anchor='middle'>Artwork</text></svg>");

const ARTWORKS = [
  // ——— Indian ———
  {id:0, title:"Bani Thani", artist:"Kishangarh School · c. 1750", price:"₹ 64,000", cat:"Indian",
   medium:"Opaque watercolour & gold on paper", size:"48 × 36 cm", year:"c. 1750",
   file:"4 Radha (Bani Thani), Kishangarh, ca. 1750, National Museum New Delhi.jpg"},
  {id:1, title:"Radha & Krishna", artist:"Kangra School · Pahari", price:"₹ 58,000", cat:"Indian",
   medium:"Watercolour & gold on paper", size:"42 × 30 cm", year:"18th c.",
   file:"Krishna and Radha, Kangra school, watercolor and gold, Tokyo National Museum.JPG"},
  {id:2, title:"Jayadeva Worships Radha & Krishna", artist:"Pahari School · c. 1730", price:"₹ 71,000", cat:"Indian",
   medium:"Opaque watercolour on paper", size:"40 × 28 cm", year:"c. 1730",
   file:"Poet Jayadeva worshipping Radha and Krishna.jpg"},

  // ——— Chinese ———
  {id:3, title:"Along the River at Qingming", artist:"After Zhang Zeduan · Song dynasty", price:"₹ 1,40,000", cat:"Chinese",
   medium:"Ink & colour on silk handscroll", size:"24 × 528 cm", year:"12th c.",
   file:"Alongtheriver QingMing.jpg"},
  {id:4, title:"Auspicious Cranes", artist:"Emperor Huizong · Song dynasty", price:"₹ 96,000", cat:"Chinese",
   medium:"Ink & colour on silk", size:"51 × 138 cm", year:"1112",
   file:"Auspicious Cranes.jpg"},
  {id:5, title:"Classic of Filial Piety (detail)", artist:"Li Gonglin · Song dynasty", price:"₹ 82,000", cat:"Chinese",
   medium:"Ink on silk handscroll", size:"22 × 70 cm", year:"11th c.",
   file:"Li Kung-lin 001.jpg"},

  // ——— Buddhist ———
  {id:6, title:"Green Tara", artist:"Nepalese Thangka · Kathmandu Valley", price:"₹ 88,000", cat:"Buddhist",
   medium:"Distemper on cotton (thangka)", size:"70 × 52 cm", year:"13th c.",
   file:"Old Green Tara.JPG"},
  {id:7, title:"Buddha Shakyamuni", artist:"Tibetan Thangka", price:"₹ 76,000", cat:"Buddhist",
   medium:"Pigment on cloth (thangka)", size:"66 × 48 cm", year:"15th c.",
   file:"Buddha Shakyamuni LACMA M.79.83 (2 of 3).jpg"},
  {id:8, title:"Mandala of Vajradhatu", artist:"Tibetan Thangka", price:"₹ 92,000", cat:"Buddhist",
   medium:"Mineral pigment on cotton", size:"60 × 60 cm", year:"14th c.",
   file:"Mandala of Vajradhatu.JPG"},

  // ——— Central Asian ———
  {id:9, title:"Uighur Princesses, Bezeklik", artist:"Bezeklik Caves · Turfan", price:"₹ 1,10,000", cat:"Central Asian",
   medium:"Wall painting fragment", size:"62 × 59 cm", year:"8th–9th c.",
   file:"Uighur princesses, Bezeklik, Cave 9, c. 8th-9th century AD, wall painting - Ethnological Museum, Berlin - DSC01749.JPG"},
  {id:10, title:"Pranidhi Scene, Temple 9", artist:"Bezeklik Caves · Turfan", price:"₹ 1,18,000", cat:"Central Asian",
   medium:"Wall painting", size:"Large fresco", year:"9th–11th c.",
   file:"Bezeklik caves, Pranidhi scene 14, temple 9.JPG"},
  {id:11, title:"Uighur Princes, Bezeklik", artist:"Bezeklik Caves · Turfan", price:"₹ 1,06,000", cat:"Central Asian",
   medium:"Wall painting fragment", size:"62 × 59 cm", year:"8th–9th c.",
   file:"Uighur princes, Bezeklik, Cave 9, c. 8th-9th century AD, wall painting - Ethnological Museum, Berlin - DSC01747.JPG"}
];

function renderCards(container, items){
  if(!container) return;
  container.innerHTML = items.map(a => `
    <a class="card" href="artwork.html?id=${a.id}">
      <img class="art" loading="lazy" src="${imgURL(a.file)}" alt="${a.title} — ${a.artist}" onerror="this.onerror=null;this.src=PLACEHOLDER">
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
