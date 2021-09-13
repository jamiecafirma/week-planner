var $eventForm = document.querySelector('#event-form');
var $submitButton = document.querySelector('#submit-button');

function handleAddEntry(event) {
  event.preventDefault();

  var formData = {};
  formData.time = $eventForm.time.value;
  console.log('value of formData.time:', formData.time);
}

$eventForm.addEventListener('submit', handleAddEntry);
