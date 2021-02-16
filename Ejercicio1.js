function LanzaDados() {
    // Obtener la referencia del elemento body
    body = document.getElementById("tabla");

    // Crea un elemento <table>
    tabla   = document.createElement("table");

    //primera tirada
    var x = Math.floor(Math.random()*(5+1)+1);
    var y = Math.floor(Math.random()*(5+1)+1);
    var contador=0;
    var total = x+y;
    document.getElementById("dice1").innerHTML= x;
    document.getElementById("dice2").innerHTML= y;
    document.getElementById("sum").innerHTML= total;

    // Crea las celdas
    for (var f = 0; f < 1; f++) {
      // Crea las filas de la tabla
      filas = document.createElement("tr");
 
      for (var c = 0; c < 36000; c++) {
          table = [];
          x = Math.floor(Math.random()*(5+1)+1);
          y = Math.floor(Math.random()*(5+1)+1);
          sum = x + y
          table.push(sum);
      
        // Crea un elemento <td>
        celda = document.createElement("td");
        textcel = document.createTextNode(table);
        celda.appendChild(textcel);
        filas.appendChild(celda);
        //busca si coincide con la primera tirada
        if ( table == total) {
          celda.style.background = "green";
          contador++;
        }
    }
      tabla.appendChild(filas);
  }
  window.alert("El resultado aparece "+contador+ "veces en 36.000 tiradas");
  body.appendChild(tabla);
  tabla.setAttribute("border", "2");
}
