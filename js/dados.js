var t2 = document.getElementById("txt");
var t1 = document.getElementById("suma");
var lanzardados = document.getElementById("lanzar");
if(lanzardados) lanzardados.addEventListener("click", play, false);

var inicio = true;
var punto = false;
var dado1 = 0;
var dado2 = 0;
res=0;
suma=0;


function play(){

    if(inicio){
        inicio=false;
        dado1 = getNumRand(1,6);
        dado2 = getNumRand(1,6);
        suma = dado1 + dado2;

        document.getElementById("imgdado1").src="./img/Dados/"+dado1+".svg"
        document.getElementById("imgdado2").src="./img/Dados/"+dado2+".svg"
    
        t1.textContent = suma;

    

    if(suma == 2 || suma == 3 || suma == 12) t2.textContent = "PERDISTE";
    else if (suma == 7 || suma == 11) t2.textContent = "GANASTE";
    else
    {
      punto = true;
      t2.textContent = "PUNTO = " + suma;
    }
    }
  else if(punto){
    dado1 = getNumRand(1,6);
    dado2 = getNumRand(1,6);
    res = dado1 + dado2;
  

    document.getElementById("imgdado1").src="./img/Dados/"+dado1+".svg"
    document.getElementById("imgdado2").src="./img/Dados/"+dado2+".svg"

    t1.textContent = res;



    if(res == 7){
        t2.textContent = "PERDISTE";
        punto = false;
      }else if(res == suma){
        t2.textContent = "GANASTE";
        punto = false;
  }
    

    


    
   

}
}
