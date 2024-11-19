# React_DiaryApp

> ## 리엑트 라우터

### `1. 라이브러리 의존성 추가`

```
npm i react-router-dom
```

### `2. main.jsx`

\- BrowserRouter import 후 \<App /> 감싸기

### `3. 페이지 이동 방법`

- Routes, Route 컴포넌트 사용
  - Routes 컴포넌트 내부에는 Route 컴포넌트만 사용 가능
  - \* : 와일드 카드 (모든 경로에 해당)

```
<Routes>
    <Route path="/diary/:id" uri={<Diary />} /> // :id - url parameter
    <Route path="/Home" uri={<Home />} />
    <Route path="/New" uri={<New />} />
    <Route path="/*" uri={<NotFound />} />
</Routes>
```

<br/>

- Link 컴포넌트 사용

```
<Link to={"/"}>Home</Link>
```

<br/>

- useNavigate 훅 사용
  - 특정 이벤트 시 함수 호출 방식으로 사용 (버튼 등)

```
const nav = useNavigate();
const onClick = () => { nav("/"); }
```

<br/>

---

> ## 동적 파라미터

- URL Parameter : useParams 훅 사용

```
// 요청: /diary/1
const params = useParams();
console.log(params.id);
```

- Query String : useSearchParams 훅 사용

```
// 요청: /diary?id=1
const [params, setParams] = useSearchParams();
console.log(params.get('id'));
```
