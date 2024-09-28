export interface Coin {
    index: number;
    name: any;
    price: string;
    "1hr": string;
    "24hr": string;
    "7d": string;
    marketCap: string;
    volume: string;
    circulatingSupply: {
      supplyInDollars: string;
      supplyFormatted: string;
    };
    change: string;
}