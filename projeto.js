
var atributos = document.getElementById('atributos1')
atributos.addEventListener('mouseenter', entrar)
function entrar(){
  atributos.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/atributosfogo.png'
}
atributos.addEventListener('mousedown', sair)
function sair() {
  atributos.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/Nova%20pasta/fogomine (1).png'
}
var atributos2 = document.getElementById('atributos2')
atributos2.addEventListener('mouseenter', entrara)
function entrara(){
  atributos2.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/atributosagua.png'
}
atributos2.addEventListener('mousedown', saira)
function saira() {
  atributos2.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/Nova%20pasta/aguamine.png'
}
var atributos3 = document.getElementById('atributos3')
atributos3.addEventListener('mouseenter', entrarb)
function entrarb(){
  atributos3.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/atributosterra.png'
}
atributos3.addEventListener('mousedown', sairb)
function sairb() {
  atributos3.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/Nova%20pasta/terramine.png'
}
var atributos4 = document.getElementById('atributos4')
atributos4.addEventListener('mouseenter', entrarc)
function entrarc(){
  atributos4.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/atributosar.png'
}
atributos4.addEventListener('mousedown', sairc)
function sairc() {
  atributos4.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/Nova%20pasta/armine.png'
}

var i
var vida
var dano
var vida2
var dano2
var ataqueforte0
var ataqueforte1
var pers1 
var pers2 
pers1 = 0
pers2 = 0 
vida = 0
dano = 0
vida2 = 0
dano2 = 0 
i = 1
j = 1
ataqueforte0 = 0
ataqueforte1 = 0
var bot = document.getElementById('bota')
    bot.addEventListener('click', escolherpersonagem)
var terminal = document.getElementsByClassName('botões')[0]
var seleção = document.getElementsByTagName('main')[0]
var back = document.getElementsByTagName('body')[0]
var coração1 = document.getElementsByClassName('corações')[0]
var coração2 = document.getElementsByClassName('corações')[1]
var pers = document.getElementById('pers')
function escolherpersonagem(){
var play1 = Number(document.getElementsByName('console1')[0].value)
var play2 = Number(document.getElementsByName('console2')[0].value)
pers1 = play1
pers2 = play2
seleção.innerHTML = '<h1>COMEÇAR</h1>'
var person1 = document.getElementById('personagem1')
var person2 = document.getElementById('personagem2')
back.style.backgroundImage = 'url(https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/back3gif.gif)'
coração1.innerHTML = '<img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png">'
coração2.innerHTML = '<img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png">'
if (play1 == 1){
  vida = 400;
  dano = 75;
  ataqueforte0 = 95;
  person1.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/Nova%20pasta/fogomine (1).png'
} else{} 
if(play1 == 2){
  vida = 500;
  dano = 50;
  ataqueforte0 = 70;
  person1.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/Nova%20pasta/aguamine.png'
} 
else {}
if(play1 == 3){
  vida = 600;
  dano = 55;
  ataqueforte0 = 75;
 person1.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/Nova%20pasta/terramine.png'
}
else {} 
if( play1 == 4){
  vida = 700;
  dano = 40;
  ataqueforte0 = 60; 
  person1.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/Nova%20pasta/armine.png'
} 
if (play2 == 1){
  vida2 = 400;
  dano2 = 75;
  ataqueforte1 = 95
  person2.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/Nova%20pasta/fogomine1.png'
}
else {}
if(play2 == 2){
  vida2 = 500
  dano2 = 50
  ataqueforte1 = 70
  person2.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/Nova%20pasta/aguamine2.png'
} else {}
if( play2 == 3){
  vida2 = 600;
  dano2 = 55;
  ataqueforte1 = 75
  person2.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/Nova%20pasta/terramine1.png'
} else {} 
if (play2 == 4){
  vida2 = 700
  dano2 = 40
  ataqueforte1 = 60
  person2.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/Nova%20pasta/armine1.png'
}
terminal.innerHTML = `<div id = "seleção"><div class = "pontos"><p class = "pontos1">Vida: ${vida}</p><p class = "pontos1">Energia: ${i}</p></div><div class = "pontos"><p class = "pontos1">Vida: ${vida2}</p><p class = "pontos1">Energia: ${j}</p></div></div>`
pers.innerHTML = `<h2></h2>`
}
var ação = document.getElementById('ação1')
var a = document.getElementById('resp')

