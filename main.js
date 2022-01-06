function fazGet(url) {
  let request = new XMLHttpRequest ()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

function criarLinha (usuario) {
  linha = document.createElement("tr")
  tdId = document.createElement("td")
  tdName = document.createElement("td")

  tdId.innerHTML = usuario.id
  tdName.innerHTML = usuario.name

  linha.appendChild(tdId)
  linha.appendChild(tdName)

  return linha
}

function main() {
  let data = fazGet("https://trackfy-backend-dev.herokuapp.com/rest/v1/professions")
  let usuarios = JSON.parse(data)
  let tabela = document.getElementById("tabela")
  
  usuarios.forEach(element => {
    let linha = criarLinha(element)
    tabela.appendChild(linha)
  });
}
main()