import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";



function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar/>
          {/* contents */}
          <Dashboard/>
        </div>
      </div>

    </>
  );
}

export default App;
