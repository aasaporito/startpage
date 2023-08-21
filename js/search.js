
// Implements a simple search bar with custom bangs

function search(i) {
	var q = i.value;
	q = q.replace(/^[ ]/g,'') // Remove leading spaces
	if (i.checkValidity()) { // If query is an URL, go to it.
		window.location=q;
	} else if (q.substr(1, 1) == ' ') { // check if it's a bang (i.e. `y youtubequery` and `a query` are parsed here, but `query` is not)
		switch(q.substr(0, 1)){
			case 'y':
				q = q.substr(2);
				window.location=(
					'https://www.youtube.com/results?search_query=' +
					q.replace(' ', '%20')); // %20 is Space
			break;
			case 'w':
				q = q.substr(2);
				window.location=(
					'https://wikipedia.org/w/index.php?search=' +
					q.replace(' ', '%20'));
			break;
			case 'g':
				q = q.substr(2);
				window.location=(
					'https://github.com/search?q=' +
					q.replace(' ', '%20'));
			break;
			case 'i':
				q = q.substr(2);
				window.location=(
					'https://www.google.com/search?tbm=isch&q=' +
					q.replace(' ', '%20'));
			break;
			case 'a':
				q = q.substr(2);
				window.location=(
					'https://www.amazon.com/s/?field-keywords=' +
					q.replace(' ', '%20'));
			break;
			case 'c':
				q = q.substr(2);
				if (q.endsWith("..")){
					document.getElementById('calcDisplay').style.display = 'none';
					document.getElementById('q').value="";
					document.getElementById('q').focus();
				} else if(q.endsWith(".")){
					document.getElementById('q').value="c "; //add space??
					//document.getElementById('q').innerHTML = '<input type="url" id="q" spellcheck="false" placeholder=" " autofocus="true" autocomplete="off" value="c ">';
				}else {
					document.getElementById('calcOut').innerHTML = eval(q);
					document.getElementById('calcDisplay').style.display = 'block';
				}

			break;
			case "l":
				q = q.substr(2);
				window.location=(
					'https://ctw-cc.primo.exlibrisgroup.com/discovery/search?query=any,contains,' + 
					q.replace(' ', '%20') +
					'&tab=SearchEverything&search_scope=All_&vid=01CTW_CC:CTWCC&offset=0');
			break;

			default:
				window.location=('https://www.google.com/search?q=' +
					q.replace(' ', '%20'));
		}
	} else { // this is were `normal q` will be parsed
		window.location=('https://www.google.com/search?q=' +
			q.replace(' ', '%20'));
	}
}

i = document.getElementById('q');
// Pressing space (in Insert mode) focuses search bar
document.addEventListener('keydown', event => {
	if (event.code == 'Space') {
		i.focus();
	}
});
// Enter accepts the search
if (!!i) {
	i.addEventListener('keydown', event => {
		if (event.code == 'Enter') {
			i.type = 'url';
			search(i);
		}
	});
}
