angular.module('myapp', []);
function jsonp_example($scope, $http) {
    $scope.doRequest = function() {
        var openD;
     var urlx = "http://api.openweathermap.org/data/2.5/box/city?callback=JSON_CALLBACK&bbox=12,32,15,37,10&cluster=yes";

        $http.jsonp(urlx)
            .success(function(data){
                $scope.openD = data.list;
            });
    };   
}
function wthrLookup($scope, $http) {
    $scope.lookup = function() {
     var cityD, err;
	 var cityName =  $scope.city;
     var urlx = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&callback=JSON_CALLBACK";
      console.log(urlx);
		if(cityName != null){
			$http.jsonp(urlx)
				.success(function(data){
					$scope.cityD = data;					
			})
			.error(function(){
				$scope.err = "No Data Found";
			});
		}else{
			$scope.err = "Please enter city name";
		}
    };   
}