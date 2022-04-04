import React, { useEffect } from 'react';
import Snap from 'snapsvg-cjs';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import BsrLink from "../BsrLink/BsrLink";
import combat from "../../../images/efs/combat/combat.jpg";
import joseph_stalin from "../../../images/efs/combat/joseph-stalin.jpg";
import combined_arms_bonus from "../../../images/efs/combat/combined_arms_bonus.jpg";
//import combined_arms_bonus_fr from "../../../images/efs/combat/combined_arms_bonus_fr.gif";
import divisional_integrity from "../../../images/efs/combat/divisional_integrity.jpg";
import german_engineer from "../../../images/efs/combat/german_engineer_motorized_120.png";
import soviet_engineer from "../../../images/efs/combat/soviet_engineer_120.png";
import artillery_units from "../../../images/efs/combat/artillery_strip_120.png";
import soviet_artillery_firing from "../../../images/efs/combat/soviet_artillery_firing.jpg";
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
import orders from "../../../images/efs/combat/orders_120.png";
import './Combat.scss';

const Combat = (props) => {

    useEffect(() => {
        // Your code here
        let paper = Snap('#exampleStickyAttack');
        let firefoxOnLinux = false
        if (navigator && navigator.appCodeName && navigator.appCodeName === 'Mozilla' && navigator.platform.includes('Linux') && !navigator.appVersion.includes('Chrome')) {
            firefoxOnLinux = true
        }

        paper.attr({ viewBox: "0, 0, 430, 401" });

        paper.rect(0, 320, 430, 75).attr({ fill: "#cceeff", stroke: "none", "opacity": 1 });
        let arrow_d = "M 0 -20, 24 4, 10 4, 10 30, -10 30, -10 4, -24 4 z"

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
            "fontSize": 25,
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

        if( firefoxOnLinux === true ) {
            standardTextCenteredAttr.fontSize = 22
            standardTextLeftAlignedAttr.fontSize = 22
        }

        let datauri = "data:image/png;base64,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"
        let declaredAttackMarker = paper.image(datauri, 0, 0, 92, 92)

        //let declaredAttackMarkertest = paper.image(datauri, 155, 95, 92, 92)

        let declaredMarkersArray = []
        let declaredAttack1 = paper.group()
        declaredAttack1.append(declaredAttackMarker)
        let declaredAttack2 = declaredAttack1.clone(true);
        declaredAttack1.attr({ opacity: 0 })
        declaredAttack2.attr({ opacity: 0 })
        declaredMarkersArray.push({
            group: declaredAttack1, fadeInDuration: 100, fadeOutDuration: 100, delay: 100, duration: 300,
            leaveVisible: true, terminate: false, animation: { type: "translate", startX: 0, startY: 0, endX: 48, endY: 150, duration: 300 }
        })
        declaredMarkersArray.push({
            group: declaredAttack2, fadeInDuration: 100, fadeOutDuration: 100, delay: 300, duration: 12000,
            terminate: true, animation: { type: "translate", startX: 0, startY: 0, endX: 152, endY: 91, duration: 300 }
        })


        var circleSovietDivision = paper.circle(99, 202, 60).attr({ stroke: "orange", strokeWidth: 5, fill: "orange", fillOpacity: 0.3 })
        var circleSovietAntiTank = paper.circle(204, 141, 60).attr({ stroke: "orange", strokeWidth: 5, fill: "orange", fillOpacity: 0.3 })
        let circleSovietGroup1 = paper.group()
        let circleSovietGroup2 = paper.group()
        circleSovietGroup1.append(circleSovietDivision)
        circleSovietGroup2.append(circleSovietAntiTank)
        circleSovietGroup1.attr({ opacity: 0 });
        circleSovietGroup2.attr({ opacity: 0 });
        let circleSovietGroupArray = []
        circleSovietGroupArray.push({ group: circleSovietGroup1, fadeInDuration: 100, fadeOutDuration: 0, delay: 3500, duration: 6000, leaveVisible: false, terminate: false })
        circleSovietGroupArray.push({ group: circleSovietGroup2, fadeInDuration: 100, fadeOutDuration: 0, delay: 2500, duration: 5000, leaveVisible: false, terminate: true })




        let text1 = paper.text(215, 358, "Attacking is voluntary...").attr(standardTextCenteredAttr)
        let g0 = paper.group()
        g0.attr({ opacity: 0 });
        g0.append(text1);

        let text2 = paper.text(215, 358, "but can be sticky.").attr(standardTextCenteredAttr)

        let g1 = paper.group()
        g1.append(text2);
        g1.attr({ opacity: 0 });


        var textIfThisPanzer = multitext(paper, 25, 342, "If this panzer regiment wants to attack this Soviet division,", 395, standardTextLeftAlignedAttr);
        var circlePanzerDivision = paper.circle(204, 261, 60).attr({ stroke: "red", strokeWidth: 5, fill: "#9999aa", fillOpacity: 0.3 })
        let g2 = paper.group()
        g2.append(textIfThisPanzer);
        g2.append(circlePanzerDivision)
        g2.attr({ opacity: 0 });


        var textThenTheAntiTank = multitext(paper, 25, 342, "then the anti-tank unit will also need to be attacked,", 395, standardTextLeftAlignedAttr);
        let g3 = paper.group()
        g3.append(textThenTheAntiTank);
        g3.attr({ opacity: 0 });


        var textBecauseTheAntiTank = multitext(paper, 25, 342, "because the anti-tank unit exerts its ZOC on a attacker's hex.", 390, standardTextLeftAlignedAttr);
        let g4 = paper.group()
        g4.append(textBecauseTheAntiTank);
        g4.attr({ opacity: 0 });

        var textEitherThePanzer = multitext(paper, 25, 342, "So either the panzer regiment attacks both units...", 390, standardTextLeftAlignedAttr);
        let g5 = paper.group()



        let arrowShadow2 = paper.path(arrow_d).attr({
            stroke: "black",
            strokeWidth: 3,
            strokeOpacity: 0.2,
            fill: "black",
            opacity: 0.5,
            'stroke-linejoin': "miter"
        });
        applyTranslation(arrowShadow2, 155, 226)
        applyRotation(arrowShadow2, 310)
        let arrow2 = paper.path(arrow_d).attr({
            stroke: "black",
            strokeWidth: 1,
            fill: "red",
            'stroke-linejoin': "miter",
        });
        applyTranslation(arrow2, 152, 223)
        applyRotation(arrow2, 310)


        let arrowShadow3 = paper.path(arrow_d).attr({
            stroke: "black",
            strokeWidth: 3,
            strokeOpacity: 0.2,
            fill: "black",
            opacity: 0.5,
            'stroke-linejoin': "miter"
        });
        applyTranslation(arrowShadow3, 208, 202)
        let arrow3 = paper.path(arrow_d).attr({
            stroke: "black",
            strokeWidth: 1,
            fill: "red",
            'stroke-linejoin': "miter",
        });
        applyTranslation(arrow3, 205, 199)

        g5.append(textEitherThePanzer);
        g5.append(arrowShadow2);
        g5.append(arrow2);
        g5.append(arrowShadow3);
        g5.append(arrow3);
        g5.attr({ opacity: 0 });

        var textOrTheEngineer = multitext(paper, 25, 342, "or the engineer unit helps out and attacks the anti-tank unit.", 390, standardTextLeftAlignedAttr);
        let g6 = paper.group()
        g6.append(textOrTheEngineer)

        var textNoteThat = multitext(paper, 25, 342, "Note that if the engineer unit is attacking the anti-tank unit...", 390, standardTextLeftAlignedAttr);
        // arrow pointing at the anti tank unit from the engineer unit
        let arrowShadow4 = paper.path(arrow_d).attr({
            stroke: "black",
            strokeWidth: 3,
            strokeOpacity: 0.2,
            fill: "black",
            opacity: 0.5,
            'stroke-linejoin': "miter"
        });
        let arrow4rotation = 310
        applyRotation(arrowShadow4, arrow4rotation)
        applyTranslation(arrowShadow4, 255, 169)
        let arrow4 = paper.path(arrow_d).attr({
            stroke: "black",
            strokeWidth: 1,
            fill: "red",
            'stroke-linejoin': "miter",
        });
        applyTranslation(arrow4, 255, 167)
        applyRotation(arrow4, arrow4rotation)

        g6.append(arrowShadow4)
        g6.append(arrow4)

        let g7 = paper.group()
        g7.append(textNoteThat)
        g7.append(arrowShadow4.clone())
        g7.append(arrow4.clone())
        g7.attr({ opacity: 0 })

        let declaredAttackEngineer1 = paper.group()
        declaredAttackEngineer1.append(declaredAttackMarker.clone())
        let declaredAttackEngineer2 = declaredAttackEngineer1.clone(true);
        declaredAttackEngineer1.attr({ opacity: 0 })
        declaredAttackEngineer2.attr({ opacity: 0 })

        let arrowFromEngineerToAntiTankGroup = paper.group()
        arrowFromEngineerToAntiTankGroup.append(arrowShadow4.clone())
        arrowFromEngineerToAntiTankGroup.append(arrow4.clone())
        arrowFromEngineerToAntiTankGroup.attr({ opacity: 0 })
        let arrowFromEngineerToAntiAirGroup = paper.group()
        let arrowShadowEngineerToAntiAir = paper.path(arrow_d).attr({
            stroke: "black",
            strokeWidth: 3,
            strokeOpacity: 0.2,
            fill: "black",
            opacity: 0.5,
            'stroke-linejoin': "miter"
        });
        applyTranslation(arrowShadowEngineerToAntiAir, 312, 140)
        let arrowEngineerToAntiAir = paper.path(arrow_d).attr({
            stroke: "black",
            strokeWidth: 1,
            fill: "red",
            'stroke-linejoin': "miter",
        });
        applyTranslation(arrowEngineerToAntiAir, 309, 137)
        arrowFromEngineerToAntiAirGroup.append(arrowShadowEngineerToAntiAir)
        arrowFromEngineerToAntiAirGroup.append(arrowEngineerToAntiAir)
        arrowFromEngineerToAntiAirGroup.attr({ opacity: 0 })
        let arrowsFromEngineerToBothAntiTankAndAntiAirArray = []
        arrowsFromEngineerToBothAntiTankAndAntiAirArray.push({ group: arrowFromEngineerToAntiTankGroup, fadeInDuration: 100, fadeOutDuration: 100, delay: 300, duration: 3700, leaveVisible: true, terminate: false })
        arrowsFromEngineerToBothAntiTankAndAntiAirArray.push({ group: arrowFromEngineerToAntiAirGroup, fadeInDuration: 100, fadeOutDuration: 100, delay: 300, duration: 2100, leaveVisible: true, terminate: false })


        let arrowFromEngineerToAntiTankGroupInReverse = paper.group()
        arrowFromEngineerToAntiTankGroupInReverse.append(arrowShadow4.clone())
        arrowFromEngineerToAntiTankGroupInReverse.append(arrow4.clone())
        arrowFromEngineerToAntiTankGroupInReverse.attr({ opacity: 0 })
        let arrowFromEngineerToAntiAirGroupInReverse = paper.group()
        arrowFromEngineerToAntiAirGroupInReverse.append(arrowShadowEngineerToAntiAir.clone())
        arrowFromEngineerToAntiAirGroupInReverse.append(arrowEngineerToAntiAir.clone())
        arrowFromEngineerToAntiAirGroupInReverse.attr({ opacity: 0 })

        let arrowsFromEngineerToBothAntiTankAndAntiAirInReverseArray = []
        arrowsFromEngineerToBothAntiTankAndAntiAirInReverseArray.push({ group: arrowFromEngineerToAntiAirGroupInReverse, fadeInDuration: 100, fadeOutDuration: 100, delay: 300, duration: 4000, leaveVisible: true, terminate: false })
        arrowsFromEngineerToBothAntiTankAndAntiAirInReverseArray.push({ group: arrowFromEngineerToAntiTankGroupInReverse, fadeInDuration: 100, fadeOutDuration: 100, delay: 300, duration: 5000, leaveVisible: true, terminate: true })


        //let declaredMarkersEngineerArray = []

        arrowsFromEngineerToBothAntiTankAndAntiAirArray.push({
            group: declaredAttackEngineer1, fadeInDuration: 100, fadeOutDuration: 100, delay: 100, duration: 300,
            leaveVisible: true, terminate: false, animation: { type: "translate", startX: 0, startY: 0, endX: 152, endY: 91, duration: 300 }
        })
        arrowsFromEngineerToBothAntiTankAndAntiAirArray.push({
            group: declaredAttackEngineer2, fadeInDuration: 100, fadeOutDuration: 100, delay: 300, duration: 3500,
            terminate: true, animation: { type: "translate", startX: 0, startY: 0, endX: 256, endY: 32, duration: 300 }
        })


















        //arrowFromEngineerToAntiTankGroup.attr({opacity: 0})

        // arrow pointing at the soviet division
        let arrowShadow5 = paper.path(arrow_d).attr({
            stroke: "black",
            strokeWidth: 3,
            strokeOpacity: 0.2,
            fill: "black",
            opacity: 0.5,
            'stroke-linejoin': "miter"
        });
        applyTranslation(arrowShadow5, 155, 226)
        applyRotation(arrowShadow5, 310)


        let arrow5 = paper.path(arrow_d).attr({
            stroke: "black",
            strokeWidth: 1,
            fill: "red",
            'stroke-linejoin': "miter",
        });
        applyTranslation(arrow5, 152, 223)
        applyRotation(arrow5, 310)
        g6.append(arrowShadow5)
        g6.append(arrow5)


        g6.attr({ opacity: 0 });




        var textHasNoZoc = multitext(paper, 33, 342, "it does not have to also attack the anti-air unit, because...", 390, standardTextLeftAlignedAttr);
        // arrow pointing at the anti-air unit from the engineer unit
        let arrowShadowToAntiAir = paper.path(arrow_d).attr({
            stroke: "black",
            strokeWidth: 3,
            strokeOpacity: 0.2,
            fill: "black",
            opacity: 0.5,
            'stroke-linejoin': "miter"
        });
        applyTranslation(arrowShadowToAntiAir, 312, 140)
        let arrowToAntiAir = paper.path(arrow_d).attr({
            stroke: "black",
            strokeWidth: 1,
            fill: "red",
            'stroke-linejoin': "miter",
        });
        applyTranslation(arrowToAntiAir, 309, 137)
        let g8 = paper.group()
        g8.append(textHasNoZoc)
        g8.append(arrowShadowToAntiAir)
        g8.append(arrowToAntiAir)
        g8.attr({ opacity: 0 })


        let g9 = paper.group()
        //var textHasNoZoc2 = multitext(paper, 33, 342, "the anti-air unit has no ZOC.", 390, standardTextLeftAlignedAttr);
        let textHasNoZoc2 = paper.text(215, 358, "the anti-air unit has no ZOC.").attr(standardTextCenteredAttr)
        g9.append(textHasNoZoc2)
        g9.attr({ opacity: 0 })

        let g10 = paper.group()
        var textSoItCanAttack = multitext(paper, 25, 342, "So the engineer unit can attack the anti-tank unit only, or...", 390, standardTextLeftAlignedAttr);
        g10.append(textSoItCanAttack)
        g10.attr({ opacity: 0 })

        let g11 = paper.group()
        var textOrBoth = multitext(paper, 33, 342, "both the anti-tank and the anti-air units.", 390, standardTextLeftAlignedAttr);
        g11.append(textOrBoth)
        g11.attr({ opacity: 0 })

        let noZocArrowBoxPath = 'M 10, 34 L 240 34, 240 20, 264 49, 240 75, 240 60, 10 60 z'
        let noZocArrowBoxShadow = paper.path(noZocArrowBoxPath).attr({
            stroke: "none",
            strokeWidth: 1,
            fill: "black",
            fillOpacity: 0.3,
            'stroke-linejoin': "miter"
        });
        let noZocArrowBox = noZocArrowBoxShadow.clone()
        noZocArrowBox.attr({
            stroke: "black",
            strokeWidth: 1,
            fill: "yellow",
            fillOpacity: 1,
            'stroke-linejoin': "miter"
        })
        noZocArrowBoxShadow.transform('t2,2')
        let noZocText = paper.text(128, 48, "Yellow box means NO ZOC").attr({ ...standardTextCenteredAttr, "fontSize": firefoxOnLinux ? 16: 18 })
        let noZocBoxGroup = paper.group()
        let noZocBoxGroupArray = []

        noZocBoxGroup.append(noZocArrowBoxShadow)
        noZocBoxGroup.append(noZocArrowBox)
        noZocBoxGroup.append(noZocText)
        noZocBoxGroup.attr({ opacity: 0 });

        noZocBoxGroupArray.push({
            group: noZocBoxGroup, fadeInDuration: 100, fadeOutDuration: 100, delay: 100, duration: 4100, terminate: true,
            animation: { type: "translate", startX: -200, startY: 0, endX: 0, endY: 0, duration: 300 }
        })




















        let ax, ay = 0
        let hr = 69
        let d = 'M '
        for (let degrees = 0; degrees < 360; degrees += 60) {
            ax = (Math.cos(degrees * (Math.PI / 180)) * hr)
            ay = (Math.sin(degrees * (Math.PI / 180)) * hr)
            d += roundFloat(ax, 2) + ' ' + roundFloat(ay, 2) + (d.includes('L') ? ' ' : ' L ')
        }
        d += 'z'
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
        groupArrayZoc.push({ group: zocGroup, fadeInDuration: 100, fadeOutDuration: 0, delay: 0, duration: 1000, leaveVisible: true, terminate: false })
        groupArrayZoc.push({
            group: zocGroup1, fadeInDuration: 100, fadeOutDuration: 0, delay: 1500, duration: 100, leaveVisible: true, terminate: false,
            animation: { type: "translate", startX: 207, startY: 143, endX: 103, endY: 83, duration: 300 }
        })
        groupArrayZoc.push({
            group: zocGroup2, fadeInDuration: 100, fadeOutDuration: 0, delay: 1500, duration: 100, leaveVisible: true, terminate: false,
            animation: { type: "translate", startX: 207, startY: 143, endX: 207, endY: 23, duration: 300 }
        })
        groupArrayZoc.push({
            group: zocGroup3, fadeInDuration: 100, fadeOutDuration: 0, delay: 1500, duration: 100, leaveVisible: true, terminate: false,
            animation: { type: "translate", startX: 207, startY: 143, endX: 311, endY: 83, duration: 300 }
        })
        groupArrayZoc.push({
            group: zocGroup4, fadeInDuration: 100, fadeOutDuration: 0, delay: 1500, duration: 100, leaveVisible: true, terminate: false,
            animation: { type: "translate", startX: 207, startY: 143, endX: 311, endY: 203, duration: 300 }
        })
        groupArrayZoc.push({
            group: zocGroup5, fadeInDuration: 100, fadeOutDuration: 0, delay: 1500, duration: 100, leaveVisible: true, terminate: false,
            animation: { type: "translate", startX: 207, startY: 143, endX: 207, endY: 263, duration: 300 }
        })
        groupArrayZoc.push({
            group: zocGroup6, fadeInDuration: 100, fadeOutDuration: 0, delay: 1500, duration: 4600, terminate: true,
            animation: { type: "translate", startX: 207, startY: 143, endX: 102, endY: 203, duration: 300 }
        })




        let groupArray2 = []


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

        groupArray2.push({ group: g2_0, fadeInDuration: 100, fadeOutDuration: 100, delay: 100, duration: 11000, terminate: true })



        let g12 = paper.group()
        var textOnTheOtherHand = multitext(paper, 25, 342, "On the other hand, if the engineer wants to attack only the anti-air...", 390, standardTextLeftAlignedAttr);
        g12.append(textOnTheOtherHand)
        let arrowEngineerToAntiAir2 = arrowEngineerToAntiAir.clone()
        g12.append(arrowEngineerToAntiAir2)
        g12.attr({ opacity: 0 })

        let g13 = paper.group()
        var textItWillHaveToAttack = multitext(paper, 25, 342, "it will also have to attack the anti-tank unit - it is projecting ZOC.", 390, standardTextLeftAlignedAttr);
        g13.append(textItWillHaveToAttack)
        g13.attr({ opacity: 0 })

        let groupArray = []
        groupArray.push({ group: g0, fadeInDuration: 100, fadeOutDuration: 100, delay: 300, duration: 3000, terminate: false })
        groupArray.push({ group: g1, fadeInDuration: 100, fadeOutDuration: 100, delay: 300, duration: 3000, terminate: false })
        groupArray.push({ group: g2, fadeInDuration: 100, fadeOutDuration: 0, delay: 600, duration: 6000, terminate: false, spawnChildGroupArray: circleSovietGroupArray })
        groupArray.push({ group: g3, fadeInDuration: 0, fadeOutDuration: 100, delay: 300, duration: 4000, terminate: false, spawnChildGroupArray: groupArray2 })
        groupArray.push({ group: g4, fadeInDuration: 100, fadeOutDuration: 100, delay: 300, duration: 9000, terminate: false, spawnChildGroupArray: groupArrayZoc, spawnChildGroupArrayDelay: 1500 })
        groupArray.push({ group: g5, fadeInDuration: 100, fadeOutDuration: 100, delay: 600, duration: 5000, terminate: false, spawnChildGroupArray: declaredMarkersArray, spawnChildGroupArrayDelay: 800 })
        groupArray.push({ group: g6, fadeInDuration: 100, fadeOutDuration: 100, delay: 300, duration: 8000, terminate: false })
        groupArray.push({ group: g7, fadeInDuration: 100, fadeOutDuration: 100, delay: 600, duration: 5000, terminate: false })
        groupArray.push({ group: g8, fadeInDuration: 100, fadeOutDuration: 100, delay: 600, duration: 5000, terminate: false })
        groupArray.push({ group: g9, fadeInDuration: 100, fadeOutDuration: 100, delay: 600, duration: 5000, terminate: false, spawnChildGroupArray: noZocBoxGroupArray, spawnChildGroupArrayDelay: 1000 })
        groupArray.push({ group: g10, fadeInDuration: 100, fadeOutDuration: 100, delay: 600, duration: 5000, terminate: false, spawnChildGroupArray: arrowsFromEngineerToBothAntiTankAndAntiAirArray, spawnChildGroupArrayDelay: 1500 })
        groupArray.push({ group: g11, fadeInDuration: 100, fadeOutDuration: 100, delay: 600, duration: 6000, terminate: false })
        groupArray.push({ group: g12, fadeInDuration: 100, fadeOutDuration: 100, delay: 600, duration: 6000, terminate: false, spawnChildGroupArray: arrowsFromEngineerToBothAntiTankAndAntiAirInReverseArray, spawnChildGroupArrayDelay: 3000 })
        groupArray.push({ group: g13, fadeInDuration: 100, fadeOutDuration: 100, delay: 600, duration: 6000, terminate: false })
        /*
        , spawnChildGroupArray: groupArrayZoc
        , spawnChildGroupArray: groupArray2
        
        */



        const activateGroup = (groupArray, index) => {
            let duration = groupArray[index].duration
            groupArray.forEach((g, gIndex) => {
                if (gIndex === index) {

                    //animation: { type: "translate", startX: 0, startY: 0, endX: 150, endY: 200, duration: 300 }
                    if (g.animation) {
                        g.group.attr({ opacity: 1 })
                        let endX = g.animation.endX
                        let endY = g.animation.endY
                        let startX = g.animation.startX
                        let startY = g.animation.startY
                        let duration = g.animation.duration
                        g.group.transform('T' + + startX + ',' + startY);
                        g.group.animate({ transform: 'T' + endX + ',' + endY }, duration)

                    }
                    else {
                        setTimeout(() => g.group.animate({ opacity: 1 }, g.fadeInDuration), g.delay)
                    }




                    if (g.spawnChildGroupArray && g.spawnChildGroupArray !== undefined) {
                        if (g.spawnChildGroupArrayDelay) {
                            setTimeout(() => activateGroup(g.spawnChildGroupArray, 0), g.spawnChildGroupArrayDelay)
                        }
                        else {
                            activateGroup(g.spawnChildGroupArray, 0)
                        }
                    }
                }
                else {
                    if (g.leaveVisible && g.leaveVisible === true) {
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
                    groupArray.forEach(gTerminate => {
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

        // we can get svg to write a single space character, so we need to derive the width of a space character.
        //var letterA = paper.text(x, y, 'a').attr(attributes);
        //let letterAwidth = letterA.getBBox().width
        //var letterB = paper.text(x, y, 'b').attr(attributes);
        //let letterBwidth = letterB.getBBox().width
        //var letterA_B = paper.text(x, y, 'a b').attr(attributes);
        //let letterA_bwidth = letterA_B.getBBox().width
        //let spaceWidth = letterA_bwidth - (letterAwidth + letterBwidth)
        //letterA.remove()
        //letterB.remove()
        //letterA_B.remove()

        // break text into array
        let wordsArray = txt.split(' ')
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
                    <div>Combat (high level) overview</div>
                </div>
                <div>

                    Each turn, there is a combat phase for each player.
                    These combat phases are where most of the fighting occurs between player's ground units (units such as infantry, tanks, cavalry, etc). and they can be
                    aided by air, artillery, and naval assets which can only participate in combat if it was a combat initiated by ground units.
                    <span className="spacer0_5rem" />
                    There can be air-to-air combat, or ground-to-air (anti air assets), but these are handled in the combat sequence. Air units and artillery units never
                    attack each other unless its in the context of a ground combat with ground units.
                    <span className="spacer0_5rem" />
                    <div className="rules-note">
                        There is a mechanism called "overrun" which is a type of attack that occurs during a movement phase,
                        but that is a special form of combat that is considered more a function of movement rather than strictly "combat" (although the general rules for combat do apply). See the
                        Movement section for info on overrun.
                    </div>
                    <span className="spacer0_5rem" />
                    Combat can only occur between unit(s) that are in hexes adjacent to each other. Additional units such as artillery units and air units can participate without
                    being adjacent to the hex being attacked. But you will need combat units "on the ground" adjacent to an enemy occupied hex in order to declare an attack.
                    <span className="spacer0_5rem" />
                    In order to be able to declare an attack for the Combat Phase, the active player will need to have at least
                    one unit with a non-zero attack value.
                    <span className="spacer0_5rem" />
                    Once the phasing player has decided on which hexes will be getting attacked, that player places
                    a "Declared Attack" marker on each of them.
                    <span className="spacer0_5rem" />
                    <div className="rules-note">
                        The Declared Attack markers have numbers on them, but those are just for reference so the players can easily say "next I'm doing
                        Declared Attack number 7", etc
                    </div>

                    <span className="spacer0_5rem" />
                    For attacking units to perform at their best, they will need to be supplied with an Attack Supply point (ASP).
                    However, Attack Supply is not required, and units can still
                    attack without having Attack Supply being expended.
                    <span className="spacer0_5rem" />
                    Defending units do not need to use Attack Supply, except for artillery units
                    which can be in a special state called a "Limited Artillery Supply" condition.<BsrLink page="33" rule="13.5" />
                    <span className="spacer0_5rem" />
                    Flotillas and Armored Trains are not affected by lack of Attack Supply.<BsrLink page="39" rule="15.22" />
                    <span className="spacer0_5rem" />
                    Air units do not use Attack Supply.
                    <span className="spacer0_5rem" />
                    Attacking units that are marked Out of Supply get to ignore any Out of Supply effects during a combat, if they are being allocated Attack Supply.<BsrLink page="39" rule="15.21" />
                    <span className="spacer0_5rem" />
                    After the phasing player is done placing all the Declared Attack markers, then the defender will have a (limited) ability to
                    respond to the attacks. Some of those options are reaction movement, artillery allocation, air support.
                    <span className="spacer0_5rem" />
                    Then each combat is done one by one. Combat involves counting up attack and defense factors, incorporating any terrain effects,
                    any Out of Supply effects, and air support if any.
                    Then the "odds" are calculated, for example: 17 attacking factors against 6 defending factors will result in odds of 2-1 (whole numbers
                    only, fractions are dropped).
                    <span className="spacer0_5rem" />
                    Higher odds are better for the attacker, lower odds are better for the defender.
                    <span className="spacer0_5rem" />
                    Then the Combat Table is referenced, the attacker rolls a die, then after adding or subtracting any
                    die roll modifiers (DRMs), the result of the combat is cross referenced. The odds will be a column on the table, and the die roll
                    result is a row. Where they intersect - are the results.
                    <span className="spacer0_5rem" />
                    Higher die rolls are better for the defender, lower die rolls are better for the attacker (generally). A "0" on the ten-sided die represents
                    0 (zero), not 10.
                    <span className="spacer0_5rem" />
                    The results can be step losses (units get weaker) or eliminated, and possibly retreats (units run away 2 hexes). The attackers can often
                    advance into a Defender hex, if the defenders were all eliminated or retreated.
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
                    it can lead to 2 or more attacks that also need to be declared.
                </div>


                <div className="subheader-n-images">
                    <div>Multiple-Hex Attacks<BsrLink page="29" rule="12.17" /></div>

                </div>
                <div>

                    In most cases combats will be between one enemy occupied hex and an adjacent enemy occupied hex. However
                    there can be multiple-hex attacks that are "one" Declared Attack. The requirements are that all attacking units are adjacent to all defending units.
                    Any artillery participating with support only need to be able to reach one of the hexes involved in the
                    multi-hex combat.
                </div>

                <span className="spacer0_5rem" />

                <div>



                    <div className="subheader-n-images">
                        <div>Combat procedure</div>
                        <img src={declared_attack} alt="declared attack counter" />
                    </div>

                    <ol>
                        <li><b>Attack Declaration<BsrLink page="28" rule="12.1" /></b> - The attacker declares any enemy occupied hexes that will be attacked, and places a Attack marker on each of them.
                            <span className="spacer0_5rem" />
                            A hex with an Attack marker on it is called a Defender hex, for this combat phase.
                            <span className="spacer0_5rem" />
                            To be able to declare an attack, the active player must have attack-eligible units adjacent to enemy units, in terrain (and across hexsides) that the attacking
                            units can normally move into.
                            <span className="spacer0_5rem" />
                            All units are eligible to attack except:
                            <ul className="bare-ui">
                                <li>Units with zero attack strength.</li>
                                <li>Flotillas during Storm.</li>
                                <li>Untried units.</li>
                                <li>Units with a zero attack strength. </li>
                            </ul>
                            <span className="spacer1rem" />
                        </li>
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
                                <div className="indented-box-title">Defender artillery designation<BsrLink page="31" rule="13.0" /></div>
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

                            <span className="spacer0_5rem" />

                            <div className="indented-box background-pink">
                                <div className="indented-box-title">Orders Markers<BsrLink page="30" rule="12.5" /></div>
                                There are two kinds of orders, which affect the combat results by providing a DRM and other effects.
                                <span className="spacer0_5rem" />
                                No Retreat -
                                <ul className="bare-ul">
                                    <li>Unit(s) with a No Retreat order do not retreat.</li>
                                    <li>The No Retreat order confers a +1 DRM on the combat die roll.</li>
                                    <li>If a retreat result occurs, the units suffer a step loss (above any numeric step losses specified).</li>
                                </ul>
                                <span className="spacer0_5rem" />
                                Addtional Retreat -
                                <ul className="bare-ul">
                                    <li>Unit(s) with an Additional Retreat order retreat 3 hexes instead of 2, <b>if</b> the combat result has a retreat results for the unit(s) that had the order.</li>
                                    <li>If the combat result
                                        has a retreat result and a numeric loss result, the unit(s) with the Additional Retreat order suffer one less step loss.</li>
                                    <li>Attacking units with an Additional Retreat order on them cannot advance after combat.</li>
                                    <li>If the units with the Additional Retreat order are retreating - the opposing player gets to retreat them. However, they cannot be retreated on a path that causes any additional loss, if there are better alternatives.
                                    </li>
                                    <li>Units under an Additional Retreat order cannot retreat through enemy ZOC, unless a friendly unit(s) is in the hex(es) in enemy ZOC.</li>
                                </ul>


                                <div className="normal-text-n-images bold">
                                    <div>Orders Placement<BsrLink page="30" rule="12.53" /></div>
                                    <img src={orders} alt="orders marker" />
                                </div>

                                <span className="spacer0_5rem" />
                                In the Reaction Phase, the defender will decide first, if orders will be issued. Orders are placed face down (hidden).
                                <span className="spacer0_5rem" />
                                The defender can only place orders where there are Declared Attack markers, and if the requirements for placing an order are met.
                                <span className="spacer0_5rem" />
                                The attacker can then place orders for Declared Attacks where the defender has placed an order.
                                <span className="spacer0_5rem" />
                                For the defender to place an order, the defender hex must contain eligible terrain
                                (for multiple-hex combat, if any of the hexes contain eligible terrain):
                                <ol>
                                    <li>woods</li>
                                    <li>alpine</li>
                                    <li>mountain</li>
                                    <li>city or Major City</li>
                                    <li>any kind of friendly fortification, except Citadel<BsrLink page="50" rule="18.5" /></li>
                                    <li>town, when the weather gives the town a DRM for defense</li>
                                </ol>
                                <span className="spacer0_5rem" />
                                For the attacker to place an order:
                                <ul>
                                    <li>The defender hex has an order on it. The terrain the attackers are in doesn't matter.</li>
                                    <li>The Additional Retreat order cannot be placed on hexes where Mud conditions apply.</li>
                                    <li>Orders cannot be placed in a enemy air Zone of Interdiction.</li>
                                </ul>
                                <span className="spacer0_5rem" />
                                Soviet restrictions on order placement<BsrLink page="31" rule="12.54" />:<br />
                                <ul>
                                    <li>Soviet Orders require a Soviet HQ with at least one command point, and which is in range of at least one hex of friendly
                                        units involved in combat. A Non-Op HQ will, of course, prevent the placement of orders, within its command range.
                                    </li>
                                    <li>
                                        If a NKVD unit(s) is in qualifying terrain in a Defender hex, it automatically issues a No Retreat order, regardless of any Non-Op HQ in range.
                                        However, a HQ with at least one command point can remove the No Retreat order which was placed by a NKVD.
                                    </li>
                                </ul>

                                <span className="spacer1rem" />
                                <div className="box-with-image-to-left">
                                    <div>Effects of the No Retreat order</div>
                                    <div className="two-column-flex counter-left">
                                        <img src={counter_no_retreat} style={{ width: "auto" }} alt="counter no retreat order" />
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

                                <div className="box-with-image-to-left">
                                    <div>Effects of the Additional Retreat order</div>
                                    <div className="two-column-flex counter-left">
                                        <img src={counter_additional_retreat} alt="counter additional retreat order" />
                                        <div>
                                            <ul>
                                                <li>Units that get a R result and are under an Additional Retreat order retreat 3 hexes instead of 2. Units can only retreat on a "R" or "Rn" result.</li>
                                                <li>Retreat path is determined by non-owner. Units must be retreated through a path that does not result in step loss, if possible.</li>
                                                <li>Units retreating under Additional Retreat cannot retreat through even one uncontested enemy ZOC. If forced to they are eliminated.</li>
                                                <li>If there is a numerical step loss in addition to the R result, the units suffer one less step loss.</li>
                                                <li>Attackers with an Additional Retreat order cannot advance if the defender vacates the Defender hex.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>



                            </div>


                        </li>

                    </ol>
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