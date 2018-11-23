// ========  Cnfirm   =========//
// var valor=10.3;
// var mt=Math.ceil(valor);
// document.write(mt)
// const paulo="paulo henrique";

// =======   alert    =========//
// document.write(paulo);
// var  curso="programaçao web";
// var js="javascript";
// const  separador=" - ";
// var nome=prompt("digite seu nome",);
// document.write(nome);
// alert(nome);

// ======   Prompt  ===========//
// var  nome=prompt("Digite seu","nome aki");
// var res=confirm(nome+"Deseja continuar?");
// alert(res);

// document.write(res);

// ====== IF ELSE Alert ==========//
// var v1,v2,tx1,tx2;]
// v1=10;
// v2=10;
// tx1="A Certou Mzeravel!!";
// tx2="Erro Miseravel!!!";
// if(v1 == v2){
//   // document.write(tx1);
//   alert(tx1)
// }else{
//   // document.write(tx2);
//   alert(tx2)
// }

// =======  Operadores Lógicos AND (&&) e OR (||)    ========//
// var pontos=72;
// var energia=30;

// if (((pontos>=30)&&(pontos<=40)&&(energia>=40))||((pontos>=70)&&(pontos<=80)&&(energia>=40))){
// 	document.write("Você Ganhou")
// }else{
// 	document.write("Você Perdeu")
// }

// ========  IF com múltiplos retornos   =========//
// var nota=100;
// var res;

// if(nota>60){
// 	res="aprovado";
// 	if(nota>=95){
// 			if (nota == 100) {
// 				res+="com exelencia";
// 			}else{
// 				res+=" com louvor";
// 			}
// 	}else{
// 			res+=" com nota normal";
// 	}	
// }else if(nota >= 40){
// 			res="recuperacao";
// }else{
// 	res="reprovado";
//  	if(nota >= 20){
// 		res+=" por nota baixa";
// }else{
// 	res+=" com louvor";
// 	}
// }	
// document.write(res);

// ====   IF aninhado    ====//

// var num=20;

// 	if (num > 10){
// 		res="Maior que 10";
// }
// else{ 
// 		res="Menor que 10";
		
// }
// 		document.write(res);
// 		alert(res);
		// 	res="Maior que 10";
		// else
		// 	res="Menor que 10";

		// document.write(res);

// ======   Switch case  ======//
	// var pos,msg,pontos;
	// pontos= 800;

	// if (pontos >= 1000){
	// 	pos=1;
	// }else if (pontos >= 800) {
	// 	pos=2;
	// }else if (pontos >= 600) {
	// 	pos=3;
	// }
	// else{
	// 	pos=0;
	// }


	// switch(pos){
	// 	case 1:
	// 			msg="primeiro lugar<br>medalha de ouro";
	// 			break;
	// 	case 2:
	// 			msg="segundo lugar<br>medalha de prata";
	// 			break;
	// 	case 3:
	// 			msg="terceiro lugar<br>medalha de bronze";
	// 			break;
	// 	default:
	// 			msg="nao foi ao podio <br> nao obiteve medalha";
	// }
	// switch(pos){
	// 	case 1:
	// 	case 2:
	// 	case 3:
	// 		msg+="<br>subiu ao podio";
	// 		break;
	// 	default:
	// 		msg+="<br>nao obiteve colocação";
		
	// }

	// document.write(msg);






// ======           DOM               ======//





// ======  DOM GetElemetsById  ======//
// console.log(
// 	   document.getElementById("time").innerHTML
// 	)
// ======  DOM GetElemetsByClassName  ======//
// console.log(
// 	document.getElementsByClassName("urso")[1]
// 	)
// ======  DOM GetElemetsByTagName  ======//
	// console.log(
	// 	document.getElementsByTagName("button")[0].innerHTML
	// 	)

// ======  DOM querySelector  ======//

// console.log(
// 	document.querySelector("teste2")
// 	)

// ======  DOM querySelectorAll ======//

	// console.log(
	// 	document.querySelectorAll(".teste")
	// 	)

	// console.log(
		// if (document.getElementById("pai").querySelectorAll(".filho")[0].length > 1)
		// 	console.log("oi")
		// )

// ======  DOM createElement ======//

	// console.log(
	// 	document.createElement("div")
	// )
	// var img = document.createElement("img");
	// img.src="https://picsum.photos/200/300";

	// var p = document.createElement("p");
	// p.innerHTML = "olá, Mundo"

	// console.log(
	// 	img,p
	// 	)

// ======  DOM  appendChild ======//

	// var versa = document.createElement("p");
	// versa.innerHTML = "versa";

	// var sentra = document.createElement("p");
	// sentra.innerHTML = "sentra";

	// document.getElementById("nissan").appendChild(versa)
	// document.getElementById("nissan").appendChild(sentra);

// ======  DOM  removeChild ======//

	// var versa = document.createElement("p");
	// versa.innerHTML = "versa";

	// var sentra = document.createElement("p");
	// sentra.innerHTML = "sentra";

	// document.getElementById("nissan").appendChild(versa)
	// document.getElementById("nissan").appendChild(sentra);

	// document.getElementById("nissan").removeChild(versa);


// ======  DOM  parentNode ======//

	// console.log(
	// 	document.querySelector(".elementaryos").parentNode.parentNode
	// 	)

// ======  DOM  variaveis ======//
	
	// var nome = "paulo";
	// nome = "outro paulo";

	// console.log(nome);

	// var nome = "pualo";
	// function teste(){
	// 	nome = "rafael"
	// }

	// teste();

	//  console.log(nome);

	// function teste(){
	// 	let nome = "paulo"
	// }
	// teste();

	// console.log(nome);
	// for( let i = 0);

    const nome = "paulo";

    nome = "rafael";

    console.log(nome);
