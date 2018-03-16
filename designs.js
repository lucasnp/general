// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var color;

function getColor() {
  color = $('#colorPicker').val();
}

function makeGrid() {
  var h = $('#inputHeight').val();
  var w = $('#inputWidth').val();
  var tbl = $('#pixelCanvas');

  getColor();

  for(r = 1; r <= h; r++) {
    thisRow = $('<tr></tr>').appendTo(tbl);
    for(c = 1; c <= w; c++) {
      thisRow.append($('<td style="background-color:#ffffff;"></td>'));
    }
  }
}

$('#colorPicker').on('change', function() {
  getColor();
});

$('input[type="submit"]').on('click', function (e) {
  e.preventDefault();
  makeGrid();
});

$('table').on('click', 'td', function() {
  var bg = $(this).css('background-color');
  console.log(color);
  if (bg === 'rgb(255, 255, 255)') {
    $(this).css({'background-color':color});
  } else {
    $(this).css({'background-color':'white'});
  }
});
