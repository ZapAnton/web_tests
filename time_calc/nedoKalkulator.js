var current_answer;
var start_time;
var count = 0;

function start_calculations() {
    generate_expression();
    
    document.getElementById("start_button").style.display = "none";
}

function generate_expression() {    
    var rand = Math.round(Math.random() * 1000);
    var rand2 = Math.round(Math.random() *1000);   
    
    current_answer = rand + rand2;
    
    start_time = performance.now();
    
    var expression = rand + " + " + rand2 + " = ";
    
    document.getElementById("rand_numbers").innerHTML = expression;
    
    document.getElementById("user_answer").style.visibility = 'visible'; 
    document.getElementById("finish_button").style.visibility = 'visible';
}

function check_answer() {
    if (event.keyCode != 13) {
        return;
    }
    
    var user_answer = document.getElementById("user_answer").value;
    
    if (!isNaN(user_answer)) {
        var end_time = performance.now();
        
        var expression_time = (end_time - start_time) / 1000.0;
        
        if (Number(user_answer) === current_answer) {
            console.log("Верно! Вы потратили " + expression_time.toFixed(2) + " секунд");
            count++;
        } else {
            console.log("Неверно. Правильный ответ - " + current_answer + ". Вы потратили " + expression_time.toFixed(2) + " секунд.");
        }
       
        generate_expression();       
    } else {
        alert("введите число");
    }
	
    document.getElementById("user_answer").value = " ";   
}

function stop_calculations () {
//    var EndAll_Time = performance.now ();
//    var CheckAll_Time =(EndAll_Time - start_time)/1000.0;
   document.getElementById("renew_button").style.visibility = 'visible';
   document.getElementById("finish_button").style.display = "none";
   document.getElementById("rand_numbers").style.display = "none";
   document.getElementById("user_answer").style.display = "none";
    
   console.log ("Правильных ответов " + count);  
//   console.log ("Общее время " + CheckAll_Time.toFixed(2)+" cекунд");
}

function renew_calculations () {
	document.getElementById("renew_button").style.visibility = 'hidden';
	document.getElementById("finish_button").style.display = "inline-block";
	document.getElementById("rand_numbers").style.display = "inline-block";
	document.getElementById("user_answer").style.display = "inline-block";

	generate_expression;
	check_answer;
}