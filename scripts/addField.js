//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField() {
    // Duplicar os campos. Que campo?
    const NewFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos. Que campos?
    const fields = NewFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento
        field.value = ""
    })
      
    //colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(NewFieldContainer)    

} 