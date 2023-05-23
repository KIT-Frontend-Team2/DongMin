import ContextQ2Form2 from "./Form2";
import { useUserList } from "../../../../../store/3_context";

const ContextQ2Form = () => {
  const [user, dispatch] = useUserList();
  const handleAdd = (e) => {
    dispatch({
      type: "ADD",
      payload: e,
    });
  };
  console.log(user);
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleAdd(e);
        }}
      >
        <h1>Q2Form</h1>
        <input placeholder="name" name="name" />
        <input placeholder="nick-name" name="nickname" />
        <button>추가</button>
        <ContextQ2Form2 />
      </form>
    </div>
  );
};
export default ContextQ2Form;
