let todoList = [];

function addTask(task){
	todoList.push(task); // Add task to the end of a queue
}

function removeTask(){
	todoList.pop();
}

function urgentTask(task){
	todoList.unshift(task);  // Add task to the start of a queue
}

function getTask(){
	return todoList.shift()  // Remove task from the head of a queue
}