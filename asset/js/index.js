$(document).ready(function() {
    let startDay = new Date("02/05/2024");
    let today = new Date();
    let Difference_In_Time = today.getTime() - startDay.getTime();
    let Difference_In_Days = Math.round (Difference_In_Time / (1000 * 3600 * 24));
    $(".dayCount").append(Difference_In_Days + " days been together");
})

function showContentEvent() {
    $(".showContent").toggleClass("hide")
}