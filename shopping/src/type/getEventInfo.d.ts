namespace forTUNE {
    namespace Api {
        export type GetEventInfoRequest = {
            eventId: string,
            message: string
        }

        export type GetEventInfoOptions = {
            data: EventInfoRequest
        } & RequestOptions

        export type ArtistItem = {
            baseDuration: number,
            durationPerTicket: number,
            image: string,
            name: string,
            needsValidation: boolean,
            showSerial: boolean,
            shCode?:string //独自
        }

        export type EventItem = {
            artists: {[artistId: string]: ArtistItem},
            date: string,
            eventTitle: string,
            timeName: string
        }

        export type GetEventInfoResponse = {[eventId: string]: EventItem}
    }
}