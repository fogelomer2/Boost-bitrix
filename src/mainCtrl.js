app.controller("mainCtrl", function ($scope, $firebaseObject, $firebaseArray) {


    // var ref = firebase.database().ref();
    // // download the data into a local object
    // $scope.data = $firebaseObject(ref);


    var ref = firebase.database().ref().child("team");
    var team = $firebaseArray(ref);

    $scope.itemList = [];

    team.$loaded(
        function (data) {
            console.log(data.player);
            $scope.itemList = data[0].player.task[0].questions[0];
            $scope.$apply()
        },
        function (error) {
            console.error("Error:", error);
        }
    );

    function addNewItem() {
        $scope.team.$add({
            player: {
                id: 1,
                task: [
                    {
                        title: 'practice',
                        questions: [{
                            text: '??',
                            type: 1
                        }]
                    }
                ]
            }
        });
    }

});