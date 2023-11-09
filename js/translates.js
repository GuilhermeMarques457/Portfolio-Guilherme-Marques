const btnBrasil = document.querySelector(".btn-br");
const btnEua = document.querySelector(".btn-eua");

const translations_pt = {
  commom_text_code: "Código disponível em:",
  commom_status_finished: "Finalizado",
  commom_status_discontinued: "Descontinuado",
  commom_status_in_development: "Em desinvolvimento",
  commom_technology_text: "Técnologias:",
  text_about_me_1:
    "Olá, Guilherme! Prazer em conhecê-lo. Sou Guilherme, um entusiasta de 17 anos que se apaixonou pelo desenvolvimento de sistemas desde que iniciou na área em 2022. Recentemente, tive a imensa satisfação de concluir meu curso técnico na Etec, alcançando esse marco no primeiro semestre de 2023.",
  text_about_me_2:
    "Tive a oportunidade de realizar a manutenção de software oferecido pelo meu professor, o qual foi desenvolvido utilizando ASP.NET Razor Pages. Além disso, durante a elaboração do meu TCC, utilizei ASP.NET MVC. Essas experiências me despertaram um grande interesse no ambiente Microsoft, levando-me a realizar um extenso curso de mais de 70 horas em ASP.NET Core 7.",
  text_about_me_3:
    "Gosto de aprender coisas novas. Antes de ingressar nessa área, decidi estudar inglês. Hoje, tenho orgulho de dizer que sou fluente, tal fato me ajuda muito no contexto em que estou atualmente.",
  nav_about_me: "Sobre mim",
  nav_projects: "Projetos",
  title_who_i_am: "Quem sou eu?",
  title_habilities: "Tecnologias Destacadas",
  // text_habilities_1:
  //   "Ao longo da minha trajetória como desenvolvedor, adquiri um conjunto diversificado de habilidades. Inicialmente, meu desejo era me tornar um programador Front-end, e para perseguir esse objetivo, concluí um curso de web design na Udemy (que você pode encontrar na seção de currículo). Além disso, estou prestes a finalizar um curso de JavaScript, avançando para um framework.",
  // text_habilities_2:
  //   "No entanto, como dizem, nem sempre as coisas saem como planejado. Circunstâncias me levaram a me aprofundar no desenvolvimento back-end usando ASP.NET. Isso foi especialmente relevante para o meu Trabalho de Conclusão de Curso (TCC), que foi desenvolvido em ASP.NET MVC 5, e também para o meu trabalho atual. Recentemente, concluí um curso de ASP.NET 7 e retomei meu curso de JavaScript, pois meu desejo é me tornar um desenvolvedor full stack. Essa ambição reflete meu anseio de combinar minhas habilidades front-end e back-end para criar aplicações abrangentes e dinâmicas.",
  // text_habilities_3:
  //   "Vale ressalter que uma das minhas habilidades é o domínio avançado da língua inglesa, uma competência que venho desenvolvendo ao longo de um período significativo de tempo. Durante a pandemia, decidi dedicar-me intensamente a aprimorar meu conhecimento nesse idioma, adquirindo um nível de proficiência avançada, do qual eu possuo muito orgulho.",
  title_xp: "Experiência Profissional",
  text_xp_1:
    "Atualmente estou empregado em uma empresa onde estou trabalhando com o desenvolvimento de software utilizando ASP.NET Razor Pages, além de integração com um aplicativo móvel utilizando o flutter. Essa oportunidade surgiu por meio da indicação do meu professor, e desde então tenho atuado como desenvolvedor nessa empresa.",
  text_xp_2:
    "Na empresa em que trabalho, sou responsável pela manutenção do software e também pela implementação de novas funcionalidades que meu chefe considera interessantes para o sistema. Atualmente, desfruto da autonomia de trabalhar sozinho, assumindo diversas tarefas, e quando me deparo com algum obstáculo, posso contar com a ajuda e orientação do meu professor.",
  title_achievements: "Certificações e Conquistas",
  text_achievements:
    "Ao longo da minha trajetória profissional, tive a oportunidade de obter diversos certificados que comprovam minha expertise em diferentes áreas. Cada certificado representa um marco importante na minha jornada de aprendizado e demonstra meu comprometimento em me aprimorar constantemente. Compartilho a seguir alguns dos certificados que conquistei, os quais refletem minha dedicação e conhecimento adquiridos ao longo do tempo. Todos esses certificados podem ser encontrados dentro do meu perfil do linkedin.",
  text_project_omnifood:
    'Este projeto foi realizado durante o curso "Build Responsive Real-World Websites with HTML and CSS", e obtive uma série de aprendizados valiosos por meio dele, tais como design de experiência do usuário (UX) e design de interface (UI), juntamente com outros conceitos fundamentais, como responsividade e a forma como um site é desenvolvido no contexto real.',
  text_project_odonto_1:
    'O projeto "Odonto Control" ocupa um lugar especial no meu coração. A ideia para esse projeto surgiu da minha dentista, e logo após concluir meu curso de ASP.NET, decidi aplicar todo o conhecimento adquirido na prática, o que resultou em um projeto final incrível com diversas funcionalidades que levei meses para implementar.',
  text_project_odonto_2:
    "Durante o desenvolvimento desse projeto, adquiri valiosas experiências sobre a estruturação de sistemas, aprendendo  com meus acertos e erros. Essa jornada me proporcionou um profundo entendimento do ambiente .NET e me deixou extremamente confiante na minha habilidade de desenvolvimento.",
  text_project_odonto_3:
    "Para compartilhar esse trabalho, disponibilizei o projeto no GitHub. No entanto, tenho planos de comercializá-lo no futuro, por isso, algumas informações sensíveis no projeto do GitHub foram alteradas para proteger o projeto.",
  text_project_ponto_digital:
    "Este projeto foi desenvolvido com o objetivo de apresentar um novo produto. Após analisar minhas habilidades de design em outros projetos anteriores, meu chefe sugeriu que criássemos um site semelhante para nossa empresa. O site segue os mesmos princípios de responsividade e web design que aprendi em um curso anteriormente mencionado. Caso tenha interesse em visualizar o código-fonte, disponibilizei-o no GitHub.",
  text_title_project_pokemon: "Projeto Pokemon",
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
  text_title_project_js_1: "Projetos em JavaScript",
  text_title_project_js_2: "+ Projetos em JavaScript",
  text_project_js_1:
    'Aqui estão alguns projetos que realizei durante o meu curso de JavaScript, "The Complete JavaScript Course 2023: From Zero to Expert!" Esses projetos me proporcionaram uma compreensão sólida de conceitos fundamentais, como manipulação do DOM e criação de efeitos visuais frequentemente utilizados em diversos websites.',
  text_project_js_2:
    'Aqui estão alguns mais projetos que realizei durante o meucurso de JavaScript, "The Complete JavaScript Course2023".',
  text_project_js_3:
    'O projeto denominado "Forkify", foi desafiador, porém incrivelmente gratificante, pois me deu a oportunidade de aplicar e consolidar todos os conhecimentos que adquiri ao longo do curso. Utilizei uma arquitetura MVC e JavaScript puro (Vanilla JS), com a compilação realizada pelo Parcel.',
  text_project_js_4:
    "Já o outro projeto chamando Mapty foi bem mais simples, um app de monitoramento de corridas e caminhadas utilizando uma API de geolocalização, no entando adquiri diversos conhecimentos na elaboração do mesmo.",
  text_title_project_aspnet: "Projetos em Asp.Net 7",
  text_project_aspnet_1:
    'Aqui estão alguns projetos que desenvolvi durante o meu curso de Asp.Net 7, intitulado "Asp.Net Core 7 (.NET 7) | True Ultimate Guide". Esses projetos representam um conjunto abrangente de funcionalidades que adquiri ao longo do curso.',
  text_project_aspnet_2:
    "Durante o curso, adquiri diversas habilidades e apliquei em meus projetos. Isso incluiu programação assíncrona, criação de testes unitários usando xUnit e mocks, utilização de injeção de dependência, definição de contratos para serviços e repositórios, adoção do padrão DTO (Data Transfer Object), implementação do Entity Framework para conexão do banco de dados, aplicação dos princípios SOLID, integração do Identity, implementação de logging, utilização de filtros e muitas outras funcionalidades.",
  text_project_angular_recipe_1:
    'Este projeto foi desenvolvido como parte do curso "Angular- The Complete Guide (2023 Edition)". O objetivo central deste projeto foi aprofundar o conhecimento em Angular e criar um sistema de gerenciamento de receitas e ingredientes altamente funcional e focado em UX.',
  text_project_angular_recipe_2:
    "Durante a execução deste projeto, foram aplicadas várias tecnologias essenciais do Angular, incluindo componentes, diretivas, módulos, guards, interceptors, injeção de dependência, roteamento, formulários reativos e 'template-driven' formulários e um sitema simples de autenticação. Vale resaltar a utilização do firebase como backend algo que com sua facilidade de uso e escalabilidade, permitiu acriação de uma base de dados em tempo real para armazenare gerenciar as receitas e logins dos usuários.",
  curriculum_button: "Baixe meu currículo",
};

