import { Message } from '../messageCreators/DEFT-swaps';

export function validate(config, msg: Message): boolean {
    return (Number(msg.amountDeftInUsd) >= config.minUSD) && (config.fromTimestamp < Number(msg.timestamp));
}