
$('#carousellogo').carousel({
    interval: 2000
})


$('.video').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube: {
                index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                id: 'v=', // String that splits URL in a two parts, second part should be %id%
                // Or null - full URL will be returned
                // Or a function that should return %id%, for example:
                // id: function(url) { return 'parsed id'; }

                src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
            },
        }
    }
});

$(".logo").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$(".wing").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});



$(window).on('load', function () {
    $('#main_slider').nivoSlider({
        effect: 'boxRandom,fold,slideInRight,slideInLeft,sliceUp',                 // Specify sets like: 'fold,fade,sliceDown' 
        slices: 15,                       // For slice animations 
        boxCols: 8,                       // For box animations 
        boxRows: 4,                       // For box animations 
        animSpeed: 500,                   // Slide transition speed 
        pauseTime: 3000,                  // How long each slide will show 
        startSlide: 0,                    // Set starting Slide (0 index) 
        directionNav: true,               // Next & Prev navigation 
        controlNav: true,                 // 1,2,3... navigation 
        controlNavThumbs: false,          // Use thumbnails for Control Nav 
        pauseOnHover: true,               // Stop animation while hovering 
        manualAdvance: false,             // Force manual transitions 
        prevText: 'Prev',                 // Prev directionNav text 
        nextText: 'Next',                 // Next directionNav text 
        randomStart: false,
    });
});


/**
 * Homepage Google Map
 */
function initMap() {

    var iconBase ='assets/images/icons/';
    
    var icons = {
        regional_office: {
            icon: iconBase + 'circle.png'
        },
        territory_office: {
            icon: iconBase + 'square.png'
        },
        central_warhouse: {
            icon: iconBase + 'star.png'
        },
        parts_center: {
            icon: iconBase + 'rectangle.png'
        },
        zonal_office: {
            icon: iconBase + 'plus.png'
        },
        territory_officer: {
            icon: iconBase + 'manager.png'
        },
        default:{
            icon: iconBase + 'default.png'
        }
    };
    
    
    
    var locations = [
      ['Panchagarh', 26.3308627, 88.5388182, 1, 'default'],
      ['Thakurgaon', 26.0270135, 88.44846, 1, 'default'],
      ['Nilphamari', 25.939456, 88.8139908, 1, 'default'],
      ['Kurigram', 25.8108423, 89.6293184, 1, 'default'],
      ['Rangpur', 25.7498217, 89.1920052, 1, 'default'],
      ['Gaibandha', 25.3307216, 89.5309674, 1, 'default'],
      ['Nawabganj', 23.653348, 90.1362346, 1, 'default'],
      ['Naogaon', 24.8059711, 88.9021388, 1, 'default'],
      ['Joypurhat', 25.1024494, 89.0043424, 1, 'default'],
      ['Sherpur', 25.0283002, 89.9774258, 1, 'default'],
      ['Netrokona', 24.8819135, 90.7178841, 1, 'default'],
      ['Sunamganj', 25.069894, 91.386423, 1, 'default'],
      ['Natore', 24.4123369, 88.9616862, 1, 'default'],
      ['Pabna', 24.012984, 89.2149489, 1, 'default'],
      ['Gazipur', 23.9946684, 90.400157, 1, 'default'],
      ['Narsingdi', 23.9194797, 90.6997346, 1, 'default'],
      ['Habiganj', 24.3783847, 91.3809721, 1, 'default'],
      ['Brahmanbaria', 23.9807356, 91.041724, 1, 'default'],
      ['Dhaka', 23.7805733, 90.279238, 1, 'default'],
      ['Meherpur', 23.7735613, 88.6098324, 1, 'default'],
      ['Kushtia', 23.8971464, 89.086256, 1, 'default'],
      ['Jhenaidah', 23.5511545, 89.1340534, 1, 'default'],
      ['Magura', 23.4881232, 89.4117164, 1, 'default'],
      ['Faridpur', 23.6013295, 89.823687, 1, 'default'],
      ['Manikganj', 23.8655346, 89.9867312, 1, 'default'],
      ['Narayanganj', 23.616495, 90.4697667, 1, 'default'],
      ['Munshiganj', 23.5423869, 90.5098985, 1, 'default'],
      ['Chandpur', 23.2259721, 90.6432363, 1, 'default'],
      ['Cumilla', 23.4530549, 91.1482908, 1, 'default'],
      ['Narail', 23.1712169, 89.4953056, 1, 'default'],
      ['Gopalganj', 23.0050462, 89.7914122, 1, 'default'],
      ['Madaripur', 23.168331, 90.1582281, 1, 'default'],
      ['Khulna', 22.8452866, 89.4624608, 1, 'default'],
      ['Patuakhali', 22.350828, 90.3169726, 1, 'default'],
      ['Bhola', 22.6854688, 90.6351479, 1, 'default'],
      ['Lakshmipur', 22.9423227, 90.8005421, 1, 'default'],
      ['Feni', 23.0124139, 91.3813209, 1, 'default'],
      ['Khagrachhari', 23.1075845, 91.9715933, 1, 'default'],
      ['Chattogram', 22.3258742, 91.6797799, 1, 'default'],
      ['Coxs Bazar', 21.4508836, 91.9328611, 1, 'default'],
      ['Dinajpur', 25.6237799, 88.6117312, 1, 'default'],
      ['Lalmonirhat', 25.9216304, 89.4321976, 1, 'default'],
      ['Bogra', 24.8413651, 89.3001658, 1, 'default'],
      ['Sylhet', 24.8997595, 91.8259622, 1, 'default'],
      ['Jamalpur', 24.9268766, 89.9310349, 1, 'default'],
      ['Rajshahi', 24.38015, 88.5709963, 1, 'default'],
      ['Mymensingh', 24.7489219, 90.3614763, 1, 'default'],
      ['Kishoreganj', 24.4340996, 90.7741069, 1, 'default'],
      ['Tangail', 24.2476913, 89.8820493, 1, 'default'],
      ['Chuadanga', 23.6506955, 88.8170699, 1, 'default'],
      ['Jessore', 23.165118, 89.1585298, 1, 'default'],
      ['Barisal', 22.6953793, 90.3187846, 1, 'default'],
      ['Noakhali', 22.825137, 91.0821883, 1, 'default'],
      ['Chittagong', 22.3258742, 91.6797799, 1, 'default'],
    ];
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(23.7805733, 90.279238),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    
    var infowindow = new google.maps.InfoWindow();
    
    var marker, i;
    
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: icons[locations[i][4]].icon,
      });
    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}

