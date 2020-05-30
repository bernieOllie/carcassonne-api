import { TileFeature } from "../feature/tileFeature";
import { FeatureLinks, Edge } from "./edge";
import { EdgeType } from "./enum/edgeType";

interface RoadEdgeFeatureLinks extends FeatureLinks {

    first: TileFeature;
    second: TileFeature;
    third: TileFeature;

}

export class RoadEdge extends Edge {

    type!: EdgeType.ROAD;

    featureLinks!: RoadEdgeFeatureLinks;

}
