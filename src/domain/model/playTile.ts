import { Tile } from "./tile";
import { Edge } from "./edge/edge";
import { FeatureNode } from "./featureNode";

type TileType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

export class PlayTile implements Tile {

    type!: TileType;

    edgeNorth!: Edge;

    edgeEast!: Edge;

    edgeSouth!: Edge;

    edgeWest!: Edge;

    featureGraph!: Map<String, FeatureNode>;

}
