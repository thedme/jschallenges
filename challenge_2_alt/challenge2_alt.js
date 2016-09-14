/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

$(function(){

 	function rannum(){
        return (Math.random() * 10);
    };

 	$("#teamone-shoot").click(function(){
 		var current_shoot_num = $("#teamone-numshots").text();
 		current_shoot_num++;
 		$("#teamone-numshots").text(current_shoot_num);
		if (rannum() >= 5){
            $('#teamone-numhits').html(function(i, val){return +val+1});
            $('body').css("background-color", "blue");
            $('body').css("color", "white");


 	 	};
 	 })
 	

 	$("#teamtwo-shoot").click(function(){
 		var current_shoot_num_two = $("#teamtwo-numshots").text();
 		current_shoot_num_two++;
 		$("#teamtwo-numshots").text(current_shoot_num_two);

 		

 		if (rannum() >= 5){
        	$('#teamtwo-numhits').html(function(i, val){return +val+1});
        	$('body').css("background-color", "red");
        	$('body').css("color", "white");
 		};
 	})	



		
	

	$("#reset").click(function(){
 			var reset_count = $("#num-resets").text();
 			reset_count++;
 			$("#num-resets").text(reset_count);
 			$('body').css("color", "black");
 			$('body').css("background-color", "white");


 			var shoot_num_to_zero = $("#teamone-numshots").text();
 			shoot_num_to_zero = 0;
 			$("#teamone-numshots").text(shoot_num_to_zero);


 			var goal_to_zero_team_one = $("#teamone-numhits").text;
 			goal_to_zero_team_one = 0;
 			$("#teamone-numhits").text(goal_to_zero_team_one);


 			var shoot_num_to_zero_team_two = $("#teamtwo-numshots").text();
 			shoot_num_to_zero_team_two = 0;
 			$("#teamtwo-numshots").text(shoot_num_to_zero_team_two);


 			var goal_to_zero_team_two = $("#teamtwo-numhits").text;
 			goal_to_zero_team_two = 0;
 			$("#teamtwo-numhits").text(goal_to_zero_team_two);




 		

	})

});	