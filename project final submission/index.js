//$(window).on("hashchange", 
function trigger() {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
};

//$(window).trigger("hashchange");

function validateLoginForm() {
	var name = document.getElementById("logName").value;
	var password = document.getElementById("logPassword").value;

	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8 || password.length >21) {
		document.getElementById("errorMsg").innerHTML = "Your password must include min 8 characters and less than 20"
		return false;
	}
	else {
		alert("Successfully logged in");
		return true;
	}
}
function validateSignupForm() {
    var mail = document.getElementById("signEmail").value;
    var name = document.getElementById("signName").value;
    var password = document.getElementById("signPassword").value;

    if (mail == "" || name == "" || password == "") {
        document.getElementById("errorMsg").innerHTML = "Please fill the required fields";
        return false;
    } else if (password.length < 8) {
        document.getElementById("errorMsg").innerHTML = "Your password must include at least 8 characters";
        return false;
    } else {
        // If validation passes, we don't return false, allowing the form to submit
        alert("Validation passed. Form submitted.");
        return true;
    }
}

