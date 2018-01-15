
$(document).ready(function($) {
	$('#submitFeedback').click(function(){
		let feedbackListItem = $("#customerFeedback").val();
		let customerName = $('#customerName').val().toUpperCase();
		if(feedbackListItem.length > 0){
			$("#displayFeedbackList").append('<li>'+ feedbackListItem  + '	-'+ customerName +'</li>')
			$("#customerFeedback").val("");
		};
			});

});
