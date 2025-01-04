import { useState, useEffect } from "react";
import axios from "axios";

interface MonthPanjikaProps {
  year: number; 
  month: number; 
  longitude: number;
  latitude: number;
}

export const MonthPanjika: React.FC<MonthPanjikaProps> = ({year, month, latitude, longitude}) => {
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
    moon_naksatra: string[]
    vikram_samvat: boolean;
  };
  const [vrataData, setVrataData] = useState<VrataDataEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/month_panjika?year=${year}&month=${month}&latitude=${latitude}&longitude=${longitude}`);
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
      <h2 className="text-center bg-red">Month Panjika</h2>
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
            <th>Naksatra</th>
            <th>Samvat</th>
          </tr>
        </thead>
        <tbody>
        {vrataData.length > 0 ? (
            vrataData.map((item, index) => (
              <tr key={index}>
                <td>{item.gregorian_date}</td>
                <td>{item.tithi}</td>
                <td>{new Date(item.sunrise).toLocaleString()}</td>
                <td>{new Date(item.sunset).toLocaleString()}</td>
                <td>{item.masa}</td>
                <td>{item.system}</td>
                <td>{item.adhika_masa ? "Yes" : "No"}</td>
                <td>{new Date(item.masa_start).toLocaleString()}</td>
                <td>{new Date(item.masa_end).toLocaleString()}</td>
                <td>{item.moon_naksatra[1]}</td>
                <td>{item.vikram_samvat}</td>
              </tr>
            ))
          ) : ""}
        </tbody>
      </table>
    </div>
  );
};


