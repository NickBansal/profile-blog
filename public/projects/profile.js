var tabcontent = document.getElementsByClassName("tabcontent"), 
	tablinks = document.getElementsByClassName("tablinks");

document.getElementById("London").style.display = "block";


function openCity(evt, cityName) {
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

$("a").on("click", ".fa-twitter", function(){
		window.open("https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor");
	});

$("button.contact").click(function() {
  $("#Paris ul li").delay(500).each(function(i) {
    $(this).delay(100 * i).queue(function() {
      $(this).addClass("show");
    })
  })
});