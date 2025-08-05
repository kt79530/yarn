import Comp from './comp/Comp';
//객체지향 언어는 불필요한 코드에 반복을 줄이고 언제든 재활용하세요.
// Don't repeat your self
//생명주기 컴포넌트의 생성, 변경, 소멸 과정을 뜻한다..
//render(), constructor(), componentDidMount()
//위의 태그들이 복잡하여 함수형 컴포넌트에 hook 등장
function App() {
  return (
   <>
   <h1>리액트 시작하기</h1>
   <p>sass 적용
   <Comp/>
   </p>
   </>
  );
}

export default App;
