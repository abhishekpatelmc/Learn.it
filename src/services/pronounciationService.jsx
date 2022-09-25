import axios from 'axios';

const baseURL = "http://localhost:3000";
var resultData;
function pronounciationService({ text, fileName }) {
  axios.post(`${baseURL}/api/text`, {
    text: text,
    fileName: fileName
  })
  .then((response) => {resultData = response.data})
  .catch((err) => console.log(err));

  return resultData;
}

export default pronounciationService