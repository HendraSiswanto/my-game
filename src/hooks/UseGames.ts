import { GameQuery } from "../App";
import useData from "./UseData";
import { Genre } from "./UseGenres";


export interface Platform {
    id: number;
    name:string;
    slug:string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform :Platform}[] 
    metacritic: number
    rating_top: number
}

const UseGames = (gameQuery: GameQuery) => 
    useData<Game>('/games', {
        params: {
            genres : gameQuery.genre?.id, 
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }}, 
        [gameQuery])

export default UseGames