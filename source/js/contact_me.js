var contact_me = (function () {
  const form = document.querySelector('#contact_me');
  var loadingClass= 'contact-me__status--loading';

  var sendData = function (url, data, cb) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function (e) {
      let result = JSON.parse(xhr.responseText);

      cb(result.status);
    };

    xhr.send(data);
  };

  var prepareSendData = function (e) {
    e.preventDefault();
    let resultContainer = $('.contact-me__status');
    let data = {
      name : $('.contact-me__input--name').val(),
      email : $('.contact-me__input--email').val(),
      msg : $('.contact-me__input--msg').val()
    };

    resultContainer
      .addClass(loadingClass)
      .html('Идет отправка...');
    data = JSON.stringify(data);
    sendData('/contact', data, function (data) {
      resultContainer.html(data);
      setTimeout(function () {
        resultContainer.removeClass(loadingClass);
      }, 500)
    })
  };

  return {
    init: function () {
      if (form) {
        form.addEventListener('submit', prepareSendData)
      }
    }
  }
})();
