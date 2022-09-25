import React, { Component } from "react";
import AudioAnalyser from "react-audio-analyser";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import ProgressBar from "@ramonak/react-progress-bar";
<<<<<<< HEAD
import Button from '@mui/material/Button';
import './Recorder.css'
import { storage } from '../utils/firebase';
import pronounciationService from "../services/pronounciationService";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

=======
import "./Recorder.css";
import { storage } from "../utils/firebase";
import Button from "@mui/material/Button";

import pronounciationService from "../services/pronounciationService";
import CardLayout from "./../Components/cardLayout";
>>>>>>> 1bd4aef93621b2f6d0ad8835ca46ef127af283d3

export default class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      submitVisible: false,
      progress: 0,
      audioType: "audio/wav",
      text: this.props.textValue,
      fileName: "",
      resultData: {},
      isRendered: false,
    };
  }

  controlAudio(status) {
    this.setState({
      status,
    });
  }

  changeScheme(e) {
    this.setState({
      audioType: e.target.value,
    });
  }

  componentDidMount() {
    this.setState({
      audioType: "audio/wav",
    });
  }

  //API value is returned here
  async handleSubmit(fileName, text) {
    if (!text) {
      throw new Error("No text provided");
    }

    //JSON response is received here
    console.log(fileName, text);
    const data = await pronounciationService(fileName, text);
    this.setState({ resultData: data });
    // console.log(data);
    console.log(this.state.resultData);
  }

  uploadFile(file) {
    if (!file) return;

    const storageRef = ref(storage, `/audio/${file.size}`);

    this.setState({
      fileName: file.size,
    });

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({
          progress: prog,
          isRendered: true,
        });
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
      }
    );
  }

  render() {
    const { status, audioSrc, audioType } = this.state;
    const audioProps = {
      audioType,
      // audioOptions: {sampleRate: 30000}, // 设置输出音频采样率
      status,
      audioSrc,
      timeslice: 1000, // timeslice（https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start#Parameters）
      startCallback: (e) => {
        console.log("succ start", e);
        this.setState({
          submitVisible: false,
        });
      },
      pauseCallback: (e) => {
        console.log("succ pause", e);
      },
      stopCallback: (e) => {
        this.setState({
          audioSrc: window.URL.createObjectURL(e),
          submitVisible: true,
        });
        console.log("succ stop", e);
        this.uploadFile(e);
      },
      onRecordCallback: (e) => {
        console.log("recording", e);
      },
      errorCallback: (err) => {
        console.log("error", err);
      },
    };
    return (
<<<<<<< HEAD
      <div className="recorder-container">
        <AudioAnalyser {...audioProps}>
          <div className="btn-box">
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center">
            <Button color="neutral" variant="contained"
              className="btn"
              onClick={() => this.controlAudio("recording")}
            >
              Start
            </Button>
            <Button color="neutral" variant="contained" className="btn" onClick={() => this.controlAudio("paused")}>
              Pause
            </Button>
            <Button color="neutral" variant="contained"
              className="btn"
              onClick={() => { this.controlAudio("inactive")}}
            >
              Stop
            </Button>
            </Stack>
          </div>
        </AudioAnalyser>
        <Container  align="center" className="progress-wrapper">
          <ProgressBar completed={this.state.progress} className="progress-bar"/>
          <Button align = "center" color="neutral" variant="contained" className="btn-primary" onClick={()=>{this.handleSubmit(this.state.fileName, this.state.text)}}>Submit</Button>
        </Container> 
        
=======
      <div>
        <div className="recorder-container">
          <AudioAnalyser {...audioProps}>
            <div className="btn-box">
              <button
                className="btn"
                onClick={() => this.controlAudio("recording")}
              >
                Start
              </button>
              <button
                className="btn"
                onClick={() => this.controlAudio("paused")}
              >
                Pause
              </button>
              <button
                className="btn"
                onClick={() => {
                  this.controlAudio("inactive");
                }}
              >
                Stop
              </button>
            </div>
          </AudioAnalyser>
          <div className="progress-wrapper">
            <ProgressBar
              completed={this.state.progress}
              className="progress-bar"
            />
          </div>
          <Button
            className="button-wrapper"
            justifyContent="center"
            variant="contained"
            onClick={() => {
              this.handleSubmit(this.state.fileName, this.state.text);
            }}
          >
            Submit
          </Button>
          {/* <button
            className="button-wrapper"
            onClick={() => {
              this.handleSubmit(this.state.fileName, this.state.text);
            }}
          >
            Submit
          </button> */}
          {this.state.isRendered ? (
            <div className="scoreCard">
              <h3>
                Accuracy:
                {
                  this.state.resultData?.privPronJson?.PronunciationAssessment
                    ?.AccuracyScore
                }
              </h3>
              <h3>
                {" "}
                Fluency Score:
                {
                  this.state.resultData?.privPronJson?.PronunciationAssessment
                    ?.FluencyScore
                }
              </h3>
              <h3>
                {" "}
                Completeness Score:
                {
                  this.state.resultData?.privPronJson?.PronunciationAssessment
                    ?.CompletenessScore
                }
              </h3>
              <h3>
                Pronunciation Score :
                {
                  this.state.resultData?.privPronJson?.PronunciationAssessment
                    ?.PronScore
                }
              </h3>
            </div>
          ) : null}
        </div>
        {this.state.isRendered ? (
          <CardLayout result={this.state.resultData} />
        ) : null}
>>>>>>> 1bd4aef93621b2f6d0ad8835ca46ef127af283d3
      </div>
    );
  }
}
