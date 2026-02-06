const translations = {
    ru: {
        "nav.home": "Главная",
        "nav.about": "Обо мне",
        "nav.skills": "Скилы",
        "nav.projects": "Проекты",
        "nav.contact": "Контакты",
        "lang.toggle": "EN",
        "hero.eyebrow": "Архитектор / Градостроитель",
        "hero.title": "Создаю пространства, в которых хочется жить и работать.",
        "hero.subtitle": "Специализируюсь на устойчивой архитектуре, интеллектуальных фасадах и комплексном проектировании общественных пространств.",
        "hero.ctaPrimary": "Смотреть проекты",
        "hero.ctaSecondary": "Связаться",
        "hero.stat1": "лет практики",
        "hero.stat2": "реализованных объектов",
        "hero.stat3": "международных наград",
        "hero.cardTitle": "Актуальный фокус",
        "hero.cardText": "Проекты с нулевым углеродным следом и адаптивной городской средой.",
        "about.eyebrow": "Обо мне",
        "about.title": "Александра Донева — архитектор, который соединяет эстетику и функциональность.",
        "about.text1": "Работаю с жилыми комплексами, культурными центрами и офисными пространствами, уделяя внимание свету, экологичности и социальному сценарию.",
        "about.text2": "Каждый проект строится на исследовании контекста, опросах жителей и моделировании потоков, что помогает формировать живые и устойчивые города.",
        "about.panelTitle": "Образование и подход",
        "about.panelItem1": "МАРХИ, магистратура «Городские системы»",
        "about.panelItem2": "Спикер на ARCH Moscow и Urban Forum",
        "about.panelItem3": "Автор методики «Архитектура диалога»",
        "skills.eyebrow": "Скилы",
        "skills.title": "Инструменты и компетенции для полного цикла проектирования.",
        "skills.subtitle": "От предпроектных исследований до авторского надзора и презентаций для инвесторов.",
        "skills.card1Title": "Архитектурный дизайн",
        "skills.card1Text": "Концепции, мастер-планы, фасады, интерьерные решения.",
        "skills.card2Title": "BIM и цифровое моделирование",
        "skills.card2Text": "Revit, ArchiCAD, Rhino + Grasshopper.",
        "skills.card3Title": "Устойчивость",
        "skills.card3Text": "LEED, BREEAM, энергоэффективные оболочки.",
        "skills.card4Title": "Проектный менеджмент",
        "skills.card4Text": "Сроки, бюджеты, коммуникации с подрядчиками.",
        "skills.card5Title": "Визуализации",
        "skills.card5Text": "Twinmotion, Lumion, Adobe CC.",
        "skills.card6Title": "Публичные презентации",
        "skills.card6Text": "Питчи, конкурсы, переговоры с девелоперами.",
        "projects.eyebrow": "Проекты",
        "projects.title": "Кейсы, в которых архитектура говорит с городом.",
        "projects.subtitle": "Каждый проект открывается в отдельной вкладке с подробным описанием и галереей.",
        "projects.card1Title": "Дом у озера",
        "projects.card1Text": "Жилой комплекс с террасами и каскадными садами на берегу.",
        "projects.card2Title": "Городской музей",
        "projects.card2Text": "Мультимедийный центр с общественными площадями и адаптивным фасадом.",
        "projects.card3Title": "Эко-офис «Сфера»",
        "projects.card3Text": "Гибридное рабочее пространство с зелёными атриумами.",
        "projects.cardLink": "Открыть проект",
        "contacts.eyebrow": "Контакты",
        "contacts.title": "Давайте обсудим ваш следующий проект.",
        "contacts.subtitle": "Открыта к коллаборациям, конкурсам и консультациям.",
        "contacts.locationTitle": "География",
        "contacts.locationValue": "Москва — работаю по всему миру онлайн.",
        "contacts.emailTitle": "Электронная почта",
        "contacts.phoneTitle": "Телефон",
        "contacts.socialTitle": "Социальные сети",
        "contacts.socialValue": "Behance • Instagram • LinkedIn",
        "contacts.cta": "Написать письмо",
        "footer.copy": "© 2024 Alexandra Doneva. Архитектура для людей и городов.",
        "project.back": "← Назад к проектам",
        "project.detailsTitle": "Описание проекта",
        "project.teamTitle": "Команда и роль",
        "project.toolsTitle": "Инструменты",
        "project.galleryTitle": "Галерея",
        "project.lake.title": "Дом у озера",
        "project.lake.subtitle": "Квартал клубных резиденций, встроенный в природный ландшафт и ориентированный на воду.",
        "project.lake.description": "Концепция построена на плавной интеграции архитектуры в рельеф. Террасы переходят в общественные сады, а фасады формируются древесно-алюминиевыми ламелями, которые реагируют на солнечный свет.",
        "project.lake.point1": "Площадь: 42 000 м²",
        "project.lake.point2": "Формат: жильё + общественные пространства",
        "project.lake.point3": "Особенность: система сбора дождевой воды и зелёные крыши",
        "project.lake.role": "Руководитель архитектурной группы, развитие концепции и координация BIM.",
        "project.museum.title": "Городской музей",
        "project.museum.subtitle": "Культурный хаб с трансформируемыми залами, общественными террасами и медиа-фасадом.",
        "project.museum.description": "Архитектура строится вокруг центрального атриума, который становится городской площадью. Фасад покрыт динамическими панелями, реагирующими на события и освещение.",
        "project.museum.point1": "Площадь: 18 500 м²",
        "project.museum.point2": "Формат: музей + образовательный центр",
        "project.museum.point3": "Особенность: интерактивный медиа-фасад",
        "project.museum.role": "Главный архитектор, куратор визуальных сценариев и общественных функций.",
        "project.sphere.title": "Эко-офис «Сфера»",
        "project.sphere.subtitle": "Гибридный офис, где рабочие сценарии объединяются с озеленёнными атриумами.",
        "project.sphere.description": "Планировочная структура построена вокруг круглых атриумов, которые распределяют естественный свет. Фасад оснащён умными жалюзи и системами вентиляции.",
        "project.sphere.point1": "Площадь: 25 000 м²",
        "project.sphere.point2": "Формат: офис + коворкинг + сервисы",
        "project.sphere.point3": "Особенность: модульная система рабочих зон",
        "project.sphere.role": "Ведущий архитектор, интеграция устойчивых технологий и фасадных решений."
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contacts",
        "lang.toggle": "RU",
        "hero.eyebrow": "Architect / Urban Designer",
        "hero.title": "I craft spaces where people want to live and work.",
        "hero.subtitle": "Focused on sustainable architecture, intelligent facades, and holistic public-space design.",
        "hero.ctaPrimary": "View projects",
        "hero.ctaSecondary": "Get in touch",
        "hero.stat1": "years of practice",
        "hero.stat2": "completed projects",
        "hero.stat3": "international awards",
        "hero.cardTitle": "Current focus",
        "hero.cardText": "Net-zero projects and adaptive urban environments.",
        "about.eyebrow": "About",
        "about.title": "Alexandra Doneva is an architect who connects aesthetics with functionality.",
        "about.text1": "I work with residential complexes, cultural centers, and office spaces, focusing on light, ecology, and social scenarios.",
        "about.text2": "Each project starts with context research, resident interviews, and flow modeling to create lively, resilient cities.",
        "about.panelTitle": "Education & approach",
        "about.panelItem1": "MARCHI, Master's in Urban Systems",
        "about.panelItem2": "Speaker at ARCH Moscow and Urban Forum",
        "about.panelItem3": "Author of the “Dialogue Architecture” method",
        "skills.eyebrow": "Skills",
        "skills.title": "Tools and competencies for the full design cycle.",
        "skills.subtitle": "From early research to construction supervision and investor presentations.",
        "skills.card1Title": "Architectural design",
        "skills.card1Text": "Concepts, master plans, facades, interior solutions.",
        "skills.card2Title": "BIM & digital modeling",
        "skills.card2Text": "Revit, ArchiCAD, Rhino + Grasshopper.",
        "skills.card3Title": "Sustainability",
        "skills.card3Text": "LEED, BREEAM, energy-efficient envelopes.",
        "skills.card4Title": "Project management",
        "skills.card4Text": "Schedules, budgets, contractor coordination.",
        "skills.card5Title": "Visualization",
        "skills.card5Text": "Twinmotion, Lumion, Adobe CC.",
        "skills.card6Title": "Public speaking",
        "skills.card6Text": "Pitches, competitions, developer negotiations.",
        "projects.eyebrow": "Projects",
        "projects.title": "Cases where architecture speaks with the city.",
        "projects.subtitle": "Each project opens in a new tab with details and a gallery.",
        "projects.card1Title": "Lakefront Residence",
        "projects.card1Text": "A residential complex with terraced gardens along the shore.",
        "projects.card2Title": "City Museum",
        "projects.card2Text": "A multimedia hub with public plazas and adaptive facade.",
        "projects.card3Title": "Sphere Eco Office",
        "projects.card3Text": "Hybrid workspace with green atriums.",
        "projects.cardLink": "Open project",
        "contacts.eyebrow": "Contacts",
        "contacts.title": "Let’s discuss your next project.",
        "contacts.subtitle": "Open for collaborations, competitions, and consulting.",
        "contacts.locationTitle": "Location",
        "contacts.locationValue": "Moscow — working worldwide online.",
        "contacts.emailTitle": "Email",
        "contacts.phoneTitle": "Phone",
        "contacts.socialTitle": "Social",
        "contacts.socialValue": "Behance • Instagram • LinkedIn",
        "contacts.cta": "Send an email",
        "footer.copy": "© 2024 Alexandra Doneva. Architecture for people and cities.",
        "project.back": "← Back to projects",
        "project.detailsTitle": "Project overview",
        "project.teamTitle": "Team & role",
        "project.toolsTitle": "Tools",
        "project.galleryTitle": "Gallery",
        "project.lake.title": "Lakefront Residence",
        "project.lake.subtitle": "A private residential district embedded into the natural landscape and oriented toward the water.",
        "project.lake.description": "The concept blends architecture into the terrain. Terraces transition into public gardens, while the facade uses timber-aluminum fins that respond to sunlight.",
        "project.lake.point1": "Area: 42,000 m²",
        "project.lake.point2": "Program: housing + public spaces",
        "project.lake.point3": "Highlight: rainwater harvesting and green roofs",
        "project.lake.role": "Head of the architectural team, concept development and BIM coordination.",
        "project.museum.title": "City Museum",
        "project.museum.subtitle": "A cultural hub with transformable halls, public terraces, and a media facade.",
        "project.museum.description": "Architecture is organized around a central atrium that becomes a city square. The facade features dynamic panels that react to events and lighting.",
        "project.museum.point1": "Area: 18,500 m²",
        "project.museum.point2": "Program: museum + education center",
        "project.museum.point3": "Highlight: interactive media facade",
        "project.museum.role": "Lead architect, curator of visual scenarios and public functions.",
        "project.sphere.title": "Sphere Eco Office",
        "project.sphere.subtitle": "A hybrid office where work scenarios blend with planted atriums.",
        "project.sphere.description": "The layout revolves around circular atriums that distribute natural light. The facade features smart louvers and ventilation systems.",
        "project.sphere.point1": "Area: 25,000 m²",
        "project.sphere.point2": "Program: offices + coworking + services",
        "project.sphere.point3": "Highlight: modular workspace system",
        "project.sphere.role": "Lead architect, integration of sustainable tech and facade solutions."
    }
};

