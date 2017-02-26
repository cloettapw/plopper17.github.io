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
	"twitter": "http://bit.ly/plopptwitter",
	"cloetta.pw": "http://cloetta.pw/"
}

var marquee = document.getElementsByClassName("js-marquee")[0];

for (var guy in guys)
{
	var node = document.createElement("a");
	var text = document.createTextNode(guy);

	node.appendChild(text);
	node.href = guys[guy];
	node.target = "_blank";
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
	node.target = "_blank";
	pre.appendChild(node);
	center.appendChild(pre);
}

var asciiTitle = document.getElementById("ascii");

var desired = "\
 ________  ___       ________  ________  ________   \n\
|\\   __  \\|\\  \\     |\\   __  \\|\\   __  \\|\\   __  \\  \n\
\\ \\  \\|\\  \\ \\  \\    \\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\  \\ \n\
 \\ \\   ____\\ \\  \\    \\ \\  \\\\\\  \\ \\   ____\\ \\   ____\\\n\
  \\ \\  \\___|\\ \\  \\____\\ \\  \\\\\\  \\ \\  \\___|\\ \\  \\___|\n\
   \\ \\__\\    \\ \\_______\\ \\_______\\ \\__\\    \\ \\__\\   \n\
    \\|__|     \\|_______|\\|_______|\\|__|     \\|__|   \
"

var iter = 0;
var completion = 0;

function timeout()
{
	setTimeout(function()
	{
		if (iter < desired.length - 1)
		{
			asciiTitle.innerHTML = desired.substring(0, iter);
			iter++;
		}
		completion = iter / desired.length;
		timeout();
	}, Math.pow(completion, 3) * 50)
}

timeout();
