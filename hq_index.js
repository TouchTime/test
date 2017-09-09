//切换样式
$(function(){
    $('.superiver .header a').click(function() {
        $('.superiver .header a').removeClass('active');
        $(this).addClass('active');
    });
//名字**
    
    //    reName (); 
    //    function reName () {
    //     let  oldName = $('.changeName').html();
    //     console.log(oldName);
    //     let  newName = oldName.substr(0,1) + '**';
    //     $('.changeName').html(newName);       
    // }
     
     //受理1答复2评价3

     //查看详情
     function show_detail () {
         $('.superiver_detail .list_know').click(function() {
             $('.hide_detail').slideToggle("slow");
             console.log('1',$('.hide_detail').innerHeight())
             if($('.hide_detail').innerHeight() === 0){
                 $('.superiver_detail .list_know i').hide();
                 $('.superiver_detail .list_know .show_hide1').show();
             }else{
                   $('.superiver_detail .list_know i').hide();
                 $('.superiver_detail .list_know .show_hide2').show();
               
             }
         })
     }
        show_detail ();
     function toast(a){
		if(a == '' || a == undefined)
			return;
		if($('.toast').length <= 0){
			var d = "<div class='toast'></div>";
			$('body').append(d)
		}
		var t = null;
		$('.toast').text(a);
		var w = $('.toast').width();

		$('.toast').css('max-width','100vw');
		clearTimeout(t);
		$('.toast').fadeIn(800);
		t = setTimeout(function(){
			$('.toast').fadeOut(2000)},2000)
	}
})