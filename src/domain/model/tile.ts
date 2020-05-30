import { Edge } from "./edge/edge";

export interface Tile {

    edgeNorth: Edge;

    edgeEast: Edge;

    edgeSouth: Edge;

    edgeWest: Edge;

}
