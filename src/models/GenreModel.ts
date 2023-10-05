export interface GenreResponse {
    count: number;
    next: string;
    previous: string;
    results: GenreResults[];
}

export interface GenreResults {
    games: unknown[];
    games_count: number;
    id: number;
    image_background: string;
    name: string;
    slug: string;
}

export interface GenreDetails {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    description: string;
}