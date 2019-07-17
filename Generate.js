const desde= document.getElementById("txtDesde");
const hasta= document.getElementById("txtHasta");
const btnGenerar=document.getElementById("btnGenerar");
const respuesta=document.getElementById("res");
const txtBitacoraC=document.getElementById("txtBitacora");



//Generar numero aleatorio entre los rangos indicados.
var BitacoraBox=[];



function getRandomInt() {
    var min, max;
    min=Number(desde.value);
    max=Number(hasta.value)+1;
    

    if(min==0 || max==0)
    {
        alert('Llenar ambos campos')
    }
    else
    {

        if(BitacoraBox.toString() =="")
        {
            respuesta.textContent= (Math.floor(Math.random() * (max - min)) + min);
            BitacoraBox.push(respuesta.textContent);
            txtBitacoraC.textContent=BitacoraBox;
            console.log('g');
        }
        else
        {
            

            function VerificarRepetidos(){

                //seguir
            var nr;
            var ban;
            nr=Number(Math.floor(Math.random() * (max - min)) + min);
            for (var i = 0; i < BitacoraBox.length; i++) {
               
                if(nr===Number(BitacoraBox[i]))
                {
                  
                      ban="1";
                      break;
                      
                }
                else
                {
                 
                    ban="0";
                }

                
             }
             
             if(ban=="1")
             {
               
                VerificarRepetidos();
                
             }
             else
             {
                  respuesta.textContent= nr;
                  BitacoraBox.push(respuesta.textContent);
                  txtBitacoraC.textContent=BitacoraBox;
             }
     

            }

            VerificarRepetidos();

            if(Number(hasta.value)==Number(BitacoraBox.length))
            {
              
                txtBitacoraC.textContent='Ya se usaron todos los números del rango!!! reinicie';
                
            }
           
        }
       
    }
   
  
  }

  btnGenerar.addEventListener('click', getRandomInt)

