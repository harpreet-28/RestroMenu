
$(function() {

    $('#submitFeedback').click(function() {

       
        let customerEmail = $('#customerEmail').val();
        let feedbackListItem = $("#customerFeedback").val();
        let customerName = $('#customerName').val().toUpperCase().bold();
        if (feedbackListItem.length > 0) {
            $("#displayFeedbackList").append('<li>' + feedbackListItem + '	--' + customerName + ' (' + customerEmail + ')' + '</li>')
            $("#customerFeedback").val("");
        };
    });


    let $todaySpecialMessage = $('#today-special');
	let $todaySpecialBtn = $('#btnTodaySpecial');
	$todaySpecialBtn.click(function(){
		$todaySpecialMessage.show('slow');
	})
	$todaySpecialBtn.mouseout(function(){
		$todaySpecialMessage.hide('slow');
	});


	let $menuBtn = $('#openMenu')
	let $menu = $('#menu-drawer');
	console.log($menuBtn)
	console.log($menu)



});



// const _id = (id) =>  document.getElementById(id);

// const _id = function _id(id){
// 	return document.getElementById(id);
// }





// 

//         const todaySpecialAlert = _id('today-special'); console.log(todaySpecialAlert)