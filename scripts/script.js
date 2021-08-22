var counterField = document.getElementById("counter");
var incBtn = document.getElementById("btn-inc");
var decBtn = document.getElementById("btn-dec");
var resetBtn = document.getElementById("btn-reset");
var txtField = document.getElementById("txt-field");
var number = 0;

if (incBtn) {
  incBtn.addEventListener("click", () => {
    if (txtField.value == "") {
      number = parseInt(counterField.innerHTML);
      number++;
      counterField.innerHTML = number;
    } else {
      var val = parseInt(txtField.value) + parseInt(counterField.innerHTML);
      counterField.innerHTML = val;
    }
  });
}

if (decBtn) {
  decBtn.addEventListener("click", () => {
    if (txtField.value == "") {
      number = parseInt(counterField.innerHTML);
      number--;
      counterField.innerHTML = txtField.value + number;
      //counterField.innerHTML = number - txtField.value;
    } else {
      var val = parseInt(counterField.innerHTML) - parseInt(txtField.value);
      counterField.innerHTML = val;
    }
  });
}

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    number = 0;
    counterField.innerHTML = number;
  });
}
