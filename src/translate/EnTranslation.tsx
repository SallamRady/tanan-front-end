const EnTranslation = {
  navbar: {
    links: {
      home: "Home",
      about: "About Us",
      contact: "Contact Us",
      services: "Services",
      achievements: "Achievements",
    },
    actions: {
      FreeConsultation: "Free consultation",
    },
  },
  home: {
    services: {
      services: "Services",
      service1: "Brand Strategy and Identity",
      service2: "Digital Marketing Campaigns",
      service3: "Content Creation",
    },
    bridge: {
      react: "React",
      affect: "Affect",
      convince: "Convince",
      sell: "Sell",
    },
    clients: {
      title: "Clients",
      statement:
        "Our journey is driven by strong partnerships and trusted clients who have shared their creative visions with us.",
    },
    achievements: {
      experience: "Years of experience",
      customers: "Happy customers",
      reviews: "Positive reviews",
      appreciation: "Customers appreciation",
    },
    contact: {
      question: "Ready to launch your next project?",
      contact: "Contact Us",
    },
  },
  footer: {
    links: [
      {
        title: "company",
        links: [
          { path: "/", text: "Home" },
          { path: "/about", text: "About Us" },
          { path: "/services", text: "Services" },
          { path: "/contact", text: "Contact Us" },
        ],
      },
      {
        title: "Services",
        links: [
          { path: "/services", text: "Brand Strategy and Identity" },
          { path: "/services", text: "Digital Marketing Campaigns" },
          { path: "/services", text: "Content Creation" },
        ],
      },
      {
        title: "Legal",
        links: [
          { path: "/", text: "Privacy Policy" },
          { path: "/", text: "Terms & Conditions" },
        ],
      },
    ],
  },
  buttons: {
    viewMore: "View More",
  },
  welcome: "Welcome to my multilingual website, this language is English.",
};

export type TranslationObjectType = typeof EnTranslation;

export default EnTranslation;
