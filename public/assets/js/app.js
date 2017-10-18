	
	function populate (s1,s2) {
		var s1 = document.getElementById(s1);
		var s2 = document.getElementById(s2);
		s2.innerHTML = "";

	        if(s1.value == "Arson" || "Bribery" || "First Degree Burglary" || "Carjacking" || "Conspiracy" || "Extortion" || "Kidnapping" || "Mayhem" || "Perjury" || "Rape" || "Robbery") {
				var optionArray = ["|Choose...","Felony|Felony"];
			} else if(s1.value == "Assault" || "Battery" || "Disorderly Conduct" || "Disturbing the Peace" || "Driving on Suspended License" || "Failure to Appear" || "Minor in Possession" || "Prostitution" || "Public Intoxication" || "Resisting Arrest" || "Shoplifting" || "Trespass") {
				var optionArray = ["|Choose...","Misdemeanor|Misdemeanor"];
	        } else if(s1.value == "Aggrevated Assault" || "Second Degree Burglary" || "Fraud" || "Domestic Violence" || "Driving Under Influence of Alcohol" || "Drug Crimes" || "Embezzlement" || "Evading" || "False Imprisonment" || "Forgery" || "Fraud" || "Hate Crimes" || "Hit and Run" || "Manslaughter" || "Identity Theft" || "Indecent Exposure" || "Insurance Fraud" || "Stalking" || "Statutory Rape" || "Terrorism" || "Theft / Larceny" || "Vandalism" || "Weapons" || "Other") {
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

