/* angular.module('testApp').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 1;
var slides = $scope.slides = [];

slides.push(
    {
      image: 'http://lorempixel.com/400/200/',
	  id: '1'
	  });
	  
    slides.push({
      image: 'http://lorempixel.com/400/200/food',
	  id: '2'
    });
    slides.push({
      image: 'http://lorempixel.com/400/200/sports',
	  id: '3'
    });
    slides.push({
      image: 'http://lorempixel.com/400/200/people',
	  id: '4'
    });

}); */

angular.module('testApp').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  
  
  slides.push(
    {
      image: './images/countachSwimming.jpg',
	  text:'countach',
	  id: 0
	  });
	  
    slides.push({
      image: './images/countachWhite1.png',
	  text:'countach2',
	  id: 1
    });
    slides.push({
      image: './images/countachWhite2.png',
	  text:'countach3',
	  id: 2
    });
    slides.push({
      image: './images/lamborghiniBlack.jpg',
	  text:'countach4',
	  id: 3
    });
  
  var currIndex = 0;
  
  

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      /* image: '//unsplash.it/' + newWidth + '/300', */
	  image:'./images/lamborghiniBlack.jpg',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };


  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});