const langToggle = document.getElementById("langToggle");

const applyLanguage = (lang) => {
    const dictionary = translations[lang];
    if (!dictionary) {
        return;
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dictionary[key]) {
            el.textContent = dictionary[key];
        }
    });

    document.documentElement.lang = lang;
    localStorage.setItem("siteLang", lang);
};

const storedLang = localStorage.getItem("siteLang") || "ru";
applyLanguage(storedLang);

if (langToggle) {
    langToggle.addEventListener("click", () => {
        const currentLang = localStorage.getItem("siteLang") || "ru";
        const nextLang = currentLang === "ru" ? "en" : "ru";
        applyLanguage(nextLang);
    });
}

AOS.init({
    duration: 900,
    once: true,
    easing: "ease-out-cubic"
});

if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero__text", {
        opacity: 0,
        y: 40,
        duration: 1
    });

    gsap.from(".hero__card", {
        opacity: 0,
        x: 40,
        duration: 1,
        delay: 0.4
    });

    gsap.to(".floating__item", {
        y: -12,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "sine.inOut"
    });

    gsap.utils.toArray(".skill-card").forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            },
            opacity: 0,
            y: 30,
            duration: 0.8
        });
    });
}

if (window.particlesJS) {
    particlesJS("particles-js", {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 900 } },
            color: { value: "#7cd4ff" },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 140, color: "#7cd4ff", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1.2 }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 90 } }
        },
        retina_detect: true
    });
}
