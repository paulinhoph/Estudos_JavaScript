// ==================================//
// var valor=10.3;
// var mt=Math.ceil(valor);
// document.write(mt)
// const paulo="paulo henrique";

// ==================================//
// document.write(paulo);
// var  curso="programaçao web";
// var js="javascript";
// const  separador=" - ";
// var nome=prompt("digite seu nome",);
// document.write(nome);
// alert(nome);

// ==================================//
// var  nome=prompt("Digite seu","nome aki");
// var res=confirm(nome+"Deseja continuar?");
// alert(res);

// document.write(res);

// ==================================//
// var v1,v2,tx1,tx2;]
// v1=10;
// v2=10;
// tx1="A Certou Mzeravel!!";
// tx2="Erro Miseravel!!!";
// if(v1 == v2){
//   // document.write(tx1);
//   alert(tx1)
// }
// else{
//   // document.write(tx2);
//   alert(tx2)
// }

// ==================================//
// var pontos=72;
// var energia=30;

// if (((pontos>=30)&&(pontos<=40)&&(energia>=40))||((pontos>=70)&&(pontos<=80)&&(energia>=40))){
// 	document.write("Você Ganhou")
// }else{
// 	document.write("Você Perdeu")
// }

// ==================================//
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

// ==================================//

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

// ==================================//
	var pos,msg,pontos;
	pontos= 1000;

	if (pontos >= 1000){
		pos=1;
	}else if (pontos >= 800) {
		pos=2;
	}else if (pontos >= 600) {
		pos=3;
	}
	else{
		pos=0;
	}


	switch(pos){
		case 1:
				msg="primeiro lugar<br>medalha de ouro";
				break;
		case 2:
				msg="segundo lugar<br>medalha de prata";
				break;
		case 3:
				msg="terceiro lugar<br>medalha de bronze";
				break;
		default:
				msg="nao foi ao podio <br> nao obiteve medalha";
	}
	switch(pos){
		case 1:
		case 2:
		case 3:
			msg+="<br>subiu ao podio";
			break;
		default:
			msg+="<br>nao obiteve colocação";
		
	}

	document.write(msg);
