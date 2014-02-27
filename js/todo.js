function todoCtrl($scope){
	$scope.todos = [];
	$scope.addTodo = function(todoText){
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