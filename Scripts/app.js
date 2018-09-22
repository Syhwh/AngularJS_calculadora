var app= angular.module('Calculadora',[]);

app.controller('CalculadoraCtrl',function($scope){
    $scope.digitos='';
    $scope.respuesta=0;
    $scope.temp='';
    $scope.resp_temp=0;
    $scope.opera_temp='';
    $scope.numeros='';
    oper_signo='';
    operation=false;
    $scope.cadena=''
    $scope.agregar = function(digito){
        
        $scope.temp+=digito;//
        //agrego lo que introduce el usuario 
        if( control($scope.temp.substr($scope.temp.length-1,1),$scope.temp.substr($scope.temp.length-2,1))!=false){
            
            if (!(/([+ * '/'  -])+/.test(digito))){
                $scope.numeros+=digito;
                $scope.respuesta=$scope.numeros;}//mostar el numero que introduce en la respuesta
            
            else if ((/([+ * '/'  -])+/.test(digito)==true))
                {
                $scope.respuesta=''
                
                    if (operation==true){
                        $scope.cadena=$scope.digitos+$scope.numeros;
                        $scope.operacion(digito,$scope.numeros);
                        
                }
            else if( control($scope.temp.substr($scope.temp.length-1,1),$scope.temp.substr($scope.temp.length-2,1))!=false){
            
                $scope.digitos=$scope.numeros+digito;
                $scope.numeros='';
                operation=true;
            }
        }


    }
        
    
    }

    $scope.resultado= function(){
         
        if ($scope.resp_temp===0){
           
            $scope.respuesta=eval($scope.digitos + $scope.numeros)
            $scope.resp_temp=$scope.respuesta;
            $scope.digitos=''
            $scope.numeros=''            
        }
        else{
            $scope.respuesta=eval($scope.resp_temp +$scope.digitos.substr(-1,1)+ String($scope.numeros))
            $scope.resp_temp=$scope.respuesta;
            $scope.digitos=''
            $scope.numeros=''
        }

       // $scope.respuesta =eval($scope.cadena)
       
    }

    $scope.operacion =function(operator,valor){
        

        if ($scope.resp_temp===0){
            $scope.respuesta=eval($scope.digitos +valor)
            $scope.resp_temp=$scope.respuesta;
            $scope.digitos= $scope.cadena + operator;
            $scope.numeros=''
            }
        else if ((/([+ * / -])+/.test(operator)==true)){
                if ($scope.digitos==''){
                valor=$scope.resp_temp;
                $scope.digitos=valor+$scope.cadena+operator;
                }
            else{
               console.log("aqui")
                   $scope.resp_temp=eval($scope.resp_temp+$scope.digitos.substr(-1,1)+ String($scope.numeros));
                   $scope.respuesta=$scope.resp_temp;                  
                   $scope.resp_temp=$scope.respuesta;
                   $scope.digitos= $scope.cadena + operator;
                   $scope.numeros=''
            
                
            }        
        }
    
}

    $scope.reset= function(){
        $scope.digitos='';
        $scope.respuesta=0;
        $scope.temp='';
        $scope.resp_temp=0;
        $scope.opera_temp='';
        $scope.numeros='';
        oper_signo='';
        operation=false;
        $scope.cadena=''
     }

    function control(a,b){
        if (a==b && /([+ * / . -])+/.test(b) ){
            return false;
        }
        else if(/([+ * / . -])+/.test(a)&&/([+ * / . -])+/.test(b) ){
            return false;
        }
    }
});
