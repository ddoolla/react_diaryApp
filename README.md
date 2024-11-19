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
    <Route path="/diary/:id" uri={<Diary />} /> // :id - url parameter
    <Route path="/Home" uri={<Home />} />
    <Route path="/New" uri={<New />} />
    <Route path="/*" uri={<NotFound />} />
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

```
const nav = useNavigate();
const onClick = () => { nav("/"); }
```

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
