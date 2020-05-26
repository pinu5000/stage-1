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

  if (nameOfTheClass === "hover-class library") {
    document.querySelector(".notice").innerHTML = "<b><u>Library Notice</u></b>: Timing for library starts from 10.00 am to 3.00pm. Everyone should carry their id cards before entry to the library. At a time one student can issue 2 books and he should return these books within 15 days from issue date. If any delay occurs in retuning of the book then he should pay Rs.1/- per each day after the returning period id over.";
  }
  if (nameOfTheClass === "hover-class principal_room") {
    document.querySelector(".notice").innerHTML = "<b><u>Principal Room Notice</u></b>: The name of the Principal is Mr. P K Patra. Timing for principal room starts form 11.00am to 2.00 pm. If any student wants to contact principal then he must have the application with the signature of the HoD.";
  }
  if (nameOfTheClass === "hover-class hod_room"){
    document.querySelector(".notice").innerHTML = "<b><u>HoD Room Notice</u></b>: The name of the Principal is Mr. A K Mohanty. Timing for HoD room starts form 11.00am to 2.00 pm. If any student wants to contact HoD then he must have the application with the signature of the heads of their respective branches.";
  }
  if (nameOfTheClass === "hover-class reading_room"){
    document.querySelector(".notice").innerHTML = "<b><u>Reading Room Notice</u></b>: The reading room timing starts from 10.00am to 4.00pm. Every student should carry their id cards before entry to the reading room.";
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
  var proom = document.getElementsByClassName("principal_room");
  for (var i = 0; i < proom.length; i++) {
      proom[i].style.pointerEvents = "none";
  }
}

if (h<=10 || h>=16) {
  var hroom = document.getElementsByClassName("hod_room");
  for (var i = 0; i < hroom.length; i++) {
      hroom[i].style.pointerEvents = "none";
  }
}

if (h<=10 || h>=16) {
  var library = document.getElementsByClassName("library");
  for (var i = 0; i < library.length; i++) {
      library[i].style.pointerEvents = "none";
  }
}

if (h<=10 || h>=16) {
  var rroom = document.getElementsByClassName("reading_room");
  for (var i = 0; i < rroom.length; i++) {
      rroom[i].style.pointerEvents = "none";
  }
}

if (h<0) {
  var alwaysActive = document.getElementsByClassName("always");
  for (var i = 0; i < alwaysActive.length; i++) {
      alwaysActive[i].style.pointerEvents = "none";
  }
}

// var myVar;
//
// function preloaderFunction() {
//   myVar = setTimeout(showPage, 3000);
// }
//
// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
// }
