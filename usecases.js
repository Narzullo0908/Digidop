let imgs = document.querySelectorAll('.big_img')
let ins = document.getElementById('ins')
let twi = document.getElementById('twi')
let beh = document.getElementById('beh')
let lin = document.getElementById('lin')
let you = document.getElementById('you')
let dri = document.getElementById('dri')
imgs.forEach((img) => {
    console.log(img)
    img.addEventListener('mouseover', function(){
        img.setAttribute('src', 'https://cdn.prod.website-files.com/67053868fc01e494462e71c9/6749a6ae7450783ae1020772_main-tse-1-p-1080.jpg' )
    })

    img.addEventListener('mouseout', function(){
        img.setAttribute('src', 'https://cdn.prod.website-files.com/67053868fc01e494462e71c9/672365b0b9f5394e854958c7_66eacaa6726e24b8cacbff37_main-logo%2520(1).jpeg' )
    })
})



setInterval(() => {
    document.getElementById("clocks").innerText = new Date().toLocaleTimeString("en-US", { 
      timeZone: "Europe/Paris", 
      hour: "2-digit", 
      minute: "2-digit" ,
      hour12: true
    });
  }, 1000);

  setInterval(() => {
    document.getElementById("clocks_tor").innerText = new Date().toLocaleTimeString("en-US", { 
      timeZone: "America/Toronto", 
      hour: "2-digit", 
      minute: "2-digit" ,
      hour12: true
    });
  }, 1000);

  setInterval(() => {
    document.getElementById("clocks_orl").innerText = new Date().toLocaleTimeString("en-US", { 
      timeZone: "America/New_York", 
      hour: "2-digit", 
      minute: "2-digit" ,
      hour12: true
    });
  }, 1000);


  ins.addEventListener('mouseover', function (){
    twi.classList.add('color')
    lin.classList.add('color')
    you.classList.add('color')
    beh.classList.add('color')
    dri.classList.add('color')
  });

  ins.addEventListener('mouseout', function () {
    twi.classList.remove('color');
    lin.classList.remove('color');
    you.classList.remove('color');
    beh.classList.remove('color');
    dri.classList.remove('color');
});

/*twi*/
twi.addEventListener('mouseover', function (){
  ins.classList.add('color')
  lin.classList.add('color')
  you.classList.add('color')
  beh.classList.add('color')
  dri.classList.add('color')
});

twi.addEventListener('mouseout', function () {
  ins.classList.remove('color');
  lin.classList.remove('color');
  you.classList.remove('color');
  beh.classList.remove('color');
  dri.classList.remove('color');
});

// lin

lin.addEventListener('mouseover', function (){
  twi.classList.add('color')
  ins.classList.add('color')
  you.classList.add('color')
  beh.classList.add('color')
  dri.classList.add('color')
});

lin.addEventListener('mouseout', function () {
  twi.classList.remove('color');
  ins.classList.remove('color');
  you.classList.remove('color');
  beh.classList.remove('color');
  dri.classList.remove('color');
});

// you

you.addEventListener('mouseover', function (){
  twi.classList.add('color')
  ins.classList.add('color')
  lin.classList.add('color')
  beh.classList.add('color')
  dri.classList.add('color')
});

you.addEventListener('mouseout', function () {
  twi.classList.remove('color');
  lin.classList.remove('color');
  ins.classList.remove('color');
  beh.classList.remove('color');
  dri.classList.remove('color');
});

// beh

beh.addEventListener('mouseover', function (){
  twi.classList.add('color')
  lin.classList.add('color')
  you.classList.add('color')
  ins.classList.add('color')
  dri.classList.add('color')
});

beh.addEventListener('mouseout', function () {
  twi.classList.remove('color');
  lin.classList.remove('color');
  you.classList.remove('color');
  ins.classList.remove('color');
  dri.classList.remove('color');
});

// dri

dri.addEventListener('mouseover', function (){
  twi.classList.add('color')
  lin.classList.add('color')
  you.classList.add('color')
  beh.classList.add('color')
  ins.classList.add('color')
});

dri.addEventListener('mouseout', function () {
  twi.classList.remove('color');
  lin.classList.remove('color');
  you.classList.remove('color');
  beh.classList.remove('color');
  ins.classList.remove('color');
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}







console.clear();


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
      document.querySelector(".skeleton").style.display = "none";
      document.querySelector(".hammasi").style.display = "block";
  }, 2000); // Skeleton screen 2 soniya davomida ko'rinadi
});

const circleElement = document.querySelector('.circle');