/**
 * Regional Offices
 */

function initROMap() {

    var iconBase ='../assets/images/icons/';
    
    var icons = {
        regional_office: {
            icon: iconBase + 'circle.png'
        },
        territory_office: {
            icon: iconBase + 'square.png'
        },
        central_warhouse: {
            icon: iconBase + 'star.png'
        },
        parts_center: {
            icon: iconBase + 'rectangle.png'
        },
        zonal_office: {
            icon: iconBase + 'plus.png'
        },
        territory_officer: {
            icon: iconBase + 'manager.png'
        },
        default:{
            icon: iconBase + 'default.png'
        }
    };
    
    
    
    var locations = [
      ['Thakurgaon', 26.0270135, 88.44846, 1, 'regional_office'],
      ['Dinajpur', 25.6237799, 88.6117312, 1, 'regional_office'],
      ['Lalmonirhat', 25.9216304, 89.4321976, 1, 'regional_office'],
      ['Bogra', 24.8413651, 89.3001658, 1, 'regional_office'],
      ['Sylhet', 24.8997595, 91.8259622, 1, 'regional_office'],
      ['Jamalpur', 24.9268766, 89.9310349, 1, 'regional_office'],
      ['Rajshahi', 24.38015, 88.5709963, 1, 'regional_office'],
      ['Mymensingh', 24.7489219, 90.3614763, 1, 'regional_office'],
      ['Kishoreganj', 24.4340996, 90.7741069, 1, 'regional_office'],
      ['Tangail', 24.2476913, 89.8820493, 1, 'regional_office'],
      ['Chuadanga', 23.6506955, 88.8170699, 1, 'regional_office'],
      ['Jessore', 23.165118, 89.1585298, 1, 'regional_office'],
      ['Barisal', 22.6953793, 90.3187846, 1, 'regional_office'],
      ['Noakhali', 22.825137, 91.0821883, 1, 'regional_office'],
      ['Chittagong', 22.3258742, 91.6797799, 1, 'regional_office'],
    ];
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(23.7805733, 90.279238),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    
    var infowindow = new google.maps.InfoWindow();
    
    var marker, i;
    
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: icons[locations[i][4]].icon,
      });
    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}

/**
 * Territory Offices
 */

