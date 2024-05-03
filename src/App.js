import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllPost from './Component/Page/AllPost/AllPost';
import Header from './Component/Page/Header/Header';
import Navbar from './Component/Page/Navbar/Navbar';


function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <AllPost />
    </div>
  );
}

export default App;