/*
  @TODO : Add Script

  Details;
  1. Formula for calculating IDW by
      - Male:	 50.0 kg + 2.3 kg per inch per inch over 5 feet : B. J. Devine Formula (1974)
      - Female:	49 kg + 1.7 kg per inch over 5 feet : J. D. Robinson Formula (1983)
  2. BMI Formula : kg/(height in metres * height in metres)
  3. jQuery for modifying bound name result(color change)
  4. Enable tooltips

*/
function calculate()
{
	// alert('Enter the details correctly');
	//var number1 = document.getElementById('age').value;
	var number1 = document.getElementById('height').value;

	result= 50+((2.3*number1)/5);
	var result_span = document.getElementById('results');
	result_span.innerHTML = result;
}

// //eventListener methods
var calculate_BMI = document.getElementById('calculateBMI');

calculate_BMI.addEventListener('Click',function(){
	alert('Not implemented also!');
});
