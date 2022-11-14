import { Community } from "./useCommunity"
import { ChatRoom } from "./useRoom"

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
