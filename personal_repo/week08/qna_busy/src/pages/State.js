import { useNavigate } from "react-router-dom";
import State1 from "../hooks/2.state/state_1";
import State2 from "../hooks/2.state/state_2";
import State3 from "../hooks/2.state/state_3";

function StatesPage() {
  const navigate = useNavigate();

  const onPreviousPage = () => {
    navigate(-1);
  };

  return (
    <div>
      <State1 />
      <hr />
      <State2 />
      <hr />
      <State3 />
      <hr />
      <button onClick={onPreviousPage}>이전으로</button>
    </div>
  );
}
export default StatesPage;
