export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

let webChanel: WebSocket | null = null

const closeHandler = () => {
    setTimeout(createChanel, 3000)
}

const onMessageHandler = (e: MessageEvent) => {
    let newMessages = JSON.parse(e.data);
    subscribers.forEach(s => s(newMessages))
}

const createChanel = () => {
    webChanel?.removeEventListener('close', closeHandler)
    webChanel?.close()

    webChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    webChanel.addEventListener('close', closeHandler)
    webChanel.addEventListener('message', onMessageHandler)
}

type SubscriberType = (messages: Array<ChatMessageType>) => void
let subscribers = [] as Array<SubscriberType>


export const chatAPI = {
    start() {
        createChanel()
    },
    subscribe(callback: (messages: Array<ChatMessageType>) => void) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: (messages: Array<ChatMessageType>) => void) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        webChanel?.send(message)
    },
    stop() {
        subscribers = []
        webChanel?.removeEventListener('close', closeHandler)
        webChanel?.removeEventListener('message', onMessageHandler)
        webChanel?.close()
    },
}

