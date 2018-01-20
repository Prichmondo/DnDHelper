export interface INpc {
    charName: string;
    charOfType: string;
    charImagepath?: string;
    charBaseInit: number;
    charQuantity: number;
    initiative?: number;
    id?: number;
    selected: boolean;
}
