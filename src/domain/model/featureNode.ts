import { TileFeature } from "./feature/tileFeature";

export class FeatureNode {

    tileFeature!: TileFeature;

    adjacentFeatureNodes!: Set<FeatureNode>;

}
