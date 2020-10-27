var express = require('express');
var router = express.Router();


var personajes =[
  {
    "id": "1",
    "dorsal":"44",
    "nombre" : "Lewis HAMILTON", 
    "color" : "#00D2BE",
    "equipo" : "1",
    "foto" : "https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.1024.medium.jpg/1593685990514.jpg",
    "nacionalidad" : "Gran Bretaña",
    "bandera" : "",
  },
  {
    "id": "2",
    "dorsal":"77",
    "nombre": "Valtteri BOTTAS",
    "color" : "#00D2BE",
    "equipo" : "1",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.1024.medium.jpg/1584013243241.jpg",
    "nacionalidad" : "Finlandia",
    "bandera" : ""
  },
  {
    "id": "3",
    "dorsal": "5",
    "nombre": "Sebastian VETTEL",
    "color" : "#DC0000",
    "equipo" : "2",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.1024.medium.jpg/1584013014200.jpg",
    "nacionalidad" : "Alemania",
    "bandera" : "",
  },
  {
    "id": "4",
    "dorsal": "16",
    "nombre": "Charles LECLERC",
    "color" : "#DC0000",
    "equipo" : "2",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1024.medium.jpg/1584013824254.jpg",
    "nacionalidad" : "Monaco",
    "bandera" : "",
  },
  {
    "id": "5",
    "dorsal": "33",
    "nombre": "Max VERSTAPPEN",
    "color" : "#001069",
    "equipo" : "3",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.1024.medium.jpg/1584012927837.jpg",
    "nacionalidad" : "Holanda",
    "bandera" : "",
  },
  {
    "id": "6",
    "dorsal": "23",
    "nombre": "Alexander ALBON",
    "color" : "#001069",
    "equipo" : "3",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/alexander-albon/_jcr_content/image.img.1024.medium.jpg/1584013953467.jpg",
    "nacionalidad" : "Tailandia",
    "bandera" : "",
  },
  {
    "id": "7",
    "dorsal": "55",
    "nombre": "Carlos SAINZ",
    "color" : "#FF8700",
    "equipo" : "4",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/image.img.1024.medium.jpg/1584012341233.jpg",
    "nacionalidad" : "España",
    "bandera" : "",
  },
  {
    "id": "8",
    "dorsal": "4",
    "nombre": "Lando NORRIS",
    "color" : "#FF8700",
    "equipo" : "4",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/lando-norris/_jcr_content/image.img.1024.medium.jpg/1584013897913.jpg",
    "nacionalidad" : "Gran Bretaña",
    "bandera" : "",
  },
  {
    "id": "9",
    "dorsal": "3",
    "nombre": "Daniel RICCIARDO",
    "color" : "#FFF500",
    "equipo" : "5",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/image.img.1024.medium.jpg/1590499440912.jpg",
    "nacionalidad" : "Australia",
    "bandera" : "",
  },
  {
    "id": "10",
    "dorsal": "31",
    "nombre": "Esteban OCON",
    "color" : "#FFF500",
    "equipo" : "5",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/esteban-ocon/_jcr_content/image.img.1024.medium.jpg/1590499387121.jpg+",
    "nacionalidad" : "Francia",
    "bandera" : "",
  },
  {
    "id": "11",
    "dorsal": "10",
    "nombre": "Pierre GASLY",
    "equipo" : "6",
    "color" : "#CCFFFF",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/image.img.1024.medium.jpg/1584013791271.jpg",
    "nacionalidad" : "Francia",
    "bandera" : "",
  },
  {
    "id": "daniil kvyat",
    "dorsal": "26",
    "nombre": "Daniil KVYAT",
    "equipo" : "6",
    "color" : "#CCFFFF",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/daniil-kvyat/_jcr_content/image.img.1024.medium.jpg/1584012653479.jpg",
    "nacionalidad" : "Rusia",
    "bandera" : "",
  },
  {
    "id": "sergio perez",
    "dorsal": "11",
    "nombre": "Sergio PEREZ",
    "color" : "#F596C8",
    "equipo" : "7",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/sergio-perez/_jcr_content/image.img.1024.medium.jpg/1584013058541.jpg",
    "nacionalidad" : "Mexico",
    "bandera" : "",
  },
  {
    "id": "lance stroll",
    "dorsal": "18",
    "nombre": "Lance STROLL",
    "color" : "#F596C8",
    "equipo" : "7",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/lance-stroll/_jcr_content/image.img.1024.medium.jpg/1584013460046.jpg",
    "nacionalidad" : "Canada",
    "bandera" : "",
  },
  {
    "id": "kimi raikkonen",
    "dorsal": "7",
    "nombre": "Kimi RAIKKONEN",
    "color": "#960000",
    "equipo" : "8",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/kimi-raikkonen/_jcr_content/image.img.1024.medium.jpg/1584012751723.jpg",
    "nacionalidad" : "Finlandia",
    "bandera" : "",
  },
  {
    "id": "antonio giovinazzi",
    "dorsal": "99",
    "nombre": "Antonio GIOVINAZZI",
    "color": " #960000",
    "equipo" : "8",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/antonio-giovinazzi/_jcr_content/image.img.1024.medium.jpg/1584013739535.jpg",
    "nacionalidad" : "Italia",
    "bandera" : "",
  },
  {
    "id": "romain grosjean",
    "dorsal": "8",
    "nombre": "Romain GROSJEAN",
    "color": "#787878",
    "equipo" : "9",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/romain-grosjean/_jcr_content/image.img.1024.medium.jpg/1584012955838.jpg",
    "nacionalidad" : "Francia",
    "bandera" : "",
  },
  {
    "id": "kevin magnussen",
    "dorsal": "20",
    "nombre": "Kevin MAGNUSSEN",
    "color": "#787878",
    "equipo" : "9",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/kevin-magnussen/_jcr_content/image.img.1024.medium.jpg/1584012829634.jpg",
    "nacionalidad": "Dinamarca",
    "bandera": "",
  },
  {
    "id": "george russell",
    "dorsal": "63",
    "nombre": "George RUSSELL",
    "color": "#0082fa",
    "equipo" : "10",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/george-russell/_jcr_content/image.img.1024.medium.jpg/1590770648660.jpg",
    "nacionalidad" : "Gran Bretaña",
    "bandera" : "",
  },
  {
    "id": "nicholas latifi",
    "dorsal": "6",
    "nombre": "Nicholas LATIFI",
    "color": "#0082fa",
    "equipo" : "10",
    "foto": "https://www.formula1.com/content/fom-website/en/drivers/nicholas-latifi/_jcr_content/image.img.1024.medium.jpg/1590770649098.jpg",
    "nacionalidad" : "Canada",
    "bandera" : "",
  },
]


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    status : true,
    response : personajes
  });
});

router.post('/', function(req, res, next) {

  personajes.push(req.body);

  res.send({
    status : true,
    response : personajes
  });
});

router.delete('/:id', function(req, res, next) {

  personajes = personajes.filter(function(personaje){
    return personaje.dorsal != req.params.id
  });

  res.send({
    status : true,
    response : personajes
  });
});

module.exports = router;
