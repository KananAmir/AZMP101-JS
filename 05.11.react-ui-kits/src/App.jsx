import "./App.css";
import BootstrapUlKit from "./components/Bootstrap";
import MaterialUiKit from "./components/MaterialUI";
import SignIn from "./components/SignInMUI";
import CustomTabPanel from "./components/Tabs";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Header />

      <CustomTabPanel />
      {/* <BootstrapUlKit /> */}
      <MaterialUiKit />
      {/* <SignIn /> */}
    </>
  );
}

export default App;
