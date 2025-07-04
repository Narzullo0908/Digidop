
let ins = document.getElementById('ins')
let twi = document.getElementById('twi')
let beh = document.getElementById('beh')
let lin = document.getElementById('lin')
let you = document.getElementById('you')
let dri = document.getElementById('dri')




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

const element = document.querySelector('.scroll');
const bwhite1 = document.getElementById('bot1')
const bwhite2 = document.getElementById('bot2')
const bwhite3 = document.getElementById('bot3')
const bwhite4 = document.getElementById('bot4')
const bir1 = document.getElementById('bir1')
const bir2= document.getElementById('bir2')
const bir3 = document.getElementById('bir3')
const bir4 = document.getElementById('bir4')


document.addEventListener('scroll', (event) => {
  const rect = element.getBoundingClientRect();
  let scrolltop = window.scrollY+rect.top - 300

  if (window.scrollY > scrolltop){
    bwhite1.style.width = (scrollY - scrolltop) / 9 + '%'
    console.log(scrollY - scrolltop + 'px')
  }

  if (window.scrollY > scrolltop){
    bwhite2.style.width = (scrollY - scrolltop) / 9 + '%'
    console.log(scrollY - scrolltop + 'px')
  }

  if (window.scrollY > scrolltop){
    bwhite3.style.width = (scrollY - scrolltop) / 9 + '%'
    console.log(scrollY - scrolltop + 'px')
  }

  if (window.scrollY > scrolltop){
    bwhite4.style.width = (scrollY - scrolltop) / 9 + '%'
    console.log(scrollY - scrolltop + 'px')
  }

  if (window.scrollY > scrolltop){
    bir1.style.height = (scrollY - scrolltop) / 9 + '%'
    console.log(scrollY - scrolltop + 'px')
  }

  if (window.scrollY > scrolltop){
    bir2.style.height = (scrollY - scrolltop) / 9 + '%'
    console.log(scrollY - scrolltop + 'px')
  }

  if (window.scrollY > scrolltop){
    bir3.style.height = (scrollY - scrolltop) / 9 + '%'
    console.log(scrollY - scrolltop + 'px')
  }

  if (window.scrollY > scrolltop){
    bir4.style.height = (scrollY - scrolltop) / 9 + '%'
    console.log(scrollY - scrolltop + 'px')
  }
});

