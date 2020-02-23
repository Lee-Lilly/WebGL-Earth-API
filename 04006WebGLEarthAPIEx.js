function initialize() {
        earth = new WE.map('earth_div');
        earth.setView([46.8011, 8.2266], 3);
        WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          attribution: '© OpenStreetMap contributors'
        }).addTo(earth);

        // Start a simple rotation animation
        var before = null;
        requestAnimationFrame(function animate(now) {
            var c = earth.getPosition();
            var elapsed = before? now - before: 0;
            before = now;
            earth.setCenter([c[0], c[1] + 0.1*(elapsed/269)]);
            requestAnimationFrame(animate);
        });
}

function goHome(){
	earth.setView([60.69262965224084,20.182652100210547], 9); 
}
function showCoords(){
	alert(earth.getCenter());
}