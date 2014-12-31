$('#password_input').keyup (function (e) {
	var strong = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var medium = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var primary = new RegExp("(?=.{6,}).*", "g");

    if (false == primary.test($(this).val())) {
    	$('#password_power').html('Enter more characters!');
    }
    else if (strong.test($(this).val())){
     	$('#password_power').html('Password strength: Strong');
    }
    else if (medium.test($(this).val()))
    {
    	$('#password_power').html('Password strength: Medium');
    }
    else
    {
    	$('#password_power').html('Password strength: Basic');
    }
});