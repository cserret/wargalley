import React, { Component } from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import BsrLink from "../BsrLink/BsrLink";
import armored_train3 from "../../../images/efs/special/counter_soviet_nkvd_train_v3.jpg";
import armored_train_top from "../../../images/efs/special/armored_train.jpg";
import garrison from "../../../images/efs/special/garrison_counter.jpg";
import german_bridge from "../../../images/efs/special/v3_german_bridge.jpg";
import german_fort from "../../../images/efs/special/german_fort.gif";
import german_engineer2 from "../../../images/efs/special/v3_german_engineer.jpg";
import guards_rocket3 from "../../../images/efs/special/v3_soviet_guards_rocket.jpg";
import guards_inf3 from "../../../images/efs/special/v3_soviet_guards_inf.jpg";
import militia3 from "../../../images/efs/special/counter_soviet_militia_v3.jpg";
import counter_untried3 from "../../../images/efs/special/counter_soviet_untried_v3.jpg";
import soviet_fort from "../../../images/efs/special/soviet_fort.gif";
import soviet_nkvd from "../../../images/efs/special/counter_soviet_nkvd_v3.jpg";
import flotilla from "../../../images/efs/special/flotilla.jpg";
import counter_zap3 from "../../../images/efs/special/counter_soviet_zap_v3.jpg";
import super_heavy_artillery_front_rear from "../../../images/efs/special/super_heavy_artillery_front_rear.jpg";
import counter_flotilla3 from "../../../images/efs/special/counter_soviet_flotilla_v3.jpg";
import soviet_bridge_building from "../../../images/efs/special/soviet_bridge_building.jpg";
import super_heavy_artillery from "../../../images/efs/special/superheavy.jpg";
import './Special.scss';

export default class Special extends Component {

    state = {
        contextDrawnEN: false,
        contextDrawnFR: false
    }

    componentDidMount = () => {
        //   this.drawCanvas();
    }

