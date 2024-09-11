import { links } from "./data";

export const type SectionName = (typeof links) [number]["hash"];

export type Link = {
    nameEng: string;
    hash: string;
}