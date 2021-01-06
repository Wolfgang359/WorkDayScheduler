//This is all the code required to keep a live update of the current time at the top of the page
function currentTime() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
};
currentTime();
setInterval(currentTime, 1000);

//This is the code required to set whether the time slots are present, future, or past
function setBGC() {
    var Hour = parseInt(moment().format("HH"));
    var textArr = document.getElementsByClassName("row");

    for (let i = 0; i < textArr.length; i++) {
        var timeOfDayID = parseInt(textArr[i].id);
        var time = textArr[i];

        if (timeOfDayID < Hour) {
            time.classList.add("past");
        } else if (timeOfDayID > Hour) {
            time.classList.add("future");
        } else if (timeOfDayID === Hour) {
            time.classList.add("present");
        };
    };
};
setBGC();

//This is the code to save your information to the local storage and save the calendar in general
$("button").on("click", function () {
    var activity = $(this).siblings(".description").val();
    var timeVal = $(this).parent().attr("id");

    localStorage.setItem(timeVal, activity);
})

$(".timeTextArea").each(function () {
    $(this).val(localStorage.getItem(`${$(this).parent().attr("id")}`))
});