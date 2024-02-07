import Menu from "./components/menu/index";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <main className="flex flex-row">
      <Sidebar />
      <Menu />
    </main>
  );
}

export default App;
