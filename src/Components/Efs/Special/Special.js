import React, { Component } from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
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
        this.drawCanvas(this.props.language);
    }

    componentWillReceiveProps = (props) => {
        this.drawCanvas(props.language);
    }


    drawCanvas = (language) => {
        var canvas;
        var ctx;
        if (language === 'en') {
            canvas = document.getElementById('naval_info_container_canvas');
        }
        if (language === 'fr') {
            canvas = document.getElementById('naval_info_container_canvas_fr');
        }




        ctx = canvas.getContext("2d");


        ctx.strokeStyle = "#000000";
        ctx.lineJoin = "round";
        ctx.lineWidth = 3;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(136, 132);
        ctx.lineTo(199, 132);
        ctx.stroke();

        // ctx.strokeStyle = "#EBAE97";
        // ctx.lineWidth = 4;
        // ctx.beginPath();
        // ctx.moveTo(129, 215);
        // ctx.lineTo(190, 209);
        // ctx.stroke();

        // ctx.strokeStyle = "#897d74";
        // ctx.lineWidth = 4;
        // ctx.beginPath();
        // ctx.moveTo(129, 215);
        // ctx.lineTo(198, 209);
        // ctx.stroke();

        // ctx.strokeStyle = "#897d74";
        // ctx.lineWidth = 4;
        // ctx.beginPath();
        // ctx.moveTo(129, 214.5);
        // ctx.lineTo(198, 208.5);
        // ctx.stroke();

        // ctx.strokeStyle = "#897d74";
        // ctx.lineWidth = 5;
        // ctx.beginPath();
        // ctx.moveTo(129, 215.5);
        // ctx.lineTo(198, 209.5);
        // ctx.stroke();
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
                <div className={this.props.language === 'en' ? '' : 'block-hidden'}>
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
                    <div className="subheader-counter">
                        <div>Engineers</div>
                        <img src={german_engineer2} alt="German engineer counter" />
                    </div>
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
                    <div className="subheader-counter">
                        <div>Bridge units</div>
                        <img src={german_bridge} alt="German bridge counter" />
                    </div>
                    <p>
                        Bridge units are available to both sides, and really represent engineer units specialized in bridge building. These bridge units typically provided pontoon bridges across rivers, although they did also repair conventional bridges, but since bridges can't be "blown" in EFS, the only aspect of these bridge units in EFS is the ability to provide temporary bridges across rivers and major rivers.
            </p><p>
                        A bridge unit at a river negates the crossing the river cost for that hexisde. Note that the counter has an arrow. It points to the hexside that gets the temporary bridge.
            </p><p>
                        Bridge unit placement is very fast and loose in EFS. Basically you can place it in any hex in General Supply, regardless of any affiliation marked on the counter. No more than two friendly bridge units can be active per map. You can move a bridge unit at *any time* (once) during each friendly Movement Phase. This means units can use it to cross a river at one spot, then you can move the bridge unit to another river, and other units can then run across its bridge at the new location.
            </p><p>
                        Non-op HQ's interfere with Bridge units - they prohibit placement of bridges within their Command Range, and bridge units cannot leave a hex while under Command Range of a non-op HQ's.
            </p><p>
                        Bridge units cannot be captured or destroyed by the enemy. Bridge units cannot retreat. If the hex they are in is entered by an enemy unit, the bridge unit is moved to off map, then can be placed back on the map in the owner's regular Movement phase.
            </p>





                    <div className="spacer2rem" />
                    <div className="subheader-counter">
                        <div>Armored trains</div>
                        <img src={armored_train} alt="Soviet armored train counter" />
                    </div>
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
                    <div className="subheader-counter">
                        <div>Flotillas</div>
                        <img src={c3} alt="Soviet flotilla counter" />
                    </div>
                    <p>
                        Flotillas are armored boats. They can travel along rivers, coastal hexes, and even sea hexes, up to 16 hexes a turn.
            </p><p>
                        They are subject to air interdiction.
            </p><p>
                        They can move into ZOC, but not through them. Since ZOCs don't extend across Major Rivers, flotillas can freely move along Major Rivers.
            </p><p>
                        When they move along a river you need to indicate the "side" of the river they are on by placing the counter on the hex on one side of the river or other (you don't place them on the hexlines).
            </p><p>
                        Flotillas can be "overrun" by enemy units on the same side of the river as the flotilla. They can be attacked as if a regular unit, and they can participate on attacks on enemy units that in an hex adjacent to the river (either side).
            </p><p>
                        When moving a flotilla you keep along the river, no "jumping" over land to continue on a river. Flotillas do not benefit from fortified lines or strongpoints, by themselves. Axis flotillas are AA Fire capable.
            </p><p>
                        Flotillas are especially useful in swampy areas, as they are not affected by the difficult terrain. Flotillas often force the Axis player to use up some units to garrison some rear areas that are reachable by river, since the flotillas are rather difficult to track down and kill in the swamp.
            </p>

                    <div className="spacer2rem" />



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

                    <div className="spacer1rem" />




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
                    <div className="subheader-counter">
                        <div>Super-Heavy artillery</div>
                        <img src={super_heavy_artillery} alt="Super heavy artillery counters" />
                    </div>
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
                    <div className="subheader-counter">
                        <div>Guards</div>
                        <img src={guards_rocket} alt="Soviet guards rocket counter" />
                    </div>
                    <p>
                        The Soviets began a program of designating Guards units out of battle tested and well performing units (or grouping survivors into units). They would often get preference in equipment, including lend lease equipment. These units were more dependable and had better leadership.
            </p><p>
                        The Soviets can activate one Guards unit that is within Command Range of a HQ's without Command point cost. The HQ's can activate the Guards unit even if its Command value is reduced to 0 due to air interdiction. Non-op HQ's cancel this though if the Guards unit is in Command range of it. Guards units provide a beneficial die-roll modifier for surrender die rolls in its hex.
            </p>



                    <div className="spacer2rem" />
                    <div className="subheader-counter">
                        <div>NKVD</div>
                        <img src={soviet_nkvd} alt="Soviet NKVD counter" />
                    </div>
                    <p>
                        The Peoples Commissariat for Internal Affairs, known by the initials NKVD, formed special political troops. The feared "NKVD Commissars" of these units could overrule the decisions of commanders on the ground. A common order would be for the Commissars to demand a defense to the death.
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
                    <div className="subheader-counter">
                        <div>UR/MG units</div>
                        <img src={ur_mg} alt="Soviet UR counters" />
                    </div>
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
                    <div className="pdiv">
                        Zap units represent groups of recruits that are in basic training. They are combat units, and can be used as they are, or used for replacements.
                        <ul className="ul-no-top">
                        <li>They can be expended to recreate a unit in the Cadre Box which requires a Type I Replacement. Replace the Zap unit with the cadre unit in the same hex. Place a "Do Not Move One GT" marker on it.
                        The Do Not Move counter will be removed during the Soviet Engineering Phase.</li>
                        <li>They can also be used to provide a Type I Replacement to an eligible reduced Soviet unit that is on the map. They unit being built up then gets the "Do Not Move One GT" marker placed on it.</li>
                        </ul>
                    </div>

                    <div className="spacer1rem" />
                    <div className="subheader-image">
                    <span>22.8</span>
                        <div>Garrisons</div>
                        <img src={garrison} alt="Soviet garrison counters" />
                    </div>
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






























                <div className={this.props.language === 'fr' ? '' : 'block-hidden'}>
                    <div className="content-title">
                        <div>UNITÉS SPECIALES</div>
                        <div></div>
                    </div>

                    <div className="image-caption">
                        <img src={armored_train_top} alt="armored train" />
                        <div>Trains blindés à tourelles T-34 et T-28</div>
                    </div>
                    <div className="spacer1rem" />
                    <p>EFS a plusieurs types d'unités spéciales qui ajoutent é EFS une saveur historique trés riche. </p>

                    <div className="spacer2rem" />
                    <div className="subheader-counter">
                        <div>Génie</div>
                        <img src={german_engineer2} alt="German engineer counter" />
                    </div>
                    <p>
                    Le Génie dans EFS construit des points d'appuis amis et détruit ceux de l'ennemi. Une unité de Génie dans une ville pendant un tour de Boue autorise le transport aérien depuis cette cité. Une unité de Génie motorisé est nécessaire aux tentatives d'overrun contre des villes, des villes majeures et hexagone fortifié (line de fortification ou point d'appuis). Les " Apports du Génie " peuvent étre déclaré dans le combat, voir la section Combat pour plus d'informations. 
                                </p><p>
                                Les Points d'Appuis peuvent étre construits par les deux camps (sauf mention contraire dans le livret de scénario). Il ne peut y avoir qu'un PA par hexagone, bien qu'un PA puisse étre construit derriére une ligne fortifiée. Le joueur de l'Axe a besoin d'unités du Génie pour pouvoir les construire sur la carte. Le russe lui n'en a pas l'obligation bien que leur présence accélére la mise en place en évitant la face " En construction " du pion PA et en plaéant directement le cété " Construit " (Completed). Les PA donne un modificateur de +1 au lancé de au combat en faveur du défenseur entre autres, il existe d'autre apport bénéfiques. Les PA peuvent , s'il sont coupés et sans ravitaillement, étre perdu . Ils peuvent étre construit sur n'importe quel hexagone pourvu que celui-ci soit capable de tracer une ligne de ravitaillement général et ce méme en ZOC ennemie. Habituellement, les PA sont construits dans les villes, les hexagones de victoire, derriére les riviéres, sur les terrains favorables é la défense ou en les saupoudrant autour des villes importantes comme Smolensk ou Kiev. Bien que le +1 au dé ne résonne pas comme un avantage considérable, il existe d'autre bonus non négligeables comme l'obtention de résultats é astérisque, la difficulté é pratiquer des overrun et continue é provoquer des génes méme si ils ont été abandonnés en bloquant les routes, les conversion de rail et le ravitaillement tant qu'ils ne sont pas détruits. Pour réaliser leur annihilation, une division ou du Génie doit étre présente durant la phase de Génie, ce qui ralenti d'autant l'avancée des troupes de l'Axe ou détourne des moyens utiles ailleurs.
                                 </p>






                    <div className="gray-box">
                        <p className="subsubheader">Génie Soviétique - Point d'Appuis (Strongpoint)</p>
                        <img src={soviet_fort} alt="Soviet fort counter" />
                        <ul>
                            <li>Peut construire un PA le tour oé il le reéoit via la Table de Replacements. Le Génie Soviétique ne peut pas construire d'autre PA de leur propre chef, il doivent en quelque sorte étre ravitaillé en PA. NB : le joueur Soviétique peu placer un marqueur de PA " en construction" sans unité de génie présente.                </li>
                            <li>Le Génie doit étre en Ravitaillement Général.</li>
                            <li>Le Génie ne doit pas avoir utilisé le mouvement stratégique ou par rail durant le tour.</li>
                            <li>Le Génie ne doit pas avoir converti d'hexagone de chemin de fer.</li>
                            <li>Si le Génie est dans le rayon d'un QB non op. il ne peut placer des PA.</li>
                        </ul>
                    </div>









                    <div className="gray-box">
                        <p className="subsubheader">Génie Allemand - PA (Strongpoint)</p>
                        <img src={german_fort} alt="German fort counter" />
                        <ul>
                            <li>Peut placer un PA sur sa face en construction sur l'hexagone occupé.</li>
                            <li>Le Génie doit rester sur l'hexagone jusqu'é la prochaine phase de Génie, pour pouvoir retourner le marqueur sur sa face PA. Si l'unité quitte l'hexagone avant la fin de construction le marqueur est perdu.</li>
                            <li>Le Génie doit étre en Ravitaillement Général.</li>
                            <li>NB souvent les régles du scénario interdisent la construction des PA de l'Axe.</li>
                        </ul>
                    </div>









                    <div className="spacer2rem" />
                    <div className="subheader-counter">
                        <div>Pontonniers</div>
                        <img src={german_bridge} alt="German bridge counter" />
                    </div>
                    <p>
                    Les pontonniers sont disponible pour chaque camp et représentent les unités spécialisées dans la construction de ponts. Ces unités de pontonniers installent des ponts de bateaux é travers les cours d'eau et peuvent le cas échéant réparer les ponts classiques, cela dit ont ne peut pas faire sauter de pont dans EFS. La seule fonction de ces pions est de permettre le passage temporaire é n'importe quel endroit, d'une riviére ou d'un fleuve. L'unité de pontonniers annule le surcoét pour le passage de la riviére dans l'hexagone oé ils sont placés. Ces pions ont une fléche qui indique le point de passage temporaire. Le placement et la suppression des unités de pontonniers dans EFS sont trés aisés. Dans la pratique, on peut le placer sur n'importe quel hexagone durant la phase de Ravitaillement Général, sans tenir compte des information imprimées sur le pion (l'appartenance é une armée est donnée é titre indicatif). Pas plus de deux unités de pontonniers peuvent étre active en méme temps sur la méme carte. Le déplacement a lieu une seule fois par tour durant le mouvement général et é n'importe quel moment de cette phase. Cela signifie concrétement, que le pont peut étre utilisé pour faire traverser différentes unités puis étre bougé vers un autre point qui sera lui-méme utilisé pour d'autre unités et ce dans la méme phase.. Les QG non opérationnel interfére dans el placement des ponts - ils en interdisent le placement dans leur rayon de commandement et les pions ne peuvent quitter les rayon de ces derniers tant que ceux-ci ne sont pas opérationnels. Les unités de pontonniers ne peuvent étre détruites ni faire retraite, si une unité ennemie entre dans l'hexagone quelle occupent, elles sont retirées du jeu et replacer le tour suivant durant la phase de mouvement général. 
            </p>





                    <div className="spacer2rem" />
                    <div className="subheader-counter">
                        <div>Trains blindés</div>
                        <img src={armored_train} alt="Trains blindés" />
                    </div>
                    <p>
                    Chaque camp avait des trains blindés, aussi dans les premiers jeux de la série seul les Soviétiques sont ravitaillés par ce genre d'unité. Un train blindé peut se déplacer jusqu'é 48 hexagones de chemin de fer par tour (en tenant compte des interdictions potentielles). Ils peuvent se déplacer indifféremment dans l'une ou l'autre des phases de mouvements (mais pas les deux). Il ne nécessite pas de ravitaillement pour pouvoir se déplacer et ne comptent pas dans la capacité ferroviaire. Ils ne transportent rien. Les trains blindés allemands ne peuvent utiliser que la partie convertie du réseau, pendant que les trains soviétiques ne peuvent utiliser que la partie non convertie. Ils peuvent entrer dans une ZOC mais pas la traverser. Ils peuvent utiliser les réseaux ferrés derriére les lignes ennemies tant qu'un chemin est utilisable. Ils n'ont pas de bonus blindé. Certains d'entre eux sont des trains du NKVD et agissent comme les unités du NKVD pour les cas d'ordre automatique de Non Retraite. Ils peuvent rouler é travers du rayon de commandement de QG non opérationnels. 
            </p><p>
            Bien qu'elles soient faibles et sans ZOC, ces petites unites peuvent aider le russe en defendant des zones peu accessibles aux troupes réguliéres et agir de faéon quasi indépendante et couvrir utilement le long de leur tracé, les autres unités. 
                        </p>

                    <div className="spacer2rem" />

                    <div className="image-caption flotilla">
                        <img src={flotilla} alt="flotilla" />
                        <div>Camouflaged BK-1125, rear platform, 12.7mm<br />
                            DSHK Heavy Machine Gun. (cmchant.com)</div>
                    </div>

                    <div className="spacer1rem" />
                    <div className="subheader-counter">
                        <div>Flotilles	</div>
                        <img src={c3} alt="Flotilles	" />
                    </div>
                    <p>
                    Les flottilles sont des groupes de navires blindés. Elles peuvent se déplacer le long des riviéres et des cétes maritimes et mer jusque 16 hexagones. Elles sont soumises aux interdictions aériennes. Elles peuvent entrer dans une Zoc mais pas la traverser. Comme les ZOC ne s'étendent pas é travers les riviéres majeures, les flottilles peuvent se déplacer librement le long de celles-ci. Lors d'un mouvement le long d'une riviére, le joueur doit indiquer le cété ou se trouve la flottille. Elles peuvent étre attaquée par des unités réguliéres et étre overrunées ainsi que participer é des combats normaux des deux cétés de la riviére. Leur déplacement ne quitte pas le cours de la ou des riviéres. Elles ne peuvent bénéficier des avantages liés aux fortification ou lignes fortifiées. Les flottilles de l'axe possédent en facteur de défense AA. 

            </p><p>
                        Les flottilles sont particuliérement utiles en milieux marécageux, car elles ne sont pas affectées par le terrain. Ainsi, elles obligent l'Axe é laisser des unités en garnisons é l'arriére dans les zones que les flottilles peuvent atteindre tout en les rendant difficile é détruire du fait de la composition de terrain. 
            </p>

                    <div className="spacer2rem" />



                    <div id="naval_info_container_fr" className="naval-info-container-fr">
                        <div className="title">INFORMATION SUR L'UNITÉ NAVAL</div>
                        <div className="floater range">Intervalle</div>
                        <div className="floater arty">Facteur<br/>de soutien</div>
                        <div className="floater protection">Indice de<br />Protection</div>
                        <div className="floater transport">Capacité de<br />Transport</div>
                        <div className="floater movement">Points de<br />Mouvement<br />Naval</div>
                        <div className="floater class">Classe</div>
                        <div className="floater name">Prénom</div>
                        <div className="floater recovery">Valeur de<br />Récupération</div>
                        <div className="floater sailed">S - A Navigué</div>
                        <div className="ships">
                            <div>
                                <div>De face (prêt)</div>
                                <img src={ship} alt="Naval unit front" />
                            </div>
                            <div>
                                <div>Arrière (a navigué)</div>
                                <img src={ship_back} alt="Naval unit back" />
                            </div>
                        </div>
                        <canvas id="naval_info_container_canvas_fr" width="800" height="400" className="naval-info-container-canvas" />
                    </div>

                    <div className="spacer1rem" />




                    <div className="subheader-normal">
                        Naval
            </div>
                    <div className="pdiv">
                    Les règles navales (8.0) sont nombreuses, mais voici un résumé:
            <ul className="ul-no-top">
                            <li>Les unités navales ne sont pas des unités de combat. Ils n'ont aucune valeur d'empilement. Cependant, ils ont besoin de ravitaillement général et de ravitaillement d’attaque comme les unités de combat.</li>
                            <li>Les unités navales ne se déplacent que dans des hexs maritimes, mais elles peuvent se trouver dans un hex portuaire où elles empêchent l'entrée d'unités ennemies non combattantes dans l'hex.</li>
                            <li>Les unités navales n'ont pas de marches mais prennent des points de dégâts. Seules les unités navales de type "T" peuvent être reconstruites.</li>
                            <li>Les unités navales fournissent des tirs AA, mais uniquement pour eux-mêmes.</li>
                            <li>Les unités navales avec des valeurs de soutien d'artillerie peuvent fournir un tir d'artillerie offensif, si elles sont à portée d'un maléfice de défenseur.</li>
                            <li>Les unités navales ont deux côtés - "Ready" et "Sailed". Une unité navale "prête" peut être déplacée et considérée comme armée et ravitaillée en carburant. Une unité navale "naviguée" aura besoin
                    lancer pour la préparation au cours de la phase de préparation navale du segment stratégique. Une unité navale peut être déplacée dans n'importe quelle phase de mouvement, même les phases de mouvement ennemies.</li>
                            <li>Les unités navales avec une capacité de transport peuvent transporter des unités au sol.</li>
                            <li>Les unités navales peuvent transporter des unités pour permettre un assaut amphibie.</li>
                        </ul>
                        
                        Types d'unités navales:
            <ul className="ul-no-top">
                            <li>BB - Bataille</li>
                            <li>CL - Croiseur Léger</li>
                            <li>DL - Destroyer Leader</li>
                            <li>DD - Destroyer</li>
                            <li>T<span className="white-text">D</span> - Transport</li>
                        </ul>
                    </div>

                    <div className="spacer1rem" />
                    <div className="subheader-counter base">
                        <div>Base Navale Soviétique</div>
                        <img src={base} alt="Soviet naval base counter" />
                    </div>
                    <div className="pdiv">
                    Dans le jeu de Crimée, le joueur soviétique a deux unités de la base navale qui peuvent être placées dans n’importe quel hex de port sous contrôle soviétique. L'unité double la capacité du port
                        du port. Après le placement, une base navale ne peut être déplacée que par transport maritime.
                </div>

                    <div className="spacer2rem" />
                    <div className="subheader-counter">
                        <div>Artillerie super lourde</div>
                        <img src={super_heavy_artillery} alt="Super heavy artillery counters" />
                    </div>
                    <p>
                    Chaque camp posséde des unités d'artillerie super lourde. Elles ont des restrictions de mouvement assez significatives, communes aux deux camps, souligné dans la partie mouvement de ce site. Elles sont utiles lors de la réduction de forts et de villes. Elles doivent étre mises en batteries avant de pouvoir agir, c'est pourquoi elles ont deux faces utiles sur leurs pions : une face mobile et une face préte é faire feu. Elles ne peuvent étre retournées que pendant la phase du Génie ainsi lorsqu'elles passent en position tir elles ne peuvent plus bouger durant le tour (une bonne solution face é un adversaire pointilleux est de marquer le pion pour éviter un mouvement malencontreux). Les unités d'artillerie lourde (lorsque elles tirent) ajoute leur potentiel de bombardement aux combat plus un modificateur de dé de -1 sur une attaque en milieu urbain, en ville majeure. 
                </p>

                    <div className="gray-box">
                        <p className="subsubheader">Artillerie super lourde de Soviétique</p>
                        <ul>
                            <li>Les unités de défenses cétiéres et l'artillerie sur rail soviétiques sont considérées comme de l'artillerie super lourde.</li>
                            <li>Les unités d'artillerie super lourde avec un marqueur activé ne peuvent apporter leur valeur de soutien au combat.</li>
                            <li>Les unités d'artillerie super lourde soviétique sont comptées pour déterminer le nombre maximum d'unités pouvant apporter leur soutient lors d'un combat.</li>
                            <li>Les unités d'artillerie super lourde soviétique peuvent apporter leur valeur de support en défense et en attaque.</li>
                        </ul>
                    </div>


                    <div className="gray-box">
                        <p className="subsubheader">Artillerie super lourde de l'Axe</p>
                        <ul>
                            <li>Les unités d'artillerie super lourde allemande ne sont pas comptées pour déterminer le nombre maximum d'unités pouvant apporter leur soutient lors d'un combat.
                </li>
                            <li>Les unités d'artillerie super lourde soviétique peuvent apporter leur valeur de support seulement en défense. Dans ce cas, on ne compte que la valeur défensive du pion.</li>
                        </ul>
                    </div>



                    <div className="spacer3rem" />
                    <div className="subheader-counter">
                        <div>Garde</div>
                        <img src={guards_rocket} alt="Soviet guards rocket counter" />
                    </div>
                    <p>
                    Les soviétiques commencérent une mise en éuvre d'unités de la Garde lorsque certaines unités eurent acquis de l'expérience et se comportérent correctement au combat (en générale celles qui avaient survécues). Elles recevaient en priorité le matériel en particulier celui provenant du Prét Bail allié. Ces unités étaient plus et avaient un meilleur commandement. 

            </p><p>
            Les soviétiques peuvent activer une unité de la garde située dans le rayon de commandement d'un QG (avec ou sans point de commandement du é un niveau 0 ou é une interdiction). Néanmoins les QG non opérationnel ne peuvent réaliser cette action. 

            </p>



                    <div className="spacer2rem" />
                    <div className="subheader-counter">
                        <div>NKVD</div>
                        <img src={soviet_nkvd} alt="Soviet NKVD counter" />
                    </div>
                    <p>
                    Le commissariat du peuple aux affaires internes, connu par les initiales NKVD était composé de troupes politiques spéciales. Les terribles "commissaires" de ces unités pouvaient annuler les décisions d'un commandant sur le terrain. Un ordre commun pour les commissaires était de demander une résistance jusqu'é la mort. 
