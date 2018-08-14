const express = require("express");
const router = express.Router();
const Evento = require("../models/eventos.js");
const Plantilla = require("../models/plantillas.js");
const Actividad = require("../models/actividades.js");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//*****PLANTILLA NUEVA ******/

router.get("/plantillas-add", (req, res, next) => {
  res.render("plantillas-add");
});

router.post("/plantillas-add", (req, res, next) => {
  var nuevaPlantilla = new Plantilla(req.body);
  name = req.body.nombre;

  nuevaPlantilla
    .save()
    .then(nuevaPlantilla => {
      res.redirect("/plantillas/edit?nombre=" + name);
    })
    .catch(error => {
      console.log(error);
    });
});

//READ
router.get("/plantillas", (req, res, next) => {
  Plantilla.find()
    .then(plantillas => {
      //console.log(plantillas);
      res.render("plantillas", { plantillas });
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/plantillas-edit", (req, res, next) => {
  var nuevaActividad = new Actividad(req.body.numero );
  name = req.body.id;
  console.log(nuevaActividad);
  console.log(name);
  nuevaActividad.save()
  .then(() => {
    res.redirect("/plantillas/edit/?nombre=" + name);
  })
  .catch(error => {
    console.log(error);
  });
});



//UPDATE
router.get("/plantillas/edit", (req, res, next) => {
  //let plantillaName = req.query.nombre;

  Plantilla.findOne({ nombre: req.query.nombre })
    .then(plantilla => {
      Actividad.find({ plantilla: plantilla.id }).then(actividad => {
        console.log("ACtividad"+actividad);
        res.render("plantillas-edit", { plantilla });
      });
    })
    .catch(error => {
      console.log(error);
    });
});

/***  CRUD DE ACTIVIDADES  ***/

//CREATE

//READ
router.get("/plantillas/:nombre", (req, res, next) => {
  let plantillaName = req.params.nombre;
  Plantilla.findOne({ nombre: plantillaName })
    .then(plantilla => {
      req.session.PlantillaId = plantilla.id;

      res.render("plantillas_detail", { plantilla });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/eventos", (req, res, next) => {
  Evento.find()
    .then(eventos => {
      console.log(eventos);
    })
    .catch(error => {
      console.log(error);
    });
  res.render("eventos");
});

router.get("/agenda", (req, res, next) => {
  res.render("agenda");
});

router.get("/cotiza", (req, res, next) => {
  res.render("cotiza");
});

router.get("/actividades", (req, res, next) => {
  res.render("actividades");
});

module.exports = router;
