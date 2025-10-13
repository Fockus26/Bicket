// Features
import eventVideo from "assets/video/event-video.webm";
import seatsVideo from "assets/video/seats-video.webm";

// TicketMaster
import logoTicketMaster from "assets/svg/logo-ticketmaster.svg";
import pageTicketMaster from "assets/image/ticketmaster/page-ticketmaster.webp";
import authenticationTicketMaster from "assets/image/ticketmaster/authentication-ticketmaster.webp";
import searchingTicketMaster from "assets/image/ticketmaster/searching-ticketmaster.webp";
import buyingTicketMaster from "assets/image/ticketmaster/buying-ticketmaster.webp";
import videoPageTicketMaster from "assets/video/ticketmaster/page-ticketmaster.webm";
import videoAuthenticationTicketMaster from "assets/video/ticketmaster/authentication-ticketmaster.webm";
import videoSearchingTicketMaster from "assets/video/ticketmaster/searching-ticketmaster.webm";
import videoBuyingTicketmaster from "assets/video/ticketmaster/buying-ticketmaster.webm";

// SuperBoletos
import logoSuperBoletos from "assets/svg/logo-superboletos.svg";
import pageSuperBoletos from "assets/image/superboletos/page-superboletos.webp";
import authenticationSuperBoletos from "assets/image/superboletos/authentication-superboletos.webp";
import searchingSuperBoletos from "assets/image/superboletos/searching-superboletos.webp";
import buyingSuperBoletos from "assets/image/superboletos/buying-superboletos.webp";
import videoPageSuperBoletos from "assets/video/superboletos/page-superboletos.webm";
import videoAuthenticationSuperBoletos from "assets/video/superboletos/authentication-superboletos.webm";
import videoSearchingSuperBoletos from "assets/video/superboletos/searching-superboletos.webm";
import videoBuyingSuperBoletos from "assets/video/superboletos/buying-superboletos.webm";

// FunTicket
import logoFunTicket from "assets/svg/logo-funticket.svg";
import pageFunTicket from "assets/image/funticket/page-funticket.webp";
import authenticationFunTicket from "assets/image/funticket/authentication-funticket.webp";
import searchingFunTicket from "assets/image/funticket/searching-funticket.webp";
import buyingFunTicket from "assets/image/funticket/buying-funticket.webp";
import videoPageFunTicket from "assets/video/funticket/page-funticket.webm";
import videoAuthenticationFunTicket from "assets/video/funticket/authentication-funticket.webm";
import videoSearchingFunTicket from "assets/video/funticket/searching-funticket.webm";
import videoBuyingFunTicket from "assets/video/funticket/buying-funticket.webm";

// Icons
import iconCaptcha from "assets/image/icons/captcha.webp";
import iconSMS from "assets/image/icons/sms.webp";
import iconEmail from "assets/image/icons/email.webp";
import iconProxy from "assets/image/icons/proxy.webp";

const data = [
  {
    videoURL: eventVideo,
    title: "Access any Event",
    content:
      "You can access any event that you want, as concerts as sports events",
  },
  {
    videoURL: seatsVideo,
    title: "Best Seats",
    content: "The best seats with just one click thanks to our software",
  },
];