</p><p>
Lorsqu'une unité du NKVD se défend dans une ville majeure, une ville ou un village, il donne obligatoirement un ordre 'Pas de Retraite' é toutes les unités empilées avec elle - é moins que l'hex ne soit dans le rayon de commandement d'un QG non op. Vous ne pouvez pas annuler l'ordre de ne pas retraiter du NKVD (sauf en déplaéant un QG non op é portée de l'hex). 
</p><p>
Vous ne pouvez pas appliquer de pas de pertes é l'unité du NKVD qui a donné l'ordre de ne pas retraiter é moins qu'il n'y ait plus d'autres unités éligibles pour subir des pertes. Si il y a deux unités du NKVD ou plus dans un hex, alors une seule d'entre elle est l'unité "active" du NKVD - les autres sont traitées comme des unités réguliéres. Le joueur Soviétique choisit l'unité du NKVD qui sera "active". Les unités du NKVD ne peuvent que donner l'ordre Pas de Retraite - elles ne peuvent jamais donner un ordre de RETRAITE SUPPLEMENTAIRE. 
</p><p>
Les unités du NKVD qui ne sont pas dans une ville majeure, une ville ou un village ne peuvent pas donner d'ordres et sont traitées comme les autres unités d'infanterie. 
</p><p>
Il existe des unités ferroviaires du NKVD trés utile lorsque vous avez besoin d'un hex de ville pour monter une défense acharnée. 
</p><p>
Les unités du NKVD apportent un modificateur au dé bénéfique pour les jets de reddition dans leur hex. 


            </p>





                    <div className="spacer2rem" />
                    <div className="subheader-counter">
                        <div>Unités UR/Mitrailleuse</div>
                        <img src={ur_mg} alt="Soviet UR counters" />
                    </div>
                    <p>
                    Ukreplyonni Raion (UR) unités sont des groupes de mitrailleuses et des troupes de forteresse. Ces unités, et la milice, ont des faces inconnues (réminiscence de Panzergruppe Guderian). Elles sont placée dans une tasse opaque et tirées aléatoirement placée face cachée. Comme elles sont supposées étre inconnues un minimum de précaution s'imose lors de leur placement pour qu'elles restent une surprise pour les russes et les allemands. Certaine peuvent étre placées au début du scénario, d'autres arrivent comme renforts ou peuvnet étre construite en utilisant un point de renforcement de type 'I' points pour les tirer de la tasse et les placer sur la carte. Durant la phase amie de renforcement, les unités UR/MG sont placées dans n'importe quelle ville ou ville majeure amie en ravitaillée, ou n'importe quel hexagone de fortification soviétique, ami pendant la phase de ravitaillement. Elles ne peuvent ni étre empilées avec une autre unité UR/MG déjé présente, ni placée en ZOC ennemies (se souvenir que les ZOCs ne s'étendent pas dans les Villes Majeures). 
