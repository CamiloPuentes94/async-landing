const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCpHjRsNuiIfaJR1n_9I0EvQ&part=snippet%2Cid&order=date&maxResults=10"

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

