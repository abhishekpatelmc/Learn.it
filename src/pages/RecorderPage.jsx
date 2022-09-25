import React, {useState} from "react";
import Recorder from "../Components/Recorder";
import "./RecorderPage.css";

import {quotesData} from '../data.js'

const RecorderPage = () => {
  const [textAreaValue, setTextAreaValue] = useState("Lips red as the rose, hair black as ebony, skin white as snow. Over the seven jeweled hills, beyond the seventh wall, in the cottage of the seven dwarfs, dwells Snow White, fairest one of all.");

  const handleChange = (event) => {
    setTextAreaValue(event.target.value);
  } 

  const generateQuote = () => {
    const random = Math.floor(Math.random() * 10) + 1;
    setTextAreaValue(quotesData[random].text);
  }

  return (
    <div className="main">
        <div className="textContainer">
          <h2>1. Copy and paste a piece of text you would like to read or<span> </span>
            <button onClick={generateQuote}>Generate something to Read!</button>
          </h2>
          <textarea
            className='textArea' 
            value = {textAreaValue}
            onChange = {handleChange}
          />
        </div>
        <h2>2. Hit the start button to record as you read through the paragraph.</h2>
        <Recorder textValue={textAreaValue}/>
    </div>
  );
};

export default RecorderPage;
