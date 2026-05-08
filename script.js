function mensagem() {

   let pergunta1 = Number(prompt("Bem-vinda ao site do Felipe\nDigite 1 para continuar"))

   while (pergunta1 != 1) {
      alert("Refaça")
      pergunta1 = Number(prompt("Digite 1 para continuar"))
   }

   let pergunta2 = ""
   let pergunta3 = ""

   while (pergunta2 != "2/8" || pergunta3 != "AZUL") {

      pergunta2 = prompt("Qual a data do nosso aniversário? EX: 3/5")

      pergunta3 = prompt("Qual a minha cor favorita? EX: PRETO. deve ser escrito tudo maiúsculo")

      if (pergunta2 != "2/8" || pergunta3 != "AZUL") {
         alert("ERROU 😡")
      }
   }

   document.getElementById("foto").src =
   "https://i.pinimg.com/236x/1e/16/67/1e1667028c4a1340a1f61d8f30dca039.jpg"

   let pergunta4 = prompt("Tu me ama?\nResposta com SIM ou NAO")

   if (pergunta4 != "SIM") {
      alert("MALDOSAAAAAA")
   } else {
      alert("E eu muito mais obviamente")
   }
}

mensagem()