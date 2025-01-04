import { useState } from "react";
import { MonthPanjika } from "./MonthPanjika";
import { MonthEkadashi } from "./MonthEkadashi";
import { YearEkadashi } from "./YearEkadashi";
import { YearPanjika } from "./YearPanjika";
import { SpecialVrata } from "./SpecialVrata";

export const InputForm = () => {
    
    const [state, setState] = useState(0);
    const [year, setYear] = useState<number>(2024);
    const [month, setMonth] = useState<number>(4);
    const [latitude, setLatitude] = useState<number>(27.58);
    const [longitude, setLongitude] = useState<number>(77.7);
      
    const renderComponent = (state: number) => {
        switch (state) {
            case 1:
                return <MonthEkadashi year={year} month={month} latitude={latitude} longitude={longitude}/>;
            case 2:
                return <YearEkadashi year={year} latitude={latitude} longitude={longitude}/>;
            case 3: 
                return <MonthPanjika year={year} month={month} latitude={latitude} longitude={longitude}/>;
            case 4:
                return <YearPanjika year={year} latitude={latitude} longitude={longitude}/>;
            case 5: 
                return <SpecialVrata />;
            default:
                return "";
        }
    }
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
    const clickMonthEkadashi = () => {
        return setState(1);
    }
    const clickYearEkadashi = () => {
        return setState(2);
    }
    const clickMonthPanjika = () => {
        return setState(3);
    }
    const clickYearPanjika = () => {
        return setState(4);
    }
    const clickSpecialVrata = () => {
        return setState(5);
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

        <button className='btn btn-primary mx-4' onClick={clickMonthEkadashi}>Get Month Ekadashi</button>
        <button className='btn btn-primary mx-4' onClick={clickYearEkadashi}>Get Year Ekadashi</button>
        <button className='btn btn-primary mx-4' onClick={clickMonthPanjika}>Get Month Panjika</button>
        <button className='btn btn-primary mx-4' onClick={clickYearPanjika}>Get Year Panjika</button>
        <button className='btn btn-primary mx-4' onClick={clickSpecialVrata}>Get Special Vrata</button>
        {renderComponent(state)}
         </>
    )
}