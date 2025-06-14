import React, { Component, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  fallback: React.ComponentType;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    const { fallback: FallbackComponent } = this.props;

    if (this.state.hasError) {
      return <FallbackComponent />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
