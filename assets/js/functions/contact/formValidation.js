var formName = $('#form__name')[0];
var formBusiness = $('#form__business')[0];
var formMail = $('#form__mail')[0];
var formPhone = $('#form__phone')[0];

function preventDefault() {
  $('#contact__form').submit(function (event) {
    event.preventDefault();
  });
}

const validateForm = () => {
  let name = formName.value;
  let business = formBusiness.value;
  let mail = formMail.value;
  let phone = formPhone.value;
  preventDefault();

  if (name != '' || business != '' || mail != '' || phone != '') {
    $('#modal__form').fadeIn('slow');
  }
};
