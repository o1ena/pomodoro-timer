var mins = 0;
var sec = 59;
var breakTime = 1;
var timerDisplay = $("#timer");
var workInterval;
var breakInterval;

$("#increasework").click(function() {
    if (mins > 59) {
        mins = 59;
    }
    mins++;
    $("#work-time").html(mins);
});

$("#decreasework").click(function() {
    if (mins <= 2) {
        mins = 2;
    }
    mins--;
    $("#work-time").html(mins);
});

$("#increasebreak").click(function() {
    if (breakTime > 29) {
        breakTime = 29;
    }
    breakTime++;
    $("#break").html(breakTime);
});

$("#decreasebreak").click(function() {
    if (breakTime <= 2) {
        breakTime = 2;
    }
    breakTime--;
    $("#break").html(breakTime);
});

function breakTimer() {
    breakInterval = setInterval(function() {
        timerDisplay.html("0" + breakTime + " : " + sec);
        sec--;
        if (sec < 0) {
            sec = 59;
            breakTime--;
        }
        
        if (sec < 10) {
            timerDisplay.html("0" + breakTime + " : " + "0" + sec);
        }
        if (breakTime > 9) {
            timerDisplay.html(breakTime + " : " + "0" + sec);
        }
        if (breakTime < 0) {
            stopTimer();
            $("#message").html('');
            resetTimer();
        }
    }, 100);
};

function startTimer() {
    workInterval = setInterval(function() {
        timerDisplay.html("0" + mins + " : " + sec);
        sec--;
        if (sec < 0) {
            sec = 59;
            mins--;
        }
       
        if (sec < 10) {
            timerDisplay.html("0" + mins + " : " + "0" + sec);
        }

        if (sec > 9) {
            timerDisplay.html("0" + mins + " : " + sec);
        }
        if (mins == 0 && sec == 0) {
            $("#timer-container").css("background", "#f44336");
            $("#timer-container").css("border-color", "#f44336");
            $("#message").html('Break');
            clearInterval(workInterval);
            breakTimer();
        }
    }, 100);
}

function stopTimer() {
    if (workInterval) {
        clearInterval(workInterval);
    }
    if (breakInterval) {
        clearInterval(breakInterval);
    }
}

function resetTimer() {
    stopTimer();
    timerDisplay.html("-- : --");
    mins = 0;
    breakTime = 1;
    sec = 59;
    $("#timer-container").css("background", "#4c8c4a");
    $("#timer-container").css("border-color", "#4c8c4a");
    $("#message").html("");
    $("#work-time").html(1);
    $("#break").html(1);
    $('#stop').hide();
    $('#start').show();
}

$("#start").click(function() {
    $('#stop').show();
    $('#start').hide();
});

$("#stop").click(function() {
    $('#stop').hide();
    $('#start').show();
});