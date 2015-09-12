//Home Page Java

var arrow = 0;

//extend the footer
function Footer_show(id){
	var footer_menu = document.getElementById(id);
	if (footer_menu.style.height == "11rem") {
		footer_menu.style.transition = "height 0.2s linear 0s";
		footer_menu.style.height = "3rem";
		document.getElementById('footer_open').style.transform = "rotate(180deg)";
		document.getElementById('hidden_footer').style.display = "none";
	} else {
		footer_menu.style.transition = "height 0.2s linear 0s";
		footer_menu.style.height = "11rem";
		document.getElementById('footer_open').style.transform = "rotate(360deg)";
		document.getElementById('hidden_footer').style.display = "block";
	}
}

function Select_course(course){
	for (i = 0; i < 5; i++){
		if (course == "course"+i+"_courses"){
			arrow = i;
			Close_courses(course);
		}
	}
}

//Close Couses
function Close_courses(id){
		var course_id = document.getElementById(id);
		if (course_id.style.display == 'none'){
			course_id.style.display = 'block';
			for (i=0; i < 5; i++){
				if (i == arrow){
					arrow_object = document.getElementById('c'+i+'_open_arrow');
					arrow_object.style.transform = "rotate(0deg)";
				}
			}
		} else {
			course_id.style.display = 'none';
			for (i=0; i < 5; i++){
				if (i == arrow){
					arrow_object = document.getElementById('c'+i+'_open_arrow');
					arrow_object.style.transform = "rotate(90deg)";
				}
			}
		}
}

function Footer_hover(){
	var footer_hover = document.getElementById('footer');
	footer_hover.style.transition = "opacity .75s ease-in-out";
	footer_hover.style.opacity = "1";
}

function Footer_no_hover(){
	var footer = document.getElementById('footer');
	footer.style.transition = "opacity .75s ease-in-out";
	footer.style.opacity = "0.2";
}
