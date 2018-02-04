$(function(){
	
    $(":submit").on("click", function(event){   
	event.preventDefault();                                   // prevent submit default behavior
        var rows, cols;
	rows = $("#input_height").val();                          // get grid size
	cols = $("#input_width").val();
        makeGrid(rows, cols);                                     // call the makeGrid
	
	$(".pixel").on("click", function(event) {                 // put color on pixel with mouse click
	    var color = $("#colorPicker").val();
            $(event.target).css("backgroundColor", color);
        });
	$(".pixel").on("dblclick", function(event) {              // erase color from pixel on double mouse click
	    $(event.target).css("backgroundColor", "rgba(0, 0, 0, 0)");
	});
	$(".pixel").contextmenu(function(){                 // disable context menu
		return false;
	});                          
    });

    function makeGrid(rows, cols){
      $("#pixel_canvas").empty();                                 // empty the canvas div
	  
      for (i = 0; i < rows; i++) {
	    $("#pixel_canvas").append("<div class='row'></div>"); // create rows
      }       
      for (j = 0; j < cols; j++){
		$(".row").append("<div class='pixel'></div>");	  // fill rows with pixels
	  }
	};
});	
	

    