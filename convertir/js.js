function convert() {
  var df = document.getElementById("fahre").value;//recibe de hatml
  var celsius = 5/9*(df - 32);
  document.getElementById("respuesta").innerHTML=celsius;//muestra en html
  
}
