angular.module('weather')

.controller('WeatherCtrl', function($scope, $http, OpenWeatherConfig) {
    console.log('test');
    $scope.search = '';
    $scope.state = false;    
    $scope.weatherData = {
    icon: '',
    main: '',
    city: '',
    description: '',
    temp: ''
    };

        $scope.loadWeather = function(search, $event) {
        console.log(search);
        if ($event.keyCode === 13) {
            var url = OpenWeatherConfig.searchUrl + search + OpenWeatherConfig.units + OpenWeatherConfig.appid;
            $http.get(url).success(function(data) {
                $scope.weatherData.icon = OpenWeatherConfig.imgUrl + data.weather[0].icon + '.png';
                $scope.weatherData.main = data.weather[0].main;
                $scope.weatherData.city = data.name;
                $scope.weatherData.description = data.weather[0].description;
                $scope.weatherData.temp = data.main.temp;
                $scope.state = true;
            });
        }
    };
});