import { useState, useEffect } from "react";
import axios from "axios";

interface YearEkadashiProps {
  year: number; 
  longitude: number;
  latitude: number;
}

export const YearEkadashi: React.FC<YearEkadashiProps> = ({year, latitude, longitude}) => {
  type VrataDataEntry = {
    gregorian_date: string;
    tithi: string;
    sunrise: string;
    sunset: string;
    masa: string;
    system: string;
    adhika_masa: boolean;
    masa_start: string;
    masa_end: string;
    vikram_samvat: boolean;
  };
  const [vrataData, setVrataData] = useState<VrataDataEntry[]>([]);
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
    <div className="container mt-5">
      <h2 className="text-center">Year Ekadashi</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Tithi</th>
            <th>Sunrise</th>
            <th>Sunset</th>
            <th>Month</th>
            <th>System</th>
            <th>Adhika Masa</th>
            <th>Month Start</th>
            <th>Month End</th>
            <th>Samvat</th>
          </tr>
        </thead>
        <tbody>
        {vrataData.length > 0 ? (
            vrataData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.gregorian_date}</td>
                <td>{entry.tithi}</td>
                <td>{entry.sunrise}</td>
                <td>{entry.sunset}</td>
                <td>{entry.masa}</td>
                <td>{entry.system}</td>
                <td>{entry.adhika_masa ? "Yes" : "No"}</td>
                <td>{entry.masa_start}</td>
                <td>{entry.masa_end}</td>
                <td>{entry.vikram_samvat}</td>
              </tr>
            ))
          ) : ""}
        </tbody>
      </table>
    </div>
  );
};


