const fieldSearch = document.getElementById('txt-busca');
const conteudo = document.getElementById('dados');

fieldSearch.addEventListener('keyup', () => {
    
    let rows = conteudo.getElementsByTagName('tr');
    let pesquisa = fieldSearch.value.toLowerCase();
    
    for(let index in rows){
        
        if(true===isNaN(index)){
            continue;
        }
       
    let contentRows = rows[index].innerHTML.toLowerCase();

    if(true === contentRows.includes(pesquisa)){
        rows[index].style.display = '' 
    } else {
        rows[index].style.display = 'none'
    }

}});