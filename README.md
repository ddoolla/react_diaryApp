# React_DiaryApp

> ## 리엑트 라우터

### `1. 라이브러리 의존성 추가`

```
> npm i react-router-dom
```

<br/>

### `2. main.jsx`

- BrowserRouter import 후 \<App /> 감싸기

<br/>

### `3. 페이지 이동 방법`

- #### Routes, Route 컴포넌트 사용
  - Routes 컴포넌트 내부에는 Route 컴포넌트만 사용 가능
  - \* : 와일드 카드 (모든 경로에 해당)

```
<Routes>
    <Route path="/diary/:id" element={<Diary />} /> // :id - url parameter
    <Route path="/Home" element={<Home />} />
    <Route path="/New" element={<New />} />
    <Route path="/*" element={<NotFound />} />
</Routes>
```

<br/>

- #### Link 컴포넌트 사용

```
<Link to={"/"}>Home</Link>
```

<br/>

- #### useNavigate 훅 사용
  - 특정 이벤트 시 함수 호출 방식으로 사용 (버튼 등)
  - 컴포넌트가 마운트되기 전에는 동작하지 않는다. -> useEffect 활용  
    (이벤트 핸들러는 마운트 이후 동작이므로 관계 X)

```
const nav = useNavigate();
const onClick = () => { nav("/"); }
const onClick = () => { nav("/", {replace: true}); } // 뒤로가기 방지
```

※ React Router Dom 참조에서는 loader, action 에서 redirect 를 사용하는 것을 권장하는 내용이 있다.

<br/>

---

> ## 동적 파라미터

- #### URL Parameter : **useParams** 훅 사용

```
// 요청: /diary/1
const params = useParams();
console.log(params.id);
```

<br/>

- #### Query String : **useSearchParams** 훅 사용

```
// 요청: /diary?id=1
const [params, setParams] = useSearchParams();
console.log(params.get('id'));
```

<br/>

---

> ## 정적 리소스 public / assets 차이

### \* public

- 해당 디렉토리에 저장된 정적리소스는 요청 시 정적리소스 파일을 그대로 응답

### \* assets

- 해당 디렉토리에 저장된 정적리소스는 요청 시 base64 문자열로 응답 (Data URI 포맷)
- 브라우저 메모리에 캐시되어 응답 속도를 최적화

※ 브라우저 개발자 도구의 네트워크 탭에서 이미지 소스 응답 속도와 용량으로 확인 가능

<br/>

---

> ## Web Storage

- 웹 브라우저에 기본적으로 내장되어 있는 데이터베이스
- 별도의 프로그램, 라이브러리 설치 필요없음 (자바스크립트 내장함수로 접근 가능)

### \* SessionStorage

- 브라우저 탭 별로 데이터 보관
- 탭이 종료되기 전에는 새로고침해도 데이터 유지
- 탭이 종료되거나 꺼지면 데이터 삭제

### \* LocalStorage

- 사이트 주소별로 데이터 보관
- 사용자가 직접 삭제하기 전까지 데이터 보관

```
// SessionStorage
sessionStorage.setitem(key, value); // 저장
sessionStorage.getitem(key); // 꺼냄

// LocalStorage
localStorage.setItem(key, value); // 저장
localStorage.getItem(key); // 꺼냄
```

<br/>
※ 웹 스토리지에 저장할 때에는 원시 타입으로 저장해야한다.

```
// 저장: 객체 -> 문자열
localStorage.setItem('person', {name: 'Lee'}); // [object Object]
localStorage.setItem('person', JSON.stringify({name: 'Lee'})); // {"name":"Lee"}

// 꺼냄: 문자열 -> 객체
JSON.parse(localStorage.getItem('person')); // 인수로 undefined 들어가면 에러 주의

// 삭제
localStorage.removeItem('person'); // 개발자 도구 어플리케이션 로컬 스토리지에서 직접 삭제도 가능
```
