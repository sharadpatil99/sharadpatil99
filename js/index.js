$(document).ready(function() {

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

		var validUser = $('#login').val() === 'admin'; // User validate
		var validPassword = $('#password').val() === 'admin'; // Password validate

        if (validUser === true && validPassword === true) { 
            window.location.href = "https://sharadpatil99.github.io/sharadpatil99/home.html"; // go to home.html
        }
        else {
            alert('Please enter correct Username & Password');
        }
    });
});