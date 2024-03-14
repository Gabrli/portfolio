import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          hero_title1: "I'm",
          hero_title2: "developer",
          hero_subtitle: "IT solutions for your business",
          btn_portfolio: "View my portfolio",
          btn_contact: "Contact",
          about_title: "About me",
          carieer_title: "My carieer",
          carieer_subtitle: "My all experience",
          about_subtitle: "Hello, my name is Gabriel",
          about_description:
            "I am a programmer specializing in front-end development. I create dynamic websites and web applications, providing effective IT solutions for your business. I am ready to implement innovative projects that delight users and support the goals of your online company.",
          carieer_description:
            "For 3 years I programming commercial project and also big project with the other developers. I have seen a lot of solutions and problems, so I'm ready that meet new solutions.",
          skills: "Skills",
          portfolio_title: "My Portfolio",
          taskify_description:
            "Taskify Work Planner: Streamline your task management and enhance productivity with Taskify. Effortlessly organize tasks, collaborate with your team, and stay on top of deadlines. Experience seamless task management today!",
          gopr_description:
            "The GOPR first commercial website was created to provide easy access to contact with GOPR. Thanks to a transparent contact form and clear contact details, users can quickly contact the organization.",
          web_portfolio_description:
            "This is my web portfolio you are currently on. This project shows that I can make business cards, websites, portfolios, companies and people.",
          get_in_touch: "Get in touch",
          get_in_subtext: "How do you want contact with me ?",
          btn_email: "Send email",
          btn_tel: "Phone number"
        },
      },

      pl: {
        translation: {
          hero_title1: "Jestem",
          hero_title2: "developerem",
          hero_subtitle: "Rozwiązania IT dla twojego biznesu.",
          btn_portfolio: "Zobacz moje realizacje",
          btn_contact: "Kontakt",
          about_title: "O mnie",
          carieer_title: "Moja Kariera",
          carieer_subtitle: "Moje całe doświadczenie",
          about_subtitle: "Cześć, nazywam się Gabriel",
          about_description:
            "Jestem programistą specjalizującym się w rozwoju front-end. Tworzę dynamiczne strony internetowe i aplikacje internetowe, dostarczając efektywne rozwiązania informatyczne dla Twojego biznesu. Jestem gotowy do realizacji innowacyjnych projektów, które zachwycą użytkowników i wspierają cele Twojej firmy w Internecie.",
          carieer_description:
            "Od 3 lat programuję projekty komercyjne, a także duże projekty z innymi programistami. Widziałem wiele rozwiązań i problemów, więc jestem gotowy na poznanie nowych.",
          skills: "Umiejętności",
          portfolio_title: "Moje realizacje",
          taskify_description:
            "Taskify Work Planner: Usprawnij zarządzanie zadaniami i zwiększ produktywność dzięki Taskify. Z łatwością organizuj zadania, współpracuj ze swoim zespołem i dotrzymuj terminów. Doświadcz płynnego zarządzania zadaniami już dziś!",
          gopr_description:
            "Pierwsza komercyjna strona internetowa GOPR powstała z myślą o umożliwieniu łatwego kontaktu z GOPR. Dzięki przejrzystemu formularzowi kontaktowemu i czytelnym danym kontaktowym użytkownicy mogą szybko skontaktować się z organizacją.",
          web_portfolio_description:
            "To jest moje portfolio internetowe, na którym aktualnie się znajdujesz. Ten projekt pokazuje, że potrafię tworzyć wizytówki, strony internetowe, portfolio, firmy i osoby.",
          get_in_touch: "Zacznijmy już dziś !",
          get_in_subtext: "Wybierz formę kontaktu.",
          btn_email: "Wyślij mail-a",
          btn_tel: "Zadzwoń"
        },
      },
    },
    lng: "pl", // if you're using a language detector, do not define the lng option
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
