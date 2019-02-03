$(document).ready(function() {
  console.log('I am in ready function of main class.');
  
  // Start : Loading default page on page load.
  $('.loading-image').show();
  
  var loadurl = 'view/home.html';
  $.ajax({
      url: loadurl,
      async: false
   }).done(function(data){
	   $('html,body').animate({scrollTop: 0},'slow');
  // 	setTimeout(function(){
           $("#leftMainContainer").html(data);
           $("#leftMainContainer").focus();
           $('.loading-image').hide();
   //	}, 500);
   	

    }).fail(function(xhr) {
		 console.log("Something went wrong in loading deafult page.!!");
       // window.location.reload();         
    });
  // End : Loading default page on page load.
  
  //Start: On tab menu click
  $('[data-toggle="tabajax"]').click(function(e){
	 $('.loading-image').show();
	 e.stopPropagation();
     e.preventDefault();
	 console.log('tabajax clicked.2');     
    
	 $(".navarea_wrap li").removeClass("active");
     $(this).closest('li').addClass('active');
     
     var $this = $(this);
     var loadurl = $this.attr('href');
	 console.log('loadurl = '+loadurl);
     if(loadurl=="#")
          return false;
     else if(loadurl == 'view/contactUs.html' || loadurl=='view/javaStudy/javaHome.html'){
    	 $('#upcomingBatch').hide();
    	 $("#leftMainContainer").removeClass("left_body_wrap");
    	 
     }else{
    	 $('#upcomingBatch').show();
    	 $("#leftMainContainer").addClass("left_body_wrap");
     }
     $.ajax({
               url: loadurl,
               async: false
            }).done(function(data){
            		$('#headingMenuId').text($this.text()).focus();
            	
            	//setTimeout(function(){
                    $("#leftMainContainer").html(data);
                    $('.loading-image').hide();
            	//}, 500);
            	
                    $(".navarea_wrap li").removeClass("open");
                    $('#headerMenuTab').removeClass("in")
                    $('#headerMenuTab').attr("aria-expanded", "false");
                    $('#navbarMenuButton').attr("aria-expanded", "false");
             }).fail(function(xhr) {
				 console.log("Something went wrong!!");
                // window.location.reload();         
             });
 
	});
   //End: On tab menu click
  
  $('#servicesTab').on('click', function(){

  });
  
  $('#navbarMenuButton').on('click', function(){

  });
  
});


$('body').on('click', '.coursesMenu li a', function(){
    var $this = $(this);
    var focusId = $this.attr('href');
    var div = $("div[id='"+ focusId +"']");
    $("p").removeClass("courseTitle");
    div.find("p:first").addClass('courseTitle');
    var height = $('#top_bar').height()+10;
    $('html,body').animate({scrollTop: (div.offset().top-height)},'slow');	
	
});


//When the user clicks on the button, scroll to the top of the document
$('body').on('click','#scrollTopButton', function(){
	$('html,body').animate({scrollTop: 0},'slow');	
	$('#scrollTopButton').css({'display':'none'});
});
