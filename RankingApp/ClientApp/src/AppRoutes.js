import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import RankItemsContainer from "./components/RankItemsContainer";
import MovieImageArr from "./components/MovieImages.js";
import PokemonImageArr from "./components/PokemonImages.js"

const AppRoutes = [
    {
        index: true,
        element: < RankItemsContainer dataType={1} imgArr={MovieImageArr } />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/rank-items',
        element: < RankItemsContainer dataType={2} imgArr={PokemonImageArr } />
    }

];

export default AppRoutes;
