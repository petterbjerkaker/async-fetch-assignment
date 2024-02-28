const fetchData = async ()=>{
	try {
		const response = await fetch ("https://swapi.dev/api/people/")
		const data = await response.json();
		data.results.forEach(element => {
			console.log(element);

		});

	} catch (error) {
	}

};

fetchData();