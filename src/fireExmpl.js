//Fire: this is how to enter specific player  
//ref will allways be to the key
var id = 1;
var database = firebase.database().ref("tem1/players").child(id);//.child("tasks");

var database = firebase.database().ref("team/players").child(id);

// //Fire: get elem by name
database.child("players").once("value").then(function (res) {
    res;
});

//Fire: this is how to set item with no weird firebase id 
database.set(task).then(function (res) {
    res;
});

//Questions 
       // $scope.questions = [
    //     { text: 'Is', type: 1 },
    //     { text: 'What', type: 2, options: ['true', 'false', 'yes', 'no'] },
    //     { text: 'How', type: 3 },
    //     { text: 'How Much', type: 4 },
    // ];