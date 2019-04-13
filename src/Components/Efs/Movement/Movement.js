import React from 'react';
import t34_in_snow from "../../../images/t34_in_snow.png";
import './Movement.scss';

const Movement = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div className={props.language === 'en' ? '' : 'block-hidden'}>MOVEMENT</div>
                <div className={props.language === 'fr' ? '' : 'block-hidden'}>MOVEMENT fr</div>
                <div className={props.language === 'ru' ? '' : 'block-hidden'}>MOVEMENT ru</div>
                <div></div>
            </div>

        </div>
    );
}

export default Movement;