var app = angular.module('todoApp',['ngTouch','ngAnimate']);

app.controller('todoCtrl',function($scope){
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
	
	$scope.doneTodo = function(todo){
		todo.done = true;
		localStorage.todos = JSON.stringify($scope.todos);
	}
	
	$scope.reopenTodo = function(todo){
		todo.done = false;
		localStorage.todos = JSON.stringify($scope.todos);
	}
	
	$scope.removeTodo = function(i){
		$scope.todos.splice(i,1);
		localStorage.todos = JSON.stringify($scope.todos);
	}
});