function initTOMap() {

    var iconBase ='../assets/images/icons/';
    
    var icons = {
        regional_office: {
            icon: iconBase + 'circle.png'
        },
        territory_office: {
            icon: iconBase + 'square.png'
        },
        central_warhouse: {
            icon: iconBase + 'star.png'
        },
        parts_center: {
            icon: iconBase + 'rectangle.png'
        },
        zonal_office: {
            icon: iconBase + 'plus.png'
        },
        territory_officer: {
            icon: iconBase + 'manager.png'
        },
        default:{
            icon: iconBase + 'default.png'
        }
    };
    
    
    
    var locations = [
      ['Naogaon', 24.8059711, 88.9021388, 1, 'territory_office'],
      ['Sylhet', 24.8997595, 91.8259622, 1, 'territory_office'],
      ['Habiganj', 24.3783847, 91.3809721, 1, 'territory_office'],
      ['Bhola', 22.6854688, 90.6351479, 1, 'territory_office'],
    ];
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(23.7805733, 90.279238),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    
    var infowindow = new google.maps.InfoWindow();
    
    var marker, i;
    
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: icons[locations[i][4]].icon,
      });
    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}

/**
 * Central Warehouses
 */

function initCWMap() {

    var iconBase ='../assets/images/icons/';
    
    var icons = {
        regional_office: {
            icon: iconBase + 'circle.png'
        },
        territory_office: {
            icon: iconBase + 'square.png'
        },
        central_warhouse: {
            icon: iconBase + 'star.png'
        },
        parts_center: {
            icon: iconBase + 'rectangle.png'
        },
        zonal_office: {
            icon: iconBase + 'plus.png'
        },
        territory_officer: {
            icon: iconBase + 'manager.png'
        },
        default:{
            icon: iconBase + 'default.png'
        }
    };
    
    
    
    var locations = [
        ['Dhaka', 23.7805733, 90.279238, 1, 'central_warhouse'],
        ['Narayanganj', 23.616495, 90.4697667, 1, 'central_warhouse'],
    ];
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(23.7805733, 90.279238),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    
    var infowindow = new google.maps.InfoWindow();
    
    var marker, i;
    
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: icons[locations[i][4]].icon,
      });
    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}

/**
 * Parts Cetre
 */

function initPCMap() {

    var iconBase ='../assets/images/icons/';
    
    var icons = {
        regional_office: {
            icon: iconBase + 'circle.png'
        },
        territory_office: {
            icon: iconBase + 'square.png'
        },
        central_warhouse: {
            icon: iconBase + 'star.png'
        },
        parts_center: {
            icon: iconBase + 'rectangle.png'
        },
        zonal_office: {
            icon: iconBase + 'plus.png'
        },
        territory_officer: {
            icon: iconBase + 'manager.png'
        },
        default:{
            icon: iconBase + 'default.png'
        }
    };
    
    
    
    var locations = [
        ['Dinajpur', 25.6237799, 88.6117312, 1, 'parts_center'],
        ['Rangpur', 25.7498217, 89.1920052, 1, 'parts_center'],
        ['Bogra', 24.8413651, 89.3001658, 1, 'parts_center'],
        ['Sylhet', 24.8997595, 91.8259622, 1, 'parts_center'],
        ['Mymensingh', 24.7489219, 90.3614763, 1, 'parts_center'],
        ['Dhaka', 23.7805733, 90.279238, 1, 'parts_center'],
        ['Faridpur', 23.6013295, 89.823687, 1, 'parts_center'],
        ['Cumilla', 23.4530549, 91.1482908, 1, 'parts_center'],
        ['Jessore', 23.165118, 89.1585298, 1, 'parts_center'],
        ['Noakhali', 22.825137, 91.0821883, 1, 'parts_center'],
    ];
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(23.7805733, 90.279238),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    
    var infowindow = new google.maps.InfoWindow();
    
    var marker, i;
    
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: icons[locations[i][4]].icon,
      });
    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}

/**
 * Zonal Offices
 */

