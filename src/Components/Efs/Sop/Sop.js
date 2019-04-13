import React from 'react';
import t34_in_snow from "../../../images/t34_in_snow.png";
import './Sop.scss';

const Sop = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div className={props.language === 'en' ? '' : 'block-hidden'}>SEQUENCE OF PLAY</div>
                <div className={props.language === 'fr' ? '' : 'block-hidden'}>SEQUENCE OF PLAY fr</div>
                <div className={props.language === 'ru' ? '' : 'block-hidden'}>SEQUENCE OF PLAY ru</div>
                <div></div>
            </div>

        </div>
    );
}

export default Sop;