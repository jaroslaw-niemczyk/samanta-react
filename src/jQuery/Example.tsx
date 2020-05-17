import $ from 'jquery';

export default (): JQuery =>
  $(function () {
    console.log('hello from jQuery - load. Buttons: ' + $('button').length);
  });