</p><p>
Ces unités restent cachées jusqu'au moment oé elles sont engagées dans un combat ou lorsque le joueur russe les déplace. Si l'une d'entre elle est du type 0-0-0, elle est immédiatement retirée du jeu et replacée dans la tasse. 
            </p>


                    <div className="spacer2rem" />
                    <div className="subheader-counter">
                        <div>unités de Milice</div>
                        <img src={militia} alt="Soviet militia counters" />
                    </div>
                    <p>
                    Les unités de Milice sont assemblage de troupes combattantes hétérogénes organisées dans l'urgence par les militaires soviétiques. Le joueur russe ne peut les déplacées plus de loin que cinq hexagone de leur placement initial. Si elles sont forcées de faire retraites au-delé, cette restriction n'est plus valable. Contrairement aux unités UR/MG, elles ne sont pas retournées lors d'un mouvement mais seulement lors de combat. Si l'unité est un 0-0-0, elle est définitivement retirées du jeu, lors de l'élimination elle rejoint la table de reconstruction et pas la tasse. Le milice ainsi que la Cavalerie peuvent étre retirée volontairement du jeu durant la phase de renforcement et gagner ainsi un point de reconstruction du type ' I ' (é condition bien sér que l'hexagone oé elle se trouve soit ravitaillé). Cet échange est intéressant pour récupérer des unités de valeur et les renvoyer au feu.
                      </p>

                    <div className="spacer1rem" />
                    <div className="subheader-counter">
                        <div>Garnison</div>
                        <img src={garrison} alt="Soviet garrison counters" />
                    </div>
                    <p>
                    Dans plusieurs scenarii, le joueur soviétique peut avoir une ou plusieurs unités obligées de servir de garnison ce qui signifie qu'elle ne peuvent sortir de leur hexagone de déploiement. Ces troupes sont contrélées par le Haut Commandement et ne peuvent servir comme chair é conon sur le front. 
</p><p>
Seules les unités désignées comme garnison servent dans cette mission et ce tant que les conditions de fin de service ne sont pas remplies, les autres unités qui traverseraient ou stationneraient dans le méme hexagone n'acquiérent pas ce statut. Dés la fin de celui-ci, elles se comportent normalement. 
 </p>
                    <div className="pdiv">
                    L'obligation de Garnison prend fin lorsqu'une de ces cas se produit: 
            <ul className="ul-no-top">
                            <li>L'hexagone est attaqué.</li>
                            <li>Une unité ennemie devient adjacente.</li>
                            <li>Elle n'est plus ravitaillée.</li>
                            <li>Un 'R' dans la table de Renforcement est obtenu.</li>
                            <li>Le scénario indique le tour de fin de garnison. </li>
                        </ul>
                    </div>


                </div>








































                <ScrollToTopOnMount />


            </div>

        );
    }

}