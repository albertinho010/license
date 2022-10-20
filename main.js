let edad = Number(prompt("Ingreso su edad"));
function licencia(edad) {
  console.log('Su edad es: ' + edad + ' años')
  if(edad >= 18){
    alert('Puedes obtener tu licencia de conducir');
    console.log('Puedes obtener tu licencia de conducir');
  }  
  else if (edad <=18 && edad >=15){
    alert('Solo puedes obtener un permiso de conducir, eres menor de edad');
    console.log('Solo puedes obtener un permiso de conducir');
  }
  else{
    alert('No puedes obtener tu licencia de conducir, eres menor de edad');
    console.log('No puedes obtener tu licencia de conducir');
  }
}

licencia(edad);


  
