import React, { } from 'react'
import { LoadingIndicator } from 'components'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
        this.tryAgain = this.tryAgain.bind(this)
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    tryAgain = async () => {
        this.setState({ hasError: false })
    }

    render() {
        return (
            <React.Suspense fallback={<LoadingIndicator />} >
                {this.state.hasError ? (
                    <p>
                        Doctor is not available.
                    </p>
                ) : (
                        <React.Fragment>
                            {this.props.children}
                        </React.Fragment>
                    )}
            </React.Suspense>
        )
    }
}

export default ErrorBoundary;