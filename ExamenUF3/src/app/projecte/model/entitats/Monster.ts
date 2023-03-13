import { Legendary_actions } from "./Legendary_actions";

export class Monster {
    index: string;
    name: string;
    url: string;
    image: string;
    type: string;
    legendary_actions: Array<Legendary_actions> = [];
    constructor(index: string, name: string, url: string, image: string, type: string, legendary_actions: Array<Legendary_actions>) {
        this.index = index;
        this.name = name;
        this.url = url;
        this.image = image;
        this.type = type;
        this.legendary_actions = legendary_actions;
    }
} 