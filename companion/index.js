import { me } from "companion";
import * as messaging from "messaging";
import { PsiAPI } from "./psi.js"

let today = new Date();
let date = today.getDate();

// Listen for the onopen event
messaging.peerSocket.onopen = function() {
  // Ready to send or receive messages
  sendPsiReading();
}

// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  // Output the message to the console
  console.log(JSON.stringify(evt.data));
}

function sendPsiReading() {
  let psiApi = new PsiAPI();
  psiApi.psiReading(today)
    .then(function(data) {
      if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
        // Limit results to the number of tiles available in firmware
        messaging.peerSocket.send(data);
      }
    })
    .catch(function (e) {
      console.log("error"); console.log(e)
    });
}
