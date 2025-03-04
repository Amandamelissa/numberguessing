function escolher_numero(){
    numeros_escolhidos = []
    document.getElementById('maior_ou_menor').innerText = ''
    document.getElementById("titulo_tentativas").innerText = ''
    document.getElementById("titulo_escolhidos").innerText = ''
    document.getElementById("titulo_nota").innerText = ''
    document.getElementById('nota').innerText = ''
    tentativas = 0
    document.getElementById("tentativas").innerText = ''
    document.getElementById("numeros_escolhidos").innerText = ''

    numero_computador = Math.floor( Math.random() * 100) + 1
    
}
var numeros_escolhidos = []
var tentativas = 0
function palpite(){
    if (tentativas => 1){
        document.getElementById("titulo_tentativas").innerText = 'numero de tentativas'
        document.getElementById("titulo_escolhidos").innerText = 'numeros escolhidos'
    }
    numero_cliente = document.getElementById('numero_cliente').value
    tentativas ++
    if(numero_cliente == numero_computador){
        var nota = 11 - tentativas
        if(nota <= 0){
            document.getElementById("titulo_nota").innerText = 'sua nota foi'
            document.getElementById('nota').innerText = 0
        }
        else{
            document.getElementById("titulo_nota").innerText = 'sua nota foi'
            document.getElementById('nota').innerText = nota
        }
        document.getElementById('maior_ou_menor').innerText ='voce ganhou'
        
    }  
    else{
        numeros_escolhidos.push(numero_cliente)
        document.getElementById("numeros_escolhidos").innerText = numeros_escolhidos
        document.getElementById("tentativas").innerText = tentativas
        if (numero_cliente < numero_computador){
            document.getElementById('maior_ou_menor').innerText ='seu palpite foi muito baixo'
        }
        else{
            document.getElementById('maior_ou_menor').innerText ='seu palpite foi muito alto'

        }
    }
}
