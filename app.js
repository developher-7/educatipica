

 function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")


   let campoPesquisa = document.getElementById("campo-pesquisa").value

  if(campoPesquisa == "") {
    section.innerHTML = "Poxa! Não encontramos essa informação em nossa base :("
      return
        
  }

  campoPesquisa = campoPesquisa.toLowerCase()
campoPesquisa = campoPesquisa.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    let resultados = "";
    let título = "";
    let descrição = "";
    let tags = "";
    
    for (let datum of data) {
        título = datum.título.toLowerCase()
        descrição = datum.descrição.toLowerCase()
        título = datum.título.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        descrição = datum.descrição.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        tags = datum.tags.toLowerCase
        tags = datum.tags.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        if(título.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${datum.título}</a>
                </h2>
                <p class="descricao-meta">${datum.descrição}</p>
                <a href=${datum.link} target="_blank">Aprenda mais!</a>
            </div>
        `;
        }
        datum.título.includes(campoPesquisa)
       
    }

    if (!resultados) {
    resultados = "<p> Ops! (ainda) não temos nada sobre isso</p>"
    }
    section.innerHTML = resultados
}



