function contar() {
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Preencha todos os campos')
    
    } else {
        res.innerHTML = 'Contando: <br>'
        let ini = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)  
        if (passo <= 0)
            window.alert('Passo inválido! Considerando PASSO 1')
        if (ini < fim) {
            // contagem crescente //
            for(let c = ini; c <= fim; c += passo) {
            res.innerHTML += ` ${c} \u{1F449} `
            }
            // contagem regressiva //
        } else {
            for(let c = ini; c >= fim; c -= passo) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }    
}