const translations = {
  en: {
      partner: "Your Webflow Partner for building high-performing, scalable Websites",
      award: "Award-winning Webflow agency with a business-first approach. We build scalable and conversion-focused websites for marketing and IT team.",
      contact: "Contact us",
      services: "Services",
      industries: "Industries",
      usecases: "Use cases",
      resources: "Resources",
      about: "About us",
      contact: "Contact sales",
      services: "Services",
      industries: "Industries",
      usecases: "Use cases",
      resources: "Resources",
      about: "About us",
      contact: "Contact sales",
      personalized: "With an in-house team, we offer personalized services",
      web_design: "Web Design",
      credibility: "75% of users base a company's credibility on its website's design (UX and UI). Make sure it stands out—entrust your website design to a specialized web design agency.",
      ux_ui_design: "UX/UI Design",
      ux_ui_description: "We focus on both aesthetics and functionality to ensure your website not only looks great but drives conversions.",
      design_systems: "Design Systems & Components",
      design_description: "We create assets that ensure consistency and make future updates faster and more efficient.",
      learn_more: "Learn more",
      tailored: "Tailored to your needs and technical challenges",
      marketing: "Marketing Website",
      marketing_desc: "By partnering with us, your marketing team will operate more efficiently, while your website sees increased traffic and engagement—thanks to our CMS-first approach and expertise in building sites that rank.",
      enterprise: "Enterprise Website",
      enterprise_desc: "Enterprise clients need robust solutions: from enhanced security and SSO integration to advanced access controls and large-scale CMS flexibility. Let our experts guide you through your Webflow project with confidence.",
      see_solution: "See our Enterprise solution",
      helped_teams: "We’ve helped over 150 teams achieve their goals efficiently",
      dev_123: "Development of a Webflow website for the investment fund 123 IM",
      traffic_seo: "x70 traffic SEO",
      awards: "1x awwwards",
      digital_tse: "Digital transformation of TSE's website, solar energy expert, using Webflow",
      web_traffic: "5x more web traffic",
      leeto_cse: "Establish Leeto as the #1 reference in the CSE support market.",
      months_collab: "3+ Months of collaboration",
      hear_customers: "Hear from our customers about their experience",
      scalable_cms: "Need a scalable, easy-to-edit CMS that drives traffic?",
      choose_us: "There are thousands of agencies, so why choose us?",
      valuing_time: "Valuing your time",
      high_quality: "Delivering high-quality results",
      communication: "Providing clear communication",
      scalability: "Focusing on scalability",
      technology: "Using the latest technology",
      partnering_success: "Partnering in your success",
      nominated_webflow: "4x nominated for the Webflow Awards.",
      awards_recognition: "+9 awards & recognitions.",
      new_model: "A new Web-Agency model, with a results-oriented vision of the industry",
      launch_vision: "Since our launch in 2021, we’ve pioneered the no-code & low-code landscape and redefining the web industry with our unique vision.",
      discover_more: "Discover more about us",
      her: "Hear from our customers about their experience",
      what: `"What sets Digidop apart is their ability to deliver a solution and empower you, no matter the challenges."`,
      author: "Maxime Bascon -",
      job: "Chief of Staff @Growl",
      marie_name: "Marie Belingard",
      marie_job: "Marketing Director @TSE",
      samy_name: "Samy Ouardin",
      samy_job: "Cofounder & CEO",
      dig: "Digidop at FLOWconf 2024 - Why Your Website Should Be the Hub of Your Content Marketing Strategy",
      stage: "- Florian on stage doing a talk",
      check_resources: "Check out our most popular resources",
      web_data: "Web Data & Conversion",
      get_resource: "Get this resource",
      seo_optimization: "On-page SEO optimization in 2025",
      webinar_cyber: "Cybersecurity: Understanding and Preventing Cyberattacks in Business",
      watch_webinar: "Watch Webinar",
      see_resources: "See all resources",
      valuable_asset: "Want to turn your website into your most valuable asset?",
      contact_us: "Contact us today",
      logo_text: "Your Webflow Partner for building high-performing, scalable Websites.",
      subscribe_text: "Stay ahead of the curve! Subscribe now for expert insights.",
      webflow_enterprise: "Webflow Enterprise",
      secure_solutions: "For big-scale and secure solutions",
      marketing_website: "Marketing Website",
      grow_business: "Designed to grow your business",
      footer_links: ["Home", "Webflow Agency", "All services", "Portfolio", "About us", "Resources", "Contact"],
      copyright: "© 2025 Digidop. All rights reserved.",
      sitemap: "Sitemap",
      legal: "Legal",
      cookies_settings: "Cookies Settings"
  },
  uz: {
      partner: "High-performing va keng ko'lamli saytlar yaratishda Webflow hamkoringiz",
      award: "Biznesga birinchi yondashuv bilan mukofotlangan Webflow agentligi. Marketing va IT jamoasi uchun kengaytirilgan konversiyaga qaratilgan saytlar yaratamiz.",
      contact: "Biz bilan bog'laning",
      services: "Xizmatlar",
      industries: "Industriyalar",
      usecases: "Qo'llanish hollari",
      resources: "Manbalar",
      about: "Biz haqimizda",
      contact: "Savdo bilan bog'laning",
      services: "Xizmatlar",
      industries: "Industriyalar",
      usecases: "Qo'llanish hollari",
      resources: "Manbalar",
      about: "Biz haqimizda",
      contact: "Savdo bilan bog'laning",
      personalized: "Bizning o'z jamoamiz bilan individual xizmatlarni taklif etamiz",
      web_design: "Web Dizayn",
      credibility: "75% foydalanuvchi kompaniyaning ishonchliligini uning veb-dizayniga qarab baholaydi (UX va UI). Uning ajralib turishini ta'minlang—saytingiz dizaynini maxsus veb-dizayn agentligiga ishonib topshiring.",
      ux_ui_design: "UX/UI Dizayn",
      ux_ui_description: "Biz estetika va funksionallikni birlashtiramiz, sayt nafaqat chiroyli ko'rinishda, balki konversiyalarni oshiradi.",
      design_systems: "Dizayn Tizimlari va Komponentlari",
      design_description: "Biz kelgusida tezroq va samaraliroq yangilanishni ta'minlaydigan asboblarni yaratamiz.",
      learn_more: "Ko'proq bilib oling",
      tailored: "Sizning ehtiyojlaringiz va texnik muammolaringizga moslashtirilgan",
      marketing: "Marketing sayti",
      marketing_desc: "Biz bilan hamkorlik qilgan holda, sizning marketing jamoangiz samaraliroq ishlaydi va saytingiz CMS-first yondashuvi va saytlarni reytingda ko'tarish bo'yicha tajribamiz tufayli ko'proq trafik va faollikka ega bo'ladi.",
      enterprise: "Korporativ sayti",
      enterprise_desc: "Korporativ mijozlarga mustahkam yechimlar kerak: kuchaytirilgan xavfsizlik va SSO integratsiyasidan tortib, ilg'or kirish boshqaruvi va keng qamrovli CMS moslashuvchanligigacha. Bizning mutaxassislarimiz bilan Webflow loyihangizni ishonch bilan boshqaring.",
      see_solution: "Korporativ yechimimizni ko'ring",
      helped_teams: "Biz 150 dan ortiq jamoalarga maqsadlariga samarali erishishda yordam berdik",
      dev_123: "123 IM investitsion fondi uchun Webflow veb-saytini ishlab chiqish",
      traffic_seo: "x70 SEO traffik",
      awards: "1x mukofot",
      digital_tse: "TSE ning veb-saytini, quyosh energiyasi mutaxassisi, Webflow yordamida raqamli transformatsiyasi",
      web_traffic: "5x ko'proq veb traffik",
      leeto_cse: "Leetoni CSE yordam bozori bo'yicha #1 ma'lumot sifatida o'rnatish.",
      months_collab: "3+ Hamkorlik oylarida",
      hear_customers: "Mijozlarimizning tajribalari haqida fikrlarini eshiting",
      scalable_cms: "Trafikni oshiradigan scalable, oson tahrirlash mumkin CMS kerakmi?",
      choose_us: "Minglab agentliklar bor, nega bizni tanlaysiz?",
      valuing_time: "Vaqtingizni qadrlash",
      high_quality: "Yuqori sifatli natijalar taqdim etish",
      communication: "Aniq aloqa taqdim etish",
      scalability: "Masshtablilikka e'tibor qaratish",
      technology: "So'nggi texnologiyalarni ishlatish",
      partnering_success: "Muvaffaqiyatda hamkorlik",
      nominated_webflow: "4x Webflow Awards mukofotiga nomzod.",
      awards_recognition: "+9 mukofotlar va e'tiroflar.",
      new_model: "Sanoatga natijalarga yo'naltirilgan ko'rish bilan yangi Web-Agency modeli",
      launch_vision: "2021-yilda ishga tushganimizdan buyon biz no-code va low-code sohasini rivojlantirdik va o'z noyob ko'rishimiz bilan veb sanoatini qayta belgiladik.",
      discover_more: "Biz haqimizda ko'proq bilib oling",
      her: "Mijozlarimizning tajribalarini tinglang",
      what: `"Digidopni ajratib turadigan narsa ularning yechimni yetkazib berish va qiyinchiliklarga qaramasdan sizni quvvatlash qobiliyatidir."`,
      author: "Maksim Baskan -",
      job: "Growl kompaniyasining bosh xodimi",
      marie_name: "Mariya Belingard",
      marie_job: "TSE kompaniyasining marketing direktori",
      samy_name: "Sami Uardin",
      samy_job: "Hammuassis va bosh direktor",
      dig: "FLOWconf 2024 da Digidop - Nega Saytingiz Kontent Marketing Strategiyasining Markazi Bo'lishi Kerak?",
      stage: "- Florian sahnada nutq so'zlamoqda",
      check_resources: "Bizning eng mashhur resurslarimizni tekshiring",
      web_data: "Veb Ma'lumotlar va Konversiya",
      get_resource: "Ushbu resursni oling",
      seo_optimization: "2025 yilda sahifaviy SEO optimizatsiyasi",
      webinar_cyber: "Kiberxavfsizlik: Biznesda Kiberhujumlardan Tushunish va Oldini Olish",
      watch_webinar: "Vebinarni tomosha qiling",
      see_resources: "Barcha resurslarni ko'ring",
      valuable_asset: "Saytingizni eng qimmatli aktivga aylantirishni xohlaysizmi?",
      contact_us: "Bugun biz bilan bog'laning",
      logo_text: "High-performing va scalable saytlar yaratishda Webflow hamkoringiz.",
      subscribe_text: "O'zgarishlar oldida bo'ling! Hozir obuna bo'lib, ekspert maslahatlardan foydalaning.",
      webflow_enterprise: "Webflow Korxonalari",
      secure_solutions: "Yirik va xavfsiz yechimlar uchun",
      marketing_website: "Marketing Sayti",
      grow_business: "Biznesingizni rivojlantirish uchun mo'ljallangan",
      footer_links: ["Bosh sahifa", "Webflow Agentligi", "Barcha xizmatlar", "Portfolio", "Biz haqimizda", "Manbalar", "Bog'lanish"],
      copyright: "© 2025 Digidop. Barcha huquqlar himoyalangan.",
      sitemap: "Sayt xaritasi",
      legal: "Huquqiy",
      cookies_settings: "Cookie sozlamalari"
  },
  ru: {
      partner: "Ваш партнёр Webflow в создании высокопроизводительных и масштабируемых веб-сайтов",
      award: "Агентство Webflow с бизнес-ориентированным подходом. Мы создаем масштабируемые и ориентированные на конверсию веб-сайты для маркетинга и IT-команд.",
      contact: "Свяжитесь с нами",
      services: "Услуги",
      industries: "Отрасли",
      usecases: "Примеры использования",
      resources: "Ресурсы",
      about: "О нас",
      contact: "Связаться с продажами",
      services: "Услуги",
      industries: "Отрасли",
      usecases: "Примеры использования",
      resources: "Ресурсы",
      about: "О нас",
      contact: "Связаться с продажами",
      personalized: "С собственным командой, мы предлагаем персонализированные услуги",
      web_design: "Веб-дизайн",
      credibility: "75% пользователей оценивают надежность компании по дизайну ее веб-сайта (UX и UI). Убедитесь, что он выделяется — доверьте дизайн вашего сайта специализированному агентству.",
      ux_ui_design: "UX/UI Дизайн",
      ux_ui_description: "Мы фокусируемся как на эстетике, так и на функциональности, чтобы ваш сайт выглядел привлекательно и увеличивал конверсии.",
      design_systems: "Системы дизайна и компоненты",
      design_description: "Мы создаем ресурсы, которые обеспечивают последовательность и делают будущие обновления быстрее и эффективнее.",
      learn_more: "Узнать больше",
      tailored: "Подстроено под ваши потребности и технические задачи",
      marketing: "Маркетинговый сайт",
      marketing_desc: "Сотрудничая с нами, ваша маркетинговая команда будет работать более эффективно, а ваш сайт получит больше трафика и вовлеченности благодаря нашему подходу CMS-first и опыту создания сайтов, которые ранжируются высоко.",
      enterprise: "Корпоративный сайт",
      enterprise_desc: "Корпоративным клиентам нужны надежные решения: от улучшенной безопасности и интеграции SSO до расширенных возможностей контроля доступа и гибкости CMS. Доверьте свой проект Webflow нашим экспертам.",
      see_solution: "Смотрите наше корпоративное решение",
      helped_teams: "Мы помогли более 150 командам эффективно достичь своих целей",
      dev_123: "Разработка веб-сайта Webflow для инвестиционного фонда 123 IM",
      traffic_seo: "x70 SEO трафика",
      awards: "1x награда",
      digital_tse: "Цифровая трансформация веб-сайта TSE, эксперта по солнечной энергии, с помощью Webflow",
      web_traffic: "5x больше веб-трафика",
      leeto_cse: "Установить Leeto как #1 ссылку на рынке поддержки CSE.",
      months_collab: "3+ месяца сотрудничества",
      hear_customers: "Слушайте наших клиентов о их опыте",
      scalable_cms: "Нужен масштабируемый CMS, который приводит трафик и легко редактируется?",
      choose_us: "Тысячи агентств, почему выбрать нас?",
      valuing_time: "Ценя ваше время",
      high_quality: "Доставка высококачественных результатов",
      communication: "Обеспечение четкой связи",
      scalability: "Сфокусировано на масштабируемости",
      technology: "Используя новейшие технологии",
      partnering_success: "Партнерство в вашем успехе",
      nominated_webflow: "4x номинирован для Webflow Awards.",
      awards_recognition: "+9 наград и признаний.",
      new_model: "Новая модель веб-агентства с ориентированной на результат видением индустрии",
      launch_vision: "С момента нашего запуска в 2021 году мы первопроходцы в ландшафте no-code и low-code и переопределение веб-индустрии с нашим уникальным видением.",
      discover_more: "Узнать больше о нас",
      her: "Узнайте опыт наших клиентов",
      what: `"Что выделяет Digidop, так это их способность предоставлять решения и поддерживать вас, несмотря на трудности."`,
      author: "Максим Баскон -",
      job: "Руководитель штаба @Growl",
      marie_name: "Мари Белингард",
      marie_job: "Директор по маркетингу @TSE",
      samy_name: "Сами Уардин",
      samy_job: "Соучредитель и генеральный директор",
      dig: "Digidop на FLOWconf 2024 - Почему ваш сайт должен быть центром вашей стратегии контент-маркетинга",
      stage: "- Флориан на сцене выступает с докладом",
      check_resources: "Ознакомьтесь с нашими самыми популярными ресурсами",
      web_data: "Веб-данные и конверсия",
      get_resource: "Получите этот ресурс",
      seo_optimization: "Оптимизация SEO на странице в 2025 году",
      webinar_cyber: "Кибербезопасность: Понимание и предотвращение кибератак в бизнесе",
      watch_webinar: "Смотреть вебинар",
      see_resources: "Смотреть все ресурсы",
      valuable_asset: "Хотите превратить свой сайт в самый ценный актив?",
      contact_us: "Свяжитесь с нами сегодня",
      logo_text: "Ваш партнер Webflow в создании высокопроизводительных и масштабируемых веб-сайтов.",
      subscribe_text: "Будьте впереди! Подпишитесь сейчас, чтобы получить экспертные знания.",
      webflow_enterprise: "Корпоративный Webflow",
      secure_solutions: "Для крупномасштабных и безопасных решений",
      marketing_website: "Маркетинговый сайт",
      grow_business: "Создан для развития вашего бизнеса",
      footer_links: ["Главная", "Агентство Webflow", "Все услуги", "Портфолио", "О нас", "Ресурсы", "Контакты"],
      copyright: "© 2025 Digidop. Все права защищены.",
      sitemap: "Карта сайта",
      legal: "Юридические",
      cookies_settings: "Настройки Cookies"
  }
};

