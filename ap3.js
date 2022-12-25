
function create()
{
content = document.getElementById("input_text").value; 
element = document.createElement("p") //இங்கே <p></p> வந்திருக்கும்.  
our_data = document.createTextNode(content); //இங்கே நம்முடைய text
element.appendChild(our_data); 
mydiv = document.getElementById("mydiv");
mydiv.appendChild(element); 
}
