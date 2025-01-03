import { special_vrata } from "../../constants/specialvrata";

export const Table = () => {

  return (
    <div className="container mt-5">
      <h2 className="text-center">Special Vrata Table</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Vrata Name</th>
            <th>Paran Start</th>
            <th>Paran End</th>
          </tr>
        </thead>
        <tbody>
          {special_vrata.map((entry) => (
            <tr>
              <td>{entry.vrata_name}</td>
              <td>{entry.paran_start}</td>
              <td>{entry.paran_end}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


