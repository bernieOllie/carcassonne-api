import { TileFeature } from "../feature/tileFeature";
import { EdgeType } from "./enum/edgeType";

export interface FeatureLinks {

    first: TileFeature;

}

export class Edge {

    type!: EdgeType;

    featureLinks!: FeatureLinks;

}
