const state = {
    funds: 10000,
    stocks: []
};


const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        // writing this on a single line automatically appends a return so return element.id == stockId
        // When buying a stock check to see if user already has some
        const record = state.stocks.find(element => element.id == stockId);
        // if stock already exists than update quantity, else push new stock
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },

    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
        // writing this on a single line automatically appends a return so return element.id == stockId
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -=quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    }
}

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio (state, getters) {
        return state.stocks.map(stock => {
           const record = getters.stocks.find(element => element.id == stock.id);
           return {
               id: stock.id,
               quantity: stock.quantity,
               name: record.name,
               price: record.price
           }
        });
    },
    funds (state) {
        return state.funds;
    }

};

export default {
    state,
    mutations,
    actions,
    getters
}