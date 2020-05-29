import { TileFeature } from "./tileFeature";

export enum RoadId {
    ROAD = 'ROAD',
    ROAD_NORTH = 'ROAD_NORTH',
    ROAD_EAST = 'ROAD_EAST',
    ROAD_SOUTH = 'ROAD_SOUTH',
    ROAD_WEST = 'ROAD_WEST'
}

export interface Road extends TileFeature {
    id: RoadId;
}
