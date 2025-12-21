import React from 'react';

class LazyLoadErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("LazyLoadErrorBoundary caught error:", error, errorInfo);

        if (error.name === 'ChunkLoadError' || error.message.includes('Loading chunk')) {
            // Prevent infinite reload loop
            const lastReload = sessionStorage.getItem('chunk_load_error_reload');
            const now = Date.now();

            if (!lastReload || now - parseInt(lastReload) > 10000) {
                sessionStorage.setItem('chunk_load_error_reload', now.toString());
                window.location.reload();
            }
        }
    }

    render() {
        if (this.state.hasError) {
            // Check if it's a chunk load error
            const isChunkError = this.state.error && (
                this.state.error.name === 'ChunkLoadError' ||
                this.state.error.message.includes('Loading chunk')
            );

            // If it's a chunk error, show loading spinner while we reload
            if (isChunkError) {
                return (
                    <div className="vh-100 d-flex align-items-center justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                );
            }

            return (
                <div className="vh-100 d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <h2 className="mb-4">Something went wrong</h2>
                        <p className="mb-4">We encountered an error loading the page. Please try reloading.</p>
                        <button
                            className="btn btn-primary"
                            onClick={() => window.location.reload()}
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default LazyLoadErrorBoundary;
