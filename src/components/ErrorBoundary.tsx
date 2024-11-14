import React from "react";
import NotFound from "mfe_st_errors/NotFound";

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Actualiza el estado para mostrar la UI de fallback
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Puedes registrar el error en un servicio de monitoreo
    console.error("Caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Renderiza NotFound si ocurre un error
      return <NotFound />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
