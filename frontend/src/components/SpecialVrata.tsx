import { useState, useEffect } from "react";
import axios from "axios";

interface SpecialVrataProps {
  year: number; 
  latitude: number; 
  longitude: number;
}

export const SpecialVrata: (React.FC<SpecialVrataProps>) =  ({year, latitude, longitude}) => {
  interface VrataData {
    [eventName: string]: Array<[string, string, string, number]>;
  }
  const [vrataData, setVrataData] = useState<VrataData>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/special_vrata?year=${year}&latitude=${latitude}&longitude=${longitude}`);
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
      <h2 className="text-center">Special Vratas</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Vrata Name</th>
            <th>Date</th>
            <th>Paran Start</th>
            <th>Paran End</th>
          </tr>
        </thead>
        <tbody>
        {Object.entries(vrataData).map(([eventName, eventDetails]) =>
            eventDetails.map((details, index) => (
              <tr key={`${eventName}-${index}`}>
                <td>{eventName}</td>
                <td>{details[0]}</td>
                <td>{details[1]}</td>
                <td>{details[2]}</td>
              </tr>
            ))
        )}
        </tbody>
      </table>
    </div>
  );
};


