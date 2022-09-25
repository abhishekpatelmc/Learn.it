const baseURL = "http://localhost:3000";
<<<<<<< HEAD
var resultData;
function pronounciationService({ text, fileName }) {
  axios.post(`${baseURL}/api/text`, {
    text: text,
    fileName: fileName
  })
  .then((response) => {resultData = response.data})
  .catch((err) => console.log(err));
=======

async function pronounciationService(fileName, text) {
  console.log("text", text);
  console.log("Filename", fileName);
  console.log(`${baseURL}/api/text`);
>>>>>>> 1bd4aef93621b2f6d0ad8835ca46ef127af283d3

  try {
    const rawResponse = await fetch("http://localhost:3000/api/text", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        referenceText: text,
        fileId: fileName.toString(),
      }),
    });
    const content = await rawResponse.json();
    // console.log(content);
    return content;
  } catch (error) {
    console.log(error);
  }
}

export default pronounciationService;
