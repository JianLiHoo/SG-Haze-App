import document from "document";

export function PsiUI() {
  this.psinorthtext = document.getElementById("psinorthtext");
  this.psisouthtext = document.getElementById("psisouthtext");
  this.psieasttext = document.getElementById("psieasttext");
  this.psiwesttext = document.getElementById("psiwesttext");
  this.psicentraltext = document.getElementById("psicentraltext");
  
  this.northcircle = document.getElementById("northcircle");
  this.southcircle = document.getElementById("southcircle");
  this.eastcircle = document.getElementById("eastcircle");
  this.westcircle = document.getElementById("westcircle");
  this.centralcircle = document.getElementById("centralcircle");
}

PsiUI.prototype.updateUI = function(state, data) {
  if (state === "loaded") {
    this.updatePsiReading(data);
  }
  else{

    if (state === "loading") {
      console.log("Loading readings ...");
    }
    else if (state === "disconnected") {
      console.log("Please check connection to phone and Fitbit App");
    }
    else if (state === "error") {
      console.log("Something terrible happened.");
    }
  }
}

PsiUI.prototype.updatePsiReading = function(data) {
  this.psinorthtext.text = data.north;
  this.psisouthtext.text = data.south;
  this.psieasttext.text = data.east;
  this.psiwesttext.text = data.west;
  this.psicentraltext.text = data.central;
  /*
    0-50      Good            Green
    51-100    Moderate        Blue
    101-200   Unhealthy       Yellow
    201-300   Very Unhelthy   Orange
    >300      Hazardous       Red
  */
  if(data.north < 51){
    this.northcircle.fill = "green";
  }
  else if(data.north < 101){
    this.northcircle.style.fill = "blue";
  }
  else if(data.north < 201){
    this.northcircle.style.fill = "yellow";
  }
  else if(data.north < 301){
    this.northcircle.style.fill = "orange";
  }
  else{
    this.northcircle.style.fill = "red";
  }
  
  if(data.central < 51){
    this.centralcircle.fill = "green";
  }
  else if(data.central < 101){
    this.centralcircle.style.fill = "blue";
  }
  else if(data.central < 201){
    this.centralcircle.style.fill = "yellow";
  }
  else if(data.central < 301){
    this.centralcircle.style.fill = "orange";
  }
  else{
    this.centralcircle.style.fill = "red";
  }
  
  if(data.south < 51){
    this.southcircle.fill = "green";
  }
  else if(data.south < 101){
    this.southcircle.style.fill = "blue";
  }
  else if(data.south < 201){
    this.southcircle.style.fill = "yellow";
  }
  else if(data.south < 301){
    this.southcircle.style.fill = "orange";
  }
  else{
    this.southcircle.style.fill = "red";
  }
  
  if(data.east < 51){
    this.eastcircle.fill = "green";
  }
  else if(data.east < 101){
    this.eastcircle.style.fill = "blue";
  }
  else if(data.east < 201){
    this.eastcircle.style.fill = "yellow";
  }
  else if(data.east < 301){
    this.eastcircle.style.fill = "orange";
  }
  else{
    this.eastcircle.style.fill = "red";
  }
  
  if(data.west < 51){
    this.westcircle.fill = "green";
  }
  else if(data.west < 101){
    this.westcircle.style.fill = "blue";
  }
  else if(data.west < 201){
    this.westcircle.style.fill = "yellow";
  }
  else if(data.west < 301){
    this.westcircle.style.fill = "orange";
  }
  else{
    this.westcircle.style.fill = "red";
  }
}