const dataPages = {
  ticketmaster: {
    navBar: {
      imgSrc: logoTicketMaster,
      imgAlt: "Logo TicketMaster",
    },
    article: {
      page: {
        media: {
          imgSrc: pageTicketMaster,
          imgAlt: "Page TicketMaster",
          videoSrc: videoPageTicketMaster,
        },
        header: {
          caption: `The most complete webpage of sell tickets. What are you waiting for get those tickets? C'mon`,
          icon: "fa-solid fa-ticket",
        },
        footer: [
          {
            caption: "Difficult",
            stripes: 6,
          },
          {
            caption: "Availability",
            stripes: 2,
          },
          {
            caption: "Prices",
            stripes: 1,
          },
        ],
      },
      authentication: {
        media: {
          imgSrc: authenticationTicketMaster,
          imgAlt: "Authentication TicketMaster",
          videoSrc: videoAuthenticationTicketMaster,
        },
        header: {
          caption: `Did you have issues with authentication? Don't worry more because our software it's on it`,
          icon: "fa-solid fa-key",
        },
        footer: [
          {
            imgSrc: iconCaptcha,
            imgAlt: "Icon Captcha",
            caption: "AntiCaptcha",
          },
          {
            imgSrc: iconEmail,
            imgAlt: "Icon Email",
            caption: "Email Generator",
          },
          {
            imgSrc: iconSMS,
            imgAlt: "Icon SMS",
            caption: "Disposable SMS",
          },
          {
            imgSrc: iconProxy,
            imgAlt: "Icon Proxy",
            caption: "Any Location",
          },
        ],
      },
      searching: {
        media: {
          imgSrc: searchingTicketMaster,
          imgAlt: "Searching TicketMaster",
          videoSrc: videoSearchingTicketMaster,
        },
        header: {
          caption: `The best search engine go for your favourite events. Our software has 3 phases`,
          icon: "fa-solid fa-magnifying-glass",
        },
        footer: [
          {
            caption: "1. Main Event",
            icon: "fa-solid fa-house",
          },
          {
            caption: "2. Specific Event",
            icon: "fa-solid fa-magnifying-glass",
          },
          {
            caption: "3. Datetime",
            icon: "fa-solid fa-calendar-days",
          },
        ],
      },
      buying: {
        media: {
          imgSrc: buyingTicketMaster,
          imgAlt: "Buying TicketMaster",
          videoSrc: videoBuyingTicketmaster,
        },
        header: {
          caption: `Choose the most knowed payment methods. Get 10% discount for your first mont`,
          icon: "fa-solid fa-shop",
        },
        footer: [
          "fa-brands fa-cc-visa",
          "fa-brands fa-cc-mastercard",
          "fa-brands fa-paypal",
          "fa-solid fa-building-columns",
          "fa-brands fa-bitcoin",
        ],
      },
    },
  },
  superboletos: {
    navBar: {
      imgSrc: logoSuperBoletos,
      imgAlt: "Logo SuperBoletos",
    },
    article: {
      page: {
        media: {
          imgSrc: pageSuperBoletos,
          imgAlt: "Page SuperBoletos",
          videoSrc: videoPageSuperBoletos,
        },
        header: {
          caption: `The most complete webpage of sell tickets. What are you waiting for get those tickets? C'mon`,
          icon: "fa-solid fa-ticket",
        },
        footer: [
          {
            caption: "Difficult",
            stripes: 6,
          },
          {
            caption: "Availability",
            stripes: 2,
          },
          {
            caption: "Prices",
            stripes: 1,
          },
        ],
      },
      authentication: {
        media: {
          imgSrc: authenticationSuperBoletos,
          imgAlt: "Authentication Superboletos",
          videoSrc: videoAuthenticationSuperBoletos,
        },
        header: {
          caption: `Did you have issues with authentication? Don't worry more because our software it's on it`,
          icon: "fa-solid fa-key",
        },
        footer: [
          {
            imgSrc: iconCaptcha,
            imgAlt: "Icon Captcha",
            caption: "AntiCaptcha",
          },
          {
            imgSrc: iconEmail,
            imgAlt: "Icon Email",
            caption: "Email Generator",
          },
          {
            imgSrc: iconSMS,
            imgAlt: "Icon SMS",
            caption: "Disposable SMS",
          },
          {
            imgSrc: iconProxy,
            imgAlt: "Icon Proxy",
            caption: "Any Location",
          },
        ],
      },
      searching: {
        media: {
          imgSrc: searchingSuperBoletos,
          imgAlt: "Searching Superboletos",
          videoSrc: videoSearchingSuperBoletos,
        },
        header: {
          caption: `The best search engine go for your favourite events. Our software has 3 phases`,
          icon: "fa-solid fa-magnifying-glass",
        },
        footer: [
          {
            caption: "1. Main Event",
            icon: "fa-solid fa-house",
          },
          {
            caption: "2. Specific Event",
            icon: "fa-solid fa-magnifying-glass",
          },
          {
            caption: "3. Datetime",
            icon: "fa-solid fa-calendar-days",
          },
        ],
      },
      buying: {
        media: {
          imgSrc: buyingSuperBoletos,
          imgAlt: "Buying SuperBoletos",
          videoSrc: videoBuyingSuperBoletos,
        },
        header: {
          caption: `Choose the most knowed payment methods. Get 10% discount for your first mont`,
          icon: "fa-solid fa-shop",
        },
        footer: [
          "fa-brands fa-cc-visa",
          "fa-brands fa-cc-mastercard",
          "fa-brands fa-paypal",
          "fa-solid fa-building-columns",
          "fa-brands fa-bitcoin",
        ],
      },
    },
  },
  funticket: {
    navBar: {
      imgSrc: logoFunTicket,
      imgAlt: "Logo FunTicket",
    },
    article: {
      page: {
        media: {
          imgSrc: pageFunTicket,
          imgAlt: "Page FunTicket",
          videoSrc: videoPageFunTicket,
        },
        header: {
          caption: `The most complete webpage of sell tickets. What are you waiting for get those tickets? C'mon`,
          icon: "fa-solid fa-ticket",
        },
        footer: [
          {
            caption: "Difficult",
            stripes: 6,
          },
          {
            caption: "Availability",
            stripes: 2,
          },
          {
            caption: "Prices",
            stripes: 1,
          },
        ],
      },
      authentication: {
        media: {
          imgSrc: authenticationFunTicket,
          imgAlt: "Authentication FunTicket",
          videoSrc: videoAuthenticationFunTicket,
        },
        header: {
          caption: `Did you have issues with authentication? Don't worry more because our software it's on it`,
          icon: "fa-solid fa-key",
        },
        footer: [
          {
            imgSrc: iconCaptcha,
            imgAlt: "Icon Captcha",
            caption: "AntiCaptcha",
          },
          {
            imgSrc: iconEmail,
            imgAlt: "Icon Email",
            caption: "Email Generator",
          },
          {
            imgSrc: iconSMS,
            imgAlt: "Icon SMS",
            caption: "Disposable SMS",
          },
          {
            imgSrc: iconProxy,
            imgAlt: "Icon Proxy",
            caption: "Any Location",
          },
        ],
      },
      searching: {
        media: {
          imgSrc: searchingFunTicket,
          imgAlt: "Searching FunTicket",
          videoSrc: videoSearchingFunTicket,
        },
        header: {
          caption: `The best search engine go for your favourite events. Our software has 3 phases`,
          icon: "fa-solid fa-magnifying-glass",
        },
        footer: [
          {
            caption: "1. Main Event",
            icon: "fa-solid fa-house",
          },
          {
            caption: "2. Specific Event",
            icon: "fa-solid fa-magnifying-glass",
          },
          {
            caption: "3. Datetime",
            icon: "fa-solid fa-calendar-days",
          },
        ],
      },
      buying: {
        media: {
          imgSrc: buyingFunTicket,
          imgAlt: "Buying FunTicket",
          videoSrc: videoBuyingFunTicket,
        },
        header: {
          caption: `Choose the most knowed payment methods. Get 10% discount for your first mont`,
          icon: "fa-solid fa-shop",
        },
        footer: [
          "fa-brands fa-cc-visa",
          "fa-brands fa-cc-mastercard",
          "fa-brands fa-paypal",
          "fa-solid fa-building-columns",
          "fa-brands fa-bitcoin",
        ],
      },
    },
  },
};

export { data, dataPages };
