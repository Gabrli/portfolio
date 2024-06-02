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
          btn_portfolio: "View my projects",
          btn_contact: "Offer",
          about_title: "About me",
          carieer_title: "My carieer",
          carieer_subtitle: "My all experience",
          about_subtitle: "Hello, my name is Gabriel",
          about_description:
            "I am a programmer specializing in front-end development. I create dynamic websites and web applications, providing effective IT solutions for your business. I am ready to implement innovative projects that delight users and support the goals of your online company.",
          carieer_description:
            "He has been programming since the 7th grade of primary school. From small games to large applications written in teams. Currently, I am a first-grade student of a programmer technician with a specialization in artificial intelligence and I create commercial projects for clients, as well as I am the originator and creator of some applications,  which can be found on my GitHub.",
          skills: "Skills",
          portfolio_title: "My Projects",
          taskify_description:
            "Taskify Work Planner: Streamline your task management and enhance productivity with Taskify. Effortlessly organize tasks, collaborate with your team, and stay on top of deadlines. Experience seamless task management today!",
          gopr_description:
            "Website of the Mountain Volunteer Rescue Service - Karkonosze",
          web_portfolio_description:
            "This is my web portfolio you are currently on. This project shows that I can make business cards, websites, portfolios, companies and people.",
          get_in_touch: "Get in touch",
          get_in_subtext: "How do you want contact with me ?",
          btn_email: "Send email",
          btn_tel: "Phone number",
          offer_title: "What we offer ?",
          www_title: "Websites",
          web_app_title: "Web Applications",
          ui_title: "Design",
          www_description:
            "Websites are invaluable for communicating, accessing knowledge, and expanding activities such as online shopping and distance learning. They provide quick access to information, enable interaction with others and provide convenience in many aspects of life.",
          web_app_description:
            "Web applications, like websites, facilitate quick access to services and tools, eliminating the need to install software. They provide the ability to manage tasks, communicate, and conduct business and entertainment using a web browser, which brings convenience and flexibility.",
          seo_description:
            "It is worth taking care of SEO because it improves the visibility of the website in search engines, which can attract more visitors, potential customers and increase the brand's online reputation.",
          ui_description:
            "It is worth taking care of a well-designed website because it affects the first impression of users, their experience when viewing content and can increase conversion and a positive brand image.",
          runbalance_description:
            "It is blog which was created for Trail runner.",
        },
      },

      pl: {
        translation: {
          hero_title1: "Jestem",
          hero_title2: "developerem",
          hero_subtitle: "Rozwiązania IT dla twojego biznesu.",
          btn_portfolio: "Zobacz moje projekty",
          btn_contact: "Oferta",
          about_title: "O mnie",
          carieer_title: "Moja Kariera",
          carieer_subtitle: "Moje całe doświadczenie",
          about_subtitle: "Cześć, nazywam się Gabriel",
          about_description:
            "Jestem programistą specjalizującym się w rozwoju front-end. Tworzę dynamiczne strony internetowe i aplikacje internetowe, dostarczając efektywne rozwiązania informatyczne dla Twojego biznesu. Jestem gotowy do realizacji innowacyjnych projektów, które zachwycą użytkowników i wspierają cele Twojej firmy w Internecie.",
          carieer_description:
            "Programuje od 7 klasy podstwówki. Od małych gier aż do dużych aplikacji pisanych w zespołach. Obecnie jestem uczniem klasy I technikóm na kierunku technika programisty ze spec. sztuczna inteligencja i  tworzę projekty komercyjne dla klientów jak i ja sam jestem pomysłodawcą i twórcą niektórych aplikacji, które znajdziesz na moim GitHubie.",
          skills: "Umiejętności",
          portfolio_title: "Moje projekty",
          taskify_description:
            "Taskify Work Planner: Usprawnij zarządzanie zadaniami i zwiększ produktywność dzięki Taskify. Z łatwością organizuj zadania, współpracuj ze swoim zespołem i dotrzymuj terminów. Doświadcz płynnego zarządzania zadaniami już dziś!",
          gopr_description:
            "Strona WWW Górskiego Ochotniczego Pogotowia Ratunkowego - Karkonosze ",
          web_portfolio_description:
            "To jest moje portfolio internetowe, na którym aktualnie się znajdujesz. Ten projekt pokazuje, że potrafię tworzyć wizytówki, strony internetowe, portfolio, firmy i osoby.",
          get_in_touch: "Zacznijmy już dziś !",
          get_in_subtext: "Wybierz formę kontaktu.",
          btn_email: "Wyślij mail-a",
          btn_tel: "Zadzwoń",
          offer_title: "Co oferujemy ?",
          www_title: "Strony WWW",
          web_app_title: "Aplikacje webowe",
          ui_title: "Projektowanie",
          www_description:
            "Strony internetowe są nieocenione dzięki możliwościom komunikacji, dostępu do wiedzy oraz ułatwieniu codziennych czynności, takich jak zakupy online czy nauka zdalna. Dają nam szybki dostęp do informacji, umożliwiają interakcję z innymi i zapewniają wygodę w wielu aspektach życia.",
          web_app_description:
            "Aplikacje webowe, podobnie jak strony internetowe, ułatwiają szybki dostęp do usług i narzędzi, eliminując konieczność instalowania oprogramowania. Dają możliwość zarządzania zadaniami, komunikacji oraz prowadzenia biznesu i rozrywki za pomocą przeglądarki internetowej, co przynosi wygodę i elastyczność.",
          seo_description:
            "Warto zadbać o SEO, ponieważ poprawia on widoczność strony w wyszukiwarkach internetowych, co może przyciągnąć większą liczbę odwiedzających, potencjalnych klientów i zwiększyć reputację marki online.",
          ui_description:
            "Warto zadbać o dobrze zaprojektowaną stronę, ponieważ wpływa to na pierwsze wrażenie użytkowników, ich doświadczenie podczas przeglądania treści oraz może zwiększyć konwersję i pozytywny wizerunek marki.",
          runbalance_description:
            "Ten projekt to strona blog dla Pawała Wiśniewskiego, czyli biegacza górskiego i pasjonata gór",
        },
      },
    },
    lng: "pl", // if you're using a language detector, do not define the lng option
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