var botao = document.getElementsByClassName('botões')[1]
var botao2 = document.getElementsByClassName('botões')[2]
function vencedor() {
  if(vida < 0 || vida2 < 0){
    seleção.innerHTML = '<h1>PARABÉNS</h1>'
    var telavenc = document.getElementById('article')
    telavenc.style.backgroundImage = `url(https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/vencedor.gif)`
  botao.innerHTML = `<p>Fim da Partida</p>`
  botao2.innerHTML = `<p>Fim da Partida</p>`
  terminal.innerHTML = `<div id = "seleção"><div class = "pontos"><p class = "pontos1">Vida: ${vida}</p><p class = "pontos1">Energia: ${i}</p></div><div class = "pontos"><p class = "pontos1">Vida: ${vida2}</p><p class = "pontos1">Energia: ${j}</p></div></div>
  <h1>PARTIDA ENCERRADA</h1>`
    if (vida > 0) {
      if(pers1 == 1){
    telavenc.innerHTML = `<article><img src ="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/fogominefrentefinal.gif" id = "win"></article>`
  }
    else if( pers1 == 2){
      telavenc.innerHTML = `<article><img src = "https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/aguaminefrente.gif" id = "win"></article>`
    } else if (pers1 == 3){
      telavenc.innerHTML = `<article><img src = "https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/terraminefrente.gif" id = "win"></article>`
    } else if(pers1 == 4){
      telavenc.innerHTML = `<article><img src = "https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/arfrente.gif" id= "win"></article>`
    }
    }
    if (vida2 > 0) {
      if(pers2 == 1){
    telavenc.innerHTML = `<article><img src ="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/fogominefrentefinal.gif" id="win"></article>`}
    else if( pers2 == 2){
      telavenc.innerHTML = `<article><img src = "https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/aguaminefrente.gif" id="win"></article>`
    } else if (pers2 == 3){
      telavenc.innerHTML = `<article><img src ="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/terraminefrente.gif" id = "win"></article>`
    } else if(pers2 == 4){
      telavenc.innerHTML = `<article><img src = "https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/arfrente.gif" id = "win"></article>`
    }
    }
  }
}
function ataque(){
      vida2 -= dano
      if(pers1 == 1){
       ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/fogoataquea.gif'  
      } else if (pers1 == 2){
        ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/aguaataquea.gif'
      } else if (pers1 == 3){
        ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/ataqueterraa1.gif'
      } else if(pers1 == 4){
        ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/araataquea.gif'
      } 
      i++ 
      a.innerHTML = `personagem ${pers1} vida: ${vida} e personagem ${pers2} vida: ${vida2}`
      botao.innerHTML = `<p>Aguarde o adversário...</p>`
      botao2.innerHTML = `<input type="button" value="J" onclick= "ataque2()">
      <input type="button" value="K" onclick="descanso2()">
      <input type="button" value="L" onclick="ataqueforte2()">`
      terminal.innerHTML = `<div id = "seleção"><div class = "pontos"><p class = "pontos1">Vida: ${vida}</p><p class = "pontos1">Energia: ${i}</p></div><div class = "pontos"><p class = "pontos1">Vida: ${vida2}</p><p class = "pontos1">Energia: ${j}</p></div></div>`
      coração1.innerHTML = '<img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png">'
      coração2.innerHTML = '<img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png"><img src="https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/coração2.png">'
      vencedor();
}
function ataque2(){
  vida -= dano2
  if(pers2 == 1){
   ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/fogoataquea1.gif'  
  } else if (pers2 == 2){
    ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/aguaataque2.gif'
  } else if (pers2 == 3){
    ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/ataqueterraa.gif'
  } else if(pers2 == 4){
    ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/araataquea2.gif'
  }
  j++
  a.innerHTML = `personagem ${pers1} vida: ${vida} e personagem ${pers2} vida: ${vida2}`
  botao2.innerHTML = `<p>Aguarde o adversário...</p>`
  botao.innerHTML = `<input type="button" value="A" onclick="ataque()">
      <input type="button" value="B" onclick="descanso()">
      <input type="button" value="C" onclick="ataqueforte()">`
  terminal.innerHTML = `<div id = "seleção"><div class = "pontos"><p class = "pontos1">Vida: ${vida}</p><p class = "pontos1">Energia: ${i}</p></div><div class = "pontos"><p class = "pontos1">Vida: ${vida2}</p><p class = "pontos1">Energia: ${j}</p></div></div>`
  vencedor();
}
function descanso(){
      botao.innerHTML = `<p>Aguarde o adversário...</p>`
      botao2.innerHTML = `<input type="button" value="J" onclick= "ataque2()">
      <input type="button" value="K" onclick="descanso2()">
      <input type="button" value="L" onclick="ataqueforte2()">`
  i += 2
  terminal.innerHTML = `<div id = "seleção"><div class = "pontos"><p class = "pontos1">Vida: ${vida}</p><p class = "pontos1">Energia: ${i}</p></div><div class = "pontos"><p class = "pontos1">Vida: ${vida2}</p><p class = "pontos1">Energia: ${j}</p></div></div>`
}
function descanso2(){
  j += 2 
  botao2.innerHTML = `<p>Aguarde o adversário...</p>`
  botao.innerHTML = `<input type="button" value="A" onclick="ataque()">
      <input type="button" value="B" onclick="descanso()">
      <input type="button" value="C" onclick="ataqueforte()">`
  terminal.innerHTML = `<div id = "seleção"><div class = "pontos"><p class = "pontos1">Vida: ${vida}</p><p class = "pontos1">Energia: ${i}</p></div><div class = "pontos"><p class = "pontos1">Vida: ${vida2}</p><p class = "pontos1">Energia: ${j}</p></div></div>`
}

