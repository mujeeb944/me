
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
    // 39.399872
    // -8.224454
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,
        <div class="row row-pb-md">
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>HTML5</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>CSS3</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>jQuery</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>JavaScript</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>TypeScript</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>WordPress</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Wix</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Bootstrap</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Tailwind</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Angular</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>React</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>NextJs</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="90"><span><strong>NodeJs</strong>90%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>ExpressJs</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>.NET</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>MySql</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="70"><span><strong>MongoDB</strong>70%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Redux</strong>100%</span></div>
        </div>
    </div>
        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Brooklyn'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
    // 39.399872
    // -8.224454
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,
        <div class="row row-pb-md">
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>HTML5</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>CSS3</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>jQuery</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>JavaScript</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>TypeScript</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>WordPress</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Wix</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Bootstrap</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Tailwind</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Angular</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>React</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>NextJs</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="90"><span><strong>NodeJs</strong>90%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>ExpressJs</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>.NET</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>MySql</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="70"><span><strong>MongoDB</strong>70%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Redux</strong>100%</span></div>
        </div>
    </div>
        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Brooklyn'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
    // 39.399872
    // -8.224454
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,
        <div class="row row-pb-md">
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>HTML5</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>CSS3</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>jQuery</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>JavaScript</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>TypeScript</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>WordPress</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Wix</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Bootstrap</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Tailwind</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Angular</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>React</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>NextJs</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="90"><span><strong>NodeJs</strong>90%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>ExpressJs</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>.NET</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>MySql</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="70"><span><strong>MongoDB</strong>70%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Redux</strong>100%</span></div>
        </div>
    </div>
        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Brooklyn'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
    // 39.399872
    // -8.224454
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,
        <div class="row row-pb-md">
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>HTML5</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>CSS3</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>jQuery</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>JavaScript</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>TypeScript</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>WordPress</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Wix</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Bootstrap</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Tailwind</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Angular</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>React</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>NextJs</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="90"><span><strong>NodeJs</strong>90%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>ExpressJs</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>.NET</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>MySql</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="70"><span><strong>MongoDB</strong>70%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Redux</strong>100%</span></div>
        </div>
    </div>
        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Brooklyn'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
    // 39.399872
    // -8.224454
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,
        <div class="row row-pb-md">
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>HTML5</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>CSS3</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>jQuery</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>JavaScript</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>TypeScript</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>WordPress</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Wix</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Bootstrap</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Tailwind</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Angular</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>React</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>NextJs</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="90"><span><strong>NodeJs</strong>90%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>ExpressJs</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>.NET</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>MySql</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="70"><span><strong>MongoDB</strong>70%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Redux</strong>100%</span></div>
        </div>
    </div>
        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Brooklyn'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
    // 39.399872
    // -8.224454
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,
        <div class="row row-pb-md">
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>HTML5</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>CSS3</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>jQuery</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>JavaScript</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>TypeScript</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>WordPress</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Wix</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Bootstrap</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Tailwind</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Angular</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>React</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>NextJs</strong>100%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="90"><span><strong>NodeJs</strong>90%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>ExpressJs</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>.NET</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="80"><span><strong>MySql</strong>80%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="70"><span><strong>MongoDB</strong>70%</span></div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
            <div class="chart" data-percent="100"><span><strong>Redux</strong>100%</span></div>
        </div>
    </div>
        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Brooklyn'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);