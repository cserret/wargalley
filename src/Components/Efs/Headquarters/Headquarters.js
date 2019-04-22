import React, { Component } from 'react';
import headquarters from "../../../images/efs/hq/headquarters.jpg";
import soviet_headquarters_front from "../../../images/efs/hq/soviet_headquarters_front.png";
import soviet_headquarters_back from "../../../images/efs/hq/soviet_headquarters_back.png";
import './Headquarters.scss';


export default class Headquarters extends Component {

    state = {
        contextDrawnEN: false,
        contextDrawnFR: false
    }

    componentDidMount = () => {
        console.log('this.props: ', this.props);
        this.drawCanvas(this.props.language);
    }

    componentWillReceiveProps = (props) => {
        console.log('componentWillReceiveProps: ', props);
        this.drawCanvas(props.languag);
    }


    drawCanvas = (language) => {

    }

    render = () => {
        return (
            <div className="content">

                <div className="content-title">
                    <div className={this.props.language === 'en' ? '' : 'block-hidden'}>HEADQUARTERS</div>
                    <div></div>
                </div>
                <div className="top-image">
                    <img src={headquarters} alt="headquarters" />
                    <div>Headquarters of the Western Front, Autumn 1941. Left to right - Lieutenant General Vasily Sokolovsky, Chief of Staff Nikolay Bulganin, Army General Gerogy Zhukov.</div>
                </div>
                <div className="spacer1rem" />
                <div className="pdiv">
                    Only the Soviet player has Headquarters. The Soviet player is hindered by an inefficient Command structure, and the Headquarter rules simulate these difficulties. The Soviet HQ's "Command range" is 4 hexes. This range is traced without regard to terrain, weather, or Axis units. The Command Value of a headquarters is used, separately, for 3 things. It represents:
                    <ul className="ul-no-top">
                        <li>The number of non-motorized units which it can activate. The HQ's cannot activate itself or any other HQ's.</li>
                        <li>The number of motorized units it can move in Reaction movement.</li>
                        <li>The number of No Retreat and Additional Retreat orders it can issue.</li>
                        <li>The HQ's Command Value can be reduced by enemy air interdiction.</li>
                    </ul>
                </div>
                <div className="hq-info-container">
                <div className="title">SOVIET HEADQUARTERS INFORMATION</div>
                <div className="operational-side">Operational side</div>
                <div className="non-operational-side">Non-operational side</div>
                <div className="command-value">COMMAND<br/>VALUE</div>
                <div className="recovery-value">RECOVERY<br/>VALUE</div>
                <div className="hq-info">
                    <img src={soviet_headquarters_front} alt="Soviet headquarters front"/>
                    <img src={soviet_headquarters_back} alt="Soviet headquarters back"/>
                </div>
                </div>
            </div>
        );
    }
}

