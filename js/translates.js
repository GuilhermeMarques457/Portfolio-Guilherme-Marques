const btnBrasil = document.querySelector(".btn-br");
const btnEua = document.querySelector(".btn-eua");

const translations_pt = {
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
};

const translations_en = {
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
};

const translations_pt_general = {
  text_code: "Código disponível em:",
};

const translations_en_general = {
  text_code: "Code available at:",
};

function changeLanguage(language) {
  const translations = getTranslations(language);
  for (const id in translations) {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = translations[id];
    }
  }
}

function changeLanguageCommomText(language) {
  const translations = getTranslationsRepeated(language);
  for (const classElement in translations) {
    const elementsArray = document.querySelectorAll("." + classElement);

    elementsArray.forEach((element) => {
      element.textContent = translations[classElement];
    });
  }
}

function getTranslationsRepeated(language) {
  if (language === "en") return translations_en_general;
  if (language === "pt") return translations_pt_general;
}

function getTranslations(language) {
  if (language === "en") return translations_en;
  if (language === "pt") return translations_pt;
}

btnEua.addEventListener("click", function () {
  changeLanguage("en");
  changeLanguageCommomText("en");
  btnBrasil.classList.remove("selected");
  btnEua.classList.add("selected");
});

btnBrasil.addEventListener("click", function () {
  changeLanguage("pt");
  changeLanguageCommomText("pt");
  btnBrasil.classList.add("selected");
  btnEua.classList.remove("selected");
});

changeLanguage("pt");
changeLanguageCommomText("pt");
