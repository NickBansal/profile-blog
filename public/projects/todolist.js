$("ul.listed").on("click", "li", function(event){
	$(this).toggleClass("addclass");
});


$("ul.listed").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type = 'text']").on("keypress", function(event){
	if (event.which === 13) {
		var i = $(this).val();
		$("ul.listed").append('<li class="list"><span><i class="fa fa-trash"></i></span> ' + i+ '</span> </li>');
		$(this).val("")
	}	
});

$(".fa-plus").on("click", function(){
	$("input").fadeToggle(500);
})
