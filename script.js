    // Have the firebase linked to the code
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCAm6IIBGNmaL2sFr5pevhBLTXGxn3Y51Y",
        authDomain: "trainschedule-e908f.firebaseapp.com",
        databaseURL: "https://trainschedule-e908f.firebaseio.com",
        projectId: "trainschedule-e908f",
        storageBucket: "trainschedule-e908f.appspot.com",
        messagingSenderId: "1019294391290",
        appId: "1:1019294391290:web:2eda389ffe2d936d986243"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    // Submit button to add trains

    $("#addTrainBtn").on("click", function(event) {
        event.preventDefault();

        var newTrainName = $("#TrainNameInput").val().trim();
        var newTrainDestination = $("#TrainDestinationInput").val().trim();
        var newTrainFirstTime = $("#TrainFisrtTimeInput").val().trim();
        var newTrainFrequency = $("#TrainFrequencyInput").val().trim();
    
        console.log(newTrainName);
        console.log(newTrainDestination);
        console.log(newTrainFirstTime);
        console.log(newTrainFrequency);

      // Variables to store the temporary info from the train-form inputs

        var newTrains = {
      
            name: newTrainName,
            destination: newTrainDestination,
            firstTime: newTrainFirstTime,
            frequency: newTrainFrequency,
          };
        
          console.log(newTrains.name);
          console.log(newTrains.destination);
          console.log(newTrains.firstTime);
          console.log(newTrains.frequency);
        
            // Uploads trains to firebase
            database.ref().push(newTrains);
    });





