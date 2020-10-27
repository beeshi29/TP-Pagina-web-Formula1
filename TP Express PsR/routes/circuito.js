var express = require('express');
var router = express.Router();


var circuito =[
  {
    "id": "1",
    "name": "Red Bull Ring",
    "country" : "Austria", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Austria%20carbon.png.transform/8col/image.png",
    "size" : "4.318km",
    "laps" : "71",
    "lap_record" : "1:05.619 Carlos Sainz (2020)",
    "url" : "url",
    "date" : "05-07-2020",
  },
  {
    "id": "2",
    "name": "Red Bull Ring",
    "country" : "Austria", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Austria%20carbon.png.transform/8col/image.png",
    "size" : "4.318km",
    "laps" : "71",
    "lap_record" : "1:05.619 Carlos Sainz (2020)",
    "url" : "url",
    "date" : "12-07-2020",
  },
   {
    "id": "3",
    "name": "Hungaroring",
    "country" : "Hungria", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungar%20carbon.png.transform/8col/image.png",
    "size" : "4.381km",
    "laps" : "70",
    "lap_record" : "1:17.103 Max Verstappen (2019)",
    "url" : "url",
    "date" : "19-07-2020",
  },
  {
    "id": "4",
    "name": "Silverstone Circuit",
    "country" : "Gran Bretaña", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png.transform/8col/image.png",
    "size" : "5.891km",
    "laps" : "52",
    "lap_record" : "1:27.097 Max Verstappen (2020)",
    "url" : "url",
    "date" : "02-08-2020",
  },
  {
    "id": "5",
    "name": "Silverstone Circuit",
    "country" : "Gran Bretaña", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png.transform/8col/image.png",
    "size" : "5.891km",
    "laps" : "52",
    "lap_record" : "1:27.097 Max Verstappen (2020)",
    "url" : "url",
    "date" : "09-08-2020",
  },
  {
    "id": "6",
    "name": "Circuit de Barcelona-Catalunya",
    "country" : "España", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Spain%20carbon.png.transform/8col/image.png",
    "size" : "4.655km",
    "laps" : "66",
    "lap_record" : "1:18.183 Valtteri Bottas (2020)",
    "url" : "url",
    "date" : "16-08-2020",
  },
  {
    "id": "7",
    "name": "Circuit de Spa-Francorchamps",
    "country" : "Belgica", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Belgium%20carbon.png.transform/8col/image.png",
    "size" : "7.004km",
    "laps" : "44",
    "lap_record" : "1:46.286 Valtteri Bottas (2018)",
    "url" : "url",
    "date" : "30-08-2020",
  },
  {
    "id": "8",
    "name": "Autodromo Nazionale Monza",
    "country" : "Italia", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy%20carbon.png.transform/8col/image.png",
    "size" : "5.793km",
    "laps" : "53",
    "lap_record" : "1:21.046 Rubens Barrichello (2004)",
    "url" : "url",
    "date" : "06-09-2020",
  },
  {
    "id": "9",
    "name": "Mugello",
    "country" : "Italia", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Tuscany%20carbon.png.transform/8col/image.png",
    "size" : "5.245km",
    "laps" : "59",
    "lap_record" : "1:18.833 Lewis Hamilton (2020)",
    "url" : "url",
    "date" : "13-09-2020",
  },
  {
    "id": "10",
    "name": "Sochi Autodrom",
    "country" : "Rusia", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Russi%20carbon.png.transform/8col/image.png",
    "size" : "5.848km",
    "laps" : "53",
    "lap_record" : "1:35.761 Lewis Hamilton (2019)",
    "url" : "url",
    "date" : "27-09-2020",
  },
  {
    "id": "11",
    "name": "Nürburgring",
    "country" : "Alemania", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Germany%20carbon.png.transform/8col/image.png",
    "size" : "5.148km",
    "laps" : "60",
    "lap_record" : " 1:27.961 Takuma Sato (2004)",
    "url" : "url",
    "date" : "11-10-2020",
  },
  {
    "id": "12",
    "name": "Autódromo Internacional do Algarve",
    "country" : "Portugal", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Portugal%20carbon.png.transform/8col/image.png",
    "size" : "4.653km",
    "laps" : "66",
    "lap_record" : "(null)",
    "url" : "url",
    "date" : "25-10-2020",
  },
  {
    "id": "13",
    "name": "Autodromo Enzo e Dino Ferrari",
    "country" : "Italia", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Emilia%20Romagna%20carbon.png.transform/8col/image.png",
    "size" : "4.909km",
    "laps" : "63",
    "lap_record" : "1:21.858 Michael Schumacher (2005)",
    "url" : "url",
    "date" : "01-11-2020",
  },
  {
    "id": "14",
    "name": "Intercity Istanbul Park",
    "country" : "Turquia", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Turkey%20carbon.png.transform/8col/image.png",
    "size" : "5.338km",
    "laps" : "58",
    "lap_record" : "1:24.770 Juan Pablo Montoya (2005)",
    "url" : "url",
    "date" : "15-11-2020",
  },
  {
    "id": "15",
    "name": "Bahrain International Circuit",
    "country" : "Bahrein", 
    "flag" : "https://www.formula1.com/content/fom-website/en/racing/2020/Sakhir/_jcr_content/countryFlag.img.jpg/1422627082446.jpg",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/8col/image.png",
    "size" : "5.412km",
    "laps" : "57",
    "lap_record" : "1:31.447 Pedro de la Rosa (2005)",
    "url" : "url",
    "date" : "29-11-2020",
  }, 
  {
    "id": "16",
    "name": "Bahrain International Circuit",
    "country" : "Bahrein", 
    "flag" : "https://www.formula1.com/content/fom-website/en/racing/2020/Sakhir/_jcr_content/countryFlag.img.jpg/1422627082446.jpg",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Sakhir%20carbon.png.transform/8col/image.png",
    "size" : "5.412km",
    "laps" : "87",
    "lap_record" : "(null)",
    "url" : "url",
    "date" : "06-12-2020",
  },
  {
    "id": "17",
    "name": "Yas Marina Circuit",
    "country" : "E.A.U", 
    "flag" : "",
    "image" : "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Abu%20Dhab%20carbon.png.transform/8col/image.png",
    "size" : "5.554km",
    "laps" : "55",
    "lap_record" : "1:39.283 Lewis Hamilton (2019)",
    "url" : "url",
    "date" : "13-12-2020",
  },
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    status : true,
    response : circuito
  });
});

router.post('/', function(req, res, next) {

  circuito.push(req.body);

  res.send({
    status : true,
    response : circuito
  });
});

router.delete('/:id', function(req, res, next) {

  circuito = circuito.filter(function(circuito){
    return circuito.key != req.params.id
  });

  res.send({
    status : true,
    response : circuito
  });
});

module.exports = router;