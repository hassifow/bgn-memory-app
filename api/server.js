const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

let cloud_speech = require("./cloud-speech");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const multer = require("multer");

const storage = multer.diskStorage({
  destination: "/resources",
  filename: function(req, file, callback) {
    //..
  }
});
//GET REQUESTS
app.get("/api/hello", (req, res) => {
  res.json("Welcome to PreParrot API");
});

app.get("/speech/audio/test", (req, res) => {
  const FILENAME = "./resources/test1.wav";
  cloud_speech.detectSpeechInAudioFile(FILENAME).then(a => {
    res.json(a);
  });

  app.get(
    "/speech/audio/:id",
    (req, res) => {}
    // connect to database, return url to audio file, and generated speech
  );

  //POST REQUESTS
  app.post("/speech/text", (req, res) => {
    const text = req.body.text;

    if (text === null) {
      res.status(404).send("text not included in the body");
    } else {
      //store text in DB
      res.status(200).json({
        message: "text sucessfully uploaded",
        id: "to be returned from database"
      });
    }
  });

  app.post("/speech/audio", (req, res) => {
    //upload to /resources foler with name saved as ID
    //save url path
    //connect to cloud speech api and return generated text
    res.status(200).json({ message: "not yet implemented" });
  });

  app.post("/speech/audio", upload.single("audio"), (req, res) => {
    if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
    } else {
      const host = req.host;

      const filePath = req.protocol + "://" + host + "/" + req.file.path;

      //save filepath in db
      res.status(200).json({
        message: "file successfully uploaded",
        filePath: filePath
      });
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
