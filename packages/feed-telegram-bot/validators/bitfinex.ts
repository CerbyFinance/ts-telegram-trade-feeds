import { Message } from '../messageCreators/bitfinex';

export function validate(config, msg: Message): boolean {
    return (msg.amount * msg.price) >= config.minUSD;
}