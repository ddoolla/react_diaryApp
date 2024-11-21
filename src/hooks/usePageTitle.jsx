import { useDebugValue, useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0]; // 관례상 DOM 요소가 할당되는 변수명에는 '$'를 앞에 붙여준다.
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