function ataqueforte(){
  if(i >= 3){
  vida2 -= ataqueforte0
  if (pers1 == 1){
    ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/ataquefortefogoa.gif'  
  } else if (pers1 == 2){
    ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/ataqueforteaguaa.gif'  
  } else if (pers1 == 3){
    ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/ataqueforteterraa.gif'  
  } else if(pers1 == 4) {
    ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/ataquefortear1.gif'  
  }
  i -= 2 
  botao.innerHTML = `<p>Aguarde o adversário...</p>`
  botao2.innerHTML = `<input type="button" value="J" onclick= "ataque2()">
      <input type="button" value="K" onclick="descanso2()">
      <input type="button" value="L" onclick="ataqueforte2()">`
  terminal.innerHTML = `<div id = "seleção"><div class = "pontos"><p class = "pontos1">Vida: ${vida}</p><p class = "pontos1">Energia: ${i}</p></div><div class = "pontos"><p class = "pontos1">Vida: ${vida2}</p><p class = "pontos1">Energia: ${j}</p></div></div>`
  
}else{
  terminal.innerHTML = `<div id = "seleção"><div class = "pontos"><p class = "pontos1">Vida: ${vida}</p><p class = "pontos1" style = "background-color: rgb(255, 63, 63)">ENERGIA INSUFICIENTE<br>Energia: ${i}</p></div><div class = "pontos"><p class = "pontos1">Vida: ${vida2}</p><p class = "pontos1"> Energia: ${j}</p></div></div>`
}
vencedor();
} 
function ataqueforte2(){
  vida -= ataqueforte1
  if(j >= 3){
  if (pers2 == 1){
    ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/ataquefortefogoa1.gif'  
  } else if (pers2 == 2){
    ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/ataqueforteaguaa1.gif'  
  } else if (pers2 == 3){
    ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/ataqueforteterraa1.gif'  
  } else if (pers2 == 4){
    ação.src = 'https://ggabriel-ss.github.io/Jogo_batalha-/Nova%20pasta/ataquefortear2.gif'  
  }
  j -= 2
  botao2.innerHTML = `<p>Aguarde o adversário...</p>`
  botao.innerHTML = `<input type="button" value="A" onclick="ataque()">
      <input type="button" value="B" onclick="descanso()">
      <input type="button" value="C" onclick="ataqueforte()">`
  terminal.innerHTML = `<div id = "seleção"><div class = "pontos"><p class = "pontos1">Vida: ${vida}</p><p class = "pontos1">Energia: ${i}</p></div><div class = "pontos"><p class = "pontos1">Vida: ${vida2}</p><p class = "pontos1">Energia: ${j}</p></div></div>`
  
}else{
  terminal.innerHTML = `<div id = "seleção"><div class = "pontos"><p class = "pontos1">Vida: ${vida}</p><p class = "pontos1" >Energia: ${i}</p></div><div class = "pontos"><p class = "pontos1">Vida: ${vida2}</p><p class = "pontos1" style = "background-color: rgb(255, 63, 63)"> ENERGIA INSUFICIENTE <br> Energia: ${j}</p></div></div>`
}vencedor();
}
var escudo1 = document.getElementById('escudo1')
var escudo2 = document.getElementById('escudo2')
escudo1.addEventListener('click', reforçar)
escudo2.addEventListener('click', reforçar2)
function reforçar(){
  if(i > 1){
  --i
  vida += (vida*0.15)
  resp.innerHTML = `+50 adicionado na vida de ${pers1}`
  terminal.innerHTML = `<div id = "seleção"><div class = "pontos"><p class = "pontos1">Vida: ${vida}</p><p class = "pontos1" >Energia: ${i}</p></div><div class = "pontos"><p class = "pontos1">Vida: ${vida2}</p><p class = "pontos1">Energia: ${j}</p></div></div>`  
} else{
  resp.innerText = 'Sem suportes. Você ficará sem energia'
} 
}

