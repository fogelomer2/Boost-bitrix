app.controller("mainCtrl", function ($scope) {

    var config = {
        apiKey: "AIzaSyA-IwujsvtzgDx30Jws1br-Ivq7sbX9YyA",
        authDomain: "boost-e7338.firebaseapp.com",
        databaseURL: "https://boost-e7338.firebaseio.com",
        storageBucket: "boost-e7338.appspot.com",
        messagingSenderId: "712453368075"
    };

    firebase.initializeApp(config);

    $scope.questionsTypesEnum = {
        yesNo: 1,
        selectOptions: 2,
        freeText: 3,
        range: 4
    };

    $scope.answers = {}

    var playerId = 1;
    var taskId = 12;
    $scope.questions = [];
  $scope.questions = [
                        { text: 'Is', type: 1 },
                        { text: 'What', type: 2, options: ['true', 'false', 'yes', 'no'] },
                        { text: 'How', type: 3 },
                        { text: 'How Much', type: 4 },
                    ];
    function getQuestions() {
        var databaseTasks = firebase.database().ref("task");
        databaseTasks.once("value").then(function (res) {
            var responseValues = res.val();
            responseValues.forEach(function (responseValue) {
                if (responseValue.taskId == taskId) {
                    //Mark
                    //$scope.questions = responseValue.questions;
                    //$scope.$apply()
                    $scope.questions = [
                        { text: 'Is', type: 1 },
                        { text: 'What', type: 2, options: ['true', 'false', 'yes', 'no'] },
                        { text: 'How', type: 3 },
                        { text: 'How Much', type: 4 },
                    ];
                }
            })
        });
    }

    getQuestions()

    $scope.submit = function () {
        var answer = {
            [playerId]: {
                taskId: taskId,
                answers: $scope.answers
            }
        }
        var databaseAnswers = firebase.database().ref("answers");
        databaseAnswers.set(answer).then(function (res) {
            res;
        });
    }

});