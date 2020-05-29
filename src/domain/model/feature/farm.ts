import { TileFeature } from "./tileFeature";

export enum FarmId {
    FARM = 'FARM',
    FARM_NORTH = 'FARM_NORTH',
    FARM_SOUTH = 'FARM_SOUTH',
    FARM_EAST = 'FARM_EAST',
    FARM_WEST = 'FARM_WEST',
    FARM_NORTH_EAST = 'FARM_NORTH_EAST',
    FARM_NORTH_WEST = 'FARM_NORTH_WEST',
    FARM_SOUTH_EAST = 'FARM_SOUTH_EAST',
    FARM_SOUTH_WEST = 'FARM_SOUTH_WEST'
}

export interface Farm extends TileFeature {
    id: FarmId;
}
