app.controller("mainCtrl", function ($scope, $firebaseObject, $firebaseArray) {

    var ref = firebase.database().ref().child("-KbtOdiIicnIsA4oGbMV");//.child("team").child("KbgME_4rFZvSQ8U6-mt");
    var firebaseObject = $firebaseObject(ref);

    $scope.questions = [
        {text: 'Is', type: 1},
        {text: 'What', type: 2, options: ['true','false','yes','no']},
        {text: 'How', type: 3},
        {text: 'How Much', type: 4},
    ];
    $scope.questionsTypesEnum = {
        yesNo: 1,
        selectOptions: 2,
        freeText: 3,
        range: 4
    };
    $scope.answers = {}

    firebaseObject.$loaded(
        function (data) {
            console.log(data["-KbtOdiIicnIsA4oGbMV"]);
           // var players = data["-KbtOdiIicnIsA4oGbMV"].player;
            firebaseObject
            //$scope.questions = data[0].player.task[0].questions[0];
            //$scope.$apply()
        },
        function (error) {
            console.error("Error:", error);
        }
    );

    $scope.add = addNewItem;
    function addNewItem() {
        firebaseObject.$save({
            players: [{
                id: 1,
                tasks: [
                    {
                        title: 'practice',
                        questions: [{
                            text: '??',
                            type: 1
                        }]
                    }
                ]
            }]
        }).then(function (item) {
            item;
        });
    }

    $scope.submit = function () {
        //team.$add({})
        console.log($scope.answers)
    }

});