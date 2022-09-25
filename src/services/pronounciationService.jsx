import axios from 'axios';

const baseURL = "http://localhost:3000";

function pronounciationService({ text, fileName }) {
  axios.post(`${baseURL}/api/text`, {
    text: text,
    fileName: fileName
  })
  .then((response) => {const resultData = response.data})
  .catch((err) => console.log(err));

  return resultData;
}

export default pronounciationService