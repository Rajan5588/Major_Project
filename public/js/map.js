

console.log(mapToken,"sdvb ") 
	mapboxgl.accessToken = mapToken; 
    const map = new mapboxgl.Map({
        container: 'map', // container ID
         style:"mapbox://styles/mapbox/streets-v12",    
        center:Listings.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 4 // starting zoom
    });


    

    const marker= new mapboxgl.Marker({color:"red"})
    .setLngLat(Listings.geometry.coordinates)//Listing.geoetry.coordinates
    .setPopup(new mapboxgl.Popup({offset:25}).setHTML(`<h5 >${Listings.location}</h5><p>Exact Location will be provided after booking!</p>`))
    .addTo(map);
