/*  
  * 리엑트 라우터
      1. 라이브러리 의존성 추가
        > npm i react-router-dom 

      2. main.jsx
        - BrowserRouter import 후 <App /> 컴포넌트 감싸기

      3. App.jsx 
        - <Routes>, <Route> 컴포넌트 import
        - uri, 컴포넌트 설정 (path, element 속성)
       
        ※ path 설정 시 와일드카드: * (path에 해당하는 uri 없으면 지정할 컴포넌트)
*/
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
