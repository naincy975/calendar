import { useState } from "react";
import { MonthPanjika } from "../MonthPanjika";

export const InputForm = () => {
    
    const [monthPanjika, setMonthPanjika] = useState(0);
    const [year, setYear] = useState<number>(2024);
    const [month, setMonth] = useState<number>(4);
    const [latitude, setLatitude] = useState<number>(27.58);
    const [longitude, setLongitude] = useState<number>(77.7);
      
    const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10); 
        setYear(isNaN(value) ? 0 : value);
    };
    const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10); 
        setMonth(isNaN(value) ? 0 : value);
    };
    const handleLatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value); 
        setLatitude(isNaN(value) ? 0 : value);
    };
    const handleLongChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);  
        setLongitude(isNaN(value) ? 0 : value);
    };
    const clickMonthPanjika = () => {
        return setMonthPanjika(1);
    }
    return(
        <>
        <label>Year</label>
        <input className="m-4" type="number" name="Year" value={year} onChange={handleYearChange} placeholder="Enter Year"/>
        <label>Month</label>
        <input className="m-4" type="number" name="Month" value={month} onChange={handleMonthChange} placeholder="Enter Month"/>
        <label>Latitude</label>
        <input className="m-4" type="number" step="any" name="Latitude" value={latitude} onChange={handleLatChange} placeholder="Enter Latitude"/>
        <label>Longitude</label>
        <input className="m-4" type="number" step="any" name="Longitude" value={longitude} onChange={handleLongChange} placeholder="Enter Longitude"/>

        <button className='btn btn-primary' onClick={clickMonthPanjika}>Get month panjika</button>
        {monthPanjika ? <MonthPanjika year={year} month={month} latitude={latitude} longitude={longitude} /> : ""}
        </>
    )
}