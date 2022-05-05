var firstName = ["Charlie", "Grindoor", "Prose", "Bubbles", "Peepers", "Goosie", "Goozey", "Tootsie", "Splash", "Devon", "Bubba", "Skyris", "Nipperz", "", "Birdy", "Bungee", "Poofy", "Jiggy", "Blonkberg", "Dankus", "Goslin", "Bumble", "Fizzy", "Buppy", "Cloud", "Gian", "Bubblisha", "Bubblegum", "Jazzy"]

var secondName = ["Sparrow", "Flush", "Rainbow", "Liza", "Pogo", "Swann", "Louise", "Loui Blue", "Baby", "Smiggy", "McCankus", "Gobblegobbleblubblubblub", "Flipperbooze", "Pufffin", "Boogaloo", "Snuggle", "Moonbeam", "Bubblesquack", "Bub", "Bug", "Samba", "Goose", "Moose", "Punk", "Glumpjacks", ""]



var element = ["Strawberry", "Enchanter", "Thunder", "Fire", "Scalesoose", "Scorpoosicle", "Capri-corny-bubble-corn-bubble", ""]


function generator() {
	document.getElementById("name-shows-button-vanishes").innerHTML = 'Your Bubblegoose name is <span class="boldName">' +  firstName[Math.floor(Math.random() * firstName.length)] + " " + secondName[Math.floor(Math.random() * secondName.length)] + " " + element[Math.floor(Math.random() * element.length)] + ", Thee Baller💎 </span>" + "<p>You're a baller now. Go get 'em!</p> <br>" ;;;
}

function getNewName() {
	document.getElementById("new-name").innerHTML = '<button onclick="generator()">make new name</button>'
}


let text = ' Show off your name on  <a href="https://twitter.com/share?ref_src=twsrc%5Etfw">Twitter</a>✨'
function ge() {

	document.getElementById("share-div").innerHTML = '' + text

	document.getElementById("new-name").innerHTML ='<p>Not quite feeling this one?</p>' + '<button onclick="generator()">GET NEW NAME</button>'

}