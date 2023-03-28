import { useState } from 'react';
import RankItems from './RankItems';

const RankItemsContainer = ({ dataType, imgArr }) => {
    const pokemonLocalStorageKey = "pokemon_storage";
    const movieLocalStorageKey = "movies";

    var localStorageKey = "";

    const [pokemonItems, setPokemonItems] = useState(JSON.parse(localStorage.getItem(pokemonLocalStorageKey)));
    const [movieItems, setMovieItems] = useState(JSON.parse(localStorage.getItem(movieLocalStorageKey)));



    var data = [];
    var setFunc = null;

    if (dataType === 1) {
        data = movieItems;
        setFunc = setMovieItems;
        localStorageKey = movieLocalStorageKey;

    }
    else if (dataType === 2) {
        data = pokemonItems;
        setFunc = setPokemonItems;
        localStorageKey = pokemonLocalStorageKey;

    }

    return (
        <RankItems items={data} setItems={setFunc} dataType={dataType} imgArr={imgArr} localStorageKey={localStorageKey} />
    )


}
export default RankItemsContainer;