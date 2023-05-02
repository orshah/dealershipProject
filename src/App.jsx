import HeaderText from "./components/headerText/HeaderText.jsx";
import GeneralText from "./components/generalText/GeneralText.jsx";
import Inputfield from "./components/inputfield/Inputfield.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Bigpicture from "./components/bigpicture/Bigpicture.jsx";
import YoutubeEmbed from "./components/youtube/YoutubeEmbed.jsx";
import AgeCalculator from "./components/AgeCalculator/AgeCalculator.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Bigpicture />
      <HeaderText />
      <br />
      <AgeCalculator />
      <br />
      <GeneralText />
      <br />
      <Inputfield />
      <YoutubeEmbed />
    </>
  );
}

export default App;
