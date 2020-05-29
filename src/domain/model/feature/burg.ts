import { TileFeature } from "./tileFeature";

enum BurgId {
    BURG = 'BURG',
    BURG_NORTH = 'BURG_NORTH',
    BURG_EAST = 'BURG_EAST',
    BURG_WEST = 'BURG_WEST',
    BURG_SHIELD = 'BURG_SHIELD'
}

export interface Burg extends TileFeature {
    id: BurgId;
}
