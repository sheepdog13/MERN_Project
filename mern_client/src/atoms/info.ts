import { atom } from "jotai";
import { Info } from "../types/info";

export const infoAtom = atom<Info[] | null>(null);
export const selectInfoAtom = atom<Info | null>(null);
