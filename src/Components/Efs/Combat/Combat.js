import React, { useEffect } from 'react';
import Snap from 'snapsvg-cjs';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import BsrLink from "../BsrLink/BsrLink";
import combat from "../../../images/efs/combat/combat.jpg";
import map_combat1 from "../../../images/efs/combat/map_combat1.jpg";
import map_combat2 from "../../../images/efs/combat/map_combat2.jpg";
import joseph_stalin from "../../../images/efs/combat/joseph-stalin.jpg";
import combined_arms_bonus from "../../../images/efs/combat/combined_arms_bonus.jpg";
//import combined_arms_bonus_fr from "../../../images/efs/combat/combined_arms_bonus_fr.gif";
import divisional_integrity from "../../../images/efs/combat/divisional_integrity.jpg";
import german_engineer from "../../../images/efs/combat/german_engineer_motorized_120.png";
import soviet_engineer from "../../../images/efs/combat/soviet_engineer_120.png";
import artillery_units from "../../../images/efs/combat/artillery_strip_120.png";
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
import german_engineers_crossing_river from "../../../images/efs/combat/german_engineers2.jpg";
import german_motorized_antiair from "../../../images/efs/combat/german_antiair_motorized_120.png";
import german_assault_gun from "../../../images/efs/combat/german_assault_gun_120.png";
import german_luftwaffe_flak from "../../../images/efs/combat/german_luftwaffe_flak_120.png";
import declared_attack from "../../../images/efs/combat/declared_attack_120.png";
import example_sticky_attack from "../../../images/efs/combat/example_sticky_attack.png";
import './Combat.scss';

