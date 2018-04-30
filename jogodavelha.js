var jvapp = angular.module("jvApp", ['ngSanitize']);

jvapp.controller('jvControl',['$scope', function($scope){
 
    var player = ["X","O"];
    var c = 0;
    var aide;
    var jv = $scope;
       
    var bt1 = 1;
    var bt2 = 2;
    var bt3 = 3;
    var bt4 = 4;
    var bt5 = 5;
    var bt6 = 6;
    var bt7 = 7;
    var bt8 = 8;
    var bt9 = 9;

    var x = new Image();
    x.src = "x-400.png"
    

  function reload(){
    window.location.reload();    
};

    
     $scope.clicktest = function(clickEvent){
//             console.log(bt1, bt2, bt3, bt4, bt5 ,bt6 , bt7, bt8 ,bt9);
                                if(jv.b1b != null ){bt1 = jv.b1b;};
                                if(jv.b2b != null ){bt2 = jv.b2b;};
                                if(jv.b3b != null ){bt3 = jv.b3b;};
                                if(jv.b4b != null ){bt4 = jv.b4b;};
                                if(jv.b5b != null ){bt5 = jv.b5b;};
                                if(jv.b6b != null ){bt6 = jv.b6b;};
                                if(jv.b7b != null ){bt7 = jv.b7b;};
                                if(jv.b8b != null ){bt8 = jv.b8b;};
                                if(jv.b9b != null ){bt9 = jv.b9b;};



         //linhas  
             if(bt1 === bt2 && bt1 === bt3 && bt1 !== null){alert(x + ' ganhou'); reload();};
            if (bt4 == bt5 && bt4 == bt6 && bt4 !== null){alert(bt4 + ' ganhou'); reload();};
            if (bt7 == bt8 && bt7 == bt9 && bt7 !== null){alert(bt7 + ' ganhou'); reload();};
            
            
        // contraBarra
            if (bt1 == bt5 && bt1 == bt9 && bt5 !== null){alert(bt5 + '  ganhou'); reload();};
            // barra
            if (bt7 == bt5 && bt7 == bt3 && bt7 !== null){alert(bt3 + '  ganhou'); reload();};
    
        // colunas
            if(bt1 == bt4 && bt1 == bt7 && bt1 !== null){alert(bt1 + '  ganhou'); reload(); };
            if(bt2 == bt5 && bt2 == bt8 && bt2 !== null){alert(bt8 + '   ganhou'); reload();};
            if(bt3 == bt6 && bt3 == bt9 && bt3 !== null){alert(bt9 + '   ganhou'); reload();};
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
    }
}]);

