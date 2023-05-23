import { useUserList } from "../../../../../store/3_context";
const ContextQ2Form3 = () => {
  const [user, dispatch] = useUserList();
  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <h1>Q2Form3</h1>
      <button
        onClick={() => {
          handleReset();
        }}
      >
        RESET
      </button>
    </div>
  );
};
export default ContextQ2Form3;
