import { Message } from '../messageCreators/CERBY-bridge';

export function parser(message: Buffer): Message {
    // Here you can convert from different formats, for example protobuf
    return JSON.parse(String(message));
}