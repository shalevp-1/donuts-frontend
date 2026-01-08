import { useState } from "react";
import { Donut } from "../../Models/Donuts";
import './Card.css';

export default function Card(props: { theCharacterOfTheCard: Donut, bgColor: string, setTheClickedCardFunc: Function }) {
    const [shouldHideInfoOverCard, setShouldHideInfoOverCard] = useState(true);
    const [isClicked, setIsClicked] = useState(false);

    const cardClick = () => {
        setIsClicked(true);
        props.setTheClickedCardFunc(props.theCharacterOfTheCard);
    };

    return (
        <div
            className='CharacterCard'
            onMouseEnter={() => { setShouldHideInfoOverCard(false) }}
            onMouseLeave={() => { setShouldHideInfoOverCard(true) }}
            onClick={cardClick} >
            <div className='mainCardInfo'>
                <h2>{props.theCharacterOfTheCard.name}</h2>
                <img src={props.theCharacterOfTheCard.image} alt={props.theCharacterOfTheCard.name} />
                <h2>{props.theCharacterOfTheCard.price}$</h2>
            </div>
            <div className={shouldHideInfoOverCard ? "infoCard hdn" : "infoCard shw"}>
                <div id="text1">
                    <h2>{props.theCharacterOfTheCard.name}</h2>
                    <img id="img1" src={props.theCharacterOfTheCard.image} alt={props.theCharacterOfTheCard.name} />
                    <h2>{props.theCharacterOfTheCard.description}</h2>
                    <h2 className="price">{props.theCharacterOfTheCard.price}$</h2>
                    {isClicked && (
                        <h4 className="ingredients">Ingredients: {props.theCharacterOfTheCard.ingredients.join(', ')}</h4>
                    )}
                </div>
            </div>
        </div>
    );
}
