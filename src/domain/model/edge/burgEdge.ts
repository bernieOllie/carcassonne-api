import { FeatureLinks, Edge } from "./edge";
import { EdgeType } from "./enum/edgeType";

export class BurgEdge extends Edge {

    type!: EdgeType.BURG;

    featureLinks!: FeatureLinks;

}
