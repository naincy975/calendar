import { useState, useEffect } from "react";
import { Fragment } from "react";
import axios from "axios";

interface YearPanjikaProps {
  year: number; 
  longitude: number;
  latitude: number;
}

export const YearPanjika: React.FC<YearPanjikaProps> = ({year, latitude, longitude}) => {
    interface TableCell {
        gregorian_date: string;
        tithi: string;
        tithi_start: string;
        tithi_end: string;
        sunrise: string;
        sunset: string;
        masa: string;
        system: string;
        adhika_masa: boolean;
        masa_start: string;
        masa_end: string;
        moon_naksatra: string[]
        vikram_samvat: boolean;
    }
    // type TableRow = TableCell[];
    type vrataData = TableCell[];
    
  const [vrataData, setVrataData] = useState<vrataData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/year_panjika?year=${year}&latitude=${latitude}&longitude=${longitude}`);
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
      <h2 className="text-center">Year Panjika</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Tithi</th>
            <th>Tithi Start</th>
            <th>Tithi End</th>
            <th>Sunrise</th>
            <th>Sunset</th>
            <th>Month</th>
            <th>System</th>
            <th>Is Adhika Masa ?</th>
            <th>Month Start</th>
            <th>Month End</th>
            <th>Moon Naksatra</th>
            <th>Samvat</th>
          </tr>
        </thead>
        <tbody>
          {vrataData.map((row, rowIndex) => (
            <Fragment key={rowIndex}>
              {row.map((item, colIndex) => (
                <tr key={`${rowIndex}-${colIndex}`}>
                  <td>{item.gregorian_date}</td>
                  <td>{item.tithi}</td>
                  <td>{item.tithi_start}</td>
                  <td>{item.tithi_end}</td>
                  <td>{item.sunrise}</td>
                  <td>{item.sunset}</td>
                  <td>{item.masa}</td>
                  <td>{item.system}</td>
                  <td>{item.adhika_masa ? "Yes" : "No"}</td>
                  <td>{item.masa_start}</td>
                  <td>{item.masa_end}</td>
                  <td>{item.moon_naksatra[1]}</td>
                  <td>{item.vikram_samvat}</td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};


