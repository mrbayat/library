import React, { Component } from 'react'
import IntlMessages from '../../util/IntlMessages'
import ErrorPage from '../error_page'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, errorMessage: '' }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true, errorMessage: errorInfo })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.hasError ?
                    <ErrorPage
                        title={<IntlMessages id="500" />}
                        message={<IntlMessages id="sorrySomethingwentWrongPleaseTryAgain" />}
                    />
                    : this.props.children}
            </React.Fragment>
        )
    }
}
