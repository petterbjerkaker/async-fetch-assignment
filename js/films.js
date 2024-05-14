const fetchData = async ()=>{
	try {
		const response = await fetch ("https://swapi.dev/api/films");
		const data = await response.json();
		const filmsList = document.querySelector(".films-list");
		data.results.forEach((element, index) => {
			const li = document.createElement("li");

			li.textContent = `${element.title} - Episode: ${element.episode_id}, Opening credits: ${element.opening_crawl}, Director: ${element.director}, Producer: ${element.producer}, Release date: ${element.release_date}`;

			const img = document.createElement("img");
			if(index === 0) {
				img.src = "assets/images/films/a-new-hope.jpg";
			}if(index === 1){
				img.src = "assets/images/films/empire-strikes-back.jpg";
			}if(index === 2){
				img.src = "assets/images/films/return-of-the-jedi.jpg";
			}if(index === 3){
				img.src = "assets/images/films/the-phantom-menace.jpg";
			}if(index === 4){
				img.src = "assets/images/films/attack-of-the-clones.jpg";
			}if(index === 5){
				img.src = "assets/images/films/revenge-of-the-sith.jpg";
			}
			

			li.appendChild(img);
			filmsList.appendChild(li);
			console.log(element);

		
		});

	}catch(error) {

	}
};

fetchData();

