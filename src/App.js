import React from "react";
import FetchParent from "./Components/FetchAPI/FetchParent";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import { Parent } from "./Components/ChildToParent/Parent";
import UseMemoExample from "./Components/useMemo/useMemoExample";
import ContextExample from "./Components/Context/ContextExample";
import ProgressBar from "./Components/Progressbar/ProgressBar"
import Boxes from "./Components/Color Boxes/Boxes";
import ReactMemo from "./Components/React Memo/ReactMemo";
import Apps from "./Components/SearchResults/Structured/Apps";
import Search from "./Components/SearchResults/Simple/Search";
import Todo from "./Components/TodoApp/Simple Todo/Todo";
import TodoWithEdit from "./Components/TodoApp/Simple Todo/TodoWithEdit";
import SearchDebounce from "./Components/SearchResults/Simple With Debounce/SearchDebounce";
import Infinite from "./Components/Infinite Scrolling/Infinite";
import DropdownExample from "./Components/Nested Dropdown/DropdownExample";


function App() {
  return (
    <div className="App">
      {/* <FetchParent/> */}
      {/* <ImageSlider/> */}
      {/* <ProgressBar/> */}
      {/* <Parent/> */}
      {/* <UseMemoExample/> */}
      {/* <ContextExample/> */}
      {/* <Boxes/> */}
      {/* <ReactMemo/> */}
      {/* <Apps /> */}
      {/* <Search/> */}
      {/* <SearchDebounce/> */}
     {/* <Todo/> */}
     {/* <TodoWithEdit/> */}
     {/* <Infinite/> */}
     <DropdownExample/>
    </div>
  );
}

export default App;
