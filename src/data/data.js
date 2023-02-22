const chartData = {
    menuItems: [
      {
        id: 1,
        name: 'Portfolio',
        icon: 'fas fa-chart-pie',
        active: true
      },
      {
        id: 2,
        name: 'Transactions',
        icon: 'fas fa-exchange-alt',
        active: false
      },
      {
        id: 3,
        name: 'Reports',
        icon: 'fas fa-file-alt',
        active: false
      },
      {
        id: 4,
        name: 'Settings',
        icon: 'fas fa-cog',
        active: false
      }
    ],
    assets: [
      {
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 23017,
        quantity: 2345,
        value: 4440
      },
      {
        id: 2,
        name: 'Ethereum',
        symbol: 'ETH',
        price: 1657,
        quantity: 1750,
        value: 2030
      },
      {
        id: 3,
        name: 'Binance USD',
        symbol: 'BUSD',
        price: 1,
        quantity: 5000,
        value: 750
      },
      {
        id: 4,
        name: 'Litecoin',
        symbol: 'LTC',
        price: 150,
        quantity: 5000,
        value: 778
      },
      {
        id: 5,
        name: 'Tether',
        symbol: 'USDT',
        price: 1,
        quantity: 500000,
        value: 6800
      },
      {
        id: 6,
        name: 'Polygon',
        symbol: 'MATIC',
        price: 1.32,
        quantity: 5000,
        value: 1100
      },
      {
        id: 7,
        name: 'Cardano',
        symbol: 'ADA',
        price: 0.3937,
        quantity: 5000,
        value: 1400
      },
    ],
    portfolioSummary: [
      { asset: 'Bitcoin', amount: 1.5, realized: 48525, unrealized: 34875, total: 83400 },
      { asset: 'Ethereum', amount: 10, realized: 21750, unrealized: 65250, total: 87000 },
      { asset: 'Cardano', amount: 2000, realized: 8450, unrealized: 92550, total: 101000 },
      { asset: 'Solana', amount: 50, realized: 2640, unrealized: 96480, total: 99120 },
      { asset: 'Polkadot', amount: 100, realized: 17500, unrealized: 43750, total: 61250 },
      { asset: 'Chainlink', amount: 500, realized: 10600, unrealized: 54600, total: 65200 },
      { asset: 'Algorand', amount: 1000, realized: 5100, unrealized: 45900, total: 51000 },
      { asset: 'Stellar', amount: 5000, realized: 3800, unrealized: 49400, total: 53200 },
    ],
    
    treemapData: {
      name: 'Portfolio',
      children: [
        {
          name: 'Bitcoin',
          value: 500
        },
        {
          name: 'Ethereum',
          value: 4000
        },
        {
          name: 'Litecoin',
          value: 7500
        },
        {
          name:"Solana",
          value:900
        },
        {
          name: "Dogecoin",
          value:12000
        }
      ]
    }
  };
  
  export default chartData;
  