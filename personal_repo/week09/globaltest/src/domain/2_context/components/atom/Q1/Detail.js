import ContextQ1Detail2 from "./Detail2";
import { useUseModal } from "../../../../../store/2_context";
const ContextQ1Detail = () => {
  const [isModalOpenA, setIsModalOpenA, isModalOpenB, setIsModalOpenB] =
    useUseModal();
  const handleShowA = () => {
    setIsModalOpenA(!isModalOpenA);
    console.log(isModalOpenA);
  };
  return (
    <>
      <h2>ContextQ1Detail</h2>
      <button
        onClick={() => {
          handleShowA();
        }}
      >
        {isModalOpenA ? "숨기기" : "보이기"}
      </button>
      <ContextQ1Detail2 />
    </>
  );
};
export default ContextQ1Detail;
