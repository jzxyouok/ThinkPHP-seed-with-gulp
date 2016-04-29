var $ = function (id) {
	console.log(id);
	return document.getElementById(id);
};

$("app").insertHTML("<p>Hello world</p>");