import { CHAT_ROOMS, COMMUNITIES } from "./data"

export type Community = {
    id: string,
    name: string,
    description: string,
    coverImage: string,
}

export const useCommunity = (id?: string) => {
    const community = COMMUNITIES.find(c => c.id === id)
    const rooms = CHAT_ROOMS.filter(r => r.communityId === id)
  
    return {
        community,
        rooms
    }
}