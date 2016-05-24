angular.module('portfolio', [])
    .controller('portfolioCtrl', portfolioCtrl);
portfolioCtrl.$inject = ['$scope']
function portfolioCtrl($scope) {
    this.getProject = getProject;
    
    var projectList = 
    [
        {
            "name":"Proyecto 1",
            "desc":"Descripcion del proyecto 1.",
            "url":"repoURL"
        },
        {
            "name":"Proyecto 2",
            "desc":"Descripcion del proyecto 2.",
            "url":"repoURL"
        },
        {
            "name":"Proyecto 3",
            "desc":"Descripcion del proyecto 3.",
            "url":"repoURL"
        },
        {
            "name":"Proyecto 4",
            "desc":"Descripcion del proyecto 4.",
            "url":"repoURL"
        }
    ]
    
    function getProject(id) {
        $scope.show = true;
        
        var project = projectList[id];
        $scope.name  = project.name;
        $scope.desc  = project.desc;
        $scope.url   = project.url;
    }
}  
