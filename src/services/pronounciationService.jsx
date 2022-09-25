const baseURL = "http://localhost:3000";

async function pronounciationService(fileName, text) {
  console.log("text", text);
  console.log("Filename", fileName);
  console.log(`${baseURL}/api/text`);

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
