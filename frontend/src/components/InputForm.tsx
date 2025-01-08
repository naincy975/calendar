import { useState } from "react";
import { Button } from "./Button";
import { RenderComponent } from "./RenderComponent";

export const InputForm = () => {

    const [state, setState] = useState(0);
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [month, setMonth] = useState<number>(new Date().getMonth()+1);
    const [system, setSystem] = useState<string>("purnimata");
    const [latitude, setLatitude] = useState<number>(27.58);
    const [longitude, setLongitude] = useState<number>(77.7);
    
    const years = Array.from({ length: 200 }, (_, index) => 1900 + index);
    const months = Array.from({ length: 12 }, (_, index) => 1 + index);
    ;
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
                <select className="px-10 center py-2 border border-gray-300 rounded-lg my-5" value={year} onChange={((e) => {setYear(parseInt(e.target.value))})} >
                    {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                    ))}
                </select>
                <label>Month</label>
                <select className="px-10 center py-2 border border-gray-300 rounded-lg my-5" value={month} onChange={((e) => {setMonth(parseInt(e.target.value))})} >
                    {months.map((month) => (
                    <option key={month} value={month}>
                        {month}
                    </option>
                    ))}
                </select>
                <label>System</label>
                <select className="px-10 center py-2 border border-gray-300 rounded-lg my-5" value={system} onChange={((e) => {setSystem(e.target.value)})} >
                    {["amanta", "purnimata"].map((system) => (
                    <option key={system} value={system}>
                        {system}
                    </option>
                    ))}
                </select>
                <label>Latitude</label>
                <input className="p-2 border text-center border-gray-300 rounded-lg my-5" type="number" step="any" name="Latitude" value={latitude} onChange={((e) => {setLatitude(parseFloat(e.target.value))})}  placeholder="Enter Latitude" />
                <label>Longitude</label>
                <input className="p-2 border text-center border-gray-300 rounded-lg my-5" type="number" step="any" name="Longitude" value={longitude} onChange={((e) => setLongitude(parseFloat(e.target.value)))} placeholder="Enter Longitude" />
            </div>

            <div className="my-10">
                <Button text={"Get Month Ekadashi"} handleClick={clickMonthEkadashi} />
                <Button text={"Get Year Ekadashi"} handleClick={clickYearEkadashi} />
                <Button text={"Get Month Panjika"} handleClick={clickMonthPanjika} />
                <Button text={"Get Year Panjika"} handleClick={clickYearPanjika} />
                <Button text={"Get Special Vrata"} handleClick={clickSpecialVrata} />
            </div>
            <RenderComponent year={year} month={month} latitude={latitude} longitude={longitude} system={system} state={state} />
        </>
    )
}