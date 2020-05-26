document.querySelector("body").onload = function() {startTime()};

function startTime() {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var date = today.getDate();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector(".show-time-date").innerHTML = "Time : " +
  h + ":" + m + ":" + s + " , Date : " + date + "/" + month + "/" + year;
  var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function myFunction(e) {
  var nameOfTheClass = e.className;

  if (nameOfTheClass === "hover-class lab") {
    document.querySelector(".notice").innerHTML = "<b><u>Lab Notice</u></b>: Timing for lab starts from 10.00 am to 4.00pm. Everyone should carry their id cards before entry to the lab. Before entry to the lab room everyone should put their shoes out. If any lab instrument breaks due to you then you will be punished for this.";
  }
  if (nameOfTheClass === "hover-class conference_room") {
    document.querySelector(".notice").innerHTML = "<b><u>Conference Room Notice</u></b>: The conference room is only for grand meetings. If any club/society of the college wants to organise any meeting in the conference room then they must need to have application signed by the HoD which will be cross verified by the principal.";
  }
  if (nameOfTheClass === "hover-class examination_section"){
    document.querySelector(".notice").innerHTML = "<b><u>Examination Section Notice</u></b>: No student can get entry to the examination section without permission of the principal. If this kind of action happens then he/she would be suspended for a semester.";
  }
  if (nameOfTheClass === "hover-class academic_section"){
    document.querySelector(".notice").innerHTML = "<b><u>Academic Section Notice</u></b>: If anybody wants to change the optional subject then he/she should contact in the academic section. Before entry to the academic section every student should carry their id cards and put their shoes out of the room.";
  }
  if (nameOfTheClass === "hover-class staff_room"){
    document.querySelector(".notice").innerHTML = "<b><u>Staff Room Notice</u></b>: The staff room timing starts from 10.00am to 4.00pm. Every staff should carry their id cards before entry to the staff room.";
  }
}

// Get the modal
var modal = document.querySelector(".modal");

// Get the button that opens the modal
var btn1 = document.querySelector(".stairs_1_button");

var btn2 = document.querySelector(".stairs_2_button");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks the button, open the modal
btn1.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var t = new Date();
var h = t.getHours();
if (h<=10 || h>=16) {
  var classroom = document.getElementsByClassName("classroom");
  for (var i = 0; i < classroom.length; i++) {
      classroom[i].style.pointerEvents = "none";
  }
}

if (h<=10 || h>=16) {
  var lab = document.getElementsByClassName("lab");
  for (var i = 0; i < lab.length; i++) {
      lab[i].style.pointerEvents = "none";
  }
}

if (h<=10 || h>=16) {
  var croom = document.getElementsByClassName("conference_room");
  for (var i = 0; i < croom.length; i++) {
      croom[i].style.pointerEvents = "none";
  }
}

if (h<=10 || h>=16) {
  var e = document.getElementsByClassName("examination_section");
  for (var i = 0; i < e.length; i++) {
      e[i].style.pointerEvents = "none";
  }
}

if (h<=10 || h>=16) {
  var a = document.getElementsByClassName("academic_section");
  for (var i = 0; i < a.length; i++) {
      a[i].style.pointerEvents = "none";
  }
}

if (h<=10 || h>=16) {
  var s = document.getElementsByClassName("staff_room");
  for (var i = 0; i < s.length; i++) {
      s[i].style.pointerEvents = "none";
  }
}

if (h<0) {
  var alwaysActive = document.getElementsByClassName("always");
  for (var i = 0; i < alwaysActive.length; i++) {
      alwaysActive[i].style.pointerEvents = "none";
  }
}
