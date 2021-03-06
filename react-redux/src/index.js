import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
// import Header from './Header'
// import Content from './Content'
import Header from './containers/Header'
import Content from './containers/Content'
// import { Provider } from './connect'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'

// function createStore (reducer) {
//     let state = null
//     const listeners = []
//     const getState = () => state
//     const subscribe = (listener) => listeners.push(listener)
//     const dispatch = (action) => {
//         state = reducer(state, action)
//         listeners.forEach((listener) => listener() )
//     }
//     dispatch({})
//     return { getState, dispatch, subscribe }
// }

const themeReducer = (state, action) => {
    if (!state) return {
        themeColor: 'red'
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
        return { ...state, themeColor: action.themeColor }
        default:
        return state
    }
}
  
const store = createStore(themeReducer)

class Index extends Component {
    // static childContextTypes = {
    //     store: PropTypes.object
    // }

    // getChildContext () {
    //     return { store }
    // }
    render () {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    // <Index />,
    document.getElementById('root')
)