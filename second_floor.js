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
  if (nameOfTheClass === "hover-class cttc_room") {
    document.querySelector(".notice").innerHTML = "<b><u>CTTC Room Notice</u></b>: The timing for CTTC room starts from 10.00am to 4.00pm. Here only courses offered by CTTC are tought to students at free of cost.";
  }
  if (nameOfTheClass === "hover-class meeting_room"){
    document.querySelector(".notice").innerHTML = "<b><u>Meeting Room Notice</u></b>: The meeting room is only for grand meetings. If any club/society of the college wants to organise any meeting in the meeting room then they must need to have application signed by the HoD which will be cross verified by the principal.";
  }
  if (nameOfTheClass === "hover-class spectrum"){
    document.querySelector(".notice").innerHTML = "<b><u>Spectrum Club Notice</u></b>: Spectrum club room is only for spectrum club meetings of any other activities performed by spectrum club. If any student is not a member of this club then he can not get entry to this room. All the members of this club should carry their id cards given by the spectrum club before entry to this room.";
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
  var croom = document.getElementsByClassName("cttc_room");
  for (var i = 0; i < croom.length; i++) {
      croom[i].style.pointerEvents = "none";
  }
}

if (h<=10 || h>=16) {
  var e = document.getElementsByClassName("meeting_room");
  for (var i = 0; i < e.length; i++) {
      e[i].style.pointerEvents = "none";
  }
}

if (h<=10 || h>=16) {
  var a = document.getElementsByClassName("spectrum");
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
