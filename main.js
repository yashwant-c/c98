var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {
    console.log (event);

    var Content = event.results[0][0].transcript;
    console.log(event);

    document.getElementById("textbox").innerHTML = Content;
}
