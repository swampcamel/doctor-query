import $ from 'jquery';

export default class BetterQuery {
  constructor() {
    this.query = "";
  }
  getQueries(userQuery) {
    this.query = userQuery;
  }
  requestAPI() {
    let newRequest = `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.query}&location=or-portland&skip=2&user_key=4ebf5c067a1c173eeaf2246e8fc85ae8`;

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": newRequest,
      "type": "GET",
      "data": {
        "format": "JSON"
      }
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
    });

  }
}
