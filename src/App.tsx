import Home from "@views/Home/Home";
import Routes from "./Router";

/** los nombres en las carpetas deben ser en minúscula, por ejemplo el test.tsx
 * en minúscula, la function que vamos a exportar debe ser Test, el nombre tiene
 * que ser diferente ahí porque sino da problema en los imports
 */

function App() {
  return (
    <Routes />
  );
}

export default App;
