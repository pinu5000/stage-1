var dt = new Date();
var year = dt.getFullYear();
var month = dt.getMonth();
var date = dt.getDate();
var hours = dt.getHours();
var minutes = dt.getMinutes();
var seconds = dt.getSeconds();
document.querySelector(".date-and-time").innerHTML = "Date : " + date + "/" + (month + 1) + "/" + year + " , Time : " + hours + ":" + minutes + ":"
                                                          + seconds;
