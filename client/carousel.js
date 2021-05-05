var app = new Vue ({
    el : '#innercar',
    data : {
        carousel: {
            First   :{id : "/client/assets/img/texts/Evento_1.txt", class : "carousel-item active", src : "assets/img/images/Evento_1.jpg", alt : "Primo"},

            Second  :{id : "/client/assets/img/texts/Evento_2.txt", class : "carousel-item"       , src : "assets/img/images/Evento_2.jpg", alt : "Secondo"},

            Third   :{id : "/client/assets/img/texts/Evento_3.txt", class : "carousel-item"       , src : "assets/img/images/Evento_3.jpg", alt : "Terzo"}  
        }
    }
});