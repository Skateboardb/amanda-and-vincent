let day1 = '01/01/2022';
let day2 = '01/02/2022';
let container = $('#events-container');

let resourceData = {
  schedule: {
    day1: {
      date: '01 Jan 2022',
      event1: '01:00pm',
      event2: '02:00pm',
      event3: '03:00pm',
      event4: '04:00pm',
    },
    day2: {
      date: '02 Jan 2022',
      event5: '05:00pm',
      event6: '06:00pm',
      event7: '07:00pm',
    },
  },
};

let loadSchedule = resourceData.schedule;
let schedule = Object.entries(loadSchedule);

let counter = 1;
$('#date-forward').click(function (e) {
  e.preventDefault();
  //   console.log(counter);
  counter++;

  if (counter == 3) {
    counter = 1;
  }
  //   let schedule = Object.entries(loadSchedule);
  switch (counter) {
    case 1:
      $('#date-switcher-header').text(loadSchedule.day1.date);
      container.empty();
      for (
        let i = 1;
        i < Object.entries(schedule[counter - 1][1]).length;
        i++
      ) {
        let eventData = Object.entries(schedule[counter - 1][1])[i];
        console.log('event: ' + eventData[0] + ' time: ' + eventData[1]);
        let eventName = eventData[0];
        let eventTime = eventData[1];
        let eventRow = $(`<div class="row event-row">
                <div class="col-6">
                  <h3 class="itinerary-text">${eventName}</h3>
                </div>
                <div class="col-6">
                  <h3 class="itinerary-text">${eventTime}</h3>
                </div>
              </div>`);
        container.append(eventRow);
      }
      break;

    case 2:
      $('#date-switcher-header').text(loadSchedule.day2.date);
      container.empty();
      for (
        let i = 1;
        i < Object.entries(schedule[counter - 1][1]).length;
        i++
      ) {
        let eventData = Object.entries(schedule[counter - 1][1])[i];
        console.log('event: ' + eventData[0] + ' time: ' + eventData[1]);
        let eventName = eventData[0];
        let eventTime = eventData[1];
        let eventRow = $(`<div class="row event-row">
                <div class="col-6">
                  <h3 class="itinerary-text">${eventName}</h3>
                </div>
                <div class="col-6">
                  <h3 class="itinerary-text">${eventTime}</h3>
                </div>
              </div>`);
        container.append(eventRow);
      }
      break;

    default:
      break;
  }
});

$(document).ready(function () {
  $('#date-switcher-header').text(loadSchedule.day1.date);
  for (let i = 1; i < Object.entries(schedule[counter - 1][1]).length; i++) {
    let eventData = Object.entries(schedule[counter - 1][1])[i];
    console.log('event: ' + eventData[0] + ' time: ' + eventData[1]);
    let eventName = eventData[0];
    let eventTime = eventData[1];
    let eventRow = $(`<div class="row event-row">
                <div class="col-6">
                  <h3 class="itinerary-text">${eventName}</h3>
                </div>
                <div class="col-6">
                  <h3 class="itinerary-text">${eventTime}</h3>
                </div>
              </div>`);
    container.append(eventRow);
  }
});

// $(document).ready(function () {
//   let schedule = Object.entries(resourceData.schedule);
//   console.log(schedule);

//   for (let i = 0; i < schedule.length; i++) {
//     console.log(schedule[i]);
//   }
// });

$(function () {
  $('#checkInDate').datepicker({
    dateFormat: 'dd-M-yy',
  });
});

$(function () {
  $('#checkOutDate').datepicker({
    dateFormat: 'dd-M-yy',
  });
});

$('.counter-btn').click(function (e) {
  e.preventDefault();
  var $btn = $(this);
  $('#output-' + $btn.data('index')).html(function (i, val) {
    val = val * 1 + $btn.data('inc');
    return (val <= 0 ? '' : '') + val;
  });
});

$(function () {
  $('input[type="number"]').niceNumber();
});

$('#booking-form').on('submit', function (e) {
  e.preventDefault();

  let data = $(this).serializeArray();
  let checkIn = $.datepicker.formatDate('yy-mm-dd', new Date(data[0].value));
  let checkOut = $.datepicker.formatDate('yy-mm-dd', new Date(data[1].value));
  let rooms = data[2].value;
  let guests = data[3].value;

  let queryString = `https://be.synxis.com/?adult=${guests}&arrive=${checkIn}&chain=56&child=0&currency=USD&depart=${checkOut}&hotel=27766&level=hotel&locale=en-US&rooms=1`;

  var win = window.open(queryString, '_blank');
  if (win) {
    //Browser has allowed it to be opened
    win.focus();
  } else {
    //Browser has blocked it
    alert('Please allow popups for this website');
  }

  console.log(queryString);
});
