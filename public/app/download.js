app.controller('downloadCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.download_home = 'vault/download/pv'

    $scope.onDownload = function (platform) {
	console.log(platform)
	const version = '0.1.0'
	var file_name = platform
	let full_path = $scope.download_home + file_name

	var req = new XMLHttpRequest();
//	req.responseType = 'arraybuffer'
	req.responseType = 'blob'
	req.open("POST", full_path, true);
//	req.overrideMimeType('octet\/stream; charset=x-user-defined');
	req.setRequestHeader('Cache-Control', 'no-cache');
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.onreadystatechange = function (e) {
	    if(req.readyState != 4) return
	    if(req.status != 200) return

	    var blob = req.response;
//	    console.log(blob.length, e)
	    saveAs(blob, file_name)
	}

	req.send(null);

    }

}])

