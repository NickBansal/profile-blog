
$("#quote").on("click", function(){

	var col = randomColor();
	$("body").css("background", col);
	$("h1").css("color", col);
	$("h3").css("color", col);

	$("button").css("background", col);

	var i = Math.floor(Math.random() * quote.length)
	console.log(i);

	var j = quote[i].saying;
	var k = quote[i].name; 

	$("h1").text("\"" +j+ "\"");
	$("h3").html("<em>- " +k+ "</em");

	$("#box").on("click", "#twitter", function(){
		window.open("https://twitter.com/intent/tweet?text=" + "\"" +j+ "\" - " + k);
	});

})

function randomColor(){
	r = Math.floor(Math.random() * 256)
	g = Math.floor(Math.random() * 256)
	b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}




var quote = [  
{  
	saying: "It's easier to fool people... than to convince them they have been fooled.",
    name: "Mark Twain"
},
{  
    saying: "There are two ways to be fooled. One is to believe what isn't true; the other is to refuse to believe what is true.",
    name: "Soren Kierkegaard"
},
{  
    saying: "It is dangerous to let the public behind the scenes. They are easily disillusioned and then they are angry with you, for it was the illusion they loved.",
    name: "W. Somerset Maugham"
},
{  
    saying: "I believe that if life gives you lemons, you should make lemonade... And try to find somebody whose life has given them vodka, and have a party.",
    name: "Ron White"
},
{  
	saying: "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
    name: "John Keats"
},
{  
    saying: "But man is not made for defeat. A man can be destroyed but not defeated.",
    name: "Ernest Hemingway"
},
{  
    saying: "When you reach the end of your rope, tie a knot in it and hang on.",
    name: "Franklin D. Roosevelt"
},
{  
    saying: "There is nothing permanent except change.",
    name: "Heraclitus"
},
{  
	saying: "You cannot shake hands with a clenched fist.",
    name: "Indira Gandhi"
},
{  
    saying: "Let us sacrifice our today so that our children can have a better tomorrow.",
    name: "A. P. J. Abdul Kalam"
},
{  
    saying: "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.",
    name: "Amelia Earhart"
},
{  
    saying: "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
    name: "Henry James"
},
{  
	saying: "Learning never exhausts the mind.",
    name: "Leonardo da Vinci"
},
{  
    saying: "There is no charm equal to tenderness of heart.",
    name: "Jane Austen"
},
{  
    saying: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe"
},
{  
    saying: "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.",
    name: "Francis of Assisi"
},
]








