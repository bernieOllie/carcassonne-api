import { Edge } from "./edge/edge";

export default interface BoardSpot {

    x: number;

    y: number;

    getEdgeNorth(): Edge;

    getEdgeEast(): Edge;

    getEdgeSouth(): Edge;

    getEdgeWest(): Edge;

}
