// Map initialization
var initMap = (city) => {

	// Init Locations
	let coords = {
		LA: {lat: 34.0201613, lng: -118.6919205},
		NY: {lat: 40.6971494, lng: -74.2598655},
		BO: {lat: 42.3142647, lng: -71.1103678},
		DE: {lat: 42.3526257, lng: -83.2392888}
	}

	// Set current city
	city = (city) ? coords[city] : coords.NY

	// Set map container
	let mapContainer = document.getElementById('myMap');

	// Set map options
	let opts = {
	    center: city,
	    zoom: 12,
	    gestureHandling: 'cooperative'
	}

	// Init map
	let myMap = new google.maps.Map(mapContainer, opts);
}



// Get siblings function
var getSiblings = (elem) => {

	var siblings = [];
	var sibling = elem.parentNode.firstChild;

	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}
	return siblings;
}

// Set triggers
window.onload = () => {
	let mapTrigger = document.querySelectorAll('.list_item');

	mapTrigger.forEach((item, index) => {
		item.addEventListener('click', e => {

			let itemSiblings = getSiblings(item);

			itemSiblings.forEach((sib) => {
				sib.classList.remove('active');
			});

			item.classList.add('active');
			let cityName = item.getAttribute('data-map');

			initMap(cityName);
		});
	})
}
