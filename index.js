document.addEventListener('DOMContentLoaded',()=>{
    getCharacters();
});

const getCharacters=async ()=>{
    const response= await fetch('https://rickandmortyapi.com/api/character');
    const data = await  response.json();
    const mortyList = document.querySelector('#morty');
    const characters= data.results;
    mortyList.textContent = '';
    let card= '';
    characters.forEach(async(c,i)=>{
        card+=`
         <div class="card ms-3 mb-3" style="width: 18rem;">
        <img src="${c.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-uppercase">${c.name}</h5>
          <p class="card-text">
            ${c.species}
          </p>
          <a  class="btn btn-primary">Open</a>
        </div>
      </div>
        `;
    })
    mortyList.innerHTML = card;


}
