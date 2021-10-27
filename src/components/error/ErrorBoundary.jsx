import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './styles.module.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.errorBoundary}>
                    <Container>
                        <h1 className={styles.errorBoundaryTitle}>Something went wrong</h1>
                    </Container>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
