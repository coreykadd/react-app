import { Game, GameResponse } from "../models/GameModel";
import { GenreDetails, GenreResponse } from "../models/GenreModel";
import { ApiService } from "./ApiService";

class GameService {
    constructor() { }

    getGamesList(params = {}): Promise<GameResponse> {
        return ApiService.get('/games', params);
    }

    getGameDetails(gameId: string): Promise<Game> {
        const params = new URLSearchParams();
        params.set('id', gameId);
        return ApiService.get(`/games/${gameId}`);
    }

    getGenres(): Promise<GenreResponse> {
        return ApiService.get('/genres');
    }

    getGenreDetails(genreId: number): Promise<GenreDetails> {
        return ApiService.get(`/genres/${genreId}`)
    }
}

export default new GameService();