const fetchData = async ()=>{
	try {
		const response = await fetch ("https://swapi.dev/api/species");
		const data = await response.json();
		const speciesList = document.querySelector(".species-list");
		data.results.forEach((element, index) => {
			const li = document.createElement("li");

			li.textContent = `${element.name} - Classification: ${element.classification}, Designation: ${element.designation}, Average height: ${element.average_height}, Skin colors: ${element.skin_colors}, Average lifespan: ${element.average_lifespan}, Language: ${element.language}`;

			const img = document.createElement("img");
			if(index === 0) {
				img.src = "assets/images/species/human.webp";
			}if(index === 1){
				img.src = "assets/images/species/droid.webp";
			}if(index === 2){
				img.src = "assets/images/species/wookie.webp";
			}if(index === 3){
				img.src = "assets/images/species/rodian.webp";
			}if(index === 4){
				img.src = "assets/images/species/hutt.webp";
			}if(index === 5){
				img.src = "assets/images/species/yoda.webp";
			}if(index === 6){
				img.src = "assets/images/species/trandoshan.webp";
			}if(index === 7){
				img.src = "assets/images/species/mon_calamari.webp";
			}if(index === 8){
				img.src = "assets/images/species/ewok.webp";
			}if(index === 9){
				img.src = "assets/images/species/sullustan.webp";
			}
			

			li.appendChild(img);
			speciesList.appendChild(li);
			console.log(element);

		
		});

	}catch(error) {

	}
};

fetchData();
