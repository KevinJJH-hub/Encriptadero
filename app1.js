let resultado = ''


function clickEncriptar(){
    let textoDesencriptado = document.getElementById("textoUsuario").value;
    console.log(textoDesencriptado);
    textoDesencriptado = textoDesencriptado.replaceAll("e","enter");
    textoDesencriptado = textoDesencriptado.replaceAll("i","imes");
    textoDesencriptado = textoDesencriptado.replaceAll("a","ai");
    textoDesencriptado = textoDesencriptado.replaceAll("o","ober");
    textoDesencriptado = textoDesencriptado.replaceAll("u","ufat");
    resultado = textoDesencriptado
    console.log(resultado);

    mostrarTexto(resultado);
}

mostrarTexto(resultado);


function clickDesencriptar(){
    let textoEncriptado = document.getElementById("textoUsuario").value;
    console.log(textoEncriptado);
    textoEncriptado = textoEncriptado.replaceAll("enter","e");
    textoEncriptado = textoEncriptado.replaceAll("imes","i");
    textoEncriptado = textoEncriptado.replaceAll("ai","a");
    textoEncriptado = textoEncriptado.replaceAll("ober","o");
    textoEncriptado = textoEncriptado.replaceAll("ufat","u");
    resultado = textoEncriptado
    
    mostrarTexto(resultado);
}


function mostrarTexto(resultado){

    if(resultado==''){

        //si no se escribe nada entonces. Pon imagen, y cuadros de texto
        document.getElementById("imagenBuscandoTexto").style.display='block';
        document.getElementById("textoBuscando1").style.display='block';
        document.getElementById("textoBuscando2").style.display='block';

        //adenas desabilita el resultado y el boton copia
        //desabilitamos el resultado y el boton copia

        document.getElementById("botonDeCopia").hidden = true
        document.getElementById("resultados").hidden= true

        document.getElementById("resultados").style.display







    }   else{

        document.getElementById("resultados").hidden= false


    //primero desabilita los elementos imagen y encabezado, dejando solo el parrafo
    document.getElementById("imagenBuscandoTexto").style.display='none';
    document.getElementById("textoBuscando1").style.display='none';
    document.getElementById("textoBuscando2").style.display='none';


    //despliega el resultado en la caja
    let resultado1 = document.getElementById("resultados")
    resultado1.innerHTML = resultado
   

    //muestra el boton copiar
    document.getElementById("botonDeCopia").removeAttribute('hidden');

            }

}


function copiarContenido() {
    let textoCopiado = document.getElementById("resultados").innerText;
    navigator.clipboard.writeText(textoCopiado).then(function() {
        alert('Texto copiado al portapapeles!');
      }).catch(function(error) {
        console.error('Error al copiar el texto: ', error);
      });
    
    
}