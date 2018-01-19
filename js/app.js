$(function() {

    $('#submitFeedback').click(function() {


        let customerEmail = $('#customerEmail').val();
        let feedbackListItem = $("#customerFeedback").val();
        let customerName = $('#customerName').val().toUpperCase().bold();
        if (feedbackListItem.length > 0) {
            $("#displayFeedbackList").append('<li>' + feedbackListItem + '	--' + customerName + ' (' + customerEmail + ')' + '</li>' + '<br> <br>');
            $("#customerFeedback").val("");
            $("#customerEmail").val("");
            $("#customerName").val("");
        };
    });


    let $todaySpecialMessage = $('#today-special');
    let $todaySpecialBtn = $('#btnTodaySpecial');
    $todaySpecialBtn.click(function() {
        $todaySpecialMessage.show('slow');
    })
    $todaySpecialMessage.click(function() {
        $todaySpecialMessage.hide('slow');
    });


    let $menuBtn = $('#openMenu')
    let $menu = $('#menu-drawer');
    let $menuCloseBtn = $('#menuCloseBtn');
    console.log($menuBtn)
    console.log($menu)

    $menuBtn.click(function() {
        $menu.show('slow')
    })

   
    $menuCloseBtn.click(function() {
        $menu.hide('slow');
    });


    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const a = new Date();
    const currentDay = weekday[a.getDay()];
    console.log(currentDay)

    
    if(currentDay == weekday[0]){
    	$todaySpecialMessage.append('<p>'+'Chicken Tikka Masala'+'</p>');
    }if(currentDay == weekday[1]){
    	 $todaySpecialMessage.append('<p>'+'Chicken Biryani'+'</p>');
    }if(currentDay == weekday[2]){
    	$todaySpecialMessage.append('<p>'+'Tandoori Salmon'+'</p>');
    }if(currentDay == weekday[3]){
    	$todaySpecialMessage.append('<p>'+'Vegetable Platter'+'</p>');
    }if(currentDay == weekday[4]){
    	$todaySpecialMessage.append('<p>'+'Lamb Curry'+'</p>');
    }if(currentDay == weekday[5]){
    	$todaySpecialMessage.append('<p>'+'Butter Chicken'+'</p>');
    }if(currentDay == weekday[6]){
    	$todaySpecialMessage.append('<p>'+'Tandoori Paneer Tikka'+'</p>');
    }


    let $orderCheck = $('.order-check');
    let $cartCloseBtn = $('#cart-menuCloseBtn');
    let $orderList = $('#orderList');

    $orderCheck.click(function(evt){
        evt.preventDefault();
        $orderList.show('slow');
    })


    $cartCloseBtn.click(function(){
         $orderList.fadeOut('slow');
    })
});