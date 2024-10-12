import "./App.css";
import {  useSelector } from "react-redux";
import AppRouter from "./routes//AppRoute";
import { ThemeProvider } from "./context/theme-provider.jsx";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <ThemeProvider defaultTheme={theme} storageKey="vite-ui-theme">
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
