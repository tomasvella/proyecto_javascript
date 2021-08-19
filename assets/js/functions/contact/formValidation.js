//Declaración de variables para obtener los valores de los inputs.
var formName = $('#form__name')[0];
var formBusiness = $('#form__business')[0];
var formMail = $('#form__mail')[0];
var formPhone = $('#form__phone')[0];

//Función para prevenir el evento "submit" del botón.
function preventDefault() {
  $('#contact__form').submit(function (event) {
    event.preventDefault();
  });
}

//Función que utiliza variables locales para obtener los valores de los inputs, verificar que tengan contenido y a partir de
//ahí mostrar un modal que indique que la página va a ser refrescada, asignando un timeout de 3 segundos.
const validateForm = () => {
  let name = formName.value;
  let business = formBusiness.value;
  let mail = formMail.value;
  let phone = formPhone.value;
  preventDefault();

  if (name != '' && business != '' && mail != '' && phone != '') {
    $('#modal__form').fadeIn('slow');
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
};
