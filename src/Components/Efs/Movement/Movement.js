import React from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import BsrLink from "../BsrLink/BsrLink";
import german_bridge from "../../../images/efs/movement/bridge_unit_german.png";
import german_ferry from "../../../images/efs/movement/german_ferry_120x120.png";
import infiltration_movement_example from "../../../images/efs/movement/infiltration_movement_example.jpg";
import motorway from "../../../images/efs/movement/motorway.jpg";
import roadsigns from "../../../images/efs/movement/roadsigns.jpg";
import soviet_cossack from "../../../images/efs/movement/soviet_cossack.png";
import german_pontoon_bridge from "../../../images/efs/movement/german_pontoon_bridge.png";
import german_troops_railroad from "../../../images/efs/movement/german_troops_railroad.png";
import mudroad from "../../../images/efs/movement/mudroad.jpg";
import right_arrow from "../../../images/efs/right_arrow.png";
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
import soviet_transport_plane from "../../../images/efs/movement/luftwaffe_j41_120x120.png"
import overrun from "../../../images/efs/movement/overrun.jpg"
import sovietFlotilla from "../../../images/efs/movement/soviet_flotilla_120x120.png"
import flotilla from "../../../images/efs/special/flotilla.jpg";
import interdictCounter from "../../../images/efs/movement/interdict_counter.jpg"
import interdiction from "../../../images/efs/movement/interdiction.jpg"
import counter_additional_retreat from "../../../images/efs/combat/additional_retreat_120.png";
import additional_retreat from "../../../images/efs/movement/additionalretreat.jpg"
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
            There are also some flotillas that can move mostly along rivers and lakes.
            And finally there are optional Naval rules that allow movement in the sea and along the coast.

            <span className="spacer0_5rem" />
            <div>
                The specific movement types in EFS:
            </div>
            <span className="spacer0_5rem" />

            <ul className="no-bullets">
                <li><img src={germanInfantryDivision} alt="German infantry division" width="100" height="100" />
                    <div>
                        <span className="list_header">White movement<BsrLink page="19" rule="10.11" /></span>
                        The normal movement type that moves in the regular Movement Phase.
                    </div>
                </li>
                <li><img src={sovietCavalry} alt="Soviet cavalry" width="100" height="100" />
                    <div>
                        <span className="list_header">Yellow movement<BsrLink page="27" rule="11.4" /></span>
                        Infiltration capable.</div>
                </li>
                <li><img src={sovietTrain} alt="Soviet train" width="100" height="100" />
                    <div>
                        <span className="list_header">Gray movement<BsrLink page="24" rule="11.1" /></span>
                        Rail movement only.
                    </div></li>
                <li><img src={sovietNavalArtillery} alt="German heavy artillery" width="100" height="100" />
                    <div>
                        <span className="list_header">Green movement<BsrLink page="32" rule="13.41" /></span>
                        Super Heavy artillery movement.
                    </div></li>
                <li><img src={germanRocketArtillery} alt="German rocket artillery" width="100" height="100" />
                    <div>
                        <span className="list_header">Orange movement<BsrLink page="20" rule="10.28" /></span>
                        Motorized but only moves in Regular Movement phase.
                    </div></li>
                <li><img src={germanPanzer} alt="German panzer regiment" width="100" height="100" />
                    <div><span className="list_header">Red boxed movement<BsrLink page="19" rule="10.12" /></span>
                        Motorized movement that moves in Motorized Movemment Phase.</div></li>
                <li><img src={germanHeavyArtillery} alt="German heavy artillery" width="100" height="100" />
                    <div>
                        <span className="list_header">Blue movement<BsrLink page="58" rule="22.51" /></span>
                        Flotilla/Naval movement only.
                    </div></li>
            </ul>
            <span className="spacer2rem" />
            <div className="padded">
                If you look at the Sequence of Play<BsrLink page="8" rule="4.21" />, you'll see that there is an unusual order compared to other games.
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
                The Axis player gets to move all his units in the regular Movement Phase to set up combats, but the Soviet player
                can <span className="red-ask">*</span>only move motorized units before combat.
                <span className="spacer0_5rem" />
                <span className="red-ask">*The Soviet player does have a limited ability to move some non-motorized units during
                    the Soviet Motorized Movement Phase by having a headquarters "Activate" a non-motorized unit.
                    This is discussed below under "Soviet Non-Motorized Unit Activation".</span>

            </div>

            <div className="subheader-rule">
                ZOC effects on Movement<BsrLink page="21" rule="10.3" />
            </div>
            <span className="spacer0_5rem" />
            A unit has to <span className="red-ask">*</span>pay +1 MP to enter a hex in an enemy ZOC.
            <BsrLink page="21" rule="10.34" />
            <span className="spacer0_5rem" />
            A unit that enters an enemy ZOC must stop moving for that phase.
            <BsrLink page="21" rule="10.32" />
            <span className="spacer0_5rem" />
            <span className="slight-bold red-ask">*Exception</span> - A unit conducting Reaction Movement does not pay an extra MP to enter an enemy ZOC
            (although the destination hex must be occupied by a friendly unit).
            <BsrLink page="21" rule="12.43" />
            <span className="spacer0_5rem" />
            <span className="slight-bold red-ask">*Exception</span> - A unit or stack of units attempting Overrun do not pay an extra MP for entering an enemy ZOC
            from where it will be attempting overrun (although they do pay a +1 MP for attempting an overrun, so it sort of washes out).
            <BsrLink page="26" rule="11.37b" />
            <span className="spacer0_5rem" />
            ZOCs do not extend into Major City hexes, even from an adjacent
            Major City hex.<BsrLink page="24" rule="10.49" />
            <span className="spacer0_5rem" />
            During Mud weather, ZOCs of red-box or orange MA units do not extend into
            adjacent hexes unless the unit(s) is in a town or city
            (not from Major City hex to adjacent Major City hex), or if the unit(s) is on a road or railroad - in which
            case their ZOC will extend into adjacent hexes where the same road or railroad connects to.
            <BsrLink page="6" rule="3.24" /><BsrLink page="24" rule="10.49" />

            <span className="spacer0_5rem" />
            <div className="subheader-rule">
                Terrain Effects on Movement<BsrLink page="21" rule="10.4" />
            </div>
            <span className="spacer0_5rem" />
            The <span className="b">Terrain Effects Chart</span> has many different costs for different types, and combinations, of terrain. There are different columns for "Dry" weather, "Mud", "Frost", and "Arctic".
            <span className="spacer0_5rem" />
            There can also be conditions that cause "Lingering mud" and "Lingering snow", depending
            on the previous turn's weather.<BsrLink page="9" rule="5.2" />
            <span className="spacer0_5rem" />
            Weather has effects on movement, General Supply, ZOCs, Air missions, and combat.
            <span className="spacer0_5rem" />
            Although often not printed on the map, any roads or railroads that enter a hex with a town or city are considered
            to be connected to any roads or railroads exiting the hex.<BsrLink page="10" rule="6.15" />  <BsrLink page="10" rule="6.16" />
            <span className="spacer0_5rem" />
            ZOCs do not extend into Major City hexes, even from an adjacent
            Major City hex.<BsrLink page="24" rule="10.49" />
            <span className="spacer0_5rem" />
            MP cost of going into a city or Major City hex is always 1/2 MP in all weather conditions. (See Terrain Effects Chart)

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
                Main Roads are solid lines, and provide dependable easier travel.
                <span className="spacer0_5rem" />
                Rail lines can provide rail movement, as in "traveling on a train".
                Troops can also
                travel (on foot or in a wagon or vehicle) along a rail line at a reduced cost.<BsrLink page="21" rule="10.42" />

                <span className="spacer0_5rem" />
                A Motorway is identical to a Main Road, but it has restrictions on the types of units that can
                use it.
                The Motorway to Moscow was heavily used by trucks transporting supplies to the front.
                <BsrLink page="22" rule="10.44a" />
                <span className="spacer0_5rem" />
                Unlike in most wargames, units can only benefit from road movement if they are truly
                traveling along a road. If your units are leaving a road and going into an adjacent hex that
                is not connected to the road, then its assumed your units left the road in the previous hex,
                and so they need to pay the full cost of entering that hex as if you were not on a road.
                <BsrLink page="21" rule="10.41" />
                <span className="spacer0_5rem" />
                This rule has a little wiggle room. You could "end" your movement in a phase in a hex with a road
                and claim the road benefit. Then in the next movement phase you can leave that hex (and road) and not worry
                about "paying back" for the previous movement phase. Using this method you could extract units
                that were otherwise "trapped" on a road going through otherwise prohibited terrain and "escape"
                into a non-prohibited hex that is next to it.
            </div>

            <span className="spacer2rem" />

            <div className="subheader-image">

                <div>Super-Heavy Artillery<BsrLink page="32" rule="13.4" /></div>
                <img src={germanHeavyArtillery} alt="German heavy artillery" width="80" height="80" />
            </div>
            <span className="spacer1rem" />
            <div>
                Super-Heavy artillery (marked by unit symbol and green movement rate) are very restricted in how they can move.
                <span className="spacer0_5rem" />
                They have two sides, a mobile side and a firing side. They must be on
                their mobile side to be moved.<BsrLink page="32" rule="13.41d" />
                <span className="spacer0_5rem" />
                Super-Heavy Artillery units change modes during the friendly Engineering
                Phase. If the S-HA unit did not move during the previous friendly
                Movement Phase, it can change from Mobile mode to Firing
                mode. <BsrLink page="32" rule="13.42b" />

                <span className="spacer0_5rem" />
                They can be moved by railroad movement (regardless of weather).<BsrLink page="32" rule="13.41d" />
                <span className="spacer0_5rem" />
                They can only move along minor roads during Dry or Frost weather.<BsrLink page="32" rule="13.41b" />
                <span className="shift-right">They can move along main roads in all weather conditions.</span>
                <span className="spacer0_5rem" />
                They can conduct strategic movement.<BsrLink page="32" rule="13.42c" /><BsrLink page="25" rule="11.2" />
                <span className="spacer0_5rem" />
                They cannot be activated for movement by HQ activation.<BsrLink page="20" rule="10.13c" />
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
                Soviet cavalry can conduct overrun movement.<BsrLink page="25" rule="11.32" /> However,
                if they participated in a failed overrun, Soviet cavalry suffer an additional
                step loss.<BsrLink page="26" rule="11.37j" />
                <span className="spacer0_5rem" />
                They do not suffer from the -2 MP penalty for being OOS.<BsrLink page="11" rule="6.53" />
                <span className="spacer0_5rem" />
                They cannot be activated for movement by HQ activation.<BsrLink page="20" rule="10.13c" />
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
                costs generally go up for Mud and Snow weather conditions.<BsrLink page="22" rule="10.44" />
                <span className="spacer0_5rem" />
                Weather conditions do not affect movement along a motorway - it remains
                half an MP to enter a hex along a motorway.
                Although the Axis player is only allowed to use the Motorway movement benefit
                with Red, orange, and green MP uits, the Soviet player can benefit from the
                Motorway movement benefit with any unit.
                <BsrLink page="22" rule="10.44a" />
                <span className="spacer0_5rem" />
                In Mud or Snow weather, units spend 1 MP to enter any hex along a
                main road.<BsrLink page="22" rule="10.44b" />
                <span className="spacer0_5rem" />
                In Frost weather, units spend 1 MP to enter any hex along
                a minor road.<BsrLink page="22" rule="10.44c" />
                <span className="spacer0_5rem" />
                In Snow weather, units spend 2 MPs to enter any hex along
                a minor road.<BsrLink page="22" rule="10.44c" />
                <span className="spacer0_5rem" />
                In Mud weather, units spend 2 MPs to enter a clear terrain hex
                along a minor road. If other terrain, then the units need to
                pay the cost for that terrain, ignoring the minor road.
                Yes, minor roads pretty much disappear in Mud weather, and

                if you have any heavy artillery on a trail in mud, it will have to stay
                there until the Mud goes away.
                <BsrLink page="22" rule="10.44c" />


            </div>

            <span className="spacer1rem" />

            <div className="subheader-image">
                <div>Motorway movement <span className="normal-font-size">(exists only in AGC)</span><BsrLink page="22" rule="10.44a" /></div>
                <img src={motorway} alt="Minsk-Smolensk-Moscow Motorway" width="380" height="285" />
            </div>


            <span className="spacer0_5rem" />
            <div className="padded">
                Movement along the motorway is 1/2 MP per hex, regardless of weather conditions.
                <span className="spacer0_5rem" />
                All Soviet units can use the motorway at 1/2 MP per hex.
                <span className="spacer0_5rem" />
                Only these Axis units can benefit from motorway movement:
                <ul className="small-list">
                    <li>All motorized (including armored)</li>
                    <li>All Orange MP units (MSUs and artillery)</li>
                    <li>All Green MP units (heavy artillery)</li>
                </ul>
                The motorway was historically heavily used to transport supplies and vehicles
                up to the front, and infantry usually had to march beside the road.
            </div>


            <span className="spacer2rem" />
            <div className="subheader-image">
                <div>Railroad transportation<BsrLink page="24" rule="11.1" /></div>
                <img src={sovietTrainEngine} alt="Soviet train" width="400" height="233" />
            </div>

            <span className="spacer1rem" />
            The scenario rules will specify the number of units that can utilize railroad transportation during each single turn.
            Players must plan their railroad movements carefully to stay within these
            limits.<BsrLink page="24" rule="11.14" />
            <span className="spacer0_5rem" />
            Any in-supply unit, including supply units and supply dumps, can board a train in any rail hex which is on its friendly
            rail net.<BsrLink page="24" rule="11.11" />
            <span className="spacer0_5rem" />
            A unit utilizing rail transportation does so during the friendly Movement phase, but cannot
            also do regular movement in the same Movement phase.<BsrLink page="24" rule="11.12" /> The unit cannot
            be within 3 hexes of an enemy unit when starting its rail transportation.<BsrLink page="24" rule="11.13a" />
            <span className="spacer0_5rem" />
            Railroad transportation allows a unit to move up to 60 friendly (converted for Axis, non-converted for Soviet) connected rail hexes.
            Terrain or weather is not considered when traveling by rail. Each rail hex counts as 1 of the
            60 max hexes.
            Exceptions:
            <ul className="small-list">
                <li>Rail hexes in a Axis interdiction zone - the cost for Soviets is 12 of the rail
                    transportation movement allowance.<BsrLink page="24" rule="11.13b" /></li>
                <li>Axis railroad capacity is halved during Snow weather.<BsrLink page="24" rule="11.16" /></li>
            </ul>
            Units being transported by railroad cannot enter an enemy ZOC, but
            armored trains and railroad artillery can enter a enemy ZOC -
            they don't pay any extra MP, but they do have to stop moving.
            <BsrLink page="21" rule="10.33" />


            <span className="spacer0_5rem" />
            HQs and other units with zero stacking values will cost as 1 unit for railroad capacity. A MSU (mobile supply unit) will
            cost as 1 unit. A supply dump costs as 1 unit per supply point.<BsrLink page="24" rule="11.15" />

            <span className="spacer0_5rem" />
            Armored trains and railroad artillery move using rail movement but do not count
            against the unit limit for rail transportation.<BsrLink page="24" rule="11.15" />


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
                        by a road or railroad.<BsrLink page="6" rule="3.24" />
                    </li>
                    <li>
                        In Dry or Mud weather, a Supply Route can only enter (and cross)
                        swamp hexes only when following a road or railroad.
                        <BsrLink page="9" rule="6.13" />
                    </li>
                    <li>
                        When tracing a LOC through a Marsh hex, the LOC is reduced to
                        5 hexes unless along a road or railroad.<BsrLink page="10" rule="6.14c" />
                    </li>
                    <li>
                        When crossing Woods terrain along a railroad, reduce the total woods
                        cost by 1 MP in any weather condition. Units do not
                        get this benefit in the hex where they exit to an adjacent
                        hex not along the railroad.<BsrLink page="21" rule="10.42a" />
                    </li>
                    <li>
                        When crossing a water barrier on a railroad, the
                        water barrier crossing cost is negated.<BsrLink page="21" rule="10.42b" />
                    </li>
                    <li>
                        Motorized units (Orange or Green MAs)
                        can only cross Swamp hexes when moving along roads or railroads<BsrLink page="23" rule="10.48" />
                        and pay 3 MPs per hex.<BsrLink page="21" rule="10.42c" />
                    </li>
                    <li>
                        Units can overrun a marsh or swamp hex only when the hex
                        is frozen or when moving along the path of a motorway, road, or
                        railroad. Apply a (+2) DRM to the Overrun Table die roll result.<BsrLink page="26" rule="11.35b" />
                    </li>
                    <li>
                        Super-Heavy Artillery can enter a hex only through a hexside
                        crossed by a main road, minor road, motorway, or railroad.<BsrLink page="32" rule="13.41a" />
                    </li>
                    <li>
                        Super-Heavy artillery units on their mobile sides can retreat
                        only through hexsides crossed by minor road, main road, motorway, or railroad. Where Mud or Snow conditions apply, they
                        cannot retreat along minor road or railroad.<BsrLink page="45" rule="16.47a" />
                    </li>
                    <li>A road bridge or railroad bridge can be subject to destruction.<BsrLink page="57" rule="22.42" />
                    </li>
                </ul>
            </div>

            <span className="spacer1rem" />

            <div className="subheader-image">
                <div>Bridges<BsrLink page="56" rule="22.2" /></div>
                <div className="align-bottom_nowrap">
                    <img src={german_bridge} alt="German bridge" width="80" height="80" />
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
                <BsrLink page="56" rule="22.23b" /> only if the hex in the opposite
                side of the river is not enemy occupied and not in enemy ZOC.
                <BsrLink page="56" rule="22.23c" />
                <span className="spacer0_5rem" />
                If a bridge under construction
                is crossing a Major River, flip it to its completed side
                in the owning player's Engineering Phase,
                <BsrLink page="56" rule="22.24b" /> as long as the hex opposite
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
                <BsrLink page="57" rule="22.42" /> Exception: Soviet units within range of a non-Op HQ
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
                can be repaired<BsrLink page="57" rule="22.44a" />. In the player's
                Engineering phase, the player needs
                to have an in-general-supply Engineer unit on either side of the bridge
                in order to attempt repairs on the bridge.
                <BsrLink page="57" rule="22.44b" />The other side of the bridge from the unit cannot have an enemy unit in
                it, but it can be in enemy ZOC.
                <BsrLink page="57" rule="22.44c" />
                <span className="spacer0_5rem" />
                Refer to the Bridge Repair Table for DRMs and then roll for the results of the
                attempt to repair.
                <BsrLink page="57" rule="22.45b" />
            </div>
            <span className="spacer1rem" />

            <div className="subheader-image">
                <div>Additional Retreat<BsrLink page="30" rule="30d" /><BsrLink page="44" rule="16.45b" /></div>
                <div className="align-bottom_nowrap">
                    <img src={counter_additional_retreat} alt="additional retreat" width="80" height="80" />
                    <img src={additional_retreat} alt="Additional retreat" width="304" height="206" />
                </div>
            </div>
            <span className="spacer1rem" />
            After combat, units with an Additional Retreat marker retreats 3 hexes instead of the normal 2 hexes.<BsrLink page="44" rule="16.45b" />
            <span className="spacer0_5rem" />
            The non-owning player retreats the unit(s), but cannot move them as to where they suffer loses, if an alternative
            safe path exists.<BsrLink page="44" rule="16.45b" />
            <span className="spacer1rem" />
            <div className="subheader-image">
                <div>Ferrys<BsrLink page="57" rule="22.3" /></div>
                <div className="align-bottom_nowrap">
                    <img src={german_ferry} alt="German ferry" width="80" height="80" />
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
            Unlike Bridge markers, the owning player cannot freely remove Ferry markers -
            they can only be removed by either an enemy unit entering it's hex,
            or when the bridge across the river is repaired.
            <BsrLink page="57" rule="22.35" />
            <span className="spacer1rem" />




            <div className="subheader-image header-2-image">
                <div className="header-1-image-title">Infiltration Movement<BsrLink page="27" rule="11.4" /></div>
                <img src={infiltration_movement_example} alt="Infiltration movement example" style={{ height: 'auto' }} />
            </div>
            <span className="spacer1rem" />
            <div className="padded">
                Infiltration movement allows a unit to move directly from a hex in enemy ZOC to adjacent hex
                in enemy ZOC (even if the ZOC is from different
                enemy units).<BsrLink page="27" rule="11.41" />
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
            </div>


            <span className="spacer1rem" />

            <div className="subheader-image header-2-image">
                <div className="header-1-image-title">Special Infiltration Movement<BsrLink page="27" rule="11.48" /></div>
                <img src={mountain_unit_infiltration_example} alt="mountain unit Infiltration Movement example" style={{ height: 'auto' }} />
            </div>
            <span className="spacer0_5rem" />
            <div className="padded">
                <ul className="bare-ul">
                    <li>Mountain units can conduct Infiltration Movement into or out of a hill, mountain, or alpine hex.</li>
                    <BsrLink page="27" rule="11.48a" />
                    <li>
                        If a friendly unit is in the hex being moved to at the start of the
                        movement phase, all combat units (except for green and orange MA units)
                        can qualify for infiltration movement.
                        <BsrLink page="27" rule="11.48b" /></li>
                </ul>
            </div>



            <span className="spacer1rem" />

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




            <span className="spacer1rem" />




            <div className="subheader-image">
                <div className="header-1-image-title">Reaction Movement<BsrLink page="30" rule="12.4" /></div>
            </div>
            <span className="spacer0_5rem" />
            <div className="padded">
                After the opposing player's Attack Declarations Phase, you can (possibly) conduct
                reaction movement during the Reaction Phase towards Declared Attack(s). This gives
                the defender some ability to react to the declared attacks.
                <span className="spacer0_5rem" />
                For each declared attack, the defender can move one qualifying unit up
                to half it's movement in the Reaction phase.<BsrLink page="30" rule="12.41" />
                <span className="spacer0_5rem" />
                To qualify for reaction movement, the unit:
                <ul className="bare-ul">
                    <li>Has a red-box MA<BsrLink page="30" rule="12.41a" /></li>
                    <li>Is within 3 hexes of a Defender hex.<BsrLink page="30" rule="11.41a" /></li>
                    <li>Does not have a Fuel Shortage of Overrun marker on it.<BsrLink page="30" rule="12.41a" /></li>
                    <li>Does not begin in an enemy Zoc nor is in a Defender Hex.<BsrLink page="30" rule="12.41a" /></li>
                    <li>Does not move into or out of an enemy air Zone of Interdiction.<BsrLink page="30" rule="12.41a" /></li>
                </ul>
                <span className="spacer0_5rem" />
                Additionally, Soviet units are under extra restrictions:
                <ul className="bare-ul">
                    <li>Is within command range of a HQ with a
                        non-interdicted command point.<BsrLink page="30" rule="12.41b" />
                        HQs command rating is the number of reaction moves it can
                        authorize.<BsrLink page="53" rule="21.1c" /></li>
                    <li>Is not in range of a non-Op HQ.<BsrLink page="30" rule="11.41b" /></li>
                    <li>Is not an NKVD unit.<BsrLink page="30" rule="12.41b" /></li>
                </ul>
                <span className="spacer0_5rem" />
                In case of a multi-hex combat, multiple reacting units could react, but only
                one unit can enter the Defender hex.<BsrLink page="30" rule="12.42" />
                <span className="spacer0_5rem" />
                A reacting unit is not required to move into the Defender hex, it could move
                in any direction.<BsrLink page="30" rule="12.42" />
                <span className="spacer0_5rem" />
                A reacting unit can move into a hex adjacent to an attacking enemy unit
                only if the hex has a friendly unit in it.<BsrLink page="30" rule="12.43" />
                <span className="spacer0_5rem" />
                Do not pay the +1 MP for entering enemy ZOC, but units still stop in the first
                enemy ZOC hex they enter.<BsrLink page="30" rule="12.43" />
            </div>




            <span className="spacer1rem" />




            <div className="subheader-image">
                <div className="header-1-image-title"> Soviet Non-Motorized Unit Activation<BsrLink page="20" rule="10.13" /></div>
            </div>
            <span className="spacer0_5rem" />
            <div className="padded">

                During the Soviet Motorized Movement Phase, the Soviet player can activate one non-motorized
                unit<span className="red-ask">*</span> or MSU per each command point of each non-interdicted Soviet HQ unit within command range
                (and not in range of a non-Op HQ).<BsrLink page="20" rule="10.13a" /><br />
                <span className="red-ask">* excludes: cavalry, armored trains,
                    Super-Heavy artillery, flotillas, or other HQs.<BsrLink page="20" rule="10.13c" /></span>


                <span className="spacer0_5rem" />
                Each operational HQ can also activate one in-range Guards unit, for 0 command point cost,
                even if the HQ has no command points left.
                <BsrLink page="20" rule="10.13b" />
                <span className="spacer0_5rem" />
                Activated units can move up to their full printed MA as modified
                by weather, terrain, and supply.
                <BsrLink page="20" rule="10.13d" />
                <span className="spacer0_5rem" />
                Place an Activated marker on each activated unit to
                show it expended its MPs in the Motorized Movement Phase, so
                can't move in the regular Movement Phase. Remove
                all Activation markers during the Recovery Phase.
                <BsrLink page="20" rule="10.13e" />
            </div>





            <span className="spacer1rem" />
            <div className="subheader-image">
                <div>Air Transport Mission<BsrLink page="37" rule="14.7" /></div>
                <img src={soviet_transport_plane} alt="transport aircraft units" width="80" height="80" />
            </div>
            <span className="spacer0_5rem" />
            <div className="padded">
                Airborne, parachute, infantry, mountain, engineer, MSU, and HQ units can be transported by air.
                Exception - Non-Op Soviet HQ with a Do Not Move marker on it cannot be air transported.
                <BsrLink page="37" rule="14.72" />
                <span className="spacer0_5rem" />
                An air transport aircraft unit
                must be available in the Ready Box, to be used for the transport mission. Air missions are subject to Air Combat if enemy
                air unit(s) are at the destination hex, and they could be subject to enemy AA fire if the destination hex has a AA capable
                unit next to it. The player attempting an Air Transport Mission can add fighter units to the mission.<BsrLink page="37" rule="14.71" />
                <span className="spacer0_5rem" />
                Each air transport aircraft unit can only carry one HQ unit, or a unit with zero stacking points, a MSU, or a unit that has
                one stacking point. A unit that has two stacking points can be transported if there are two air transport units available if they
                are in the same Air Transport Mission.
                <BsrLink page="37" rule="14.73" />
                <span className="spacer0_5rem" />
                Air Transport Missions are limited to a 60 hex range. They must "take off" from a a friendly supply source hex, a town, city, or major
                city hex, or the Active Box of the Unit Rebuilding Track. They can land at a friendy town, city or major city hex.
                <BsrLink page="37" rule="14.74" />
                <span className="spacer0_5rem" />
                Air Transport Missions are subject to AA Interception. The
                air unit is subject to AA fire if either the starting hex
                or the destination hex is an an Axis Interdiction Zone.
                There are relavent DRMs on the AA Fire Table concerning
                air units doing transport.
                <BsrLink page="37" rule="14.76" />

                <span className="spacer0_5rem" />
                If there is air combat at the destination hex, the unit(s) being transported may
                suffer the same fate at the aircraft they are in
                <BsrLink page="38" rule="14.77" />:
                <ul className="bare-ul">
                    <li>Destroyed: the unit that was being transported is also destroyed.</li>
                    <li>Damaged: the unit that was being transported is successfully delivered to the destination hex.</li>
                    <li>Aborted: the unit is sent back to the original hex it took off from.</li>
                    <li>If a unit with 2 stacking points was being transported by two transport air units, and one of the air units was destroyed
                        or aborted - return the transported unit to its starting hex.</li>
                </ul>

                <span className="spacer0_5rem" />
                Ground unit(s) that, successfully or unsuccessfully, attempted air transport
                get a Do Not Move 1 GT marker placed on them. The transporting air unit(s) (even
                if their attempt to transport was aborted) go to the Flown box.
                <BsrLink page="38" rule="14.75d" />
            </div>


            <span className="spacer1rem" />

            <div className="subheader-image counter-image">
                <div>Flotillas<BsrLink page="58" rule="22.5" /></div>
                <img src={sovietFlotilla} alt="flotilla counter" width="80" height="80" />
                <div>
                    <img src={flotilla} alt="Soviet flotilla" />
                </div>
            </div>

            <span className="spacer1rem" />
            Flotillas are armored boats with weapons (gunboats). They travel along rivers, coast and sea hexes.
            They move in either the Regular Movement Phase or the Motorized Movement Phase (but not both).
            They cannot move during
            the Reaction Phase. Soviet flotillas do not interact with Soviet HQs, and are not affected by non-op HQs.<BsrLink page="58" rule="22.51a" />
            <span className="spacer1rem" />
            They cannot do Specialized Movement.<BsrLink page="58" rule="22.51f" />
            <span className="spacer1rem" />
            Flotillas cannot move into hexes where Frozen conditions exist.<BsrLink page="58" rule="22.54a" />
            <span className="spacer1rem" />
            Flotillas cannot move during Storm weather, and are subject to repositioning.<BsrLink page="58" rule="22.54b" />
            <span className="spacer1rem" />
            Flotillas must stop when entering an enemy ZOC. Movement can be restricted by Air Interdiction.<BsrLink page="58" rule="22.51b" />
            <span className="spacer1rem" />
            As Flotilla's move along a major river, the owner determines which side of the hexside they are on.<BsrLink page="58" rule="22.51c" />
            <span className="spacer1rem" />
            On canals, Flotillas can only be on the side that has the canal hashed hexside graphic.<BsrLink page="58" rule="22.51d" />
            <span className="spacer1rem" />
            Flotillas can move on coastal or shallow sea or regular sea hexes at a MP cost of 1 per hex.<BsrLink page="58" rule="22.51e" />
            <span className="spacer1rem" />

            During Storm weather, Flotillas on shallow water, lake, insland sea, all-sea, or coastal hexes can be
            subject to Repositioning. During the weather Phase, each such Flotilla must be repositioned
            at the nearest friendly port within its movement allowance. If no port is in reach, then the Flotilla stays in place.
            <BsrLink page="58" rule="22.55" />



            <span className="spacer1rem" />
            <div className="subheader-image counter-image">
                <div>Zone of Air Interdiction (ZOI)<BsrLink page="37" rule="14.65" /></div>
                <img src={interdictCounter} alt="interdiction counter" width="80" height="80" />
                <div>
                    <img src={interdiction} alt="interdict" />
                </div>
            </div>
            <span className="spacer0_5rem" />
            Zones of Air Interdiction (ZOI) represent areas where Axis air units
            are interfering with Soviet ground movement. Overlapping of ZOIs do not
            confer any additional penalties on movement. Only Axis air units can create ZOIs.
            <BsrLink page="36" rule="14.6" /><BsrLink page="37" rule="14.64" /><BsrLink page="37" rule="14.65" />
            <span className="spacer0_5rem" />
            A unit(s) conducting railroad movement, or armored train, paus 12 railroad transport MPs
            per interdicted hex.<BsrLink page="37" rule="14.65" />
            <span className="spacer0_5rem" />
            Flotillas pay 3 MPs to enter a interdicted hex.<BsrLink page="37" rule="14.65" />
            <span className="spacer0_5rem" />
            A unit cannot begin or enter a ZOI using strategic movement.<BsrLink page="37" rule="14.65" />
            <span className="spacer0_5rem" />
            The benefit for moving along roads is not available when the hex is in an enemy ZOI,
            unless the road terrain type is woods. For bridges, they avoid having the
            road benefit negated when one side and/or the other side of the bridge in woods.
            <span className="spacer0_5rem" />
            Air transport missions taking off from or landing in an interdicted hex are subject to AA fire.
            <BsrLink page="37" rule="14.76" />
            <span className="spacer0_5rem" />
            Units doing Reaction movement cannot enter or leave an enemy ZOI.
            <BsrLink page="30" rule="12.41a" />
            <span className="spacer0_5rem" />
            Retreat Orders cannot be given to units in an enemy ZOI.
            <BsrLink page="31" rule="12.53g" />


            <span className="spacer2rem" />
            <div className="subheader-image">
                <div>Overrun<BsrLink page="25" rule="11.3" /></div>
                <div className="align-bottom_nowrap">
                    <img src={overrun} alt="Overrun" width="334" height="206" />
                </div>
            </div>


            <span className="spacer0_5rem" />
            <div>
                Overruns allow the "shoving aside" (or elimination) of weak enemy units that are standing
                in the way
                of a powerful motorized or cavalry unit('s) movement.
                <span className="spacer0_5rem" />
                During a movement phase (including the Motorized Movement phase),
                some units may be able
                to attack enemy units while moving, by using up some, or all,
                of its movement points.
                <span className="spacer0_5rem" />
                The (prospective) overruning unit(s) must be, or have moved to,
                the hex adjacent to the
                hex the targeted enemy unit(s) are in.
                <BsrLink page="26" rule="11.37" />
                <span className="spacer0_5rem" />
                Overruns are done only from one hex against the target hex.
                <span className="spacer0_5rem" />
                Overruns can not be conducted if the hex the overrunning units are in are subject to
                enemy ZOC other than the ZOC of the unit(s) being overrun.
                <BsrLink page="26" rule="11.34" />
                <span className="spacer0_5rem" />
                The odds must be at least 5-1 (or 12-1 for motorized engineers going across
                a fortified hexside or into a strongpoint<BsrLink page="26" rule="11.35c" />) in
                favor of the overrunning unit(s).<BsrLink page="26" rule="11.36c" />
                <span className="spacer0_5rem" />
                If doing an overrun attempt,
                it must be
                declared and conducted
                before moving other units.
                <BsrLink page="26" rule="11.37" />
                <span className="spacer0_5rem" />
                A stack of units doing an overrun must have started the movement phase
                stacked together, and only that moving stack can be involved in the
                overrun. If the stack moved to the hex adjacent to the target,
                and that hex already had friendly unit(s) in the hex, those friendly
                units cannot be involved in the overrun. You cannot move units from
                different hexes together to form a stack for overrun.
                <BsrLink page="26" rule="11.36" />
                <span className="spacer0_5rem" />
                Any German motorized unit, Soviet motorized unit (not NKVD), or Soviet (but not Axis) cavalry unit is eligible to
                conduct an overrun.
                <BsrLink page="25" rule="11.32" />
                <BsrLink page="25" rule="11.33" />
                <span className="spacer0_5rem" />
                The unit(s) doing the overrun must have enough movement points left to
                have entered the overrun hex,
                plus the overrun cost of 1 MP (but don't pay the 1 MP cost for entering enemy ZOC).
                They do not pay another 1 MP for entering any enemy ZOC
                in the overrun hex. <BsrLink page="26" rule="11.37b" />

                <span className="spacer0_5rem" />
                Only units capable doing overruns in a stack can advance after
                a successful overrun.  Units that cannot do overruns in the stack
                must remain in their original hex.
                <BsrLink page="25" rule="11.33" />
                <span className="spacer0_5rem" />
                Units doing an overrun cannot also be doing infiltration or one-hex movement.
                <BsrLink page="26" rule="11.36a" />
                <span className="spacer0_5rem" />
                Units doing an overrun can temporarily overstack with units not involved in the overrun
                <BsrLink page="26" rule="11.36b" />, but they may be eliminated if the overrun fails and the stack is still overstacked.
                <BsrLink page="26" rule="11.37j" />
                <span className="spacer0_5rem" />
                Units doing an overrun need to have at least 5-1 odds, or 12-1 odds if
                attempting to overrun (with a motorized engineer) across a fortified hexside or into a strongpoint,
                against the defending unit(s).
                <BsrLink page="26" rule="11.36c" />

                <span className="spacer0_5rem" />
                Combat Supply is not used in overruns.
                <BsrLink page="26" rule="11.36e" />
                <span className="spacer0_5rem" />
                Air missions are not used for overruns.
                <BsrLink page="25" rule="11.31" />
                <span className="spacer0_5rem" />
                Artillery support does not occur in overruns.
                <BsrLink page="25" rule="11.31" />
                <span className="spacer0_5rem" />
                Combined Arms Bonus does not apply to overruns.<BsrLink page="25" rule="11.31" />
                <BsrLink page="26" rule="11.37g" />
                <span className="spacer0_5rem" />
                Panzer Division Integrity Bonus
                does not apply to overruns.
                <BsrLink page="26" rule="11.37g" />


                <span className="spacer0_5rem" />
                Overruns cannot be conducted:<BsrLink page="25" rule="11.35" />
                <ul className="bare-ul">
                    <li>in a hex where Mud conditions exist</li>
                    <li>in a hex where Snow conditions exist (<b>for Axis only</b>)</li>
                    <li>across a lake or <b>major river</b> hexide (doesn't matter if its bridged or not)</li>
                    <li>into a fortified belt, citadel, lake, alpine, mountain, city, major city, or shallow water hexes.</li>
                </ul>
                <span className="spacer0_5rem" />
                Additionally:
                <ul className="bare-ul">
                    <li>Marsh or Swamp - an overrun can be conducted into these only when the hex is
                        frozen or when moving along a motorway, road, or railroad.
                        The Overrun Table lists a (+2) DRM to the Overrun Table die roll result.
                        <BsrLink page="26" rule="11.35b" />
                    </li>
                    <li>Fortified hexside or strongpoint - Overrun is allowed if there is a motorized
                        engineer in the stack doing the overrun and the odds are at least <span className="no-wrap">12-1.</span>
                        <BsrLink page="26" rule="11.35c" /></li>
                </ul>
                <span className="spacer0_5rem" />
                When there are "Untried Defenders" in the Overrun hex:<BsrLink page="26" rule="11.35d" />
                <ul className="bare-ul">
                    <li>Turn the untried defender(s) to their "tried" sides.</li>
                    <li>If it turns out the overrun now fails to get to its minimum odds, the overrun attempt automatically fails.</li>
                    <li>If the untried defender(s) are all of the "Remove" type, and the overrun hex is now empty of defenders, the overrun is
                        automatically successful (but they don't get the overrun cost refunded to them).</li>
                </ul>
                <span className="spacer0_5rem" />
                The overrun is resolved using the Overrun Table. The overruning player rolls a
                die and cross references it with the
                odds column that matches the odds of the overruning unit(s) against the defending
                unit(s). The result will be either
                a successful overrun or a failed overrun.
                <BsrLink page="26" rule="11.37" />
                <span className="spacer0_5rem" />
                A hex with enemy units in it can be subjected to multiple overruns in a movement phase, even if
                it was pushed into different hexe(s) by previous overrun(s).<BsrLink page="25" rule="11.32" />
                <span className="spacer0_5rem" />
                <div className="indent-1rem">
                    <div className="subheader-normal">Unsuccessful Overrun<BsrLink page="25" rule="11.37j" /></div>
                    <span className="spacer0_5rem" />
                    If the overrun fails, the overrunning units are considered to have exhausted all their movement points and remain in the hex where they
                    attempted the overrun from.
                    <BsrLink page="26" rule="11.37j" />
                    <span className="spacer0_5rem" />
                    If the stack that was attempting an overrun is still overstacked
                    the player must eliminate unit(s) to create a legal stack.
                    <BsrLink page="26" rule="11.37j" />
                    <span className="spacer0_5rem" />
                    If any Soviet cavalry unit(s) attempted in the overrun attempt, remove 1 step of cavalry
                    in addition to any required loss.
                    <BsrLink page="26" rule="11.37j" />
                    <span className="spacer0_5rem" />


                    <div className="subheader-normal">Successful Overrun<BsrLink page="26" rule="11.37i" /></div>
                    <span className="spacer0_5rem" />
                    Apply the results from the Overrun Table.
                    <BsrLink page="26" rule="11.37i" />
                    <span className="spacer0_5rem" />
                    If the overrun is successful, any Supply dumps, Bridge markers, and Ferry markers
                    in the overrun hex are removed.
                    <BsrLink page="26" rule="11.37i" />
                    <span className="spacer0_5rem" />
                    Any surviving defenders
                    are retreated 2 hexes by the overrunning player.
                    <BsrLink page="26" rule="11.37i" /> A stack being retreated can
                    have its units split up and retreated to different hexes.<BsrLink page="44" rule="16.4" /> See
                    the Retreat section of the Combat chapter for details on retreating units.<BsrLink page="44" rule="16.4" />
                    <span className="spacer0_5rem" />
                    Supply dumps, Bridge markers, and Ferry markers cannot be retreated,
                    return them to the owning player's stock.
                    <BsrLink page="26" rule="11.37i" />
                    <span className="spacer0_5rem" />
                    Units remaining that can't retreat are moved
                    to the Cadre Box or Cannot Rebuild Box as appropriate.
                    <BsrLink page="26" rule="11.37i" />
                    <span className="spacer0_5rem" />
                    The stack that conducted the overrun can continue moving if it has MPs left
                    (it can even overrun another hex if
                    it has enough MPs left).
                    <BsrLink page="26" rule="11.37i" />
                    <span className="spacer1rem" />
                    Place an overrun marker on the unit or stack of units that were retreated.
                    <BsrLink page="27" rule="11.38" />
                    <span className="spacer1rem" />
                    <div className="bulletsWithImageToRight">
                        <div>
                            Units with an overrun marker on them:<BsrLink page="27" rule="11.38a" />
                            <ul className="bare-ul">
                                <li>do not project a ZOC.</li>
                                <li>cannot provide artillery support (if it is an artillery unit).
                                    Turn to "fired" side if it has one.
                                </li>
                                <li>are not eligible for reaction movement.</li>
                                <li>HQs that get overrun get flipped to their non-op side.<BsrLink page="27" rule="11.38c" /></li>
                                <li><span>An overrun attempt or Declared Combat against a unit or stack with an Overrun marker</span>
                                    <span className="nl-pl">on it receives a -1 DRM.<BsrLink page="27" rule="11.38b" /></span></li>
                            </ul>
                        </div>
                        <div>
                            <img src={overrun_marker} alt="overrun marker" />
                        </div>
                    </div>

                    <span className="spacer0_5rem" />
                    Overrun markers are removed during the
                    owning player's next
                    Engineering Phase.
                    <BsrLink page="27" rule="11.38d" />
                </div>
            </div>


            <span className="spacer1rem" />
            <div className="subheader-normal">Some other Movement rules</div>
            <div className="padded">
                <ul className="bare-ul">
                    <li>MP cost of going into a city or Major City hex is always 1/2 MP in all weather conditions. (See Terrain Effects Chart)</li>
                    <li>Fortified hexlines costs +1 MP to cross, and Strongpoint hexes costs +1 MP to enter, but
                        a combination Fortified hexline and Strongpoint hex only costs +1 to cross and enter,
                        not +2.<BsrLink page="48" rule="18.12" /></li>
                    <li>Walking (or driving) along a Railroad gives a benefit of -1 MP cost when moving through a hex with Woods in it.<BsrLink page="21" rule="10.42a" /></li>
                    <li>Motorized (with orange and green MAs) may enter a swamp hex along a railroad by spending
                        3 MPs. If moving along a road, they pay that road's rate.<BsrLink page="21" rule="10.42c" /></li>
                </ul>
            </div>



            <ScrollToTopOnMount />

        </div >
    );
}

export default Movement;