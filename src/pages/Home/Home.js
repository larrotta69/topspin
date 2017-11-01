import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'

import {WithError, WithLoading} from './../../HOC'

const Home = () => {
    return (
        <main>
            TopSpin
        </main>
    )
}

/*
    Home propTypes
*/
Home.propTypes = {
    match: PropTypes.object
}

export default compose(
    WithError,
    WithLoading
)(Home)
