import { Game, GameResponse } from "../models/GameModel";
import { ApiService } from "./ApiService";

class GameService {
    constructor() { }

    getGamesList(): Promise<GameResponse> {
        return ApiService.get('/games');
    }

    getGameDetails(gameId: string): Promise<Game> {
        const params = new URLSearchParams();
        params.set('id', gameId);
        return ApiService.get(`/games/${gameId}`);
    }
}

export default new GameService();