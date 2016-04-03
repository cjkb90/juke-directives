juke.directive('albumDirective', function(){
	return {
		restrict: 'E',
		templateUrl: '/js/album/templates/anyAlbumList.html',
		scope: {
			albums: '='
		}
	}
});