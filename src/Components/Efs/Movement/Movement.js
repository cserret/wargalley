import React from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import BsrLink from "../BsrLink/BsrLink";
import c1 from "../../../images/efs/movement/c1.jpg";
import c3 from "../../../images/efs/movement/c3.jpg";
import c7 from "../../../images/efs/movement/c7.jpg";
import c8 from "../../../images/efs/movement/c8.jpg";
import c10 from "../../../images/efs/movement/c10.jpg";
import c12 from "../../../images/efs/movement/c12.jpg";
import german_bridge from "../../../images/efs/movement/bridge_unit_german.png";
import infiltration_movement_example from "../../../images/efs/movement/infiltration_movement_example.jpg";
import german_superheavy from "../../../images/efs/movement/german_superheavy.jpg";
import motorway from "../../../images/efs/movement/motorway.jpg";
import roadsigns from "../../../images/efs/movement/roadsigns.jpg";
import soviet_cavalry from "../../../images/efs/movement/soviet_cavalry.jpg";
import soviet_cossack from "../../../images/efs/movement/soviet_cossack.png";
import germansuperheavy from "../../../images/efs/movement/germansuperheavy.jpg";
import german_pontoon_bridge from "../../../images/efs/movement/german_pontoon_bridge.png";
import german_troops_railroad from "../../../images/efs/movement/german_troops_railroad.png";
import mudroad from "../../../images/efs/movement/mudroad.jpg";
import right_arrow from "../../../images/efs/right_arrow.png";
import airTransportUnits from "../../../images/efs/movement/air_transport_units.jpg";
import mountain_unit_infiltration_example from "../../../images/efs/movement/mountain_unit_infiltration_example.jpg";
import overrun_marker from "../../../images/efs/movement/overrun_marker.png";
import sovietCavalry from "../../../images/efs/movement/soviet_cavalry_120x120.png"
import sovietTrain from "../../../images/efs/movement/soviet_train_120x120.png"
import sovietNavalArtillery from "../../../images/efs/movement/soviet_naval_artillery_120x120.png"
import germanInfantryDivision from "../../../images/efs/supply/german_infantry_division_120.png"
import germanHeavyArtillery from "../../../images/efs/movement/german_heavy_artiilery.png"
import germanRocketArtillery from "../../../images/efs/movement/german_rocket_artillery_120.png"
import germanPanzer from "../../../images/efs/movement/german_panzer_120x120.png"
import roadsExample from "../../../images/efs/movement/roads_example.jpg"
import './Movement.scss';

