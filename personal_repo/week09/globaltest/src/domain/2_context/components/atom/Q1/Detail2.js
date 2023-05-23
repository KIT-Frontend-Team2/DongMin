import { useUseModal } from "../../../../../store/2_context";
const ContextQ1Detail2 = () => {
  const [isModalOpenA, setIsModalOpenA, isModalOpenB, setIsModalOpenB] =
    useUseModal();
  const handleShowB = () => {
    setIsModalOpenB(!isModalOpenB);
    console.log(isModalOpenB);
  };
  return (
    <>
      <h2>ContextQ1Detail2</h2>
      <button
        onClick={() => {
          handleShowB();
        }}
      >
        {isModalOpenB ? "숨기기" : "보이기"}
      </button>
    </>
  );
};
export default ContextQ1Detail2;
