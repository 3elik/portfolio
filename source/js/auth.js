var auth = (function () {
  var modal = $('.js-modal'),
    form = $('.js-auth-form'),
    submitedForm = $('#auth-form'),
    btn = $('.js-auth-button'),
    btnToMain = $('.js-to-main'),
    btnEnter = $('.js-enter'),
    modalBackClass = 'modal--back';

  var moveModal = function () {
    if (modal.hasClass(modalBackClass)) {
      modal.removeClass(modalBackClass);
      btn.fadeIn();
    } else {
      modal.addClass(modalBackClass);
      btn.fadeOut();
    }
  };

  var getData = function (form) {
    var data = {};
    $.each(form.serializeArray(), function (i,  field) {
      data[field.name] = field.value;
    });
    return data;
  };

  var showError = function (input, msg) {
    var errorContainer = $('.input__error', input);
    errorContainer.text(msg);
    input.addClass('input--error');
  };

  var hideError = function (e) {
    $(this).removeClass('input--error');
  };

  var validationForm = function () {
    var data = getData(form),
      isValild = true;
    if (!data.login.trim()) {
      showError($('.form__login').closest('.input'), 'Вы не ввели логин!');
      isValild = false;
    }
    if (!data.pass.trim()) {
      showError($('.form__pass').closest('.input'), 'Вы не ввели пароль!');
      isValild = false;
    }
    if (!data.is_human) {
      showError($('.form__is-human').closest('.input'), 'Вы не человек!');
      isValild = false;
    }
    if (!data.sure || data.sure == 'no') {
      showError($('.form__radio--sure').closest('.input'), 'Вы не уточнили!');
      isValild = false;
    }
    if (isValild) {
      submitedForm.submit();
    }
  };

  var setSuccess = function (e) {
    var $this = $(this),
      parent = $this.closest('.input');
    if ($this.val().length) {
      parent.addClass('input--success');
    } else {
      parent.removeClass('input--success');
    }
  };

  return {
    init: function () {
      if (modal.length > 0) {
        btn.on('click', moveModal);
        btnToMain.on('click', moveModal);
        btnEnter.on('click', validationForm);
        $('.input').on('click change focus', hideError);
        $('.form__login').on('input change', setSuccess);
        $('.form__pass').on('input change', setSuccess);
      }
    }
  }
})();