myApp.controller('carsListController', function carsListController($http) {
	$http.get('cars.json').then((response) => {
		this.cars = response.data;
	})
});
