import { Suspense } from "react";
import ErrorBoundary from "~/components/error-boundary";
import { ThemeProvider } from "~/context/theme";

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={ErrorFallback}>
        <ThemeProvider>{children}</ThemeProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
