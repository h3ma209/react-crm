import { useNavigate } from "react-router-dom";

export default function TableRow(props) {
  const id = props.id;
  const type = props.type;
  const name = props.name;
  const date = props.date;
  const deleteId = props.deleteId;
  const history = useNavigate();

  const DeleteData = (dtId) => {
    console.log(dtId);
    
    
    fetch("http://localhost:8000/data/" + dtId, { method: "DELETE" }).then(() => {
      history("/customers");
      console.log('navigating')
    });
  };

  return (
    <tr className="h-16 text-left border-b border-b border-indigo-800">
      <td className="py-5">{id}</td>
      <td className="py-5">{type}</td>
      <td className="py-5">{name}</td>
      <td className="py-5">{date}</td>
      <td className="py-5">
        <button
          className="mx-1 flex-shrink-0 bg-indigo-600 hover:bg-indigo-800 border-indigo-600 hover:border-indigo-800 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={() => {
            DeleteData(deleteId);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
