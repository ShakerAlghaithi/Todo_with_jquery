$(document).ready(function(){
	$('#add').on('click', function(e){
		e.preventDefault();
		var todo = $('#thingtodo').val();
		//console.log(todo);
		$('.list').append('<li><span class="todo_label">' + todo + '</span><input type="button" class="delete" value="Delete"/></li>' );
		$('#thingtodo').val(" ");
		
	});



	 $('.list').delegate('li span.todo_label','click', function(e){
    	console.log('TOGGLE');
      	var done = $(this).toggleClass('todo_done');
     });

	$('.list').delegate('li .delete','click', function(e) { 
	 	console.log('DELETE');
       $(this).parent().remove();
    });	



});