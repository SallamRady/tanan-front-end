const ArTranslation = {
  navbar: {
    links: {
      home: "الصفحة الرئيسية",
      about: "نبذة عنا",
      contact: "تواصل معنا",
      services: "خدماتنا",
      achievements: "انجازات",
    },
    actions: {
      FreeConsultation: "استشارة مجانية",
    },
  },
  home: {
    services: {
      services: "خدماتنا",
      service1: "نبنى استراتيجية و هوية العلامة التجارية",
      service2: "نصنع الحملات التسويقية المتكاملة",
      service3: "الكتابة الإبداعية",
    },
    bridge: {
      react: "يصل",
      affect: "يؤثر",
      convince: "يقنع",
      sell: "يبيع",
    },
    clients: {
      title: "عملائنا",
      statement:
        "رحلتنا مستمدة من شراكات قوية وعملاء موثوقين شاركونا رؤاهم الإبداعية.",
    },
    achievements: {
      experience: "عامًا من الخبرة",
      customers: "عملاء سعداء",
      reviews: "تقييمات إيجابية",
      appreciation: "تقدير من العملاء",
    },
    contact: {
      question: "مستعد لإطلاق مشروعك القادم؟",
      contact: "تواصل معنا",
    },
  },
  footer: {
    links: [
      {
        title: "المؤسسة",
        links: [
          { path: "/", text: "الرئيسية" },
          { path: "/about", text: "من نحن" },
          { path: "/services", text: "خدماتنا" },
          { path: "/contact", text: "تواصل معنا" },
        ],
      },
      {
        title: "خدماتنا",
        links: [
          {
            path: "/services",
            text: "نبنى استراتيجية و هوية العلامة التجارية",
          },
          { path: "/services", text: "نصنع الحملات التسويقية المتكاملة" },
          { path: "/services", text: "الكتابة الإبداعية" },
        ],
      },
      {
        title: "قانوني",
        links: [
          { path: "/Legal", text: "سياسة الخصوصية" },
          { path: "/Legal", text: "شروط الاستخدام" },
        ],
      },
    ],
  },
  buttons: {
    viewMore: "عرض المزيد",
  },
  welcome: "مرحبا بك فى موقعي متعدد اللغات و هذة اللغة العربية",
};

export type TranslationObjectType = typeof ArTranslation;

export default ArTranslation;
