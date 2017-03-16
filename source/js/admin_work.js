var admin_work = (function () {
  const form = $('#works-form'),
    status = form.find('.admin-form__status');

  var fileUpload = function (url, data, cb) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);

    xhr.onload = function (e) {
      let result = JSON.parse(xhr.responseText);
      cb(result.status);
    };

    xhr.send(data);
  };

  var prepareSendWork = function (e) {
    e.preventDefault();
    let formData = new FormData();
    let img = document
      .querySelector('#work_img')
      .files[0];
    let title = $('#work_title').val();
    let tech = $('#work_tech').val();
    let link = $('#work_link').val();

    formData.append('img', img, img.name);
    formData.append('title', title);
    formData.append('tech', tech);
    formData.append('link', link);

    status.innerHTML = 'Uploading...';
    fileUpload('/addwork', formData, function (data) {
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
        form.on('submit', prepareSendWork)
      }
    }
  }
})();