function initZOMap() {

    var iconBase ='../assets/images/icons/';
    
    var icons = {
        regional_office: {
            icon: iconBase + 'circle.png'
        },
        territory_office: {
            icon: iconBase + 'square.png'
        },
        central_warhouse: {
            icon: iconBase + 'star.png'
        },
        parts_center: {
            icon: iconBase + 'rectangle.png'
        },
        zonal_office: {
            icon: iconBase + 'plus.png'
        },
        territory_officer: {
            icon: iconBase + 'manager.png'
        },
        default:{
            icon: iconBase + 'default.png'
        }
    };
    
    
    
    var locations = [
        ['Rangpur', 25.7498217, 89.1920052, 1, 'zonal_office'],
        ['Natore', 24.4123369, 88.9616862, 1, 'zonal_office'],
        ['Gazipur', 23.9946684, 90.400157, 1, 'zonal_office'],
        ['Brahmanbaria', 23.9807356, 91.041724, 1, 'zonal_office'],
        ['Cumilla', 23.4530549, 91.1482908, 1, 'zonal_office'],
        ['Faridpur', 23.6013295, 89.823687, 1, 'zonal_office'],
    ];
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(23.7805733, 90.279238),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    
    var infowindow = new google.maps.InfoWindow();
    
    var marker, i;
    
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: icons[locations[i][4]].icon,
      });
    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}

/**
 * Territory Officer
 */
function initTORMap() {

    var iconBase ='../assets/images/icons/';
    
    var icons = {
        regional_office: {
            icon: iconBase + 'circle.png'
        },
        territory_office: {
            icon: iconBase + 'square.png'
        },
        central_warhouse: {
            icon: iconBase + 'star.png'
        },
        parts_center: {
            icon: iconBase + 'rectangle.png'
        },
        zonal_office: {
            icon: iconBase + 'plus.png'
        },
        territory_officer: {
            icon: iconBase + 'manager.png'
        },
        default:{
            icon: iconBase + 'default.png'
        }
    };
    
    
    
    var locations = [
      ['Panchagarh', 26.3308627, 88.5388182, 1, 'territory_officer'],
      ['Nilphamari', 25.939456, 88.8139908, 1, 'territory_officer'],
      ['Kurigram', 25.8108423, 89.6293184, 1, 'territory_officer'],
      ['Gaibandha', 25.3307216, 89.5309674, 1, 'territory_officer'],
      ['Nawabganj', 23.653348, 90.1362346, 1, 'territory_officer'],
      ['Joypurhat', 25.1024494, 89.0043424, 1, 'territory_officer'],
      ['Sherpur', 25.0283002, 89.9774258, 1, 'territory_officer'],
      ['Netrokona', 24.8819135, 90.7178841, 1, 'territory_officer'],
      ['Sunamganj', 25.069894, 91.386423, 1, 'territory_officer'],
      ['Pabna', 24.012984, 89.2149489, 1, 'territory_officer'],
      ['Narsingdi', 23.9194797, 90.6997346, 1, 'territory_officer'],
      ['Meherpur', 23.7735613, 88.6098324, 1, 'territory_officer'],
      ['Kushtia', 23.8971464, 89.086256, 1, 'territory_officer'],
      ['Jhenaidah', 23.5511545, 89.1340534, 1, 'territory_officer'],
      ['Magura', 23.4881232, 89.4117164, 1, 'territory_officer'],
      ['Faridpur', 23.6013295, 89.823687, 1, 'territory_officer'],
      ['Manikganj', 23.8655346, 89.9867312, 1, 'territory_officer'],
      ['Munshiganj', 23.5423869, 90.5098985, 1, 'territory_officer'],
      ['Chandpur', 23.2259721, 90.6432363, 1, 'territory_officer'],
      ['Narail', 23.1712169, 89.4953056, 1, 'territory_officer'],
      ['Gopalganj', 23.0050462, 89.7914122, 1, 'territory_officer'],
      ['Madaripur', 23.168331, 90.1582281, 1, 'territory_officer'],
      ['Khulna', 22.8452866, 89.4624608, 1, 'territory_officer'],
      ['Patuakhali', 22.350828, 90.3169726, 1, 'territory_officer'],
      ['Bhola', 22.6854688, 90.6351479, 1, 'territory_officer'],
      ['Lakshmipur', 22.9423227, 90.8005421, 1, 'territory_officer'],
      ['Feni', 23.0124139, 91.3813209, 1, 'territory_officer'],
      ['Khagrachhari', 23.1075845, 91.9715933, 1, 'territory_officer'],
      ['Coxs Bazar', 21.4508836, 91.9328611, 1, 'territory_officer'],
      ['Chuadanga', 23.6506955, 88.8170699, 1, 'territory_officer'],
    ];
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(23.7805733, 90.279238),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    
    var infowindow = new google.maps.InfoWindow();
    
    var marker, i;
    
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: icons[locations[i][4]].icon,
      });
    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}