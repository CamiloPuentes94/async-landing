const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCpHjRsNuiIfaJR1n_9I0EvQ&part=snippet%2Cid&order=date&maxResults=10"

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3ec56c03camsha7e640af20c13adp1e8843jsnd8ae2f35ef60',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
	const response = await fetch(urlApi, options);
	const data = await response.json();
	return data
}

// de esta forma se realiza una funcion que se llama automaticamente ella
//funcion que se autoinvoca
//cuando cargue el archivo se va a ejecutar
(async () => {
	try {
		const videos = await fetchData(API);
		// con map para que nos retorne un array con la estructura que se traen
		//crearemos un template en html para que itere por los elementos de la respuesta
        //view es esa porcion de html
        //usamos js para iterar 
        //en esta API , para acceder a los videos, se refiere a items, se hace un map para devolver un nuevo arreglo con el template por cada resultado
		let view = `
		
		${videos.items.map(video => `
		<div class="group relative">
			<div
				class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
				<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
			</div>
			<div class="mt-4 flex justify-between">
				<h3 class="text-sm text-gray-700">
					<span aria-hidden="true" class="absolute inset-0"></span>
					${video.snippet.title}
				</h3>
			</div>
	</div>
		`).slice(0,4).join('')}
		`;
		content.innerHTML = view;
	} catch (error) {
		console.log(error)
	}
})();  