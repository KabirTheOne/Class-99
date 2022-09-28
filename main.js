var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function start() {
    document.getElementById("textbox").innreHTML = ""
    recognition.start()
}

recognition.onresult = function(event) {

    var Content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = Content
}