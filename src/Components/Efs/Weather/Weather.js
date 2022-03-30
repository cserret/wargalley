import React from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
//import BsrLink from "../BsrLink/BsrLink";
import t34_in_snow from "../../../images/t34_in_snow.png";
import './Weather.scss';

const Weather = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div>WEATHER</div>
                <div></div>
            </div>

            <div className="clipart">
                <img src={t34_in_snow} alt="T-34 in snow" />
            </div>

            <div>
                <span>
                    Weather causes severe movement effects in EFS. In Barbarossa the Germans had expected a victory before the weather got bad. Therefore they were ill prepared for the consequences of mud and snow. The weather of course affected the Soviets too, but the Soviets had a good appreciation of how bad the weather can get in Russia, and could deal with the mud and snow better than the Germans. Of all the die rolls in the course of a game, the most important one is the "Weather Die Roll", the first thing that is done each turn. All the planning and expertise are for naught if the Axis rolls Mud too many times. In a few scenarios I've played, my Soviet front was in danger of collapse when Mud saved the situation. As the Axis player, you will often be frustrated by Mud, which turns the ground to molasses and gives the Soviets time to reorganize.
                </span>
            </div>

            <div>
                <span>
                    There are four main conditions of Weather in EFS. Dry, Mud, Frost, and Snow/Arctic. There can also be Dry *with* Lingering Mud, and Storms.
                </span>
            </div>

            <span>
               <div className="subheader">Lingering Mud</div>
                <div>
                    If the previous turn was Mud weather, and the new turn is determined to have Dry weather, then Mud continues to exists in all hexes that have Woods in them. All Mud effects remain in effect in Woods hexes until the next turn.
                </div>
            </span>

            <span>
               <div className="subheader">Lingering Snow</div>
                <div>
                    If the previous turn was Snow/Arctic weather, and the new turn is determined to have Frost weather, then Snow/Arctic remains the weather condition. It takes two consecutive turns of Frost weather to change the weather to Frost.
                </div>
            </span>

            <span>
               <div className="subheader">Storms</div>
                <div>
                    If the weather result includes "Storms", then all air units of both sides that are in the Ready Box are moved to the Flown Box. Then they must roll to get back into the Ready Box, with a DRM applied for Storms.
                </div>
            </span>

            <div>
               <div className="subheader">Weather Effects</div>
                <div className="gray-box">
                   <div className="subsubheader">Mud Effects</div>
                    <ul>
                        <li>General Supply LOC gets reduced from 7 to 5 hexes.</li>
                        <li>Road Nets maximum length is reduced from 21 to 15 hexes.</li>
                        <li>Movement along Main Roads is 1 MP per hex (Motorways retain 1/2 MP per hex regardless of weather).</li>
                        <li>Green MA units cannot move if on a minor road.</li>
                        <li>No CAB.</li>
                        <li>No overruns.</li>
                        <li>Artillery support values are halved (lose fractions).</li>
                        <li>Motorized units only project ZOC into adjacent city or town hexes, and along roads or RRs.</li>
                        <li>Towns during Mud confer a +1 DRM in combat.</li>
                        <li>Movement costs along minor roads are determined by other terrain in the hex, except for the following -</li>
                        <li>Ignore added cost of Woods when moving on a minor road through woods (typically its "clear" terrain then).</li>
                        <li>+2 MP to cross a river.</li>
                        <li>Rail conversion for Axis costs 2 conversion points per hex.</li>
                        <li>No infiltration movement.</li>
                        <li>Causes drm for air readiness rolls.</li>
                        <li>Causes drm on Soviet Replacements Table.</li>
                        <li>Air transport not allowed from towns unless an engineer is present.</li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="gray-box">
                   <div className="subsubheader">Frost Effects</div>
                    <ul>
                        <li>Costs 1 MP to enter any hex along a Minor Road.</li>
                        <li>Swamps become passable by motorized and orange MA units.</li>
                        <li>Overruns can occur in swamps.</li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="gray-box">
                   <div className="subsubheader">Snow/Arctic Effects</div>
                    <ul>
                        <li>General Supply LOC gets reduced from 7 to 5 hexes.</li>
                        <li>Road Nets maximum length is reduced from 21 to 15 hexes.</li>
                        <li>ZOCs extend across Major River and inland sea/lake hexsides.</li>
                        <li>Movement along Main Roads is 1 MP per hex (Motorways retain 1/2 MP per hex regardless of weather).</li>
                        <li>Movement along Minors Roads is 2 MPs per hex.</li>
                        <li>Cost to cross Major River becomes +1 MP.</li>
                        <li>Swamps become passable by motorized and orange MA units.</li>
                        <li>No CAB.</li>
                        <li>No overruns.</li>
                        <li>Units are not halved when attacking across Major River hexsides.</li>
                        <li>Rail conversion for Axis costs 2 conversion points per hex.</li>
                    </ul>
                </div>
            </div>

            <ScrollToTopOnMount />
        </div>

    );
}

export default Weather;