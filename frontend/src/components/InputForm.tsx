import { useCallback, useState } from "react";
import { MonthPanjika } from "./MonthPanjika";
import { MonthEkadashi } from "./MonthEkadashi";
import { YearEkadashi } from "./YearEkadashi";
import { YearPanjika } from "./YearPanjika";
import { SpecialVrata } from "./SpecialVrata";
import { Button } from "./Button";

export const InputForm = () => {

    const [state, setState] = useState(0);
    const [year, setYear] = useState<number>(2024);
    const [month, setMonth] = useState<number>(4);
    const [latitude, setLatitude] = useState<number>(27.58);
    const [longitude, setLongitude] = useState<number>(77.7);


    useCallback(() => {
        renderComponent(state);
    }, [setYear,setMonth, setLatitude, setLongitude, setState]);
    const renderComponent = (state: number) => {
        switch (state) {
            case 1:
                return <MonthEkadashi year={year} month={month} latitude={latitude} longitude={longitude} />;
            case 2:
                return <YearEkadashi year={year} latitude={latitude} longitude={longitude} />;
            case 3:
                return <MonthPanjika year={year} month={month} latitude={latitude} longitude={longitude} />;
            case 4:
                return <YearPanjika year={year} latitude={latitude} longitude={longitude} />;
            case 5:
                return <SpecialVrata />;
            default:
                return "";
        }
    }
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
    return (
        <>
            <div className="m-10">
                <label>Year</label>
                <input className="p-2 border border-gray-300 rounded-lg my-5" type="number" name="Year" value={year} onChange={((e) => {setYear(parseInt(e.target.value))})} placeholder="Enter Year" />
                <label>Month</label>
                <input className="p-2 border border-gray-300 rounded-lg my-5" type="number" name="Month" value={month} onChange={((e) => {setMonth(parseInt(e.target.value))})}  placeholder="Enter Month" />
                <label>Latitude</label>
                <input className="p-2 border border-gray-300 rounded-lg my-5" type="number" step="any" name="Latitude" value={latitude} onChange={((e) => {setLatitude(parseFloat(e.target.value))})}  placeholder="Enter Latitude" />
                <label>Longitude</label>
                <input className="p-2 border border-gray-300 rounded-lg my-5" type="number" step="any" name="Longitude" value={longitude} onChange={((e) => setLongitude(parseFloat(e.target.value)))} placeholder="Enter Longitude" />
            </div>
            <div className="my-10">
                <Button text={"Get Month Ekadashi"} handleClick={clickMonthEkadashi} />
                <Button text={"Get Year Ekadashi"} handleClick={clickYearEkadashi} />
                <Button text={"Get Month Panjika"} handleClick={clickMonthPanjika} />
                <Button text={"Get Year Panjika"} handleClick={clickYearPanjika} />
                <Button text={"Get Special Vrata"} handleClick={clickSpecialVrata} />
            </div>
            {renderComponent(state)}
        </>
    )
}