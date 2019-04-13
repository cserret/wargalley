import React from 'react';
import t34_in_snow from "../../../images/t34_in_snow.png";
import './Special.scss';

const Special = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div className={props.language === 'en' ? '' : 'block-hidden'}>SPECIAL UNITS</div>
                <div className={props.language === 'fr' ? '' : 'block-hidden'}>SPECIAL UNITS fr</div>
                <div className={props.language === 'ru' ? '' : 'block-hidden'}>SPECIAL UNITS ru</div>
                <div></div>
            </div>

        </div>
    );
}

export default Special;