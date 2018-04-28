var jvapp = angular.module("jvApp", ['ngSanitize']);

jvapp.controller('jvControl',['$scope', function($scope){
 
    var player = ["X","O"];
    var c = 0;
    var aide;
    var jv = $scope;
    var temp;
  
       
    var bt1;
    var bt2;
    var bt3;
    var bt4;
    var bt5;
    var bt6;
    var bt7;
    var bt8;
    var bt9;

    $scope.clicktest = function(clickEvent){
      //linhas  
        if( bt1 = bt2 = bt3){alert(bt1 + ' ganhou'); console.log('linha1')};
        if (bt4 = bt5 = bt6){alert(bt5 + ' ganhou'); console.log('linha2')};
        if (bt7 = bt8 = bt9){alert(bt7 + '  ganhou'); console.log('linha3')};
    // contraBarra
        if (bt1 = bt5 = bt9){ alert(bt5 + '  ganhou');console.log('contrabarra')};
        // barra
        if (bt7 = bt5 = bt3){alert(bt3 + '  ganhou'); console.log('barra')};

    // colunas
        if(bt1 = bt4 = bt7){alert(bt1 + '  ganhou'); console.log('coluna1')};
        if(bt2 = bt5 = bt8){alert(bt8 + '   ganhou'); console.log('coluna2')};
        if(bt3 = bt6 = bt9){alert(bt9 + '   ganhou'); console.log('coluna3')};
           
    };


    $scope.showID = function(event){
        aide = event.target.id;
        if(c == 0){j = 0};
        if(c == 1){j = 1};
        if(c == 2){j = 0};
        if(c == 3){j = 1};
        if(c == 4){j = 0};
        if(c == 5){j = 1};
        if(c == 6){j = 0};
        if(c == 7){j = 1};
        if(c == 8){j = 0};
        if(c == 9){c = 0};  
        c++;

                        if(aide == "b1"){$scope.b1b = player[j];};
                        if(aide == "b2"){$scope.b2b = player[j];};
                        if(aide == "b3"){$scope.b3b = player[j];};
                        if(aide == "b4"){$scope.b4b = player[j];};
                        if(aide == "b5"){$scope.b5b = player[j];};
                        if(aide == "b6"){$scope.b6b = player[j];};
                        if(aide == "b7"){$scope.b7b = player[j];};
                        if(aide == "b8"){$scope.b8b = player[j];};
                        if(aide == "b9"){$scope.b9b = player[j];};

                        bt1 = jv.b1b;
                        bt2 = jv.b2b;
                        bt3 = jv.b3b;
                        bt4 = jv.b4b;
                        bt5 = jv.b5b;
                        bt6 = jv.b6b;
                        bt7 = jv.b7b;
                        bt8 = jv.b8b;
                        bt9 = jv.b9b;

       console.log('bt1 :' + bt1);
       console.log('bt2 : '+ bt2);
       console.log('bt3 : '+ bt3);
       
       
                        
    }
    
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

 /*if(c = 0){j = 0};
    if(c = 1){j = 1};
    if(c = 2){j = 0};
    if(c = 3){j = 1};
    if(c = 4){j = 0};
    if(c = 5){j = 1};
    if(c = 6){j = 0};
    if(c = 7){j = 1};
    if(c = 8){j = 0};*/
