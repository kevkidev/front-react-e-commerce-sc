import { Component, ErrorInfo, ReactNode } from "react";
import { DefaultError } from "./DefaultError";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  // error?: {
  //   error: Error;
  //   errorInfo: ErrorInfo;
  // };
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    _;
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // const state = _.cloneDeep(this.state);
    // state.error = {
    //   error,
    //   errorInfo,
    // };
    // this.setState(state);
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      console.log("eeeroor");

      return <DefaultError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
