import { GameResponse } from "../models/GameModel";
import { ApiService } from "./ApiService";

class GameService {
    constructor() { }

    getGamesList(): Promise<GameResponse> {
        return ApiService.get('/games');
    }
}

export default new GameService();