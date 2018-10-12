import $ from 'jquery';
import DoctorProfile from './DoctorProfile.js';

export default class BetterQuery {

  constructor() {
    this.query = "";
    this.doctorArray = [];
  }
  getQueries(userQuery) {
    this.query = userQuery;
  }
  requestAPI() {
    var scopedThis = this;
    let newRequest = `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.query}&location=or-portland&skip=2&user_key=4ebf5c067a1c173eeaf2246e8fc85ae8`;

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": newRequest,
      "type": "GET",
      "data": {
        "format": "JSON"
      },
      "success": function(response) {
        console.log("Success");
        let practiceArray = response.data;
        let newArray = [];
        practiceArray.forEach(function(practice) {
          const newProfile = new DoctorProfile(practice);
          newArray.push(newProfile);
        });
        scopedThis.doctorArray = newArray;
      },
      "error": function(response) {
        console.log("Error");
      }
    }

    $.ajax(settings).then(function (response) {
      console.log("then")


    });
    console.log(scopedThis)
    return scopedThis;
  }
}
