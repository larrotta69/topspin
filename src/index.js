import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch} from 'react-router-dom'

import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

import Home from './pages/Home/Home'
import Error404 from './pages/Error/Error404'
import Layout from './pages/Layout/Layout'

(() => injectGlobal`
    ${styledNormalize}
    ul, ol {
        list-style: none;
        padding: 0;
    }
    * {
        font-family: 'Roboto';
        box-sizing: border-box;
    }
`)()

const Root = () => {
    return <BrowserRouter>
        <Switch>
            <Layout exact path="/" component={Home}/>
            <Layout component={Error404} />
        </Switch>
    </BrowserRouter>
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}

const store = {}

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
)
