import React, { Component } from "react";
import AudioAnalyser from "react-audio-analyser";

export default class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      submitVisible: false
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
        })
      },
      pauseCallback: (e) => {
        console.log("succ pause", e);
      },
      stopCallback: (e) => {
        this.setState({
          audioSrc: window.URL.createObjectURL(e),
          submitVisible: true
        });
        console.log("succ stop", e);

      },
      onRecordCallback: (e) => {
        console.log("recording", e);
      },
      errorCallback: (err) => {
        console.log("error", err);
      },
    };
    return (
      <div>
        <AudioAnalyser {...audioProps}>
          <div className="btn-box">
            <button
              className="btn"
              onClick={() => this.controlAudio("recording")}
            >
              Start
            </button>
            <button className="btn" onClick={() => this.controlAudio("paused")}>
              Pause
            </button>
            <button
              className="btn"
              onClick={() => { this.controlAudio("inactive")}}
            >
              Stop
            </button>
            <button className="btn" onClick={() => console.log(AudioAnalyser)}>
              Log
            </button>
          </div>
        </AudioAnalyser>
        <p>choose output type</p>
        <select
          name=""
          id=""
          onChange={(e) => this.changeScheme(e)}
          value={audioType}
        >
          <option value="audio/wav">audio/wav（default）</option>
          <option value="audio/webm">audio/webm</option>
          <option value="audio/mp3">audio/mp3</option>
        </select>
        <div>
          {this.submitVisible? <h3>Hello!</h3>: ""}
        </div>
      </div>
    );
  }
}
