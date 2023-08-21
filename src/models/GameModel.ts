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

export interface Game {
    id: number;
    slug: string;
    name: string;
    name_original: string;
    description: string;
    description_raw: string;
    developers: {
        name: string;
    }[];
    metacritic: number;
    metacritic_platforms: [
        {
            metascore: number;
            url: string
        }
    ];
    released: string;
    tba: boolean;
    updated: Date;
    background_image: string;
    background_image_additional: string;
    website: string;
    rating: number;
    rating_top: number;
    ratings: unknown;
    reactions: unknown;
    added: number;
    added_by_status: unknown;
    playtime: number;
    screenshots_count: number;
    movies_count: number;
    creators_count: number;
    achievements_count: number;
    parent_achievements_count: string;
    publishers: {
        name: string
    }[];
    reddit_url: string;
    reddit_name: string;
    reddit_description: string;
    reddit_logo: string;
    reddit_count: number;
    twitch_count: string;
    youtube_count: string;
    reviews_text_count: string;
    ratings_count: number;
    suggestions_count: number;
    alternative_names: [
        string
    ];
    metacritic_url: string;
    parents_count: number;
    additions_count: number;
    game_series_count: number;
    esrb_rating: {
        id: number;
        slug: string;
        name: string
    };
    platforms: [
        {
            platform: {
                id: number;
                slug: string;
                name: string
            };
            released_at: string;
            requirements: {
                minimum: string;
                recommended: string
            }
        }
    ];
    tags: {
        id: number;
        image_background: string;
        language: string;
        name: string;
        slug: string;
    }[];
}