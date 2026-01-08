import React, {  useState } from 'react'
import { donutsArr } from './DonutsData';
import './DountsGallery.css'
import { Donut } from '../../Models/Donuts';
import Card from '../Card/Card';
//import { log } from 'console';
import DetailedView from '../DetailedView/DetailedView';


export default function DonutsGallery() {
    const [theClickedCard, setTheClickedCard] = useState<Donut>();
    //const [donutsData, setDount] = useState(donutsArr);
    const [theColor] = useState("white");
    

    return (
        <div className='DonutsGallery'>
        
           
            <div className="theGallery">
           
                {donutsArr.map((donut) =>
                    {
                  
                       return <Card theCharacterOfTheCard={donut} bgColor={theColor} setTheClickedCardFunc={setTheClickedCard} />               
                }

                )}
                 <img src="https://image.slidesdocs.com/responsive-images/background/donuts-falling-down-on-white-powerpoint-background_fd769f0fce__960_540.jpg" alt="Glazed donut with rainbow sprinkles" className="donutBackground"/>
            </div>
            <div className='galleryRightSide'>
                <div id='innerDetailedViewDiv'>
                    {theClickedCard && <DetailedView theCharacterToShow={theClickedCard}  />}
                  
                </div>
            </div>
        </div>
    )
}
