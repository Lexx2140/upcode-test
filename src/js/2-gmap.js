let initInfoWindow = (info) => {

    document.querySelector('#infoCity').innerHTML = info.city;
    document.querySelector('#infoAddress').innerHTML = info.address;

    let infoSchedule = document.querySelector('#infoSchedule');
    let infoPhones = document.querySelector('#infoPhones');
    let infoEmails = document.querySelector('#infoEmails');

    infoSchedule.innerHTML = infoPhones.innerHTML = infoEmails.innerHTML = '';

    for (key of Object.keys(info.schedule)) {
        infoSchedule.innerHTML += '<span class="black">' + key + '</span> ' + info.schedule[key] + '<br>';
    }

    for (tel of info.phones) {
        infoPhones.innerHTML += '<a href="tel:' + tel.replace(/\D/g, '') + '" title="Call Us">' + tel + '</a><br>';
    };

    for (email of info.emails) {
        infoEmails.innerHTML += '<a href="mailto:' + email + '" title="Write to Us">' + email + '</a><br>';
    };
}

// Map initialization
var initMap = (shortcut) => {

    // Init Locations
    let info = {
        LA: {
            city: 'Los Angeles, USA',
            address: '2005 Stokes Isle Apt. 896, LA 10010',
            schedule: { 'Tue - Sat:': '10:00-18:00', 'Sun:': '11:00-15:00' },
            phones: ['(0043) 568 456 902', '(0043) 568 456 902'],
            emails: ['hello1@pad.architecture', 'support1@pad.architecture'],
            coords: { lat: 34.0201613, lng: -118.6919205 }
        },

        NY: {
            city: 'New York, USA',
            address: '2005 Stokes Isle Apt. 896, New York 10010',
            schedule: { 'Mon - Sat:': '11:00-19:00', 'Sun:': '11:00-16:00' },
            phones: ['(0043) 568 456 902', '(0043) 568 456 902'],
            emails: ['hello@pad.architecture', 'support@pad.architecture'],
            coords: { lat: 40.6971494, lng: -74.2598655 }
        },

        BO: {
            city: 'Boston, USA',
            address: '2005 Stokes Isle Apt. 896, Boston 10010',
            schedule: { 'Wed - Sat:': '12:00-20:00', 'Sun:': '11:00-15:00' },
            phones: ['(0043) 568 456 902', '(0043) 568 456 902'],
            emails: ['hello2@pad.architecture', 'support2@pad.architecture'],
            coords: { lat: 42.3142647, lng: -71.1103678 }
        },

        DE: {
            city: 'Detroit, USA',
            address: '2005 Stokes Isle Apt. 896, Detroit 10010',
            schedule: { 'Mon - Sat:': '12:00-20:00', 'Sun:': '11:00-15:00' },
            phones: ['(0043) 568 456 902', '(0043) 568 456 902'],
            emails: ['hello3@pad.architecture', 'support3@pad.architecture'],
            coords: { lat: 42.3526257, lng: -83.2392888 }
        }
    }

    // Set current city
    let city = (shortcut) ? info[shortcut] : info.NY

    // Set map container
    let mapContainer = document.getElementById('myMap');

    // Set map options
    let opts = {
        center: city.coords,
        zoom: 12,
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

    initInfoWindow(city);
}



// Set map triggers
window.onload = () => {
    document.querySelectorAll('.list_item').forEach((item, index) => {
        item.addEventListener('click', e => {
            changeActiveState(item);
            initMap(item.getAttribute('data-map'));
        });
    })
}