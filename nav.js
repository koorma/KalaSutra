// Shared KalaSutra header + mega navigation (rendered on every page)
(function(){
  var G = "gallery.html";
  var NAV = [
    {label:"Shop", drop:[
      {label:"All Artworks", href:G},
      {label:"Indian Art", href:G+"?cat=Indian"},
      {label:"Chinese Art", href:G+"?cat=Chinese"},
      {label:"Buddhist Art", href:G+"?cat=Buddhist"},
      {label:"Central Asian Art", href:G+"?cat=Central%20Asian"},
      {label:"Shop by Budget", sub:[
        {label:"Under ₹ 50,000", href:G},
        {label:"₹ 50,000 – 1,00,000", href:G},
        {label:"Above ₹ 1,00,000", href:G}
      ]},
      {label:"Shop by Room", sub:[
        {label:"Living Room", href:G},
        {label:"Bedroom", href:G},
        {label:"Study / Office", href:G},
        {label:"Entryway", href:G}
      ]},
      {label:"Curated Art Sets", href:G},
      {label:"Gifts & Souvenirs", href:G},
      {label:"Gift Cards", href:"#"}
    ]},
    {label:"Ready to Ship", href:G},
    {label:"Editor's Picks", href:G},
    {label:"Best Selling", href:G},
    {label:"Top Traditions", drop:[
      {label:"Indian Miniatures", href:G+"?cat=Indian"},
      {label:"Pahari Painting", href:G+"?cat=Indian"},
      {label:"Kishangarh School", href:G+"?cat=Indian"},
      {label:"Chinese Scrolls", href:G+"?cat=Chinese"},
      {label:"Song Dynasty", href:G+"?cat=Chinese"},
      {label:"Tibetan Thangka", href:G+"?cat=Buddhist"},
      {label:"Mandala Art", href:G+"?cat=Buddhist"},
      {label:"Bezeklik Murals", href:G+"?cat=Central%20Asian"},
      {label:"More Traditions", href:G}
    ]},
    {label:"Top Artists", drop:[
      {label:"Kishangarh School", href:G+"?cat=Indian"},
      {label:"Kangra School", href:G+"?cat=Indian"},
      {label:"Emperor Huizong", href:G+"?cat=Chinese"},
      {label:"Li Gonglin", href:G+"?cat=Chinese"},
      {label:"Tibetan Thangka Masters", href:G+"?cat=Buddhist"},
      {label:"Bezeklik Workshop", href:G+"?cat=Central%20Asian"},
      {label:"All Artists", href:G}
    ]},
    {label:"Discover Heritage", drop:[
      {label:"Blog", href:"#"},
      {label:"Guides", href:"#"},
      {label:"Learn Indian Art", sub:[
        {label:"Miniature Painting", href:"#"},
        {label:"Thangka Tradition", href:"#"},
        {label:"Chinese Scroll Art", href:"#"}
      ]},
      {label:"News & Events", href:"#"},
      {label:"Artists on KalaSutra", href:G},
      {label:"Try Artworks in Your Room", href:"#"},
      {label:"About Us", href:"#"}
    ]},
    {label:"For Businesses", drop:[
      {label:"Architects & Designers", href:"#"},
      {label:"Corporates & Businesses", href:"#"},
      {label:"Schools & Colleges", href:"#"},
      {label:"Exhibitions", href:"#"}
    ]},
    {label:"Sell Your Art", href:"login.html", cta:true}
  ];

  var here = (location.pathname.split('/').pop() || 'index.html');

  function itemHTML(it){
    if(it.sub){
      var subs = it.sub.map(function(s){return '<a href="'+s.href+'">'+s.label+'</a>';}).join('');
      return '<div class="has-sub"><a href="#">'+it.label+'<span class="arr">›</span></a><div class="submenu">'+subs+'</div></div>';
    }
    return '<a href="'+it.href+'">'+it.label+'</a>';
  }

  function tabHTML(t){
    var active = (t.href && t.href.split('?')[0] === here) ? ' active' : '';
    var cls = 'tab'+active+(t.cta?' cta':'');
    if(t.drop){
      var menu = t.drop.map(itemHTML).join('');
      return '<div class="'+cls+'"><span>'+t.label+'<span class="caret">▼</span></span><div class="menu">'+menu+'</div></div>';
    }
    return '<div class="'+cls+'"><a href="'+t.href+'">'+t.label+'</a></div>';
  }

  var html =
    '<div class="promo">✨ Free preview · Worldwide shipping · Handpicked heritage art from across Asia</div>'+
    '<header class="site">'+
      '<div class="wrap topbar">'+
        '<a href="index.html" class="brand">Kala<span>Sutra</span></a>'+
        '<div class="searchbar">🔍 <input placeholder="find artworks, traditions, artists & more…"></div>'+
        '<div class="account"><a href="login.html">Sign In</a><a href="#">🛒 Cart (0)</a></div>'+
        '<button class="hamb" aria-label="Menu">☰</button>'+
      '</div>'+
      '<nav class="megabar"><div class="wrap">'+ NAV.map(tabHTML).join('') +'</div></nav>'+
    '</header>';

  var mount = document.getElementById('kala-header');
  if(mount){ mount.innerHTML = html; }

  var hamb = document.querySelector('.hamb');
  var bar = document.querySelector('.megabar');
  if(hamb && bar){ hamb.addEventListener('click', function(){ bar.classList.toggle('open'); }); }
})();
