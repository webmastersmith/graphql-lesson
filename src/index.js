import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './redux/store'

import './index.css'
import App from './App'

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client'

import { resolvers, typeDefs } from './graphql/resolvers'

const client = new ApolloClient({
  uri: 'https://crwn-clothing.com',
  cache: new InMemoryCache(),
  resolvers,
  typeDefs,
})

client.writeQuery({
  query: gql`
    {
      cartHidden @client
    }
  `,
  data: { cartHidden: true },
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
