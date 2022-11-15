import { Community } from "./useCommunity"
import { ChatRoom } from "./useRoom"
import { User } from "./useUser"

export const CHAT_ROOMS: ChatRoom[] = [
    { communityId: 'urbanapes', id: 'urbanapes.hh.stpauli.main', title: 'Welcome'},
    { communityId: 'urbanapes', id: 'urbanapes.hh.stpauli.beginners', title: 'Beginners'}, 
    { communityId: 'urbanapes', id: 'urbanapes.hh.stpauli.events', title: 'Events'},
    { communityId: 'rehbar', id: 'rehbar.hh.stpauli.main', title: 'Welcome'},
    { communityId: 'rehbar', id: 'rehbar.hh.stpauli.beginners', title: 'Caipirinha Lovers'}, 
    { communityId: 'rehbar', id: 'rehbar.hh.stpauli.events', title: 'Happy Hour'},
]
export const COMMUNITIES: Community[] = [
    {
        id: 'urbanapes',
        name: 'Urban Apes',
        description: "Bouldern und danach feiern gehen - Wer nach dem Bouldern noch Kraft und Lust hat, kann den Tag auch ein paar Etagen höher im Uebel & Gefährlich beim Tanzen ausklingen lassen oder mit einem Bier durch die nahe Schanze bummeln",
        coverImage: 'https://www.urbanapes.de/wp-content/uploads/2022/03/urbanapes_hamburgstpauli_boulderer_2_800x533.jpg'
    },
    {
        id: 'rehbar',
        name: 'REH BAR',
        description: 'Mo - So 10 Uhr bis Open End - Caipirinha Happy Hour bis 21 Uhr - #dukommstdochrehrum - Trinken hilft immer.',
        coverImage: 'https://www.urbanapes.de/wp-content/uploads/2022/03/urbanapes_hamburgstpauli_boulderer_6_800x533.jpg'
    }
]
export const USERS: User[] = [
    {
        _id: 1,
        name: 'jonathanmv',
        avatar: 'https://placeimg.com/480/480/any'
    },
    {
        _id: 2,
        name: 'hernandomv',
        avatar: 'https://placeimg.com/480/480/any'
    },
    {
        _id: 3,
        name: 'mama',
        avatar: 'https://placeimg.com/480/480/any'
    },
    {
        _id: 4,
        name: 'salome',
        avatar: 'https://placeimg.com/480/480/any'
    },
]

export type CommunityMembership = {
    communityId: string,
    communityName: string,
    communityCover: string,
    userId: number,
    userName: string,
    userAvatar: string,
}
export const COMMUNITY_MEMBERSHIPS: CommunityMembership[] = [
    { communityId: 'urbanapes', communityName: 'Urban Apes', communityCover: 'https://www.urbanapes.de/wp-content/uploads/2022/03/urbanapes_hamburgstpauli_boulderer_2_800x533.jpg', userId: 1, userName: 'jonathanmv', userAvatar: 'https://placeimg.com/480/480/any' },
    { communityId: 'urbanapes', communityName: 'Urban Apes', communityCover: 'https://www.urbanapes.de/wp-content/uploads/2022/03/urbanapes_hamburgstpauli_boulderer_2_800x533.jpg', userId: 2, userName: 'hernandomv', userAvatar: 'https://placeimg.com/480/480/any' },
    { communityId: 'urbanapes', communityName: 'Urban Apes', communityCover: 'https://www.urbanapes.de/wp-content/uploads/2022/03/urbanapes_hamburgstpauli_boulderer_2_800x533.jpg', userId: 4, userName: 'salome', userAvatar: 'https://placeimg.com/480/480/any' },
    { communityId: 'rehbar', communityName: 'REH BAR', communityCover: 'https://www.urbanapes.de/wp-content/uploads/2022/03/urbanapes_hamburgstpauli_boulderer_6_800x533.jpg', userId: 1, userName: 'jonathanmv', userAvatar: 'https://placeimg.com/480/480/any' },
    { communityId: 'rehbar', communityName: 'REH BAR', communityCover: 'https://www.urbanapes.de/wp-content/uploads/2022/03/urbanapes_hamburgstpauli_boulderer_6_800x533.jpg', userId: 3, userName: 'mama', userAvatar: 'https://placeimg.com/480/480/any' },
    { communityId: 'rehbar', communityName: 'REH BAR', communityCover: 'https://www.urbanapes.de/wp-content/uploads/2022/03/urbanapes_hamburgstpauli_boulderer_6_800x533.jpg', userId: 4, userName: 'salome', userAvatar: 'https://placeimg.com/480/480/any' },
]