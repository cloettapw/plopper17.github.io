var guys = {
	"nvll": "http://steamcommunity.com/profiles/76561198026177756",
	"ode": "http://steamcommunity.com/profiles/76561198298804931",
	"kazor": "http://steamcommunity.com/profiles/76561197965922455",
	"viking": "http://steamcommunity.com/profiles/76561198327711405",
	"shinez": "http://steamcommunity.com/profiles/76561198038210705",
	"zyklon": "http://steamcommunity.com/profiles/76561198112026244"
}

var links = {
	"steam": "http://bit.ly/ploppsteam",
	"youtube": "http://bit.ly/ploppyoutube",
	"twitter": "http://bit.ly/plopptwitter"
}

var marquee = document.getElementsByClassName("js-marquee")[0];

for (var guy in guys)
{
	var node = document.createElement("a");
	var text = document.createTextNode(guy);
	
	node.appendChild(text);
	node.href = guys[guy];
	marquee.appendChild(node);

	var keys = Object.keys(guys);
	if (guy != keys[keys.length - 1])
		marquee.innerHTML += ' - ';
}

var center = document.getElementById("center");

for (var link in links)
{
	var pre = document.createElement("pre");
	var node = document.createElement("a");
	var text = document.createTextNode(link);

	node.appendChild(text);
	node.href = links[link];
	pre.appendChild(node);
	center.appendChild(pre);
}
