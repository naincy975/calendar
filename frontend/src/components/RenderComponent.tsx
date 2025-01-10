import { MonthEkadashi } from "./MonthEkadashi";
import { YearEkadashi } from "./YearEkadashi";
import { MonthPanjika } from "./MonthPanjika";
import { YearPanjika } from "./YearPanjika";
import { SpecialVrata } from "./SpecialVrata";
interface RenderComponenetProps {
    year: number; 
    month: number; 
    longitude: number;
    latitude: number;
    state: number;
}

export const RenderComponent: React.FC<RenderComponenetProps> = ({year, month, latitude, longitude, state}) => {
    const renderComponent = (state: number) => {
        switch (state) {
            case 1:
                return <MonthEkadashi year={year} month={month} latitude={latitude} longitude={longitude} />;
            case 2:
                return <YearEkadashi year={year} latitude={latitude} longitude={longitude} />;
            case 3:
                return <MonthPanjika year={year} month={month} latitude={latitude} longitude={longitude}  />;
            case 4:
                return <YearPanjika year={year} latitude={latitude} longitude={longitude} />;
            case 5:
                return <SpecialVrata />;
            default:
                return "";
        }
    }
    
    return (
        <>
            {renderComponent(state)}
        </>
    );
}