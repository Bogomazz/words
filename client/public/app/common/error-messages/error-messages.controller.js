app.controller("ErrorMessagesController", function($scope) {
    $scope.messages = [{
        title: 'Error 1',
        description: 'Description example.'
    },{
        title: 'Error 2',
        description: 'Description example.'
    }];

    $scope.remove = (message) => {
        $scope.messages.splice($scope.messages.indexOf(message), 1);

    }


}).directive('errorMessages', function() {
    return {
        templateUrl: '/app/common/error-messages/error-messages.view.html'
    }
});