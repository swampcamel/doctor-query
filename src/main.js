import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import BetterQuery from './BetterQuery.js';

$(document).ready(function() {
  $('#queryAPI').submit(function(event) {
    event.preventDefault();
    const condition = $('#condition').val();
    let newQuery = new BetterQuery();
    newQuery.getQueries(condition);
    console.log(newQuery)
    newQuery.requestAPI();
    console.log(newQuery);
    newQuery.doctorArray.forEach(function(doctor) {
      $('#outputArea').append("<p>" + doctor.name + "</p>");
    });
    $('#condition').val("");
  })
});
