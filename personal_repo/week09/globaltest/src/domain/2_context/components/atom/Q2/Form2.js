import { useUserList } from "../../../../../store/3_context";
const ContextQ2Form2 = () => {
  const [user, dispatch] = useUserList();
  const handleAddStatus = () => {
    dispatch({
      type: "STATUS",
    });
  };
  return (
    <div>
      <h1>Q2Form2</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleAddStatus();
        }}
      >
        STATUS 추가
      </button>
    </div>
  );
};
export default ContextQ2Form2;
