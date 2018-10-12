import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import BetterQuery from './BetterQuery.js';

$(document).ready(function() {
  $('#queryAPI').submit(function(event) {
    event.preventDefault();
    const condition = $('#condition').val();
    const newQuery = new BetterQuery();
    newQuery.getQueries(condition);
    console.log(newQuery)
    $('#condition').val("");
  })
});
