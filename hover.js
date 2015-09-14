var possible_effects = ["color", "opacity"];
var new_effect;

function Hover_active(id, effect, value){
	var object = document.getElementById(id);
	for (i = 0; i < possible_effects.length; i++){
		if (effect == possible_effects[i]){
			new_effect = possible_effects[i];
		}
	}
	console.log(new_effect);
	object.style.new_effect = value;
	object.style.cursor = "pointer";
}

function No_hover(id, effect, value){
	var object = document.getElementById(id);
	object.style.effect = value;
	object.style.cursor = "pointer";
}


//<section class="box" onmouseover="Hover_active('box_download', 'opacity', '0.2');" 
//  onmouseout="No_hover('box_download', 'opacity', '1');">
//This is the HTML line that I used to start the functions
