/*  
  * 리엑트 라우터
      1. 라이브러리 의존성 추가
        > npm i react-router-dom 

      2. main.jsx
        - BrowserRouter import 후 <App /> 컴포넌트 감싸기

      3. 페이지 이동 사용방법
          * 1. Routes, Route 컴포넌트 사용
              - uri, 컴포넌트 설정 (path, element 속성)
              - Routes 컴포넌트 내부에는 Route 컴포넌트만 사용 가능

              ※ path 설정 시 와일드카드: * (path에 해당하는 uri 없으면 지정할 컴포넌트)

              ex) <Routes>
                    <Route path="/diary/:id" uri={</Diary>} /> // :id - url parameter
                  </Routes>
              
              ※ 동적 파라미터
                  - URL Parameter : useParams 훅 사용
                    ex) /diary/1
                        const params = useParams();
                        console.log(params.id);

                  - Query String  : useSearchParams 휵 사용
                    ex) /diary?id=1
                        const [params, setParams] = useSearchParams();
                        console.log(params.get('id'));                        

          * 2. Link 컴포넌트 사용
              - to 속성에 경로 설정

              ex) <Link to={"/"}>Home</Link>


          * 3. useNavigate 훅 사용
              - 특정 이벤트 시 함수 호출 방식으로 사용 (버튼 등)
              
              ex) const nav = useNavigate();
                  const onClick = () => { nav("/") }
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
