var seconds = 60; 

var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;

$(document).ready(function() {
    $("#questionbank").hide();
	$("#endcontainer").hide();      

    $("#start").on("click", function() {
        $("#startcontainer").hide();
        $("#endcontainer").hide();
        $("#questionbank").show();
        startTimer();
        return;
    });

    $("#submit").on("click", function() {
        $("#startcontainer").hide();
        $("#endcontainer").show();
        $("#questionbank").hide();
        gameover();
        return;
    });

    function timer() {
        seconds--;
        $('#display').html(seconds + " Seconds");

        $("#submit").on("click", function(){
            seconds = 0;
            return;
        });

        if (seconds == -1) {
            gameover();
            $("#questionbank").hide();
        }
    }

    function startTimer() {
        setInterval(timer, 1000);
    }

    function gameover() {
        var Q1 = $('input:radio[id="q1"]:checked').val();
        var Q2 = $('input:radio[id="q2"]:checked').val();
        var Q3 = $('input:radio[id="q3"]:checked').val();
        var Q4 = $('input:radio[id="q4"]:checked').val();
        var Q5 = $('input:radio[id="q5"]:checked').val();
        var Q6 = $('input:radio[id="q6"]:checked').val();
        var Q7 = $('input:radio[id="q7"]:checked').val();
        var Q8 = $('input:radio[id="q8"]:checked').val();
        var Q9 = $('input:radio[id="q9"]:checked').val();
        var Q10 = $('input:radio[id="q10"]:checked').val();

    if(Q1 == undefined){
        unanswered++;
    }
    else if(Q1 =="Indigestible carbohydrate"){
        correctAnswer++;
    }
    else{
        incorrectAnswer++;
    }

    if(Q2 == undefined){
        unanswered++;
    }
    else if(Q2 == "Fiber helps enhance neuron function."){
        correctAnswer++;
    }
    else{
        incorrectAnswer++;
    }

    if(Q3 == undefined){
        unanswered++;
    }
    else if(Q3 === "20-30 grams"){
        correctAnswer++;
    }
    else{
        incorrectAnswer++;
    }


    if(Q4 === undefined){
        unanswered++;
    }
    else if(Q4 ==="10 grams"){
        correctAnswer++;
    }
    else{
        incorrectAnswer++;
    }


    if(Q5 === undefined){
        unanswered++;
    }
    else if(Q5 === "Fiber that dissolves in water, helping lower glucose and cholesterol levels."){
        correctAnswer++;
    }
    else{
        incorrectAnswer++;
    }


    if(Q6 === undefined){
        unanswered++;
    }
    else if(Q6 == "Fiber that does not dissolve in water, helping promote regular bowel movements by moving food through digestive system."){
        correctAnswer++;
    }
    else{
        incorrectAnswer++;
    }


    if(Q7 === undefined){
        unanswered++;
    }
    else if(Q7 == "Oatmeal, nuts, beans, apples and blueberries"){
        correctAnswer++;
    }
    else{
        incorrectAnswer++;
    }


    if(Q8 === undefined){
        unanswered++;
    }
    else if(Q8 == "Whole grains, brown rice, legumes, carrots, and tomatoes"){
        correctAnswer++;
    }
    else{
        incorrectAnswer++;
    }


    if(Q9 === undefined){
        unanswered++;
    }
    else if(Q9 == "Replace whole grains and brown rice with white rice, bread and pasta."){
        correctAnswer++;
    }
    else{
        incorrectAnswer++;
    }


    if(Q10 == undefined){
        unanswered++;
    }
    else if(Q10 == "A high fiber diet raises the risk of heart disease by increasing cholesterol."){
        correctAnswer++;
    }
    else{
        incorrectAnswer++;
    }

    $('#correctAnswer').html(correctAnswer/2);
    $('#incorrectAnswer').html(incorrectAnswer/2);
    $('#unanswered').html(unanswered/2);

    $("#endcontainer").show();

    };

});