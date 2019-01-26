const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

let cloud_speech = require("./cloud-speech");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const multer = require("multer");

const path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, 'resources')
  },
    filename: function (req, file, cb) {
      cb(null, path.parse(file.originalname).name + '-' + (Math.floor(Date.now() / 1000))+'.wav')
    }
})

const upload = multer({storage: storage});

//GET REQUESTS
app.get("/api/hello", (req, res) => {
  res.json("Welcome to PreParrot API");
});

app.get("/speech/audio/test", (req, res) => {
  const FILENAME = "./resources/test1.wav";
  cloud_speech.detectSpeechInAudioFile(FILENAME).then(a => {
    res.json(a);
  });
});


app.get("/speech/audio/:filename", (req, res) => {
  cloud_speech.detectSpeechInAudioFile(req.params.filename).then(a => {
    res.json(a);
  });
});

  //POST REQUESTS
  app.post("/speech/text", (req, res, file) => {
    const text = req.body.text;

    if (text === null) {
      res.status(404).send("text not included in the body");
    } else {
      //store text in DB
      res.status(200).json({
        title: req.body.title,
        filename: file.originalname,
        message: "text sucessfully uploaded",
        timestamp: Math.floor(Date.now() / 1000)
      });
    }
  });

  app.post("/speech/audio", upload.single("audio"), async (req, res) => {
      try {
        res.status(200).json({
          message: "file successfully uploaded",
        });
      } catch (err) {
        res.sendStatus(400);
      }
    });

app.listen(port, () => console.log(`Listening on port ${port}`));
