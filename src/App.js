import React from "react";
import "./App.css";
import FetchParent from "./Components/FetchParent";
import ImageSlider from "./Components/ImageSlider"
import ProgressBar from "./Components/ProgressBar";
import { Parent } from "./Components/ChildToParent/Parent";
import UseMemoExample from "./Components/useMemo/useMemoExample";
import ContextExample from "./Components/Context/ContextExample";
import Boxes from "./Components/Color Boxes/Boxes";
import ReactMemo from "./Components/React Memo/ReactMemo";
import Apps from "./Components/SearchResults/Apps";


function App() {


  return <div className="App">
    {/* <FetchParent/> */}
    {/* <ImageSlider/> */}
    {/* <ProgressBar/> */}
    {/* <Parent/> */}
    {/* <UseMemoExample/> */}
    {/* <ContextExample/> */}
    {/* <Boxes/> */}
    {/* <ReactMemo/> */}
    <Apps/>
  </div>;
}

export default App;
