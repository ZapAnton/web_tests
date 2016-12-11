function change_locale() {
	var current_locale = document.body.className;
	
	if (current_locale === "en") {
		document.body.className = "ru";
	} else {
		document.body.className = "en";
	}
}