

function updatemap() {//using the fetch api 
    fetch('/data.json')
        .then(response => response.json())
        .then(rsp => {
            //console.log(rsp);
            rsp.data.forEach((e) => {
                //getting the latitude longitude and infected count
                var latitude = e.latitude;
                var longitude = e.longitude;
                var cases = e.sick;
                //Marking the latitude and longitude omn map
                if (cases > 1000) {
                    color = "#FF2D00";
                }
                else if (cases > 100 && cases < 1000) { color = "#CE4F33" }
                else { color = "#C38172" }
                const marker = new mapboxgl.Marker({
                    draggable: false,
                    color: `${color}`,

                })

                    .setLngLat([longitude, latitude])
                    .addTo(map);


            });
        })
}
updatemap();
setInterval(updatemap, 200000);



// function onDragEnd() {
//     const lngLat = marker.getLngLat();
//     coordinates.style.display = 'block';
//     coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
// }