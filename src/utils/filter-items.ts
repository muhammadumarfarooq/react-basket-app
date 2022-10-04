import {Item as ItemType, Item} from "../types/item";

export const filterItems = (items: Item[], filterValue: string) => {
    if (!filterValue) return items;
    return items.filter((item: ItemType) => item.colour === filterValue)
}