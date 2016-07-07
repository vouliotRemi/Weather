angular.module('weather')

.constant('OpenWeatherConfig', {
   searchUrl: 'http://api.openweathermap.org/data/2.5/weather?q=',
   units: '&units=metric',
   appid: '&appid=74ac52ac093b393f6258f05f4e8bff10',
   imgUrl: 'http://openweathermap.org/img/w/' 
})