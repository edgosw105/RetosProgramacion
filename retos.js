var btnReto1 = document.getElementById('btnReto1');
btnReto1.addEventListener("click", Reto1);

var btnReto2 = document.getElementById('btnReto2');
btnReto2.addEventListener("click", Reto2);

var btnReto3 = document.getElementById('btnReto3');
btnReto3.addEventListener("click", Reto3);

var btnReto4 = document.getElementById('btnReto4');
btnReto4.addEventListener("click", Reto4);

var btnReto5 = document.getElementById('btnReto5');
btnReto5.addEventListener("click", Reto5);

var btnReto6 = document.getElementById('btnReto6');
btnReto6.addEventListener("click", Reto6);

var resultado;
var numero1;
var numero2;

function Reto1()
{
    txtNumero1 = document.getElementById('txtNumero1');
    txtNumero2 = document.getElementById('txtNumero2');
    var Lb1 = document.getElementById('Lb1');
    Lb1.innerText = (txtNumero1.value * txtNumero2.value)
}

function Reto2()
{
  txtNumero1 = document.getElementById('txtNumero1_2');
  txtNumero2 = document.getElementById('txtNumero2_2');
  var Lb2 = document.getElementById('Lb2');
  resultado = (txtNumero1.value * txtNumero2.value);
  Lb2.innerText = resultado.toFixed(2);
}

function Reto3()
{
  txtNumero1 = document.getElementById('txtNumero1_3');
  var Lb3 = document.getElementById('Lb3');

  if (parseFloat(txtNumero1.value) > 20) {
      resultado = Math.sqrt(txtNumero1.value);
      Lb3.innerText = resultado.toFixed(2);
  }else
  {
      Lb3.innerText = "El Numero es menor a 20";
  }
}

function Reto4()
{
  txtNumero1 = document.getElementById('txtNumero1_4');
  var Lb4 = document.getElementById('Lb4');
  resultado = Math.PI * Math.pow(txtNumero1.value, 2);
  Lb4.innerText = resultado.toFixed(2)
}

function Reto5()
{
  txtNumero1 = document.getElementById('txtNumero1_5');
  txtNumero2 = document.getElementById('txtNumero2_5');
  var Lb5 = document.getElementById('Lb5');
  resultado = Math.PI * Math.pow(txtNumero1.value, 2) * txtNumero2.value;
  Lb5.innerText = resultado.toFixed(2);
}

function Reto6()
{
  txtNumero1 = document.getElementById('txtNumero1_6');
  txtNumero2 = document.getElementById('txtNumero2_6');
  var entero = Math.floor(txtNumero1.value/txtNumero2.value);
  var residuo = txtNumero1.value%txtNumero2.value;
  var Lb6 = document.getElementById('Lb6');
  Lb6.innerText = txtNumero1.value + " dividido entre " + txtNumero2.value + " es " + entero + " y sobra " + residuo;
}
