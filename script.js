function calculateBMI(){

const height = document.getElementById("height").value / 100;
const weight = document.getElementById("weight").value;

const bmi = weight / (height * height);

let category = "";

if(bmi < 18.5){
category = "Underweight";
}
else if(bmi < 24.9){
category = "Normal weight";
}
else if(bmi < 29.9){
category = "Overweight";
}
else{
category = "Obese";
}

document.getElementById("result").innerText =
"Your BMI: " + bmi.toFixed(2) + " (" + category + ")";

}
