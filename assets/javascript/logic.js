$(document).ready(function(){

var config = {
    apiKey: "AIzaSyAHklHQGal5D9D-vutKcBxKjxdVvT5knTE",
    authDomain: "employeedatamanagement-1f7a3.firebaseapp.com",
    databaseURL: "https://employeedatamanagement-1f7a3.firebaseio.com",
    storageBucket: "employeedatamanagement-1f7a3.appspot.com",
    messagingSenderId: "813836623686"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

  var employeeName = "";
  var role = "";
  var startDate = "";
  var monthlyRate = 0;


  $("#add-user").on("click", function(){



  	employeeName = $("#name-input").val().trim();
  	role = $("#role-input").val().trim();
  	startDate = $("#date-input").val().trim();
  	monthlyRate = $("#rate-holder").val().trim().parseInt().


  	dataRef.ref().push({

		employeeName: employeeName,
		role: role,
		startDate: startDate,
		monthlyRate: monthlyRate
  	});

  	return false;

  });










});  

