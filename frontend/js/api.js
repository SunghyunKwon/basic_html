$(document).ready(async function() {
    const response = await axios.get('http://localhost:3000/hello');
    console.log(response);
    var h2 = document.getElementById("response_message");
    h2.append(response.data.message);
})