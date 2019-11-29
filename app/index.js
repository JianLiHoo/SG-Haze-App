import document from "document";

import * as messaging from "messaging";
import { PsiUI } from "./ui.js";

import clock from "clock";

const datetimetext = document.getElementById("datetimetext");

let today = new Date();
let date = today.getDate();

datetimetext.text = "Sampled On: " + today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes();

let ui = new PsiUI();

ui.updateUI("disconnected"); //initial message to be shown

// Listen for the onopen event
messaging.peerSocket.onopen = function() {
  ui.updateUI("loading");
  messaging.peerSocket.send("Hi!");
}

// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  ui.updateUI("loaded",evt.data);
}

// Listen for the onerror event
messaging.peerSocket.onerror = function(err) {
  // Handle any errors
  ui.updateUI("error");
}