import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import DoctorAPI from './DoctorAPI';


$(document).ready(function() {
  $('#queryAPI').submit(function(event) {
    event.preventDefault();
    const condition = $('#condition').val();
    let doctorAPI = new DoctorAPI();
    let promise = doctorAPI.getDoctorInfo(condition);

    promise.then(function(response) {
      let body = JSON.parse(response);
      let practiceArray = body.data;
      practiceArray.forEach(function(practice) {
        $('#outputArea').append("<p>" + practice.practices[0].name + "</p>");
      });

    });
    $('#condition').val("");
  });
});
