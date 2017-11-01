function populate (s1,s2) {
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";

	    if(s1.value == "Arson") {
			var optionArray = ["|Choose...","Felony|Felony"];
		} else if(s1.value == "Bribery") {
			var optionArray = ["|Choose...","Felony|Felony"];
		} else if(s1.value == "First Degree Burglary") {
			var optionArray = ["|Choose...","Felony|Felony"];	
		} else if(s1.value == "Carjacking") {
			var optionArray = ["|Choose...","Felony|Felony"];
		} else if(s1.value == "Conspiracy") {
			var optionArray = ["|Choose...","Felony|Felony"];
		} else if(s1.value == "Extortion") {
			var optionArray = ["|Choose...","Felony|Felony"];
		} else if(s1.value == "Kidnapping") {
			var optionArray = ["|Choose...","Felony|Felony"];
		} else if(s1.value == "Mayhem") {
			var optionArray = ["|Choose...","Felony|Felony"];
		} else if(s1.value == "Perjury") {
			var optionArray = ["|Choose...","Felony|Felony"];
		} else if(s1.value == "Rape") {
			var optionArray = ["|Choose...","Felony|Felony"];
		} else if(s1.value == "Robbery") {
			var optionArray = ["|Choose...","Felony|Felony"];
		} else if(s1.value == "Assault") {
			var optionArray = ["|Choose...","Misdemeanor|Misdemeanor"];
		} else if(s1.value == "Battery") {
			var optionArray = ["|Choose...","Misdemeanor|Misdemeanor"];	
		} else if(s1.value == "Disorderly Conduct") {
			var optionArray = ["|Choose...","Misdemeanor|Misdemeanor"];	
		} else if(s1.value == "Disturbing the Peace") {
			var optionArray = ["|Choose...","Misdemeanor|Misdemeanor"];	
		} else if(s1.value == "Driving on Suspended License") {
			var optionArray = ["|Choose...","Misdemeanor|Misdemeanor"];	
		} else if(s1.value == "Failure to Appear") {
			var optionArray = ["|Choose...","Misdemeanor|Misdemeanor"];	
		} else if(s1.value == "Minor in Possession") {
			var optionArray = ["|Choose...","Misdemeanor|Misdemeanor"];	
		} else if(s1.value == "Prostitution") {
			var optionArray = ["|Choose...","Misdemeanor|Misdemeanor"];	
		} else if(s1.value == "Public Intoxication") {
			var optionArray = ["|Choose...","Misdemeanor|Misdemeanor"];	
		} else if(s1.value == "Resisting Arrest") {
			var optionArray = ["|Choose...","Misdemeanor|Misdemeanor"];	
		} else if(s1.value == "Shoplifting") {
			var optionArray = ["|Choose...","Misdemeanor|Misdemeanor"];	
		} else if(s1.value == "Trespass") {
			var optionArray = ["|Choose...","Misdemeanor|Misdemeanor"];	
		} else {
			var optionArray = ["|Choose...","Felony|Felony","Misdemeanor|Misdemeanor"];	
		}																			

		for(var option in optionArray) {
			var pair = optionArray[option].split("|"); //Makes new array out of each optionArray item
			var newOption = document.createElement("option"); //Makes a new <option> element for each array in optionArray
			newOption.value = pair[0]; //Assigns index 0 in each array as the <option> value attribute
			newOption.innerHTML = pair[1]; //Assigns index 1 in each array as the visible html
			s2.options.add(newOption); //Appends the new <option> on the <select> menu
		}
};
