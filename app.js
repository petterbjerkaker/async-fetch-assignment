const fetchData = async ()=>{
	try {
		const response = await fetch ("https://swapi.dev/api/people/");
		const data = await response.json();
		const charactersList = document.querySelector(".characters-list");
		data.results.forEach((element, index) => {
			const li = document.createElement("li");

			li.textContent = `${element.name} - Height: ${element.height} cm, Mass: ${element.mass} kg, Hair color: ${element.hair_color}, Skin color: ${element.skin_color}, Eye color: ${element.eye_color}, Birth year: ${element.birth_year}`;

			const img = document.createElement("img");
			if(index === 0) {
				img.src = "/assets/images/luke-skywalker.webp";
			}if(index === 1){
				img.src = "/assets/images/c-3po.webp";
			}if(index === 2){
				img.src = "/assets/images/r2-d2.webp";
			}if(index === 3){
				img.src = "/assets/images/darth-vader.webp";
			}if(index === 4){
				img.src = "/assets/images/leia-organa.webp";
			}if(index === 5){
				img.src = "/assets/images/owen-lars.webp";
			}if(index === 6){
				img.src = "/assets/images/beru-whitesun-lars.webp";
			}if(index === 7){
				img.src = "/assets/images/r5-d4.webp";
			}if(index === 8){
				img.src = "/assets/images/biggs-darklighter.webp";
			}if(index === 9){
				img.src = "/assets/images/obi-wan-kenobi.webp";
			}
			

			li.appendChild(img);
			charactersList.appendChild(li);
			console.log(element);

		});

	} catch (error) {
	}

};

fetchData();