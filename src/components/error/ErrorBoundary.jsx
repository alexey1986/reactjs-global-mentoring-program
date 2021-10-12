import React from 'react';
import Container from 'react-bootstrap/Container';

// NOTE: Add styles to show the error text not on the top of the page but maybe on center or with padding

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) { // NOTE: Delete prop if you don't use it
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <Container>
                    {/* NOTE: Translate it to english */}
                    <h1>Что-то пошло не так.</h1>
                </Container>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;