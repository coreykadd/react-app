export interface GameResponse {
    count: number;
    next: string;
    previous: string;
    results: GameResult[];
}

export interface GameResult {
    genres: [];
    id: number;
    metacritic: number;
    name: string;
    parent_platforms: {
        platform: {
            id: number;
            name: string;
            slug: string;
        }
    }[];
    rating: number;
    rating_top: number;
    released: Date;
    short_screenshots: {
        id: number;
        image: string;
    }[];
    slug: string;
    stores: {
        id: number;
        store: {
            domain: string;
            id: number;
            image_background: string;
            name: string;
            slug: string;
        };
    }[];
    tags: {
        id: number;
        image_background: string;
        language: string;
        name: string;
        slug: string;
    }[]
}