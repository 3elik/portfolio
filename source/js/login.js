var login = (function () {
  const form = $('#auth-form'),
    status = form.find('.admin-form__status'),
    enter = $('.js-enter');

  const sendAjaxJson = function (url, data, cb) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function (e) {
      let result = JSON.parse(xhr.responseText);
      cb(result.status);
    };
    xhr.send(JSON.stringify(data));
  };

  const prepareSend = function (e) {
    e.preventDefault();

    let data = {
      login: $('#auth-login').val(),
      pass: $('#auth-pass').val()
    };
    status.innerHTML = 'Sending...';
    sendAjaxJson('/login', data, function (data) {
      if (data == 1) {
        location.href = '/admin';
      }
      status.html(data);
      form[0].reset();
      setTimeout(function () {
        status.html('');
      }, 1000);
    });
  };

  const submitForm = function (e) {
    e.preventDefault();
    form.submit();
  };

  return {
    init: function () {
      if (form.length > 0) {
        enter.on('click', submitForm);
        form.on('submit', prepareSend)
      }
    }
  }
})();
