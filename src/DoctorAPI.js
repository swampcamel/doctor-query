export default class DoctorAPI {
  getDoctorInfo(conditionInput, nameInput) {
    if (nameInput == "") {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${conditionInput}&location=or-portland&skip=0&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  } else {
    console.log("else")
    let splitName = nameInput.split(" ");
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${splitName[0]}&last_name=${splitName[1]}&location=or-portland&skip=0&user_key=${process.env.exports.apiKey}`;
      console.log(url)
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  }
}
