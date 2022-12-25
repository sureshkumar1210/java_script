function getCityName()
	{
       cityDivision = document.getElementById("cities")
	cityNamesInput = cityDivision.getElementsByTagName("input")
	cityNamesOutput = document.getElementsByTagName("p")
	cityNamesOutput[0].innerHTML =cityNamesInput[0].value
	cityNamesOutput[1].innerHTML =cityNamesInput[1].value
	cityNamesOutput[2].innerHTML =cityNamesInput[2].value
	}
