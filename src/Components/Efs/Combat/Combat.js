import React from 'react';
import t34_in_snow from "../../../images/t34_in_snow.png";
import './Combat.scss';

const Combat = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div className={props.language === 'en' ? '' : 'block-hidden'}>COMBAT</div>
                <div className={props.language === 'fr' ? '' : 'block-hidden'}>COMBAT fr</div>
                <div className={props.language === 'ru' ? '' : 'block-hidden'}>COMBAT ru</div>
                <div></div>
            </div>

        </div>
    );
}

export default Combat;