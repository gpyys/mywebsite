$(function(){        
    	$(".main-menu span").click(function(i){
		var id =  $(this).attr('class');
		id = id.split('-');

		$(".menu-container .content").slideUp('slow');
		$(".menu-container #menu-"+id[1]).slideDown('slow');		
		$(".menu-container .homepage").slideUp('slow');
		return false;
	});


	$(".main-menu span.homebutton").click(function(){
		$(".menu-container .content").slideUp('slow');
		$(".menu-container .homepage").slideDown('slow');
		$(".myhead").animate({marginLeft:'45%'}, "slow");
		$(".myhead").animate({marginTop:'120px'}, "slow");
		return false;
	});

	$(".main-menu span.aboutbutton").click(function(){
		$(".menu-container .content").slideUp('slow');
		$(".menu-container .about-section").slideDown('slow');
		$(".myhead").animate({marginTop:'0'}, "slow");
		$(".myhead").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu span.projectbutton").click(function(){
		$(".menu-container .content").slideUp('slow');
		$(".menu-container .gallery-section").slideDown('slow');
		$(".myhead").animate({marginTop:'0'}, "slow");
		$(".myhead").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu span.contactbutton").click(function(){
		$(".menu-container .content").fadeOut();
		$(".menu-container .contact-section").slideDown('slow');
		$(".myhead").animate({marginTop:'0'}, "slow");
		$(".myhead").animate({marginLeft:'0'}, "slow");
		table(92,can.getContext('2d'),'#E65127','HTML')
	    table(88,can2.getContext('2d'),'#0C73B8','CSS')
	    table(90,can3.getContext('2d'),'#E7A328','JS')
		return false;
	});

	$('.toggle-menu').click(function(){
        $('.show-menu').stop(true,true).slideToggle();
        return false;
    });

    $('.show-menu span').click(function() {
    	$('.show-menu').fadeOut('slow');
    });

    var pages=$(".box-content .zuopin")
    var btns=$(".pages li")
    btns.click(function(){
    	var index=btns.index(this);
    	pages.css({display:'none'}).eq(index).fadeIn(1000)

     })

	function table(val,o,color,z){

	     o.save();
		 o.translate(0,0);
		 var z=z;
		 var b=val;
		 var s=0;
		 var time=1000/b;
		var t=setInterval(function(){

			 o.clearRect(0,0,500,500)
		     s++;
		     ang=s/100*360;
		     if (s>=b) {
		     	clearInterval(t);
		     };
		     o.save();
		     o.beginPath();
		     o.translate(250,250);
		     o.rotate(-Math.PI/2)
		     o.lineWidth=60;
		     o.strokeStyle=color;
		     o.arc(0,0,200,0,Math.PI/180*ang);
		     o.stroke();
		     o.closePath();
		     o.restore();
		     

		     o.save();
		     o.beginPath();
		     o.font="100px arial";
		     o.textAlign="center";
		     o.textBaseline="middle";
		     o.fillText(z,250,250);
		     o.stroke();
		     o.closePath();
		     o.restore();

		     o.restore();
		},time)
		
	}
})