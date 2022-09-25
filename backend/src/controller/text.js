const { firebaseApp } = require("../util/firebase");
const { FirebaseStorage } = require("../util/firebaseStorage");
const { FileDownloader } = require("../util/fileDownloader");
const { AzureSpeech } = require("../util/AzureSpeech");

const download = require("download");

async function textController(req, res) {
  let referenceText = req.body.referenceText;
  let fileName = req.body.fileId;
  console.log(referenceText, fileName);

  if (referenceText.length > 100) {
    res.status(400).send("Wrong");
    return;
  }

  // const fileName = "564524";
  // referenceText = "Okay Hello Hello. Okay Okay Okay Okay.";

  const storage = new FirebaseStorage(firebaseApp);
  const bucketLocation = process.env.FIREBASE_DOWNLOAD_PATH;
  const url = await storage.retrieveDownloadUrl(`${bucketLocation}${fileName}`);
  console.log(url);
  const filePath = `${__dirname}/audioFiles`;
  const fileDownloader = new FileDownloader(download);
  await fileDownloader.downloadFile(url, filePath);
  const speechRecognition = new AzureSpeech(`${filePath}/${fileName}`);
  let result = await speechRecognition.retrievepronunciationAssessment(
    referenceText
  );
  console.dir(result, { depth: null, colors: true });

  res.json(result);
}

exports.textController = textController;

const dummyString = `{
  "Id": "bbb42ea51bdb46d19a1d685e635fe173",
  "RecognitionStatus": 0,
  "Offset": 7500000,
  "Duration": 13800000,
  "DisplayText": "Hello.",
  "NBest": [
    {
      "Confidence": 0.975003,
      "Lexical": "hello",
      "ITN": "hello",
      "MaskedITN": "hello",
      "Display": "Hello.",
      "PronunciationAssessment": {
        "AccuracyScore": 100,
        "FluencyScore": 100,
        "CompletenessScore": 100,
        "PronScore": 100
      },
      "Words": [
        {
          "Word": "hello",
          "Offset": 7500000,
          "Duration": 13800000,
          "PronunciationAssessment": {
            "AccuracyScore": 99.0,
            "ErrorType": "None"
          },
          "Syllables": [
            {
              "Syllable": "hɛ",
              "PronunciationAssessment": {
                "AccuracyScore": 91.0
              },
              "Offset": 7500000,
                            "Duration": 4100000
            },
            {
              "Syllable": "loʊ",
              "PronunciationAssessment": {
                "AccuracyScore": 100.0
              },
              "Offset": 11700000,
                            "Duration": 9600000
            }
          ],
          "Phonemes": [
            {
              "Phoneme": "h",
              "PronunciationAssessment": {
                "AccuracyScore": 98.0,
                "NBestPhonemes": [
                  {
                    "Phoneme": "h",
                    "Score": 100.0
                  },
                  {
                    "Phoneme": "oʊ",
                    "Score": 52.0
                  },
                  {
                    "Phoneme": "ə",
                    "Score": 35.0
                  },
                  {
                    "Phoneme": "k",
                    "Score": 23.0
                  },
                  {
                    "Phoneme": "æ",
                    "Score": 20.0
                  }
                ]
              },
              "Offset": 7500000,
                            "Duration": 3500000
            },
            {
              "Phoneme": "ɛ",
              "PronunciationAssessment": {
                "AccuracyScore": 47.0,
                "NBestPhonemes": [
                  {
                    "Phoneme": "ə",
                    "Score": 100.0
                  },
                  {
                    "Phoneme": "l",
                    "Score": 52.0
                  },
                  {
                    "Phoneme": "ɛ",
                    "Score": 47.0
                  },
                  {
                    "Phoneme": "h",
                    "Score": 17.0
                  },
                  {
                    "Phoneme": "æ",
                    "Score": 2.0
                  }
                ]
              },
              "Offset": 11100000,
                            "Duration": 500000
            },
            {
              "Phoneme": "l",
              "PronunciationAssessment": {
                "AccuracyScore": 100.0,
                "NBestPhonemes": [
                  {
                    "Phoneme": "l",
                    "Score": 100.0
                  },
                  {
                    "Phoneme": "oʊ",
                    "Score": 46.0
                  },
                  {
                    "Phoneme": "ə",
                    "Score": 5.0
                  },
                  {
                    "Phoneme": "ɛ",
                    "Score": 3.0
                  },
                  {
                    "Phoneme": "u",
                    "Score": 1.0
                  }
                ]
              },
              "Offset": 11700000,
                            "Duration": 1100000
            },
            {
              "Phoneme": "oʊ",
              "PronunciationAssessment": {
                "AccuracyScore": 100.0,
                "NBestPhonemes": [
                  {
                    "Phoneme": "oʊ",
                    "Score": 100.0
                  },
                  {
                    "Phoneme": "d",
                    "Score": 29.0
                  },
                  {
                    "Phoneme": "t",
                    "Score": 24.0
                  },
                  {
                    "Phoneme": "n",
                    "Score": 22.0
                  },
                  {
                    "Phoneme": "l",
                    "Score": 18.0
                  }
                ]
              },
              "Offset": 12900000,
                            "Duration": 8400000
            }
          ]
        }
      ]
    }
  ]
}`;
