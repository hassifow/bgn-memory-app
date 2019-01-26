// Imports the Google Cloud client library
const speech = require("@google-cloud/speech");
const fs = require("fs");

// Creates a client
const client = new speech.SpeechClient();

// // The name of the audio file to transcribe
// const fileName = "./resources/test1.wav";

// // Reads a local audio file and converts it to base64
// const file = fs.readFileSync(fileName);
// const audioBytes = file.toString("base64");

// // The audio file's encoding, sample rate in hertz, and BCP-47 language code
// const audio = {
//   content: audioBytes
// };
// const config = {
//   encoding: "LINEAR16",
//   sampleRateHertz: 44100,
//   languageCode: "en-US"
// };
// const request = {
//   audio: audio,
//   config: config
// };

// Detects speech in the audio file
function detectSpeechInAudioFile(fileName) {

  const file = fs.readFileSync(fileName);
  const audioBytes = file.toString("base64");

  const audio = {
    content: audioBytes
  };

  const request = {
    audio: audio,
    config: config
  };

  return new Promise((resolve, reject) => {
    client
      .recognize(request)
      .then(data => {
        const response = data[0];
        const transcription = response.results
          .map(result => result.alternatives[0].transcript)
          .join("\n");
        resolve(transcription);
        console.log(`Transcription: ${transcription}`);
      })
      .catch(err => {
        resolve(err);
        console.error("ERROR:", err);
      });
  });
}

module.exports.detectSpeechInAudioFile = detectSpeechInAudioFile;
