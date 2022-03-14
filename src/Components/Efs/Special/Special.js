import React, { Component } from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
//import BsrLink from "../BsrLink/BsrLink";
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
                        <div>Armored trains with T-34 and T-28 turrets</div>
                    </div>
                    <div className="spacer1rem" />
                    <p>EFS has several types of special units, which adds to EFS's rich historical flavor and chrome. </p>

                    <div className="spacer2rem" />

                    <div className="subheader-image">
                        <span>23.1</span>
                        <div>Engineers</div>
                        <img src={german_engineer2} alt="German engineer counter" />
                    </div>
                    <div className="spacer1rem" />

                    <p>
                        Engineers in EFS build strongpoints and destroy enemy strongpoints. An engineer unit in a town in Mud weather can enable air transport from that town. A motorized engineer is necessary to enable overrun attempts against city, major city, or fortification hexes (fortified lines or strongpoints). "Engineer Effects" can be declared in combat, see Combat section for info.
            </p><p>
                        Strongpoints can be built by both sides (as long as the scenario special rules don't disallow it). There can only be a maximum of one strongpoint in a hex, although a strongpoint can be built behind a fortified hexline.
            </p><p>
                        The German player needs engineers to place strongpoints on the map. The Soviet doesn't, although engineers can speed the placement of strongpoints by allowing the Soviet player to place a "completed", rather than "under construction", strongpoint on the map.
            </p><p>
                        Strongpoints give a +1 drm to the defender in a strongpoint, along with some other benefits. Strongpoints can go out of supply and "die" if cut off. Strongpoints can be built in any hex in General Supply, even in enemy ZOC.
            </p><p>
                        Usually the Soviet player will put strongpoints in victory point towns and cities, behind rivers and other defensible terrain, and cluster them around very important cities like Smolensk or Kiev. Although the +1 drm may not sound like a big deal, strongpoints also cause asterisk results to be levied against the attacker, greatly reduces the chance of being overrun, and continues to cause the Axis player problems even after you've abandoned the strongpoint by blocking roads, railroad conversion, and supply routes until destroyed.
            </p><p>
                        To destroy a strongpoint a division or engineer unit needs to be in the hex with the strongpoint in the Engineering phase, which often causes the Axis player to slow down or divert their units for fortification destruction duties.
            </p>






                    <div className="gray-box">
                        <p className="subsubheader">Soviet Engineer - Strongpoints</p>
                        <img src={soviet_fort} alt="Soviet fort counter" />
                        <ul>
                            <li>Can build a completed strongpoint the turn it is received, via the Replacements Table. Soviet Engineers cannot build strongpoints of their own free will, they must be supplied from the Replacements Table. Note that the Soviet player can place "under construction" strongpoints without an engineer present.
                </li>
                            <li>The engineer must be in General Supply.</li>
                            <li>The engineer must not have moved in strategic or rail movement in the turn.</li>
                            <li>The engineer must not have converted any rail hexes.</li>
                            <li>If the engineer is in Command Range of a non-op HQ's, it cannot place strongpoints.</li>
                        </ul>
                    </div>









                    <div className="gray-box">
                        <p className="subsubheader">German Engineer - Strongpoints</p>
                        <img src={german_fort} alt="German fort counter" />
                        <ul>
                            <li>Can place a "under construction" strongpoint on the hex they are on.</li>
                            <li>The engineer must remain in the hex until the next Engineering Phase, when the strongpoint is flipped to its completed side. If the engineer leaves the hex before then, the under construction strongpoint is removed.</li>
                            <li>The engineer must be in General Supply.</li>
                            <li>Scenario rules may prohibit the construction of German strongpoints.</li>
                        </ul>
                    </div>









                    <div className="spacer2rem" />



                    <div className="subheader-image">
                        <span>23.2</span>
                        <div>Bridges</div>
                        <img src={german_bridge} alt="German bridge counter" />
                    </div>
                    <div className="spacer1rem" />

                    <p>
                        Bridge units are available to both sides. They actually represent engineer units that are capable of building bridges. These bridges (actually pontoon bridges) allow units (of their side) to cross rivers and major rivers.
            </p><p>
                        A bridge unit at a river negates the "crossing the river" cost for that hexside. Note that the counter has an arrow. It points to the hexside that gets the bridge.
            </p><p>
                        Bridge unit placement is very fast and loose in EFS. Basically you can place it in any hex in General Supply, regardless of any affiliation marked on the counter. No more than two friendly bridge units can be active per map. You can move a bridge unit at *any time* (once) during each friendly Movement Phase. This means units can use it to cross a river at one spot, then you can move the bridge unit to another river, and other units can then run across its bridge at the new location.
            </p><p>
                        Non-op HQ's interfere with Bridge units - they prohibit placement of bridges within their Command Range, and bridge units cannot leave a hex while under Command Range of a non-op HQ's.
            </p><p>
                        Bridge units cannot be captured or destroyed by the enemy. Bridge units cannot retreat. If the hex they are in is entered by an enemy unit, then the bridge unit is moved off the map. They can be placed back on the map in the owner's regular Movement phase.
            </p>

                    <div className="spacer2rem" />

                    <div className="subheader-image">
                        <span>7.25</span>
                        <div>Armored trains</div>
                        <img src={armored_train} alt="Soviet armored train counter" />
                    </div>
                    <div className="spacer1rem" />

                    <p>
                        A armored train travels up to 48 rail hexes per turn (subject to interdiction effects). They can move in either the Motorized Phase or the regular Movement Phase (but not both in the same turn). They do not require any supply to move, and do not count against the rail capacity. They cannot transport anything.
            </p><p>
                        German armored trains can only run on converted track (converted to German closer width train rails and more closely spaced water towers), while Soviet armored trains can only run on non-converted track.
            </p><p>
                        Armored trains can move into enemy ZOC, but not through them. They can run on tracks "behind" enemy lines (as long as the track is the proper type for it).
            </p><p>
                        Armored trains do not possess any "armor" benefits. They do not disqualify attacking units from getting CAB.
            </p><p>
                        Some Soviet trains are NKVD trains, and act as NKVD units for the purposes of the No Retreat automatic orders for NKVD. They can drive through Command Ranges of non-op HQ's.
            </p><p>
                        Although weak, lacking ZOC, and relegated to staying on rail lines, armored trains can help out with defending an area you have difficulty getting any regular ground troops to, as they can go a long ways on a track. Sending a NKVD armored train into a city about to get surrounded is a great way to improve the defense, since the units there will get a beneficial modifier for surrender rolls.
            </p>

                    <div className="spacer2rem" />

                    <div className="image-caption flotilla">
                        <img src={flotilla} alt="flotilla" />
                        <div>Camouflaged BK-1125, rear platform, 12.7mm<br />
                            DSHK Heavy Machine Gun. (cmchant.com)</div>
                    </div>

                    <div className="spacer1rem" />

                    <div className="subheader-image">
                        <span>11.2, 23.3</span>
                        <div>Flotillas</div>
                        <img src={c3} alt="Soviet flotilla counter" />
                    </div>
                    <div className="spacer1rem" />

                    <p>
                        Flotillas are armored boats. They can travel along rivers, coastal hexes, and even sea hexes. They can move up to in
                        16 hexes in both the friendly Movement Phase and the friendly Motorized Movement Phase. Flotillas cannot use strategic movement.
                        </p><p>
                        When moving a flotilla, you keep along the river. No "jumping" over land to continue on another river. Flotillas do not benefit from fortified lines or strongpoints, by themselves. Axis flotillas are AA Fire capable.
</p><p>
    Flotillas do not extend ZOC, but do have ZOC in the hex they are in. They block enemy supply in the hex they occupy.
            </p><p>
                        They are subject to air interdiction. Moving through an interdicted hex cost 4 mps. <span className="rule-ref">(11.2)</span>
                    </p><p>
                        They can move into ZOC, but not through them. Since ZOCs don't extend across Major Rivers, flotillas can freely move along Major Rivers.
            </p><p>
                        When they move along a river you need to indicate the "side" of the river they are on by placing the counter on the hex on one side of the river or other
                        (you don't place them on the hexlines). It costs one MP to move to the other side of a river.
            </p><p>
                        If moving along a canal, there is only "one" side to the canal.
            </p><p>
                        Flotillas can be "overrun" by enemy units on the same side of the river as the flotilla. They can be attacked as if a regular unit, and they can participate on attacks on enemy units that are in a hex adjacent to the river (either side).
            </p><p>
                        Flotillas do not require Attack Supply, and do not require General Supply. <span className="rule-ref">(22.56)</span>
            </p><p>
                Flotillas cannot attack in Storm weather. If Storm weather is rolled, flotillas must be repositioned to the nearest friendly port within its movement allowance. If no port
                is in reach, then the flotilla stays in place. Place a "Do Not Move One GT" on the flotillas.
                </p><p>
                    Flotillas cannot move in Snow weather. Flotillas cannot move in sea or coastal sea hexes in Arctic weather <span className="rule-ref">(10.77b)</span>.
                    </p><p>
                    Flotillas do not get the fortification benefit if alone in the hex. They cannot get defensive artillery support if alone in a hex.
                    </p><p>

                        Flotillas are especially useful in swampy areas, as they are not affected by the difficult terrain. Flotillas often force players to use up some units to garrison rear areas that are reachable by river, since flotillas are rather difficult to track down and kill, especially in swamp.
            </p>

                    <div className="spacer3rem" />



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

                    <div className="spacer1rem" />
                    <div className="subheader-counter base">
                        <div>Soviet Naval Base</div>
                        <img src={base} alt="Soviet naval base counter" />
                    </div>
                    <div className="pdiv">
                        In the Crimea game the Soviet player has two Naval Base units that can be may be placed on any Soviet controlled port hex. The unit doubles the port capacity
                        of the port. After placement, a naval base can be moved only by sea transport.
                </div>

                    <div className="spacer2rem" />

                    <div className="subheader-image">
                        <span>23.4</span>
                        <div>Super-Heavy artillery</div>
                        <img src={super_heavy_artillery} alt="Super heavy artillery counters" />
                    </div>
                    <div className="spacer1rem" />

                    <p>
                        Both sides have super-heavy artillery. They have significant movement restrictions, common to both Axis and Soviets, as outlined in the Movement section of this site.
                </p><p>
                        Super-heavy artillery are designed for reduction of significant fortifications and cities.
                </p><p>
                        Super-heavy artillery require some setup, and therefore have two sides. A mobile side and a firing side. They can only flip during the Engineering phase, furthermore - they can only flip to their firing sides if they did not move during that turn (you may want to mark a super-heavy you intend to flip to firing with some marker so you don't accidentally move it, and so you don't forget to flip it later).
                </p><p>
                        Super-heavy artillery (when firing) contribute their support values to an attack, plus an additional -1 drm if attacking city, major city, fortified line, or strongpoint terrain. Note that for the fortified line, the -1 drm only applies if the attacker is being charged a +1 drm for attacking across a fortified line.
                </p>

                    <div className="gray-box">
                        <p className="subsubheader">Soviet super-heavy artillery</p>
                        <ul>
                            <li>Soviet coastal defense units and railroad artillery are are treated as super-heavy artillery.
                </li>
                            <li>Soviet super-heavy artillery bearing Activated markers cannot contribute their support values to any combat.</li>
                            <li>Soviet super-heavy artillery DO count towards the maximum of artillery units allowed to participate in a combat.</li>
                            <li>Soviet super-heavy artillery can add support to attacks and defense.</li>
                        </ul>
                    </div>


                    <div className="gray-box">
                        <p className="subsubheader">Axis super-heavy artillery</p>
                        <ul>
                            <li>Axis super-heavy artillery DO NOT count towards the maximum of artillery units allowed to participate in a combat.
                </li>
                            <li>Axis super-heavy artillery can only provide their supports to attacks, not defense. On defense they only provide their defense value (typically 1).</li>
                        </ul>
                    </div>



                    <div className="spacer3rem" />


                    <div className="subheader-image">
                        <span>22.4</span>
                        <div>Guards</div>
                        <img src={guards_rocket} alt="Soviet guards rocket counter" />
                    </div>
                    <div className="spacer1rem" />

                    <p>
                        The Soviets began a program of designating Guards units out of battle tested and well performing units (or grouping survivors into units). They would often get preference in equipment, including lend lease equipment. These units were more dependable and had better leadership.
            </p><p>
                        The Soviets can activate one Guards unit that is within Command Range of a HQ's without Command point cost. The HQ's can activate the Guards unit even if its Command value is reduced to 0 due to air interdiction. Non-op HQ's cancel this though if the Guards unit is in Command range of it. Guards units provide a beneficial die-roll modifier for surrender die rolls in its hex.
            </p>



                    <div className="spacer2rem" />
                    <div className="subheader-image">
                        <span>22.4</span>
                        <div>NKVD</div>
                        <img src={soviet_nkvd} alt="Soviet NKVD counter" />
                    </div>
                    <div className="spacer1rem" />

                    <p>
                        The Peoples Commissariat for Internal Affairs, known by the initials NKVD, formed special political troops. The feared "NKVD Commissars" of these units could overrule the decisions of commanders on the ground. Historically, Commissars were infamous for demanding that units defend their positions to the death.
            </p><p>
                        Whenever a NKVD unit is defending in a major city, city, or town hex, it issues a mandatory NO RETREAT order on all units in the hex - unless the hex is under the command span of a Non-Op HQ. You cannot counter-order this NKVD NO RETREAT order (other than by moving a non-op HQ to within range of the hex).
            </p><p>
                        You cannot apply step losses to the NKVD unit which issued the NO RETREAT order unless there are no other units available to take losses. If there are two or more NKVD units in the hex, then only one of them is the "active" NKVD unit - the others are treated as regular units. The Soviet player chooses which NKVD unit will be the "active" one. NKVD units can only issue the NO RETREAT order - they never issue an ADDITIONAL RETREAT order.
            </p><p>
                        NKVD units that are not in a major city, city, or town, do not issue any orders on their own, and are just like other infantry units.
            </p><p>
                        There are NKVD train units that are very helpful when you need to get a city hex to mount a stout defense.
            </p><p>
                        NKVD units provide a beneficial die-roll modifier for Surrender rolls in its hex.
            </p>





                    <div className="spacer2rem" />

                    <div className="subheader-image">
                        <span>22.5</span>
                        <div>UR/MG units</div>
                        <img src={ur_mg} alt="Soviet UR counters" />
                    </div>
                    <div className="spacer1rem" />

                    <p>
                        Ukreplyonni Raion (UR) units are groups of machine gun units and other fortress defense troops. These units, and the militia, have untried sides (reminiscent of Panzergruppe Guderian).
                </p><p>
                        They are typically placed in an opaque cup and drawn randomly and placed untried side up. Supposedly their tried sides are supposed to be secret to the Soviet player as well as the Axis, so you gotta be a little careful in pulling and placing these units.
                </p><p>
                        Some may be placed in the beginning of the scenario, some may come up on the reinforcement chart, and the Soviet player may expend infantry (type "I") replacement points to pull them out of the cup and place them on the map.
                </p><p>
                        In the Replacement Phase the UR/MG unit(s) are placed on any friendly Soviet city or major city in General Supply, or on any friendly Soviet fortification hexes in General Supply. They cannot be placed in a hex with a UR/MG unit already in it, and they cannot be placed in enemy ZOC (remember though that ZOCs do not extend into Major Cities).
            </p><p>
                        These units remain on their untried sides until the moment of combat or when the Soviet player moves them. Any UR/MG unit that is found to be a 0-0-0 is removed from the map and placed back in the cup.
            </p>


                    <div className="spacer2rem" />
                    <div className="subheader-image">
                        <span>22.6</span>
                        <div>Militia</div>
                        <img src={militia} alt="Soviet militia counters" />
                    </div>
                    <div className="spacer1rem" />
                    <p>
                        Militia units are scratch units that were thrown together by the Soviet military. These units tended to be highly unreliable.
            </p><p>
                        The Soviet player cannot move these units further than five hexes from their placement city. If forced to retreat further than five hexes then they are released from this restriction.
            </p><p>
                        Unlike UR/MG units, these do not get flipped when moved, only when attacked. If, when flipped, they turn out to be a 0-0-0, they are removed from play.
            </p><p>
                        When eliminated, they go to the Soviet rebuilding chart, not the cup.
            </p><p>
                        Militia with infantry or cavalry symbols can be removed voluntarily from the map by the Soviet player in the Replacement Phase, which gives the Soviet player 1 "I" Type replacement point. They can only be removed from a hex in General Supply. This exchange is generally a good idea when you've got valuable infantry units you want to build back up.
            </p>

                    <div className="spacer2rem" />
                    <div className="subheader-image">
                        <span>22.7</span>
                        <div>Zap units</div>
                        <img src={counter_zap} alt="Soviet Zap counter" />
                    </div>
                    <div className="spacer1rem" />
                    <div className="pdiv">
                        Zap units represent groups of recruits that are in basic training. They are combat units, and can be used as they are, or used for replacements.
                        <ul className="ul-no-top">
                            <li>They can be expended to recreate a unit in the Cadre Box which requires a Type I Replacement. Replace the Zap unit with the cadre unit in the same hex. Place a "Do Not Move One GT" marker on it.
                        The Do Not Move counter will be removed during the Soviet Engineering Phase.</li>
                            <li>They can also be used to provide a Type I Replacement to an eligible reduced Soviet unit that is on the map. The unit being built up then gets the "Do Not Move One GT" marker placed on it.</li>
                        </ul>
                    </div>

                    <div className="spacer1rem" />
                    <div className="subheader-image">
                        <span>22.8</span>
                        <div>Garrisons</div>
                        <img src={garrison} alt="Soviet garrison counters" />
                    </div>
                    <div className="spacer1rem" />
                    <p>
                        In several scenarios the Soviet player may have some, or many, units restricted to "garrison duty", which means they can't move from the hex they start from.
            </p><p>
                        These troops were controlled by "higher headquarters", who only begrudgingly would release them, piece meal, to the front.
            </p><p>
                        All units that are under a garrison marker are deemed to be garrison units. Other units can enter and leave the hex without being "garrisonned".
            </p><p>
                        Once a garrison is released, all units under that garrison marker are released and can move normally. Non-op HQs that are under a garrison marker can roll each turn for activation. Non-op HQs and activated HQs still operate as the HQs rules specify - even if they can't move due to being under a garrison marker.
            </p>
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