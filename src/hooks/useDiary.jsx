import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  /* 
    * useNavigate 훅
      - 탐색할 컴포넌트가 마운트되기 전에는 동작할 수 없다.
      - 이벤트 헨들러에서 사용할 때는 이미 마운트가 된 후 이벤트가 동작하는 것이라 관계 X
      - 컴포넌트 안에서 함수로 작성하게 되면, 항상 마운트되기 전 이므로 동작하지 않기 때문에
        useEffect 훅을 사용하여 마운트 이후에 동작하도록 구현해야 한다.
  */
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id, data]); // 마운트된 후 와 params.id, data 가 변경될 때마다 동작

  return curDiaryItem;
};

export default useDiary;
