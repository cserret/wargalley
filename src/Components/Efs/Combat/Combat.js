import React from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
//import BsrLink from "../BsrLink/BsrLink";
import combat from "../../../images/efs/combat/combat.jpg";
import map_combat1 from "../../../images/efs/combat/map_combat1.jpg";
import map_combat2 from "../../../images/efs/combat/map_combat2.jpg";
import declared_attack from "../../../images/efs/combat/declared_attack.gif";
import joseph_stalin from "../../../images/efs/combat/joseph-stalin.jpg";
import combined_arms_bonus from "../../../images/efs/combat/combined_arms_bonus.jpg";
//import combined_arms_bonus_fr from "../../../images/efs/combat/combined_arms_bonus_fr.gif";
import divisional_integrity from "../../../images/efs/combat/divisional_integrity.jpg";
import german_engineer from "../../../images/efs/combat/german_engineer2.gif";
import artillery_units from "../../../images/efs/combat/artillery_units.jpg";
import soviet_artillery_firing from "../../../images/efs/combat/soviet_artillery_firing.jpg";
import orders_strip from "../../../images/efs/combat/orders_strip.jpg";
import directhit from "../../../images/efs/combat/directhit.jpg";
import counter_additional_retreat from "../../../images/efs/combat/counter_additional_retreat.png";
import counter_no_retreat from "../../../images/efs/combat/counter_no_retreat.png";
import panzer from "../../../images/efs/combat/panzer.png";
import retreat from "../../../images/efs/combat/retreat.jpg";
import advance from "../../../images/efs/combat/advance.jpg";
import germanantitank1942east from "../../../images/efs/combat/germanantitank1942east.jpg";
import surrenderc from "../../../images/efs/combat/surrenderc.jpg";
import wreck from "../../../images/efs/combat/burning_t34_.jpg";
import './Combat.scss';

