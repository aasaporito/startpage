const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

const fetchData = async () => {
	try {
		//console.log(`${url}${api_key}`)
		const response = await fetch(`${url}${api_key}`)
		const data = await response.json()
		//console.log('NASA Apod Data: ', data)
		displayData(data)
	}
	catch(error) {
		console.log(error)
	}
}

const displayData = data => {
	document.getElementById('picture').src = data.hdurl
	document.getElementById('explanation').textContent = data.title.toLowerCase()
}


fetchData()

