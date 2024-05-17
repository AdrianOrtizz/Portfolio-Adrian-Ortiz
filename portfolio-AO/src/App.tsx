import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [language, setLanguage] = useState<string>("spanish");

  return (
    <main>
      <NavBar language={language} setLanguage={setLanguage} />
    </main>
  );
}

export default App;