const Combat = (props) => {
    return (
        <div className="content">

            <div>

                <div className="content-title">
                    <div>COMBAT</div>
                    <div></div>
                </div>

                <div className="generic-flex-space-around combat">
                    <img src={combat} alt="combat" />
                </div>
                <div className="spacer1rem" />
                <p>
                    In addition to all the problems of supply and movement, units also occasionally had to engage in combat.
                </p>
                <div className="pdiv">
                    The core general sequence leading to combat is
                    <ol className="ol-less-top">
                        <li>Get adjacent to enemy units.</li>
                        <li>Declare Combat.</li>
                        <li>Enemy gets to respond, if possible.</li>
                        <li>Then you go forward with the attack, for better or for worse. Once you declared an attack, you have to follow through and roll them dice. </li>
                    </ol>
                </div>
                <p>
                    Factors that can affect combat are air support, naval support, Attack Supply expenditure, artillery support, Orders, terrain, weather, fortifications, engineers, Combined Arms, Divisional Integrity, and supply issues.
                </p><p>
                    The Combat Results table is a standard odds based table. Odds go from 1-4 to 10-1. Odds less than 1-4 are treated as automatic attacker eliminated (although you can't declare a combat if the initial odds are less than 1-4), and odds greater than 10-1 are treated as 10-1. There is a 3-2 column and a 3-4 column, which sometimes requires some mental mathematical dexterity. The results on the table range from no effect, to retreats, to step losses, and to complete annihilation, otherwise known as the dreaded 'e' result.
                </p><p>
                    <span className="b">Attacking Is Voluntary</span>, however if you wish to attack, then things get a little "sticky". Any enemy unit that exerts a ZOC into a hex of an attacking unit MUST also be attacked.
                </p>
                <div className="sticky-example">
                    <div>Attacking is Voluntary, but Sticky! Example:</div>
                    <div className="generic-flex-space-around">
                        <div><img src={map_combat1} alt="sticky example1" /></div>
                        <div className="text">If the German unit wants to attack the Soviet cavalry unit...</div>
                    </div>
                    <div className="generic-flex-space-around">
                        <div><img src={map_combat2} alt="sticky example2" /></div>
                        <div className="text">then the circled Soviet division will also need to be attacked, since it exerts a ZOC on the hex the German unit is attacking from. The German unit could attack both Soviet units, or the German player must bring up another unit to attack the circled division. Note that the Soviet armored unit across the Major River would not need to be attacked, since ZOCs do not extend across Major Rivers, even if there is a bridge.</div>
                    </div>
                </div>

                <div className="spacer2rem" />
                <div className="subheader-image">
                    <span>12.0</span>
                    <div>Declaration of Attack</div>
                    <img src={declared_attack} alt="declared attack counter" />
                </div>
                <div className="spacer1rem" />
                <p>
                    The phasing player must designate all his attacks before the start of the Combat phase. All designated attacks must have initial odds of at least 1-4. The rules state that a Declared Attack marker must be put on the defender hex being attacked. I prefer to put them on the attacking units, with the arrow of the marker pointing towards the defender hex, that way its easier for me to remember who exactly is attacking what. But you can do it either way. By only putting the marker on the defender hex, you can sometimes cause some doubt to your enemy as to who exactly is attacking, or how strong an attack to expect. At the moment of combat, the attacker can change who is attacking which defender hex, but still - each marked defender hex must be attacked, even if the final odds turn out to be less than 1-4.
                </p>


                <p className="subheader2">Hexes Eligible to be Attacked</p>

                <p>
                    In order for your units to attack enemy units, either:<br />
                    <span className="indent1rem"><span className="b">a)</span> The hex the enemy units are in can be normally entered by your units (according to the current weather conditions).</span><br />
                    <span className="indent1rem">AND / OR</span> <br />
                    <span className="indent1rem"><span className="b">b)</span> The enemy units exert a ZOC into the hex the attackers are attacking from. However, advance after combat cannot occur into terrain units are prohibited from entering.</span><br />
                </p>
                <p>
                    Multiple-hex defender hexes can be attacked as a single attack, but all attacking units must be adjacent to all defending units. Typically, multiple defender hex combats consist of an attacker in one hex attacking two defender hexes.
                </p>

                <div className="subheader-rule">
                    <span>14.1</span>
                    Reaction Movement
                </div>

                <p>Reaction Movement provides a mechanism where a defender can move additional troops to a hex under attack, possibly upsetting the odds calculation, or possibly denying the enemy a CAB bonus. It is similar to the concept of "reserves", except only motorized, or Guard, units can move.
                </p>
                <p>In the Reaction Movement phase the defender may move any motorized units that are within three hexes of a Declared Attack hex, up to half of their movement allowance.
                </p>
                <div className="gray-box">
                    <p className="subsubheader">Reaction Movement Qualifications</p>
                    <ul>
                        <li>Only non-orange ma motorized units may move in the Reaction Movement phase.</li>
                        <li>Must be within 3 hexes of the Declared Attack hex.</li>
                        <li>Cannot start in ZOC of an enemy unit, or be in a Defender Hex.</li>
                        <li>For Soviets, must also be within Command Range of an operating Headquarters unit with at least 1 non-interdicted Command Point, and also NOT be in range of a Non-Op Headquaters.</li>
                        <li>Must not have a Overrun marker on it.</li>
                    </ul>
                </div>

                <div className="spacer1rem" />
                <p>Motorized units that qualify to move in the Reaction Phase need not move towards the Declared Attack. It can move in any direction, up to half its movement allowance. It can do One Hex Movement if the unit is not OOS and its not Mud weather. It cannot enter an enemy ZOC unless there is a friendly unit(s) in the hex. If it moves into a hex that is in enemy ZOC (and has a friendly unit(s) in it), it must stop. It also does not pay the normal +1 cost for entering ZOC if entering a Defender Hex. Once a motorized unit enters a defender hex, it adds its combat strength to the defense, plus any other benefits it may add, such as denying the enemy the use of CAB.
                </p>


                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>12.4, 15.21</span>
                    <div>Mandated Attack</div>
                    <img src={joseph_stalin} alt="Joseph Stalin" />
                </div>
                <div className="spacer1rem" />
                <p>
                    The Soviet player may be obligated to make one or more Mandated Attacks during a turn. Typically these are received as a "special event" on the Soviet Replacements Table, which is rolled on each turn. A Mandated Attack represents a direct order from Stavka to go on the offensive. Soviet generals that refused these orders often suffered immediate consequences. In EFS, when a Mandated Attack is required, the Soviet player must make an attack at a minimum (initial) odds of at least 3-2 as soon as possible, preferably in the turn it is received.
                </p>
                <div className="pdiv">
                    If the Soviet player does not (or cannot) meet this requirement, the order for the Mandated Attack(s) still remain in effect. Additionally, these penalties occur:
                    <ul>
                        <li>
                            If during the Game Turn Interphase there are unmet Mandated Attacks, the Axis Player receives +2 VPs for each outstanding Mandated Attack, if the Axis player took and held a vp location that turn.
                        </li>
                        <li>The Soviets get a +1 drm for each unmet Mandated Attack when rolling on the Replacements Table.</li>
                    </ul>
                </div>
                <p>
                    There is a marker titled "Mandated Attack Not Yet Made" that goes on the Soviet Loss/Replacement Track that can keep track of the current Mandated Attack *debt*.
                </p>
                <p>
                    Soviets suffer from <span className="asterisk">*</span> results on the Combat Results table for Mandated Attacks, regardless of Attack Supply. Note that <span className="asterisk">*</span> results are cumulative. A Soviet Mandated Attack that is not Attack Supplied suffers the equivalent of two <span className="asterisk">*</span> results if a <span className="asterisk">*</span> result is rolled.
                </p>
                <p>
                    As the Soviet player, you will probably suffer needless losses due to these Mandated Attacks. Its something that is unavoidable. Just be prepared to be capable of making an attack every turn, because you don't know when the Mandated Attack order will come down the pipe. Keep Attack Supply near the front so that you don't have to suffer double <span className="asterisk">*</span> losses when making a Mandated Attack.
                </p>

                <div className="subheader-rule">
                    <span>15.67</span>
                    Combined Arms bonus
                </div>

                <p>The Combined Arms bonus (CAB) gives a DRM of -1 benefit to the attacker. There are several requirements that must be met before the attacker can qualify for CAB: the attacker must have a qualifying armored unit (identified by the red attack factor), and also have a recon, motorized infantry, motorcycle, or engineer unit attacking with it. The units being attacked cannot have any armor, AT or AA units. CAB cannot not occur if the defending units are behind any kind of river, in swamp hexes, in fortifications or behind fortified lines, or in City or Major City hexes. CAB can only occur during Dry or Frost turns. Once again ...
                </p>

                <div className="special-emphasis">
                    CAB can only occur during Dry or Frost turns
                </div>

                <div className="spacer1rem" />
                <p className="centered-bordered">
                    <img src={combined_arms_bonus} alt="combined arms bonus examples" />
                </p>

                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>15.68</span>
                    <div>Divisional Integrity</div>
                    <img src={divisional_integrity} alt="Divisional Integrity" />
                </div>
                <div className="spacer1rem" />
                <p>
                    German panzer and motorized divisions can qualify for a Divisional Integrity bonus drm of -1. For a German panzer division to qualify for the bonus,
                    it must have its panzer regiment attacking, and at least two of its other units (motorized infantry regiments or the recon unit) attacking the same defender.
                    The attacking units can be stacked together or in different hexes. These Divisional Integrity bonuses are cumulative.
                    For a German motorized division it would need all three of its regiments involved in the same attack to qualify,
                    Any SS motorized division need only have 3 of its four component units present to qualify for Divisional Integrity.
                    PLUS for each German motorized division getting a Divisional Integrity bonus, it must be *matched* by a qualifying German panzer division that is participating in the same attack.
                    German motorized divisions, alone, do not qualify for the Divisional Integrity bonus.

                    If the attack is not supplied with Attack Supply, then if any of the units counted for the Divisional Integrity are OOS, the Divisional Integrity is denied for that division.
                </p><p>
                    Exception: The SS LAH brigade qualifies with its two units.
                </p><p>
                    Unlike the finicky Combined Arms bonus, the Divisional Integrity bonus is available in all weather conditions, against any enemy units in any terrain.
                    The only thing that might mess it up is the required units being OOS while attacking without Attack Supply.
                </p><p>
                    Note that under the right conditions, German panzer divisions will often get both a Divisional Integrity bonus AND a Combined Arms bonus.
                    This makes them the most effective fighting force in the game.
                </p><p>
                    Since German motorized divisions only get the Divisional Integrity bonus when attacking in concert with German panzer divisions, its obvious that you should keep them together or near each other.
                </p>


                <div className="spacer2rem" />
                <div className="subheader-image">
                    <span>15.63</span>
                    <div>Engineer Effects</div>
                    <img src={german_engineer} alt="German engineer counter" />
                </div>
                <div className="spacer1rem" />
                <p>
                    Engineer effects can be declared when the attacking force contains at least one engineer unit and the defender is receiving a DRM for city, major city, fortified line, strongpoint, or River (not Major River) terrain. Engineer effects can also be declared when attacking a town in Mud (as the defender gets a DRM in that situation). The engineer effect gives the attacker a -1 DRM. Note that by declaring Engineer Effects, the engineer may take a step loss due to a asterisk result (see below for details). Engineer effects are only for attacking, defending engineers give no special benefit to the defense.
                </p>

                <div className="spacer1rem" />
                <p className="centered artillery">
                    <img src={soviet_artillery_firing} alt="Soviet artillery firing" />
                </p>

                <div className="spacer2rem" />
                <div className="subheader-image artillery">
                    <span>15.4, 15.55, 15.64</span>
                    <div>Artillery Support</div>
                    <img src={artillery_units} alt="artillery counters" />
                </div>
                <div className="spacer1rem" />
                <p>
                    Artillery units need able to reach, by LOS, the Attack Supply being used to supply an attack in order for it to support that attack. If not, they can use additional Attack Supply that they can reach. Non-OOS Artillery units do not use Attack Supply when supporting a defense. OOS Artillery cannot provide defensive support.
                </p><p>
                    Artillery support values are halved in Mud, or in Lingering Mud in the affected hexes (Woods). Artillery is halved when firing into swamp.
                </p><p>
                    The Axis player can add up to 4 artillery units to the attack or defense. An exception is Axis super-heavy artillery, which do not count in the 4 unit max. Additionally, in the defense, Axis super-heavy artillery can only add their support strength in defense of their hex - as long as there is at least one other ground combat unit with it. Axis super-heavy artillery can only provide its support strength to attacks against City, Major City, Fortified Line, or Strongpoint terrain.
                </p><p>
                    The Soviet player is usually limited to using 1 maximum artillery unit for an attack or defense. However, artillery units stacked with Headquarters can sometimes allow the Soviet player to use more than 1. See the chart regarding artillery support.
                </p><p>
                    Artillery values cannot be split for use in more than one combat.
                </p><p>
                    Artillery must be able to reach the Defender Hex with their range value in order to add support to an attack or defense. Note that artillery that have a range of one will need to be adjacent to the defender hex to participate.
                </p><p>
                    Artillery support values cannot exceed the ground combat strength of the friendly units involved in a defense or attack.
                </p>


                <div className="spacer2rem" />
                <div className="subheader-image artillery">
                    <span className="bsr2">12.5 BSR 2.0</span>
                    <div>"No Retreat" and "Additional Retreat" order markers</div>
                    <img src={orders_strip} alt="orders counters" />
                </div>
                <div className="spacer1rem" />
                <p>
                    The attacker and defender in a battle may place a "No Retreat" or "Additional Retreat" order marker on units in
                    a battle. The placement of an order marker is done after defensive artillery support is declared.
                </p><p>
                    The orders marker, either "Additional Retreat" or "No Retreat", is placed face down on
                    the defending units so that
                    the attacker does not know which order it is.
                </p><p>
                    The attacker can only place an orders marker on their units if the defender has an orders marker on them.
                </p><p>
                    Orders can only be placed on a hex that is in "qualifying terrain". A hex is in "qualifying terrain" if
                    it has any of: woods, alpine, mountain, city, major city, or any type of friendly active fortification
                    (Exception - Citadels).
                </p><p>
                    A town is also "qualifying terrain" if there are mud conditions and the defender gets a DRM benefit for
                    mud - but in this case it only qualifies for the "No Retreat" order.
                </p><p>
                    An "Additional Retreat" order marker cannot be placed on a hex that is under the mud weather condition.
                </p><p>
                    The defender will be able to put a (single) orders marker on a defending hex that has
                    qualifying terrain. The placement of orders is optional (except for NKDV described below).
                </p><p>
                    The German player can place an orders marker for any units that are defending in qualifying
                    terrain.
                </p><p>
                    For the Soviets, they can only place a orders marker if:<br />
                    a) There is an operational HQ within range of the defending hex, and that HQ has at least 1 non-interdicted
                    command point to expend for the order. Non-Op headquarters that are in command range of the hex will prevent
                    the placement of orders.<br />
                    b) The defending hex has a NKVD unit. In this case, the NKVD automatically places a "No Retreat" order
                    on the hex it is in - if the hex has "qualifying terrain". No HQ command point is expended for this automatic
                    placement. The presence of a HQ or Non-Op HQ has no effect
                    on this placement. However, a HQ with a command point to spend, which is in command range (with no Non-Op
                    HQ in command range) can expend a command point to remove this "automatic" order.
                </p><p>
                    An orders marker applies to all the friendly units in that battle, even if it is a multiple-hex
                    combat. Conflicting orders cannot be applied to a player's units in the same combat.
                </p><p>
                    After orders for the defender is place, the attacker may place an order on their attacking units. Again,
                    one orders marker applies to all units of that player that are in the combat. The placement
                    of an orders marker does not need "qualifying terrain" - the fact that the defender has an orders marker
                    on it allows the attacking player to place an orders marker on that player's attacking units.
                </p><p>
                    The Soviet player will need a HQ in command range (with no Non-Op HQ in command range) with
                    a command point to expend for the placement of an orders marker for attacking units.
                </p>










                <div className="gray-box">
                    <p className="subsubheader">Effects of the No Retreat order</p>
                    <div className="two-column-flex counter-left">
                        <img src={counter_no_retreat} alt="counter no retreat order" />
                        <div>
                            <ul>
                                <li>For the Defender under No Retreat order, +1 DRM to the combat die roll. Attacker with No Retreat does not get a DRM.</li>
                                <li>Units under a No Retreat order change a "R" result to a step loss. Then apply any numerical step loss result. (R turns to a "1", R1 turns to effectively a "2", etc).</li>
                                <li>In addition, any non-German units suffer an additional step loss unless they are in a city, major city, hill, mountain, alpine, woods, or non-destroyed fortification hex.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="gray-box">
                    <p className="subsubheader">Effects of the Additional Retreat order</p>
                    <div className="two-column-flex counter-left">
                        <img src={counter_additional_retreat} alt="counter additional retreat order" />
                        <div>
                            <ul>
                                <li>Units that get a R result and are under an Additional Retreat order retreat 3 hexes instead of 2. Units can only retreat on a "R" or "Rn" result.</li>
                                <li>Retreat path is determined by non-owner. Units must be retreated through a path that does not result in step loss, if possible.</li>
                                <li>Units retreating under Additional Retreat cannot retreat through even one uncontested enemy ZOC. If forced to they are eliminated.</li>
                                <li>If there is a numerical step loss in addition to the R result, the units suffer one less step loss.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="spacer1rem" />
                <p>
                    <div className="commentary">
                        The "No Retreat" order stops units from retreating,
                        but can cost you more step losses. Unless you've got more than two steps in a defender hex, it may be reckless to
                        place a "No Retreat" order on units. It may be tempting to cause a +1 DRM to the enemy, but you might be handing the
                        enemy a great victory - unless the defender is doomed anyways. "Additional Retreat" orders are quite useful when you actually do want to retreat, and want to
                        cut down on step losses.
                    </div>
                </p>

                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>16.2, 22.11</span>
                    <div>Step Losses</div>
                    <img src={directhit} alt="Direct hit on anti-tank gun" />
                </div>
                <div className="spacer1rem" />
                <p>
                    A numerical result on the combat results table is the number of step losses that occurred to an attacker and/or defender. The step loss is applied to the total lot of attackers or defenders, not to every individual unit. A unit has from 1 to 4 steps. A combat unit with its highest combat strength of 8 or more have four steps. 5-7 combat strength has three steps. Units with 2 steps have a weaker side on the reverse side of the counter. A unit with only one step has a blank reverse side (or its mobile side in case of super-heavy artillery). A Soviet HQ has 1 step. Units with 3 or 4 steps require the use of a Step Loss counter to indicate intermediate levels of strength that are not printed on the counter.
                </p><p>
                    Units that are eliminated in combat due to step losses, and were not completely surrounded or blocked by impassable terrain, go into the Cadre box for possible rebuilding during the replacement phase, otherwise they go to the eliminated box. Units that were destroyed by an "e" result go into the eliminated box. Units in the elimated box cannot be rebuilt. Exception - killed off Soviet MG/UR units always go back into the MG/UR pool, typically a opaque cup. Specific scenario rules may overrule the Cadre rule or modify it.
                </p><p>
                    When a armor or non-Guard artillery unit step is lost (not unit, step) move the marker on the step loss track. When the marker reaches the end of the track, chalk up one VP for the enemy and return the marker to the start of the step loss track. Each Guards step lost gives one VP directly to the enemy.
                </p><p>
                    Step losses may be modified by Asterisk (*) results, No Retreat orders, and Additional Retreat orders.
                </p>

                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>16.3</span>
                    <div>Asterisk (<span className="bigger-bold-text">*</span>) Results</div>
                    <img src={wreck} alt="burning T-34" />
                </div>
                <div className="pdiv">
                    The combat results table is peppered with results marked with a asterisk symbol <span className="asterisk">*</span>, called "Asterisk Result" (sometimes called an easier to pronounce "Star Result"). This symbol can have the following effects:
                    <ul class="ul-no-top">
                        <li>It can mean an "additional loss" to an attacker (<span className="green-bold">ADDITIONAL LOSS</span>).</li>
                        <li>It can determine that the first loss distributed MUST be to an engineer or an armor unit. ( <span className="blue-bold">ENGINEER ATTRITION</span> or <span className="red-bold">ARMOR ATTRITION</span>)</li>
                    </ul>
                    And, sometimes, both can come into effect.
                </div>

                <div className="gray-box additional-loss">
                    <p className="subsubheader"><span className="green-bold">ADDITIONAL LOSS</span> due to Asterisk (<span className="bigger-bold-text">*</span>) Results are activated when any of these conditions apply:</p>

                    <div>
                        <ul>
                            <li>If the attack was made without Attack Supply.</li>
                            <li>If the attack was a Soviet Mandated Attack.</li>
                            <li>If the attack was against units protected by a non-destroyed Fortification (fortified line, or strongpoint).</li>
                        </ul>
                        <div className="pdiv">In the case of attacking across a Fortified Line, all attacking units must have attacked across a fortified line to have <span className="green-bold">ADDITIONAL LOSS</span> occur.</div>
                    </div>

                </div>

                <div className="spacer1rem" />
                <p>
                    These asterisk conditions are cumulative for <span className="green-bold">ADDITIONAL LOSS</span>. You could have two <span className="asterisk">*</span> results, or even three <span className="asterisk">*</span> if you hit the trifecta - your attacking force is (1) attacking without Attack Supply, doing so as a (2) Mandated Attacked, and into (3) fortifications.
                </p><p>
                    The extra step loss(es) caused by <span className="green-bold">ADDITIONAL LOSS</span> can be applied to any attacking units of your choosing.
                </p>

                <p className="subheader2">
                    <span className="blue-bold">ENGINEER ATTRITION</span> and <span className="red-bold">ARMOR ATTRITION</span>
                </p>
                <p>
                    If an asterisk is on the combat results, and there are attacking engineers or armor, then check the following cases to see if they apply:
                </p>
                <div className="spacer2rem" />

                <div className="engineer-attrition">
                    <div className="title">ENGINEER ATTRITION</div>
                    <div className="subtitle">Asterisk (<span className="asterisk">*</span>) Results and Engineers</div>
                    <img src={german_engineer} alt="German engineer counter" />
                    <div className="eatext">
                        If an asterisk was on the combat result, then:<br />
                        If Engineering Effects had been declared by the attacker to get a -1 DRM, then:<br />
                        combat result of <span className="asterisk">*</span> means - one engineer step lost.<br />
                        combat result of 1<span className="asterisk">*</span> means - one engineer step lost (and satisfies the numerical loss of 1).
                    </div>
                </div>

                <div className="spacer2rem" />

                <div className="armor-attrition">
                    <div className="title">ARMOR ATTRITION</div>
                    <div className="subtitle">Asterisk (<span className="asterisk">*</span>) Results and Armor</div>
                    <div className="generic-flex-space-around armor">
                        <img src={panzer} alt="German panzer counter" />
                        <div>"Armor", as meant here, are units<br />
                            with an attack value in red.
                        </div>
                    </div>
                    <div className="aatext">
                        If an asterisk is on the combat result with a numeric loss number, then:<br />
                        If <span className="italic-bold">all</span> of the following are true:<br />
                        <ul className="moveup">
                            <li>If the attacking force contains at least one Armor unit.</li>
                            <li>The other force has at least one step of any of these: Armor, anti-tank, or AA units.</li>
                            <li>Engineering effects were not declared.</li>
                            <li>The combat result contains a asterisk AND a number.</li>
                        </ul>
                        Then -<br />
                        combat result of <span className="asterisk">*</span> means - one armor step lost (satisfies the numerical loss of 1).<br />
                        <div className="extra"><span className="red-bold">ARMOR ATTRITION</span> can occur to attacking, and defending, armor.</div>
                        <span className="other-notes">
                            other notes:<br />
                            A combat result of only a <span className="asterisk">*</span> does not cause ARMOR ATTRITION.<br />
                            If an armored step is lost due to ARMOR ATTRITION, then in the defending force - if they are<br /> losing 1 or more steps also - the first step they lose must be one of either armor, anti-tank, or AA.
                        </span>
                    </div>

                </div>


                <div className="spacer2rem" />


                <p>
                    <span className="green-bold">ADDITIONAL LOSS</span> can occur at the same time with <span className="blue-bold">ENGINEER ATTRITION</span> or <span className="red-bold">ARMOR ATTRITION</span>, if the qualifying conditions exist.
                </p><p>
                    <span className="blue-bold">ENGINEER ATTRITION</span> has precedence over <span className="red-bold">ARMOR ATTRITION</span>. If <span className="blue-bold">ENGINEER ATTRITION</span> occured - do not do <span className="red-bold">ARMOR ATTRITION</span>.
                </p><p>
                    Attacking units under an Additional Retreat order must still accept <span className="asterisk">*</span> results, when they apply. The benefit of Additional Retreat only subtracts 1 from any numerical step loss that is indicated in the result.
                </p>



                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>16.4</span>
                    <div>Retreats</div>
                    <img src={retreat} alt="retreat" />
                </div>
                <div className="spacer1rem" />
                <div className="pdiv">


                    In most situations, the owning player retreats the units. If the units retreating had an "Additional Retreat" order on them, then the non-owning player retreats them.
                    <ul className="ul-no-top">
                        <li>The retreat has to be away from the original Defender Hex.</li>
                        <li>The owning player cannot purposely retreat the units through enemy ZOC to destroy them if there are safer retreat paths available.</li>
                        <li>If units are forced to end their retreat in a hex that is over stacked, they can retreat one more hex. If unable to do so, they are eliminated.</li>
                        <li>Some units can never retreat - they are super-heavy artillery on their fire sides, dumps, bridge units, zero MA units. Dumps are destroyed, and bridge units can return in the owning player's Movement Phase.</li>
                        <li>Units cannot retreat into hexes they are not allowed to move.</li>
                        <li>Units cannot retreat through two consecutive empty hexes with enemy ZOCs unless friendly units are in them. If forced to do so they are eliminated.</li>
                        <li>Units may pass through a empty hex with an enemy ZOC in it, but the unit (or stack) loses one step and must roll on the retreat table.</li>
                        <li>Soviet Headquarters that are forced to retreat through a non-friendly occupied hex in enemy ZOC gets flipped to its Non-Op side.</li>
                        <li>Artillery units may be willfully destroyed before rolling on the retreat table (in order to avoid DRM penalties for having artillery units trying to get through).</li>
                        <li>Units cannot retreat across a unbridged Major River, except in Snow/Arctic weather when non-artillery units may retreat across. </li>
                    </ul>
                </div>




                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>16.5</span>
                    <div>Advances</div>
                    <img src={advance} alt="advance" />
                </div>
                <div className="spacer1rem" />
                <div className="pdiv">
                    When a defender hex is vacated due a retreat or elimination, any surviving attacking units may advance into that hex (ignoring any enemy ZOCs), with some limitations.
                    <ul className="ul-no-top">
                        <li>The decision to advance must be made before moving onto a different combat.</li>
                        <li>All, some, or none of the attacking units may advance, it is up to the attacking player.</li>
                        <li>Artillery units cannot advance after combat.</li>
                        <li>Attacker cannot violate stacking rules in an advance.</li>
                        <li>In case of a multiple defender hex combat, the attacker can choose from any defender hex to advance into.</li>
                        <li>Attacking units with a Additional Retreat order cannot advance.</li>
                        <li>Attacking units cannot advance into terrain it is not allowed to move into. </li>
                    </ul>

                    Advancing can be used to cut off possible retreats of defenders in other combats in that phase. In fact, better players always have this in mind when setting up attacks.
                    But you also need to avoid retreating the enemy to hexes where they can escape, or where they can block gaps in their line. Don't help the enemy.
                </div>

                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>21.0</span>
                    <div>Soviet Surrender</div>
                    <img src={surrenderc} alt="advance" />
                </div>
                <div className="spacer1rem" />
                <div className="pdiv">
                    Soviet units that are surrounded, or otherwise in a hopeless state, may surrender (German units never surrender, at
                    least not in this game system).

                    During the Soviet Surrender Phase, the Soviet Player rolls on the Soviet Surrender Table for each Soviet occupied hex that:
                    <ul className="ul-no-top">
                        <li>Is adjacent to an Axis combat unit that does not have a No Zoc band and ...</li>
                        <li>cannot trace a line of hexes of any length free of Axis units or their uncontested ZOCs to a non-surrounded friendly
                            major city, port, or map-edge Supply Source.
                        </li>
                    </ul>
                    <p>
                        The Soviet player gets benefit DRMs for: a) being within the command range of a HQ, b) the hex has a Guard or NKVD unit, c) the hex
                        is a city, d) the hex has a fortification.
                    </p><p>
                        The Soviet player gets negative DRMs if theres: a) a Emergency Supply marker, b) Out of Supply marker, c) only Militia and/or coastal artillery units.</p>

                </div>


                <div className="spacer2rem" />
                <p className="centered">
                    <img src={germanantitank1942east} alt="German anti-tank crew" />
                </p>

                <p className="subheader2">Additional Combat Rules</p>
                <div className="pdiv">
                    <ul className="ul-no-top">
                        <li>The maximum DRMs that can be applied to a combat are +3 or -3. Additional DRMs are discarded <span className="rule-ref">11.43h, 15.7</span></li>
                        <li>Combat odds are rounded off in favor of the defender. <span className="rule-ref">15.57</span></li>
                        <li>If the odds turn out to be less than 1-4, the attacker is eliminated. Odds greater than 10-1 are resolved on the 10-1 column. <span className="rule-ref">15.57</span></li>
                        <li>The attacker cannot arbitrarily reduce the odds, other than the ability to choose which units are attacking. <span className="rule-ref">15.57</span></li>
                        <li>Armor is halved when attacking into City or Major City hexes. <span className="rule-ref">15.52c</span></li>
                        <li>Defender in City causes +1 DRM. Soviet Defender in Major City causes +2 DRM. <span className="rule-ref">15.52c</span></li>
                        <li>Combat strength of units (other than artillery) are halved when attacking <span className="b">from</span> swamp hexes in Dry, Mud, and Frost turns. <span className="rule-ref">15.52a</span></li>
                        <li>Artillery support strengths are halved when firing into swamp hexes in Dry, Mud, and Frost turns. <span className="rule-ref">15.52a</span></li>
                        <li>Combat strength of units are halved when attacking across major river during non-Snow/Arctic weather. Bridges have no effect. <span className="rule-ref">15.52b</span></li>
                        <li>Towns confer a +1 DRM during Mud (or if a town is in Woods in Lingering Mud) and in Snow turns.</li>
                        <li>Attackers that are under an Additional Retreat order cannot advance if they make the enemy retreat or eliminate them in combat. </li>
                    </ul>
                </div>

            </div>































            <ScrollToTopOnMount />


        </div>
    );
}

export default Combat;