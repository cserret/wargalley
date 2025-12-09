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
import german_ferry from "../../../images/efs/movement/german_ferry_120x120.png";
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
import sovietTrainEngine from "../../../images/efs/movement/soviet_train.jpg"
import soviet_ferry from "../../../images/efs/movement/ferry.jpg"
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
                ZOC effects on Movement <BsrLink page="21" rule="10.3" />
            </div>
            <span className="spacer0_5rem" />
            A unit has to pay +1 MP to enter a hex in an enemy ZOC. 
            <BsrLink page="21" rule="10.34" />
            <span className="spacer0_5rem" />
            A unit that enters an enemy ZOC must stop moving for that phase. 
            <BsrLink page="21" rule="10.32" />
            

            <span className="spacer0_5rem" />   
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
            <span className="spacer0_5rem" />
            Although not usually shown, any roads or railroads that enter a hex with a town or city are considered
            to be connected to any roads or railroads exiting the hex.  <BsrLink page="10" rule="6.15" />  <BsrLink page="10" rule="6.16" />
            <span className="spacer0_5rem" />
            ZOCs do not extend into major city hexes, even from an adjacent
            Major City hex. <BsrLink page="24" rule="10.49" />

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

                    <text x="341" y="68" className="image-label"
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
                <span className="spacer0_5rem" />
                They cannot be activated for movement by HQ activation. <BsrLink page="20" rule="10.13c" />
            </div>



            <span className="spacer2rem" />

            <div className="subheader-image header-2-image">
                <div>Soviet cavalry</div>
                <img src={sovietCavalry} alt="Soviet cavalry" width="80" height="80" />
                <img src={soviet_cossack} alt="Soviet Cossack commander at Kiev, 1942" />
            </div>
            <span className="spacer1rem" />
            <div>
                Soviet cavalry units can move during both Motorized and regular Movement Phases (see the Terrain Effects Chart).
                <span className="spacer0_5rem" />
                Soviet cavalry can conduct overrun movement. <BsrLink page="25" rule="11.32" /> However,
                if the participated in a failed overrun, Soviet cavalry suffer an additional
                step loss. <BsrLink page="26" rule="11.37j" />
                <span className="spacer0_5rem" />
                They do not suffer from the -2 MP penalty for being OOS.  <BsrLink page="11" rule="6.53" />
                <span className="spacer0_5rem" />
                They cannot be activated for movement by HQ activation. <BsrLink page="20" rule="10.13c" />
                <span className="spacer0_5rem" />
                Unlike many other wargames, cavalry in EFS do not have the ability to retreat before combat.
            </div>



            <div className="subheader-image stalin">
                <div>Weather effects on movement</div>
                <img src={mudroad} alt="muddy road" />
            </div>
            <span className="spacer0_5rem" />
            <div>
                The Terrain Effects Chart has a column for the various weather conditions. The
                costs generally go up for Mud and Snow weather conditions.
                <BsrLink page="22" rule="10.44" />
                <span className="spacer0_5rem" />
                Weather conditions do not affect movement along a motorway - it remains
                half an MP to enter a hex along a motorway.
                Although the Axis player is only allowed to use the Motorway movement benefit
                with Red, orange, and green MP uits, the Soviet player can benefit from the
                Motorway movement benefit with any unit.
                <BsrLink page="22" rule="10.44a" />
                <span className="spacer0_5rem" />
                In Mud or Snow weather, units spend 1 MP to enter any hex along a
                main road. <BsrLink page="22" rule="10.44b" />
                <span className="spacer0_5rem" />
                In Frost weather, units spend 1 MP to enter any hex along
                a minor road. <BsrLink page="22" rule="10.44c" />
                <span className="spacer0_5rem" />
                In Snow weather, units spend 2 MPs to enter any hex along
                a minor road. <BsrLink page="22" rule="10.44c" />
                <span className="spacer0_5rem" />
                In Mud weather, units spend 2 MPs to enter a clear terrain hex
                along a minor road. If other terrain, then the units need to
                pay the cost for that terrain, ignoring the minor road.
                Yes, minor roads pretty much disappear in Mud weather, and

                if you have any heavy artillery on a trail, it may have to stay
                there until the Mud goes away.
                <BsrLink page="22" rule="10.44c" />


            </div>

            <span className="spacer2rem" />
            <div className="subheader-image">
                <div>Motorway movement (only in AGC) <BsrLink page="22" rule="10.44a" /></div>
                <img src={motorway} alt="Minsk-Smolensk-Moscow Motorway" width="380" height="285" />
            </div>


            <span className="spacer0_5rem" />
            <div className="padded">
                Movement along the motorway is 1/2 MP per hex, regardles of weather conditions.
                <span className="spacer0_5rem" />
                All Soviet units can use the motorway at 1/2 MP per hex.
                <span className="spacer0_5rem" />
                Only these Axis units can benefit from motorway movement:
                <ul className="small-list">
                    <li>All motorized (including armored)</li>
                    <li>All Orange MP units (MSUs and artillery)</li>
                    <li>All Green MP units (heavy artillery)</li>
                </ul>
                The motorway was historically heavily used to transport supplies
                up to the front, and infantry usually had to march beside the road.
            </div>

            <span className="spacer2rem" />
            <div className="subheader-image">
                <div>Railroad transportation <BsrLink page="24" rule="11.1" /></div>
                <img src={sovietTrainEngine} alt="Soviet train" width="400" height="233" />
            </div>

            <span className="spacer1rem" />
            The scenario rules will specify the number of units that can utilize railroad transportation during a single turn.
            Players must plan their railroad movements carefully to stay within these
            limits. <BsrLink page="24" rule="11.14" />
            <span className="spacer0_5rem" />
            Any unit, including supply units and supply dumps, in General Supply can board a train in any rail hex which is in its friendly
            rail net.<BsrLink page="24" rule="11.11" />
            <span className="spacer0_5rem" />
            A unit utilizing rail transportation does so during the friendly Movement phase, but cannot
            also do regular movement in the Movement phase. <BsrLink page="24" rule="11.12" /> The unit cannot
            be within 3 hexes of an enemy unit when starting its rail transporation. <BsrLink page="24" rule="11.13a" />
            <span className="spacer0_5rem" />
            Railroad transporation allows a unit to move up to 60 friendly (converted for Axis) connected rail hexes.
            Terrain or weather is not considered when traveling by rail, each rail hex counts as 1 of the
            60 max hexes.
            Exceptions:
            <ul className="small-list">
                <li>rail hexes in a Axis interdiction zone - the cost for Soviets is 12 of the rail
                    transportation movement allowance. <BsrLink page="24" rule="11.13b" /></li>
                <li>Axis railroad capacity is halved during Snow weather. <BsrLink page="24" rule="11.16" /></li>
            </ul>
            Units using railroad transportation cannot enter an enemy ZOC
            (Armored trains and railroad artillery are exempt from this rule). 
            <BsrLink page="21" rule="10.33" />


            <span className="spacer0_5rem" />
            HQs and other units with zero stacking values will cost as 1 unit for railroad capacity. A MSU (mobile supply unit) will
            cost as 1 unit. A supply dump costs as 1 unit per supply point. <BsrLink page="24" rule="11.15" />

            <span className="spacer2rem" />
            <div className="subheader-image header-1-image">
                <div>Railroads and roads</div>
                <img src={german_troops_railroad} alt="German troops walking along railroad" />
            </div>
            <div className="padded">
                <ul className="bare-ul">
                    <li>
                        In Mud weather, red-box and orange MA units can only project
                        their ZOCs into adjacent hexes (where they would normally extend into)
                        if the hexside is crossed
                        by a road or railroad. <BsrLink page="6" rule="3.24" />
                    </li>
                    <li>
                        In Dry or Mud weather, a Supply Route can only enter (and cross)
                        swamp hexes only when following a road or railroad.
                        <BsrLink page="9" rule="6.13" />
                    </li>
                    <li>
                        When tracing a LOC through a Marsh hex, the LOC is reduced to
                        5 hexes unless along a road or railroad. <BsrLink page="10" rule="6.14c" />
                    </li>
                    <li>
                        When crossing Woods terrain along a railroad, reduce the total woods
                        cost by 1 MP in any weather condition. Units do not
                        get this benefit in the hex where they exit to an adjacent
                        hex not along the railroad. <BsrLink page="21" rule="10.42a" />
                    </li>
                    <li>
                        When crossing a water barrier on a railroad, the
                        water barrier crossing cost is negated. <BsrLink page="21" rule="10.42b" />
                    </li>
                    <li>
                        Motorized units (Orange or Green MAs)
                        can only cross Swamp hexes when moving along roads or railroads <BsrLink page="23" rule="10.48" />
                        and pay 3 MPs per hex. <BsrLink page="21" rule="10.42c" />
                    </li>
                    <li>
                        Units can overrun a marsh or swamp hex only when the hex
                        is frozen or when moving along the path of a motorway, road, or
                        railroad. Apply a (+2) DRM to the Overrun Table die roll result. <BsrLink page="26" rule="11.35b" />
                    </li>
                    <li>
                        Super-Heavy Artillery can enter a hex only through a hexside
                        crossed by a main road, minor road, motorway, or railroad. <BsrLink page="32" rule="13.41a" />
                    </li>
                    <li>
                        Super-Heavy artillery units on their mobile sides can retreat
                        only through hexsides crossed by minor road, main road, motorway, or railroad. Where Mud or Snow conditions apply, they
                        cannot retreat along minor road or railroad. <BsrLink page="45" rule="16.47a" />
                    </li>
                    <li>A road bridge or railroad bridge can be subject to destruction. <BsrLink page="57" rule="22.42" />
                    </li>
                </ul>
            </div>

            <span className="spacer1rem" />
            <div className="padded">
                Additional Retreat <BsrLink page="30" rule="30d" /><BsrLink page="44" rule="16.45" />
            </div>
            <div className="subheader-image">
                <div>Bridges <BsrLink page="56" rule="22.2" /></div>
                <div className="align-bottom_nowrap">
                    <img src={german_bridge} alt="German bridge" width="100" height="100" />
                    <img src={german_pontoon_bridge} alt="German pontoon bridge" width="290" height="206" />
                </div>
            </div>
            <span className="spacer1rem" />

            <div>
                Bridges over major rivers are marked on the map.
                Where a road or railroad crosses regular river
                has an implied bridge. Where both a road and a railroad
                crosses a bridge, treat them as separate bridges. Both
                of which are subject to destruction and repair.
                <BsrLink page="23" rule="10.45" />
                <span className="spacer0_5rem" />
                Both players can build bridges across rivers and canals where a bridge does not exist. They can also
                build or repair a bridge where a bridge has been destroyed.
                <span className="spacer0_5rem" />
                Bridge markers have two sides, an under construction side and a completed side. When a bridge
                is in operation, the arrow on the bridge counter needs to be pointed at the hexside the bridge is crossing.
                Bridges only negate any previous cost to cross an unbridged river or canal. If any roads had
                previously crossed a bridge that had been destroyed, the road is considered reconnected after repair.
                <BsrLink page="56" rule="22.21" />
                <span className="spacer0_5rem" />
                The number of Bridge markers is listed in the scenario. Bridge markers not being currently deployed are
                kept in the player's active box. There is no limit to the number of times a bridge marker can be placed
                or removed from the map. Removed Bridge markers are either redeployed or get returned to the active box.
                <BsrLink page="56" rule="22.22" />
                <span className="spacer0_5rem" />
                Bridge markers do not require General Supply
                to exist. Even Bridge markers on their under construction
                side do not require General Supply.
                <BsrLink page="11" rule="6.26d" />
                <span className="spacer0_5rem" />
                Axis interdiction zones do not affect the cost of crossing
                a river at a bridge or ferry, although the hexes on either
                side of a bridge are still affected by any interdiction movement penalties.
                <BsrLink page="37" rule="14.64c" />
                <span className="spacer0_5rem" />
                Bridge destruction is not allowed by the Soviet player when in range of a Soviet non-op HQ.
                <BsrLink page="53" rule="21.26a" />
                <span className="spacer0_5rem" />
                Placement of a bridge marker within range of a Soviet non-op HQ
                counts as the movement of one unit.
                <BsrLink page="54" rule="21.27d" />
                <span className="spacer0_5rem" />
                To place a bridge, the active player can place the counter with
                the under-construction side next to a river, during the
                (Axis) Movement Phase or (Soviet) Motorized Movement Phase. The
                hex the bridge marker is placed cannot be in an Axis ZOC, but the
                other side of the river can be in enemy ZOC (and not occupied
                by an enemy unit). The
                hex the bridge under construction marker is place must be in
                General Supply. The opposite side of the river does not need
                to be in General Supply. The arrow on the Bridge marker must
                be placed to the opposite side of the river that the bridge will
                connect to.
                <BsrLink page="56" rule="22.23c" />
                <span className="spacer0_5rem" />
                A bridge placed under construction on a regular river is flipped
                over immediately to its completed side
                <BsrLink page="56" rule="22.23b" />
                only if the hex in the opposite
                side of the river is not enemy occupied and not in enemy ZOC.
                <BsrLink page="56" rule="22.23c" />
                <span className="spacer0_5rem" />
                If a bridge under construction
                is crossing a Major River, flip it to its completed side
                in the owning player's Engineering Phase,
                <BsrLink page="56" rule="22.24b" />
                as long as the hex opposite
                the Major River is not enemy occupied and not in enemy ZOC.
                <BsrLink page="56" rule="22.24c" />
                <span className="spacer0_5rem" />
                Soviet bridges work just like Axis bridges, except the Soviet player
                cannot bridge across Major Rivers until game turn 98.
                <BsrLink page="56" rule="22.25" />
                <span className="spacer0_5rem" />
                Units cannot use an enemy constructed bridge. Remove the bridge
                when a unit enters a hex with the enemy bridge marker.
                <BsrLink page="56" rule="22.26" />
                <span className="spacer0_5rem" />
                Only the bridges that are printed on the maps are subject to
                destruction.
                <BsrLink page="57" rule="22.4" />
                

                <span className="spacer0_5rem" />
                Only bridges printed on the map are subject to destruction. Bridge
                and Ferry markers get removed if an enemy unit enters their hex,
                or if the owning player freely removes a bridge marker from the map.
                <BsrLink page="57" rule="22.41" />

                <span className="spacer0_5rem" />
                Any combat unit can conduct Bridge Destruction during their friendly
                Engineering Phase. The unit can be on either side of the bridge and
                no enemy unit can be within seven hexes of the unit doing the
                destruction.
                <BsrLink page="57" rule="22.42" />
                Exception: Soviet units within range of a non-Op HQ
                cannot do Bridge Destruction.
                <BsrLink page="57" rule="22.43c" />
                <span className="spacer0_5rem" />
                When a unit qualifies for destroying a on-map bridge the
                player can simply declare the bridge is destroyed in their
                Engineering Phase. The player places a Bridge Destroyed
                marker on its 2 point side up on the hex either side of the
                river, where the unit is in the hex across the river.
                <BsrLink page="57" rule="22.43a" />
                <span className="spacer0_5rem" />On-map bridges that had been destroyed
                can be repaired <BsrLink page="57" rule="22.44a" />. In the player's
                Engineering phase, the player needs
                to have an in-general-supply Engineer unit on either side of the bridge
                in order to attempt repairs on the bridge.
                <BsrLink page="57" rule="22.44b" />
                The other side of the bridge from the unit cannot have an enemy unit in
                it, but it can be in enemy ZOC.
                <BsrLink page="57" rule="22.44c" />
                <span className="spacer0_5rem" />
                Refer to the Bridge Repair Table for DRMS and then roll for the results of the
                attempt to repair.
                <BsrLink page="57" rule="22.45b" />
            </div>

            <div className="padded">
                Additional Retreat <BsrLink page="30" rule="30d" /><BsrLink page="44" rule="16.45" />
            </div>
            <div className="subheader-image">
                <div>Ferrys <BsrLink page="57" rule="22.3" /></div>
                <div className="align-bottom_nowrap">
                    <img src={german_ferry} alt="German ferry" width="100" height="100" />
                    <img src={soviet_ferry} alt="German pontoon bridge" width="304" height="206" />
                </div>
            </div>

            <span className="spacer1rem" />
                Only the Axis unit has Ferry markers.
                <BsrLink page="57" rule="22.3" />
                <span className="spacer0_5rem" />
                A Ferry marker is used to reconnect a railroad that was broken
                by a destroyed bridge. Its is not a bridge for ground units,
                it's only for railroad transportation.
                <BsrLink page="57" rule="22.31" />
                <span className="spacer0_5rem" />
                Ferry markers are used nearly the same way as Bridge markers.
                <BsrLink page="57" rule="22.32" />
                <span className="spacer0_5rem" />
                A Ferry marker can only be placed next to a destroyed railroad
                bridge if the hex contains a converted Railhead marker that traces
                back to a General Supply source.
                <BsrLink page="57" rule="22.32a" />
                <span className="spacer0_5rem" />
                A German engineer unit needs to be with with the Ferry marker
                during placement and construction. A Ferry marker is placed under-construction
                side up in the Axis Movement Phase. During the Axis Engineering Phase,
                it is flipped to its completed side. When the Ferry is completed, the
                railroad is considered connected for rail transport purposes only.
                <BsrLink page="57" rule="22.32b" />
                <span className="spacer0_5rem" />
                Units using railroad movement pay 30 railroad transport MPs to cross a major river using
                a Ferry.
                <BsrLink page="57" rule="22.33" />

                <span className="spacer0_5rem" />
                A railroad connected by a Ferry still operatates normally as part of
                a rail net for General Supply purposes.
                <BsrLink page="57" rule="22.34" />

                <span className="spacer0_5rem" />
                Unlike Bridge markers, the owning player cannot freely remove them,
                they can only be removed by either an enemy unit entering it's hex,
                or the bridge across the river is repaired.
                <BsrLink page="57" rule="22.35" />
            <div>

                <span className="spacer2rem" />

                <div className="subheader-image header-2-image">
                    <div className="header-1-image-title">Infiltration Movement <BsrLink page="27" rule="11.4" /></div>
                    <img src={infiltration_movement_example} alt="Infiltration movement example" style={{ height: 'auto' }} />
                </div>
                <span className="spacer1rem" />
                <div className="padded">
                Infiltration movement allows a unit to move directly from a hex in enemy unit ZOC to adjacent hex 
                    in enemy unit ZOC (even if the ZOC is from different
                    enemy units).  <BsrLink page="27" rule="11.41" />
                    <span className="spacer0_5rem" />
                    Infiltration Movement can be conducted by:
                    <ul className="bare-ul">
                      <li>Units with a yellow MA allowance of 7 or greater.<BsrLink page="27" rule="11.42" /></li> 
                      <li>Cavalry units with a yellow MA allowance.<BsrLink page="27" rule="11.42" /></li> 
                      <li>Mountain units in certain terrain.<BsrLink page="27" rule="11.42" /></li>
                      <li>Units (not green or orange MAs) when moving into a hex that has a 
                          friendly unit in it at the start of the movement phase.<BsrLink page="27" rule="11.48b" />  </li>
                    </ul>
                    <span className="spacer0_5rem" />
                    

                    The unit can only do infiltration movement in the movement
                    phase where they have their full printed MA available.
                    <BsrLink page="27" rule="11.43" />
                    <span className="spacer0_5rem" />
                    The infiltration movement costs the unit its entire MA. The unit
                    must have had enough movement points to have moved into the hex as if 
                    there was no enemy ZOC.
                    <BsrLink page="27" rule="11.44" />
                    <span className="spacer0_5rem" />
                    Infiltration movement cannot take place when the weather 
                    condition of the hex being moved to is Mud.
                    <BsrLink page="27" rule="11.45" />
                    <span className="spacer0_5rem" />
                    Ski units can only conduct Infiltration Movement when the weather 
                    condition of the hex being moved to is Snow.
                    <BsrLink page="27" rule="11.46" />
                    <span className="spacer0_5rem" />
                    Infiltration movement cannot happen across non-destroyed enemy 
                    fortified lines or into enemy fortifications.
                    <BsrLink page="27" rule="11.47" />
                    <span className="spacer0_5rem" />
                    Mountain units can conduct Infiltration Movement into or 
                    out of a hill, mountain, or alpine hex.
                    <BsrLink page="27" rule="11.48a" />
                    <span className="spacer0_5rem" />
                    If a friendly unit is in the hex being moved to at the start of the
                    movement phase, all combat units (except for green and orange MA units)
                    can qualify for infiltration movement.
                    <BsrLink page="27" rule="11.48b" />
                   
                    <span className="spacer1rem" />
                </div>





            </div>

            <span className="spacer2rem" />

            <div className="subheader-image header-2-image">
                <div className="header-1-image-title">Special Infiltration Movement<BsrLink page="27" rule="11.48" /></div>
                <img src={mountain_unit_infiltration_example} alt="mountain unit Infiltration Movement example" style={{ height: 'auto' }} />
            </div>
            <span className="spacer0_5rem" />
            <div className="padded">
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
            <div className="padded">
                A unit with a movement allowance greater than 0<BsrLink page="27" rule="11.53" /> can always move 1 hex (as its total movement that phase)
                even if it doesn't have enough movement points to do so, under these conditions:<br />


                <ul className="bare-ul">
                    <li>Can only be done in the movement phase that the unit usually has its full movement allowance.<BsrLink page="27" rule="11.51" /></li>
                    <li>The unit cannot have moved yet in that movement phase.<BsrLink page="27" rule="11.52" /></li>
                    <li>Can not be done into a hex, or across a hexside, that is prohibited to the unit due to terrain restrictions listed on the
                        Terrain Effects Chart.<BsrLink page="27" rule="11.53" /></li>
                    <li>Cannot be from a hex in an enemy ZOC to a hex also in enemy ZOC.<BsrLink page="27" rule="11.53" /></li>
                </ul>
            </div>


            <span className="spacer2rem" />
            <div className="subheader-image">
                <div>Air Transport Mission<BsrLink page="37" rule="14.7" /></div>
                <img src={airTransportUnits} alt="transport aircraft units" style={{ height: 'auto' }} />
            </div>
            <span className="spacer0_5rem" />
            <div className="padded">
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
            <div className="padded">
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