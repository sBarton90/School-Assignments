function calculateBMR(){
  var feet = parseInt(document.getElementById("feet").value);
  var inches = parseInt(document.getElementById("inches").value);
  var pounds = parseInt(document.getElementById("pounds").value);
  var age = parseInt(document.getElementById("age").value);
  var gender = document.getElementById("gender").value;
  var totalHeight = (feet * 12) + inches;
  var totalBMR;

  if(gender == "male") {
    totalBMR = 66 + (6.2 * pounds) + (12.7 * totalHeight) - (6.76 * age);
  } else if (gender == "female") {
    totalBMR = 655 + (4.35 * pounds) +  (4.7 * totalHeight) - (4.7 * age);
  }
  document.getElementById("total").value = totalBMR;
}

function calculateMBMR(){
  var ageM = parseInt(document.getElementById("ageM").value);
  var heightM = parseInt(document.getElementById("cms").value);
  var weightM = parseInt(document.getElementById("kilos").value);
  var genderM = document.getElementById("genderM").value;
  var totalMBMR;

  if(genderM == "maleM") {
    totalMBMR = 66.5 + (13.76 * weightM) + (5.003 * heightM) - (6.755 * ageM);
  } else if (genderM == "femaleM") {
    totalMBMR = 655 + (9.563 * weightM) + (1.850 * heightM) - (4.676 * ageM);
  }
  document.getElementById("totalM").value = totalMBMR;
}
