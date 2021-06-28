function bookAppointment(service, name, specialist, date){

	message = "Hi " + name +"! You have booked an appointment with Dr." + specialist + " for " + service + "on " + date + ". See you then!"
	alert(message);
}

/*///////////////////////////////////////////////////
Inspired from https://stackoverflow.com/questions/16170828/jquery-get-values-of-checked-checkboxes-into-array
///////////////////////////////////////////////////*/
$("#bookApp").click(function(event){
    event.preventDefault();
    servicesString = "";
    unfilled = "";

    name = document.getElementById("userName").value;
    phone = document.getElementById("phoneInput").value;
    email = document.getElementById("emailInput").value;
	specialist = document.getElementById("specialist").selectedOptions[0].value;
	date = $('#date').val();
	cardName = document.getElementById("cname").value;
    credNum = document.getElementById("ccnum").value;
    expMonth = document.getElementById("expmonth").selectedOptions[0].value;
    expYear = document.getElementById("expyear").value;
    cvv = document.getElementById("cvv").value;

    var condition = name && phone && email && specialist && date && cardName && credNum && expMonth && expYear && cvv;

    var variables = [name, phone, email, specialist, date, cardName, credNum, expMonth, expYear, cvv];
    var variablesNames = ["Full Name", "Phone Number", "Email Address", "Specialist", "Date", "Card Holder", "Credit card Number", "Exp Month", "Exp Year", "CVV"];

    for (var i = 0; i < variables.length; i++) {
    	if (!(variables[i])){
    		unfilled =unfilled + ", "  + variablesNames[i];
    	}
    	
    }

	if (condition) {
	    $("#services input:checkbox:checked").map(function(){
	        servicesString = servicesString +  $(this).val() + ", ";
	    });

	    bookAppointment(servicesString, name, specialist, date);
    }else{
    	message = "In order to proceed please fill out the following fields" + unfilled + "."
    	alert(message)
    }
}); 
/*///////////////////////////////////////////////////
Inspired from https://stackoverflow.com/questions/19966417/prevent-typing-non-numeric-in-input-type-number
///////////////////////////////////////////////////*/
$('#phoneInput').on('keypress', function(e){
  return e.metaKey || // cmd/ctrl
    e.which <= 0 || // arrow keys
    e.which == 8 || // delete key
    /[0-9]/.test(String.fromCharCode(e.which)); // numbers
})
$('#expyear').on('keypress', function(e){
  return e.metaKey || // cmd/ctrl
    e.which <= 0 || // arrow keys
    e.which == 8 || // delete key
    /[0-9]/.test(String.fromCharCode(e.which)); // numbers
})
$('#ccnum').on('keypress', function(e){
  return e.metaKey || // cmd/ctrl
    e.which <= 0 || // arrow keys
    e.which == 8 || // delete key
    /[0-9]/.test(String.fromCharCode(e.which)); // numbers
})
$('#cvv').on('keypress', function(e){
  return e.metaKey || // cmd/ctrl
    e.which <= 0 || // arrow keys
    e.which == 8 || // delete key
    /[0-9]/.test(String.fromCharCode(e.which)); // numbers
})

/*///////////////////////////////////////////////////
Inspired from https://github.com/RyanMatte/Lab5_Starter/blob/main/scripts/service.js
///////////////////////////////////////////////////*/
$("#cvv").on("mouseenter", function(){
    $("#cvv").addClass("showInput");
});

$("#cvv").on("mouseleave", function(){
    $("#cvv").removeClass("showInput");
});

$("#cvv").tooltip({
    classes: {
        "ui-tooltip": "highlight"
    }
});

$("#ccnum").on("mouseenter", function(){
    $("#ccnum").addClass("showInput");
});

$("#ccnum").on("mouseleave", function(){
    $("#cvv").removeClass("showInput");
});

$("#ccnum").tooltip({
    classes: {
        "ui-tooltip": "highlight"
    }
});