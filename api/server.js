const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

let cloud_speech =  require('./cloud-speech');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//GET REQUESTS
app.get('/api/hello', (req, res) => {
    res.json("Welcome to PreParrot API")
  }
);

app.get('/speech/audio/test', (req, res) => {
  cloud_speech.detectSpeechInAudioFile().then((a) => {
    res.json(a)
  }
);

app.get('/speech/audio/:id', (req, res) => {
  cloud_speech.detectSpeechInAudioFile().then((a) => {
    res.json(a)
  }
);

//POST REQUESTS
app.post('/speech/text', (req, res) => {

  const text = req.body.text;

  if(text === null){
    res.status(404).send("text not included in the body");
  }
  else{
    //store text in DB
      res.status(200).json({
        message: "text sucessfully uploaded",
        id: "to be returned from database"
      })
    }
});

app.post('/speech/audio', (req, res) => {
//upload to /resources foler with name saved as ID
//save url path 
//connect to cloud speech api and return generated text

});

});


app.listen(port, () => console.log(`Listening on port ${port}`));
