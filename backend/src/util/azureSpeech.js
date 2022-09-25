const fs = require("fs");
const sdk = require("microsoft-cognitiveservices-speech-sdk");

class AzureSpeech {
  constructor(filePath) {
    this.filePath = filePath;
    let audioConfig = sdk.AudioConfig.fromWavFileInput(
      fs.readFileSync(filePath)
    );
    const speechConfig = sdk.SpeechConfig.fromSubscription(
      process.env.SPEECH_KEY,
      process.env.SPEECH_REGION
    );
    this.speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
    speechConfig.speechRecognitionLanguage = "en-US";
  }
  async retrievepronunciationAssessment(referenceText) {
    let pronunciationAssessmentConfig =
      sdk.PronunciationAssessmentConfig.fromJSON(
        `{"referenceText":"${referenceText}","gradingSystem":"HundredMark","granularity":"Word"}`
      );

    pronunciationAssessmentConfig.applyTo(this.speechRecognizer);
    return new Promise((resolve, reject) => {
      this.speechRecognizer.recognizeOnceAsync((speechRecognitionResult) => {
        var pronunciationAssessmentResultJsonString =
          speechRecognitionResult.properties.getProperty(
            sdk.PropertyId.SpeechServiceResponse_JsonResult
          );
        var result = JSON.parse(pronunciationAssessmentResultJsonString);
        resolve(result);
        this.speechRecognizer.close();
      });
    });
  }
}

exports.AzureSpeech = AzureSpeech;
