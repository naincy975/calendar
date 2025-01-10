import { useState } from "react";
import { Button } from "./Button";
import { RenderComponent } from "./RenderComponent";

export const InputForm = () => {
    const months = Array.from({ length: 12 }, (_, index) => 1 + index);
    const [state, setState] = useState(0);
    const [inputs, setInputs] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth()+1,
        latitude: 27.58,
        longitude: 77.7
    });
    
    const handleInputs = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setInputs((prev) => ({...prev, [name]: value }));
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
                <label htmlFor="year">Year</label>
                <input className="p-2 border border-gray-300 rounded-lg my-5" type="number" name="year" value={inputs.year} onChange={(e) => {handleInputs(e)}} placeholder="Enter Year" />
                
                <label htmlFor="month">Month</label>
                <select className="px-10 center py-2 border border-gray-300 rounded-lg my-5" value={inputs.month} name="month" onChange={(e) => {handleInputs(e)}}>
                    {months.map((month) => (
                    <option key={month} value={month}>
                        {month}
                    </option>
                    ))}
                </select>
                <label htmlFor="latitude">Latitude</label>
                <input className="p-2 border text-center border-gray-300 rounded-lg my-5" type="number" step="any" name="Latitude" value={inputs.latitude} onChange={(e) => {handleInputs(e)}} placeholder="Enter Latitude" />
                <label htmlFor="longitude">Longitude</label>
                <input className="p-2 border text-center border-gray-300 rounded-lg my-5" type="number" step="any" name="Longitude" value={inputs.longitude} onChange={(e) => {handleInputs(e)}}  placeholder="Enter Longitude" />
            </div>

            <div className="my-10">
                <Button text={"Get Month Ekadashi"} handleClick={clickMonthEkadashi} />
                <Button text={"Get Year Ekadashi"} handleClick={clickYearEkadashi} />
                <Button text={"Get Month Panjika"} handleClick={clickMonthPanjika} />
                <Button text={"Get Year Panjika"} handleClick={clickYearPanjika} />
                <Button text={"Get Special Vrata"} handleClick={clickSpecialVrata} />
            </div>
            <RenderComponent year={inputs.year} month={inputs.month} latitude={inputs.latitude} longitude={inputs.longitude} state={state} />
        </>
    )
}