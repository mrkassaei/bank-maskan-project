$(document).ready(function() {
 
    $("#owl-example").owlCarousel({
        rtl:true,
        itemsDesktop : [1499,4],
        itemsDesktopSmall : [1199,3],
        itemsTablet : [899,2],
        itemsMobile : [599,1],
        navigation : true,
        // navigationText: ['<div class="owlleft">left</div>', '<div class="owlright">right</div>']
        navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
    });
    
  });
//     $("p").on({
//         click:function(){
//             alert("hello"+$("p").text()+$("p").html());
//         },
//         dblclick:function(){
//             alert("dblclicked");
//         }
// });
// let btnins=$("table").find("button.btn-success");
//     btnins.click(function(){
//         x=document.activeElement.parentNode.parentNode.rowIndex;
//         alert(x);
//     });
//     let btndel=$("table").find("button.btn-danger");
//     btndel.click(function(){
//         x=document.activeElement.parentNode.parentNode.row[0].value();
//         alert(x);
//     });
//     $(".progress-bar").animate(function(){
//         this.aria.valuenow=50;
//     },5000);
 
new fullpage('#fullpage', {
    // navigation: true,
    // responsiveWidth: 700,
	 anchors: ['firstPage', 'secondPage', 'thirdPage'],
	 menu: '#myMenu',
	 navigationPosition:'left',
	 navigationTooltips:['first page','second page','third page'],
	 navigation: true,
    // parallax: true,
    // onLeave: function(origin, destination, direction){
    //     console.log("Leaving section" + origin.index);
	// },
	// css3:true,
	// easing:'easeInOutCubic',
	scrollingSpeed: 1000,
	sectionsColor : ['#ccc', '#dea','#ff1'],
	onLeave:function(origin, destination, direction){
		console.log("section leave:"+origin.index);
	},
	onSlideLeave: function(section, origin, destination, direction){
		console.log("slide leave:"+origin.index);
	}

});