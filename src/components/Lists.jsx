import { useContext } from "react";
import { ListCtx } from "../contexts/ListCtx";
import JobItems from "./JobItems";

function Lists(props) {
  const { lists } = useContext(ListCtx);
  return (
    <div className="row justify-content-center">
      {lists.map((x) => (
        <JobItems key={x.id} item={x} />
      ))}
    </div>
  );
}

export default Lists;
