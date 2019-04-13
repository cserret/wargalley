import React from 'react';
import t34_in_snow from "../../../images/t34_in_snow.png";
import './Headquarters.scss';

const Headquarters = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div className={props.language === 'en' ? '' : 'block-hidden'}>HEADQUARTERS</div>
                <div className={props.language === 'fr' ? '' : 'block-hidden'}>HEADQUARTERS fr</div>
                <div className={props.language === 'ru' ? '' : 'block-hidden'}>HEADQUARTERS ru</div>
                <div></div>
            </div>

        </div>
    );
}

export default Headquarters;