function toggleUnitFields() {
  const unit = document.getElementById("unitSelect").value;
  document.getElementById("metricHeightGroup").classList.toggle("hidden", unit === "imperial");
  document.getElementById("imperialHeightGroup").classList.toggle("hidden", unit === "metric");
}

function calBMI() {
  const unit = document.getElementById("unitSelect").value;
  const weight = parseFloat(document.getElementById("weightId").value);
  let height = 0, bmi = 0;
  const resultBox = document.getElementById("bmiResult");

  if (!weight || weight <= 0) {
    resultBox.innerText = "❌ Please enter a valid weight.";
    resultBox.style.backgroundColor = "#e57373";
    return;
  }

  if (unit === "metric") {
    const heightCm = parseFloat(document.getElementById("heightCmId").value);
    if (!heightCm || heightCm <= 0) {
      resultBox.innerText = "❌ Please enter a valid height (cm).";
      resultBox.style.backgroundColor = "#e57373";
      return;
    }
    height = heightCm / 100;
    bmi = weight / (height * height);
  } else {
    const feet = parseFloat(document.getElementById("heightFtId").value);
    const inches = parseFloat(document.getElementById("heightInId").value);
    if (!feet && !inches) {
      resultBox.innerText = "❌ Please enter your height in feet and inches.";
      resultBox.style.backgroundColor = "#e57373";
      return;
    }
    const totalInches = (feet * 12) + inches;
    bmi = (703 * weight) / (totalInches * totalInches);
  }

  bmi = bmi.toFixed(1);
  let status = "";
  let bgColor = "";

  if (bmi < 18.5) {
    status = "Underweight – You might need a nutrition boost.";
    bgColor = "#4fc3f7";
  } else if (bmi < 25) {
    status = "Normal – You’re in a healthy range. Keep it up!";
    bgColor = "#81c784";
  } else if (bmi < 30) {
    status = "Overweight – A bit of movement could help.";
    bgColor = "#ffb74d";
  } else {
    status = "Obese – Consider lifestyle changes. You got this 💪";
    bgColor = "#e57373";
  }

  resultBox.innerText = `Your BMI is ${bmi}. ${status}`;
  resultBox.style.backgroundColor = bgColor;
}
