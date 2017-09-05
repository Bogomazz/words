app.controller("ErrorMessagesController", function($scope) {
    $scope.messages = [];

    $scope.remove = (message) => {
        $scope.messages.splice($scope.messages.indexOf(message), 1);

    };

    $scope.$on('error', function (event, errorData) {
        $scope.messages.push(errorData);
    })

}).directive('errorMessages', function() {
    return {
        templateUrl: '/app/common/error-messages/error-messages.view.html'
    }
});