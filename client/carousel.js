// CAROUSEL
var app = new Vue({
  el: "#innercar",
  data: {
    carousel: {
      First: {
        id: "./assets/img/texts/Evento_1.html",
        class: "carousel-item active",
        src: "assets/img/images/Evento_1.jpg",
        alt: "Primo",
      },

      Second: {
        id: "./assets/img/texts/Evento_2.html",
        class: "carousel-item",
        src: "assets/img/images/Evento_2.jpg",
        alt: "Secondo",
      },

      Third: {
        id: "./assets/img/texts/Evento_3.html",
        class: "carousel-item",
        src: "assets/img/images/Evento_3.jpg",
        alt: "Terzo",
      },
    },
  },
});

//CARDS EVENT
var app2 = new Vue({
  el: ".card-event",
  data: {
    event: {
      First: {
        id: "./assets/img/images/Evento_1.jpg",
        alt: "nepo2020",
        title: "NEPO 2020",
        date: "01/01/2020",
        place: "Via del Corso",
        summary: "At vero eos et accusamus et iusto odio dignissimos ducimus",
        modal: "event-modal1",
        modal_link: "#event-modal1",
      },
      Second: {
        id: "./assets/img/images/Evento_1.jpg",
        alt: "nepo2019",
        title: "NEPO 2019",
        date: "01/01/2019",
        place: "Via del Corso",
        summary: "At vero eos et accusamus et iusto odio dignissimos ducimus",
        modal: "event-modal2",
        modal_link: "#event-modal2",
      },
      Third: {
        id: "./assets/img/images/Evento_1.jpg",
        alt: "nepo2018",
        title: "NEPO 2018",
        date: "01/01/2018",
        place: "Via del Corso",
        summary: "At vero eos et accusamus et iusto odio dignissimos ducimus",
        modal: "event-modal3",
        modal_link: "#event-modal3",
      },
    },
  },
});

//NEWS EVENT
var app3 = new Vue({
  el: "#colonnavue",
  data: {
    news: {
      First: {
        ref: "./assets/img/texts/TemplateEventi.html",
        image: "./assets/img/images/sample-img.jpg",
        date: "25/02/2021",
        title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
      },
      Second: {
        ref: "./assets/img/texts/Evento_1.html",
        image: "./assets/img/images/sample-img.jpg",
        date: "26/02/2021",
        title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
      },
      Third: {
        ref: "./assets/img/texts/Evento_1.html",
        image: "./assets/img/images/sample-img.jpg",
        date: "27/02/2021",
        title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
      },
      Fourth: {
        ref: "./assets/img/texts/Evento_1.html",
        image: "./assets/img/images/sample-img.jpg",
        date: "28/02/2021",
        title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
      },
    },
  },
});
