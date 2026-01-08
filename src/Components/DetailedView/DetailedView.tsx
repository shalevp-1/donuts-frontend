import { Donut } from "../../Models/Donuts";
import Card from '../Card/Card';

export default function DetailedView(props: { theCharacterToShow: Donut }) {
    return (
        <div className="DetailedView">
            <Card theCharacterOfTheCard={props.theCharacterToShow} bgColor={"white"} setTheClickedCardFunc={() => { }} />
        </div>
    )
}
