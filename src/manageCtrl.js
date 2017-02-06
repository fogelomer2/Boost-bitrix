app.controller("manageCtrl", function ($scope) {

    var config = {
        apiKey: "AIzaSyA-IwujsvtzgDx30Jws1br-Ivq7sbX9YyA",
        authDomain: "boost-e7338.firebaseapp.com",
        databaseURL: "https://boost-e7338.firebaseio.com",
        storageBucket: "boost-e7338.appspot.com",
        messagingSenderId: "712453368075"
    };

    firebase.initializeApp(config);

    var obj =
        {
            players: {
                1: {
                    tasks: [

                    ],
                    answers: []
                }
            }
        }


    // var tasks = {
    //     taskId: 12

    // }
    //Fire: this is how to enter specific team  
    // var id = 1;
    // var taskId = 12;
    // //var database = firebase.database().ref("answers");//.child(id);
    // $scope.questions = [];
    // function getQuestions() {
    //     var databaseTasks = firebase.database().ref("task");
    //     databaseTasks.once("value").then(function (res) {
    //         var responseValues = res.val();
    //         responseValues.forEach(function (responseValue) {
    //             if (responseValue.taskId == taskId) {
    //                 $scope.questions = responseValue.questions;
    //                 $scope.$apply()
    //             }
    //         })
    //     });
    // }
    // getQuestions()

    $scope.insertUsers = function () {
        //        let user = 
        var databaseTeamPlayers = firebase.database().ref("team");//.child(id);//.child("tasks");
        databaseTeamPlayers.set({ userId: 1 }).then(function (res) {
            res;
        });
    }

    $scope.insertQuestions = function () {
        var tasks = [{
            taskId: 12,
            title: 'practice2',
            questions: [{
                text: 'How was it',
                type: 1
            },
            {
                text: 'How you feel',
                type: 2,
                options: ['true', 'false', 'yes', 'no']
            }]
        }]
        var databaseTasks = firebase.database().ref("task");
        databaseTasks.set(tasks).then(function (res) {
            res;
        });

    }

    $scope.insertQuestions();

    //Fire: this is how to set item with no weird firebase id 
    // database.set(answer).then(function (res) {
    //     res;
    // });




    // database.push(obj).then(function (res) {
    //     res;
    // })

    // //Fire: get elem by name
    // database.child("players").once("value").then(function (res) {
    //     res;
    // });


    // $scope.questions = [
    //     { text: 'Is', type: 1 },
    //     { text: 'What', type: 2, options: ['true', 'false', 'yes', 'no'] },
    //     { text: 'How', type: 3 },
    //     { text: 'How Much', type: 4 },
    // ];
    $scope.questionsTypesEnum = {
        yesNo: 1,
        selectOptions: 2,
        freeText: 3,
        range: 4
    };

    $scope.submit = function () {
        $scope.answers = {}

        let answer = {
            playerId: id,
            taskId: 12,
            answers: $scope.answers
        }
        var databaseAnswers = firebase.database().ref("answers");
        databaseAnswers.set(answer).then(function (res) {
            res;
        });
    }

});