    componentWillReceiveProps = (props) => {
        //    this.drawCanvas();
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

                    <div className="image-caption2">
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
                            <li>aid movement and attack across shallow water hexsides.<BsrLink page="23" rule="10.47b" /><BsrLink page="41" rule="15.53d" /></li>
                            <li>convert rail hexes.<BsrLink page="41" rule="15.53c" /></li>
                            <li>aid or participate in overruns.<BsrLink page="25" rule="11.3" /></li>
                            <li>allow construction of a Ferry.<BsrLink page="57" rule="22.32b" /></li>
                            <li>allow Bridge Repair.<BsrLink page="57" rule="22.44b" /></li>
                        </ul>
                        Engineers can also
                        <ul className="ul-no-top">
                            <li>provide Engineer Effects in combat in certain situations.<BsrLink page="23" rule="10.47b" /><BsrLink page="41" rule="15.53" /></li>
                            <li>exceed the stacking limit.<BsrLink page="41" rule="15.53c" /><BsrLink page="7" rule="3.33" /></li>
                        </ul>
                        <div>To conduct an overrun during the Movement or Motorized Movement Phase.
                            across a fortified hexside or against a strongpoint, requires
                            a motorized engineer to be participating, and that the odds are at least 12-1.<BsrLink page="26" rule="11.35c" />
                        </div>
                        <span className="spacer1rem" />
                        <div>When conducting an attack against a fortified defender hex, the DRMs from
                            any Super-Heavy Artillery and Engineer units are combined, and that number
                            cannot exceed the defender DRMs.<BsrLink page="32" rule="13.42e" />
                        </div>
                        <span className="spacer1rem" />
                        <div>
                            An Engineer can also be subject to Engineer Loss in a combat.<BsrLink page="43" rule="16.32,3b" />
                        </div>
                      
                    </div>
                    <span className="spacer1rem" />




                    <div className="gray-box">
                        <div className="subsubheader">Engineer - Strongpoints</div>
                        <img src={soviet_fort} alt="Soviet fort counter" /><img src={german_fort} alt="German fort counter" />
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










                    <span className="spacer2rem" />

                    <div className="image-caption2">
                        <img src={soviet_bridge_building} alt="Soviet engineers building pontoon bridge" />
                        <div>Soviet engineers building pontoon bridge</div>
                    </div>
                    <span className="spacer1rem" />
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
                        <li>In case of a successful Overrun on a hex with a Bridge marker in it, the Bridge marker
                            is removed.<BsrLink page="26" rule="11.37i" />
                            </li>
                    </ul>

                    <div className="rules-note">
                        Note that an enemy unit must enter the hex the bridge counter is actually in.
                        Being across the river in the hex the bridge is "bridging" to does not cause removal 
                        of the bridge unit.
                        
                    </div>

                    <span className="spacer2rem" />

                    <div className="subheader-image">
                        <div>Armored trains<BsrLink page="54" rule="21.3" /></div>
                        <img src={armored_train3} alt="Soviet armored train counter" />
                    </div>
                    <span className="spacer1rem" />
                    <div className="adjusted-up">
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

                    <div className="image-caption2">
                        <img src={flotilla} alt="flotilla" />
                        <div>Camouflaged BK-1125, rear platform, 12.7mm<br />
                            DSHK Heavy Machine Gun. (cmchant.com)</div>
                    </div>

                    <span className="spacer1rem" />

                    <div className="subheader-image">
                        <div>Flotillas<BsrLink page="58" rule="22.5" /></div>
                        <img src={counter_flotilla3} alt="Soviet flotilla counter" />
                    </div>
                    <span className="spacer1rem" />

                    <ul className="ul-no-top">
                        <li>
                            Flotillas are armored boats with weapons. They travel along water connected features,
                            which are specified for each scenario, where flotillas are used.
                            They move in either the Regular Movement Phase or the Motorized Movement Phase (but not both). They cannot move during
                            the Reaction Phase.<BsrLink page="58" rule="22.51a" />They cannot do Specialized Movement.<BsrLink page="58" rule="22.51f" />
                            Flotillas cannot move into hexes where Frozen conditions exist.<BsrLink page="58" rule="22.54a" />
                            Flotillas cannot move during Storm weather, and are subject to repositioning.<BsrLink page="58" rule="22.54b" />
                        </li>
                        <li>
                            Flotillas must stop when entering an enemy ZOC. Movement can be restricted by Air Interdiction.<BsrLink page="58" rule="22.51b" />
                        </li>
                        <li>
                            As Flotilla's move along a major river, the owner determines which side of the hexside they are on.<BsrLink page="58" rule="22.51c" />
                        </li>
                        <li>
                            On canals, Flotillas can only be on the side that has the canal hashed hexside graphic.<BsrLink page="58" rule="22.51d" />
                        </li>
                        <li>Flotillas can move on coastal or shallow sea or regular sea hexes at a MP cost of 1 per hex.<BsrLink page="58" rule="22.51e" />
                        </li>
                        <li>
                            Flotillas block enemy supply in the hex they occupy.<BsrLink page="58" rule="22.52" />
                        </li>
                        <li>
                            Flotillas cannot attack during Storm weather, but can defend and retreat.<BsrLink page="58" rule="22.54c" />
                        </li>
                        <li>During Storm weather, Flotillas on shallow water, lake, insland sea, all-sea, or coastal hexes can be
                            subject to Repositioning. During the werather Phase, each such Flotilla must be repositioned
                            at the nearest friendly port within its movement allowance. If no port is in reach, then the Flotilla stays in place.
                            <BsrLink page="58" rule="22.55" />
                        </li>
                        <li className="special-li yellow">Flotillas in ground combat <BsrLink page="58" rule="22.56" /><br />

                            <div className="flex-dashes">
                                <div>
                                    <div>-</div>
                                    <div>do not require Attack Supply nor General Supply.</div>
                                </div>
                                <div>
                                    <div>-</div>
                                    <div>are not subject to Surrender.
                                    </div>
                                </div>
                                <div>
                                    <div>-</div>
                                    <div>cannot conduct Anti-Aircraft Fire.
                                    </div>
                                </div>

                                <div>
                                    <div>-</div>
                                    <div>cannot receive Defensive Artillery Support unless they are stacked with other units that can.
                                    </div>
                                </div>
                                <div>
                                    <div>-</div>
                                    <div>do not receive fortification DRM benefits unless they are stacked with other units that can.
                                    </div>
                                </div>
                                <div>
                                    <div>-</div>
                                    <div>are subject too all combat results and can be removed as a step loss.
                                    </div>
                                </div>
                                <div>
                                    <div>-</div>
                                    <div>can retreat to an all-sea hex.
                                    </div>
                                </div>
                            </div>


                        </li>
                    </ul>



                    <span className="spacer2rem" />



                    {/* <div id="naval_info_container" className="naval-info-container">
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
                    </div> */}
                    <div className="image-caption2">
                        <img src={super_heavy_artillery} alt="super heavy artillery" />
                        <div>Schwerer Gustav railway gun</div>
                    </div>
                    <span className="spacer1rem" />


                    <div className="subheader-image">
                        <div>Super-Heavy Artillery (S-HA)<BsrLink page="32" rule="13.4" /></div>
                        <img src={super_heavy_artillery_front_rear} alt="super heavy artillery front and back" />
                    </div>
                    <span className="spacer1rem" />
                    <div className="adjusted-up">Super-Heavy Artillery generally follow the rules for regular artillery, except for the following special rules.</div>


                    <ul className="ul-no-top">

                        <li>Super-Heavy Artillery that have two modes, a Mobile side and a Firing side, can only move when on its Mobile side,
                            and can only provide combat support when on its Firing side.<BsrLink page="32" rule="13.42a" />
                            They only have one step for combat loss.<BsrLink page="32" rule="13.42a" />
                        </li>
                        <li>Super-Heavy Artillery, which are not Railroad-type, can only move along main hexsides connected with a road, minor road.<BsrLink page="32" rule="13.41a" />
                        </li>
                        <li>Movement along minor road hexes are only allowed in Dry or Frost weather.<BsrLink page="32" rule="13.41b" />
                        </li>
                        <li>Strategic Movement is allowed.<BsrLink page="32" rule="13.41c" /></li>
                        <li>S-HA units with a Mobile and Firing side can change modes during the friendly Engineering Phase, if it did not move that turn.
                            <BsrLink page="32" rule="13.42b" />
                        </li>
                        <li class="special-li yellow">Super-Heavy Artillery in combat <BsrLink page="58" rule="22.56" /><br />
                            <div className="flex-dashes">
                                <div>
                                    <div>-</div>
                                    <div>S-HA units can only apply their support strength,
                                        and any drms, against a Defensive Hex that contains
                                        any type of fortification.<BsrLink page="32" rule="13.42e" />
                                    </div>
                                </div>
                                <div>
                                    <div>-</div>
                                    <div>S-HA units with an "A" next to their support strength cannot
                                        use their support strength in Defense. If in a hex being
                                        attacked, they only contribute their defense strength.<BsrLink page="32" rule="13.42c" /></div>
                                </div>
                                <div>
                                    <div>-</div>
                                    <div>Axis S-HA does not count against the artillery combination
                                        limit.<BsrLink page="48" rule="17.54" /><BsrLink page="32" rule="13.42d" />
                                    </div>
                                </div>
                                <div>
                                    <div>-</div>
                                    <div>S-HA that are in their Firing side cannot retreat in combat. <BsrLink page="32" rule="13.42f" />
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="special-li blue">Super-Heavy Artillery Bombardment <BsrLink page="32" rule="13.43" /><br />
                            <div className="flex-dashes">
                                <div>
                                    <div>-</div>
                                    <div>Bombardment is performed before regular combat.<BsrLink page="32" rule="13.43d" />
                                    </div>
                                </div>
                                <div>
                                    <div>-</div>
                                    <div>When Axis S-HA are targeting an active fortification that is in a Defender Hex (during regular combat), it may
                                        conduct Bombardment. Soviet S-HA can not do Bombardment.<BsrLink page="32" rule="13.43" />
                                    </div>
                                </div>
                                <div>
                                    <div>-</div>
                                    <div>When doing Bombardment, refer to the Super-Heavy Artillery Effects Table.<BsrLink page="32" rule="13.43a" />
                                        If there is more than one S-HA doing Bombardment on the same hex, combine all into one resolution die roll.<BsrLink page="32" rule="13.43b" /></div>
                                </div>
                                <div>
                                    <div>-</div>
                                    <div>S-HA with an asterisk for strength can only destroy citadels or fortified lines.
                                        S-HA with an asterisk for strength only provide a DRM for support in combat.<BsrLink page="32" rule="13.43c" />
                                    </div>
                                </div>

                            </div>
                        </li>

                        {/* <li>Super-Heavy Artillery Mode <BsrLink page="32" rule="13.42" /><br />
                            <div className="flex-dashes">
                                <div>
                                    <div>-</div>
                                    <div>The two sides of the Axis S-HA units show different modes the Mobile side, with a blank range box and zero support strength,
                                    and the Firing side, showing its combat characteristics.<BsrLink page="32" rule="13.42a" /></div>
                                </div>
                                <div>
                                    <div>-</div>
                                    <div>S-HA units need to be in their Mobile side in order to move, and in Firing mode to provide combat support.
                                    </div>
                                </div>
                                <div>
                                    <div>-</div>
                                    <div>S-HA units can change modes during the friendly Engineering Phase, if it did not move that turn.
                                    </div>
                                </div>
                            </div>
                        </li> */}
                    </ul>







                    <span className="spacer3rem" />

                    <div className="subheader-image">
                        <div>Guards units<BsrLink page="54" rule="21.4" /></div>
                        <img src={guards_rocket3} alt="Soviet guards rocket counter" />
                        <img src={guards_inf3} alt="Soviet guards infantry counter" />
                    </div>
                    <span className="spacer1rem" />
                    <div className="adjusted-up">
                        Only the Soviet player has Guards units. They are denoted by the Gd identifier
                        and the red unit box on the counter. Guards units would get priority on the best equipment.</div>

                    <span className="spacer1rem" />

                    <div className="adjusted-up">
                        Guards Activation - The Soviets can activate one Guards unit that is within Command Range of a HQ's without Command point cost,
                        during the Soviet Motorized Movement Phase.
                        The HQ's can activate the Guards unit even if its Command value is reduced to 0 due to air interdiction.<BsrLink page="54" rule="21.41" />
                    </div>
                    <div>
                        Guards units within range of a Non-Op HQ cannot be activated with Guards Activation.<BsrLink page="54" rule="21.42" />
                    </div>



                    <span className="spacer2rem" />
                    <div className="subheader-image">
                        <div>NKVD<BsrLink page="55" rule="21.5" /></div>
                        <img src={soviet_nkvd} alt="Soviet NKVD counter" />
                    </div>
                    <span className="spacer1rem" />

                    <div>
                        The Peoples Commissariat for Internal Affairs, known by the initials NKVD,
                        formed special political troops. They were independent units, and
                        not formally under Soviet army control.
                        The feared "NKVD Commissars" of these units
                        could overrule the decisions of commanders on the ground. Historically,
                        Commissars were infamous for demanding that units defend their positions to the death,
                        and in the game they may issue the NO RETREAT order under the following conditions.

                    </div><span className="spacer1rem" /><div>
                        Whenever a NKVD unit is defending in a city, it
                        issues a mandatory NO RETREAT order on all units in the hex - unless the hex is
                        under the command span of a Non-Op HQ. You cannot counter-order this
                        NKVD NO RETREAT order (other than by moving a non-op HQ to within range of the hex).
                        Towns also fall under this rule when the weather is Mud or Snow.<BsrLink page="55" rule="21.51" />
                    </div><span className="spacer1rem" /><div>
                        You cannot apply step losses to the NKVD unit which issued the NO RETREAT order unless there are no
                        other units available to take losses. If there are two or more NKVD units in the hex,
                        then only one of them is the "active" NKVD unit - the others are treated as regular units.
                        The Soviet player chooses which NKVD unit will be the "active" one.<BsrLink page="55" rule="21.51b" />
                    </div>
                    <span className="spacer1rem" /><div>
                        An active Soviet HQ that is in range of a hex that recived the NO RETREAT under from a NKVD unit,
                        can cancel the order by expending an available command point.<BsrLink page="55" rule="21.51c" />
                    </div><span className="spacer1rem" /><div>
                        Beginning GT 31, only motorized NKVD units can issue the NO RETREAT order.<BsrLink page="55" rule="21.51d" />
                    </div><span className="spacer1rem" /><div>
                        Surrender die rolls get an added benefit if NKVD is present in the hex.<BsrLink page="55" rule="21.52" />
                    </div><span className="spacer1rem" />
                    <div>
                        Motorized NKVD units cannot conduct Reaction or Overrun movement.<BsrLink page="55" rule="21.53" />
                    </div>

                    <span className="spacer2rem" />
                    <div className="subheader-image">
                        <div>Untried units<BsrLink page="17" rule="8.4" /></div>
                        <img src={counter_untried3} alt="Soviet Untried counter" />
                    </div>
                    <span className="spacer1rem" />
                    <div className="pdiv">
                        Soviet MG units and Militia have Tried and Untried sides.
                        <ul className="ul-no-top">
                            <li>The Untried side shows ? symbols for their combat values.<BsrLink page="17" rule="8.41" /></li>
                            <li>The front side is its Tried side, and once on its front side
                                it stays on that side until eliminated or otherwise removed from the game.<BsrLink page="17" rule="8.41" />
                            </li>
                        </ul>
                        <div className="adjusted-up">Untried units are placed in an opaque cup, and drawn randomly,
                            with their Untried sides up, and placed on the map according to
                            scenario instructions..<BsrLink page="17" rule="8.42" />
                        </div>
                    </div>

                    <span className="spacer2rem" />
                    <div className="subheader-image">
                        <div>Militia<BsrLink page="18" rule="8.43" /><BsrLink page="55" rule="21.7" /></div>
                        <img src={militia3} alt="Soviet militia counter" />
                    </div>
                    <span className="spacer1rem" />
                    <div >Soviet Militia are brigade-sized units, which are put in an opaque cup for drawing randomly, per scenario instructions.
                        <BsrLink page="55" rule="21.71" />
                    </div>
                    <div>
                        The Soviet player has Militia units which represents men who have been quickly assembled from an
                        urban area, and who probably have had
                        inadequate training. They tended to be unreliable. They have unit boxes with a yellow background,
                        and have an untried side.
                    </div><div className="upper-space">
                        When militia units become available, place them, untried side up, up to five hexes away from their city (indicated on the counter).
                        <BsrLink page="18" rule="8.43a" />
                        They can be placed in enemy ZOC only if other friendly unit already occupies the hex.<BsrLink page="18" rule="8.43b" />
                    </div><div className="upper-space">
                        If the city the militia unit is te be placed is controlled by the Axis, then put the
                        militia unit back in the draw cup and draw another.<BsrLink page="18" rule="8.43c" />
                    </div>
                    <div className="upper-space">Militia units can be converted into Zap units at will during the Soviet Engineering Phase,
                        <BsrLink page="15" rule="7.44" /> unless they are under a Garrison marker.<BsrLink page="15" rule="7.44a" />
                        <BsrLink page="55" rule="21.72" />
                    </div>
                    <div className="upper-space">Eliminated, or otherwise removed, Militia units are removed from the game.
                        <BsrLink page="55" rule="21.73" />
                    </div>
                    <div className="upper-space">If a Militia units is forced to retreat more than 5 hexes away from its city or town,
                        then it is removed from the game.
                        <BsrLink page="55" rule="21.74" />
                    </div>
                    <span className="spacer2rem" />
                    <div className="subheader-image">
                        <div>Zap units<BsrLink page="14" rule="7.43" /></div>
                        <img src={counter_zap3} alt="Soviet Zap counter" />
                    </div>
                    <span className="spacer1rem" />
                    <div className="pdiv">
                        Zap units represent groups of recruits that are in basic training, or
                        collections of soldiers retreating from their destroyed units. They can
                        be used as they are for combat as regular regimental-sized units, or can be used
                        as a Type 1 replacement steps for regular units that can absorb Type 1 RPs.
                        <ul className="ul-no-top">
                            <li>1 RP step can be used to create a Zap unit during the Engineering Phase.
                                They are placed in the Active Box.<BsrLink page="14" rule="7.43a" />
                            </li>
                            <li>Zap units that start the turn in the Active Box can
                                be placed in any eligible on-map locations during
                                the friendly Movement Phase - one per location.
                                Eligible locations:
                                Any friendly town, city, or major city, and not in
                                enemy ZOC, unless a friendly unit is already
                                present in the hex.
                                At any friendly map-edge supply source.<BsrLink page="14" rule="7.43b" />
                            </li>
                            <li>A Zap unit can provide a Type 1 replacement step.<BsrLink page="14" rule="7.43c" />
                            </li>
                            <li>On-map use of Zap units as steps for existing deleted units -
                                At the start of the Soviet Engineering Phase, the Soviet player can
                                expend a Zap unit to restore a reduced-strenth unit that takes Type 1 RPs
                                <BsrLink page="14" rule="7.43d" />,
                                or expend a Zap unit on the map, and restore a unit that is in the Cadre Box,
                                and then place that restored unit in the hex the Zap unit was in.<BsrLink page="14" rule="7.43e" />
                            </li>
                            <li>Zap units removed from the map are placed in the Cadre Box.
                                unless it is used as a Type 1 replacement step, eliminated in combat, or surrendered.<BsrLink page="14" rule="7.43f" />
                            </li>
                        </ul>
                    </div>



                    <span className="spacer1rem" />
                    <div className="subheader-image">
                        <div>Garrisons<BsrLink page="55" rule="21.8" /></div>
                        <img src={garrison} alt="Soviet garrison counters" />
                    </div>
                    <span className="spacer1rem" />
                    <div>
                        Some Soviet units in a scenario may be declared as a Garrison,
                        signified by a Garrison counter being placed on top of them, which means they can't move from the hex they start from, unless
                        a situation occurs that lets them move normally.<BsrLink page="55" rule="21.81" />
                    </div>
                    <div>
                        Units under Garrison status cannot move, and cannot attack, but still defend normally, and can use their artillery
                        strength for defense. When released from Garrison, units can then be used normally.<BsrLink page="55" rule="21.82" />
                    </div><div>
                    </div><div>
                    </div>
                    <div className="pdiv">
                        Garrison units are released when any of these occur:
                        <ul className="ul-no-top">
                            <li>The hex is attacked.</li>
                            <li>An enemy zoc projects onto the hex under Garrison at the
                                end of any phase.<BsrLink page="55" rule="21.83" /></li>
                            <li>Is released by a turn specified in the scenario.<BsrLink page="55" rule="21.83" /> </li>
                            <li>If a "R" result is recieved from the Soviet Replacements Table
                                then one or two Garrisons can be released (no VP penalty applied).<BsrLink page="55" rule="21.84" />
                                <BsrLink page="15" rule="7.52" /> </li>
                            <li>Soviet Reservists who are placed in any friendly (in Russia, Belorussia, or Ukraine) town,
                                city or major city becomes a Garrison - put a Garrison marker on top of them.<BsrLink page="16" rule="7.82" />
                                </li>
                        </ul>
                    </div>


                </div>

                <ScrollToTopOnMount />

            </div>

        );
    }

}