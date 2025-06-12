import React, { Component } from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import BsrLink from "../BsrLink/BsrLink";
import armored_train from "../../../images/efs/special/armored_train.gif";
import armored_train_top from "../../../images/efs/special/armored_train.jpg";
import c3 from "../../../images/efs/special/c3.jpg";
import garrison from "../../../images/efs/special/garrison_hex.gif";
import german_bridge from "../../../images/efs/special/german_bridge.gif";
import german_fort from "../../../images/efs/special/german_fort.gif";
import german_engineer2 from "../../../images/efs/special/german_engineer2.gif";
import guards_rocket from "../../../images/efs/special/guards_rocket.gif";
import militia from "../../../images/efs/special/militia.gif";
import soviet_fort from "../../../images/efs/special/soviet_fort.gif";
import soviet_nkvd from "../../../images/efs/special/soviet_nkvd.jpg";
import super_heavy_artillery from "../../../images/efs/special/super-heavy_artillery.gif";
import ur_mg from "../../../images/efs/special/ur_mg.gif";
import flotilla from "../../../images/efs/special/flotilla.jpg";
import ship from "../../../images/efs/special/ship.png";
import ship_back from "../../../images/efs/special/ship_back.png";
import base from "../../../images/efs/special/counter_base.png";
import counter_zap from "../../../images/efs/special/counter_zap.png";
import './Special.scss';

export default class Special extends Component {

    state = {
        contextDrawnEN: false,
        contextDrawnFR: false
    }

    componentDidMount = () => {
        this.drawCanvas();
    }

    componentWillReceiveProps = (props) => {
        this.drawCanvas();
    }


    drawCanvas = () => {
        var canvas;
        var ctx;
        canvas = document.getElementById('naval_info_container_canvas');
        ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#000000";
        ctx.lineJoin = "round";
        ctx.lineWidth = 3;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(136, 132);
        ctx.lineTo(199, 132);
        ctx.stroke();

        ctx.strokeStyle = "#a89a8e";
        ctx.lineWidth = 4.5;
        ctx.beginPath();
        ctx.moveTo(129.5, 215);
        ctx.lineTo(198.5, 209);
        ctx.stroke();
        ctx.strokeStyle = "#887755";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(129.5, 215);
        ctx.lineTo(198.5, 209);
        ctx.stroke();
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(129.5, 215);
        ctx.lineTo(198.5, 209);
        ctx.stroke();



        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(140, 299);
        ctx.lineTo(226, 227.5);
        ctx.stroke();

        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(276, 301);
        ctx.lineTo(259, 228.5);
        ctx.stroke();

        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(294, 209);
        ctx.lineTo(362, 209);
        ctx.stroke();

        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(294, 150);
        ctx.lineTo(362, 150);
        ctx.stroke();

        ctx.strokeStyle = "#887755";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(294, 125.5);
        ctx.lineTo(362, 114.5);
        ctx.stroke();

        ctx.strokeStyle = "#887755";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(294, 124.5);
        ctx.lineTo(362, 113.5);
        ctx.stroke();

        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(294, 125);
        ctx.lineTo(362, 114);
        ctx.stroke();

        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(602, 232);
        ctx.lineTo(602, 319);
        ctx.stroke();

        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(595, 166);
        ctx.lineTo(662, 166);
        ctx.stroke();

    }

