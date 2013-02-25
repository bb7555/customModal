//Twitter Bootstrap Inspired Custom Modal
//By cliff barnes -- Free to use and distribute
//For source code and info: https://github.com/bb7555/customModal

(function( $ ) {
  $.fn.customModal = function() {
  
    $("#modalContainer span[data-box]").dblclick().click(function(){
		//bring in our overlay
		$("#overlay").fadeIn("slow");
		
		//set the box number being used 
		boxNum=$(this).attr('data-box');
		
		//discover our Y position of the modal
		var elY = $(this);
		var position = parseInt($(window).scrollTop())+200;
		var y = position+"px";
		
		//discover our X position of the modal
		var elX = $("#modalContainer");
		var positionX = elX.position();
		var x = positionX.left+"px";
		//set the X position of the modal
		$("div[data-hidden='"+boxNum+"']").css('left',x);
		
		//animate the modal in
		$("div[data-hidden='"+boxNum+"']").animate({top:y});
		
		//event listeners to close the modal
		$("#overlay, .close_btn, .close_link").click(function(){
			$("#overlay").hide();
			$("div[data-hidden='"+boxNum+"']").animate({top:'-500px'});
			});	
			
		});
	
	
  };
})( jQuery );