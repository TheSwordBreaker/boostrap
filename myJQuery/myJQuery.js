


$(document).ready(function() {
		
		$('#change').click(function(){
			$('#l').text("Hiii You just changed text using JQuery ");
		})

		$('#change').dblclick(function(){
			$('#l').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam nam sequi animi porro! Consequatur ");
		})
		

		 $('#effect').click(
		function(){
			$('#l').slideToggle(1000);
		})

		// $('#l').html('<h1>hiiiii<h1>')

		// $('#effect').hover(function(){
		// 	$('#l').animate({
				
		// 		opacity:0.5,
		// 		width:'30%' ,
		// 		height:'70%'
		// 	},2000)
		// },
		// function(){
		// 	console.log('it was done');
		// 	$('#l').animate({
		// 		opacity:1,
		// 		width:'70%',
		// 		height:'0%'
		// 	},400)
		// })
	// $('#effect').click(function(){
	// 	$('#l').fadeTo(1000, 0.5);
	// })

	// $('#effect').click(function(){
	// 	$('#l').fadeToggle();
	// })

	// $('#effect').click(function () { 
	// 	$('#l').fadeOut(900);
	// 	$('#l').fadeIn(1000, function () {
	// 		console.log('complete');
	// 	});
	// });
    // $('#effect').click(
	// 	function(){
	// 		$('#l').slideToggle(1000);
			// $('#l').slideDown();
	// 	}
	// )
	// $('P').click(function () {
	//   console.log('you press is ', this);

	// });

	// $('#third').click(function () {
	//   $(this).hide();
	// }
	// )

	// $('.me').dblclick(
	//   function () {
	//     $('#third').show();
	//   }
	// )

	// $('*').hover(
	//   function(){
	//     console.log("you enter :",this);
	//   }
	// )
});
