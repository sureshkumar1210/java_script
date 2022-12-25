alert("haii");
/*	function getCityName()
	{
	cityNamesInput = document.getElementsByTagName("input")
	cityNamesOutput = document.getElementsByTagName("p")
	cityNamesOutput[0].innerHTML =cityNamesInput[0].value
	cityNamesOutput[1].innerHTML =cityNamesInput[1].value
	cityNamesOutput[2].innerHTML =cityNamesInput[2].value
	} */
function getCityName(){
    cityNamesInput = document.getElementsByTagName("input")
    cityNamesOutput = document.getElementsByTagName("p")
	for(i=0; i<cityNamesInput.length;i++)
        {
        cityNamesOutput[i].innerHTML =cityNamesInput[i].value
        }
}
