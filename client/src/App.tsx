import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import imagePath from "./assets/LOGO.png";
const App = () => {
  return (
    <div>
      <NavBar brandName="Ma-Zoezi" imageSrcPath={imagePath} />
    </div>
  );
};

export default App;
