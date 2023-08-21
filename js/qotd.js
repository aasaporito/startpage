// QOTD
const fetchQotd = async () => {
	try {
		const response = await fetch('https://quotes.rest/qod?language=en')
		const qdata = await response.json()
		console.log(qdata.contents.quotes[0])
		displayQotd();
	}
	catch(error) {
		console.log(error)
	}

	
}

const displayQotd = qdata => {
	//data.contents.quotes[0].quote
	//data.contents.quotes[0].author
	document.getElementById('calcOut').innerHTML = qdata.contents.quotes[0].quote + "  -"+ qdata.contents.quotes[0].author;
	document.getElementById('calcDisplay').style.display = 'block';

}

//fetchQotd();