var productos = new Array();
var totalillo=0  ;
var caca = 0;
var checked = 0;
      
      /*if (document.getElementById('cosako'.checked))
        {
            alert('checkbox1 esta seleccionado');
        }*/
function saludar(){
            //let pass = document.getElementById("caca").value;
    var checkbox0 = document.getElementById('cosako');
        checkbox0.addEventListener("change", validaCheckbox, false);
        {
            var checked = checkbox0.checked;
            if(checked){
                caca = caca + 130;
                //alert(caca);
            }
        }

    var checkbox1 = document.getElementById('Skyy');
        checkbox1.addEventListener("change", validaCheckbox, false);
        {
            var checked = checkbox1.checked;
            if(checked){
                caca = caca + 40;
                //alert(caca);
            }
        }
        
    var checkbox2 = document.getElementById('Kraken');
        checkbox2.addEventListener("change", validaCheckbox, false);
        
        {
            var checked = checkbox2.checked;
            if(checked){
                caca = caca + 250;
                //alert(caca);
            }
        }
    var checkbox3 = document.getElementById('Azul');
        checkbox3.addEventListener("change", validaCheckbox, false);
        
        {
            var checked = checkbox3.checked;
            if(checked){
                caca = caca + 50;
                //alert(caca);
            }
        }
    var checkbox4 = document.getElementById('XX');
        checkbox4.addEventListener("change", validaCheckbox, false);
        function validaCheckbox()
        {
            var checked = checkbox4.checked;
            if(checked){
                caca = caca + 55;
                //alert(caca);
            }
        }
         
    alert("El total de los productos es: " + caca);
}


    function saludarConClase(){
    let elemento = document.getElementsByClassName("totalillo");
    console.log(elemento)
    }

    

    