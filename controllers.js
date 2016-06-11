angular.module('videoGames.controllers', [])

.controller('GameListController', function(games){
  var gameList = this;
  gameList.games = games;

});

.controller('NewGameController', function($location, games){
  var newGame = this;
  newGame.save = function(){
    games.$add(newGame.game).then(function(data){
      $location.path('/');
    });
  };
});

.controller('EditGameController', function($location, $routeParams, games){
  var editGame = this;
  var gameId = $routeParams.gameId,
            gameIndex;

  editGame.games = games;
  gameIndex = editGame.games.$indexFor(gameId);
  editGame.game = editGame.games[gameIndex];

  editGame.destroy = function(){
    editGame.games.$remove(editGame.game).then(function(data){
      $location.path('/');
    });
  };

  editGame.save = function(){
    editGame.games.$save(editGame.game).then(function(data){
      $location.path('/');
    });
  };

});
