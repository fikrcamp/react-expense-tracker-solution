import { FaBackspace } from "react-icons/fa";

function Expenses({ data, remove }) {
  return (
    <div className="expense exp">
      <div>💲{data.amount}</div>
      <div>{data.description}</div>
      <div>
        <FaBackspace
          className="remove"
          size={30}
          color={"red"}
          onClick={() => remove(data.id, data.amount)}
        />
      </div>
    </div>
  );
}

export default Expenses;
