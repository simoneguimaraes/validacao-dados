let numbers = document.getElementById('txtnumber')
let list = document.getElementById('txtlist')
let result = document.getElementById('txtresult')
let numbersArr = []

function isNumero(num) {
    if(Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(num, lista) {
    if(lista.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(numbers.value) && !inLista(numbers.value, numbersArr)) {
        numbersArr.push(Number(numbers.value))
        let item = document.createElement('option')
        item.text = `Valor adicionado: ${numbers.value}`
        list.appendChild(item)
        result.innerHTML = ''
    } else {
        window.alert('Erro. Valor inválido ou já adicionado na lista.')
    }
    numbers.value = ''
    numbers.focus()
}


function finalizar() {
    if (numbersArr == 0) {
        window.alert('Erro. Adicione valores na lista.')
    } else {
        result.innerHTML = ''

        let totalNum = numbersArr.length 
        result.innerHTML += `<p>Foram cadastrados <strong>${totalNum}</strong> números.</p>`
        
        numbersArr.sort()
        let maiorNum = numbersArr[numbersArr.length - 1]
        result.innerHTML += `<p>O maior valor cadastrado foi <strong>${maiorNum}</strong>.</p>`
    
        let menorNum = numbersArr[0]
        result.innerHTML += `<p>O menor valor cadastrado foi <strong>${menorNum}</strong>.</p>`
    
        let somaNum = 0
        for(let i in numbersArr) {
            somaNum += numbersArr[i]
        }
        result.innerHTML += `<p>Somando todos os valores, o resultado é <strong>${somaNum}</strong>.</p>`

        let mediaNum = somaNum / numbersArr.length
        result.innerHTML += `<p>A média dos valores cadastrados é <strong>${mediaNum.toFixed(2)}</strong>.</p>`
    }
}
  