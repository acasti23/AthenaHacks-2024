// JavaScript source code
$(document).ready(function () {
    var taskNum = 1;
    const submitBTN = document.querySelector('#submit-button');
    var PasswordField = document.getElementById('password-input');
    var errorMessage = document.getElementById('password-label');

    submitBTN.addEventListener('click', function () {
        var UserIn = PasswordField.value;
        if (taskNum == 1) {
            document.getElementById('task-num').innerText = "Task #1";
            document.getElementById('task-desc').innerText = "This is Task 1";
            if (UserIn != "Workshop Room") {
                errorMessage.style.color = "red";
            }
            else {
                taskNum++;
            }
        } else if (taskNum == 2) {
            document.getElementById('task-num').innerText = "Task #2";
            document.getElementById('task-desc').innerText = "This is Task 2";
            if (UserIn != "Room") {
                errorMessage.style.color = "red";
            }
            else {
                taskNum++;
            }
        } else if (taskNum == 3) {
            document.getElementById('TaskTitle').innerText = "Task #3";
            document.getElementById('TaskDecr').innerText = "This is Task 3";
        }
    });
});


