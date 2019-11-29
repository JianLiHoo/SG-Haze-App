export function PsiAPI(apiKey) {
  if (apiKey !== undefined) {
    this.apiKey = apiKey;
  }
  else {
    // Default key for open public access.
    this.apiKey = "MW9S-E7SL-26DU-VV8V";
  }
};

PsiAPI.prototype.psiReading = function(today) {
  let self = this;
  return new Promise(function(resolve, reject) {
    
    let url = "https://api.data.gov.sg/v1/environment/psi?date_time=";
    url += today.toISOString().substr(0, 19);
    //console.log(url);
    fetch(url).then(function(response) {
      return response.json();
    }).then(function(json) {
      //console.log("Got JSON response from server:" + JSON.stringify(json)); //json is the received info from API

      let data = json.items[0].readings.psi_twenty_four_hourly;
      
      resolve(data);
      
    }).catch(function (error) {
      reject(error);
    });
  });
}
