var express = require('express');
var app = express();

var five = require("johnny-five");
var board = new five.Board({port:'COM3'});

var led_pin = 13;
var led;
board.on("ready", function() {
	led = new five.Led(led_pin);
});
app.post('/api/led/ligar', function (req, res) {
  led.on();
  res.send('Led ligado');
});
app.post('/api/led/desligar',function(req,res){
	led.off();
	res.send('Led desligado');  
});

api.get("/api/temperatura/obter",function(req,res){
  var controle = false;
var temperature = new five.Thermometer({
    controller: "LM35",
    pin: "A0"
  });
  temperature.on('change',function(){
    
    if(!controle){
      res.send(this.celsius+ 'ºC');
      controle = true;
    }
    
  });
});

app.listen(3000, function () {
  console.log('Servidor rodando na porta 3000');
});