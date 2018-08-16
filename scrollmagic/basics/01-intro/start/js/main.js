$(document).ready(function(){
	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	var introScene = new ScrollMagic.Scene({
			triggerElement:'#intro',
			triggerHook :0,
			duration:'30%'
	})
	.setPin('#intro',{pushFollowers:false})
	.addTo(controller)

	var introScene2 = new ScrollMagic.Scene({
			triggerElement:'#project01',
			triggerHook :0.4
	})
	.setPin('#intro',{pushFollowers:false})
	.addTo(controller)

	// Build a scene
	$('.project').each(function(){
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0], // by including the img the trigger of the
			// fade scene happens when the img comes into focus
			//duration: '90%', //100% means the scene will remain available for the height
			// of the viewport. Earlier we had used 300px which meant that
			//the scene will go out of focus after 300px from the point it started
			triggerHook:  0.8  // 0 and 1 value means that the animation is not completely
			// visible happening on the viewport. So we set the value to 0.9
		})
		.setClassToggle(this, 'fade-in')
		.addIndicators({
			name:'fade scene',
			colorTrigger: 'black',
			/*indent:200,*/
			colorStart:'red',
			colorEnd:'pink'
		})
		.addTo(controller)
	});
});
