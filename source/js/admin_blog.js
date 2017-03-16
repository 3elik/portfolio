var admin_blog = (function () {
  const form = $('#blog-form'),
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
      title: $('#blog_name').val(),
      date: $('#blog_date').val(),
      content: $('#blog_content').val()
    };
    status.innerHTML = 'Sending...';
    sendAjaxJson('/addpost', data, function (data) {
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