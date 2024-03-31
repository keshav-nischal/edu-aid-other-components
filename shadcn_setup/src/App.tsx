import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { Settings } from "./components/settings";
import { Result } from "./components/result";
import { Subjective } from "./components/subjective";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <Settings />
      <Result />
      <Subjective />
    </ThemeProvider>
  );
}

export default App;
