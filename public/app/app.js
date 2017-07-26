'use strict';

const ST_MAIN = 'ST_MAIN'
const ST_BLOG = 'ST_BLOG'
const ST_DISC_SCREENSHOT = 'ST_DISC_SCREENSHOT'
const ST_DISC_MADE_WITH_PRETTY = 'ST_DISC_MADE_WITH_PRETTY'
const ST_HELP_GETTING_STARTED = 'ST_HELP_GETTING_STARTED'
const ST_HELP_DOCUMENTATION = 'ST_HELP_DOCUMENTATION'
const ST_HELP_FILE_FORMATS = 'ST_HELP_FILE_FORMATS'
const ST_HELP_SYSTEM_REQUIREMENT = 'ST_HELP_SYSTEM_REQUIREMENT'
const ST_DOWNLOAD = 'ST_DOWNLOAD'


var app = angular.module('mainApp', [])

app.controller('mainCtrl', ['$scope', function($scope) {
    $scope.$root.cur_st = ST_MAIN;


    $scope.isState = function (state) {
	return $scope.$root.cur_st === state;
    }

    $scope.onMain = function () {
	$scope.$root.cur_st = ST_MAIN
    }

    $scope.onScreenshot = function () {
	$scope.$root.cur_st = ST_DISC_SCREENSHOT
    }

   $scope.onMadeWithPretty = function () {
	$scope.$root.cur_st = ST_DISC_MADE_WITH_PRETTY
    }

   $scope.onGettingStarted = function () {
	$scope.$root.cur_st = ST_HELP_GETTING_STARTED
    }

   $scope.onDocumentation = function () {
	$scope.$root.cur_st = ST_HELP_DOCUMENTATION
    }

   $scope.onFileFormats = function () {
	$scope.$root.cur_st = ST_HELP_FILE_FORMATS
    }

   $scope.onSystemRequirement = function () {
	$scope.$root.cur_st = ST_HELP_SYSTEM_REQUIREMENT
    }

   $scope.onDownload = function () {
	$scope.$root.cur_st = ST_DOWNLOAD
    }
 
}])
