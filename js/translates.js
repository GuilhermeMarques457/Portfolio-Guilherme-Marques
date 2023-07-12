const btnBrasil = document.querySelector(".btn-br");
const btnEua = document.querySelector(".btn-eua");

const translations_pt = {
  commom_text_code: "Código disponível em:",
  commom_status_finished: "Finalizado",
  commom_status_discontinued: "Descontinuado",
  commom_status_in_development: "Em desinvolvimento",
  commom_technology_text: "Técnologias:",
  text_about_me_1:
    "Olá, meu nome é Guilherme e sou um desenvolvedor de sistemas com um forte desejo de crescimento e aprendizado contínuo. Com a recente conclusão do curso de Desenvolvimento de Sistemas na Etec, estou entusiasmado para começar minha carreira no mundo da tecnologia. Ao longo dos últimos dois anos, mergulhei de cabeça no campo da programação, buscando aprimorar minhas habilidades e conhecimentos.",
  text_about_me_2:
    "Como desenvolvedor, possuo uma ampla gama de habilidades, tanto no front-end quanto no back-end. Minha experiência em web design e meu domínio de JavaScript me capacitam a criar interfaces atraentes e interativas para os usuários. Embora tenha conhecimento avançado em ASP.NET e suas diversas funcionalidades, meu objetivo futuro é me especializar no desenvolvimento front-end utilizando o framework React. Acredito que a combinação do meu conhecimento técnico com minha criatividade me permitirá criar experiências de usuário excepcionais e dinâmicas.",
  nav_about_me: "Sobre mim",
  nav_projects: "Projetos",
  tittle_who_i_am: "Quem sou eu?",
  tittle_habilities: "Habilidades",
  text_habilities_1:
    "Ao longo da minha trajetória como desenvolvedor, adquiri um conjunto diversificado de habilidades. Inicialmente, meu desejo era me tornar um programador Front-end, e para perseguir esse objetivo, concluí um curso de web design na Udemy (que você pode encontrar na seção de currículo). Além disso, estou prestes a finalizar um curso de JavaScript, avançando para um framework.",
  text_habilities_2:
    "No entanto, como dizem, nem sempre as coisas saem como planejado. Circunstâncias me levaram a me aprofundar no desenvolvimento back-end usando ASP.NET. Isso foi especialmente relevante para o meu Trabalho de Conclusão de Curso (TCC), que foi desenvolvido em ASP.NET MVC 5, e também para o meu trabalho atual. Recentemente, concluí um curso de ASP.NET 7 e retomei meu curso de JavaScript, pois meu desejo é me tornar um desenvolvedor full stack. Essa ambição reflete meu anseio de combinar minhas habilidades front-end e back-end para criar aplicações abrangentes e dinâmicas.",
  tittle_xp: "Experiência Profissional",
  text_xp_1:
    "Atualmente estou empregado em uma empresa onde estou trabalhando com o desenvolvimento de software utilizando ASP.NET Razor Pages, além de integração com um aplicativo móvel utilizando o flutter. Essa oportunidade surgiu por meio da indicação do meu professor, e desde então tenho atuado como desenvolvedor nessa empresa.",
  text_xp_2:
    "Na empresa em que trabalho, sou responsável pela manutenção do software e também pela implementação de novas funcionalidades que meu chefe considera interessantes para o sistema. Atualmente, desfruto da autonomia de trabalhar sozinho, assumindo diversas tarefas, e quando me deparo com algum obstáculo, posso contar com a ajuda e orientação do meu professor.",
  tittle_achievements: "Certificações e Conquistas",
  text_achievements:
    "Ao longo da minha trajetória profissional, tive aoportunidade de obter diversos certificados que comprovamminha expertise em diferentes áreas. Cada certificadorepresenta um marco importante na minha jornada deaprendizado e demonstra meu comprometimento em meaprimorar constantemente. Compartilho a seguir alguns doscertificados que conquistei, os quais refletem minhadedicação e conhecimento adquiridos ao longo do tempo.Todos esses certificados podem ser encontrados dentro domeu perfil do linkedin.",
  text_project_omnifood:
    'Este projeto foi realizado durante o curso "Build Responsive Real-World Websites with HTML and CSS", e obtive uma série de aprendizados valiosos por meio dele, tais como design de experiência do usuário (UX) e design de interface (UI), juntamente com outros conceitos fundamentais, como responsividade e a forma como um site é desenvolvido no contexto real.',
  text_project_ponto_digital:
    "Este projeto foi desenvolvido com o objetivo de apresentar um novo produto. Após analisar minhas habilidades de design em outros projetos anteriores, meu chefe sugeriu que criássemos um site semelhante para nossa empresa. O site segue os mesmos princípios de responsividade e web design que aprendi em um curso anteriormente mencionado. Caso tenha interesse em visualizar o código-fonte, disponibilizei-o no GitHub.",
  text_tittle_project_pokemon: "Projeto Pokemon",
  text_project_pokemon:
    "Este projeto marcou o início da minha carreira como desenvolvedor. Embora eu não acredite mais nas escolhas que fiz nele, tenho muito orgulho dessa experiência, pois foi a primeira vez que coloquei em prática os conhecimentos adquiridos durante meu curso na ETEC. No entanto, é importante ressaltar que muitas funcionalidades não estão operacionais, pois decidi interromper o desenvolvimento do projeto devido a outros compromissos e projetos em andamento.",
  text_project_gym:
    'Após concluir com êxito o meu curso de WebDesign "Build Responsive Real-World Websites with HTML and CSS", decidi colocar em prática todas as habilidades adquiridas. Animado para testar as minhas novas competências, decidi aplicar todo o conhecimento adquirido, incluindo os princípios de responsividade, design e outros aspectos relevantes, em um projeto simples sobre um tema que desperta grande interesse em mim: academia.',
  text_project_tcc_1:
    'Este projeto foi realizado como parte do curso "Desenvolvimento de Sistemas" na Etec Eudecio Luiz Vicente. Ele serviu como nosso Trabalho de Conclusão de Curso (TCC), desenvolvido em conjunto com meus colegas de sala. O mesmo consiste em um forúm para programadores com diversas funcionalidades e sinto extrema satisfação com o resultado desse projeto.',
  text_project_tcc_2:
    'Essa experiência foi de extrema importância para mim, pois inicialmente estava bastante ansioso, já que teria que aprender ASP.NET enquanto trabalhava no projeto. Para me preparar, participei do curso "ASP.NET Core 7 (.NET 7) | True Ultimate Guide".',
  text_project_tcc_3:
    "A conclusão desse TCC e a realização de diversos outros projetos me proporcionaram uma confiança significativa ao programar em ASP.NET.",
};

