var $views = document.querySelectorAll('.view');
var $addEntryButton = document.querySelector('#add-entry-button');

var data = {
  view: 'events',
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

function handleAddEntry(event) {
  event.preventDefault();

  var formData = {};
  formData.time = $eventForm.time.value;
  formData.description = $eventForm.description.value;
  data.days[$eventForm.day.value].push(formData);

  swapViews('events');
}

$eventForm.addEventListener('submit', handleAddEntry);

function swapViews(view) {
  for (var i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === view) {
      $views[i].className = 'view';
    } else {
      $views[i].className = 'view hidden';
    }
  }
  data.view = view;
}

function switchToAdd(event) {
  var $dataView = event.target.getAttribute('data-view');
  swapViews($dataView);
}

$addEntryButton.addEventListener('click', switchToAdd);
