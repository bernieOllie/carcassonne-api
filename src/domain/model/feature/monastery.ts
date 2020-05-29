import { TileFeature } from "./tileFeature";

export enum MonasteryId {
    MONASTERY = 'MONASTERY'
}

export interface Monastery extends TileFeature {
    id: MonasteryId;
}
