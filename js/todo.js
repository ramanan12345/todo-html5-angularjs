function todoCtrl($scope){
	$scope.todos = [];
	$scope.addTodo = function(todoText){
		if(!todoText){
			return;
		}
		var todo = {
			text: todoText,
			done: false
		}
		$scope.todos.push(todo);
		$scope.todoText = null;
	}
	
	$scope.removeTodo = function(i){
		$scope.todos.splice(i,1);
	}
}