    render = () => {
        return (
            <div className="content">
                <div>
                    <div className="content-title">
                        <div>SPECIAL UNITS</div>
                        <div></div>
                    </div>

                    <div className="image-caption">
                        <img src={armored_train_top} alt="armored train" />
                        <div>Armored trains with T-28 and T-34 turrets</div>
                    </div>
                    <span className="spacer1rem" />
                    <div>EFS has several types of special units, which adds to EFS's rich historical flavor and chrome. </div>

                    <span className="spacer2rem" />

                    <div className="subheader-image">
                        <div>Engineers<BsrLink page="56" rule="22.1" /></div>

                        <img src={german_engineer2} alt="German engineer counter" />
                    </div>
                    <span className="spacer1rem" />

                    <div>
                        Engineers provide various benefits in EFS, they:
                        <ul className="ul-no-top">
                            <li>build strongpoints and destroy enemy strongpoints.<BsrLink page="56" rule="22.11" /></li>
                            <li>aid movement and attack across shallow water hexsides.<BsrLink page="41" rule="15.53d" /></li>
                            <li>convert rail hexes.<BsrLink page="41" rule="15.53c" /></li>
                            <li>aid or participate in overruns.<BsrLink page="25" rule="11.3" /></li>
                            <li>allow construction of a Ferry.<BsrLink page="57" rule="22.32b" /></li>
                        </ul>
                        Engineers can also
                        <ul className="ul-no-top">
                            <li>can provide Engineer Effects in combat in certain situations.<BsrLink page="23" rule="10.47b" /><BsrLink page="41" rule="15.53" /></li>
                            <li>exceed the stacking limit.<BsrLink page="41" rule="15.53c" /></li>
                        </ul>
                        <div className="adjusted-up">
                            An Engineer can also be subject to Engineer Loss in a combat.<BsrLink page="43" rule="16.32,3b" />
                        </div>
                    </div>
                    <span className="spacer1rem" />




                    <div className="gray-box">
                        <div className="subsubheader">Soviet Engineer - Strongpoints</div>
                        <img src={soviet_fort} alt="Soviet fort counter" />
                        <ul>
                            <li>Can build a completed strongpoint the turn it is received, via the Replacements
                                Table.<BsrLink page="56" rule="22.11" />
                            </li>
                            <li>The engineer must be in General Supply.<BsrLink page="50" rule="18.43b" /></li>
                            <li>The engineer must not have moved in strategic or rail movement, specialized movement,-
                                assisted in air or naval transportation, or converted or cut any rail hexes in the current turn.<BsrLink page="56" rule="22.11" /></li>
                            <li>A non-op HQ prevents the construction of a Strongpoint if within 5 hexes of the HQ - exception: type
                                E Strongpoints can be built even if within range of a non-op HQ.<BsrLink page="50" rule="18.43e" />
                            </li>
                        </ul>
                    </div>





                    <span className="spacer1rem" />



                    <div className="gray-box">
                        <div className="subsubheader">German Engineer - Strongpoints</div>
                        <img src={german_fort} alt="German fort counter" />
                        <ul>
                            <li>Can place a completed strongpoint on the turn the strongpoint is received.<BsrLink page="56" rule="22.11" /></li>
                            <li>The engineer must be in General Supply.<BsrLink page="56" rule="22.11" /></li>
                            <li>Scenario rules may prohibit the construction of German strongpoints.</li>
                        </ul>
                    </div>









                    <span className="spacer2rem" />



                    <div className="subheader-image">
                        <div>Bridges<BsrLink page="56" rule="22.2" /></div>
                        <img src={german_bridge} alt="German bridge counter" />
                    </div>
                    <span className="spacer1rem" />

                    <ul className="ul-no-top">
                        <li>Bridge units are available to both sides. They actually represent bridge-specialist engineer units, but are not "Engineer" units for any other purpose. These bridges (actually pontoon bridges) allow units (of their side) to cross canals, rivers and major rivers.<BsrLink page="56" rule="22.2" />
                        </li>
                        <li> A bridge unit at a river negates the "crossing the river" cost for that hexside.<BsrLink page="56" rule="22.21" />
                        </li>
                        <li> You can place an available bridge marker in any hex adjacent to a valid water hexside in your side's General Supply, or in Temporary Supply. The destination hex (across the water hexside the arrow is pointing to) does not need to be in supply.<BsrLink page="56" rule="22.23" />
                        </li>
                        <li>Bridges can be built within range of a Soviet Non-Op HQ, but it costs 1 of the HQ's Recovery Points on the limit of units that can be moved within that range.<BsrLink page="54" rule="21.27d" />
                        </li>
                        <li>To start construction of a bridge, place the bridge marker with the "under construction" side up (for major rivers)
                            during the German movement phase, or for the Soviet - during the Soviet Motorized Movement Phase.
                            The hex the bridge marker is placed in must be in General or Temporary supply. The destination hex does
                            not have to be. The destination must be free of enemy unit(s), although enemy ZOC is allowable.<BsrLink page="56" rule="22.23c" />
                        </li>
                        <li>When placing a bridge on a non-major river or canal hexside, the bridge is placed immediately on its completed side.<BsrLink page="56" rule="22.24a" />
                        </li>
                        <li>A bridge that is under construction on a major river gets flipped to its completed side in that side's Engineering Phase.<BsrLink page="56" rule="22.24b" /><BsrLink page="56" rule="22.24c" />
                        </li>
                        <li>The Soviet player cannot construct bridges until turn 98, unless the scenario special rules allow it.<BsrLink page="56" rule="22.25" />
                        </li>
                        <li>If a hex a friendly bridge is in is entered by an enemy unit, then the bridge unit is removed and will be available
                            in the owner's next allowed Movement phase (remember Soviets place bridges during their Soviet Motorized Movement Phase). The benefits of a bridge can only be used by the owning side.<BsrLink page="56" rule="22.26" />
                        </li>
                    </ul>

                    <div className="rules-note">
                        Note that an enemy unit must enter the hex the bridge counter is actually in.
                        Being across the river in the hex the bridge is "bringing" to does not cause removal of the bridge unit.
                        I'm not sure of the reasoning behind this, but perhaps it represents the bridging engineers being on
                        one side of the bridge, taking pot shots at any enemy trying to destroy the bridge.
                    </div>

                    <span className="spacer2rem" />

                    <div className="subheader-image">
                        <div>Armored trains<BsrLink page="54" rule="21.3" /></div>
                        <img src={armored_train} alt="Soviet armored train counter" />
                    </div>
                    <span className="spacer1rem" />
                    <div>
                        Although both Axis and Soviets had armored trains, only the Soviet armored trains are represented in EFS.
                        Axis armored trains were not very common, and were primarily used for internal security.
                    </div>
                    <ul className="ul-no-top">
                        <li>An armored train can only be in a hex by itself at the end of any phase. If forced to be stacked with
                            any other unit, it is eliminated.<BsrLink page="54" rule="21.31" />
                        </li>
                        <li>An armored train can only travel only rail hexes (except rail hexes that are converted to German rail hexes<BsrLink page="54" rule="21.32b" />)
                            up to its printed movement points, although they do suffer any interdiction costs.<BsrLink page="37" rule="14.65" /> They
                            move either in the friendly Movement Phase or the friendly Motorized Movement Phase (but not both in a turn).<BsrLink page="54" rule="21.32" />
                            They cannot move into a Strongpoint that is under construction.<BsrLink page="50" rule="18.46" />
                            An armored train can enter and stop in an enemy ZOC, and can retreat through
                            and enemy ZOC only if a friendly unit is in the hex.<BsrLink page="54" rule="21.31b" /><BsrLink page="45" rule="16.47b" />
                        </li>
                        <li>Armored train movement does not count against rail capacity.<BsrLink page="54" rule="21.31c" />
                        </li>
                        <li>Armored trains cannot do Specialized Movement<BsrLink page="54" rule="21.31d" /> or
                            Strategic Movement.<BsrLink page="25" rule="11.24" />
                        </li>
                        <li>Armored trains block enemy supply through the hex they occupy.<BsrLink page="54" rule="21.33" />
                        </li>
                        <li>Armored trains operate normally without Attack Supply or General Supply.<BsrLink page="54" rule="21.34" />
                        </li>
                        <li>Armored trains, despite the name, are not treated as "Armored" for movement,
                            combat, or vp calculation. They are rebuilt only with Armored Train RPs, and when
                            eliminated are always put in the Cadre box.<BsrLink page="54" rule="21.35" />
                        </li>
                        <li>Armored trains do not surrender.<BsrLink page="52" rule="20.12" />
                        </li>
                        <li>Many Soviet Armored Trains are also NKVD units (so-marked on the counter).
                            </li>
                            <li>NKVD Armored trains are rebuilt in the Soviet Engineering Phase.<BsrLink page="14" rule="7.42a" />
                                They are not subject to the 7 turn delay that applies to other NKVD units.<BsrLink page="14" rule="7.42b" />
                            </li>
                    </ul>

                    <span className="spacer2rem" />

                    <div className="image-caption flotilla">
                        <img src={flotilla} alt="flotilla" />
                        <div>Camouflaged BK-1125, rear platform, 12.7mm<br />
                            DSHK Heavy Machine Gun. (cmchant.com)</div>
                    </div>

                    <span className="spacer1rem" />

                    <div className="subheader-image">
                        <div>Flotillas<BsrLink page="58" rule="22.5" /></div>
                        <img src={c3} alt="Soviet flotilla counter" />
                    </div>
                    <span className="spacer1rem" />

                    <div>
                        Flotillas are armored boats. They can travel along rivers, coastal hexes, and even sea hexes. They can move up to in
                        16 hexes in both the friendly Movement Phase or the friendly Motorized Movement Phase (but not both). 
                        Flotillas cannot use Strategic Movement nor be activated for Reaction Movement.<BsrLink page="58" rule="22.51" />
                    </div><div>
                        When moving a flotilla, you keep along the river. No "jumping" over land to continue on another river. Flotillas do not benefit from fortified lines or strongpoints, by themselves. Axis flotillas are AA Fire capable.
                    </div><div>
                        Flotillas do not extend ZOC, but do have ZOC in the hex they are in. They block enemy supply in the hex they occupy.
                    </div><div>
                        They are subject to air interdiction. Moving through an interdicted hex cost 4 mps. <span className="rule-ref">(11.2)</span>
                    </div><div>
                        They can move into ZOC, but not through them. Since ZOCs don't extend across Major Rivers, flotillas can freely move along Major Rivers.
                    </div><div>
                        When they move along a river you need to indicate the "side" of the river they are on by placing the counter on the hex on one side of the river or other
                        (you don't place them on the hexlines). It costs one MP to move to the other side of a river.
                    </div><div>
                        If moving along a canal, there is only "one" side to the canal.
                    </div><div>
                        Flotillas can be "overrun" by enemy units on the same side of the river as the flotilla. They can be attacked as if a regular unit, and they can participate on attacks on enemy units that are in a hex adjacent to the river (either side).
                    </div><div>
                        Flotillas do not require Attack Supply, and do not require General Supply. <span className="rule-ref">(22.56)</span>
                    </div><div>
                        Flotillas cannot attack in Storm weather. If Storm weather is rolled, flotillas must be repositioned to the nearest friendly port within its movement allowance. If no port
                        is in reach, then the flotilla stays in place. Place a "Do Not Move One GT" on the flotillas.
                    </div><div>
                        Flotillas cannot move in Snow weather. Flotillas cannot move in sea or coastal sea hexes in Arctic weather <span className="rule-ref">(10.77b)</span>.
                    </div><div>
                        Flotillas do not get the fortification benefit if alone in the hex. They cannot get defensive artillery support if alone in a hex.
                    </div><div>

                        Flotillas are especially useful in swampy areas, as they are not affected by the difficult terrain. Flotillas often force players to use up some units to garrison rear areas that are reachable by river, since flotillas are rather difficult to track down and kill, especially in swamp.
                    </div>

                    <span className="spacer3rem" />



                    <div id="naval_info_container" className="naval-info-container">
                        <div className="title">NAVAL UNIT INFORMATION</div>
                        <div className="floater range">Range</div>
                        <div className="floater arty">Arty<br />Support<br />Factor</div>
                        <div className="floater protection">Protection<br />Rating</div>
                        <div className="floater transport">Transport<br />Capacity</div>
                        <div className="floater movement">Naval<br />Movement<br />Point<br />Allowance</div>
                        <div className="floater class">Class</div>
                        <div className="floater name">Name</div>
                        <div className="floater recovery">Recovery<br />Value</div>
                        <div className="floater sailed">S - Sailed</div>
                        <div className="ships">
                            <div>
                                <div>Front (ready)</div>
                                <img src={ship} alt="Naval unit front" />
                            </div>
                            <div>
                                <div>Back (sailed)</div>
                                <img src={ship_back} alt="Naval unit back" />
                            </div>
                        </div>
                        <canvas id="naval_info_container_canvas" width="800" height="400" className="naval-info-container-canvas" />
                    </div>






                    <div className="subheader-normal">
                        Naval
                    </div>
                    <div className="pdiv">
                        The naval rules (8.0) are extensive, but this is a summary:
                        <ul className="ul-no-top">
                            <li>Naval units are not combat units. They have no stacking value. They do, however, need General Supply and Attack Supply as combat units do.</li>
                            <li>Naval units only move in sea hexes, but they can be in a port hex, where they prevent the entry of non-combat enemy units into the hex.</li>
                            <li>Naval units do not have steps, but do take damage points. Only "T" type naval units can be rebuilt.</li>
                            <li>Naval units provide AA fire, but only for themselves.</li>
                            <li>Naval units with Artillery Support values can provide offensive artillery fire, if they are in range of a Defender Hex.</li>
                            <li>Naval units have two sides - "Ready" and "Sailed". A "Ready" naval unit is eligible to be moved, and it considered armed and fueled. A "Sailed" naval unit will need
                                to roll for readiness during the Naval Readiness Phase of the Strategic Segment. A naval unit can be moved in any movement phase, even the enemy movement phases.</li>
                            <li>Naval units with a Transport Capacity can transport ground units.</li>
                            <li>Naval units can transport units to enable an Amphibious Assault.</li>
                        </ul>
                        Naval unit types:
                        <ul className="ul-no-top">
                            <li>BB - Battleship</li>
                            <li>CL - Light Cruiser</li>
                            <li>DL - Destroyer Leader</li>
                            <li>DD - Destroyer</li>
                            <li>T<span className="white-text">D</span> - Transport</li>
                        </ul>
                    </div>

                    <span className="spacer1rem" />
                    <div className="subheader-counter base">
                        <div>Soviet Naval Base</div>
                        <img src={base} alt="Soviet naval base counter" />
                    </div>
                    <div className="pdiv">
                        In the Crimea game the Soviet player has two Naval Base units that can be may be placed on any Soviet controlled port hex. The unit doubles the port capacity
                        of the port. After placement, a naval base can be moved only by sea transport.
                    </div>

                    <span className="spacer2rem" />

                    <div className="subheader-image">
                        <span>23.4</span>
                        <div>Super-Heavy artillery</div>
                        <img src={super_heavy_artillery} alt="Super heavy artillery counters" />
                    </div>
                    <span className="spacer1rem" />

                    <div>
                        Both sides have super-heavy artillery. They have significant movement restrictions, common to both Axis and Soviets, as outlined in the Movement section of this site.
                    </div><div>
                        Super-heavy artillery are designed for reduction of significant fortifications and cities.
                    </div><div>
                        Super-heavy artillery require some setup, and therefore have two sides. A mobile side and a firing side. They can only flip during the Engineering phase, furthermore - they can only flip to their firing sides if they did not move during that turn (you may want to mark a super-heavy you intend to flip to firing with some marker so you don't accidentally move it, and so you don't forget to flip it later).
                    </div><div>
                        Super-heavy artillery (when firing) contribute their support values to an attack, plus an additional -1 drm if attacking city, major city, fortified line, or strongpoint terrain. Note that for the fortified line, the -1 drm only applies if the attacker is being charged a +1 drm for attacking across a fortified line.
                    </div>

                    <div className="gray-box">
                        <div className="subsubheader">Soviet super-heavy artillery</div>
                        <ul>
                            <li>Soviet coastal defense units and railroad artillery are are treated as super-heavy artillery.
                            </li>
                            <li>Soviet super-heavy artillery bearing Activated markers cannot contribute their support values to any combat.</li>
                            <li>Soviet super-heavy artillery DO count towards the maximum of artillery units allowed to participate in a combat.</li>
                            <li>Soviet super-heavy artillery can add support to attacks and defense.</li>
                        </ul>
                    </div>


                    <div className="gray-box">
                        <div className="subsubheader">Axis super-heavy artillery</div>
                        <ul>
                            <li>Axis super-heavy artillery DO NOT count towards the maximum of artillery units allowed to participate in a combat.
                            </li>
                            <li>Axis super-heavy artillery can only provide their supports to attacks, not defense. On defense they only provide their defense value (typically 1).</li>
                        </ul>
                    </div>



                    <span className="spacer3rem" />


                    <div className="subheader-image">
                        <span>22.4</span>
                        <div>Guards</div>
                        <img src={guards_rocket} alt="Soviet guards rocket counter" />
                    </div>
                    <span className="spacer1rem" />

                    <div>
                        The Soviets began a program of designating Guards units out of battle tested and well performing units (or grouping survivors into units). They would often get preference in equipment, including lend lease equipment. These units were more dependable and had better leadership.
                    </div><div>
                        The Soviets can activate one Guards unit that is within Command Range of a HQ's without Command point cost. The HQ's can activate the Guards unit even if its Command value is reduced to 0 due to air interdiction. Non-op HQ's cancel this though if the Guards unit is in Command range of it. Guards units provide a beneficial die-roll modifier for surrender die rolls in its hex.
                    </div>



                    <span className="spacer2rem" />
                    <div className="subheader-image">
                        <span>22.4</span>
                        <div>NKVD</div>
                        <img src={soviet_nkvd} alt="Soviet NKVD counter" />
                    </div>
                    <span className="spacer1rem" />

                    <div>
                        The Peoples Commissariat for Internal Affairs, known by the initials NKVD, formed special political troops. The feared "NKVD Commissars" of these units could overrule the decisions of commanders on the ground. Historically, Commissars were infamous for demanding that units defend their positions to the death.
                    </div><div>
                        Whenever a NKVD unit is defending in a major city, city, or town hex, it issues a mandatory NO RETREAT order on all units in the hex - unless the hex is under the command span of a Non-Op HQ. You cannot counter-order this NKVD NO RETREAT order (other than by moving a non-op HQ to within range of the hex).
                    </div><div>
                        You cannot apply step losses to the NKVD unit which issued the NO RETREAT order unless there are no other units available to take losses. If there are two or more NKVD units in the hex, then only one of them is the "active" NKVD unit - the others are treated as regular units. The Soviet player chooses which NKVD unit will be the "active" one. NKVD units can only issue the NO RETREAT order - they never issue an ADDITIONAL RETREAT order.
                    </div><div>
                        NKVD units that are not in a major city, city, or town, do not issue any orders on their own, and are just like other infantry units.
                    </div><div>
                        There are NKVD train units that are very helpful when you need to get a city hex to mount a stout defense.
                    </div><div>
                        NKVD units provide a beneficial die-roll modifier for Surrender rolls in its hex.
                    </div>





                    <span className="spacer2rem" />

                    <div className="subheader-image">
                        <span>22.5</span>
                        <div>UR/MG units</div>
                        <img src={ur_mg} alt="Soviet UR counters" />
                    </div>
                    <span className="spacer1rem" />

                    <div>
                        Ukreplyonni Raion (UR) units are groups of machine gun units and other fortress defense troops. These units, and the militia, have untried sides (reminiscent of Panzergruppe Guderian).
                    </div><div>
                        They are typically placed in an opaque cup and drawn randomly and placed untried side up. Supposedly their tried sides are supposed to be secret to the Soviet player as well as the Axis, so you gotta be a little careful in pulling and placing these units.
                    </div><div>
                        Some may be placed in the beginning of the scenario, some may come up on the reinforcement chart, and the Soviet player may expend infantry (type "I") replacement points to pull them out of the cup and place them on the map.
                    </div><div>
                        In the Replacement Phase the UR/MG unit(s) are placed on any friendly Soviet city or major city in General Supply, or on any friendly Soviet fortification hexes in General Supply. They cannot be placed in a hex with a UR/MG unit already in it, and they cannot be placed in enemy ZOC (remember though that ZOCs do not extend into Major Cities).
                    </div><div>
                        These units remain on their untried sides until the moment of combat or when the Soviet player moves them. Any UR/MG unit that is found to be a 0-0-0 is removed from the map and placed back in the cup.
                    </div>


                    <span className="spacer2rem" />
                    <div className="subheader-image">
                        <span>22.6</span>
                        <div>Militia</div>
                        <img src={militia} alt="Soviet militia counters" />
                    </div>
                    <span className="spacer1rem" />
                    <div>
                        Militia units are scratch units that were thrown together by the Soviet military. These units tended to be highly unreliable.
                    </div><div>
                        The Soviet player cannot move these units further than five hexes from their placement city. If forced to retreat further than five hexes then they are released from this restriction.
                    </div><div>
                        Unlike UR/MG units, these do not get flipped when moved, only when attacked. If, when flipped, they turn out to be a 0-0-0, they are removed from play.
                    </div><div>
                        When eliminated, they go to the Soviet rebuilding chart, not the cup.
                    </div><div>
                        Militia with infantry or cavalry symbols can be removed voluntarily from the map by the Soviet player in the Replacement Phase, which gives the Soviet player 1 "I" Type replacement point. They can only be removed from a hex in General Supply. This exchange is generally a good idea when you've got valuable infantry units you want to build back up.
                    </div>

                    <span className="spacer2rem" />
                    <div className="subheader-image">
                        <span>22.7</span>
                        <div>Zap units</div>
                        <img src={counter_zap} alt="Soviet Zap counter" />
                    </div>
                    <span className="spacer1rem" />
                    <div className="pdiv">
                        Zap units represent groups of recruits that are in basic training. They are combat units, and can be used as they are, or used for replacements.
                        <ul className="ul-no-top">
                            <li>They can be expended to recreate a unit in the Cadre Box which requires a Type I Replacement. Replace the Zap unit with the cadre unit in the same hex. Place a "Do Not Move One GT" marker on it.
                                The Do Not Move counter will be removed during the Soviet Engineering Phase.</li>
                            <li>They can also be used to provide a Type I Replacement to an eligible reduced Soviet unit that is on the map. The unit being built up then gets the "Do Not Move One GT" marker placed on it.</li>
                        </ul>
                    </div>

                    <span className="spacer1rem" />
                    <div className="subheader-image">
                        <span>22.8</span>
                        <div>Garrisons</div>
                        <img src={garrison} alt="Soviet garrison counters" />
                    </div>
                    <span className="spacer1rem" />
                    <div>
                        In several scenarios the Soviet player may have some, or many, units restricted to "garrison duty", which means they can't move from the hex they start from.
                    </div><div>
                        These troops were controlled by "higher headquarters", who only begrudgingly would release them, piece meal, to the front.
                    </div><div>
                        All units that are under a garrison marker are deemed to be garrison units. Other units can enter and leave the hex without being "garrisonned".
                    </div><div>
                        Once a garrison is released, all units under that garrison marker are released and can move normally. Non-op HQs that are under a garrison marker can roll each turn for activation. Non-op HQs and activated HQs still operate as the HQs rules specify - even if they can't move due to being under a garrison marker.
                    </div>
                    <div className="pdiv">
                        Garrison units are released when any of these occur:
                        <ul className="ul-no-top">
                            <li>The hex is attacked.</li>
                            <li>An enemy unit moves adjacent to it.</li>
                            <li>It goes out of General Supply.</li>
                            <li>Is released by a "R" result on the Replacements Table.</li>
                            <li>Is released by a turn specified in the scenario. </li>
                        </ul>
                    </div>


                </div>

                <ScrollToTopOnMount />

            </div>

        );
    }

}