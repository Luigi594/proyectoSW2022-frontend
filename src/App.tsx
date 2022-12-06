import Routes from "./Router";

/** los nombres en las carpetas deben ser en minúscula, por ejemplo el test.tsx
 * en minúscula, la function que vamos a exportar debe ser Test, el nombre tiene
 * que ser diferente ahí porque sino da problema en los imports
 */

function App() {
  return (
    /*<div className="App">
      <div>
        <Routes />
      </div>
    </div>*/
    <Routes/>
  );
}

export default App;
