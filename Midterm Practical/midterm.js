function addressFunction() {
  var E1FirstName = document.getElementById("E1FirstName");
  var E1LastName = document.getElementById("E1LastName");
  var E1Address = document.getElementById("E1Address");
  var E1Gender = document.getElementById("E1Gender");
  var E1Phone = document.getElementById("E1Phone");
  var E1Year = document.getElementById("E1Year");

  var E2FirstName = document.getElementById("E2FirstName");
  var E2LastName = document.getElementById("E2LastName");
  var E2Address = document.getElementById("E2Address");
  var E2Gender = document.getElementById("E2Gender");
  var E2Phone = document.getElementById("E2Phone");
  var E2Year = document.getElementById("E2Year");

  if (E1FirstName.valueMissing || E1LastName.valueMissing || E1Address.valueMissing || E1Phone.valueMissing) {
    setCustomValidity("Please fill out this field");
  }

  if (document.getElementById("SameCheckbox").checked) {
    E2FirstName.value = E1FirstName.value;
    E2LastName.value = E1LastName.value;
    E2Address.value = E1Address.value;
    E2Gender.value = E1Gender.value;
    E2Phone.value = E1Phone.value;
    E2Year.value = E1Year.value;
  } else {
    E2FirstName.value = "";
    E2LastName.value = "";
    E2Address.value = "";
    E2Gender.value = "";
    E2Phone.value = "";
    E2Year.value = "";
  }
}