const translations_en = {
  commom_text_code: "Code available at:",
  commom_status_finished: "Finished",
  commom_status_discontinued: "Discontinued",
  commom_status_in_development: "In development",
  commom_technology_text: "Technologies:",
  text_about_me_1:
    "Hello, Guilherme! Nice to meet you. I'm Guilherme, a 17-year-old enthusiast who fell in love with System Development since I started in the field in 2022. Recently, I had the immense satisfaction of completing my technical course at Etec, achieving this milestone in the first semester of 2023.",
  text_about_me_2:
    "I had the opportunity to perform maintenance on a software provided by my teacher, which was developed using ASP.NET Razor Pages. In addition, during the preparation of my thesis, I utilized ASP.NET MVC. These experiences have sparked a keen interest in the Microsoft environment, prompting me to undertake an extensive course of over 70 hours in ASP.NET Core 7.",
  text_about_me_3:
    "I enjoy learning new things. Before entering this field, I decided to study English. Today, I am proud to say that I am fluent, and it greatly help me in the current context I am in.",
  nav_about_me: "About me",
  nav_projects: "Projects",
  title_who_i_am: "Who am I?",
  title_habilities: "Highlighted Technologies",
  // text_habilities_1:
  //   "During my journey as a developer, I have acquired a diverse set of skills. Initially, my desire was to become a Front-end programmer, and to get that goal, I completed a web design course on Udemy (which you can find in the curriculum section). Additionally, I am about to finish a JavaScript course, to in future learn a framework.",
  // text_habilities_2:
  //   "However, as they say, things don't always go as planned. Circumstances led me to get into back-end development using ASP.NET. This was particularly relevant for my Final Course Project (TCC in Brasil), which was developed in ASP.NET MVC 5, and also for my current job. Recently, I completed an ASP.NET 7 course and resumed my JavaScript course because my desire is to become a full-stack developer. This ambition reflects my eagerness to combine my front-end and back-end skills to create dynamic applications.",
  // text_habilities_3:
  //   "It's worth know that I possess an advanced proficiency in the English language, a skill that I have been developing over a significant period of time. During the pandemic, I dedicated myself intensively to improving my knowledge of the language, resulting in an advanced level of proficiency which I'm really proud of myself.",
  title_xp: "Professional experience",
  text_xp_1:
    "Currently, I am employed at a company where I am working on software development using ASP.NET Razor Pages, as well as integrating with a mobile application using Flutter. This opportunity appeared through a recommendation from my professor, and since then, I have been working as a developer at this company.",
  text_xp_2:
    "At the company I work for, I am responsible for software maintenance and also for implementing new features that my boss considers interesting for the system. Currently, I enjoy the autonomy of working alone, assuming various tasks, and when I encounter any obstacles, I can call help and guidance of my professor.",
  title_achievements: "Certificates and Achievements",
  text_achievements:
    "Throughout my professional journey, I have had the opportunity to obtain various certifications that demonstrate my expertise in different areas. Each certificate represents an important part in my learning journey and showcases my commitment to continuously improve myself. I would like to share some of the certificates I have earned, which reflect my dedication and knowledge acquired over time. All these certificates can be found on my LinkedIn profile.",
  text_project_omnifood: `This project were made during the course "Build Responsive Real-World Websites with HTML and CSS and I've gained a series of valuable learnings through it, such as User Experience (UX) design and User Interface (UI) design, along with other fundamental concepts like responsiveness and how a website is developed in a real-world context.`,
  text_project_odonto_1:
    'The "Odonto Control" project holds a special place in my heart. The idea for this project was inspired by my dentist, and right after completing my ASP.NET course, I decided to put all the knowledge I had gained into practice. This resulted in an amazing final project with various features that took me months to implement.',
  text_project_odonto_2:
    "During the development of this project, I gained valuable experiences in structuring systems, learning from my successes and mistakes. This journey provided me with a deep understanding of the .NET environment and left me extremely confident in my development skills.",
  text_project_odonto_3:
    "To share this work, I made the project available on GitHub. However, I have plans to commercialize it in the future, so some sensitive information in the GitHub project has been modified to protect the project.",
  text_project_ponto_digital:
    "This project was developed with the goal of presenting a new product. After analising my design skills from previous projects, my boss suggested creating a similar website for our company. The website follows the same principles of responsiveness and web design that I learned in the previously mentioned course. If you're interested in viewing the source code, I have made it available on GitHub.",
  text_title_project_pokemon: "Pokemon project",
  text_project_pokemon:
    "This project marked the beginning of my career as a developer. Although I no longer believe in the choices I made in it, I am very proud of this experience because it was the first time I put into practice the knowledge I've gained during my course at ETEC. However, it's important to note that many features are not functional as I decided to stop the development of the project due to other commitments and in development projects.",
  text_project_gym: `After successfully completing my WebDesign course, "Build Responsive Real-World Websites with HTML and CSS", I've decided to put all my newest skills into practice. Excited to test my new abilities, I chose to apply all the knowledge I gained, including principles of responsiveness, design, and other relevant aspects, to a simple project on a topic that greatly interests me: a gym or fitness theme.`,
  text_project_tcc_1:
    'This project was carried out as part of the "Desenvolvimento de Sistemas" course at Etec Eudecio Luiz Vicente. It served as our final project (TCC), developed in collaboration with my classmates. It consists of a forum for programmers with various functionalities, and I feel extremely satisfied with the final result of this project.',
  text_project_tcc_2:
    'This experience was extremely important to me as I initially felt quite anxious about having to learn ASP.NET while working on the project. To prepare myself, I studied in the course "ASP.NET Core 7 (.NET 7) | True Ultimate Guide."',
  text_project_tcc_3:
    "The completion of this TCC and the development of several other projects have provided me with significant confidence in programming with ASP.NET.",
  text_title_project_js_1: "JavaScript Projects",
  text_title_project_js_2: "+ JavaScript Projects",
  text_project_js_1:
    'Here are some projects I completed during my JavaScript course, "The Complete JavaScript Course 2023: From Zero to Expert!" These projects provided me with a solid understanding of fundamental concepts, such as DOM manipulation and the creation of frequently used visual effects in various websites.',
  text_project_js_2:
    'Here are a few more projects I completed during my JavaScript course, "The Complete JavaScript Course 2023."',
  text_project_js_3:
    'The project named "Forkify" was challenging but incredibly rewarding, as it gave me the opportunity to apply and solidify all the knowledge I gained throughout the course. I used an MVC architecture and pure JavaScript (Vanilla JS), with bundling done by Parcel.',
  text_project_js_4:
    "On the other hand, the project called Mapty was much simpler, an app for tracking runs and walks using a geolocation API. However, I gained a lot of knowledge while working on it.",
  text_title_project_aspnet: "Asp.Net 7 Projects",
  text_project_aspnet_1:
    'Here are some projects I developed during my Asp.Net 7 course, titled "Asp.Net Core 7 (.NET 7) | True Ultimate Guide". These projects represent a comprehensive set of functionalities that I acquired during the course.',
  text_project_aspnet_2:
    "Throught the course, I've learned various skills and applied them in my projects. This included asynchronous programming, creating unit tests using xUnit and mocks, utilizing dependency injection, defining contracts for services and repositories, adopting the DTO (Data Transfer Object) pattern, implementing Entity Framework for database connectivity, integrating Identity, applying the SOLID pattern, implementing logging, utilizing filters, and many other functionalities.",
  text_project_angular_recipe_1:
    'This project was developed as part of the "Angular - The Complete Guide (2023 Edition),". The central principal point of this project was to learn Angular and create a highly functional recipe and ingredient management system with a strong focus on user experience (UX).',
  text_project_angular_recipe_2:
    "During the execution of this project, various essential Angular technologies were applied, including components, directives, modules, guards, interceptors, dependency injection, routing, reactive forms, template-driven forms, and a simple authentication system. It's worth noting the use of Firebase as the backend, something that, with its ease of use and scalability, allowed for the creation of a real-time database to store and manage user recipes and logins.",
  curriculum_button: "Download my curriculum",
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

  if (navEfect.classList.contains("about")) {
    navEfect.style.width = `${navAbout.getBoundingClientRect().width}px`;
  } else if (navEfect.classList.contains("projects")) {
    navEfect.style.width = `${navProjects.getBoundingClientRect().width}px`;
  } else {
    navEfect.style.width = `${navAbout.getBoundingClientRect().width}px`;
  }
}

function getTranslations(language) {
  if (language === "en") return translations_en;
  if (language === "pt") return translations_pt;
}

const buttonDownloadCV = document.querySelector(".curriculum-download-link");

btnEua.addEventListener("click", function () {
  changeLanguage("en");

  buttonDownloadCV.href =
    "./documents/Curriculo Guilherme Marques dos Santos EN-US.pdf";

  btnBrasil.classList.remove("selected");
  btnEua.classList.add("selected");

  changeCertificates("EN-US");
});

btnBrasil.addEventListener("click", function () {
  changeLanguage("pt");

  buttonDownloadCV.href =
    "./documents/Curriculo Guilherme Marques dos Santos PT-BR.pdf";

  btnBrasil.classList.add("selected");
  btnEua.classList.remove("selected");

  changeCertificates("PT-BR");
});

const changeCertificates = function (language) {
  const certificateLinks = [...document.querySelectorAll(".certificate-link")];
  certificateLinks.forEach((links) => {
    if (!links.href) return;
    const linksHrefArray = links.href.split("%20");
    linksHrefArray.splice(-1);
    linksHrefArray.push(language + ".pdf");
    links.href = linksHrefArray.join("%20");
  });
};

changeLanguage("pt");
