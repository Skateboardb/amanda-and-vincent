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
