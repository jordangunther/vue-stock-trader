// dummy data
import stocks from '../../data/stocks';

// creating store state
const state = {
    stocks: []
};

// Need to set the stocks for the profile and randomize the stocks for a new day
const mutations = {
    'SET_STOCKS' (state, stocks) {
        // assign dummy stock data to our state stocks
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        // randomize the stock data for a new day
        state.stocks.forEach(stock => {
          stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        })
    },
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        // use the SET_STOCKS mutation to set the state's stock with the dummy data
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        // allow the states stock to be retrieved
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};