var admin_about = (function () {
  const form = $('#about-form'),
    status = form.find('.admin-form__status');

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

  const prepareSendBlog = function (e) {
    e.preventDefault();

    let data = {
      frontend: [
        {
          title: 'HTML',
          value: $('input[name="html"]').val()
        },
        {
          title: 'CSS',
          value: $('input[name="css"]').val()
        },
        {
          title: 'JavaScript & jQuery',
          value: $('input[name="js"]').val()
        }
      ],
      backend: [
        {
          title: 'PHP',
          value: $('input[name="php"]').val()
        },
        {
          title: 'MySQL',
          value: $('input[name="php"]').val()
        },
        {
          title: 'Node.js & npm',
          value: $('input[name="node"]').val()
        },
        {
          title: 'Mongo.db',
          value: $('input[name="mongodb"]').val()
        },
      ],
      workflow: [
        {
          title: 'Git',
          value: $('input[name="git"]').val()
        },
        {
          title: 'Gulp',
          value: $('input[name="gulp"]').val()
        },
        {
          title: 'Bower',
          value: $('input[name="bower"]').val()
        },
      ]
    };
    status.innerHTML = 'Sending...';
    sendAjaxJson('/addskills', data, function (data) {
      status.html(data);
      form[0].reset();
      setTimeout(function () {
        status.html('');
      }, 1000);
    });
  };

  return {
    init: function () {
      if (form.length > 0) {
        form.on('submit', prepareSendBlog)
      }
    }
  }
})();