document.getElementById('langSelect').addEventListener('change', (event) => {
  const lang = event.target.value;
  document.querySelector('.part').textContent = translations[lang].partner;
  document.querySelector('.award').textContent = translations[lang].award;
  document.querySelector('.contact').textContent = translations[lang].contact;
  document.querySelector('.ser').textContent = translations[lang].services;
  document.querySelector('.indus').textContent = translations[lang].industries;
  document.querySelector('.use p').textContent = translations[lang].usecases;
  document.querySelector('.nav_box2 p').textContent = translations[lang].resources;
  document.querySelector('.nav_box2 p:nth-child(2)').textContent = translations[lang].about;
  document.querySelector('button').textContent = translations[lang].contact;
  document.querySelector('.with p').textContent = translations[lang].personalized;
  document.querySelectorAll('.web').forEach(element => element.textContent = translations[lang].web_design);
  document.querySelectorAll('.pri').forEach(element => element.textContent = translations[lang].credibility);
  document.querySelectorAll('.ui').forEach(element => element.textContent = translations[lang].ux_ui_design);
  document.querySelectorAll('.we').forEach(element => element.textContent = translations[lang].ux_ui_description);
  document.querySelectorAll('.ui_2').forEach(element => element.textContent = translations[lang].design_systems);
  document.querySelectorAll('.we_2').forEach(element => element.textContent = translations[lang].design_description);
  document.querySelectorAll('.learn').forEach(element => element.textContent = translations[lang].learn_more);
  document.querySelector('.tail').textContent = translations[lang].tailored;
  document.querySelector('.card_1 .mar').textContent = translations[lang].marketing;
  document.querySelector('.card_1 .by').textContent = translations[lang].marketing_desc;
  document.querySelector('.card_2 .mar_2').textContent = translations[lang].enterprise;
  document.querySelector('.card_2 .by_2').textContent = translations[lang].enterprise_desc;
  document.querySelectorAll('.seee').forEach(element => element.textContent = translations[lang].see_solution);
  document.querySelector('.wew p').textContent = translations[lang].helped_teams;
    document.querySelectorAll('.dev').forEach(element => element.textContent = translations[lang].dev_123);
    document.querySelector('.her').textContent = translations[lang].hear_customers;
    document.querySelector('.work_box p').textContent = translations[lang].scalable_cms;
    document.querySelector('.there p').textContent = translations[lang].choose_us;
    const symbols = document.querySelectorAll('.symbols p');
    symbols[0].textContent = translations[lang].valuing_time;
    symbols[1].textContent = translations[lang].high_quality;
    symbols[2].textContent = translations[lang].communication;
    symbols[3].textContent = translations[lang].scalability;
    symbols[4].textContent = translations[lang].technology;
    symbols[5].textContent = translations[lang].partnering_success;
    document.querySelector('.bgcb .nom').textContent = translations[lang].nominated_webflow;
    document.querySelector('.bgci .nom').textContent = translations[lang].awards_recognition;
    document.querySelector('.wrapper .new_web').textContent = translations[lang].new_model;
    document.querySelector('.wrapper .since').textContent = translations[lang].launch_vision;
    document.querySelector('.discover').textContent = translations[lang].discover_more;
        // `her` matnini yangilash
        document.querySelector('.her').textContent = translations[lang].her;

        // `what` matnini yangilash
        document.querySelector('.what').textContent = translations[lang].what;
    
        // `author` va `job`ni yangilash
        document.querySelector('.job').textContent = translations[lang].job;
    
        // Marie va Samy uchun matnlarni yangilash
        document.querySelector('.marie .name').textContent = translations[lang].marie_name;
        document.querySelector('.marie .who').textContent = translations[lang].marie_job;
    
        document.querySelector('.samy .name').textContent = translations[lang].samy_name;
        document.querySelector('.samy .sam_who').textContent = translations[lang].samy_job;
        document.getElementById('langSelect').addEventListener('change', (event) => {
          const lang = event.target.value;
      
          // `dig` matnini yangilash
          document.querySelector('.dig').textContent = translations[lang].dig;
      
          // `stage` matnini yangilash
          document.querySelector('.ims span').textContent = translations[lang].stage;
      
          // `check_resources` matnini yangilash
          document.querySelector('.ch').textContent = translations[lang].check_resources;
      
          // Resurslar uchun matnlarni yangilash
          document.querySelectorAll('.f_web')[0].textContent = translations[lang].web_data;
          document.querySelectorAll('.s_get')[0].textContent = translations[lang].get_resource;
          document.querySelectorAll('.f_web')[1].textContent = translations[lang].seo_optimization;
          document.querySelectorAll('.s_get')[1].textContent = translations[lang].get_resource;
      
          // Vebinar va blog matnlari
          document.querySelectorAll('.cyber')[0].textContent = translations[lang].webinar_cyber;
          document.querySelectorAll('.b_link')[0].textContent = translations[lang].watch_webinar;
      
          // Resurslarni ko'rish
          document.querySelector('.allres').textContent = translations[lang].see_resources;
      
          // Eng qimmatli aktiv
          document.querySelector('.want').textContent = translations[lang].valuable_asset;
          document.querySelector('.contacting').textContent = translations[lang].contact_us;
          document.getElementById('langSelect').addEventListener('change', (event) => {
            const lang = event.target.value;
        
            // Logo matni
            document.querySelector('.f_t').textContent = translations[lang].logo_text;
        
            // Obuna matni
            document.querySelector('.st').textContent = translations[lang].subscribe_text;
        
            // Webflow Enterprise matni
            document.querySelector('.webflow').textContent = translations[lang].webflow_enterprise;
            document.querySelector('.big_scale').textContent = translations[lang].secure_solutions;
            document.querySelector('.webflows').textContent = translations[lang].marketing_website;
            document.querySelector('.big_scales').textContent = translations[lang].grow_business;
        
            // Footer havolalari
            const links = document.querySelectorAll('.abouts .word');
            translations[lang].footer_links.forEach((text, index) => {
                links[index].textContent = text;
            });
        
            // Copyright va boshqa matnlar
            document.querySelector('.copy').textContent = translations[lang].copyright;
            const footerExtras = document.querySelectorAll('.three p');
            footerExtras[0].textContent = translations[lang].sitemap;
            footerExtras[1].textContent = translations[lang].legal;
            footerExtras[2].textContent = translations[lang].cookies_settings;
          });
    });    
});


let burger = document.querySelector('.burger');
let st = document.querySelector('.st')
let rd = document.querySelector('.rd')
let nd = document.querySelector('.nd')

burger.addEventListener('click', function() {
    st.classList.toggle('stmove')
    rd.classList.toggle('rdmove')
    nd.classList.toggle('ndmove')
    this.classList.toggle('burgermove')
})
