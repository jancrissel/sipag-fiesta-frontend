'use strict';

(function(){
    angular
        .module("app")
        .controller("ViewTechnologyCtrl", function($scope, $routeParams, TechnologyService, ObjectiveService, BenefitService, BeneficiaryService, LocationService, PartnerService, ImageService) { 
            $scope.currentTechnology = $routeParams.id;
            $scope.objectives = [];
            $scope.benefits = [];
            $scope.beneficiaries = [];
            $scope.locations = [];
            $scope.partners = [];
            $scope.images = [];
 
            TechnologyService.getOneTechnology($scope.currentTechnology)
              .then(function(technology) {
                $scope.technology = technology.data.items[0];
              });

            ObjectiveService.getObjectives($scope.currentTechnology)
              .then(function(data){
                $scope.objectives = data.data.items;
              });

            BenefitService.getBenefits($scope.currentTechnology)
              .then(function(data){
                $scope.benefits = data.data.items;
              });

            BeneficiaryService.getBeneficiaries($scope.currentTechnology)
              .then(function(data){
                $scope.beneficiaries = data.data.items;
              });

            LocationService.getLocations($scope.currentTechnology)
              .then(function(data){
                $scope.locations = data.data.items;
              });

            PartnerService.getPartners($scope.currentTechnology)
              .then(function(data){
                $scope.partners = data.data.items;
              });

            ImageService.getImages($scope.currentTechnology)
              .then(function(data){
                $scope.images = data.data.items;
              });

        });

})();