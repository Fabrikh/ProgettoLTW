// CAROUSEL
var app = new Vue({
  el: "#innercar",
  data: {
    carousel: {
      First: {
        id: "./TemplateEventi.html",
        class: "carousel-item active",
        src: "assets/img/images/Evento_1.jpg",
        alt: "Primo",
      },

      Second: {
        id: "./Evento_2.html",
        class: "carousel-item",
        src: "assets/img/images/Evento_2.jpg",
        alt: "Secondo",
      },

      Third: {
        id: "./Evento_3.html",
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
        id: "./assets/img/images/Evento_2.jpg",
        alt: "nepo2020",
        title: "NEPO 2020",
        date: "01/01/2020",
        place: "Via del Corso",
        summary: "At vero eos et accusamus et iusto odio dignissimos ducimus",
        modal: "event-modal1",
        modal_link: "#event-modal1",
        photo1:
          "./assets/img/images/NEPO2K20/20200827-20200827-20200827-DSC07477.jpg",
        photo2:
          "./assets/img/images/NEPO2K20/20200827-20200827-20200827-DSC07481_OK_3.jpg",
        photo3:
          "./assets/img/images/NEPO2K20/20200829-20200829-DSC07710-56_OK_2.jpg",
        photo4:
          "./assets/img/images/NEPO2K20/20200829-20200829-DSC07779-93_OK_4.jpg",
        photo5: "./assets/img/images/NEPO2K20/NEPO 2K20-37-36-36-36_OK_1.jpg",
      },
      Second: {
        id: "./assets/img/images/NEPO2K190552card.png",
        alt: "nepo2019",
        title: "NEPO 2019",
        date: "01/01/2019",
        place: "Via del Corso",
        summary: "At vero eos et accusamus et iusto odio dignissimos ducimus",
        modal: "event-modal2",
        modal_link: "#event-modal2",
        photo1: "./assets/img/images/NEPO2K19/NEPO2K190057_OK_1.jpg",
        photo2: "./assets/img/images/NEPO2K19/NEPO2K190062_OK_2.jpg",
        photo3: "./assets/img/images/NEPO2K19/NEPO2K190114_OK_3.jpg",
        photo4: "./assets/img/images/NEPO2K19/NEPO2K190204_OK_4.jpg",
        photo5: "./assets/img/images/NEPO2K19/NEPO2K190370_OK_5.jpg",
      },
      Third: {
        id: "./assets/img/images/NEPO2018.jpg",
        alt: "nepo2018",
        title: "NEPO 2018",
        date: "01/01/2018",
        place: "Via del Corso",
        summary: "At vero eos et accusamus et iusto odio dignissimos ducimus",
        modal: "event-modal3",
        modal_link: "#event-modal3",
        photo1:
          "./assets/img/images/NEPO2K18/WhatsApp Image 2021-05-16 at 08.43.31 (1).jpeg",
        photo2:
          "./assets/img/images/NEPO2K18/WhatsApp Image 2021-05-16 at 08.43.31.jpeg",
        photo3:
          "./assets/img/images/NEPO2K18/WhatsApp Image 2021-05-16 at 08.43.32 (1).jpeg",
        photo4:
          "./assets/img/images/NEPO2K18/WhatsApp Image 2021-05-16 at 08.43.32.jpeg",
        photo5: "./assets/img/images/Evento_1.jpg",
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
        ref: "./TemplateEventi.html",
        image: "./assets/img/images/sample-img.jpg",
        date: "25/02/2021",
        title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
      },
      Second: {
        ref: "./TemplateEventi.html",
        image: "./assets/img/images/sample-img.jpg",
        date: "26/02/2021",
        title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
      },
      Third: {
        ref: "./TemplateEventi.html",
        image: "./assets/img/images/sample-img.jpg",
        date: "27/02/2021",
        title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
      },
      Fourth: {
        ref: "./TemplateEventi.html",
        image: "./assets/img/images/sample-img.jpg",
        date: "28/02/2021",
        title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
      },
    },
  },
});
