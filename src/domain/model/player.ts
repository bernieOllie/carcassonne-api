type MeepleCount = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type TurnOrder = 1 | 2 | 3 | 4 | 5;

export default class Player {

    meepleCount!: MeepleCount;

    points!: Number;

    turnOrder!: TurnOrder;
}
