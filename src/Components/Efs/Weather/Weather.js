import React from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import BsrLink from "../BsrLink/BsrLink";
import dry_weather from "../../../images/efs/weather/dry_weather.jpg";
import mud_weather from "../../../images/efs/weather/mud_weather.jpg";
import freezing_weather from "../../../images/efs/weather/freezing_weather.jpg";
import './Weather.scss';

const Weather = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div>WEATHER</div>
                <div></div>
            </div>

            <div className="padded">
                In Barbarossa, historically, the Germans had expected a
                Soviet collapse in 1941, soon after their invasion.
                They were ill prepared for a continuation of the war into the following year, with mud and snow and freezing conditions.
                Therefore, weather causes severe movement, and other, effects in EFS.
            </div>
            <div className="padded">
                The weather of course affected the Soviets too, but the Soviets had a good appreciation
                of how bad the weather can get in Russia, and could deal with the mud and snow better
                than the Germans.
            </div>
            <div className="padded">
                Of all the die rolls in the course of a game, the most important one
                is the "Weather Die Roll", the first thing that is done on many turns.
            </div>
            <div className="padded">
                The Weather Table (in the lower right of the Turn Record Tract)
                will be rolled on at the start of each scenario, unless the weather is automatically set.
                For each turn, the Turn Record Tract will indicate
                if the weather is automatic (All caps, such as in: DRY) or is on a "Weather Climate" turn (Lower case, as in: dry).
                When it is a "Weather Climate" turn, then a roll on the table is required.
            </div>
            <div className="padded">
                There are four main conditions of Weather in EFS.<BsrLink page="8" rule="5.15b" />

                <ul className="ul-thin-top-bottom">
                    <li>Dry</li>
                    <li>Mud</li>
                    <li>Frost <span className="span-note">may not be present depending on the EFS game you have.</span></li>
                    <li>Snow <span className="span-note">may not be present depending on the EFS game you have.</span></li>
                </ul>



                There can also be sub-types of weather
                called "Lingering" -
                <ul className="ul-thin-top-bottom">
                    <li>Lingering Mud<BsrLink page="9" rule="5.21" /></li>
                    <li>Lingering Snow<span className="span-note">may not be present depending on the EFS game you have.</span><BsrLink page="9" rule="5.22" /></li>
                    <li>Frozen<span className="span-note">may not be present depending on the EFS game you have.</span><BsrLink page="9" rule="5.23" /></li>
                </ul>


                And "Special" weather conditions can be in effect -
                <ul className="ul-thin-top-bottom">
                    <li>Storm<BsrLink page="9" rule="5.31" /></li>
                    <li>Limited Mud<BsrLink page="9" rule="5.32" /></li>
                    <li>Limited Dry Weather<BsrLink page="9" rule="5.33" /></li>
                </ul>
            </div>


            <span className="spacer1rem" />

            <div className="subheader-image">
                <div>Dry<BsrLink page="8" rule="5.0" /></div>
                <img className="drop-shadow" src={dry_weather} alt="dry weather" />
            </div>

            <span className="spacer1rem" />
            <div className="padded">
                Dry weather means the absence of any other weather conditions.
            </div>

            <div className="padded">
                The rules are written assuming Dry weather, meaning there are no
                weather-related restrictions as to unit movement, combat, or rail/air transport or air power.
            </div>
            <div className="padded">
                Weather conditions other than Dry will have the effects noted below.
            </div>


            <span className="spacer2rem" />
            <div className="subheader-image">
                <div>Mud<BsrLink page="8" rule="5.0" /></div>
                <img className="drop-shadow" src={mud_weather} alt="mud weather" />
            </div>
            <span className="spacer1rem" />

            <div className="padded">
                Mud weather causes various effects in the game. The most significant
                is the reduced mobility of units on the map, which you can see on the terrain effects chart,
                and reduced supply lengths.
            </div>

            <span className="spacer1rem" />

            <div className="subheader-image">
                <div>Frost<BsrLink page="8" rule="5.0" /></div>
                <img className="drop-shadow" src={freezing_weather} alt="freezing weather" />
            </div>

            <span className="spacer1rem" />
            <div className="padded">
                Frost/Frozen weather has the effect of slowing motorized units, and also allowing some
                movement over water barriers.
            </div>
            <div className="padded">
                Frozen effects apply starting with the beginning of the second consecuitve turn of
                Snow Weather during Snow Climate.<BsrLink page="9" rule="5.23a" />
            </div>
            <div className="padded">
                Frozen effects cease in Mud or Dry turns, regardless of Climate.<BsrLink page="9" rule="5.23b" />
            </div>









            <span className="spacer2rem" />
            <div className="subsection lightblue">
                <div>Lingering Weather Conditions<BsrLink page="9" rule="5.2" /></div>
                <div>
                    <div className="subheader-low-top">Lingering Mud<BsrLink page="9" rule="5.21" /></div>
                    <div>
                        If the previous turn was Mud weather, and the new turn is determined to have Dry weather,
                        then Mud continues to exists in all hexes that have Woods in them.
                        All Mud effects remain in effect in Woods hexes until the next turn,
                        when the weather needs to be determined again.
                    </div>
                    <div className="subheader-low-top">Lingering Snow<BsrLink page="9" rule="5.22" /></div>
                    <div className="padded">
                        If the previous turn was Snow weather, and the new turn is determined to have Frost weather,
                        then Snow condition continues to exists.
                    </div>
                    <div className="subheader-low-top">Frozen<BsrLink page="9" rule="5.23" /></div>
                    <div className="padded">
                        <ul className="ul-thin-top-bottom">
                            <li>Frozen conditions exist upon the second consecutive Snow weather
                                during Snow Climate.<BsrLink page="9" rule="5.23a" /></li>
                            <li>Frozen conditions cease to exist during Mud or Dry weather.
                                <BsrLink page="9" rule="5.23b" /></li>
                            <li>Hexes with swamp, canal, river, major river, lake, and shallow water
                                are in Frozen condition Frost and Snow weather. <BsrLink page="9" rule="5.23c" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <span className="spacer1rem" />
            <div className="subsection lightred">
                <div>Special Weather Conditions<BsrLink page="9" rule="5.3" /></div>
                <div>
                    <div className="subheader-low-top">Storm<BsrLink page="9" rule="5.21" /></div>
                    <div>
                        Some of the results on the Weather Table indicate Storm. A Storm
                        condition last the entire turn, and imposes some effects on
                        Air Readiness<BsrLink page="19" rule="9.0" />,
                        Flotilla movement<BsrLink page="58" rule="22.54" />,
                        and some Naval rules.
                    </div>
                    <div className="subheader-low-top">Limited Mud<BsrLink page="9" rule="5.32" /></div>
                    <div className="padded">
                        During Dry Climate, two consecutive turns of Mud weather is not
                        allowed. If Mud is rolled for a turn following a turn with Mud weather
                        during Dry Climate, the weather is Dry, with no Storm.
                    </div>
                    <div className="subheader-low-top">Limited Dry<BsrLink page="9" rule="5.33" /></div>
                    <div className="padded">
                        No more than five turns in a row of Dry weather are allowed during
                        Dry Climate. If on the sixth turn of Dry weather, consider it
                        as a Mud turn, with no storm.
                    </div>
                </div>
            </div>
            <span className="spacer1rem" />


            <div className="padded mud">
                Mud effects:
                <ul className="spread-list">
                    <li>General Supply LOC gets reduced from 7 to 5 hexes.<BsrLink page="10" rule="6.14c" /></li>
                    <li>Road Nets maximum length is reduced from 21 to 15 hexes.<BsrLink page="10" rule="6.15" /></li>
                    <li>General Supply LOC can only enter a swamp hex along a road or railroad
                        during Dry or Mud weather, and is reduced to 5 hexes.<BsrLink page="10" rule="6.14c" /></li>
                    <li>Movement along Main Roads is 1 MP per hex.
                        <BsrLink page="22" rule="10.44b" />
                    </li>
                    <li>For movement along a minor road in clear terrain, movement
                        point cost is 2 MPs. Minor roads in other than clear
                        terrain (ignore Woods) is treated as if there is no minor road (intact bridges still allow
                        crossing of rivers or canals).
                        <BsrLink page="22" rule="10.44c" />
                    </li>
                    <li>Green MA units cannot move if on a minor road.<BsrLink page="6" rule="3.24c" />(noted in example text)</li>

                    <li>No overruns.<BsrLink page="35" rule="11.35a" /></li>
                    <li>Additional Retreat orders cannot be placed on a hex where mud condition exist.
                        <BsrLink page="30" rule="12.53d" />
                    </li>
                    <li>Artillery support values are halved (lose fractions) when
                        firing into a hex where mud condition exists.
                        <BsrLink page="39" rule="15.42a" />
                    </li>
                    <li>Towns during Mud confer a +1 DRM in combat.</li>
                    <li>Engineer Effects for combat can be applied to a town
                        when Mud or Snow condition exists for the defender hex.
                        <BsrLink page="41" rule="15.53b" />
                    </li>
                    <li>No CAB.<BsrLink page="41" rule="15.57e" /></li>
                    <li>For scenarios using the Inset Map, Axis Motorized combat is
                        not allowed when Mud exists.<BsrLink page="48" rule="17.64" />
                    </li>
                    <li>Red-box and orange-box movement allowance units only project ZOC into adjacent
                        city or town hexes, and along roads or RRs.<BsrLink page="6" rule="3.24a" /></li>
                    <li>Super-Heavy artillery units on their mobile side
                        cannot retreat during Mud or Snow.<BsrLink page="45" rule="16.47a" />
                    </li>

                </ul>
            </div>


            <div className="padded mud">
                Frozen effects:
                <ul className="spread-list">
                    <li>Axis motorized units lose one MP from their MP (before any halving).<BsrLink page="9" rule="5.23a" /></li>

                    <li>Ski units spend only 1 MP to enter clear, hills, marsh, or swamp hexes.<BsrLink page="9" rule="5.23b" /></li>

                    <li>Flotilla units cannot move, advance, or retreat over frozen hexes.<BsrLink page="58" rule="22.54a" />
                    </li>
                </ul>
            </div>

            <div className="padded mud">
                Snow effects:
                <ul className="spread-list">
                    <li>General Supply LOC gets reduced from 7 to 5 hexes.<BsrLink page="10" rule="6.14c" /></li>
                </ul>
            </div>

            <div className="padded mud">
                Storm effects:
                <ul className="spread-list">
                    <li>Air Readiness - move all air units starting in the Ready Box, including reinforcements
                        and replacements, to the Flown Box, before rolling for Air Readiness.<BsrLink page="19" rule="9.1" /></li>
                    <li>Flotillas cannot move and may
                    be subject to repositioning.<BsrLink page="58" rule="22.54b" /></li>
                    <li>Flotillas cannot attack but do defend.<BsrLink page="58" rule="22.54c" /></li>
                    <li>Naval procedures. (See Naval Module)</li>
                </ul>
            </div>

            <ScrollToTopOnMount />
        </div>

    );
}

export default Weather;