const Combat = (props) => {

    useEffect(() => {
        // Your code here
        console.log('mounted')
        let paper = Snap('#exampleStickyAttack');

        paper.attr({ viewBox: "0, 0, 430, 401" });

        let textBackground = paper.rect(7, 320, 420, 75).attr({ fill: "#cceeff", stroke: "none", "opacity": 0.9 });

        // let star_d = "M 0 -46.7 L 12.2 -11.9 50.3 -11.9 20.7 11 31.5 46.8 0 25.8 -31.4 46.8 -20.7 11 -50.3 -11.9 -12.2 -11.9 z"
        // let redStar = paper.path(star_d).attr({ 
        //     stroke: "black", 
        //     strokeWidth: 3, 
        //     fill: "red", 
        //     'stroke-linejoin': "miter"});

        // applyTranslation(redStar, 100, 100) 
        // applyRotation(redStar, 30)



        let standardTextCenteredAttr = {
            "textAnchor": "middle",
            "dominant-baseline": "central",
            "fontSize": "25",
            "fontWeight": "normal",
            "fontFamily": "sans-serif",
            stroke: "none",
            fill: "black"
        }

        let standardTextLeftAlignedAttr = {
            "dominant-baseline": "central",
            "fontSize": 25,
            "fontWeight": "normal",
            "fontFamily": "sans-serif",
            stroke: "none",
            fill: "black",
        }


        let text1 = paper.text(215, 358, "Attacking is voluntary...").attr(standardTextCenteredAttr)
        let g0 = paper.group()
        g0.attr({ opacity: 0 });
        g0.append(text1);

        let text2 = paper.text(215, 358, "but can be sticky.").attr(standardTextCenteredAttr)

        let g1 = paper.group()
        g1.append(text2);
        g1.attr({ opacity: 0 });


        var textIfThisPanzer = multitext(paper, 33, 342, "If this panzer regiment wants to attack this Soviet division", 395, standardTextLeftAlignedAttr);
        var circleSovietDivision = paper.circle(99, 202, 60).attr({ stroke: "orange", strokeWidth: 5, fill: "orange", fillOpacity: 0.3 })
        let g2 = paper.group()
        g2.append(textIfThisPanzer);
        g2.append(circleSovietDivision)
        g2.attr({ opacity: 0 });


        var textThenTheAntiTank = multitext(paper, 33, 342, "Then the anti-tank unit will also need to be attacked,", 395, standardTextLeftAlignedAttr);
        var circleSovietAntiTank = paper.circle(204, 141, 60).attr({ stroke: "orange", strokeWidth: 5, fill: "orange", fillOpacity: 0.3 })
        let g3 = paper.group()
        g3.append(textThenTheAntiTank);
        g3.attr({ opacity: 0 });


        var textBecauseTheAntiTank = multitext(paper, 33, 342, "because the anti-tank unit exerts its ZOC on the attackers hex.", 390, standardTextLeftAlignedAttr);
        let g4 = paper.group()
        g4.append(textBecauseTheAntiTank);
        g4.attr({ opacity: 0 });

        var textEitherThePanzer = multitext(paper, 33, 342, "Either the panzer regiment attacks both the infantry unit and the anti-tank unit...", 390, standardTextLeftAlignedAttr);
        let g5 = paper.group()
        g5.append(textEitherThePanzer);
        g5.attr({ opacity: 0 });




        let ax, ay = 0
        let hr = 69
        let d = 'M '
        for (let degrees = 0; degrees < 360; degrees += 60) {
            ax = (Math.cos(degrees * (Math.PI / 180)) * hr)
            ay = (Math.sin(degrees * (Math.PI / 180)) * hr)
            d += roundFloat(ax, 2) + ' ' + roundFloat(ay, 2) + (d.includes('L') ? ' ' : ' L ')
        }
        d += 'z'
        console.log('d: ', d)
        let hexShape = paper.path(d).attr({
            stroke: "red",
            strokeWidth: 2,
            fill: "red",
            fillOpacity: 0.3,
            'stroke-linejoin': "miter"
        });

        let zocTextB = paper.text(2, 2, "ZOC").attr({
            "textAnchor": "middle",
            "dominant-baseline": "central",
            "fontSize": 35,
            "fontWeight": "bold",
            "fontFamily": "serif",
            stroke: "none",
            fill: "black"
        })

        let zocText = paper.text(0, 0, "ZOC").attr({
            "textAnchor": "middle",
            "dominant-baseline": "central",
            "fontSize": 35,
            "fontWeight": "bold",
            "fontFamily": "serif",
            stroke: "none",
            fill: "white"
        })
        let zocGroup = paper.group()
        zocGroup.append(hexShape)
        zocGroup.append(zocTextB)
        zocGroup.append(zocText)

        let zocGroup1 = zocGroup.clone(true);
        let zocGroup2 = zocGroup.clone(true);
        let zocGroup3 = zocGroup.clone(true);
        let zocGroup4 = zocGroup.clone(true);
        let zocGroup5 = zocGroup.clone(true);
        let zocGroup6 = zocGroup.clone(true);
        // applyTranslation(hexShape, 292,100)
        applyTranslation(zocGroup, 207, 143)
        applyTranslation(zocGroup1, 103, 83)
        applyTranslation(zocGroup2, 207, 23)
        applyTranslation(zocGroup3, 311, 83)
        applyTranslation(zocGroup4, 311, 203)
        applyTranslation(zocGroup5, 207, 263)
        applyTranslation(zocGroup6, 102, 203)
    
          
        zocGroup.attr({ opacity: 0 });
        zocGroup1.attr({ opacity: 0 });
        zocGroup2.attr({ opacity: 0 });
        zocGroup3.attr({ opacity: 0 });
        zocGroup4.attr({ opacity: 0 });
        zocGroup5.attr({ opacity: 0 });
        zocGroup6.attr({ opacity: 0 });
        let groupArrayZoc = []
        groupArrayZoc.push({ group: zocGroup, fadeInDuration: 100, fadeOutDuration: 0, delay: 1500, duration: 1000, leaveVisible: true, terminate: false })
        groupArrayZoc.push({ group: zocGroup1, fadeInDuration: 100, fadeOutDuration: 0, delay: 1500, duration: 100, leaveVisible: true, terminate: false })
        groupArrayZoc.push({ group: zocGroup2, fadeInDuration: 100, fadeOutDuration: 0, delay: 1500, duration: 100, leaveVisible: true, terminate: false })
        groupArrayZoc.push({ group: zocGroup3, fadeInDuration: 100, fadeOutDuration: 0, delay: 1500, duration: 100, leaveVisible: true, terminate: false })
        groupArrayZoc.push({ group: zocGroup4, fadeInDuration: 100, fadeOutDuration: 0, delay: 1500, duration: 100, leaveVisible: true, terminate: false })
        groupArrayZoc.push({ group: zocGroup5, fadeInDuration: 100, fadeOutDuration: 0, delay: 1500, duration: 100, leaveVisible: true, terminate: false })
        groupArrayZoc.push({ group: zocGroup6, fadeInDuration: 100, fadeOutDuration: 0, delay: 1500, duration: 6000, terminate: true })




        let groupArray2 = []
        let arrow_d = "M 0 -20, 24 4, 10 4, 10 30, -10 30, -10 4, -24 4     z"

        let arrowShadow = paper.path(arrow_d).attr({
            stroke: "black",
            strokeWidth: 3,
            strokeOpacity: 0.2,
            fill: "black",
            opacity: 0.5,
            'stroke-linejoin': "miter"
        });
        applyTranslation(arrowShadow, 155, 226)
        applyRotation(arrowShadow, 310)


        let arrow = paper.path(arrow_d).attr({
            stroke: "black",
            strokeWidth: 1,
            fill: "red",
            'stroke-linejoin': "miter",
        });
        applyTranslation(arrow, 152, 223)
        applyRotation(arrow, 310)

        let g2_0 = paper.group()
        g2_0.append(arrowShadow)
        g2_0.append(arrow)
        g2_0.attr({ opacity: 0 });

        groupArray2.push({ group: g2_0, fadeInDuration: 100, fadeOutDuration: 100, delay: 800, duration: 9000, terminate: true })







        let groupArray = []
        groupArray.push({ group: g0, fadeInDuration: 100, fadeOutDuration: 100, delay: 300, duration: 3000, terminate: false })
        groupArray.push({ group: g1, fadeInDuration: 100, fadeOutDuration: 100, delay: 300, duration: 3000, terminate: false })
        groupArray.push({ group: g2, fadeInDuration: 100, fadeOutDuration: 0, delay: 600, duration: 4000, terminate: false })
        groupArray.push({ group: g3, fadeInDuration: 0, fadeOutDuration: 100, delay: 0, duration: 4000, terminate: false, spawnChildGroupArray: groupArray2 })
        groupArray.push({ group: g4, fadeInDuration: 100, fadeOutDuration: 100, delay: 300, duration: 4000, terminate: false })
        groupArray.push({ group: g5, fadeInDuration: 100, fadeOutDuration: 100, delay: 300, duration: 6000, terminate: false, spawnChildGroupArray: groupArrayZoc })





        const activateGroup = (groupArray, index) => {
            let duration = groupArray[index].duration
            groupArray.forEach((g, gIndex) => {
                if (gIndex === index) {
                    setTimeout(() => g.group.animate({ opacity: 1 }, g.fadeInDuration), g.delay)
                    console.log('Is there a child process?: ', g)
                    if (g.spawnChildGroupArray && g.spawnChildGroupArray !== undefined) {
                        console.log('yes: ', g.spawnChildGroupArray)
                        activateGroup(g.spawnChildGroupArray, 0)
                    }
                }
                else {
                    if(g.leaveVisible && g.leaveVisible === true ) {
                    ;
                    } 
                    else {
                  
                    g.group.animate({ opacity: 0 }, g.fadeOutDuration);
                    }
                }
            })
            setTimeout(() => {
                if (groupArray[index].terminate !== true) {
                    index++
                    if (index > groupArray.length - 1) {
                        index = 0
                    }
                    activateGroup(groupArray, index)
                }
                else {
                    groupArray.forEach( gTerminate => {
                        gTerminate.group.attr({ opacity: 0 });
                    })
                }
            }, duration)
        }

        activateGroup(groupArray, 0)



    }, []);

    const roundFloat = (nbr, dec_places = 0) => {
        var mult = Math.pow(10, dec_places);
        if (Array.isArray(nbr)) {
            return nbr.map(num => Math.round(num * mult) / mult)
        }

        return Math.round(nbr * mult) / mult;
    }

    const multitext = (paper, x, y, txt, max_width, attributes) => {
        var t = paper.text(0, 0, txt).attr(attributes);
        t.attr({ ...attributes, opacity: 0 });
        let totalWidth = t.getBBox().width

        // we can get svg to write a single space character, so we need to derive the width of a space character.
        var letterA = paper.text(x, y, 'a').attr(attributes);
        let letterAwidth = letterA.getBBox().width
        var letterB = paper.text(x, y, 'b').attr(attributes);
        let letterBwidth = letterB.getBBox().width
        var letterA_B = paper.text(x, y, 'a b').attr(attributes);
        let letterA_bwidth = letterA_B.getBBox().width
        let spaceWidth = letterA_bwidth - (letterAwidth + letterBwidth)
        letterA.remove()
        letterB.remove()
        letterA_B.remove()

        // break text into array
        let wordsArray = txt.split(' ')
        let widthsPerWord = []
        let firstWordOfLine = true
        let currentLine = ''
        let previousLine = ''
        let currentWord = ''
        let linesToPrint = []
        let stopIt = 0
        while (wordsArray.length > 0) {
            previousLine = currentLine

            currentWord = wordsArray.shift()

            if (firstWordOfLine) {
                currentLine += currentWord
                firstWordOfLine = false
            }
            else {
                currentLine += ' ' + currentWord
            }




            var temp = paper.text(0, 0, currentLine).attr(attributes);
            let currentLineWidth = temp.getBBox().width
            temp.remove();
            if (currentLineWidth > max_width) {
                linesToPrint.push(previousLine)
                wordsArray.unshift(currentWord)
                firstWordOfLine = true
                currentLine = ''
                previousLine = ''
            }

            stopIt++
            if (stopIt > 30) {
                wordsArray = []
            }
        }
        if (currentLine !== '') {
            linesToPrint.push(currentLine)
        }
        let linesGroup = paper.group()
        linesToPrint.forEach((line, index) => {
            linesGroup.append(paper.text(x, y + (attributes.fontSize * 1.2 * index), line).attr(attributes));
        })

        return linesGroup;
    };

    const applyRotation = (g, rotation) => {
        let measureG = g.getBBox()
        let currentMatrix = g.transform().localMatrix;
        let addMatrix = new Snap.Matrix()
        addMatrix.rotate(rotation, measureG.cx, measureG.cy)
        addMatrix.add(currentMatrix)
        g.transform(addMatrix)
    }

    const applyTranslation = (g, xpos, ypos) => {
        let currentMatrix = g.transform().localMatrix;
        let addMatrix = new Snap.Matrix()
        addMatrix.translate(xpos, ypos)
        addMatrix.add(currentMatrix)
        g.transform(addMatrix)
    }

    const multitextOld = (paper, x, y, txt, max_width, attributes) => {
        var temp = paper.text(0, 0, txt).attr(attributes);
        temp.attr(attributes);
        var letter_width = temp.getBBox().width / txt.length;
        temp.remove();

        var words = txt.split(" ");
        var width_so_far = 0, current_line = 0, lines = [''];
        for (var i = 0; i < words.length; i++) {

            var l = words[i].length;
            if (width_so_far + (l * letter_width) > max_width) {
                lines.push('');
                current_line++;
                width_so_far = 0;
            }
            width_so_far += l * letter_width;
            lines[current_line] += words[i] + " ";
        }

        var t = paper.text(x, y, lines).attr(attributes);
        t.selectAll("tspan:nth-child(n+2)").attr({
            dy: "1.1em",
            x: x
        });
        return t;
    };






    const textBlock = (paper, x, y, width, height, text, fontSize) => {
        var block = paper.rect(x, y, width, height, 0, 0);

        block.attr({
            fill: "rgb(236, 240, 241)",
            stroke: "#1f2c39",
            strokeWidth: 3
        });

        var text = paper.text(x, y, text);
        text.attr({
            'font-size': fontSize
        });

        block.attr({
            width: (text.node.clientWidth)
        });
        let tg = paper.group()
        tg.append(block)
        tg.append(text)
        return tg
    }

    return (
        <div className="content">

            <div>

                <div className="content-title">
                    <div>COMBAT<BsrLink pos="title" page="38" rule="15.0" /></div>
                    <div></div>
                </div>

                <div className="generic-flex-space-around combat">
                    <img src={combat} alt="combat" />
                </div>
                <span className="spacer1rem" />
                <div className="subheader-n-images">
                    <div>Combat overview</div>
                </div>
                <div>

                    Each turn, there is a combat phase for each player.
                    These combat phases are where most of the fighting occurs between player's units.
                    <span className="spacer0_5rem" />
                    There is something called "overrun" which is a type of attack that occurs during a movement phase,
                    but that is a special form of combat that is considered more a function of movement rather than strictly "combat" (although the general rules for combat do apply). See the
                    Movement section for info on overrun.
                    <span className="spacer0_5rem" />
                    Combat can occur between combat unit(s) that are in hexes adjacent to each other. Additional units such as artillery units and air units can participate without
                    being adjacent to the hex being attacked. But you will need combat units "on the ground" adjacent to an enemy occupied hex in order to declare an attack.
                    <span className="spacer0_5rem" />
                    In order to be able to declare an attack for the Combat Phase, the active player will need to have at least
                    one unit with a non-zero attack value. Units with zero attack values, like Untried Units cannot attack.
                    Also, flotillas during a storm cannot attack. A "Declared Attack" marker will be placed on the hexes that
                    are being attacked.
                    <span className="spacer0_5rem" />
                    For attacking units to perform at their best, they will need to be supplied with an Attack Supply point (ASP).
                    However, Attack Supply is not required, and units can still
                    attack without having Attack Supply being used.
                    <span className="spacer0_5rem" />
                    Defending units do not need to use Attack Supply, except for artillery units
                    which are in a special state called a "Limited Artillery Supply" condition<BsrLink page="33" rule="13.5" />
                    <span className="spacer0_5rem" />
                    Flotillas and Armored Trains are not affected by lack of Attack Supply.
                    <span className="spacer0_5rem" />
                    Attacking units that are marked Out of Supply get to ignore any Out of Supply effects during a combat, if they are being allocated Attack Supply.<BsrLink page="39" rule="15.21" />
                </div>
                <span className="spacer1rem" />
                <div className="subheader-n-images">
                    <div>Attacking is Voluntary<BsrLink page="28" rule="12.13" /></div>
                    <div className="svg-container">
                        <svg id="exampleStickyAttack" width="430" height="401" className="" />
                    </div>
                </div>
                <div>
                    Your units can be adjacent to enemy occupied hexes, and not attack them.
                    But if you do attack - then any other enemy occupied hexes that project their ZOCs onto the
                    hex where your attacking units are - will also need to be attacked, by the same units or by other
                    friendly units that are also adjacent to those enemy units.
                    <span className="spacer0_5rem" />
                    So as is evident - going up to attack one enemy occupied hex when other enemy occupied hexes are next to
                    it can lead to 2 or more attacks that need to be declared.
                </div>


                <div className="subheader-n-images">
                    <div>Multiple-Hex Attacks<BsrLink page="29" rule="12.17" /></div>
                    <img src={german_luftwaffe_flak} alt="German Luftwaffe motorized antiair unit" />
                </div>
                <div>
                    <span className="spacer0_5rem" />
                    In most cases combats will be between one enemy occupied hex and an adjacent enemy occupied hex. However
                    there can be multiple-hex attacks that are "one" Declared Attack. The requirements are that all attacking units are adjacent to all defending units.
                    Any artillery participating with support only need to be able to reach one of the hexes involved in the
                    multi-hex combat.
                </div>



                <div className="subheader-n-images">
                    <div>Bunker Busting<BsrLink page="40" rule="15.44" /></div>
                    <img src={german_luftwaffe_flak} alt="German Luftwaffe motorized antiair unit" />
                    <img src={german_motorized_antiair} alt="German motorized anti-air unit" />
                    <img src={german_assault_gun} alt="German assault gun unit" />
                </div>
                <div>
                    Some Axis units can be declared a "Bunker Buster" in a Declared Attack when attacking certain terrain, which allows them to double their attack value.
                    <span className="spacer1rem" />

                    <div className="indented-box background-green">
                        <div className="indented-box-title">Qualifying Axis units for being a Bunker Buster:</div>
                        <ul>
                            <li>anti-aircraft</li>
                            <li>motorized anti-aircraft</li>
                            <li>assault gun</li>
                        </ul>
                    </div>

                    <span className="spacer1rem" />

                    <div className="indented-box background-beige">
                        <div className="indented-box-title">Qualifying terrain for the Defender hex:</div>
                        <ul>
                            <li>non-destroyed strongpoint</li>
                            <li>fortified belt</li>
                            <li>fortified lines</li>
                            <li>city</li>
                            <li>Major city</li>
                        </ul>
                    </div>





                    <span className="spacer1rem" />
                    Only one qualifying unit can be designated as a Bunker Buster in a Declared Attack.
                    <span className="spacer0_5rem" />
                    A anti-aircraft unit that contributed a DRM to AA Fire during the current combat phase cannot be selected to be a Bunker Buster.
                    <span className="spacer0_5rem" />
                    If Bunker Busting is being used in a Declared Attack, then the attacker is liable for Engineer Loss, and may lose the Bunker Buster unit.<BsrLink page="43" rule="16.33b2" />


                </div><div>



                    <div className="subheader-n-images">
                        <div>Combat procedure</div>
                        <img src={declared_attack} alt="declared attack counter" />
                    </div>

                    <ol>
                        <li><b>Attack Declaration<BsrLink page="28" rule="12.1" /></b> - The attacker declares any enemy occupied hexes that will be attacked, and places a Attack marker on each of them.
                            <br />
                            A hex with an Attack marker on it is called a Defender hex, for this combat phase.</li>
                        <li><b>Reaction Phase</b> - The defender will get conduct Reaction Movement, designate artillery, and issue Retreat Orders.
                            <span className="spacer0_5rem" />
                            <div className="indented-box background-green">
                                <div className="indented-box-title">Reaction Movement</div>
                                Reaction Movement allows the defending player to move one eligible unit for each Defender hex,
                                at half its movement allowance.
                                <br />
                                No Specialized Movement is allowed.
                                <br />
                                To be eligible for Reaction Movement, a unit:
                                <ul>
                                    <li>is not in an enemy ZOC</li>
                                    <li>is not in a Defender hex</li>
                                    <li>is within 3 hexes of a Defender hex.</li>
                                    <li>has a red-box MA.</li>
                                    <li>does not have a Fuel Shortage or Overrun marker on it.</li>
                                    <li>(for Soviet) is in command range of a HQ with a non-interdicted command point, and is not in range of a Non-op HQ.</li>
                                    <li>(for Soviet) is not a NKVD unit.</li>
                                </ul>
                                <span className="spacer0_5rem" />
                                Units conducting Reaction Movement do not have to move towards the Defender hex.
                                <span className="spacer0_5rem" />
                                They cannot enter or exit a Interdicted hex.
                                <span className="spacer0_5rem" />
                                They do not pay the +1 MP cost for entering a ZOC. If entering an enemy ZOC other than the Defender hex that it is reacting for, a friendly
                                unit needs to be present in the hex.
                                <span className="spacer0_5rem" />
                                For multi-hex combats - only one reacting unit can enter any of the Defender hexes it is reacting for.
                                <span className="spacer0_5rem" />
                                Reacting units cannot cause new combats to be declared.

                            </div>

                            <span className="spacer0_5rem" />

                            <div className="indented-box background-yellow">
                                <div className="indented-box-title">Defender artillery designation</div>
                                Designate eligible defender artillery to support the combat. Artillery is eligible to provide its support strength if it meets the requirements:
                                <ul>
                                    <li>Is eligible if it is within it's range to the Defender hex.
                                        In the case of a multi-hex attack, the artillery only needs to be able to reach one of the Defender hexes.</li>
                                    <li>Is eligible if it is in a Defender hex with other non-artillery units. In this case it can only provide support to the Defender hex it is in.
                                        If the artillery unit is in the Defender hex alone, or only with other artillery units, it can only provide it's defense strength.
                                    </li>
                                    <li>Axis-Allied artillery provides support at only half strength, unless it is in the defender hex.</li>
                                    <li>A maximum of two Axis-Allied artillery can provide support to each Defender hex. Up to two German artillery units can also provide
                                        support to the same Defender hex as Axis-Allied artillery.
                                    </li>
                                    <li>Rocket Artillery and Axis Super-heavy (S-HA) artillery have an "A" next to their support strength.
                                        This means they can only be used for attacks, not for defense. Not eligible for defensive support.</li>
                                    <li>Artillery units that are in an enemy ZOC are eligible only if the hex they are in is a Defender hex, and they are providing
                                        defensive support to that hex.</li>

                                </ul>
                            </div>
                        </li>

                    </ol>
                    The Combat Results table is a standard odds based table. Odds go from 1-4 to 10-1. Odds less than 1-4 are treated as automatic attacker eliminated (although you can't declare a combat if the initial odds are less than 1-4), and odds greater than 10-1 are treated as 10-1. There is a 3-2 column and a 3-4 column, which sometimes requires some mental mathematical dexterity. The results on the table range from no effect, to retreats, to step losses, and to complete annihilation, otherwise known as the dreaded 'e' result.
                </div><div>
                    <span className="b">Attacking Is Voluntary</span>, however if you wish to attack, then things get a little "sticky". Any enemy unit that exerts a ZOC into a hex of an attacking unit MUST also be attacked.
                </div>
                <div>
                    Attacks that are made without Attack Supply have these consequences:<BsrLink page="39" rule="15.22" />
                    <ul className="bare-ul">
                        <li>A +2 DRM is applied.</li>
                        <li>The attacker cannot allocate Artillery Support, although they still could if an ASP is used for the artillery (even though the ground attack is being made without ASP)<BsrLink page="39" rule="15.34" />.</li>
                        <li>Any Panzer or Motorized Division that has an Out of Supply marker on it (and is not getting an ASP spent on the combat it is involved in), does not receive it's Panzer Division Integrity Bonus.</li>
                        <li>The attacking units suffer an addition step loss if the combat result has an asterisk (*).</li>
                    </ul>
                    <span className="spacer0_5rem" />

                    <span className="spacer0_5rem" />
                    For the defender in a Declared Attack, no ASP needs to be used, except if they are in a Limited Artillery condition, then an ASP needs to allocated so that they can fire their artillery support. The ASP
                    may or may not end up being used, according to the results of the Limited Artillery table.<BsrLink page="39" rule="15.21" />
                </div>
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

                <span className="spacer2rem" />
                <div className="subheader-image">
                    <span>12.0</span>
                    <div>Declaration of Attack</div>
                    <img src={declared_attack} alt="declared attack counter" />
                </div>
                <span className="spacer1rem" />
                <div>
                    The phasing player must designate all his attacks before the start of the Combat phase. All designated attacks must have initial odds of at least 1-4. The rules state that a Declared Attack marker must be put on the defender hex being attacked. I prefer to put them on the attacking units, with the arrow of the marker pointing towards the defender hex, that way its easier for me to remember who exactly is attacking what. But you can do it either way. By only putting the marker on the defender hex, you can sometimes cause some doubt to your enemy as to who exactly is attacking, or how strong an attack to expect. At the moment of combat, the attacker can change who is attacking which defender hex, but still - each marked defender hex must be attacked, even if the final odds turn out to be less than 1-4.
                </div>


                <div className="subheader2">Hexes Eligible to be Attacked</div>

                <div>
                    In order for your units to attack enemy units, either:<br />
                    <span className="indent1rem"><span className="b">a)</span> The hex the enemy units are in can be normally entered by your units (according to the current weather conditions).</span><br />
                    <span className="indent1rem">AND / OR</span> <br />
                    <span className="indent1rem"><span className="b">b)</span> The enemy units exert a ZOC into the hex the attackers are attacking from. However, advance after combat cannot occur into terrain units are prohibited from entering.</span><br />
                </div>
                <div>
                    Multiple-hex defender hexes can be attacked as a single attack, but all attacking units must be adjacent to all defending units. Typically, multiple defender hex combats consist of an attacker in one hex attacking two defender hexes.
                </div>

                <div className="subheader-rule">
                    <span>14.1</span>
                    Reaction Movement
                </div>

                <div>Reaction Movement provides a mechanism where a defender can move additional troops to a hex under attack, possibly upsetting the odds calculation, or possibly denying the enemy a CAB bonus. It is similar to the concept of "reserves", except only motorized, or Guard, units can move.
                </div>
                <div>In the Reaction Movement phase the defender may move any motorized units that are within three hexes of a Declared Attack hex, up to half of their movement allowance.
                </div>


                <div className="indented-box background-green">
                    <div className="indented-box-title">Reaction Movement Qualifications:</div>
                    <ul>
                        <li>Only non-orange ma motorized units may move in the Reaction Movement phase.</li>
                        <li>Must be within 3 hexes of the Declared Attack hex.</li>
                        <li>Cannot start in ZOC of an enemy unit, or be in a Defender Hex.</li>
                        <li>For Soviets, must also be within Command Range of an operating Headquarters unit with at least 1 non-interdicted Command Point, and also NOT be in range of a Non-Op Headquaters.</li>
                        <li>Must not have a Overrun marker on it.</li>
                    </ul>
                </div>

                <span className="spacer1rem" />
                <div>Motorized units that qualify to move in the Reaction Phase need not move towards the Declared Attack. It can move in any direction, up to half its movement allowance. It can do One Hex Movement if the unit is not OOS and its not Mud weather. It cannot enter an enemy ZOC unless there is a friendly unit(s) in the hex. If it moves into a hex that is in enemy ZOC (and has a friendly unit(s) in it), it must stop. It also does not pay the normal +1 cost for entering ZOC if entering a Defender Hex. Once a motorized unit enters a defender hex, it adds its combat strength to the defense, plus any other benefits it may add, such as denying the enemy the use of CAB.
                </div>


                <span className="spacer2rem" />
                <div className="subheader-image stalin">
                    <div>Mandated Attack<BsrLink page="29" rule="12.3" /></div>
                    <img src={joseph_stalin} alt="Joseph Stalin" />
                </div>
                <span className="spacer1rem" />
                <div>
                    The Soviet player may be obligated to make one or more Mandated Attacks during a turn.
                    Typically these are received as a "special event" on the Soviet Replacements Table, or they
                    may be specified in the scenario rules.
                    <span className="spacer0_5rem" />
                    A Mandated Attack represents a direct order from Stavka to go on the offensive.
                    Soviet generals that refused these orders often suffered immediate consequences.
                    In EFS, when a Mandated Attack is required, the Soviet player must make an attack at a minimum (initial) odds of at least
                    3-2 with at least 6 steps of combat units, as soon as possible, preferably in the turn it is received.
                    <span className="spacer0_5rem" />
                    An overrun cannot be claimed as a mandated attack.
                    <span className="spacer0_5rem" />
                    The initial odds (before modifications) have to be 3-2 to qualify as a mandated attack - regardless if subsequent odds calculations brings the odds lower.
                    <span className="spacer0_5rem" />
                    <b>HQ Doubling Effects</b><BsrLink page="30" rule="12.35" /> - if a HQ is in range of a unit(s) participating in the Mandated Attack, then that HQ
                    gets to double its (non-interdicted) command rating for that combat phase if it activates at least one unit to participate
                    in the mandated attack.
                </div>
                <div className="pdiv">
                    If the Soviet player does not (or cannot) meet this requirement, the order for the Mandated Attack(s) still remain in effect. Additionally,
                    these penalties occur:
                    <ul className="bare-ul">
                        <li>
                            Any turn the Axis player captures one or more scenario VP locations, and holds it during the Administrative Segment, all
                            unfulfilled Mandated Attacks are converted into Victory Points (see the Victory Point Schedule for details). When the Axis player
                            gets these victory point(s) for unfulfilled Mandated Attacks, move the Mandated Attacks Not Yet Made marker back to zero.
                        </li>
                        <li>The Soviets get a +1 drm for each unmet Mandated Attack when rolling on the Replacements Table.</li>
                    </ul>
                </div>


                <div className="subheader-rule">
                    Combined Arms Bonus<BsrLink page="41" rule="15.57" />
                </div>

                <div>The Combined Arms bonus (CAB) gives a DRM of -1 benefit to the Axis attacker (only Axis units can get CAB).<br />
                    <span className="spacer0_5rem" />
                    Qualifications:
                    <ul className="bare-ul">
                        <li>
                            The attacking Axis units have at least one <b>armored</b> unit with a red attack strength, along with at least
                            one reconnaissance, motorized infantry, motorcycle, or motorized engineer unit.
                        </li>
                        <li>The defending Soviet unit(s) do not have any of:
                            armor unit with red attack strength,
                            any type of anti-tank unit,
                            any type of anti-aircraft.
                        </li>
                    </ul>
                    <span className="spacer0_5rem" />
                    Restrictions:
                    <ul className="bare-ul">
                        <li>
                            No CAB if all required unit types are attacking across canal, river, or major river.
                        </li>
                        <li>No CAB if all required unit types are attacking into swamp hexes (unless frozen),
                            non-destroyed fortifications, cities, major cities, mountain hexes, or alpine hexes.
                        </li>
                        <li>No CAB during Mud or Snow, or where lingering Mud or Snow exists in the hex.</li>
                    </ul>

                </div>

                <div className="special-emphasis">
                    CAB can only occur during Dry or Frost turns
                </div>

                <span className="spacer1rem" />
                <div className="centered-bordered">
                    <img src={combined_arms_bonus} alt="combined arms bonus examples" />
                </div>

                <span className="spacer2rem" />
                <div className="subheader-image stalin">
                    <div>Panzer Divisional Integrity Bonus<BsrLink page="41" rule="15.58" /></div>
                    <img src={divisional_integrity} style={{ height: 'auto' }} alt="Divisional Integrity" />
                </div>
                <span className="spacer1rem" />
                <div>
                    German panzer and motorized divisions can qualify for a Panzer Divisional Integrity Bonus drm of -1, when attacking (not defending) in regular combat.
                    <span className="spacer0_5rem" />
                    Requirements:
                    <ul className="bare-ul">
                        <li>
                            A German panzer division must have at least 3 of its 4 units attacking the same hex. One of them has to be the panzer regiment.
                        </li>
                        <li>
                            A German motorized division requires all 3 of its units, and is attacking the same hex as a qualifying panzer division (One qualifying panzer division can only be used to qualify one motorized division).
                        </li>
                        <li>
                            None of the units being used to qualify for the bonus can be in OOS state, unless they have attack supply.
                        </li>
                    </ul>
                    <span className="spacer0_5rem" />
                    The Das Reich motorized division only has two regiments, and therefore cannot qualify for the bonus.
                </div>

                <span className="spacer2rem" />


                <div className="subheader-n-images">
                    <div>Engineer Effects<BsrLink page="41" rule="15.53" /></div>
                    <img src={german_engineer} style={{ height: 'auto' }} alt="German motorized engineer counter" />
                    <img src={soviet_engineer} style={{ height: 'auto' }} alt="Soviet engineer counter" />
                    <img src={german_engineers_crossing_river} style={{ height: 'auto' }} alt="Soviet Cossack commander at Kiev, 1942" />
                </div>



                <span className="spacer1rem" />
                <div>
                    Engineer effects can provide a -1 DRM on attacks if requirements are met. Having more than one engineer does not increase the benefit.
                    <span className="spacer0_5rem" />
                    General Requirements/Restrictions
                    <ul className="bare-ul">
                        <li>The attacking unit(s) must include at least one engineer type unit.</li>
                        <li>The defender terrain contains any of:
                            <ul className="sub-box">
                                <li>city or Major City.</li>
                                <li>river (not Major River).</li>
                                <li>non-frozen canal.</li>
                                <li>non-destroyed fortification which is providing the defender with a Defender DRM benefit.</li>
                                <li>across a shallow water hexside. <span className="exception">Exception:</span> armored engineers cannot attack across shallow water hexsides.<BsrLink page="41" rule="15.53d" /></li>
                                <li>town, if the weather condition in the town hex is Mud or Snow.</li>
                            </ul>

                        </li>
                    </ul>
                    <span className="spacer0_5rem" />
                    <b>Special Engineer Stacking<BsrLink page="41" rule="15.53c" /></b> - for both players, one engineer unit can stack above the stacking limit and participate in the attack. After the combat, stacking rules must
                    be followed, and if the engineer is still in the hex and overstacked, it must be retreated 2 hexes. If the stacking rules cannot
                    be satisfied, then the engineer unit is eliminated.
                </div>

                <span className="spacer1rem" />
                <div className="centered artillery">
                    <img src={soviet_artillery_firing} alt="Soviet artillery firing" />
                </div>

                <span className="spacer2rem" />
                <div className="subheader-image">
                    <div>Artillery Support<BsrLink page="31" rule="13.0" /></div>
                    <img src={artillery_units} style={{ height: "auto" }} alt="artillery counters" />
                </div>
                <span className="spacer1rem" />
                <div>
                    Artillery units are units that have a range which is a number of hexes they can fire across to add combat factors to a combat. These units
                    include basic artillery units, heavy artillery units, rocket units, coast defense units, and railroad artillery units.
                    <span className="spacer0_5rem" />
                    Both players can potentially add artillery support to the same combats, whether they are attacking or defending.
                    <span className="spacer0_5rem" />
                    The support factors that one side's artillery is adding to a combat cannot exceed the total combat value of the friendly units in the hex(es) in the combat.
                    <span className="spacer0_5rem" />
                    General Requirements/Restrictions
                    <ul className="bare-ul">
                        <li>The artillery unit(s) must be in range of the defender hex where a Declared Attack marker is placed.</li>
                        <li>The artillery unit(s) <b>must be in Attack Supply</b> - a Attack Supply (which is being expended for this combat) LOC must be able to reach the artillery unit(s).</li>
                        <li>Defending artillery units in an enemy ZOC cannot provide support to friendly units in another hex.</li>
                        <li>Attacking artillery units in an enemy ZOC can only provide support to a defender hex that is projecting enemy ZOC on it.</li>
                        <li>Defending artillery unit(s) alone in a defender hex do not get to use their support strength. They only provide their defense value
                            (typically 1).</li>
                        <li>Artillery units in a defender hex without Attack Supply will only provide their defense strength (typically 1).</li>
                    </ul>
                    <span className="spacer0_5rem" />
                    Axis specific artillery rules
                    <ul className="bare-ul">
                        <li>Up to four artillery units can add their support to a combat, whether attacking or defending.</li>
                        <li>Axis Super-Heavy artillery units do not count against the four unit limit.<BsrLink page="32" rule="13.42" /></li>
                    </ul>
                    <span className="spacer0_5rem" />
                    Axis-Allied specific artillery rules
                    <ul className="bare-ul">
                        <li>Unless a Axis-Allied artillery in a defender hex, they can
                            only provide half of their support value (round down).
                        </li>
                        <li>No more than two Axis-Allied artillery units can provide defense support to a single combat.</li>
                        <li>Up to two German artillery units can join in a combat with Axis-Allied artillery unit(s) (regardless if one or two are firing support).</li>
                    </ul>
                    <span className="spacer0_5rem" />
                    Soviet specific artillery rules
                    <ul className="bare-ul">
                        <li>Only one artillery unit or coast defense unit can provide artillery support, but it can be two if:
                            <ul>
                                <li>Both are defending in the same combat.</li>
                                <li>Two artillery units are in command range of the same non-interdicted HQ and not within the command range of a non-Op HQ.</li>
                                <li>One artillery unit can be in the defender hex while another is outside the hex, but the one outside the defender hex is in range and in command range of a HQ.</li>
                            </ul></li>
                        <li>Up to two rocket units can be added in addition to the one (or two) regular Soviet artillery limit.</li>
                        <li>Any number of Soviet railroad artillery units and naval artillery, which are in command range of a HQ, can add their support above the regular Soviet artillery limit.</li>
                    </ul>
                    <span className="spacer0_5rem" />
                    Terrain and artillery
                    <ul className="bare-ul">
                        <li>Artillery is not halved if it fires over a major river hexside or from swamp.</li>
                        <li>Artillery firing into a swamp hex (non-frozen) is halved.</li>
                        <li>Artillery can fire over lake or sea hexes and hexsides, if they have the range.</li>
                    </ul>
                </div>

                <span className="spacer2rem" />
                <div className="subheader-image artillery">
                    <span className="bsr2">12.5 BSR 2.0</span>
                    <div>"No Retreat" and "Additional Retreat" order markers</div>
                    <img src={orders_strip} alt="orders counters" />
                </div>
                <span className="spacer1rem" />
                <div>
                    The attacker and defender in a battle may place a "No Retreat" or "Additional Retreat" order marker on units in
                    a battle. The placement of an order marker is done after defensive artillery support is declared.
                </div><div>
                    The orders marker, either "Additional Retreat" or "No Retreat", is placed face down on
                    the defending units so that
                    the attacker does not know which order it is.
                </div><div>
                    The attacker can only place an orders marker on their units if the defender has an orders marker on them.
                </div><div>
                    Orders can only be placed on a hex that is in "qualifying terrain". A hex is in "qualifying terrain" if
                    it has any of: woods, alpine, mountain, city, major city, or any type of friendly active fortification
                    (Exception - Citadels).
                </div><div>
                    A town is also "qualifying terrain" if there are mud conditions and the defender gets a DRM benefit for
                    mud - but in this case it only qualifies for the "No Retreat" order.
                </div><div>
                    An "Additional Retreat" order marker cannot be placed on a hex that is under the mud weather condition.
                </div><div>
                    The defender will be able to put a (single) orders marker on a defending hex that has
                    qualifying terrain. The placement of orders is optional (except for NKDV described below).
                </div><div>
                    The German player can place an orders marker for any units that are defending in qualifying
                    terrain.
                </div><div>
                    For the Soviets, they can only place a orders marker if:<br />
                    a) There is an operational HQ within range of the defending hex, and that HQ has at least 1 non-interdicted
                    command point to expend for the order. Non-Op headquarters that are in command range of the hex will prevent
                    the placement of orders.<br />
                    b) The defending hex has a NKVD unit. In this case, the NKVD automatically places a "No Retreat" order
                    on the hex it is in - if the hex has "qualifying terrain". No HQ command point is expended for this automatic
                    placement. The presence of a HQ or Non-Op HQ has no effect
                    on this placement. However, a HQ with a command point to spend, which is in command range (with no Non-Op
                    HQ in command range) can expend a command point to remove this "automatic" order.
                </div><div>
                    An orders marker applies to all the friendly units in that battle, even if it is a multiple-hex
                    combat. Conflicting orders cannot be applied to a player's units in the same combat.
                </div><div>
                    After orders for the defender is place, the attacker may place an order on their attacking units. Again,
                    one orders marker applies to all units of that player that are in the combat. The placement
                    of an orders marker does not need "qualifying terrain" - the fact that the defender has an orders marker
                    on it allows the attacking player to place an orders marker on that player's attacking units.
                </div><div>
                    The Soviet player will need a HQ in command range (with no Non-Op HQ in command range) with
                    a command point to expend for the placement of an orders marker for attacking units.
                </div>




                <div className="indented-box-with-image-to-left">
                    <div>Effects of the No Retreat order</div>
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

                <span className="spacer1rem" />

                <div className="indented-box-with-image-to-left">
                    <div>Effects of the Additional Retreat order</div>
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
                <span className="spacer1rem" />




                <span className="spacer1rem" />


                <span className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>16.2, 22.11</span>
                    <div>Step Losses</div>
                    <img src={directhit} alt="Direct hit on anti-tank gun" />
                </div>
                <span className="spacer1rem" />
                <div>
                    A numerical result on the combat results table is the number of step losses that occurred to an attacker and/or defender. The step loss is applied to the total lot of attackers or defenders, not to every individual unit. A unit has from 1 to 4 steps. A combat unit with its highest combat strength of 8 or more have four steps. 5-7 combat strength has three steps. Units with 2 steps have a weaker side on the reverse side of the counter. A unit with only one step has a blank reverse side (or its mobile side in case of super-heavy artillery). A Soviet HQ has 1 step. Units with 3 or 4 steps require the use of a Step Loss counter to indicate intermediate levels of strength that are not printed on the counter.
                </div><div>
                    Units that are eliminated in combat due to step losses, and were not completely surrounded or blocked by impassable terrain, go into the Cadre box for possible rebuilding during the replacement phase, otherwise they go to the eliminated box. Units that were destroyed by an "e" result go into the eliminated box. Units in the elimated box cannot be rebuilt. Exception - killed off Soviet MG/UR units always go back into the MG/UR pool, typically a opaque cup. Specific scenario rules may overrule the Cadre rule or modify it.
                </div><div>
                    When a armor or non-Guard artillery unit step is lost (not unit, step) move the marker on the step loss track. When the marker reaches the end of the track, chalk up one VP for the enemy and return the marker to the start of the step loss track. Each Guards step lost gives one VP directly to the enemy.
                </div><div>
                    Step losses may be modified by Asterisk (*) results, No Retreat orders, and Additional Retreat orders.
                </div>

                <span className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>16.3</span>
                    <div>Asterisk (<span className="bigger-bold-text">*</span>) Results</div>
                    <img src={wreck} alt="burning T-34" />
                </div>
                <span className="spacer1rem" />
                <div className="pdiv">
                    The combat results table is peppered with results marked with a asterisk symbol <span className="asterisk">*</span>, called "Asterisk Result" (sometimes called an easier to pronounce "Star Result"). This symbol can have the following effects:
                    <ul className="ul-no-top">
                        <li>It can mean an "additional loss" to an attacker (<span className="green-bold">ADDITIONAL LOSS</span>).</li>
                        <li>It can determine that the first loss distributed MUST be to an engineer or an armor unit. ( <span className="blue-bold">ENGINEER ATTRITION</span> or <span className="red-bold">ARMOR ATTRITION</span>)</li>
                    </ul>
                    And, sometimes, both can come into effect.
                </div>

                <span className="spacer1rem" />

                <div className="indented-box background-green">
                    <div className="indented-box-title"><span className="green-bold">ADDITIONAL LOSS</span> due to Asterisk (<span className="bigger-bold-text">*</span>) if:</div>
                    <ul>
                        <li>If the attack was made without Attack Supply.</li>
                        <li>If the attack was a Soviet Mandated Attack.</li>
                        <li>If the attack was against units protected by a non-destroyed Fortification (fortified line, or strongpoint).</li>
                    </ul>
                    <div className="pdiv">In the case of attacking across a Fortified Line, all attacking units must have attacked across a fortified line to have <span className="green-bold">ADDITIONAL LOSS</span> occur.</div>
                </div>

                <span className="spacer1rem" />
                <div>
                    These asterisk conditions are cumulative for <span className="green-bold">ADDITIONAL LOSS</span>. You could have two <span className="asterisk">*</span> results, or even three <span className="asterisk">*</span> if you hit the trifecta - your attacking force is (1) attacking without Attack Supply, doing so as a (2) Mandated Attacked, and into (3) fortifications.
                </div><div>
                    The extra step loss(es) caused by <span className="green-bold">ADDITIONAL LOSS</span> can be applied to any attacking units of your choosing.
                </div>

                <div className="subheader2">
                    <span className="blue-bold">ENGINEER ATTRITION</span> and <span className="red-bold">ARMOR ATTRITION</span>
                </div>
                <div>
                    If an asterisk is on the combat results, and there are attacking engineers or armor, then check the following cases to see if they apply:
                </div>
                <span className="spacer2rem" />

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

                <span className="spacer2rem" />

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


                <span className="spacer2rem" />


                <div>
                    <span className="green-bold">ADDITIONAL LOSS</span> can occur at the same time with <span className="blue-bold">ENGINEER ATTRITION</span> or <span className="red-bold">ARMOR ATTRITION</span>, if the qualifying conditions exist.
                </div><div>
                    <span className="blue-bold">ENGINEER ATTRITION</span> has precedence over <span className="red-bold">ARMOR ATTRITION</span>. If <span className="blue-bold">ENGINEER ATTRITION</span> occured - do not do <span className="red-bold">ARMOR ATTRITION</span>.
                </div><div>
                    Attacking units under an Additional Retreat order must still accept <span className="asterisk">*</span> results, when they apply. The benefit of Additional Retreat only subtracts 1 from any numerical step loss that is indicated in the result.
                </div>



                <span className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>16.4</span>
                    <div>Retreats</div>
                    <img src={retreat} alt="retreat" />
                </div>
                <span className="spacer1rem" />
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




                <span className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>16.5</span>
                    <div>Advances</div>
                    <img src={advance} alt="advance" />
                </div>
                <span className="spacer1rem" />
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

                <span className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>21.0</span>
                    <div>Soviet Surrender</div>
                    <img src={surrenderc} alt="advance" />
                </div>
                <span className="spacer1rem" />
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
                    <div>
                        The Soviet player gets benefit DRMs for: a) being within the command range of a HQ, b) the hex has a Guard or NKVD unit, c) the hex
                        is a city, d) the hex has a fortification.
                    </div><div>
                        The Soviet player gets negative DRMs if theres: a) a Emergency Supply marker, b) Out of Supply marker, c) only Militia and/or coastal artillery units.</div>

                </div>


                <span className="spacer2rem" />
                <div className="centered">
                    <img src={germanantitank1942east} alt="German anti-tank crew" />
                </div>

                <div className="subheader2">Additional Combat Rules</div>
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