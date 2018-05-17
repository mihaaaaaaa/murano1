	function addTextToInput(anElement) {
  var text = document.getElementById('jaloby').value;
  text += 1;
  document.getElementById('jaloby').value = text;
}

$(document).ready(function() {
    let total = 0;
    $('.spisok-3-item-bl').click(function () {
        $('.spisok-3-item-input').valve(total++)
    });
});