var express = require('express');
var router = express.Router();


var equipo =[
  {
    "id": "mercedes",
    "key": "1",
    "nombre": "MERCEDES", 
    "color" : "#FF8700",
    "url" : "https://www.formula1.com/content/dam/fom-website/teams/2020/mercedes.png.transform/4col/image.png",
    "icon": "https://www.formula1.com/content/dam/fom-website/teams/2020/mercedes-logo.png.transform/2col/image.png",
    "piloto1": "Lewis HAMILTON" ,
    "piloto2": "Valtteri BOTTAS",
    "dorsal1": "44",
    "dorsal2": "77", 
    "chasis" : "W11"
  },
  {
    "id": "haas",
    "key": "9",
    "nombre": "HAAS",
    "color" : "#787878",
    "url" : "https://www.formula1.com/content/dam/fom-website/teams/2020/haas-f1-team.png.transform/4col/image.png",
    "icon": "https://www.formula1.com/content/dam/fom-website/teams/2020/haas-f1-team-logo.png.transform/2col/image.png",
    "piloto1": "Romain GROSJEAN",
    "piloto2": "Kevin MAGNUSSEN",
    "dorsal1": "8",
    "dorsal2": "20", 
    "chasis" : "VF-20"
  },
  {
    "id": "mclaren",
    "key": "4",
    "nombre": "MCLAREN", 
    "color" : "#FF8700",
    "url" : "https://www.formula1.com/content/dam/fom-website/teams/2020/mclaren.png.transform/4col/image.png",
    "icon": "https://www.formula1.com/content/dam/fom-website/teams/2020/mclaren-logo.png.transform/2col/image.png",
    "piloto1": "Carlos SAINZ" ,
    "piloto2": "Lando NORRIS",
    "dorsal1": "55",
    "dorsal2": "4", 
    "chasis" : "MCL35"
  },
  {
    "id": "alfa",
    "key": "8",
    "nombre": "ALFA ROMEO", 
    "color" : "#960000",
    "url" : "https://www.formula1.com/content/dam/fom-website/teams/2020/alfa-romeo-racing.png.transform/4col/image.png",
    "icon": "https://www.formula1.com/content/dam/fom-website/teams/2020/alfa-romeo-racing-logo.png.transform/2col/image.png",
    "piloto1": "Kimi RAIKONNEN" ,
    "piloto2": "Antonio GIOVINAZZI",
    "dorsal1": "7",
    "dorsal2": "99", 
    "chasis" : "C39"
  },
  {
    "id": "red bull",
    "key": "3",
    "nombre": "RED BULL", 
    "color" : "#0600ef",
    "url" : "https://www.formula1.com/content/dam/fom-website/teams/2020/red-bull-racing.png.transform/2col/image.png",
    "icon": "https://www.formula1.com/content/dam/fom-website/teams/2020/red-bull-racing-logo.png.transform/2col/image.png",
    "piloto1": "Max VERSTAPPEN" ,
    "piloto2": "Alexander ALBON",
    "dorsal1": "33",
    "dorsal2": "23", 
    "chasis" : "RB16"
  },
  {
    "id": "renault",
    "key": "5",
    "nombre": "RENAULT", 
    "color" : "#FFF500",
    "url" : "https://www.formula1.com/content/dam/fom-website/teams/2020/renault.png.transform/4col/image.png",
    "icon": "https://www.formula1.com/content/dam/fom-website/teams/2020/renault-logo.png.transform/2col/image.png",
    "piloto1": "Daniel RICCIARDO",
    "piloto2": "Esteban OCON",
    "dorsal1": "3",
    "dorsal2": "31", 
    "chasis" : "R.S.20"
  },
  {
    "id": "ferrari",
    "key": "2",
    "nombre": "FERRARI", 
    "color" : "#DC0000",
    "url" : "https://www.formula1.com/content/dam/fom-website/teams/2020/ferrari.png.transform/4col/image.png",
    "icon": "https://www.formula1.com/content/dam/fom-website/teams/2020/ferrari-logo.png.transform/2col/image.png",
    "piloto1": "Sebastian VETTEL" ,
    "piloto2": "Charles LECLERC",
    "dorsal1": "5",
    "dorsal2": "16", 
    "chasis" : "SF1000"
  },
  {
    "id": "alpha tauri",
    "key": "6",
    "nombre": "ALPHA TAURI", 
    "color" : "#CCFFFF",
    "url" : "https://www.formula1.com/content/dam/fom-website/teams/2020/alphatauri.png.transform/4col/image.png",
    "icon": "https://www.formula1.com/content/dam/fom-website/teams/2020/alphatauri-logo.png.transform/2col/image.png",
    "piloto1": "Pierre GASLY" ,
    "piloto2": "Daniil KVYAT",
    "dorsal1": "10",
    "dorsal2": "26", 
    "chasis" : "AT01"
  },
  {
    "id": "williams",
    "key": "10",
    "nombre": "WILLIAMS", 
    "color" : "#0082fa",
    "url" : "https://www.formula1.com/content/dam/fom-website/teams/2020/williams.png.transform/4col/image.png",
    "icon": "https://www.formula1.com/content/dam/fom-website/teams/2020/williams-logo.png.transform/2col/image.png",
    "piloto1": "George RUSSELL" ,
    "piloto2": "Nicholas LATIFI",
    "dorsal1": "63",
    "dorsal2": "6", 
    "chasis" : "FW43"
  },
  {
    "id": "racing point",
    "key": "7",
    "nombre": "RACING POINT", 
    "color" : "#F596C8",
    "url" : "https://www.formula1.com/content/dam/fom-website/teams/2020/racing-point.png.transform/4col/image.png",
    "icon": "https://www.formula1.com/content/dam/fom-website/teams/2020/racing-point-logo.png.transform/2col/image.png",
    "piloto1": "Sergio PEREZ" ,
    "piloto2": "Lance STROLL",
    "dorsal1": "11",
    "dorsal2": "18", 
    "chasis" : "RP20"
  },
]


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({
      status : true,
      response : equipo
    });
});


/* GET users listing. */
router.get('/:id', function(req, res, next) {

  equipoEncontrado = equipo.find(function(eq){
    return eq.key == req.params.id
  });
  res.send({
    status : true,
    response : equipoEncontrado
  });

});
  
  router.post('/', function(req, res, next) {
  
    equipo.push(req.body);
  
    res.send({
      status : true,
      response : equipo
    });
  });
  
  router.delete('/:id', function(req, res, next) {
    equipo = equipo.filter(function(equipo){
      return equipo.key != req.params.id
    });
  
    res.send({
      status : true,
      response : equipo
    });
  });
  
  module.exports = router;
  