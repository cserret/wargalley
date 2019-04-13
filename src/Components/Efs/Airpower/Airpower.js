import React from 'react';
import t34_in_snow from "../../../images/t34_in_snow.png";
import './Airpower.scss';

const Airpower = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div className={props.language === 'en' ? '' : 'block-hidden'}>AIRPOWER</div>
                <div className={props.language === 'fr' ? '' : 'block-hidden'}>AIRPOWER fr</div>
                <div className={props.language === 'ru' ? '' : 'block-hidden'}>AIRPOWER ru</div>
                <div></div>
            </div>

        </div>
    );
}

export default Airpower;