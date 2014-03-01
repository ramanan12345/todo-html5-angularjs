function todoCtrl($scope){
	$scope.todos = [];
	if(localStorage.todos){
		$scope.todos = JSON.parse(localStorage.todos);
	}
	
	$scope.addTodo = function(todoText){
		if(!todoText){
			return;
		}
		var todo = {
			text: todoText,
			done: false
		}
		$scope.todos.push(todo);
		localStorage.todos = JSON.stringify($scope.todos);
		$scope.todoText = null;
	}
	
	$scope.removeTodo = function(i){
		$scope.todos.splice(i,1);
		localStorage.todos = JSON.stringify($scope.todos);
	}
}