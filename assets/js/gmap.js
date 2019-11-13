// Map initialization
var initMap = (city) => {

    // Init Locations
    let coords = {
        LA: { lat: 34.0201613, lng: -118.6919205 },
        NY: { lat: 40.6971494, lng: -74.2598655 },
        BO: { lat: 42.3142647, lng: -71.1103678 },
        DE: { lat: 42.3526257, lng: -83.2392888 }
    }

    // Set current city
    city = (city) ? coords[city] : coords.NY

    // Set map container
    let mapContainer = document.getElementById('myMap');

    // Set map options
    let opts = {
        center: city,
        zoom: 11,
        gestureHandling: 'cooperative',
        disableDefaultUI: true,
        styles: [{
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "landscape",
                "stylers": [{
                        "color": "#D6FCDA"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "stylers": [{
                    "color": "#E2FFE6"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [{
                    "color": "##009CD6"
                }]
            }
        ]
    }

    // Init map
    let myMap = new google.maps.Map(mapContainer, opts);

    // Set marker image
    let image = '/assets/img/marker.svg';

    // Set marker
    let myMarker = new google.maps.Marker({
        position: opts.center,
        map: myMap,
        icon: image

    });
}

// Set triggers
window.onload = () => {
    document.querySelectorAll('.list_item').forEach((item, index) => {
        item.addEventListener('click', e => {
            changeActiveState(item);
            initMap(item.getAttribute('data-map'));
        });
    })
}