const mouse = { x: 0, y: 0 }; 
const previousMouse = { x: 0, y: 0 } 
const circle = { x: 0, y: 0 }; 
let currentScale = 0; 
let currentAngle = 0; 

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;    
  mouse.y = e.y;
});

const speed = 0.17;

const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150); 
  const scaleValue = (mouseVelocity / 150) * 0.5;
  currentScale += (scaleValue - currentScale) * speed;
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;
  const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  const rotateTransform = `rotate(${currentAngle}deg)`;

  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  window.requestAnimationFrame(tick);
}

tick();

const translations = {
  en: {
      services: "Services",
      industries: "Industries",
      use_cases: "Use cases",
      resources: "Resources",
      about: "About us",
      contact: "Contact sales",
      build: "We build websites that drive business success",
      strategy: "From strategy to technical execution, explore our case studies to discover the impact of our agency.",
      work: "Let's work together",
      redesign: "Redesign of Bsport: marketing site localized in 6 languages with Localization",
      funding: "30M € in Series B funding",
      all_projects: "All projects",
      financial: "Financial",
      impact: "Impact",
      media: "Media",
      real_estate: "Real estate",
      technology: "Technology",
      search_placeholder: "Search projects...",
      certified: "Certified agency with award-winning results",
      awards: "awards & recognitions",
      clients_supported: "clients supported since 2021",
      nominated: "nominated for the Webflow Awards",
      working: "Instead of just taking our word for it, hear directly from our customers about their experience working with us",
      what: `"What sets Digidop apart is their ability to deliver a solution and empower you, no matter the challenges."`,
      learn_more: "Learn more from our customer success stories",
      doc_seo1: "How Auguste Patrimoine Increased Its Organic Traffic (SEO) by 925% in 12 Months",
      doc_seo2: "How to Reduce Bandwidth Consumption of Your Webflow Project?",
      doc_seo3: "How our agency designed a dynamic calculator for StreamNative",
      see_all: "See all articles",
      valuable_asset: "Want to turn your website into your most valuable asset?",
      contact_us: "Contact us today",
      webflow_partner: "Your Webflow Partner for building high-performing, scalable Websites.",
      subscribe_text: "Stay ahead of the curve! Subscribe now for expert insights.",
      webflow_enterprise: "Webflow Enterprise",
      big_scale: "For big-scale and secure solutions",
      marketing_website: "Marketing Website",
      grow_business: "Designed to grow your business",
      footer_links: ["Home", "Webflow Agency", "All services", "Portfolio", "About us", "Resources", "Contact"],
      locations: {
          orlando: "Orlando, FL 32802, USA",
          paris: "Paris, 75006, France",
          toronto: "Toronto, Ontario, Canada"
      },
      copyright: "© 2025 Digidop. All rights reserved.",
      sitemap: "Sitemap",
      legal: "Legal",
      cookies_settings: "Cookies Settings"
  },
  uz: {
      services: "Xizmatlar",
      industries: "Industriyalar",
      use_cases: "Qo'llanish hollari",
      resources: "Manbalar",  
      about: "Biz haqimizda",
      contact: "Savdo bilan bog'lanish",
      build: "Biz biznes muvaffaqiyatiga sabab bo'ladigan saytlarni yaratamiz",
      strategy: "Strategiyadan texnik amalga oshirishgacha, bizning agentlik ta'sirini kashf qilish uchun bizning ishimizni o'rganing.",
      work: "Birgalikda ishlaylik",
      redesign: "Bsport qayta dizayni: marketing sayti 6 tilda lokalizatsiya qilingan",
      funding: "30M € B seriya moliyalashtirishda",
      all_projects: "Barcha loyihalar",
      financial: "Moliyaviy",
      impact: "Ta'sir",
      media: "Media",
      real_estate: "Ko'chmas mulk",
      technology: "Texnologiya",
      search_placeholder: "Loyihalarni qidiring...",
      certified: "Mukofotga sazovor bo'lgan natijalar bilan tasdiqlangan agentlik",
      awards: "mukofotlar va e'tirof",
      clients_supported: "2021 yildan beri qo'llab-quvvatlangan mijozlar",
      nominated: "Webflow mukofotlariga nomzod",
      working: "Bizning so'zlarimizga ishonish o'rniga, mijozlarimizdan biz bilan ishlash tajribasi haqida to'g'ridan-to'g'ri eshiting",
      what: `"Digidopni ajratib turadigan narsa ularning yechimni yetkazib berish va qiyinchiliklarga qaramasdan sizni quvvatlash qobiliyatidir."`,
      learn_more: "Mijozlarimizning muvaffaqiyat hikoyalaridan ko'proq bilib oling",
      doc_seo1: "Auguste Patrimoine 12 oy ichida o'zining organik trafikini (SEO) 925% ga qanday oshirdi",
      doc_seo2: "Webflow loyihangizning bandwidthni qanday kamaytirish kerak?",
      doc_seo3: "Bizning agentligimiz StreamNative uchun dinamik kalkulyatorni qanday yaratdi",
      see_all: "Barcha maqolalarni ko'rish",
      valuable_asset: "Saytingizni eng qimmatli aktivga aylantirmoqchimisiz?",
      contact_us: "Bugun biz bilan bog'laning",
      webflow_partner: "Biznesingiz muvaffaqiyati uchun scalable va samarali veb saytlar yaratishda Webflow hamkoringiz.",
      subscribe_text: "O'zgarishlarni oldin bilib olish uchun hoziroq obuna bo'ling!",
      webflow_enterprise: "Webflow Korxonalari",
      big_scale: "Yirik va xavfsiz yechimlar uchun",
      marketing_website: "Marketing Sayti",
      grow_business: "Biznesingizni rivojlantirish uchun mo'ljallangan",
      footer_links: ["Bosh sahifa", "Webflow Agentligi", "Barcha xizmatlar", "Portfolio", "Biz haqimizda", "Manbalar", "Bog'lanish"],
      locations: {
          orlando: "Orlando, FL 32802, AQSH",
          paris: "Parij, 75006, Fransiya",
          toronto: "Toronto, Ontario, Kanada"
      },
      copyright: "© 2025 Digidop. Barcha huquqlar himoyalangan.",
      sitemap: "Sayt xaritasi",
      legal: "Huquqiy",
      cookies_settings: "Cookie sozlamalari"
  },
  ru: {
      services: "Услуги",
      industries: "Отрасли",
      use_cases: "Примеры использования",
      resources: "Ресурсы",
      about: "О нас",
      contact: "Связаться с продажами",
      build: "Мы создаем сайты, которые способствуют успеху бизнеса",
      strategy: "От стратегии до технической реализации изучите наши кейсы, чтобы узнать о влиянии нашего агентства.",
      work: "Давайте работать вместе",
      redesign: "Редизайн Bsport: маркетинговый сайт локализован на 6 языков",
      funding: "30M € в финансировании серии B",
      all_projects: "Все проекты",
      financial: "Финансовый",
      impact: "Воздействие",
      media: "Медиа",
      real_estate: "Недвижимость",
      technology: "Технологии",
      search_placeholder: "Искать проекты...",
      certified: "Сертифицированное агентство с отмеченными наградами результатами",
      awards: "награды и признание",
      clients_supported: "поддерживаемые клиенты с 2021 года",
      nominated: "номинирован на премию Webflow Awards",
      working: "Вместо того, чтобы просто поверить нам на слово, узнайте прямо от наших клиентов об их опыте работы с нами",
      what: `"Что выделяет Digidop, так это их способность предоставлять решения и поддерживать вас, несмотря на трудности."`,
      learn_more: "Узнайте больше из историй успеха наших клиентов",
      doc_seo1: "Как Auguste Patrimoine увеличил свой органический трафик (SEO) на 925% за 12 месяцев",
      doc_seo2: "Как уменьшить потребление пропускной способности вашего проекта Webflow?",
      doc_seo3: "Как наше агентство разработало динамический калькулятор для StreamNative",
      see_all: "Посмотреть все статьи",
      valuable_asset: "Хотите превратить свой сайт в самый ценный актив?",
      contact_us: "Свяжитесь с нами сегодня",
      webflow_partner: "Ваш партнер Webflow в создании высокопроизводительных и масштабируемых веб-сайтов.",
      subscribe_text: "Будьте впереди! Подпишитесь сейчас, чтобы получить экспертные знания.",
      webflow_enterprise: "Корпоративный Webflow",
      big_scale: "Для крупномасштабных и безопасных решений",
      marketing_website: "Маркетинговый сайт",
      grow_business: "Создан для развития вашего бизнеса",
      footer_links: ["Главная", "Агентство Webflow", "Все услуги", "Портфолио", "О нас", "Ресурсы", "Контакты"],
      locations: {
          orlando: "Орландо, FL 32802, США",
          paris: "Париж, 75006, Франция",
          toronto: "Торонто, Онтарио, Канада"
      },
      copyright: "© 2025 Digidop. Все права защищены.",
      sitemap: "Карта сайта",
      legal: "Юридические",
      cookies_settings: "Настройки Cookies"
  }
};


