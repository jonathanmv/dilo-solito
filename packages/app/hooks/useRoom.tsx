import { CHAT_ROOMS } from "./data";

export type ChatRoom = {id: string, title: string, communityId: string };

export const useRoom = (id?: string) => {
    return CHAT_ROOMS.find(r => r.id === id)
}