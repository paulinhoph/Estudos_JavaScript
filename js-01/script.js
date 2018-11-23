
// ====== Document.Write("Introdução") ========//

// document.write("<p>Hello"+"Word<br>Java Script <br></p>");
// document.write(30+50);


// var nome = "<p><br><span>name:</span> Paulo henrique</p>";
// var nun = "<p> <br><span>ano:</span>2018</p>";
// cep = "<p><br><span>cep:</span>21061240</p>";
// idade = "<p><br><span>idade:</span>21</p>";

// var texto=nome+nun+idade+cep;
// document.write(texto);

// document.write(nome,nun,idade,cep);
// document.write(nun);
// document.write(idade);
// document.write(cep);


// ======  Variáveis  ===========//

	//var cor=new Array();
	// var cor=[];


	// cor.push("Preto");
	// cor.push("Vermelho");
	// cor.push("Verde");
	// cor.push("Branco");
	// cor.push("Roxo");
	// cor.push("Azul");


	// cor[0]="Vermelho";
	// cor[1]="Azul";
	// cor[2]="Preto";
	// cor[3]="Verde";
	// cor[4]="Roxo";			

	// document.write(cor[2]);

// ====== Costantes  ========//


	// var itens=["Faca","Pedra","Corda","Lanterna","Luvas","Chave de fenda","Arame"];
	// var mochila=[];

	// mochila.push("Faca");
	// mochila.push("Corda");
	// mochila.push("Pedreira");
	// mochila.push("Chave");
	// mochila.push("Lanterna");
	// mochila.unshift("Pedra");


	// mochila.pop();


	// mochila.shift();
	// mochila.splice(2);

	// document.write(mochila[0]+"<br>");
	// document.write(mochila[1]+"<br>");
	// document.write(mochila[2]+"<br>");
	// document.write(mochila[3]+"<br>");
	// document.write(mochila[4]+"<br>");
	// document.write(mochila[5]+"<br>");

// ========  Arry/ Vetor - Métodos de Calsse =========//

	// var  mochila=[],mochila1=[],mochila2=[],pos;


	// mochila1.push("Faca");
	// mochila1.push("Corda");
	// mochila1.push("Pedreira");
	// mochila1.push("Chave");
	// mochila1.push("Lanterna");
	// mochila1.push("Pedra");
	// mochila1.push("Mouse");


	// mochila2.push("Faca");
	// mochila2.push("Corda");
	// mochila2.push("Pedreira");
	// mochila2.push("Chave");
	// mochila2.push("Lanterna");
	// mochila2.push("Pedra");
    
 //    mochila1.pop();

	// mochila=mochila1.concat(mochila2);

	// document.write(mochila[0]+"<br>");
	// document.write(mochila[1]+"<br>");
	// document.write(mochila[2]+"<br>");
	// document.write(mochila[3]+"<br>");
	// document.write(mochila[4]+"<br>");
	// document.write(mochila[5]+"<br>");
	// document.write(mochila[6]+"<br>");
	// document.write(mochila[7]+"<br>");
	// document.write(mochila[8]+"<br>");
	// document.write(mochila[9]+"<br>");
	// document.write(mochila[10]+"<br>");
	// document.write(mochila[11]+"<br>");

	// document.write("Tamanho da mochila 1:" + mochila1.length +"<br>");
	// document.write("Tamanho da mochila 2:" + mochila2.length +"<br>");
	// document.write("Tamanho da mochila:" + mochila.length +"<br>");

// =======  IF - ELSE ALERT =============//

	// var num=[5,8,4,9,7,6,3,0,2,1];
	// var numeros;

	// num.sort();
	// num.reverse();

	// numeros=num.join();

	// document.write(numeros+"<br>");

	// document.write(num[0]+"<br>");
	// document.write(num[1]+"<br>");
	// document.write(num[2]+"<br>");
	// document.write(num[3]+"<br>");
	// document.write(num[4]+"<br>");
	// document.write(num[5]+"<br>");
	// document.write(num[6]+"<br>");
	// document.write(num[7]+"<br>");
	// document.write(num[8]+"<br>");
	// document.write(num[9]+"<br>");

 // 	mochila.push("Faca");
	// mochila.push("Corda");
	// mochila.push("Pedreira");
	// mochila.push("Chave");
	// mochila.push("Lanterna");
	// mochila.push("Pedra");


	// pos=mochila.indexOf("mareta");

	// if(pos < 0){
	// 	alert("item não está na mochula");
	// }else{
	// 	alert("item está na mochila",+pos);	
	// }

// =======  Trabalhando com Matriz  ========//


	// var mochila1=new Array();


	// var item1=["Pedra",3],
	// 	item2=["Faca",19],
	// 	item3=["Lanterna",10],
	// 	item4=["Luvas",8];

	// mochila1.push(item1);
	// mochila1.push(item2);
	// mochila1.push(item3);
	// mochila1.push(item4);


	// document.write(mochila1[0][0] + " - " + mochila1[0][1] + "<br>");
	// document.write(mochila1[1][0] + " - " + mochila1[1][1] + "<br>");
	// document.write(mochila1[2][0] + " - " + mochila1[2][1] + "<br>");
	// document.write(mochila1[3][0] + " - " + mochila1[3][1] + "<br>");

// =======  Jogo   ========//	

// segundos = 7;
// function contagem_tempo(){	             
	   
// document.contador.segundos.value = segundos; 
// segundos = segundos - 1;

// if (segundos == -1) {
// segundos = 0;
// }   
               
// timerID = setTimeout("contagem_tempo()",1000);   
// }   


// =======  Contagem  ========//

'use strict'
			var min = 60,
				seg = 1;

			function start() {

				if((min == 60) && (seg == 1)){
					relogio()
				}
			}

			function relogio(){		

				if((min > 0) || (seg > 0)){				
					if(seg == 0){					
						seg = 59;					
						min = min - 1	
					}				
					else{					
						seg = seg - 1;				
					}				
					if(min.toString().length == 1){					
						min = "0" + min;				
					}				
					if(seg.toString().length == 1){					
						seg = "0" + seg;				
					}				
					document.getElementById('spanRelogio').innerHTML = min + ":" + seg;				
					setTimeout('relogio()', 1000);		
					setCookie('tempo',min + ":" + seg,30)
				}			
				else{				
					document.getElementById('spanRelogio').innerHTML = "00:00";		
					min = 1;
					seg = 1;	
				}		
			}	

			function setCookie(cname,cvalue,exdays) {
			    var d = new Date();
			    d.setTime(d.getTime() + (exdays*24*60*60*1000));
			    var expires = "expires=" + d.toGMTString();
			    document.cookie = cname+"="+cvalue+"; "+expires;
			}

			function getCookie(cname) {
			    var name = cname + "=";
			    var ca = document.cookie.split(';');
			    for(var i=0; i<ca.length; i++) {
			        var c = ca[i];
			        while (c.charAt(0)==' ') {
			            c = c.substring(1);
			        }
			        if (c.indexOf(name) == 0) {
			            return c.substring(name.length, c.length);
			        }
			    }
			    return "";
			}

			function checkCookie() {

			    var cookie = getCookie("tempo");

			    if ( cookie != "" ) {

					var tempo = getCookie('tempo').split(':');
					min = tempo[0];
					seg = tempo[1];

					relogio();
			    } 

			}