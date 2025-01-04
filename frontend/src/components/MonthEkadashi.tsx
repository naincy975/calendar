import { useState, useEffect } from "react";
import axios from "axios";

interface MonthEkadashiProps {
  year: number; 
  month: number; 
  longitude: number;
  latitude: number;
}

export const MonthEkadashi: React.FC<MonthEkadashiProps> = ({year, month, latitude, longitude}) => {
  type VrataDataEntry = {
    date: string;
    type: string;
    "naksatra yoga": string;
    info: string;
    parana: string[];
  };
  const [vrataData, setVrataData] = useState<VrataDataEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/month_vrata?year=${year}&month=${month}&latitude=${latitude}&longitude=${longitude}`);
        setVrataData(response.data); 
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message); 
        } else if (err instanceof Error) {
          setError(err.message); 
        } else {
          setError("An unknown error occurred."); 
        }
      }
    };

    fetchData();
  }, []);
  if (error) return <p>{error}</p>;
  return (
    <div className="container mt-5">
      <h2 className="text-center">Month Ekadashi</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Naksatra Yoga</th>
            <th>info</th>
            <th>Parana Start</th>
            <th>Parana End</th>
          </tr>
        </thead>
        <tbody>
        {vrataData.length > 0 ? (
            vrataData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.type}</td>
                <td>{entry["naksatra yoga"]}</td>
                <td>{entry.info}</td>
                <td>{entry.parana[0]}</td>
                <td>{entry.parana[1]}</td>
              </tr>
            ))
          ) : ""}
        </tbody>
      </table>
    </div>
  );
};


