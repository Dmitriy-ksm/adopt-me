import { Component } from "react";
import { Link, Navigate } from "react-router-dom";
//should unuse ts via react-router-dom v6
class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true, redirect: false };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
    setTimeout(
      () =>
        this.setState({
          redirect: true,
        }),
      5000
    );
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an error. <Link to="/">Click Here</Link> to go back
          to home page or wait five seconds
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
