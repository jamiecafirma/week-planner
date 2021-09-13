var data = {
  view: 'entry-form',
  days: {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: []
  },
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('schedule-entry');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

function handleAddLocalStorage(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('schedule-entry', dataJSON);
}

window.addEventListener('beforeunload', handleAddLocalStorage
);

var $eventForm = document.querySelector('#event-form');
var $submitButton = document.querySelector('#submit-button');

function handleAddEntry(event) {
  event.preventDefault();

  var formData = {};
  formData.time = $eventForm.time.value;
  formData.description = $eventForm.description.value;
  data.days[$eventForm.day.value].push(formData);
}

$eventForm.addEventListener('submit', handleAddEntry);