function reforçar2(){
  if(j > 1){
  --j
  vida2 += (vida*0.15)
  resp.innerHTML = `+50 adicionado na vida de ${pers2}`
  terminal.innerHTML = `<div id = "seleção"><div class = "pontos"><p class = "pontos1">Vida: ${vida}</p><p class = "pontos1" >Energia: ${i}</p></div><div class = "pontos"><p class = "pontos1">Vida: ${vida2}</p><p class = "pontos1">Energia: ${j}</p></div></div>` 
  } else{
    resp.innerText = 'Sem suportes. Você ficará sem energia'
  }
}
var espada = document.getElementById('espada1')
var espada2 = document.getElementById('espada2')
espada.addEventListener('click', danoalt)
espada2.addEventListener('click', danoalt2)
function danoalt(){
  if(i > 1){
  --i
  dano += (dano*0.25) 
  resp.innerHTML = `${dano}`
  terminal.innerHTML = `<div id = "seleção"><div class = "pontos"><p class = "pontos1">Vida: ${vida}</p><p class = "pontos1" >Energia: ${i}</p></div><div class = "pontos"><p class = "pontos1">Vida: ${vida2}</p><p class = "pontos1">Energia: ${j}</p></div></div>`
}else{
  resp.innerText = 'Sem suportes. Você ficará sem energia'
}
}
function danoalt2(){
  if(j > 1){
  --j
  dano2 += (dano2*0.25) 
  resp.innerHTML = `${dano2}`
  terminal.innerHTML = `<div id = "seleção"><div class = "pontos"><p class = "pontos1">Vida: ${vida}</p><p class = "pontos1" >Energia: ${i}</p></div><div class = "pontos"><p class = "pontos1">Vida: ${vida2}</p><p class = "pontos1">Energia: ${j}</p></div></div>`
}else{
  resp.innerText = 'Sem suportes. Você ficará sem energia'
}
}
