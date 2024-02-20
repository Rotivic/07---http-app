
/**
 * @returns {Object} character information
 */
const fetchCharacter = async(id) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`); 
    const data = await res.json();
    return data;
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RickandmortyApp = async( element ) => {
    document.querySelector('#app-title').innerHTML = 'Rick & Morty App';
    element.innerHTML = 'Loading...';
    // await fetchCharacter();
    

    const nameLabel = document.createElement('blockquote');
    const statusLabel = document.createElement('h3');
    const nextCharacterButton = document.createElement('button');
    nextCharacterButton.innerText = 'Next Name';

    const renderName = (data) => {
        nameLabel.innerHTML = data.name;
        statusLabel.innerHTML = data.status;
        element.replaceChildren(nameLabel,statusLabel,nextCharacterButton)
    }

    // añadir listener
    nextCharacterButton.addEventListener( 'click', () => {
        element.innerHTML = 'Loading...';
        
        fetchCharacter(3)
            .then( data => renderName(data) );

    });


    fetchCharacter(2)
        .then( data => renderName(data) );

}