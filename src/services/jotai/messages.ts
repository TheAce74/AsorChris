import { atom } from "jotai";
import { Message } from "../../utils/types";

export const messagesAtom = atom<Message[]>([]);
