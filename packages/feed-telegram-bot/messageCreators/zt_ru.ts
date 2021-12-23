import { generateDots } from "./Radix-uniswap"
import { numWithCommas } from "./ftx_ru";

export interface Message {
    amount: string,
    price: string,
    side: "buy" | "sell",
    timestamp: string,
    pair: string
}

export function createMessage(options: Message, constants) {
    let anotherSymbol = options.pair.split('_')[1];
    return `${options.side == "buy" ? "🚀" : "👹"} *1 ${constants.token} = ${(+options.price).toFixed(constants.priceDigit)} ${anotherSymbol}*\n`
    +   `${options.side == "buy" ? "Покупка" : "Продажа"} *${numWithCommas(Math.ceil(+options.amount))} ${constants.token}* за *${numWithCommas(Math.ceil(+options.amount * +options.price))} ${anotherSymbol}* на ZT\n\n`
    +   `${generateDots({ feedType: (options.side == "buy" ? "uniswapBuy" : options.side), amountRadixInUsd: +options.amount * +options.price}, constants)}\n\n`
    +   `${constants.mainLink} | 🇹 [ZT](${constants.tradeLink}) | 💥 [При поддержке CERBY Token](https://t.me/CerbyToken)`
}