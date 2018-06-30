$(function() {


const table = '#pixelCanvas';
// Set target ID to variable.

const row = '<tr></tr>';
// Set row elements to variable.

const cell = '<td></td>';
// Set cell elements to variable.

$('#sizePicker').submit(function makeGrid (event, height, width) {
// When the sizePicker form is submitted, run the makeGrid function.
// The makeGrid function takes the parameters event, height, and width.

  event.preventDefault();
  // Prevent auto-refresh from deleting grid as it's displayed.

  $(table).empty();
  // Clear the grid on submit, if there is one.

  height = $('#inputHeight').val();
  // Fetch the input value of height.

  width = $('#inputWidth').val();
  // Fetch the input value of width.

  for (let m = 0; m < height; m++) {
  // Outer loop defined by height.

    $(table).append(row);
    // Append a row to the table m times.

    for (let n = 0; n < width; n++) {
    // Inner loop defined by width.

      $('tr').last().append(cell);
      // Append n cells to the last row m times.
    }
  }
});

$(table).on('click', 'td', function paintGrid () {
// When the table is clicked on, run the paintGrid function on the target cell.

  let color = $('#colorPicker').val();
  // Grab the input color each time, in case it's changed.

  $(this).css('background-color', color);
  // Set this cell's background to the input color.
});

})