import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import DoctorAPI from './DoctorAPI';


$(document).ready(function() {
  $('#queryAPI').submit(function(event) {
    event.preventDefault();
    const condition = $('#condition').val();
    const doctorName = $('#doctor-name').val();
    const doctorAPI = new DoctorAPI();
    const promise = doctorAPI.getDoctorInfo(condition, doctorName);

    promise.then(function(response) {
      const body = JSON.parse(response);
      const practiceArray = body.data;
      $("#outputArea").empty();
      if (practiceArray.length === 0) {
        $('#outputArea').text("Your search returned no results.");
      } else {
        practiceArray.forEach(function(practice) {
          $('#outputArea').append("<div class='doctor-info'><p class='doctor-name'><strong>" + practice.practices[0].name +
          "</strong></p><div class='info-wrapper'><div class='address-box'<p>" + practice.practices[0].visit_address.street +
          " </p><p>" + practice.practices[0].visit_address.street2 +
          "</p><p><span>" + practice.practices[0].visit_address.city +
          ", </span><span>" + practice.practices[0].visit_address.state +
          "</span></p><p>" + practice.practices[0].visit_address.zip +
          "</p></div><div class='other-info'><p>Phone: " + practice.practices[0].phones[0].number +
          "</p><p>Website: " + practice.practices[0].website +
          "<p>Accepting New Patients: " + practice.practices[0].accepts_new_patients + "</p></div></div></div>");
        });
        }
        }, function(error) {
          const errorMessage = `Your search responded with the following error: ${error.message}`;
          $('#outputArea').text(errorMessage);
        });
    $('#condition').val("");
    $('#doctor-name').val("");
  });
});
