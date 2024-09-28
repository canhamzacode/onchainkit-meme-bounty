export const formatData = (coins: any[]) => {
    return coins.map((coin, index) => {
      const circulatingSupply = coin?.circulating_supply || 0;
      return {
        index: index + 1,
        name: coin.name || 'N/A',
        price: coin?.quote?.USD?.price ? `$${coin.quote.USD.price.toFixed(2)}` : 'N/A',
        "1hr": coin?.quote?.USD?.percent_change_1h !== null && coin?.quote?.USD?.percent_change_1h !== undefined
          ? `${coin.quote.USD.percent_change_1h.toFixed(2)}%`
          : 'N/A',
        "24hr": coin?.quote?.USD?.percent_change_24h !== null && coin?.quote?.USD?.percent_change_24h !== undefined
          ? `${coin.quote.USD.percent_change_24h.toFixed(2)}%`
          : 'N/A',
        "7d": coin?.quote?.USD?.percent_change_7d !== null && coin?.quote?.USD?.percent_change_7d !== undefined
          ? `${coin.quote.USD.percent_change_7d.toFixed(2)}%`
          : 'N/A',
        marketCap: coin?.quote?.USD?.market_cap ? `$${(coin.quote.USD.market_cap / 1e9).toFixed(2)}B` : 'N/A',
        volume: coin?.quote?.USD?.volume_24h ? `$${(coin.quote.USD.volume_24h / 1e9).toFixed(2)}B` : 'N/A',
        circulatingSupply: {
            supplyInDollars: `$${(circulatingSupply * coin?.quote?.USD?.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          supplyFormatted: circulatingSupply.toLocaleString() , 
        },
        change: "Buy",
      };
    });
};