<script src="//api.bitrix24.com/api/v1/"></script>


$scope.init = BX24.init(function(){
   console.log('Bitrix agent is running')
});


$scope.get_users = BX24.callMethod('user.get', {sort:'ID',order:'ASC'}, function(result) {
    if (result.error())
    {
        alert('Request error: ' + result.error());
    }
    else
    {
        console.log(result.data());
        if (result.more())
            result.next();
    }
});


$scope.get_task_data = BX24.callMethod(
    'task.item.getdata',
    [0],
    function(result){
        console.info(result.data());
        console.log(result);
    }
);
