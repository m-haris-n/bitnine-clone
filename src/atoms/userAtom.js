import { atomWithStorage } from "jotai/utils";

export const userAtom = atomWithStorage("user", {});

export const tokenAtom = atomWithStorage("authToken", "");
