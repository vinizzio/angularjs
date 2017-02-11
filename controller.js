angular.module("MyFirstApp",[])
  .controller("FirstController",function($scope,$http){
    $http.get("http://jsonplaceholder.typicode.com/posts")
    .success(function(data){
        console.log(data);
    })
    .error(function(err){

    });
  });