const Movement = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div>MOVEMENT<BsrLink page="19" rule="10.0" /></div>
                <div></div>
            </div>

            <div className="generic-flex-space-around road-signs">
                <img src={roadsigns} alt="road signs" className="image-border" />
            </div>
            <span className="spacer1rem" />

            Units move by various methods, depending on their types and the phase.
            <span className="spacer0_5rem" />
            Most movement of ground units is done in the regular Movement phase<BsrLink page="19" rule="10.11" />.
            <span className="spacer0_5rem" />
            There is also a Motorized Movement phase<BsrLink page="19" rule="10.12" />, in which mostly only motorized units can move in.<br />
            <span className="spacer0_5rem" />
            Some special movements of units on the map can also occur in the Reaction phase, and in the Combat phase.<br />
            <span className="spacer0_5rem" />
            Ground units may have special color coded movement factors, that give the units certain movement characteristics.

            There is some limited ability to move units by railroad and by air transport. There are some actual armored trains
            that, of course, move only by rail lines.
            There are also some flottillas that can move mostly along rivers and lakes.
            And finally there are optional Naval rules that allow some units in the sea and along the coast.

            <span className="spacer0_5rem" />
            <div>
                The specific movement types in EFS:
            </div>
            <span className="spacer0_5rem" />

            <ul className="no-bullets">
                <li><img src={germanInfantryDivision} alt="German infantry division" width="100" height="100" />
                    <div>
                        <span className="list_header">White movement <BsrLink page="19" rule="10.11" /></span>
                        The normal movement type that moves in the regular Movement Phase.
                    </div>
                </li>
                <li><img src={sovietCavalry} alt="Soviet cavalry" width="100" height="100" />
                    <div>
                        <span className="list_header">Yellow movement <BsrLink page="27" rule="11.4" /></span>
                        Infiltration capable.</div>
                </li>
                <li><img src={sovietTrain} alt="Soviet train" width="100" height="100" />
                    <div>
                        <span className="list_header">Gray movement <BsrLink page="24" rule="11.1" /></span>
                        Rail movement only.
                    </div></li>
                <li><img src={sovietNavalArtillery} alt="German heavy artillery" width="100" height="100" />
                    <div>
                        <span className="list_header">Green movement <BsrLink page="32" rule="13.41" /></span>
                        Super Heavy artillery movement.
                    </div></li>
                <li><img src={germanRocketArtillery} alt="German rocket artillery" width="100" height="100" />
                    <div>
                        <span className="list_header">Orange movement <BsrLink page="20" rule="10.28" /></span>
                        Motorized but only moves in Regular Movement phase.
                    </div></li>
                <li><img src={germanPanzer} alt="German panzer regiment" width="100" height="100" />
                    <div><span className="list_header">Red boxed movement <BsrLink page="19" rule="10.12" /></span>
                        Motorized movement that moves in Motorized Movemment Phase.</div></li>
                <li><img src={germanHeavyArtillery} alt="German heavy artillery" width="100" height="100" />
                    <div>
                        <span className="list_header">Blue movement <BsrLink page="58" rule="22.51" /></span>
                        Flotilla/Naval movement only.
                    </div></li>
            </ul>
            <span className="spacer2rem" />
            <div className="padded">
                If you look at the Sequence of Play <BsrLink page="8" rule="4.21" />, you'll see that there is an unusual order compared to other games.
                The sequence of play for the Germans and Soviets are not symmetrical. Specifically the
                Movement and Combat phases are in a different order for each side.
            </div>
            <span className="spacer1rem" />
            <div className="wrapper-wrapper">
                <div class="sop-wrapper">
                    <div>Axis</div>
                    <div>regular Movement</div>
                    <div><img src={right_arrow} alt="right arrow" width="30" height="24" /></div>
                    <div>Combat</div>
                    <div><img src={right_arrow} alt="right arrow" width="30" height="24" /></div>
                    <div>Motorized Movement</div>

                    <div>Soviet</div>
                    <div>Motorized Movement</div>
                    <div><img src={right_arrow} alt="right arrow" width="30" height="24" /></div>
                    <div>Combat</div>
                    <div><img src={right_arrow} alt="right arrow" width="30" height="24" /></div>
                    <div>regular Movement</div>
                </div>
            </div>

            <span className="spacer1rem" />
            <div>
                As you can see, the Soviets are at a disadvantage.
                <span className="spacer0_5rem" />
                The Axis player gets to move all his units to set up combats, but the Soviet player can *only move motorized units before combat.
                <span className="spacer0_5rem" />
                *The Soviet player does have a limited ability to move some non-motorized units during the Soviet Motorized Movement Phase by having a headquarters "Activate" a non-motorized unit. This will be discussed in the section under "Headquarters".

            </div>

            <div className="subheader-rule">
                Terrain Effects on Movement <BsrLink page="21" rule="10.4" />
            </div>
            <span className="spacer0_5rem" />
            The <span className="b">Terrain Effects Chart</span> has many different costs for different kinds, and combinations, of terrain. There are different columns for "Dry" weather, "Mud", "Frost", and "Arctic".
            <span className="spacer0_5rem" />
            There can also be conditions that cause "Lingering mud" and "Lingering snow", depending
            on the previous turn's weather. <BsrLink page="9" rule="5.2" />
            <span className="spacer0_5rem" />
            Weather has effects on movement, General supply, ZOCs, Air missions, and combat.



            <div className="subheader-rule">
                Roads in EFS
                <svg height="78" width="386" style={{ marginLeft: '1rem' }}>
                    <image href={roadsExample} x="0" y="0" height="78" width="386" />

                    <text x="45" y="62" className="image-label"
                        fontSize="12px"
                        textAnchor="middle"
                    >Motorway</text>

                    <text x="144" y="66" className="image-label"
                        fontSize="12px"
                        textAnchor="middle"
                    >Main road</text>

                    <text x="246" y="62" className="image-label"
                        fontSize="12px"
                        textAnchor="middle"
                    >Trail</text>

                    <text x="344" y="63" className="image-label"
                        fontSize="12px"
                        textAnchor="middle"
                    >Railroad</text>
                </svg>
            </div>
            <span className="spacer0_5rem" />
            <div>
                The term "road" can sometimes be confusing in EFS. There are three kinds of roads in EFS, plus rail lines that can provide road-like benefits. Each usually provide some movement benefits as compared to going "off road".
                <span className="spacer0_5rem" />
                When "roads" are mentioned in the rules, they usually refer to both "Main" roads and "Minor" roads, unless
                noted. The differences between main roads and minor roads is mostly handled by the Terrain Effects Chart.
                <span className="spacer0_5rem" />
                Rail lines can provide rail movement, as in "traveling in a train", but troops can also
                travel (on foot or in a wagon or vehicle) along a rail line at a reduced cost since, although not as nice as a main a road, they still
                allow easier movement, especially through rough terrain. <BsrLink page="21" rule="10.42" />
                <span className="spacer0_5rem" />
                Main Roads are solid lines, and provide dependable easier travel.
                <span className="spacer0_5rem" />
                A Motorway is identical to a Main Road, but it can have certain restrictions on unit movement along it.
                The Motorway to Moscow was heavily used by trucks transporting supplies to the front, depending on the
                scenario.
                <span className="spacer0_5rem" />
                Unlike is most wargames, your units can only benefit from road movement if they are truely
                traveling along a road. If your units are leaving a road and going into an adjacent hex that
                is not connected to the road, then its assumed your units left the road in the previous hex,
                and so they need to pay the full cost of entering that hex (without the road benefit).
                <span className="spacer0_5rem" />
                This rule has a little wiggle room. You could "end" your movement in a phase in a hex with a road and claim the road benefit. Then in the next movement phase you can leave that road and not worry about "paying back" for the previous movement phase. Using this method you could extract units that were otherwise "trapped" on a road going through otherwise prohibited terrain and "escape" into a non-prohibited hex that is next to it.
            </div>

            <span className="spacer2rem" />

            <div className="subheader-image">

                <div>Super-heavy artillery <BsrLink page="32" rule="13.4" /></div>
                <img src={germanHeavyArtillery} alt="German heavy artillery" width="80" height="80" />
            </div>
            <span className="spacer1rem" />
            <div>
                Super-heavy artillery (marked by unit symbol and green movement rate) are very restricted in how they can move.
                <span className="spacer0_5rem" />
                They have two sides, a mobile side and a firing side. They must be on
                their mobile side to be moved. <BsrLink page="32" rule="13.42d" />
                <span className="spacer0_5rem" />
                They can be moved by railroad movement (regardless of weather). <BsrLink page="32" rule="13.42d" />
                <span className="spacer0_5rem" />
                They can only move along minor roads during Dry or Frost weather. <BsrLink page="32" rule="13.42b" /> 
                They can move along main roads in all weather conditions.
                <span className="spacer0_5rem" />
                They can conduct strategic movement. <BsrLink page="32" rule="13.42c" /><BsrLink page="25" rule="11.2" />

            </div>



            <span className="spacer2rem" />

            <div className="subheader-image header-2-image">
                <div>Soviet cavalry</div>
                <img src={sovietCavalry} alt="Soviet cavalry" width="80" height="80" />
                <img src={soviet_cossack} alt="Soviet Cossack commander at Kiev, 1942" />
            </div>
            <span className="spacer1rem" />
            <div>
                Soviet cavalry units can move during both Motorized and Regular Movement Phases.
                <ul className="bare-ul">
                    <li>They can always move 1/2 their movement during the Soviet Motorized Movement Phase, and then full movement during the Regular Movement Phase.</li>
                    <li>They do not suffer from the -2 MP penalty for being OOS. </li>
                    <li>Cavalry units with a yellow MA can conduct Infiltration Movement.  <span className="rule-ref">11.52.b, 10.13.d,e</span> </li>
                    <li>Soviet (not Axis) cavalry units can conduct overruns. If the overrun fails with a Soviet cavalry unit, that cavalry unit takes the first hit. <BsrLink page="26" rule="11.37j" /></li>
                    <li>They do not have the "retreat before combat option" capability that you see in some other games.</li>
                </ul>
            </div>



            <div className="subheader-image stalin">
                <span>10.75c2</span>
                <div>Minor roads in mud</div>
                <img src={mudroad} alt="muddy road" />
            </div>

            <div>
                Minor Roads are considered to all but disappear in Mud turns. Motorized units must pay cost for the other terrain in the hex when moving along a Minor Road during Mud. The exception is Woods - do not add Woods cost while traveling along a Minor Road through Woods in Mud. Units can still do Strategic Movement along Minor Roads in Mud, though it doesn't change the cost of entering the hexes.
            </div>

            <span className="spacer2rem" />
            <div className="subheader-image header-1-image">
                <div>Minsk-Smolensk-Moscow Motorway</div>
                <img src={motorway} alt="Minsk-Smolensk-Moscow Motorway" />
            </div>

            <div className="pdiv">
                (<span className="i">Barbarossa: Army Group Center only</span>) The Motorway in Army Group Center has special restrictions on its use. The Motorway was so important for the movement of supplies and critical reinforcements to the drive on Smolensk and Moscow that the Germans strictly controlled who and want could utilize this very important highway.
                <ul className="bare-ul">
                    <li>Only Axis motorized, Orange MA, and Green MA units may benefit from the road rate on the Motorway. Super-Heavy artillery is still, though, restricted to one hex per MP.</li>
                    <li>For all other units, they can move along the Motorway but they have to pay the costs of other terrain in the hex, as if the Motorway wasn't even there.</li>
                    <li>Soviet forces can use the beneficial Motorway rates without these restrictions.</li>
                </ul>
            </div>

            <span className="spacer2rem" />
            <div className="subheader-image header-1-image">
                <div>How Railroads are sometimes treated like a road</div>
                <img src={german_troops_railroad} alt="German troops walking along railroad" />
            </div>
            <div className="pdiv">
                <ul className="bare-ul">
                    <li>When moving along a railroad (not using rail movement) in woods, subtract 1 from the movement cost to enter that hex.</li>
                    <li>When moving along a railroad over a River or Major River hexside, the unit ignores the cost of crossing that river or Major River hexside.</li>
                    <li>Artillery units can cross a Major River along a railroad.</li>
                    <li>Motorized units (and those with Orange MAs) may enter a swamp hex moving along a railroad. The cost is 3 MP per hex in any weather condition.</li>
                    <li>During mud turns, motorized units extend their ZOCs into surrounding hexes only if it is along a road or railroad.</li>
                    <li>A railroad can allow a LOC to go through a swamp hex during Dry or Mud turns.</li>
                </ul>
            </div>

            <span className="spacer1rem" />

            <div className="subheader-image header-2-image">
                <div>Bridges<BsrLink page="56" rule="22.2" /></div>
                <img src={german_bridge} alt="German bridge" />
                <img src={german_pontoon_bridge} alt="German pontoon bridge" />
            </div>
            <span className="spacer1rem" />
            <div>
                Players may get some bridge units, depending on the scenario.
                These bridge units allow movement across a river or major river without having to pay the river crossing costs.
                Bridge units cannot be destroyed or captured. If an enemy unit enters the hex with the bridge unit, it is
                removed from the map and returned to the owning player, who may place it again during the next turn.
                Roads (major and minor) and railroads that go across rivers are assumed to have bridges there.
                Those bridges also never get destroyed, and are always available to both sides.
                Some bridges are printed on the map - those bridges *can* be destroyed.<BsrLink page="57" rule="22.4" />
            </div>
            <div>
                To place a bridge, the active player can place the counter with the under-construction side next to a river, during the
                (Axis) Movement Phase or (Soviet) Motorized Movement Phase.
                The hex the bridge counter is placed in must be in General Supply (the other side of the river isn't required to be in
                General Supply). A bridge can be constructed where there is a destroyed bridge marker (after the "new" bridge is complete,
                the bridge marker and the destroyed bridge marker can be removed).
                Movement over the completed bridge is considered to be road movement.
            </div>

            <span className="spacer2rem" />

            <div className="subheader-image header-2-image">
                <div className="header-1-image-title">Infiltration Movement<BsrLink page="27" rule="11.4" /></div>
                <img src={infiltration_movement_example} alt="Infiltration movement example" style={{ height: 'auto' }} />
            </div>
            <span className="spacer0_5rem" />
            <div className="pdiv">
                Infiltration Movement allows eligible units to move directly from a hex in enemy unit ZOC to adjacent hex in enemy unit ZOC (even if the ZOC is from different
                enemy units), in it's movement phase where it normally has its full movement point allowance. The unit doing Infiltration Movement expends all its movement point allowance in moving that 1 hex.
                already in enemy zoc. The unit can be Out of Supply, and still execute Infiltration Movement.<br />
                <span className="spacer1rem" />




                <div className="indented-box background-green">
                    <div className="indented-box-title">Eligible units:</div>
                    <ul>
                        <li>Motorized units with a printed Movement Allowance of 7 or greater.</li>
                        <li>Cavalry units with a yellow Movement Allowance.</li>
                        <li>Ski units with a yellow Movement Allowance (see special restriction below).</li>
                    </ul>
                </div>


                <span className="spacer1rem" />
                <div className="indented-box background-red">
                    <div className="indented-box-title">Restrictions:</div>
                    <ul>
                        <li>Infiltration Movement cannot be done when the weather condition of the hex being moved to is Mud.</li>
                        <li>The unit must have had enough movement points to have moved into the hex as if there was no enemy ZOC. The One-Hex movement rule cannot be used to evade this requirement.</li>
                        <li>Infiltration movement cannot happen across non-destroyed enemy fortified lines or into enemy fortifications.</li>
                        <li>Ski units can only conduct Infiltration Movement when the weather condition of the hex being moved to is Snow.</li>
                    </ul>
                </div>

            </div>



            <span className="spacer2rem" />

            <div className="subheader-image header-2-image">
                <div className="header-1-image-title">Special Infiltration Movement<BsrLink page="27" rule="11.48" /></div>
                <img src={mountain_unit_infiltration_example} alt="mountain unit Infiltration Movement example" style={{ height: 'auto' }} />
            </div>
            <span className="spacer0_5rem" />
            <div className="pdiv">
                <ul className="bare-ul">
                    <li>Mountain units can conduct Infiltration Movement into or out of a hill, mountain, or alpine hex.</li>

                    <li>All combat units (except for green and orange MA units) can qualify for infiltration movement if the hex being moved to has a
                        friendly unit at the start of the movement phase. The unit that was in the destination hex is free to move after the
                        infiltrating unit moves into the hex.</li>
                </ul>
            </div>



            <span className="spacer2rem" />

            <div className="subheader-image header-2-image">
                <div className="header-1-image-title">One-Hex Movement<BsrLink page="27" rule="11.5" /></div>
            </div>
            <span className="spacer0_5rem" />
            <div className="pdiv">
                A unit with a movement allowance greater than 0 can always move 1 hex (as its total movement that phase)
                even if it doesn't have enough movement points to do so, under these conditions:<br />


                <ul className="bare-ul">
                    <li>Can only be done in the movement phase that the unit usually has its full movement allowance.</li>
                    <li>Can not be done into a hex, or across a hexside, that is prohibited to the unit due to terrain restrictions listed on the
                        Terrain Effects Chart.</li>
                    <li>Cannot be from a hex in an enemy ZOC to a hex also in enemy ZOC.</li>
                </ul>
            </div>


            <span className="spacer2rem" />
            <div className="subheader-image">
                <div>Air Transport Mission<BsrLink page="37" rule="14.7" /></div>
                <img src={airTransportUnits} alt="transport aircraft units" style={{ height: 'auto' }} />
            </div>
            <span className="spacer0_5rem" />
            <div className="pdiv">
                Airborne, parachute, infantry, mountain, engineer, MSU, and HQ units can be transported by air.
                Exception - Non-Op Soviet HQ with a Do Not Move marker on it cannot be air transported.
                <span className="spacer0_5rem" />
                An air transport aircraft unit
                must be available in the Ready Box, to be used for the transport mission. Air missions are subject to Air Combat if enemy
                air unit(s) are at the destination hex, and they could be subject to enemy AA fire if the destination hex has a AA capable
                unit next to it. The player attempting an Air Transport Mission can add fighter units to the mission.
                <span className="spacer0_5rem" />
                Each air transport aircraft unit can only carry one HQ unit, or a unit with zero stacking points, a MSU, or a unit that has
                one stacking point. A unit that has two stacking points can be transported if there are two air transport units available if they
                are in the same Air Transport Mission.
                <span className="spacer0_5rem" />
                Air Transport Missions are limited to a 60 hex range. They must "take off" from a a friendly supply source hex, a two, city, or major
                city hex, or the Active Box of the Unit Rebuilding Track. They can land at a friendy town, city or major city hex.
                <span className="spacer0_5rem" />
                If there is air combat at the destination hex, the unit(s) being transported may suffer the same fate at the aircraft they are in:

                <ul className="bare-ul">
                    <li>Destroyed: the unit that was being transported is also destroyed.</li>
                    <li>Damaged: the unit that was being transported is successfully delivered to the destination hex.</li>
                    <li>Aborted: the unit is sent back to the original hex it took off from.</li>
                    <li>If a unit with 2 stacking points was being transported by two transport air units, and one of the air units was destroyed
                        or aborted - return the transported unit to its starting hex.</li>
                </ul>
            </div>




            <span className="spacer1rem" />
            <div className="subheader-normal">Overrun<BsrLink page="25" rule="11.3" /></div>
            <div>
                During a movement phase, some units may be able to attack enemy units while moving, by using up some of its movement points.
                Unlike regular combat, units that are conducting an overrun cannot have Orders placed on them, cannot have artillery support,
                cannot get air support, do not get the CAS bonus, do not get the Panzer Division Integrity Bonus, and no reaction movement allowed.
                <span className="spacer0_5rem" />
                Unit(s) conducting an overrun must have at least 5-1 odds against the unit(s) being overrun.
                <span className="spacer0_5rem" />
                Eligible units that can conduct overruns are:
                <ul className="bare-ul">
                    <li>Motorized units (Exceptions: motorized artillery, motorized NKVD, and motorized Axis-Allied units cannot do overruns)</li>
                    <li>Soviet cavalry units</li>
                </ul>
                <span className="spacer0_5rem" />
                Overruns cannot be conducted:
                <ul className="bare-ul">
                    <li>in a hex where Mud conditions exist</li>
                    <li>in a hex where Snow conditions exist (<b>for Axis only</b>)</li>
                    <li>across a lake or <b>major river</b> hexide (doesn't matter if its bridged or not)</li>
                    <li>into a fortified belt, citadel, lake, alpine, mountain, city, major city, or shallow water hexes.</li>
                </ul>
                <span className="spacer0_5rem" />
                Additionally:
                <ul className="bare-ul">
                    <li>Marsh or Swamp - an overrun can be conducted into these only when the hex is frozen or when moving along a motorway, road, or railroad.
                        This costs an additional movement point, so in total 2 movement points in "overrun mp cost".
                    </li>
                    <li>Fortified hexside or strongpoint - Overrun is allowed if there is a motorized engineer in the stack doing the overrun and the odds are at least 12-1.</li>
                </ul>
                <span className="spacer0_5rem" />
                When there are "Untried Defenders" in the Overrun hex:
                <ul className="bare-ul">
                    <li>Turn the untried defender(s) to their "tried" sides.</li>
                    <li>If it turns out the overrun now fails to get to its 5-1 minimum odds, the overrun attempt automatically fails.</li>
                    <li>If the untried defender(s) are all of the "Remove" type, and the overrun hex is now empty of defenders, the overrun is
                        automatically successful (but they don't get the overrun cost refunded to them).</li>
                </ul>


                <span className="spacer0_5rem" />
                Units that are conducting an overrun (if there is more than one) must be stacked together at the start of the movement phase,
                and must remain stacked throughout the overrun procedure.
                <span className="spacer0_5rem" />
                Units must either be adjacent to the target hex (the Overrun hex) at the start of the movement phase, or have enough movement points to
                move adjacent to the Overrun hex, and have enough movement points left over, <b>plus a overrun cost of 1 MP</b>, to enter the target hex
                (as if the enemy unit(s) was not in the hex).
                <span className="spacer0_5rem" />
                The hex the overrunning unit(s) are in when launching the overrun cannot be in the ZOC of an enemy unit from a different hex than the Overrun hex.
                <span className="spacer0_5rem" />
                Infiltration Movement and One-hex movement is not allowed when doing an Overrun.
                <span className="spacer0_5rem" />
                Units that cannot conduct an overrun cannot be part of the stack doing the overrun. Although those units can move normally after the overrun
                operation is finished.
                <span className="spacer0_5rem" />
                A hex with enemy units in it can be subjected to multiple overruns in a movement phase.
                <span className="spacer0_5rem" />
                If the overrun fails, the overrunning units are considered to have exhausted all their movement points and remain in the hex where they
                attempted the overrun from.
                <span className="spacer0_5rem" />
                If the overrun is successful, any Supply dumps, Bridge markers, and Ferry markers in the overrun hex are removed, any surviving defenders
                are retrated 2 hexes, and the stack that conducted the ovverun can continue moving if it has MPs left (it can even overrun another hex if
                it has enough MPs left). If the defending units get retreated, then the overrunning player retreats them 2 hexes.
                Overrun units get an overrun marker put on them.
                <span className="spacer1rem" />
                <div className="bulletsWithImageToRight">
                    <div>
                        Units with an overrun marker on them:
                        <ul className="bare-ul">
                            <li>do not project a ZOC</li>
                            <li>cannot provide artillery support (if it is an artillery unit)</li>
                            <li>are not eligible for reaction movement</li>
                            <li>HQs that get overrun get flipped to their non-op side</li>
                        </ul>
                    </div>
                    <div>
                        <img src={overrun_marker} alt="overrun marker" />
                    </div>
                </div>
            </div>



            <span className="spacer1rem" />
            <div className="subheader-normal">Some other Movement rules</div>
            <div className="pdiv">
                <ul className="bare-ul">
                    <li>Enemy ZOCs cost an additional +1 movement point to enter (exception: Reaction Movement).</li>
                    <li>All roads (Main and Secondary) and railways are assumed to have a bridge when crossing any type of river. Bridges can not be demolished in EFS, however, both players may be equipped with pontoon units to create additional bridges as long as the pontoon unit remains adjacent to the river.</li>
                    <li>Snow turns Rivers into NE terrain. Snow turns Major Rivers into a +1 cost hexside terrain.</li>
                    <li>When Lingering Mud is in effect (always lasts 1 turn after weather turns from Mud back to Dry) all hexes with woods in them are considered to be in "Mud" weather. If you are tracing a LOC, it would be 7 hexes in Dry weather, but if trace through a Woods hex when its Lingering Mud, then that LOC gets cut down to 5 hexes.</li>
                    <li>City and Major City hexes are always assumed to be also extensions of any road or railroad that goes into them. Plus they are always 1/2 MP to enter during all weather conditions.</li>
                    <li>Fortified hexlines costs +1 MP to cross, and Strongpoint hexes costs +1 MP to enter, but a combination Fortified hexline and Strongpoint hex only costs +1 to cross and enter, not +2..</li>
                    <li>Footnote (a), when it is present for a cost, creates a +1 MP penalty for all motorized units except for Soviet Armor. Soviet Armor had wider tracks than any other vehicles and could negotiate muddy or marshy ground better.</li>
                    <li>Walking (or driving) along a Railroad gives a benefit of -1 MP cost when moving through a hex with Woods in it.</li>
                    <li>Soviet units pay 1 less MP when moving through wood hexes than listed on the TEC. <span className="rule-ref">10.46</span></li>
                </ul>
            </div>



            <ScrollToTopOnMount />

        </div >
    );
}

export default Movement;