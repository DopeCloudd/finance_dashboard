const express = require('express');
const axios = require('axios');
const CryptoJS = require('crypto-js');
const app = express();
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000', // Autorise seulement cette origine à accéder à l'API
};
app.use(cors(corsOptions));

const API_KEY = 'rlQ521dYKCN0cQPHYITLX7BtkzfVlKDQAymH9B9ZMILpPQqLQ7cmIOK3SgvbjewP';
const API_SECRET = '1neAHBvQXrblmxY8PuOn9PSlFiUOU4FvW8ASkOqTDMpmbTq3ugjUnIAN7YvLLLnL';

app.get('/api/binance-balance', async (req, res) => {
    const serverTimeUrl = 'https://api.binance.com/api/v3/time';
    const balanceUrl = 'https://api.binance.com/sapi/v1/asset/get-funding-asset';

    try {
        const { data } = await axios.get(serverTimeUrl);
        const timestamp = data.serverTime;

        const queryString = `timestamp=${timestamp}`;
        const signature = CryptoJS.HmacSHA256(queryString, API_SECRET).toString(CryptoJS.enc.Hex);

        const reponse = await axios.get(`${balanceUrl}?${queryString}&signature=${signature}`, {
            headers: { 'X-MBX-APIKEY': API_KEY },
        });

        res.json(reponse);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération du solde' });
    }
});

app.get('/api/coinmarketcap', async (req, res) => {
    try {
        // Make a request to CoinMarketCap API
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=100&sort=cmc_rank', {
            headers: {
                'X-CMC_PRO_API_KEY': 'c488a3a1-62c1-4baa-a528-81d43936c9d0'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from CoinMarketCap API:', error.message);
        res.status(500).json({ error: 'Failed to fetch data from CoinMarketCap API' });
    }
});

const PORT = 3034;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
