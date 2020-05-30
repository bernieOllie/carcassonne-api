import { FeatureLinks, Edge } from "./edge";
import { EdgeType } from "./enum/edgeType";

export class GrassEdge extends Edge {

    type!: EdgeType.GRASS;

    featureLinks!: FeatureLinks;

}
