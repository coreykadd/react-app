import { ApiService } from "./ApiService";


class GameService {
    constructor() { }

    getGamesList() {
        return ApiService.get('/games');
    }
}

export default new GameService();