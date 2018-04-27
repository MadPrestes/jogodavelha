var jvapp = angular.module("jvApp", []);

jvapp.controller('jvControl',['$scope', function($scope){
 
    var player = ['x','0'];
    var c = 0;
    var j = 0;
    /*if(c = 0){j = 0};
    if(c = 1){j = 1};
    if(c = 2){j = 0};
    if(c = 3){j = 1};
    if(c = 4){j = 0};
    if(c = 5){j = 1};
    if(c = 6){j = 0};
    if(c = 7){j = 1};
    if(c = 8){j = 0};*/

    
    

    $scope.mostre = function(clickEvent){
        $scope.player = player[j];
        c++;
        
                
        console.log("c é :" + c);
        console.log("j é :" + j);

        if(c == 0){j = 0};
        if(c == 1){j = 1};
        if(c == 2){j = 0};
        if(c == 3){j = 1};
        if(c == 4){j = 0};
        if(c == 5){j = 1};
        if(c ==  6){j = 0};
        if(c == 7){j = 1};
        if(c == 8){j = 0};
        if (c == 9){c = 0};
    };
    
   

    

    function mostre(){
        alert('clicou');
    };

}]);



/*
linha1 i1, i2, i3
linha2 i4, i5, i6
linha3 i7, i8, i9

coluna1 i1, i4, i7
coluna2 i2, i5, i8
coluna3 i3, i6, i9

barra i7, i5, i3

contraBarra i1, i5, i9
*/
