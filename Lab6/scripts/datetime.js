
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";


function disableDates(date) {
    specialist = document.getElementById("specialist").selectedOptions[0].value;

    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0 || date.getDay() === 6)
        return [false];
    if(specialist == "Sam Iluju"){
      unavailableDates = ["06/29/2021","06/30/2021","07/01/2021","07/02/2021","07/03/2021"];
    }else if(specialist == "Agetha Lee"){
      unavailableDates = ["06/25/2021","06/26/2021","06/27/2021","06/28/2021","06/29/2021"];
    }else if(specialist == "John Forward"){
      unavailableDates = ["06/20/2021","06/21/2021","06/22/2021","07/01/2021","07/02/2021"];
    }else{
      unavailableDates = ["06/29/2021","07/07/2021","07/10/2021"];
    }

    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}

$( "#date" ).datepicker(
  {
    dateFormat: setDateFormat,
    // no calendar before June 1rst 2020
    minDate: new Date('06/01/2020'),
    maxDate: '+4M',
    // used to disable some dates
    beforeShowDay: $.datepicker.noWeekends,
    beforeShowDay: disableDates
  }
);
