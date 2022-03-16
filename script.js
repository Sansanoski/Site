//const fecharMenu = document.getElementById('iconCloseMenuHeader');
//const abrirMenu = document.getElementById('iconOpenMenuheader');
//const listaMenu = document.getElementById('ulMenu')
//
//function openMenu (){
//    listaMenu.style.display = 'block'
//    fecharMenu.style.display = 'block'
//}
//function closeMenu (){
//    listaMenu.style.display = 'none'
//    fecharMenu.style.display = 'none'
//}
//
//
//
//
//const links = document.querySelectorAll('nav ul ' )
//
//
//function openAndClose(){
//    for(const link of links){
//        link.style.display = 'none'
//        fecharMenu.style.display = 'none'
//    }
//}
//
//
//
//// funcao para o aparecer o icone de voltar ao top ------
//
//const iconUp = document.getElementById('icon-up')
//
//window.addEventListener('scroll' , function (){
//    if(window.scrollY >= 560){
//        iconUp.style.visibility = 'visible'
//        iconUp.style.opacity = 1
//    }
//    else{
//        iconUp.style.visibility = 'hidden'
//        iconUp.style.opacity = 0
//    }
//})





 /// essas funcoes sao de aessibilidade  , para diminuir e aumentar as fonts 
 const texto1 = document.getElementById('texto')

 function aumentar(){
 
     if(texto1.style.fontSize <= "15px"){
         texto1.style.fontSize = "20px"
     }
     else if(texto1.style.fontSize == "20px"){
         texto1.style.fontSize = "25px"
     }
     else if (texto1.style.fontSize == "25px"){
         texto1.style.fontSize = "35px"
     }
     else if (texto1.style.fontSize == "35px"){
         texto1.style.fontSize = "45px"
     }
     
 }
 function diminuir(){
 
     if(texto1.style.fontSize >= "45px"){
         texto1.style.fontSize = "35px"
     }
     else if(texto1.style.fontSize == "35px"){
         texto1.style.fontSize = "25px"
     }
     else if (texto1.style.fontSize == "25px"){
         texto1.style.fontSize = "20px"
     }
     else if (texto1.style.fontSize == "20px"){
         texto1.style.fontSize = "15px"
     }
     
 }
 
 // funcao para a brir o drop down d apromocao 
 
 const promocao = document.getElementById('promocoes')
 function dropdown (){
     if(promocao.style.display == 'none'){
         promocao.style.display = 'flex'
     }else {
         promocao.style.display = 'none'
     }
 
 }
 
 
 
 /////// funcao para abriri e fechar o saiba mais 
 
 const saiba = document.getElementById('saiba-mais')
 
 function fecharSaibaMais(){
     if(saiba.style.display == 'none'){
         saiba.style.display = 'block'
     }
     else{
         saiba.style.display = 'none'
     }
 }
 