document.getElementById('langSelect').addEventListener('change', (event) => {
  const lang = event.target.value;

  // Matnlarni yangilash
  document.querySelector('.ser').textContent = translations[lang].services;
  document.querySelector('.indus').textContent = translations[lang].industries;
  document.querySelector('.use').textContent = translations[lang].use_cases;
  document.querySelector('.nav_box2 p:nth-of-type(1)').textContent = translations[lang].resources;
  document.querySelector('.nav_box2 p:nth-of-type(2)').textContent = translations[lang].about;
  document.querySelector('button').textContent = translations[lang].contact;
  document.querySelector('.txt').textContent = translations[lang].build;

  // Bsport matnlarini yangilash
  const redesignTexts = document.querySelectorAll('.red');
  redesignTexts.forEach(element => {
    element.textContent = translations[lang].redesign;
  });

  // Funding matnlarini yangilash
  const fundingTexts = document.querySelectorAll('.big_txt');
  fundingTexts.forEach(element => {
    element.childNodes[0].textContent = translations[lang].funding.split(" ")[0];
    element.querySelector('span').textContent = translations[lang].funding.split("€")[1].trim();
  });

  // UL ichidagi elementlarni yangilash
  const listItems = document.querySelectorAll('.ul li');
  listItems[0].textContent = translations[lang].all_projects;
  listItems[1].textContent = translations[lang].financial;
  listItems[2].textContent = translations[lang].impact;
  listItems[3].textContent = translations[lang].media;
  listItems[4].textContent = translations[lang].real_estate;
  listItems[5].textContent = translations[lang].technology;

  // Input placeholderini yangilash
  const searchInput = document.querySelector('.in_search');
  searchInput.setAttribute('placeholder', translations[lang].search_placeholder);

  // Sertifikatlangan agentlik matni
  document.querySelector('.cer').textContent = translations[lang].certified;

  // Ish tajribasi matnini yangilash
  document.querySelector('.working p').textContent = translations[lang].working;

  // "What" matnini yangilash
  document.querySelector('.what').textContent = translations[lang].what;

  // "Learn more" matnini yangilash
  document.querySelector('.cards_txt p').textContent = translations[lang].learn_more;

  // Documentation matnlarini yangilash
  const fileInfo = document.querySelectorAll('.file_inf');
  fileInfo[0].textContent = translations[lang].doc_seo1;
  fileInfo[1].textContent = translations[lang].doc_seo2;
  fileInfo[2].textContent = translations[lang].doc_seo3;

  // Awards matnlarini yangilash
  const results = document.querySelectorAll('.results .result');
  results[0].querySelector('.min_txt').textContent = translations[lang].awards;
  results[1].querySelector('.min_txt').textContent = translations[lang].clients_supported;
  results[2].querySelector('.min_txt').textContent = translations[lang].nominated;

  // "See all articles" matnini yangilash
  document.querySelector('.seeing_txt').textContent = translations[lang].see_all;

  // "Valuable asset" matnini yangilash
  document.querySelector('.acces').textContent = translations[lang].valuable_asset;

  // "Contact us today" tugmasining matnini yangilash
  document.querySelector('.top_btn').textContent = translations[lang].contact_us;
  document.querySelector('.f_t').textContent = translations[lang].webflow_partner;
  document.querySelector('.st').textContent = translations[lang].subscribe_text;
  document.querySelector('.webflow').textContent = translations[lang].webflow_enterprise;
  document.querySelector('.big_scale').textContent = translations[lang].big_scale;
  document.querySelector('.webflows').textContent = translations[lang].marketing_website;
  document.querySelector('.big_scales').textContent = translations[lang].grow_business;

  // Footer havolalarini yangilash
  const footerLinks = document.querySelectorAll('.abouts .word');
  translations[lang].footer_links.forEach((text, index) => {
      footerLinks[index].textContent = text;
  });

  // Lokatsiyalarni yangilash
  document.querySelectorAll('.clock .in')[0].textContent = translations[lang].locations.orlando;
  document.querySelectorAll('.clock .in')[1].textContent = translations[lang].locations.paris;
  document.querySelectorAll('.clock .in')[2].textContent = translations[lang].locations.toronto;
  document.querySelector('.copy').textContent = translations[lang].copyright;

  // Qo'shimcha havolalar matnlarini yangilash
  const links = document.querySelectorAll('.three p');
  links[0].textContent = translations[lang].sitemap;
  links[1].textContent = translations[lang].legal;
  links[2].textContent = translations[lang].cookies_settings;
});

