function checkAge() {
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    let button = document.getElementById("Submit");
    let confirm = document.getElementById("confirm");
    let verify = document.getElementById("verify");
    let age = document.getElementsByClassName("age");
    var oldEnough = false;
    let warning = "<h1>Leave <br> this site <br> immediately!</h1>";
    if (year.value <= 53) {
      oldEnough = true;
    } else {
      oldEnough = false;
    }
    if (oldEnough == false) {
      day.remove();
      month.remove();
      year.remove();
      button.remove();
      confirm.innerHTML=warning;
      } else {
        verify.hidden = true;
  ;
    }
  }