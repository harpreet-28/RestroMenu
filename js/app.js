
// (function(){




// // const logo = document.getElementsByClassName('logoDescription');
// // console.log(logo);

// // function changeColor(){
// // 	logo[0].style.color = 'yellow';
// // }
// // logo[0].addEventListener('click', changeColor, false);


// const openMenu = $('.openMenu')

// console.log(openMenu)

// $(openMenu).on('click', function() {
// 				var position = $('input[name="position"]:checked').val();
// 				$('.pure-drawer').attr('data-position', position)});
// })();
// 
$(document).ready(function($) {
	$('#submitFeedback').click(function(){
		let customerEmail = $('#customerEmail').val();
		let feedbackListItem = $("#customerFeedback").val();
		let customerName = $('#customerName').val().toUpperCase().bold();
		if(feedbackListItem.length > 0){
			$("#displayFeedbackList").append('<li>'+ feedbackListItem  + '	--'+ customerName+ ' ('+ customerEmail+ ')' +'</li>')
			$("#customerFeedback").val("");
		};
			});

});
