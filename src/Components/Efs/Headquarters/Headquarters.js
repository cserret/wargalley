import React, { Component } from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
//import BsrLink from "../BsrLink/BsrLink";
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
        this.drawCanvas(this.props.language);
    }

    componentWillReceiveProps = (props) => {
        this.drawCanvas(props.language);
    }


    drawCanvas = (language) => {
        var canvasDiv;
        var canvas;
        var ctx;
        canvasDiv = document.getElementById('hq_info_container');
     
        canvas = document.createElement('canvas');
        canvas.setAttribute('width', 850);
        canvas.setAttribute('height', 240);
        canvas.setAttribute('id', 'canvas');
        canvasDiv.appendChild(canvas);

        ctx = canvas.getContext("2d");

        ctx.strokeStyle = "#df4b26";
        ctx.lineJoin = "round";
        ctx.lineWidth = 5;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(190, 72);
        ctx.lineTo(220, 72);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(572, 72);
        ctx.lineTo(600, 72);
        ctx.stroke();
        

        
    }

    render = () => {
        return (
            <div className="content">
                <div>
                    <div className="content-title">
                        <div>HEADQUARTERS</div>
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
                        </ul>
                        <div className="special1">The HQ's Command Value can be reduced by enemy air interdiction.</div>
                    </div>
                    <div id="hq_info_container" className="hq-info-container">
                        <div className="title">SOVIET HEADQUARTERS INFORMATION</div>
                        <div className="operational-side">Operational side</div>
                        <div className="non-operational-side">Non-operational side</div>
                        <div className="command-value">COMMAND<br />VALUE</div>
                        <div className="recovery-value">RECOVERY<br />VALUE</div>
                        <div className="hq-info">
                            <img src={soviet_headquarters_front} alt="Soviet headquarters front" />
                            <img src={soviet_headquarters_back} alt="Soviet headquarters back" />
                        </div>
                    </div>


                    <div className="spacer2rem" />
                    <div className="subheader-normal">Unit Activation</div>
                    <p>
                        Operational Soviet Headquarters can "activate" non-motorized (including orange MA and green MA units) units to move in the Soviet Motorized Movement Phase. The units must be within Command range of the HQ's. The units that are activated can move up to their full movement allowance. They can engage in combat following the Motorized Movement Phase. To activate a unit, the HQ's must "pay" one of its Command points. One Command point per unit, regardless of size. Operational HQ's can activate one in-range Guards unit at no Command point cost.
</p>
                    <div className="subheader-normal">Orders</div>
                    <p>
                        Soviet HQ's can issue, at the cost of a Command point per Defender Hex, a No Retreat order or a Additional Retreat order, to any Defender Hexes within its Command range. Soviet HQ's can also issue orders to attacking Soviet units.
</p>

                    <div className="subheader-normal">Non-operational Headquarters (Non-op HQ's)</div>
                    <p>
                        When Soviet Headquarters enter the game as a reinforcement, they are in a non-op state. In some scenarios the Soviet player may start out with a non-op HQ's on the map. Non-op HQ's cause various problems. Any unit that is in range of a non-op headquarters "loses" contact with any in range operational HQ's. Non-Op headquarters can move normally.
</p>



                    <div className="gray-box">
                        <p className="subsubheader">Non-op HQ's effects</p>
                        <ul>
                            <li>Units within Command range of a non-op HQ's cannot be activated for movement in the Motorized phase.</li>
                            <li>Units within Command range of a non-op HQ's cannot do Reaction movement.</li>
                            <li>No new regular Strongpoints can be built within Command range of a non-op HQ's. ("E" type Strongpoints are not affected).</li>
                            <li>Bridge units cannot be placed within Command range of a non-op HQ's. If present within the Command range of a non-op HQ's, they cannot be moved.</li>
                            <li>Soviet air units cannot contribute CAS benefits to any Defender Hexes within Command range of a non-op Soviet HQ's.</li>
                            <li>The Maximum number of Soviet artillery units that can contribute to a combat is kept to 1 in any Defender Hex within Command range of a non-op Soviet HQ's.</li>
                            <li>NKVD units that are within Command range of a non-op HQ's cannot issue No Retreat orders when in towns, cities, or major cities.</li>
                            <li>Non-op HQ's prohibit activation of any Guards units in its Command range.</li>
                            <li>Non-op HQ's cause movement restrictions for units that start a movement phase, Motorized or Regular, within command range of the non-op HQ's. The maximum number of units that can move is one less than the Recovery value of the non-op HQ's. (If the recovery value is 3, a maximum of two units can move in each movement phase). Units that start outside of the Command range of a non-op HQ's can freely move into its range without restriction.</li>
                        </ul>
                    </div>

                    <div className="spacer2rem" />
                    <div className="subheader-normal">Activating Headquarters</div>
                    <p>
                        Non-op HQ's can become operational HQ's by rolling their recovery value or less during the Game Turn Interphase. The Soviet player can also opt to "disband" a non-op HQ's during the Game Turn Interphase. A max of one non-op HQ's per Game Turn Interphase can be disbanded and taken off the map and put into the Cadre Box. This gives the Axis player +2 VPs. Non-op HQ's in the Cadre Box can stay there until they successfully roll their recovery value before being brought onto the map.
                </p>
                    <div className="spacer0_5rem" />
                    <div className="subheader-normal">Other Headquarters rules</div>
                    <div className="pdiv">
                        <ul class="ul-no-top">
                            <li>Lost HQ's units cost VPs. See the victory point schedule for the scenario.</li>
                            <li>HQ's that are forced to retreat through a vacant hex in Axis ZOC gets flipped to its non-op side.</li>
                            <li>HQ's get their Command value reduced by any Zone of Interdiction value it is in.</li>
                            <li>HQ's have 0 stacking cost, except when moving by rail or air or sea, when it is 1.</li>
                            <li>HQ's that are overrun become non-op.</li>
                            <li>HQ's that are under a garrison marker can still operate as a HQ - except it can't move until released.</li>
                        </ul>
                    </div>

                    <div className="subheader-normal">Comments on Headquarters</div>
                    <p>
                        New players to EFS often fail to recognize how important Soviet HQ's units are. As the Soviet player, you should always pay the upmost attention to keeping them safe, and evacuating them by rail or air if they become endangered of being cut off. The proper place for HQ's is a few hexes behind the "front line". You should always try to keep them on a road or rail in case they need to vamoose out real quick. You should also, at least with the better HQ's, keep a AA unit with them to discourage Axis air interdiction. 
                        </p><p>
                        You should strive to keep as much of your front line under Command range of a HQ's, although it's often not possible to cover it all. Probably the most important function the Soviet HQ's provides is the ability to move motorized units in the Reaction phase, so you usually want some motorized units near the Soviet HQ's so they can be used in this way. Soviet HQ's enable more than one Soviet artillery to participate in a combat if they are stacked with the HQ's, which may be useful when trying to defend a crucial area, even though this forces you to place them very near the front line (hint - this is a good job for those poor 1 Command point HQ's). Try to minimize the possibility of your HQ's being overrun by stacking them with a combat unit, or keeping a "defense in depth", or at least some road-bumps, in front of them. HQ's are "bait" for German panzer divisions, and a good German player will always try to hit HQ's whenever possible. Keep non-op HQ's AWAY from your front line, they are dangerous. Non-op HQ's can move normally so they should never be on the front line screwing things up.
                     </p>


                </div>

                <ScrollToTopOnMount />

            </div>
        );
    }
}

