const fetchData = async ()=>{
	try {
		const response = await fetch ("https://swapi.dev/api/planets");
		const data = await response.json();
		const planetsList = document.querySelector(".planets-list");
		data.results.forEach((element, index) => {
			const li = document.createElement("li");

			li.textContent = `${element.name} - Diameter: ${element.diameter}, Climate: ${element.climate}, Gravity: ${element.gravity}, Terrain: ${element.terrain}, Population: ${element.population}`;

			const img = document.createElement("img");
			if(index === 0) {
				img.src = "assets/images/planets/tatooine.jpg";
			}if(index === 1){
				img.src = "assets/images/planets/alderaan.png";
			}if(index === 2){
				img.src = "assets/images/planets/yavin-iv.webp";
			}if(index === 3){
				img.src = "assets/images/planets/hoth.jpg";
			}if(index === 4){
				img.src = "assets/images/planets/dagobah.jpg";
			}if(index === 5){
				img.src = "assets/images/planets/bespin.webp";
			}if(index === 6){
				img.src = "assets/images/planets/endor.jpg";
			}if(index === 7){
				img.src = "assets/images/planets/naboo.webp";
			}if(index === 8){
				img.src = "assets/images/planets/coruscant.webp";
			}if(index === 9){
				img.src = "assets/images/planets/kamino.webp";
			}
			

			li.appendChild(img);
			planetsList.appendChild(li);
			console.log(element);

		
		});

	}catch(error) {

	}
};

fetchData();

