var current_answer;

var start_time = 0;

var total_time_spent = 0;

var total_answer_count = 0;

var right_answer_count = 0;

function start_calculations() {
    generate_expression();
	
	show_expression();
}

function stop_calculations() {
	hide_expression();
	
	console.log ("Правильных ответов: " + right_answer_count);
	console.log ("Среднее время ответа: " + (total_time_spent / total_answer_count).toFixed(2) 
					+ " секунд.");	
}

function show_expression() {
    document.getElementById("start_button").style.display = "none";
	
	document.getElementById("rand_numbers").style.visibility = 'visible'; 
	
    document.getElementById("user_answer").style.visibility = 'visible'; 
    document.getElementById("finish_button").style.visibility = 'visible';
}

function hide_expression() {
	document.getElementById("finish_button").style.visibility = "hidden";

	document.getElementById("start_button").style.display = "inline-block";
	document.getElementById("start_button").value = "Начать заново?";	  

	document.getElementById("rand_numbers").style.visibility = "hidden";
	document.getElementById("user_answer").style.visibility = "hidden";
}

function generate_expression() {    
    var rand = Math.round(Math.random() * 1000);
    var rand2 = Math.round(Math.random() *1000);   
    
    current_answer = rand + rand2;
    
    start_time = performance.now();
    
    var expression = rand + " + " + rand2 + " = ";
    
    document.getElementById("rand_numbers").innerHTML = expression;
}

function check_answer() {
    if (event.keyCode != 13) {
        return;
    }
    
    var user_answer = document.getElementById("user_answer").value;
    
    if (!isNaN(user_answer)) {
        var end_time = performance.now();
        
        var expression_time = (end_time - start_time) / 1000.0;
		
		total_time_spent += expression_time;
        
        if (Number(user_answer) === current_answer) {
            console.log("Верно! Вы потратили " + expression_time.toFixed(2) + " секунд");
			right_answer_count++;
        } else {
            console.log("Неверно. Правильный ответ - " + current_answer 
				+ ". Вы потратили " + expression_time.toFixed(2) + " секунд.");
        }
		
		total_answer_count++;
       
        generate_expression();       
    } else {
        alert("введите число");
    }
	
    document.getElementById("user_answer").value = " ";   
}