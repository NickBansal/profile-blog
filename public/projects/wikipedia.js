$(document).ready(function(){

	
	$("#random").on("click", function(){
		window.open("https://en.wikipedia.org/wiki/Special:Random")
	})

	$("input").on("keypress", function(event){
		
		var search = $("input").val();

		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +search+ "&format=json&callback=?";

		if (event.which === 13) {
			$(this).val("");

			$.ajax({
				type: "GET",
				url: url,
				async: false,
				dataType: "json",
				success: function(data){
					for (var i=0; i<data[1].length; i++) {
						$("#output").prepend("<li><a href= " +data[3][i]+ ">" +data[1][i]+ "</a><p>" +data[2][i]+ "</p></li>");
					}
					
				},
				error: function(errorMessage){
					alert("Error");
				},
			})
		}
	})

});