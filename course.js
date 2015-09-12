//Course Js

var arrow = 0;
var isLesson = false;
var isTopic = false;

function Arrow_hover(id){
	var arrow = document.getElementById(id);
	arrow.style.transition = "color 0.5s ease-in-out";
	arrow.style.color = "grey";
	arrow.style.cursor ="pointer";
}

function Arrow_no_hover (id){
	var arrow = document.getElementById(id);
	arrow.style.transition = "color 0.5s ease-in-out";
	arrow.style.color = "black";
}

function Select_Course (id){
	for (i=0; i < 5; i++){
		if (id == "lesson_area_C"+i){
			arrow = i;
			isLesson = true;
			isTopic = false;
			Close_Course(id);
		} else if (id == "topic_info_t"+i){
			arrow = i;
			isTopic = true;
			isLesson = false;
			Close_Course(id);
		}
	}
}

function Close_Course(id){
	var topics = document.getElementById(id);
	if (topics.style.display == "none"){
		topics.style.display = "block";
		for(i=0; i<5; i++){
			if (isLesson == true && isTopic == false){
				if (arrow == i){
					var open_arrow = document.getElementById('open_course_c'+i);
					open_arrow.style.transform = "rotate(0deg)";
				}
			}	else if (isLesson == false && isTopic == true){
				if (arrow == i){
					var open_arrow = document.getElementById('open_topic_t'+i);
					open_arrow.style.transform = "rotate(0deg)";
				}
			}
		}
	} else  {
		topics.style.display = "none";
		for(i=0; i<5; i++){
			if (isLesson == true && isTopic == false){
				if (arrow == i){
					var open_arrow = document.getElementById('open_course_c'+i);
					open_arrow.style.transform = "rotate(90deg)";
				}
			}	else if (isLesson == false && isTopic == true){
				if (arrow == i){
					var open_arrow = document.getElementById('open_topic_t'+i);
					open_arrow.style.transform = "rotate(90deg)";
				}
			}
		}
	}
}
