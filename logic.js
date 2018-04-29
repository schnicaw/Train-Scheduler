var config = {
    apiKey: "AIzaSyDmTkDxzHFJfAKKx9aUTz_iEAdwjf9ZNkI",
    authDomain: "train-scheduler-2519b.firebaseapp.com",
    databaseURL: "https://train-scheduler-2519b.firebaseio.com",
    projectId: "train-scheduler-2519b",
    storageBucket: "train-scheduler-2519b.appspot.com",
    messagingSenderId: "348911468230"
  };
  firebase.initializeApp(config);

$("#addTrain").on("click", function(event) {
    event.preventDefault();
})

  var trainName = "";
  var destination = "";
  var firstTrainTime = "";
  var frequency = "";

$("#addTrain").on("click",function(){
    trainName = $("#trainNameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    firstTrainTime = $("#firstTrainTimeInput").val().trim();
    frequency = $("#frequencyInput").val().trim();

    firebase.database().ref().push({
        trainName:trainName,
        destination:destination,
        firstTrainTime:firstTrainTime,
        frequency:frequency
    })
})

firebase.database().ref().on("child_added",function(snapshot){
    $("#train-schedule > tbody").append("<tr><td>" + trainName +"</td><td>" + destination + "</td><td>" +
    firstTrainTime + "</td><td>" + frequency + "</td></tr>");
});
