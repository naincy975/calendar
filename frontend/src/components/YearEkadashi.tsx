import { useState, useEffect } from "react";
import axios from "axios";

interface YearEkadashiProps {
  year: number; 
  longitude: number;
  latitude: number;
}

export const YearEkadashi: React.FC<YearEkadashiProps> = ({year, latitude, longitude}) => {
  type VrataDataitem = {
    date: string;
    type: string;
    "naksatra yoga": string;
    info: string;
    parana: string[];
  };
  const [vrataData, setVrataData] = useState<VrataDataitem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/year_vrata?year=${year}&latitude=${latitude}&longitude=${longitude}`);
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
    <div className="mx-10">
      <h2 className="text-center">Year Ekadashi</h2>
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
            vrataData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.type}</td>
                <td>{item["naksatra yoga"]}</td>
                <td>{item.info}</td>
                <td>{new Date(item.parana[0]).toLocaleString()}</td>
                <td>{new Date(item.parana[1]).toLocaleString()}</td>
              </tr>
            ))
          ) : ""}
        </tbody>
      </table>
    </div>
  );
};


