import { COMMUNITY_MEMBERSHIPS, USERS } from "./data"

export type User = {
    _id: number,
    name: string,
    avatar: string,
    bio?:string,
}
export const useUser = () => {
    return {
        user: USERS.find(({_id}) => _id === 1),
        communities: COMMUNITY_MEMBERSHIPS.filter(({userId}) => userId === 1)
    }
}