const translations_en = {
  commom_text_code: "Code available at:",
  commom_status_finished: "Finished",
  commom_status_discontinued: "Discontinued",
  commom_status_in_development: "In development",
  commom_technology_text: "Technologies:",
  text_about_me_1:
    "Hello, my name is Guilherme, and I'm a systems developer with a strong desire for growth and continuous learning. With the recent completion of the \"Desenvolvimento de Sistemas\" course at Etec, I'm excited to start my career in the world of technology. Over the past two years, I have immersed myself in the field of programming, trying to upgrade my skills and knowledge.",
  text_about_me_2:
    "As a developer, I have a wide range of skills in both front-end and back-end development. My experience in web design and mastery of JavaScript let me create appealing and interactive interfaces for users. Although I have advanced knowledge in ASP.NET and its various functionalities, my future goal is to specialize in front-end development using the React framework. I believe that combining my technical expertise with my creativity will enable me to craft exceptional and dynamic user experiences.",
  nav_about_me: "About me",
  nav_projects: "Projects",
  tittle_who_i_am: "Who am I?",
  tittle_habilities: "Habilities",
  text_habilities_1:
    "During my journey as a developer, I have acquired a diverse set of skills. Initially, my desire was to become a Front-end programmer, and to get that goal, I completed a web design course on Udemy (which you can find in the curriculum section). Additionally, I am about to finish a JavaScript course, to in future learn a framework.",
  text_habilities_2:
    "However, as they say, things don't always go as planned. Circumstances led me to get into back-end development using ASP.NET. This was particularly relevant for my Final Course Project (TCC in Brasil), which was developed in ASP.NET MVC 5, and also for my current job. Recently, I completed an ASP.NET 7 course and resumed my JavaScript course because my desire is to become a full-stack developer. This ambition reflects my eagerness to combine my front-end and back-end skills to create dynamic applications.",
  tittle_xp: "Professional experience",
  text_xp_1:
    "Currently, I am employed at a company where I am working on software development using ASP.NET Razor Pages, as well as integrating with a mobile application using Flutter. This opportunity appeared through a recommendation from my professor, and since then, I have been working as a developer at this company.",
  text_xp_2:
    "At the company I work for, I am responsible for software maintenance and also for implementing new features that my boss considers interesting for the system. Currently, I enjoy the autonomy of working alone, assuming various tasks, and when I encounter any obstacles, I can call help and guidance of my professor.",
  tittle_achievements: "Certificates and Achievements",
  text_achievements:
    "Throughout my professional journey, I have had the opportunity to obtain various certifications that demonstrate my expertise in different areas. Each certificate represents an important part in my learning journey and showcases my commitment to continuously improve myself. I would like to share some of the certificates I have earned, which reflect my dedication and knowledge acquired over time. All these certificates can be found on my LinkedIn profile.",
  text_project_omnifood: `This project were made during the course "Build Responsive Real-World Websites with HTML and CSS and I've gained a series of valuable learnings through it, such as User Experience (UX) design and User Interface (UI) design, along with other fundamental concepts like responsiveness and how a website is developed in a real-world context.`,
  text_project_ponto_digital:
    "This project was developed with the goal of presenting a new product. After analising my design skills from previous projects, my boss suggested creating a similar website for our company. The website follows the same principles of responsiveness and web design that I learned in the previously mentioned course. If you're interested in viewing the source code, I have made it available on GitHub.",
  text_tittle_project_pokemon: "Pokemon project",
  text_project_pokemon:
    "This project marked the beginning of my career as a developer. Although I no longer believe in the choices I made in it, I am very proud of this experience because it was the first time I put into practice the knowledge I've gained during my course at ETEC. However, it's important to note that many features are not functional as I decided to stop the development of the project due to other commitments and in development projects.",
  text_project_gym: `After successfully completing my WebDesign course, "Build Responsive Real-World Websites with HTML and CSS", I've decided to put all my newest skills into practice. Excited to test my new abilities, I chose to apply all the knowledge I gained, including principles of responsiveness, design, and other relevant aspects, to a simple project on a topic that greatly interests me: a gym or fitness theme.`,
  text_project_tcc_1:
    'This project was carried out as part of the "Desenvolvimento de Sistemas" course at Etec Eudecio Luiz Vicente. It served as our final project (TCC), developed in collaboration with my classmates. It consists of a forum for programmers with various functionalities, and I feel extremely satisfied with the final result of this project.',
  text_project_tcc_2:
    'This experience was extremely important to me as I initially felt quite anxious about having to learn ASP.NET while working on the project. To prepare myself, I studied in the course "ASP.NET Core 7 (.NET 7) | True Ultimate Guide."',
  text_project_tcc_3:
    "The completion of this TCC and the development of several other projects have provided me with significant confidence in programming with ASP.NET.",
};

function changeLanguage(language) {
  const translations = getTranslations(language);
  for (const seletor in translations) {
    const element = document.getElementById(seletor);

    if (element) {
      element.textContent = translations[seletor];
      continue;
    }

    const elementsArray = document.querySelectorAll("." + seletor);

    if (elementsArray) {
      elementsArray.forEach((element) => {
        if (element) {
          element.textContent = translations[seletor];
        }
      });
    }
  }
}

function getTranslations(language) {
  if (language === "en") return translations_en;
  if (language === "pt") return translations_pt;
}

btnEua.addEventListener("click", function () {
  changeLanguage("en");
  btnBrasil.classList.remove("selected");
  btnEua.classList.add("selected");
});

btnBrasil.addEventListener("click", function () {
  changeLanguage("pt");
  btnBrasil.classList.add("selected");
  btnEua.classList.remove("selected");
});

changeLanguage("pt");
