import React, { useEffect, useState } from 'react';
import { useSignal } from "@preact/signals-react"
import Snap from 'snapsvg-cjs';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import BsrLink from "../BsrLink/BsrLink";
import barrels from "../../../images/efs/supply/barrels.gif";
import efs_minsk_map from "../../../images/efs/supply/efs_minsk_map.jpg"
import efs_minsk_map_motorway from "../../../images/efs/supply/efs_minsk_map_motorway.jpg";
import efs_minsk_map_roads from "../../../images/efs/supply/efs_minsk_roads.jpg";
import efs_minsk_map_minorRoads from "../../../images/efs/supply/efs_minsk_map_minorRoads.jpg";
import efs_minsk_map_rail from "../../../images/efs/supply/efs_minsk_map_rail.jpg";
import efs_minsk_map_rail_glow from "../../../images/efs/supply/efs_minsk_map_rail_glow.jpg";
import town_connect from "../../../images/efs/supply/town_connect.jpg";
import town_connected from "../../../images/efs/supply/town_connected.jpg";
import town_connect2 from "../../../images/efs/supply/town_connect2.jpg";
import town_connected2 from "../../../images/efs/supply/town_connected2.jpg";
import town_connect3 from "../../../images/efs/supply/town_connect3.jpg";
import town_connected3 from "../../../images/efs/supply/town_connected3.jpg";
import german_infantry_unit from "../../../images/efs/supply/german_infantry_division_120.jpg";
import german_antiair_unit from "../../../images/efs/supply/german_antiair_120.jpg";
import soviet_cavalry_unit from "../../../images/efs/supply/soviet_cavalry_division_120.jpg";
import soviet_mdno_unit from "../../../images/efs/supply/soviet_mdno_division_120.jpg";
import soviet_infantry_unit from "../../../images/efs/supply/soviet_infantry_division_120.jpg";
import soviet_armor_unit from "../../../images/efs/supply/soviet_armor_division_120.jpg";
import german_rail_end from "../../../images/efs/supply/german_rail_end_120.jpg";
import emergencySupply from "../../../images/efs/supply/emergency_supply.jpg";
import outOfSupply from "../../../images/efs/supply/out_of_supply.jpg";
import sovietRailBreak from "../../../images/efs/supply/soviet_rail_break_120.jpg";
import majorRiver from "../../../images/efs/supply/river_311x110.jpg";
import swampMinorRoad from "../../../images/efs/supply/swampMinorRoadHex_230x194.jpg";
import sovietStrongpoint from "../../../images/efs/supply/soviet_strongpoint_120.jpg";
import sovietCombatSupply from "../../../images/efs/supply/soviet_combat_supply_120.jpg";
import sovietDump from "../../../images/efs/supply/soviet_dump_120.jpg";
import germanSupply from "../../../images/efs/supply/german_supply_600x378.jpg";
import './Supply.scss';
let mina = window.mina


const Supply = (props) => {
    const [paper, setPaper] = useState(null)
    const sgStoryBoard = useSignal([]);
    const sgLastPageGroup = useSignal(null);
    const sgDimensions = useSignal({ width: 0, height: 0 });
    const sgAxisCombatUnit = useSignal(null);
    const sgSovietCombatUnit = useSignal(null);
    const sgAxisRailEndUnit = useSignal(null);
    const sgSovietMdnoUnit = useSignal(null);
    const sgSovietInfantryUnit = useSignal(null);
    const sgSovietArmorUnit = useSignal(null);
    const sgZocGroup = useSignal(null)
    const sgSunGroup = useSignal(null)
    const sgSovietRailBreak = useSignal(null)
    const sgTimers = useSignal([])
    const sgMudRoadIndicators = useSignal([])
    const sgBackgroundImage = useSignal(null)
    const sgPlayPauseStatus = useSignal('play') // play, paused
    const sgUseTextSize = useSignal(45)
    const sgUseLineBreak = useSignal(20)
    const sgEmergencySupplyMarker = useSignal(null)
    const sgShadowFilter = useSignal(null)
    const sgCrossBrowserFontSizeRatio = useSignal(1)
    const sgMudWeatherGroup = useSignal(null)
    const sgSupplyCircle = useSignal(null)

    let textAttrs = {
        "textAnchor": "left",
        "dominant-baseline": "central",
        "fontSize": 50 * sgCrossBrowserFontSizeRatio.value,
        "fontWeight": "bold",
        "fontFamily": "serif",
        stroke: "none",
        fill: "black",
        opacity: 0,
    }
    let textRectAttrs = {
        fill: "#ddffff",
        strokeWidth: 1,
        stroke: "black",
        opacity: 0
    }

    useEffect(() => {
        let _paper = Snap('#supply_examples');
        if (_paper) {
            setPaper(_paper)
        }
        return () => {
            if (paper) {
                paper.clear()
                setPaper(null)
            }
        }
    }, []);

    useEffect(() => {
        if (paper) {
            setupStoryboard()
        }
        else {
            let _paper = Snap('#supply_examples');
            if (_paper) {
                setPaper(_paper)
            }
        }
    }, [paper])

    window.addEventListener('resize', function () {
        // Perform actions like adjusting layout
        if (sgBackgroundImage.value) {
            var dimensions = sgBackgroundImage.value.node.getBoundingClientRect();
            sgDimensions.value = { width: dimensions.width, height: dimensions.height }
        }
    });

    const testTextWidth = g => {
        let text = 'abcdefg hijklmnop, , $()!@#$% qrst uvwxyz ABCDEF GHIJK LMNOP_ -QRS TUVWXYZ 01234 56789'
        let textLine = g.text(0, 0, text).attr({
            "textAnchor": "start",
            "dominant-baseline": "text-before-edge",
            "fontSize": 45,
            "fontWeight": "bold",
            "fontFamily": "serif",
            opacity: 0
        })

        let bbox = textLine.getBBox()
        sgCrossBrowserFontSizeRatio.value = 45 / bbox.height
        let useTextSizeRatio = 1707 / bbox.width
        let useTextSize = Math.round(45 * useTextSizeRatio)
        sgUseTextSize.value = useTextSize
        sgUseLineBreak.value = 50 * sgCrossBrowserFontSizeRatio.value// Math.round(useTextHeight) + 10
    }

    const registerTimer = (fn, timeout) => {
        const msStart = Date.now();
        let timerId = setTimeout(() => {
            if (sgPlayPauseStatus.value === 'play') {
                fn.call()
                let idx = sgTimers.value.findIndex(t => t.timerId === timerId)
                sgTimers.value.splice(idx, 1)
            }
        }, timeout)
        sgTimers.value.push({ timerId, timeout, msStart, running: true, fn })
    }

    const setupStoryboard = () => {
        testTextWidth(paper.g())
        sgBackgroundImage.value = paper.image(efs_minsk_map, 0, 0, 0, 0);
        sgBackgroundImage.value.attr({
            'xlink:href': efs_minsk_map,
            'width': '100%',
            'height': '100%',
            'opacity': 1
        });

        var dimensions = sgBackgroundImage.value.node.getBoundingClientRect();
        sgDimensions.value = { width: dimensions.width, height: dimensions.height }

        const showPlayPauseButton = () => {
            let g = paper.group()

            let pauseBar1 = g.rect("96.7%", "92.9%", "0.8%", "4.8%").attr({
                fill: "black",
                strokeWidth: 0,
            })
            let pauseBar2 = g.rect("97.9%", "92.9%", "0.8%", "4.8%").attr({
                fill: "black",
                strokeWidth: 0,
            })
            let pauseWrapper = g.rect("96.5%", "92.5%", "2.4%", "5.6%").attr({
                fill: "transparent",
                strokeWidth: 0,
            })
            let pauseButton = g.group(pauseBar1, pauseBar2, pauseWrapper).click(() => {
                if (sgPlayPauseStatus.value === 'play') {
                    sgPlayPauseStatus.value = 'pause'
                    playButton.attr({
                        visibility: "visible",
                        pointerEvents: "visiblePainted",
                        opacity: 1
                    })
                    pauseButton.attr({
                        visibility: "hidden",
                        pointerEvents: "none"
                    })

                }
            }).attr({ cursor: "pointer" })



            // let playButton = playGroup.group(playLine1, playLine2, playLine3)
            let playGroup = g.group()
            let playLine1 = playGroup.line("96.8%", "93.1%", "98.9%", "95.3%").attr({
                stroke: "blue",
                strokeWidth: 3,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
            })
            let playLine2 = playGroup.line("96.8%", "97.5%", "98.9%", "95.3%").attr({
                stroke: "blue",
                strokeWidth: 3,
                //strokeLinecap: "miter",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
            })
            let playLine3 = playGroup.line("96.8%", "97.5%", "96.8%", "93.1%").attr({
                stroke: "blue",
                strokeWidth: 3,
                //strokeLinecap: "miter",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10
            })
            let playButton = playGroup.group(playLine1, playLine2, playLine3)
            for (let i = 932; i < 975; i++) {
                let nextLine = playGroup.line("96.8%", `${i / 10}%`, "98.9%", "95.3%").attr({
                    stroke: "blue",
                    strokeWidth: 2,
                })
                playButton.add(nextLine)
            }


            playButton.click(() => {
                if (sgPlayPauseStatus.value === 'pause') {
                    sgPlayPauseStatus.value = 'play'
                    pauseButton.attr({
                        visibility: "visible",
                        pointerEvents: "visiblePainted"
                    })
                    playButton.attr({
                        visibility: "hidden",
                        pointerEvents: "none"
                    })
                    restartTimers()
                }
                else {
                    sgPlayPauseStatus.value = 'pause'
                    playButton.attr({
                        visibility: "visible",
                        pointerEvents: "visiblePainted",
                        opacity: 1
                    })
                    pauseButton.attr({
                        visibility: "hidden",
                        pointerEvents: "none"
                    })
                    pauseTimers()
                }
            })

            setTimeout(() => {
                playButton.attr({
                    opacity: 0
                })
            }, 10)

            playButton.attr({ cursor: "pointer" })

        }

        showPlayPauseButton(paper.group());

        const showPageNumber = (g, pageInt) => {
            // let pageNumber = g.text(1700, 800, pageInt).attr({
            //     "textAnchor": "middle",
            //     "dominant-baseline": "central",
            //     "fontSize": 45,
            //     "fontWeight": "bold",
            //     "fontFamily": "serif",
            //     stroke: "none",
            //     fill: "black",
            //     opacity: 0.5,
            // })
            // setTimeout(() => {
            //     pageNumber.remove()
            // }, 3000)
        }

        setInterval(() => {
            if (sgTimers.value.length > 0) {
                sgTimers.value.forEach(t => {
                    if (t.running) {
                        let now = Date.now()
                        let elapsed = now - t.msStart
                        let timeLeft = t.timeout - elapsed
                        if (timeLeft < 0) {
                            timeLeft = 0
                        }
                        t.timeLeft = timeLeft
                    }
                })
            }
        }, 100)

        const restartTimers = () => {
            sgPlayPauseStatus.value = 'play'
            if (sgTimers.value.length > 0) {
                sgTimers.value.forEach(t => {
                    if (!t.running) {
                        registerTimer(t.fn, t.timeLeft)
                    }
                })
            }
        }

        const pauseTimers = () => {
            sgPlayPauseStatus.value = 'pause'
            if (sgTimers.value.length > 0) {
                sgTimers.value.forEach(t => {
                    if (t.running) {
                        let now = Date.now()
                        let elapsed = now - t.msStart
                        let timeLeft = t.timeout - elapsed
                        if (timeLeft < 0) {
                            timeLeft = 0
                        }
                        t.timeLeft = timeLeft
                        clearTimeout(t.timerId)
                        t.timerId = null
                        t.running = false
                    }
                })
            }
        }

        const textBox = (g, text, x, y, delay = 500, removeTimeout = 4000, extraRight = 0, extraBottom = 0, extraLeft = 0) => {
            let textBoxGroup = g.group()
            let textLinesGroup = g.group()
            let textLines = text.split('\n')
            let textX = x + extraLeft
            let textY = y
            textLines.forEach((line, idx) => {
                let textLine = g.text(textX, textY, line).attr({
                    "textAnchor": "start",
                    "dominant-baseline": "text-before-edge",
                    "fontSize": sgUseTextSize.value,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    opacity: 1
                })
                textLinesGroup.add(textLine)
                textY += sgUseLineBreak.value
            })
            let bbox = textLinesGroup.getBBox()
            textLinesGroup.remove()
            let borderPadding = 24
            let textBoxEl = g.rect(x - borderPadding, y - borderPadding,
                bbox.width + (2 * borderPadding) + extraRight + extraLeft,
                bbox.height + (1.9 * borderPadding) + extraBottom).attr({ ...textRectAttrs, opacity: 1 });

            textBoxGroup.add(textBoxEl, textLinesGroup)
            textBoxGroup.attr({ opacity: 0 })
            registerTimer(() => {
                textBoxGroup.animate({ opacity: 1 }, 500);
            }, delay)
            if (removeTimeout > 0) {
                registerTimer(() => {
                    textBoxGroup.animate({ opacity: 0 }, 500);
                    registerTimer(() => {
                        textBoxGroup.remove()
                    }, 500)
                }, removeTimeout - 500)
            }

            return textBoxGroup.getBBox()
        }

        let page1 = {
            label: 'intro',
            pageInt: 1,
            delay: 1100,
            duration: 5000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "1")
                textBox(g, "This is a map sample from EFS", 54, 53, 300, 4500)

                return { discrete: g, percentage: null }
            }
        }

        let page1b = {
            label: 'description',
            pageInt: '1b',
            delay: 1100,
            duration: 5000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "1b")
                textBox(g,
                    "Let's look at the map features that are important for supply.",
                    54, 53, 300, 4500)

                return { discrete: g, percentage: null }
            }
        }

        let page2 = {
            label: 'fade in main road',
            pageInt: 2,
            delay: 0,
            duration: 5000,
            remove: true,
            async: true,
            fn: () => {
                // let g2 = paper.g()
                // let g = paper.g()
                // showPageNumber(g, "2")
                // sgLastPageGroup.value = g
                // var image2 = g2.image(efs_minsk_map_motorway, 0, 0, 0, 0);
                // image2.attr({
                //     'xlink:href': efs_minsk_map_motorway,
                //     'width': "100%",
                //     'height': "100%",
                //     'opacity': 0
                // });

                // let zocText = g.text(310, 360, "Motorway").attr(textAttrs)
                // let rotateGroup = g.g();

                // let arrow2 = rotateGroup.path("M 0,0 L 18,8 L 0,18 Z").attr({
                //     fill: "red",
                //     "strokeWidth": 1,
                //     stroke: "black",
                //     opacity: 1,
                //     transform: `t475, 420 s3, 3`
                // });

                // arrow2.animate({ transform: `s3 t480, 420` }, 500);
                // rotateGroup.transform(`r33`)

                // registerTimer(() => {
                //     image2.animate({ opacity: 1 }, 500);
                //     sgBackgroundImage.value.animate({ opacity: 0 }, 500);
                // }, 100);

                // registerTimer(() => {
                //     image2.animate({ opacity: 0 }, 500);
                //     sgBackgroundImage.value.animate({ opacity: 1 }, 500);
                // }, 4500)

                // registerTimer(() => {
                //     image2.remove()
                // }, 5000)

                // zocText.animate({ opacity: 1 }, 500);
                // registerTimer(() => {
                //     zocText.animate({ opacity: 0 }, 500);
                // }, 4500)

                // registerTimer(() => {
                //     rotateGroup.animate({ opacity: 0 }, 500);
                // }, 4500)

                // return { discrete: g, percentage: g2 }

                let g2 = paper.g()
                let g = paper.g()
                showPageNumber(g, "2")
                sgLastPageGroup.value = g


                sgBackgroundImage.value.animate({ opacity: 0 }, 500);
                var roadsImage = g2.image(efs_minsk_map_motorway, 0, 0, 0, 0);
                roadsImage.attr({
                    'xlink:href': efs_minsk_map_motorway,
                    'width': "100%",
                    'height': "100%",
                    'opacity': 0
                });
                roadsImage.animate({ opacity: 1 }, 500);
                let roadText = g.text(319, 344, "Motorway").attr(textAttrs)
                roadText.animate({ opacity: 1 }, 500);
                let arrow = g.path("M 0,0 L 18,8 L 0,18 0,12, -8,12, -8,6, 0,6 Z").attr({
                    fill: "red",
                    "strokeWidth": 1,
                    stroke: "black",
                    opacity: 1,
                    transform: `t440, 396, s3, r45`
                });
                let arrowGroup = g.g(arrow)
                arrowGroup.animate({ transform: `t38, 36` }, 500);

                registerTimer(() => {
                    roadText.animate({ opacity: 0 }, 500);
                    sgBackgroundImage.value.animate({ opacity: 1 }, 500);
                    arrowGroup.animate({ opacity: 0 }, 500);
                    roadsImage.animate({ opacity: 0 }, 500);
                    registerTimer(() => {
                        roadsImage.remove()
                    }, 500)
                }, 4500)

                return { discrete: g, percentage: g2 }

            }
        }

        let page3 = {
            label: 'fade in road',
            pageInt: 3,
            delay: 0,
            duration: 6000,
            remove: true,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()
                showPageNumber(g, "3")
                sgLastPageGroup.value = g


                sgBackgroundImage.value.animate({ opacity: 0 }, 500);
                var roadsImage = g2.image(efs_minsk_map_roads, 0, 0, 0, 0);
                roadsImage.attr({
                    'xlink:href': efs_minsk_map_roads,
                    'width': "100%",
                    'height': "100%",
                    'opacity': 0
                });
                roadsImage.animate({ opacity: 1 }, 500);
                let roadText = g.text(319, 344, "Main road").attr(textAttrs)
                roadText.animate({ opacity: 1 }, 500);
                let arrow = g.path("M 0,0 L 18,8 L 0,18 0,12, -8,12, -8,6, 0,6 Z").attr({
                    fill: "red",
                    "strokeWidth": 1,
                    stroke: "black",
                    opacity: 1,
                    transform: `t260, 336, s3, r180`
                });
                let arrowGroup = g.g(arrow)
                arrowGroup.animate({ transform: `t-39, 0` }, 500);

                registerTimer(() => {
                    roadText.animate({ opacity: 0 }, 500);
                    sgBackgroundImage.value.animate({ opacity: 1 }, 500);
                    arrowGroup.animate({ opacity: 0 }, 500);
                    roadsImage.animate({ opacity: 0 }, 500);
                    registerTimer(() => {
                        roadsImage.remove()
                    }, 500)
                }, 4500)

                return { discrete: g, percentage: g2 }
            }
        }

        let page4 = {
            label: 'fade in minor roads',
            pageInt: 4,
            delay: 0,
            duration: 6000,
            remove: true,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()

                showPageNumber(g, "4")
                sgLastPageGroup.value = g

                sgBackgroundImage.value.animate({ opacity: 0 }, 500);
                var minorRoadsImage = g2.image(efs_minsk_map_minorRoads, 0, 0, 0, 0);
                minorRoadsImage.attr({
                    'xlink:href': efs_minsk_map_minorRoads,
                    'width': "100%",
                    'height': "100%",
                    'opacity': 0
                });
                minorRoadsImage.animate({ opacity: 1 }, 500);
                let minorRoadText = g.text(520, 194, "Minor road").attr({ ...textAttrs, textAnchor: "end" })
                minorRoadText.animate({ opacity: 1 }, 500);
                let arrow = g.path("M 0,0 L 18,8 L 0,18 0,12, -8,12, -8,6, 0,6 Z").attr({
                    fill: "red",
                    "strokeWidth": 1,
                    stroke: "black",
                    opacity: 1,
                    transform: `t565, 190, s3`
                });
                let arrowGroup = g.g(arrow)
                arrowGroup.animate({ transform: `t39, 0` }, 500);

                registerTimer(() => {
                    minorRoadText.animate({ opacity: 0 }, 500);
                    sgBackgroundImage.value.animate({ opacity: 1 }, 500);
                    arrowGroup.animate({ opacity: 0 }, 500);
                    minorRoadsImage.animate({ opacity: 0 }, 500);
                    registerTimer(() => {
                        minorRoadsImage.remove()
                    }, 500)
                }, 4500)

                return { discrete: g, percentage: g2 }
            }
        }

        let page5 = {
            label: 'fade in rails',
            pageInt: 5,
            delay: 0,
            duration: 6000,
            remove: true,
            async: true,
            fn: () => {


                // sgLastPageGroup.value = g
                // var image2 = g2.image(efs_minsk_map_rail, 0, 0, 0, 0);
                // image2.attr({
                //     'xlink:href': efs_minsk_map_rail,
                //     'width': "100%",
                //     'height': "100%",
                //     'opacity': 0
                // });
                // let zocText = g.text(703, 234, "Railroad").attr({ ...textAttrs, textAnchor: "middle" })
                // let rotateGroup = g.g();
                // let arrow2 = rotateGroup.path("M 0,0 L 18,8 L 0,18 Z").attr({
                //     fill: "red",
                //     "strokeWidth": 1,
                //     stroke: "black",
                //     opacity: 1,
                //     transform: `t545, 250 s3, 3`
                // });
                // arrow2.animate({ transform: `s3 t548, 250` }, 500);
                // rotateGroup.transform(`t160 58 r90`)
                // registerTimer(() => {
                //     image2.animate({ opacity: 1 }, 500);
                //     sgBackgroundImage.value.animate({ opacity: 0 }, 500);
                // }, 500);
                // registerTimer(() => {
                //     image2.animate({ opacity: 0 }, 500);
                //     sgBackgroundImage.value.animate({ opacity: 1 }, 500);
                // }, 5000)
                // zocText.animate({ opacity: 1 }, 500);
                // registerTimer(() => {
                //     zocText.animate({ opacity: 0 }, 500);
                // }, 5000)
                // registerTimer(() => {
                //     rotateGroup.animate({ opacity: 0 }, 500);
                // }, 5000)

                // return { discrete: g, percentage: g2 }


                let g2 = paper.g()
                let g = paper.g()

                showPageNumber(g, "5")
                sgLastPageGroup.value = g

                sgBackgroundImage.value.animate({ opacity: 0 }, 500);
                var railsImage = g2.image(efs_minsk_map_rail, 0, 0, 0, 0);
                railsImage.attr({
                    'xlink:href': efs_minsk_map_rail,
                    'width': "100%",
                    'height': "100%",
                    'opacity': 0
                });
                railsImage.animate({ opacity: 1 }, 500);
                let railText = g.text(703, 224, "Railroad").attr({ ...textAttrs, textAnchor: "middle" })
                railText.animate({ opacity: 1 }, 500);
                let arrow = g.path("M 0,0 L 18,8 L 0,18 0,12, -8,12, -8,6, 0,6 Z").attr({
                    fill: "red",
                    "strokeWidth": 1,
                    stroke: "black",
                    opacity: 1,
                    transform: `t705 280 r90 s3`
                });
                let arrowGroup = g.g(arrow)
                arrowGroup.animate({ transform: `t0, 39` }, 500);

                registerTimer(() => {
                    railText.animate({ opacity: 0 }, 500);
                    sgBackgroundImage.value.animate({ opacity: 1 }, 500);
                    arrowGroup.animate({ opacity: 0 }, 500);
                    railsImage.animate({ opacity: 0 }, 500);
                    registerTimer(() => {
                        railsImage.remove()
                    }, 500)
                }, 4500)

                return { discrete: g, percentage: g2 }

            }
        }

        let page6 = {
            label: 'roads go through cities and towns',
            pageInt: 6,
            delay: 0,
            duration: 15000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "6")
                sgLastPageGroup.value = g
                let textBoxPosition = textBox(g,
                    `Although the roads and railroads are not printed inside,
                    the town and city graphics, it is assumed they still connect
                    to any other roads or railroads exiting the same hex.`,
                    489, 241, 500, 12500)

                let posX = textBoxPosition.x
                let posY = textBoxPosition.y2 + 20
                let townsBox = g.rect(posX, posY - 30, textBoxPosition.width, 233 + 80).attr(textRectAttrs);
                townsBox.attr({ fill: "#ffffdd" })

                let lfPadding = (textBoxPosition.width - (233 * 3)) / 4
                var town = g.image(town_connect, posX + lfPadding, 410, 0, 0);
                town.attr({
                    'xlink:href': town_connect,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                var town2 = g.image(town_connect2, posX + (2 * lfPadding) + 233, 410, 0, 0);
                town2.attr({
                    'xlink:href': town_connect2,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                var town3 = g.image(town_connect3, posX + (3 * lfPadding) + 466, 410, 0, 0);
                town3.attr({
                    'xlink:href': town_connect3,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                var townConnected = g.image(town_connected, posX + lfPadding, 410, 0, 0);
                townConnected.attr({
                    'xlink:href': town_connected,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                var townConnected2 = g.image(town_connected2, posX + (2 * lfPadding) + 233, 410, 0, 0);
                townConnected2.attr({
                    'xlink:href': town_connected2,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                var townConnected3 = g.image(town_connected3, posX + (3 * lfPadding) + 466, 410, 0, 0);
                townConnected3.attr({
                    'xlink:href': town_connected3,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                registerTimer(() => {
                    townsBox.animate({ opacity: 1 }, 500);
                    town.animate({ opacity: 1 }, 500);
                    town2.animate({ opacity: 1 }, 500);
                    town3.animate({ opacity: 1 }, 500);
                }, 500)
                registerTimer(() => {
                    townConnected.animate({ opacity: 1 }, 500);
                    townConnected2.animate({ opacity: 1 }, 500);
                    townConnected3.animate({ opacity: 1 }, 500);
                    registerTimer(() => {
                        townConnected.animate({ opacity: 0 }, 500);
                        townConnected2.animate({ opacity: 0 }, 500);
                        townConnected3.animate({ opacity: 0 }, 500);
                        registerTimer(() => {
                            townConnected.animate({ opacity: 1 }, 500);
                            townConnected2.animate({ opacity: 1 }, 500);
                            townConnected3.animate({ opacity: 1 }, 500);
                            registerTimer(() => {
                                townConnected.animate({ opacity: 0 }, 500);
                                townConnected2.animate({ opacity: 0 }, 500);
                                townConnected3.animate({ opacity: 0 }, 500);
                                registerTimer(() => {
                                    townConnected.animate({ opacity: 1 }, 500);
                                    townConnected2.animate({ opacity: 1 }, 500);
                                    townConnected3.animate({ opacity: 1 }, 500);
                                    registerTimer(() => {
                                        townsBox.animate({ opacity: 0 }, 500);
                                        town.animate({ opacity: 0 }, 500);
                                        town2.animate({ opacity: 0 }, 500);
                                        town3.animate({ opacity: 0 }, 500);
                                        townConnected.animate({ opacity: 0 }, 500);
                                        townConnected2.animate({ opacity: 0 }, 500);
                                        townConnected3.animate({ opacity: 0 }, 500);
                                    }, 1500);
                                }, 2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2500);

                return { discrete: g, percentage: null }
            }
        }

        let page7 = {
            label: 'Minsk',
            pageInt: 7,
            delay: 0,
            duration: 5500,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "7")
                textBox(g, "We will consider Minsk as the supply source for the Axis.", 199, 741, 500, 5000)
                let supplyWhiteCircle = g.circle(5, 625, 24).attr({
                    stroke: "black",
                    strokeWidth: 1,
                    fill: "#ffffff",
                    opacity: 0
                })
                let blackHalfCircle = g.path("M  45,713 A 26,26 0 1,1 45,813 Z").attr({
                    fill: "#000000",
                    stroke: "black",
                    strokeWidth: 1,
                    opacity: 0
                })
                blackHalfCircle.transform(`s 0.49, 0.49 t -108 -281`)
                sgSupplyCircle.value = g.group(supplyWhiteCircle, blackHalfCircle)
                sgSupplyCircle.value.transform(`t 40, 189`)
                registerTimer(() => {
                    supplyWhiteCircle.animate({ opacity: 1 }, 500);
                    blackHalfCircle.animate({ opacity: 1 }, 500);
                }, 3000);

                return { discrete: g, percentage: null }
            }
        }

        let page8 = {
            label: 'Dry weather',
            pageInt: 8,
            delay: 0,
            duration: 1000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "8")
                let weatherRect = g.rect(12, 11, 420, 66).attr({
                    fill: "#aadaff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                let msText = g.text(240, 44, "Dry weather").attr({
                    "textAnchor": "middle",
                    "dominant-baseline": "central",
                    "fontSize": 50 * sgCrossBrowserFontSizeRatio.value, //* sgUseTextSize.value 
                    "fontWeight": "normal",
                    "fontFamily": "sans-serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })
                let sun = g.circle(0, 0, 20).attr({
                    fill: "#ffff00",
                    stroke: "none",
                    strokeWidth: 0,
                    opacity: 1
                })
                let sunRay = g.path("M -10,15 L 10, 15 0 -15 z").attr({
                    fill: "#ffff00",
                    stroke: "none",
                    strokeWidth: 0,
                    opacity: 1
                })
                let sunGroup = g.group(sun)
                for (let i = 0; i < 8; i++) {
                    let angle = i * 45;
                    let ray = sunRay.clone(true);
                    ray.transform(`r${angle} t 0, -15`);
                    sunGroup.append(ray);
                }
                sunGroup.attr({
                    opacity: 0
                })
                registerTimer(() => {
                    weatherRect.animate({ opacity: 1 }, 500);
                    sunGroup.animate({ opacity: 1 }, 500);
                    msText.animate({ opacity: 1 }, 500);
                }, 2500);

                sunRay.transform(`t 0, -15`)
                sunGroup.transform(`t 55, 45 s 1, 1`)
                sgSunGroup.value = g.group(weatherRect, msText, sunGroup)

                return { discrete: g, percentage: null }
            }
        }

        let page9 = {
            label: 'start with dry weather',
            pageInt: 9,
            delay: 0,
            duration: 8000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "9")
                textBox(g,
                    `The weather conditions affect the supply rules.
                    Lets start with Dry weather.`,
                    100, 365, 500, 7000)

                return { discrete: g, percentage: null }
            }
        }

        let page10 = {
            label: 'combat unit',
            pageInt: 10,
            delay: 0,
            duration: 6000,
            remove: false,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()
                showPageNumber(g, "10")
                textBox(g,
                    `Let's take this Axis combat
                    unit and put it in Minsk.`,
                    100, 435, 500, 5000)
                sgLastPageGroup.value = g
                sgAxisCombatUnit.value = g.image(german_infantry_unit, 613, 410, 0, 0);
                sgAxisCombatUnit.value.attr({
                    'xlink:href': german_infantry_unit,
                    'width': "120",
                    'height': "120",
                    'opacity': 0
                });
                registerTimer(() => {
                    sgAxisCombatUnit.value.animate({ opacity: 1 }, 300);
                }, 500);
                registerTimer(() => {
                    //  combat_unit.animate({ width: 35, height: 35, transform: 't 44, 44 ' }, 500);
                    sgAxisCombatUnit.value.animate({ width: 64, height: 64, transform: 't -598, 370 ' }, 500, mina.easeout);
                }, 2500);

                return { discrete: g, percentage: g2 }
            }
        }

        let page11 = {
            label: 'explain supply in Minsk',
            pageInt: 11,
            delay: 0,
            duration: 10000,
            remove: false,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()
                showPageNumber(g, "11")
                textBox(g,
                    `In the General Supply Status phase, supply is determined for each
                    combat unit on the board. Since Minsk is a Axis supply source,
                    General Supply will be traced from Minsk out to units on the map.`,
                    300, 270, 500, 9500)

                return { discrete: g, percentage: g2 }
            }
        }

        let page12 = {
            label: 'supply in Minsk',
            pageInt: 12,
            delay: 0,
            duration: 8000,
            remove: false,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()
                showPageNumber(g, "12")
                textBox(g,
                    `So let's say it's the Supply Status phase. Check supply
                    for that (one) unit on the map. It is of course in supply
                    because it is sitting directly on a supply source.`,
                    440, 270, 500, 7500)

                return { discrete: g, percentage: g2 }
            }
        }

        let page13 = {
            label: 'check supply',
            pageInt: 13,
            delay: 0,
            duration: 6000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "13")
                let posX = 200
                let posY = 580
                textBox(g,
                    `Let's move that unit over here...   `,
                    posX, posY, 500, 5500)
                sgLastPageGroup.value = g
                registerTimer(() => {
                    sgAxisCombatUnit.value.animate({ transform: 't -197, 371' }, 500, mina.easeinout);
                }, 2500);

                return { discrete: g, percentage: null }
            }
        }

        let page14 = {
            label: 'is it now in supply',
            pageInt: 14,
            delay: 0,
            duration: 6000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "14")
                let posX = 560
                let posY = 300
                textBox(g,
                    `Will that unit be in general supply?`,
                    posX, posY, 500, 5500)

                return { discrete: g, percentage: null }
            }
        }

        let page15 = {
            label: 'LOC',
            pageInt: 15,
            delay: 0,
            duration: 14800,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "15")
                let posX = 464
                let posY = 323
                textBox(g,
                    `A Line of Communications (LOC) in Dry Weather
                    is usually 7 hexes. So let's count the hexes...
                    The distance is 6 hexes, so the unit is in supply.`,
                    posX, posY, 1500, 10000)

                let numX = 380
                let numY = 773
                let numY2 = 812
                let numbersGroups = []
                for (let i = 1; i < 7; i++) {
                    let numMY = (i % 2 === 0) ? numY2 : numY;
                    let circleN = g.circle(numX, numMY, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numX, numMY, i).attr({
                        "textAnchor": "middle",
                        "dominant-baseline": "central",
                        "fontSize": 45 * sgCrossBrowserFontSizeRatio.value,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "black",
                        opacity: 1,
                    })
                    let circleAndNumber = g.group(circleN, msTextN)
                    circleAndNumber.attr({
                        opacity: 0
                    })
                    numbersGroups.push(circleAndNumber)
                    numX -= 67;
                }
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 500);
                        }, i * 500);
                    }
                }, 3500);
                registerTimer(() => {
                    for (let i = numbersGroups.length; i > 0; i--) {
                        let numGroup = numbersGroups[numbersGroups.length - i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 80);
                        }, i * 80);
                    }
                }, 14000);

                return { discrete: g, percentage: null }
            }
        }

        let page16 = {
            label: 'Road',
            pageInt: 16,
            delay: 0,
            duration: 12000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "16")
                let posX = 222
                let posY = 276
                textBox(g,
                    `A Motorway or Road (not minor road) hex that is connected to a supply source can extend
                    the supply source along the road, up to 21 hexes in dry weather. Friendly units can trace
                    a LOC to such a road hex that's connected to a supply source to get its general supply.
                    However, enemy unit(s) or enemy zocs on the road blocks the tracing of supply at that hex.`,
                    posX, posY, 500, 11500)

                return { discrete: g, percentage: null }
            }
        }

        let page17 = {
            label: 'supply to Road',
            pageInt: 17,
            delay: 1000,
            duration: 10000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "17")
                let posX = 560
                let posY = 606
                textBox(g,
                    `So let's show the road hexes that are extending the supply source (Minsk).
                    For now we will ignore the railroad (pretend its not there, or it hasn't
                    been converted past Minsk yet.)`,
                    posX, posY, 500, 9500)
                let numbersGroups = []
                let numberCoords = []
                numberCoords.push({ x: 46, y: 812 }); // 1
                numberCoords.push({ x: 112, y: 774 }); // 1
                numberCoords.push({ x: 112, y: 697 }); // 2
                numberCoords.push({ x: 180, y: 658 }); // 3
                numberCoords.push({ x: 246, y: 620 }); // 4
                numberCoords.push({ x: 313, y: 658 }); // 5
                numberCoords.push({ x: 380, y: 620 }); // 6
                numberCoords.push({ x: 448, y: 581 }); // 7
                numberCoords.push({ x: 515, y: 543 }); // 8
                numberCoords.push({ x: 515, y: 465 }); // 9
                let x = 515
                x += 67;
                numberCoords.push({ x: x, y: 465 - 39 }); // 10
                x += 67
                numberCoords.push({ x: x, y: 465 - 78 }); // 11
                x += 67
                numberCoords.push({ x: x, y: 465 - 113 }); // 12
                x += 67
                numberCoords.push({ x: x, y: 465 - 79 }); // 13
                x += 67
                numberCoords.push({ x: x, y: 465 - 113 }); // 14
                x += 67
                numberCoords.push({ x: x, y: 465 - 152 }); // 15
                x += 67
                numberCoords.push({ x: x, y: 465 - 190 }); // 16
                x += 67
                numberCoords.push({ x: x, y: 465 - 152 }); // 17
                x += 67
                numberCoords.push({ x: x, y: 465 - 190 }); // 18
                x += 67
                numberCoords.push({ x: x, y: 465 - 152 }); // 19
                x += 67
                numberCoords.push({ x: x, y: 465 - 190 }); // 20
                for (let i = 0; i < numberCoords.length; i++) {
                    let circleN = g.circle(numberCoords[i].x, numberCoords[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 0.8
                    })
                    let msTextN = g.text(numberCoords[i].x, numberCoords[i].y, i + 1).attr({
                        "textAnchor": "middle",
                        "dominant-baseline": "central",
                        "letter-spacing": "-1px",
                        "fontSize": 45 * sgCrossBrowserFontSizeRatio.value,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "black",
                        opacity: 1,
                    })
                    let circleAndNumber = g.group(circleN, msTextN)
                    circleAndNumber.attr({
                        opacity: 0
                    })
                    numbersGroups.push(circleAndNumber)
                }
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 70);
                        }, i * 70);
                    }
                }, 3000);
                let numbersGroups2 = []
                let numberCoords2 = []
                numberCoords2.push({ x: 112, y: 619 }); // 3
                numberCoords2.push({ x: 180, y: 619 - 37 }); // 4
                numberCoords2.push({ x: 180, y: 619 - (58 * 2) }); // 5
                numberCoords2.push({ x: 180, y: 619 - 192 }); // 6
                numberCoords2.push({ x: 180, y: 619 - 268 }); // 7
                numberCoords2.push({ x: 180, y: 619 - 345 }); // 8
                numberCoords2.push({ x: 180, y: 619 - 422 }); // 9
                numberCoords2.push({ x: 180, y: 619 - 499 }); // 10
                for (let i = 0; i < numberCoords2.length; i++) {

                    let circleN = g.circle(numberCoords2[i].x, numberCoords2[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 0.8
                    })

                    let msTextN = g.text(numberCoords2[i].x, numberCoords2[i].y, i + 4).attr({
                        "textAnchor": "middle",
                        "dominant-baseline": "central",
                        "letter-spacing": "-1px",
                        "fontSize": 45 * sgCrossBrowserFontSizeRatio.value,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "black",
                        opacity: 1,
                    })
                    let circleAndNumber2 = g.group(circleN, msTextN)
                    circleAndNumber2.attr({
                        opacity: 0
                    })
                    numbersGroups2.push(circleAndNumber2)
                }
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups2.length; i++) {
                        let numGroup = numbersGroups2[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 70);
                        }, i * 70);
                    }
                }, 6000);
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        numGroup.animate({ opacity: 0 }, 70);

                    }
                    for (let i = 0; i < numbersGroups2.length; i++) {
                        let numGroup = numbersGroups2[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 70);
                        }, i * 70);
                    }
                }, 16000);
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        numGroup.remove()

                    }
                    for (let i = 0; i < numbersGroups2.length; i++) {
                        let numGroup = numbersGroups2[i];
                        numGroup.remove()

                    }
                }, 17000);

                return { discrete: g, percentage: null }
            }
        }

        let page18 = {
            label: 'unit supply to Road',
            pageInt: 18,
            delay: 0,
            duration: 6000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "18")
                let posX = 400
                let posY = 500
                textBox(g,
                    `So if we re-consider how that Axis unit gets supply, we see that it can get
                    General Supply from a closer source - the motorway that is near it.`,
                    posX, posY, 500, 5500)

                return { discrete: g, percentage: null }
            }
        }

        let page19 = {
            label: 'LOC',
            pageInt: 19,
            delay: 0,
            duration: 12000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "19")
                let posX = 464
                let posY = 323
                textBox(g,
                    `By tracing to the road that is connected to a supply source,
                    the unit has successfully reached General Supply.`,
                    posX, posY, 1200, 11500)
                let numberPositions = []
                numberPositions.push({ x: 380, y: 774 }); // 1
                numberPositions.push({ x: 314, y: 735 }); // 2
                numberPositions.push({ x: 314, y: 658 }); // 3
                let numbersGroups = []
                for (let i = 0; i < numberPositions.length; i++) {
                    let circleN = g.circle(numberPositions[i].x, numberPositions[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numberPositions[i].x, numberPositions[i].y, i + 1).attr({
                        "textAnchor": "middle",
                        "dominant-baseline": "central",
                        "letter-spacing": "-1px",
                        "fontSize": 45 * sgCrossBrowserFontSizeRatio.value,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "black",
                        opacity: 1,
                    })
                    let circleAndNumber = g.group(circleN, msTextN)
                    circleAndNumber.attr({
                        opacity: 0
                    })
                    numbersGroups.push(circleAndNumber)
                }
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 500);
                        }, i * 500);
                    }
                }, 1500);
                registerTimer(() => {
                    for (let i = numbersGroups.length; i > 0; i--) {
                        let numGroup = numbersGroups[numbersGroups.length - i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 80);
                        }, i * 80);
                    }
                }, 11000);

                return { discrete: g, percentage: null }
            }
        }

        let page20 = {
            label: 'Railroads',
            pageInt: 20,
            delay: 0,
            duration: 18000,
            remove: true,
            async: true,
            fn: () => {
                let posX = 194
                let posY = 275
                let g = paper.g()
                showPageNumber(g, "20")
                textBox(g,
                    `Railroads can extend a supply source with no set limit on number of hexes, however the route
                    traced can only travel along railroads that have been converted (for Axis) or not converted
                    (for Soviet) use. Enemy units, unblocked enemy zocs and rail breaks stop the tracing of
                    supply at that rail hex.`,
                    posX, posY, 500, 16000)
                let g2 = paper.g()
                var imageRailGlow = g2.image(efs_minsk_map_rail_glow, 0, 0, 0, 0);
                imageRailGlow.attr({
                    'xlink:href': efs_minsk_map_rail_glow,
                    'width': "100%",
                    'height': "100%",
                    'opacity': 0
                });

                var backgroundImage2 = g2.image(efs_minsk_map, 0, 0, 0, 0);
                backgroundImage2.attr({
                    'xlink:href': efs_minsk_map,
                    'width': '100%',
                    'height': '100%',
                    'opacity': 0
                });
                registerTimer(() => {
                    imageRailGlow.animate({ opacity: 1 }, 100);
                    backgroundImage2.animate({ opacity: 0.2 }, 100);
                }, 15500)
                registerTimer(() => {
                    imageRailGlow.animate({ opacity: 0 }, 1000);
                }, 16500);
                registerTimer(() => {
                    imageRailGlow.remove();
                    backgroundImage2.remove();
                }, 17500);

                return { discrete: g, percentage: null }
            }
        }

        let page21 = {
            label: 'rail end',
            pageInt: 21,
            delay: 0,
            duration: 4500,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "21")
                let posX = 815
                let posY = 450
                textBox(g,
                    `Let's put this rail end marker over here...`,
                    posX, posY, 500, 4000)
                sgAxisRailEndUnit.value = g.image(german_rail_end, 613, 410, 0, 0);
                sgAxisRailEndUnit.value.attr({
                    'xlink:href': german_rail_end,
                    'width': "120",
                    'height': "120",
                    'opacity': 1
                });
                registerTimer(() => {
                    sgAxisRailEndUnit.value.animate({ width: 64, height: 64, transform: 't 705, -235 r 58' }, 500, mina.easeout);
                }, 2500);

                return { discrete: g, percentage: null }
            }
        }

        let page22 = {
            label: 'move Axis unit again for railroad supply',
            pageInt: 22,
            delay: 0,
            duration: 6000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "22")
                let posX = 380
                let posY = 350
                textBox(g,
                    `Let's put that Axis unit over here...`,
                    posX, posY, 500, 5500)
                sgLastPageGroup.value = g
                registerTimer(() => {
                    if (sgAxisCombatUnit.value) {
                        sgAxisCombatUnit.value.animate({ transform: 't 943, 102' }, 500, mina.easeout);
                    }
                }, 2500);

                return { discrete: g, percentage: null }
            }
        }

        let page23 = {
            label: 'introduce soviet cavalry division',
            pageInt: 23,
            delay: 0,
            duration: 6000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "23")
                let posX = 760
                let posY = 370
                textBox(g,
                    `And here comes a sneaky Soviet cavalry division.`,
                    posX, posY, 500, 5500)
                sgSovietCombatUnit.value = g.image(soviet_cavalry_unit, 951, -64, 0, 0);
                sgSovietCombatUnit.value.attr({
                    'xlink:href': soviet_cavalry_unit,
                    'width': "64",
                    'height': "64",
                    'opacity': 1
                });
                registerTimer(() => {
                    sgSovietCombatUnit.value.animate({ width: 64, height: 64, transform: 't 0, 74 ' }, 500, mina.easeout);
                    registerTimer(() => {
                        sgSovietCombatUnit.value.animate({ width: 64, height: 64, transform: 't 0, 150 ' }, 500, mina.easeout);
                        registerTimer(() => {
                            sgSovietCombatUnit.value.animate({ width: 64, height: 64, transform: 't 0, 228 ' }, 500, mina.easeout);
                        }, 500);
                    }, 500);

                }, 2500);

                return { discrete: g, percentage: null }
            }
        }

        let page24 = {
            label: 'show zoc of cavalry division',
            pageInt: 24,
            delay: 0,
            duration: 12000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "24")
                let posX = 560
                let posY = 400
                textBox(g,
                    `The Zone of Control (ZOC) from the Soviet cavalry unit
                    extends to the Motorway hex, blocking road supply.`,
                    posX, posY, 500, 11500)
                let angleMult = 60
                let zocPaths = ``
                for (let i = 0; i < 7; i++) {
                    let x = Math.cos(i * angleMult * Math.PI / 180) * 46
                    let y = Math.sin(i * angleMult * Math.PI / 180) * 46
                    if (i === 0) {
                        zocPaths += `M ${x} ${y} `
                    }
                    else {
                        zocPaths += ` L ${x} ${y} `
                    }
                };
                zocPaths += ` Z `
                let zocPath = g.path(zocPaths).attr({
                    fill: "none",
                    stroke: "black",
                    strokeWidth: 1,
                    opacity: 0.5
                });
                zocPath.transform(`t 984, 196`);
                zocPath.animate({ opacity: 1 }, 500);
                for (let i = 0; i < 6; i++) {
                    registerTimer(() => {
                        let x = Math.sin((i * (angleMult)) * Math.PI / 180) * 78
                        let y = Math.cos((i * (angleMult)) * Math.PI / 180) * 78
                        let zocClone = zocPath.clone(true);

                        zocClone.transform(`t ${984 + x}, ${196 + y}`);
                        zocClone.attr({
                            fill: "yellow",
                            stroke: "black",
                            strokeWidth: 1,
                            opacity: 0.5
                        })
                        let msText = g.text(0, 0, "ZOC").attr({
                            "textAnchor": "middle",
                            "dominant-baseline": "central",
                            "letter-spacing": "-1px",
                            "fontSize": 25,
                            "fontWeight": "bold",
                            "fontFamily": "serif",
                            stroke: "none",
                            fill: "black",
                            opacity: 1,
                        })
                        msText.transform(`t ${984 + x}, ${196 + y}`, 500);
                    }, i * 50);
                }
                let blockedHexside = g.path('M 0 0 L 23 43').attr({
                    stroke: "black",
                    strokeWidth: 9,
                    opacity: 0
                });
                blockedHexside.transform('t 939, 270');
                registerTimer(() => {
                    blockedHexside.animate({ opacity: 1 }, 500, mina.easeInOut);
                    registerTimer(() => {
                        blockedHexside.animate({ opacity: 0 }, 500, mina.easeInOut);
                        registerTimer(() => {
                            blockedHexside.animate({ opacity: 1 }, 500, mina.easeInOut);
                            registerTimer(() => {
                                blockedHexside.animate({ opacity: 0 }, 500, mina.easeInOut);
                                registerTimer(() => {
                                    blockedHexside.animate({ opacity: 1 }, 500, mina.easeInOut);
                                }, 500);
                            }, 1000);
                        }, 500);
                    }, 1000);
                }, 4000);
                registerTimer(() => {
                    zocPath.animate({ opacity: 0 }, 500)
                }, 22000)
                registerTimer(() => {
                    g.remove()
                }, 23000);

                return { discrete: g, percentage: null }
            }
        }

        let page25 = {
            label: 'show path of supply to rr',
            pageInt: 25,
            delay: 0,
            duration: 12000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "25")
                let posX = 240
                let posY = 500
                textBox(g,
                    `The unit now can't use the motorway here for supply,
                    but it can get supply via the railroad. Note that the hex
                    the rail cut marker is in is not a supply source.`,
                    posX, posY, 500, 11500)

                let numberPositions = []
                let yM5 = 39
                numberPositions.push({ x: 1521, y: 505 }); // 1
                numberPositions.push({ x: 1454, y: 466 }); // 2
                numberPositions.push({ x: 1386, y: 428 }); // 3
                numberPositions.push({ x: 1386, y: 428 - (yM5 * 2) }); // 4
                numberPositions.push({ x: 1386, y: 390 - (yM5 * 3) }); // 5
                numberPositions.push({ x: 1320, y: 236 }); // 6
                let numbersGroups = []
                for (let i = 0; i < numberPositions.length; i++) {
                    let numX = numberPositions[i].x
                    let numMY = numberPositions[i].y
                    let circleN = g.circle(numX, numMY, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numX, numMY, i + 1).attr({
                        "textAnchor": "middle",
                        "dominant-baseline": "central",
                        "letter-spacing": "-1px",
                        "fontSize": 45 * sgCrossBrowserFontSizeRatio.value,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "black",
                        opacity: 1,
                    })
                    //number1 = g.group(circle1, msTextN1)
                    let circleAndNumber = g.group(circleN, msTextN)
                    circleAndNumber.attr({
                        opacity: 0
                    })
                    numbersGroups.push(circleAndNumber)
                }
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 500);
                        }, i * 500);
                    }
                }, 6000);
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 50);
                        }, i * 50);
                    }
                }, 10000);
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        numGroup.remove()
                    }
                }, 11000);

                return { discrete: g, percentage: null }
            }
        }

        let page26 = {
            label: 'move in two soviet units to block supply',
            pageInt: 26,
            delay: 1000,
            duration: 16500,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "26")
                let posX = 80
                let posY = 448
                textBox(g,
                    `Let's move some more Soviets onto the map to cause some trouble.`,
                    posX, posY, 500, 4500)
                posX = 550
                posY = 600
                textBox(g,
                    `And here are their ZOCs...
                    There is a path for supply, but it goes through a marsh hex.`,
                    posX, posY, 5500, 12500)
                sgSovietMdnoUnit.value = g.image(soviet_mdno_unit, 1622, -62, 0, 0);
                sgSovietMdnoUnit.value.attr({
                    'xlink:href': soviet_mdno_unit,
                    'width': "62",
                    'height': "62",
                    'opacity': 1
                });
                registerTimer(() => {
                    sgSovietMdnoUnit.value.animate({ width: 64, height: 64, transform: 't 0, 458' }, 500, mina.easeout);
                }, 2500);
                sgSovietInfantryUnit.value = g.image(soviet_infantry_unit, 1352, -62, 0, 0);
                sgSovietInfantryUnit.value.attr({
                    'xlink:href': soviet_infantry_unit,
                    'width': "62",
                    'height': "62",
                    'opacity': 1
                });
                registerTimer(() => {
                    sgSovietInfantryUnit.value.animate({ width: 64, height: 64, transform: 't 0, 458' }, 500, mina.easeout);
                }, 2500)
                let hexPath = g.path('M 1498 389 L 1543 389 L 1564 428 L 1543 465 L 1498 465 L 1476 428 Z').attr({
                    fill: "none",
                    stroke: "red",
                    strokeWidth: 5,
                    opacity: 0
                })

                registerTimer(() => {
                    hexPath.animate({ opacity: 1 }, 500);
                    registerTimer(() => {
                        hexPath.animate({ opacity: 0 }, 500);
                        registerTimer(() => {
                            hexPath.animate({ opacity: 1 }, 500);
                            registerTimer(() => {
                                hexPath.animate({ opacity: 0 }, 500);
                                registerTimer(() => {
                                    hexPath.animate({ opacity: 1 }, 500);
                                    registerTimer(() => {
                                        hexPath.animate({ opacity: 0 }, 500);
                                        registerTimer(() => {
                                            hexPath.remove()
                                        }, 500);
                                    }, 1500);
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 12000);

                registerTimer(() => {
                    let z1 = displayZocs(g, 1386, 428)
                    let z2 = displayZocs(g, 1654, 428)
                    registerTimer(() => {
                        z1.remove()
                        z2.remove()
                    }, 9300);
                }, 6500);

                return { discrete: g, percentage: null }
            }
        }

        let page27 = {
            label: 'marsh with no road cuts LOC to 5',
            pageInt: 27,
            delay: 600,
            duration: 42000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "27")
                let posX = 110
                let posY = 300
                textBox(g,
                    `Note - if the LOC you are tracing goes through a Marsh hex in Dry
                     Weather,  the maximum LOS length is reduced to 5 hexes, unless
                     you are tracing along a road or railroad (minor road doesn't count).`,
                    posX, posY, 500, 9500)

                let numberPositions = []

                let yM5 = 39
                numberPositions.push({ x: 1521, y: 505 }); // 1
                numberPositions.push({ x: 1521, y: 428 }); // 2
                numberPositions.push({ x: 1521, y: 428 - (yM5 * 2) }); // 3
                numberPositions.push({ x: 1454, y: 428 - (yM5 * 3) }); // 4
                numberPositions.push({ x: 1386, y: 390 - (yM5 * 3) }); // 5


                let numbersGroups = []
                for (let i = 0; i < numberPositions.length; i++) {
                    let numX = numberPositions[i].x
                    let numMY = numberPositions[i].y
                    let circleN = g.circle(numX, numMY, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numX, numMY, i + 1).attr({
                        "textAnchor": "middle",
                        "dominant-baseline": "central",
                        "letter-spacing": "-1px",
                        "fontSize": 45 * sgCrossBrowserFontSizeRatio.value,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "black",
                        opacity: 1,
                    })
                    //number1 = g.group(circle1, msTextN1)
                    let circleAndNumber = g.group(circleN, msTextN)
                    circleAndNumber.attr({
                        opacity: 0
                    })
                    numbersGroups.push(circleAndNumber)
                }
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            let opa = i === 1 ? 0.3 : 1
                            numGroup.animate({ opacity: opa }, 500);
                        }, i * 500);
                    }
                }, 10000);
                // shake last supply hex
                registerTimer(() => {
                    numbersGroups[numbersGroups.length - 1].animate({ transform: 't 2, 2 ' }, 100, mina.linear);
                    registerTimer(() => {
                        numbersGroups[numbersGroups.length - 1].animate({ transform: 't -4, -4 ' }, 100, mina.linear);
                        registerTimer(() => {
                            numbersGroups[numbersGroups.length - 1].animate({ transform: 't 2, 2 ' }, 100, mina.linear);
                            registerTimer(() => {
                                numbersGroups[numbersGroups.length - 1].animate({ transform: 't -2, -2 ' }, 100, mina.linear);
                                registerTimer(() => {
                                    numbersGroups[numbersGroups.length - 1].animate({ transform: 't 4, -4 ' }, 100, mina.linear);
                                    registerTimer(() => {
                                        numbersGroups[numbersGroups.length - 1].animate({ transform: 't -2, 2 ' }, 100, mina.linear);
                                        registerTimer(() => {
                                            numbersGroups[numbersGroups.length - 1].animate({ transform: 't 1, -1 ' }, 100, mina.linear);
                                        }, 100);
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 100);
                    }, 100);
                }, 13000);











                registerTimer(() => {
                    for (let i = numbersGroups.length - 1; i >= 0; i--) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 500);
                        }, i * 50);
                    }
                }, 17000);
                posX = 145
                posY = 350
                textBox(g,
                    `The Axis unit cannot reach General Supply in 5
                    hexes. Place an Emergency Supply marker on it.`,
                    posX, posY, 12500, 18500)
                sgEmergencySupplyMarker.value = g.image(emergencySupply, 1013, 333, 0, 0);
                sgEmergencySupplyMarker.value.attr({
                    'xlink:href': emergencySupply,
                    'width': "120",
                    'height': "120",
                    'opacity': 0
                });
                registerTimer(() => {
                    sgEmergencySupplyMarker.value.animate({ opacity: 1 }, 500);
                }, 16000);
                registerTimer(() => {
                    sgEmergencySupplyMarker.value.animate({ width: 64, height: 64, transform: 't 540, 176' }, 500, mina.easeout);
                }, 18500);
                posX = 150
                posY = 360
                textBox(g,
                    `Being in Emergency Supply does not cause any issues.
                    However, if the unit already has an Emergency Supply
                    marker on it, it instead gets an Out Of Supply marker.`,
                    posX, posY, 20500, 27500)
                let outOfSupplyMarker = g.image(outOfSupply, 1132, 364, 0, 0);
                outOfSupplyMarker.attr({
                    'xlink:href': outOfSupply,
                    'width': "120",
                    'height': "120",
                    'opacity': 0
                });
                registerTimer(() => {
                    outOfSupplyMarker.animate({ opacity: 1 }, 500);
                }, 24000);
                registerTimer(() => {
                    outOfSupplyMarker.animate({ width: 64, height: 64, transform: 't 422, 145' }, 500, mina.easeout);
                }, 27500);
                registerTimer(() => {
                    sgEmergencySupplyMarker.value.animate({ transform: 't 540, -1140', opacity: 0 }, 300);
                }, 27500);
                posX = 220
                posY = 300
                textBox(g,
                    `If a unit is previously marked Out of Supply or Emergency Supply,
                    and in a General Supply phase is deemed to be back in supply,
                    then remove the markers, even if it's the Out of Supply marker.`,
                    posX, posY, 29000, 40000)

                registerTimer(() => {
                    outOfSupplyMarker.animate({ transform: 't 422, -1141', opacity: 0 }, 300);
                }, 40500);
                registerTimer(() => {
                    sgSovietMdnoUnit.value.animate({ opacity: 0 }, 500);
                    sgSovietInfantryUnit.value.animate({ opacity: 0 }, 500);
                    sgEmergencySupplyMarker.value.animate({ opacity: 0 }, 500);
                    outOfSupplyMarker.animate({ opacity: 0 }, 500);
                    sgAxisRailEndUnit.value.animate({ opacity: 0 }, 500);
                    sgSovietCombatUnit.value.animate({ opacity: 0 }, 500);
                    if (sgAxisCombatUnit.value) {
                        sgAxisCombatUnit.value.animate({ opacity: 0 }, 500);
                    }
                }, 41000);
                registerTimer(() => {
                    sgSovietMdnoUnit.value.remove()
                    sgSovietMdnoUnit.value = null;
                    sgSovietInfantryUnit.value.remove()
                    sgSovietInfantryUnit.value = null;
                    sgEmergencySupplyMarker.value.remove()
                    sgEmergencySupplyMarker.value = null;
                    outOfSupplyMarker.remove()
                    sgAxisRailEndUnit.value.remove()
                    sgAxisRailEndUnit.value = null;
                    sgSovietCombatUnit.value.remove()
                    sgSovietCombatUnit.value = null;
                    if (sgAxisCombatUnit.value) {
                        sgAxisCombatUnit.value.remove()
                        sgAxisCombatUnit.value = null;
                    }
                }, 41500);

                return { discrete: g, percentage: null }
            }
        }

        let page29 = {
            label: 'Mud weather',
            pageInt: 8,
            delay: 0,
            duration: 1500,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "30")
                let weatherRect = g.rect(12, 11, 395, 66).attr({
                    fill: "#70543E",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 1
                });
                let mudText = g.text(102, 44, "Mud weather").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 50 * sgCrossBrowserFontSizeRatio.value,
                    "fontWeight": "normal",
                    "fontFamily": "sans-serif",
                    stroke: "none",
                    fill: "white",
                    opacity: 1,
                })
                let mudEllipse = g.ellipse(55, 35, 15, 11).attr({
                    fill: "#A0A0A0",
                    stroke: "none",
                    strokeWidth: 0,
                    opacity: 0.4
                })
                let mudEllipse2 = g.ellipse(75, 64, 19, 9).attr({
                    fill: "#A0A0A0",
                    stroke: "none",
                    strokeWidth: 0,
                    opacity: 0.3
                })
                let mudEllipse3 = g.ellipse(47, 53, 15, 9).attr({
                    fill: "#A0A0A0",
                    stroke: "none",
                    strokeWidth: 0,
                    opacity: 0.3
                })
                sgMudWeatherGroup.value = g.group(weatherRect, mudText, mudEllipse, mudEllipse2, mudEllipse3)
                sgMudWeatherGroup.value.attr({
                    opacity: 0
                })
                if (sgSunGroup.value) {
                    sgSunGroup.value.animate({ opacity: 0 }, 500);
                }
                registerTimer(() => {
                    sgMudWeatherGroup.value.animate({ opacity: 1 }, 500);
                    if (sgSunGroup.value) {
                        sgSunGroup.value.remove()
                        sgSunGroup.value = null;
                    }
                }, 500);

                return { discrete: g, percentage: null }
            }
        }

        let page30 = {
            label: 'Mud weather details',
            pageInt: 30,
            delay: 0,
            duration: 9000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "30")
                let posX = 338
                let posY = 329
                let textXpos = posX + 20
                let textYpos = posY + 50
                textBox(g,
                    `During Mud weather, the LOC path is reduced to 5 hexes,
                    motorway and (not minor) roads are reduced to 15 hexes, but
                    railroad supply rules remain the same as with Dry weather.`,
                    textXpos, textYpos, 500, 8500)

                return { discrete: g, percentage: null }
            }
        }

        let page30b = {
            label: 'place a rail break',
            pageInt: 30,
            delay: 0,
            duration: 9000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "30b")
                let posX = 421
                let posY = 580
                let textXpos = posX + 20
                let textYpos = posY + 50
                textBox(g,
                    `Since the next couple of examples will trace to the road,
                    network, lets say the Soviets broke the rail line here.`,
                    textXpos, textYpos, 500, 8500)

                sgSovietRailBreak.value = g.image(sovietRailBreak, 282, -62, 0, 0);
                sgSovietRailBreak.value.attr({
                    'xlink:href': sovietRailBreak,
                    'width': "62",
                    'height': "62",
                    'opacity': 1
                });
                registerTimer(() => {
                    sgSovietRailBreak.value.animate({ width: 64, height: 64, transform: 't 0, 688' }, 500, mina.easeout);
                }, 2500)

                return { discrete: g, percentage: null }
            }
        }

        let page31 = {
            label: 'Show mud weather road hexes',
            pageInt: 31,
            delay: 0,
            duration: 9000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "31")
                let numbersGroups = []
                let numberCoords = []
                numberCoords.push({ x: 46, y: 812 }); // 1
                numberCoords.push({ x: 112, y: 774 }); // 1
                numberCoords.push({ x: 112, y: 697 }); // 2
                numberCoords.push({ x: 180, y: 658 }); // 3
                numberCoords.push({ x: 246, y: 620 }); // 4
                numberCoords.push({ x: 313, y: 658 }); // 5
                numberCoords.push({ x: 380, y: 620 }); // 6
                numberCoords.push({ x: 448, y: 581 }); // 7
                numberCoords.push({ x: 515, y: 543 }); // 8
                numberCoords.push({ x: 515, y: 465 }); // 9
                let x = 515
                x += 67;
                numberCoords.push({ x: x, y: 465 - 39 }); // 10
                x += 67
                numberCoords.push({ x: x, y: 465 - 78 }); // 11
                x += 67
                numberCoords.push({ x: x, y: 465 - 113 }); // 12
                x += 67
                numberCoords.push({ x: x, y: 465 - 79 }); // 13
                x += 67
                numberCoords.push({ x: x, y: 465 - 113 }); // 14
                for (let i = 0; i < numberCoords.length; i++) {
                    let circleN = g.circle(numberCoords[i].x, numberCoords[i].y, 30).attr({
                        fill: "#70543E",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 0.8
                    })
                    let msTextN = g.text(numberCoords[i].x, numberCoords[i].y - 2, i + 1).attr({
                        "textAnchor": "middle",
                        "dominant-baseline": "central",
                        "fontSize": 45 * sgCrossBrowserFontSizeRatio.value,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "white",
                        opacity: 1,
                    })
                    let circleAndNumber = g.group(circleN, msTextN)
                    circleAndNumber.attr({
                        opacity: 0
                    })
                    numbersGroups.push(circleAndNumber)
                }
                sgMudRoadIndicators.value = numbersGroups
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 70);
                        }, i * 70);
                    }
                }, 3000);
                let numbersGroups2 = []
                let numberCoords2 = []
                numberCoords2.push({ x: 112, y: 619 }); // 3
                numberCoords2.push({ x: 180, y: 619 - 37 }); // 4
                numberCoords2.push({ x: 180, y: 619 - (58 * 2) }); // 5
                numberCoords2.push({ x: 180, y: 619 - 192 }); // 6
                numberCoords2.push({ x: 180, y: 619 - 268 }); // 7
                numberCoords2.push({ x: 180, y: 619 - 345 }); // 8
                numberCoords2.push({ x: 180, y: 619 - 422 }); // 9
                numberCoords2.push({ x: 180, y: 619 - 499 }); // 10
                for (let i = 0; i < numberCoords2.length; i++) {
                    let circleN = g.circle(numberCoords2[i].x, numberCoords2[i].y, 30).attr({
                        fill: "#70543E",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 0.8
                    })
                    let msTextN = g.text(numberCoords2[i].x, numberCoords2[i].y - 2, i + 4).attr({
                        "textAnchor": "middle",
                        "dominant-baseline": "central",
                        "fontSize": 45 * sgCrossBrowserFontSizeRatio.value,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "white",
                        opacity: 1,
                    })
                    //number1 = g.group(circle1, msTextN1)
                    let circleAndNumber2 = g.group(circleN, msTextN)
                    circleAndNumber2.attr({
                        opacity: 0
                    })
                    numbersGroups2.push(circleAndNumber2)
                }
                sgMudRoadIndicators.value = sgMudRoadIndicators.value.concat(numbersGroups2)
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups2.length; i++) {
                        let numGroup = numbersGroups2[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 70);
                        }, i * 70);
                    }
                }, 5000);
                let posX = 550
                let posY = 590
                let textXpos = posX + 20
                let textYpos = posY + 70
                textBox(g,
                    `Now the rail supply ends at the hex marked '5' on the motorway,
                    but supply still flows on the motorway, up to the hex marked '15'.`,
                    textXpos, textYpos, 500, 10000)

                return { discrete: g, percentage: null }
            }
        }

        let page32 = {
            label: 'soviet armor division',
            pageInt: 32,
            delay: 0,
            duration: 6000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "32")
                let posX = 1038
                let posY = 329
                let textXpos = posX + 15
                let textYpos = posY + 50
                textBox(g,
                    `Let's bring in a Soviet armor division.`,
                    textXpos, textYpos, 500, 5500)
                sgSovietArmorUnit.value = g.image(soviet_armor_unit, 751, -62, 0, 0);
                sgSovietArmorUnit.value.attr({
                    'xlink:href': soviet_armor_unit,
                    'width': "62",
                    'height': "62",
                    'opacity': 1
                });
                registerTimer(() => {
                    sgSovietArmorUnit.value.animate({ width: 64, height: 64, transform: 't 0, 342' }, 500, mina.easeout);
                }, 2500)

                return { discrete: g, percentage: null }
            }
        }

        let page33 = {
            label: 'mud and red orange box units zocs',
            pageInt: 33,
            delay: 0,
            duration: 15000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "33")
                let posX = 130
                let posY = 426
                let textXpos = posX + 15
                let textYpos = posY + 50
                let bbox = textBox(g,
                    `During Mud conditions, the ZOCs of units with Red boxed and Orange movement
                    points do not extend into adjacent hexes, unless the unit's ZOC enters a town or city,
                    or its ZOC enters the adjacent hex along motorway/road/minor road/railroad.`,
                    textXpos, textYpos, 500, 0, 0, 155)
                let boxWidth = bbox.width
                let spacing = boxWidth / 4
                let msRedBoxText = g.text(textXpos + spacing + 175, textYpos + 241, "Red Box MP").attr({
                    "textAnchor": "start",
                    "dominant-baseline": "central",
                    "fontSize": 40 * sgCrossBrowserFontSizeRatio.value,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })
                let leftArrow3 = g.text(textXpos + spacing + 120, textYpos + 241, "↼").attr({
                    "textAnchor": "start",
                    "dominant-baseline": "central",
                    "fontSize": 50 * sgCrossBrowserFontSizeRatio.value,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "black",
                    fill: "black",
                    opacity: 0,
                })
                let leftArrow4 = g.text(textXpos + spacing + 120, textYpos + 244, "↽").attr({
                    "textAnchor": "start",
                    "dominant-baseline": "central",
                    "fontSize": 50 * sgCrossBrowserFontSizeRatio.value,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })
                posX = textXpos + spacing
                let displayRedBox = g.image(soviet_armor_unit, posX, posY + 200, 0, 0);
                displayRedBox.attr({
                    'xlink:href': soviet_armor_unit,
                    'width': "120",
                    'height': "120",
                    'opacity': 0
                });
                posX += spacing + 120
                let displayOrangeMP = g.image(german_antiair_unit, posX, posY + 200, 0, 0);
                displayOrangeMP.attr({
                    'xlink:href': german_antiair_unit,
                    'width': "120",
                    'height': "120",
                    'opacity': 0
                });
                let leftArrow = g.text(posX + 120, textYpos + 241, "↼").attr({
                    "textAnchor": "start",
                    "dominant-baseline": "central",
                    "fontSize": 50 * sgCrossBrowserFontSizeRatio.value,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })
                let leftArrow2 = g.text(posX + 120, textYpos + 244, "↽").attr({
                    "textAnchor": "start",
                    "dominant-baseline": "central",
                    "fontSize": 50 * sgCrossBrowserFontSizeRatio.value,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })
                let msOrangeMPText = g.text(posX + 120 + 54, textYpos + 241, "Orange MP").attr({
                    "textAnchor": "start",
                    "dominant-baseline": "central",
                    "fontSize": 40 * sgCrossBrowserFontSizeRatio.value,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })
                registerTimer(() => {
                    displayRedBox.animate({ opacity: 1 }, 500);
                    displayOrangeMP.animate({ opacity: 1 }, 500);
                    msRedBoxText.animate({ opacity: 1 }, 500);
                    msOrangeMPText.animate({ opacity: 1 }, 500);
                    leftArrow.animate({ opacity: 1 }, 500);
                    leftArrow2.animate({ opacity: 1 }, 500);
                    leftArrow3.animate({ opacity: 1 }, 500);
                    leftArrow4.animate({ opacity: 1 }, 500);
                }, 1000);

                return { discrete: g, percentage: null }
            }
        }

        let page34 = {
            label: 'explain lack of ZOC',
            pageInt: 34,
            delay: 0,
            duration: 12000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "34")
                let posX = 930
                let posY = 24
                let textXpos = posX + 15
                let textYpos = posY + 50
                textBox(g,
                    `Since it is Mud weather, that Soviet armor unit
                    does not exert any ZOCs. It is not on any road,
                    and there is no adjacent town or city hex.`,
                    textXpos - 50, textYpos - 20, 500, 6000)
                textBox(g,
                    `The road hexes at distances 13, 14, and 15 are
                        still valid Axis General Supply sources.`,
                    textXpos, textYpos + 110, 6000, 11500)
                let numbersGroups2 = []
                let adjust = 22
                let numCoords = [{ x: 693 + adjust, y: 351 }, { x: 760 + adjust, y: 384 }, { x: 827 + adjust, y: 351 }]
                for (let i = 0; i < numCoords.length; i++) {
                    let msTextN = g.text(numCoords[i].x, numCoords[i].y, i + 13).attr({
                        "textAnchor": "middle",
                        "dominant-baseline": "central",
                        "fontSize": 45 * sgCrossBrowserFontSizeRatio.value,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "yellow",
                        "strokeWidth": 1,
                        fill: "yellow",
                        opacity: 1,
                    })
                    let circleAndNumber2 = g.group(msTextN)
                    circleAndNumber2.attr({
                        opacity: 0
                    })
                    numbersGroups2.push(circleAndNumber2)
                }
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups2.length; i++) {
                        let numGroup = numbersGroups2[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 300);
                        }, i * 300);
                    }
                }, 5000);
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups2.length; i++) {
                        let numGroup = numbersGroups2[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 300);
                        }, i * 300);
                    }
                }, 11500);

                return { discrete: g, percentage: null }
            }
        }

        let page35 = {
            label: 'place German unit for 5 LOC length',
            pageInt: 35,
            delay: 0,
            duration: 13000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "35")
                let textXpos = 1000
                let textYpos = 488
                textBox(g,
                    `Since it is Mud weather, that Soviet armor unit
                    does not exert any ZOCs. It is not on any road,
                    and there is no adjacent town or city hex.`,
                    textXpos - 50, textYpos - 50, 500, 8000)
                textBox(g,
                    `Let's put an Axis unit here.`,
                    textXpos + 350, textYpos - 160, 8000, 12000)
                sgAxisCombatUnit.value = g.image(german_infantry_unit, 1220, -64, 0, 0);
                sgAxisCombatUnit.value.attr({
                    'xlink:href': german_infantry_unit,
                    'width': "64",
                    'height': "64",
                    'opacity': 1
                });
                registerTimer(() => {
                    //  combat_unit.animate({ width: 35, height: 35, transform: 't 44, 44 ' }, 500);
                    sgAxisCombatUnit.value.animate({ transform: 't 0, 382 ' }, 500, mina.easeout);
                }, 9500);

                return { discrete: g, percentage: null }
            }
        }

        let page36 = {
            label: 'failed LOC',
            pageInt: 36,
            delay: 0,
            duration: 15000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "36")
                let posX = 674
                let posY = 443
                textBox(g,
                    `Due to Mud weather, the LOC is reduced to 5 hexes.`,
                    posX, posY, 500, 9500)

                textBox(g,
                    `Due to Mud weather, the LOC is reduced to 5 hexes.
                    The unit cannot reach General Supply.`,
                    posX, posY, 8500, 14000)
                let numberPositions = []
                numberPositions.push({ x: 1184, y: 313 }); // 1
                numberPositions.push({ x: 1118, y: 274 }); // 2
                numberPositions.push({ x: 1051, y: 313 }); // 3
                numberPositions.push({ x: 984, y: 350 }); // 4
                numberPositions.push({ x: 917, y: 313 }); // 5
                let numbersGroups = []
                for (let i = 0; i < numberPositions.length; i++) {
                    let circleN = g.circle(numberPositions[i].x, numberPositions[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numberPositions[i].x, numberPositions[i].y, i + 1).attr({
                        "textAnchor": "middle",
                        "dominant-baseline": "central",
                        "fontSize": 45 * sgCrossBrowserFontSizeRatio.value,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "black",
                        opacity: 1,
                    })
                    let circleAndNumber = g.group(circleN, msTextN)
                    circleAndNumber.attr({
                        opacity: 0
                    })
                    numbersGroups.push(circleAndNumber)
                }
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 300);
                        }, i * 300);
                    }
                }, 5500);
                // shake last supply hex
                registerTimer(() => {
                    numbersGroups[numbersGroups.length - 1].animate({ transform: 't 2, 2 ' }, 100, mina.linear);
                    registerTimer(() => {
                        numbersGroups[numbersGroups.length - 1].animate({ transform: 't -4, -4 ' }, 100, mina.linear);
                        registerTimer(() => {
                            numbersGroups[numbersGroups.length - 1].animate({ transform: 't 2, 2 ' }, 100, mina.linear);
                            registerTimer(() => {
                                numbersGroups[numbersGroups.length - 1].animate({ transform: 't -2, -2 ' }, 100, mina.linear);
                                registerTimer(() => {
                                    numbersGroups[numbersGroups.length - 1].animate({ transform: 't 4, -4 ' }, 100, mina.linear);
                                    registerTimer(() => {
                                        numbersGroups[numbersGroups.length - 1].animate({ transform: 't -2, 2 ' }, 100, mina.linear);
                                        registerTimer(() => {
                                            numbersGroups[numbersGroups.length - 1].animate({ transform: 't 1, -1 ' }, 100, mina.linear);
                                        }, 100);
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 100);
                    }, 100);
                }, 7500);




                registerTimer(() => {
                    for (let i = numbersGroups.length; i > 0; i--) {
                        let numGroup = numbersGroups[numbersGroups.length - i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 90);
                        }, i * 90);
                    }
                }, 14000);
                // bring in emergency supply marker
                sgEmergencySupplyMarker.value = g.image(emergencySupply, 1146, -64, 0, 0);
                sgEmergencySupplyMarker.value.attr({
                    'xlink:href': emergencySupply,
                    'width': "64",
                    'height': "64",
                    'opacity': 1
                });
                registerTimer(() => {
                    sgEmergencySupplyMarker.value.animate({ width: 64, height: 64, transform: 't 0, 337' }, 500, mina.easeout);
                }, 18500);

                return { discrete: g, percentage: null }
            }
        }

        let page37 = {
            label: 'shift German unit into 5 LOC length',
            pageInt: 37,
            delay: 0,
            duration: 5000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "37")
                let posX = 1000
                let posY = 488
                let textXpos = posX + 15
                let textYpos = posY + 50
                textBox(g,
                    `Let's shift that Axis unit over a hex.`,
                    textXpos, textYpos, 500, 4500)
                registerTimer(() => {
                    //  combat_unit.animate({ width: 35, height: 35, transform: 't 44, 44 ' }, 500);
                    sgAxisCombatUnit.value.animate({ transform: 't -68, 344 ' }, 500, mina.easeout);
                }, 2500);

                return { discrete: g, percentage: null }
            }
        }

        let page38 = {
            label: 'successful LOC in mud',
            pageInt: 36,
            delay: 0,
            duration: 10000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "36")
                let posX = 870
                let posY = 490
                textBox(g,
                    `Now it can reach General Supply.`,
                    posX, posY, 500, 9500)
                let numberPositions = []
                numberPositions.push({ x: 1118, y: 274 }); // 2
                numberPositions.push({ x: 1051, y: 313 }); // 3
                numberPositions.push({ x: 984, y: 350 }); // 4
                numberPositions.push({ x: 917, y: 313 }); // 5
                numberPositions.push({ x: 851, y: 351 }); // 5
                let numbersGroups = []
                for (let i = 0; i < numberPositions.length; i++) {
                    let circleN = g.circle(numberPositions[i].x, numberPositions[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numberPositions[i].x, numberPositions[i].y, i + 1).attr({
                        "textAnchor": "middle",
                        "dominant-baseline": "central",
                        "fontSize": 45 * sgCrossBrowserFontSizeRatio.value,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "black",
                        opacity: 1,
                    })
                    //number1 = g.group(circle1, msTextN1)
                    let circleAndNumber = g.group(circleN, msTextN)
                    circleAndNumber.attr({
                        opacity: 0
                    })
                    numbersGroups.push(circleAndNumber)
                }

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 300);
                        }, i * 300);
                    }
                }, 1500)
                registerTimer(() => {
                    for (let i = numbersGroups.length; i > 0; i--) {
                        let numGroup = numbersGroups[numbersGroups.length - i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 90);
                        }, i * 90);
                    }
                }, 9000);

                return { discrete: g, percentage: null }
            }
        }

        let page39 = {
            label: 'shift soviet armor division over',
            pageInt: 39,
            delay: 1000,
            duration: 5000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "39")
                let posX = 938
                let posY = 119
                let textXpos = posX + 15
                let textYpos = posY + 50
                textBox(g,
                    `So say the Soviet unit is over here..`,
                    textXpos, textYpos, 500, 3500)
                registerTimer(() => {
                    sgSovietArmorUnit.value.animate({ width: 64, height: 64, transform: 't 67, 303' }, 500, mina.easeout);
                }, 2500)

                return { discrete: g, percentage: null }
            }
        }

        let page40 = {
            label: 'show soviet armor zoc into town',
            pageInt: 40,
            delay: 0,
            duration: 10100,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "40")
                let posX = 768
                let posY = 422
                let textXpos = posX + 15
                let textYpos = posY + 50
                textBox(g,
                    `Does the Soviet unit have a ZOC? -`,
                    textXpos, textYpos, 500, 5000)
                textBox(g,
                    `Does the Soviet unit have a ZOC? -
                        Yes, now the ZOC extends to the adjacent town.`,
                    textXpos, textYpos, 4000, 9000)
                let angleMult = 60
                let zocPaths = ``
                for (let i = 0; i < 7; i++) {
                    let x = Math.cos(i * angleMult * Math.PI / 180) * 46
                    let y = Math.sin(i * angleMult * Math.PI / 180) * 46
                    if (i === 0) {
                        zocPaths += `M ${x} ${y} `
                    }
                    else {
                        zocPaths += ` L ${x} ${y} `
                    }
                };
                zocPaths += ` Z `
                let zocPath = g.path(zocPaths).attr({
                    fill: "yellow",
                    stroke: "red",
                    strokeWidth: 2,
                    opacity: 0.5
                });
                let msZocText = g.text(0, 0, "ZOC").attr({
                    "textAnchor": "middle",
                    "dominant-baseline": "central",
                    "fontSize": 25,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 1,
                })
                let zocGroup = g.group()
                zocGroup.attr({ opacity: 0 })
                zocGroup.add(zocPath, msZocText)
                zocGroup.transform('t 850, 272 s 0.5')
                registerTimer(() => {
                    zocGroup.animate({ width: 64, height: 64, transform: 't 917, 313', opacity: 1 }, 500, mina.easeout);
                }, 5000)
                sgZocGroup.value = zocGroup

                return { discrete: g, percentage: null }
            }
        }

        let page41 = {
            label: 'can the Axis unit still reach supply',
            pageInt: 41,
            delay: 0,
            duration: 16100,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "41")
                let posX = 874
                let posY = 453
                textBox(g,
                    `Can the Axis unit still reach General Supply?`,
                    posX, posY, 500, 7500)
                textBox(g,
                    `Can the Axis unit still reach General Supply?
                    Yes it can, by diverting through the woods.`,
                    posX, posY, 7000, 14500)
                let numberPositions = []
                numberPositions.push({ x: 1118, y: 274 }); // 1
                numberPositions.push({ x: 1051, y: 313 }); // 2
                numberPositions.push({ x: 984, y: 350 }); // 3
                numberPositions.push({ x: 917, y: 388 }); // 4
                numberPositions.push({ x: 851, y: 351 }); // 5
                let numbersGroups = []
                for (let i = 0; i < numberPositions.length; i++) {
                    let circleN = g.circle(numberPositions[i].x, numberPositions[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numberPositions[i].x, numberPositions[i].y, i + 1).attr({
                        "textAnchor": "middle",
                        "dominant-baseline": "central",
                        "fontSize": 45 * sgCrossBrowserFontSizeRatio.value,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "black",
                        opacity: 1,
                    })
                    //number1 = g.group(circle1, msTextN1)
                    let circleAndNumber = g.group(circleN, msTextN)
                    circleAndNumber.attr({
                        opacity: 0
                    })
                    numbersGroups.push(circleAndNumber)
                }
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 300);
                        }, i * 300);
                    }
                }, 4000);
                registerTimer(() => {
                    for (let i = numbersGroups.length; i > 0; i--) {
                        let numGroup = numbersGroups[numbersGroups.length - i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 90);
                        }, i * 90);
                    }
                }, 11000);
                registerTimer(() => {
                    if (sgZocGroup.value) {
                        sgZocGroup.value.animate({ opacity: 0 }, 500)
                    }
                }, 10000);
                registerTimer(() => {
                    if (sgZocGroup.value) {
                        sgZocGroup.value.remove()
                        sgZocGroup.value = null
                    }
                }, 15500)

                return { discrete: g, percentage: null }
            }
        }

        let page42 = {
            label: 'move soviet armor division to motorway',
            pageInt: 42,
            delay: 0,
            duration: 5000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "42")
                let posX = 1038
                let posY = 379
                textBox(g,
                    `Let's move that Soviet unit down one hex.`,
                    posX, posY, 1000, 4000)
                registerTimer(() => {
                    if (sgSovietArmorUnit.value) {
                        sgSovietArmorUnit.value.animate({ transform: 't 66, 381' }, 500, mina.easeout);
                    }
                }, 2500)

                return { discrete: g, percentage: null }
            }
        }

        let page43 = {
            label: 'show soviet armor zocs on motorway',
            pageInt: 43,
            delay: 1000,
            duration: 10000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "43")
                let posX = 788
                let posY = 493
                textBox(g,
                    `Since the unit is on a motorway, it's ZOC extends
                    into the two adjacent and connected road hexes.`,
                    posX, posY, 500, 9500)
                let angleMult = 60
                let zocPaths = ``
                for (let i = 0; i < 7; i++) {
                    let x = Math.cos(i * angleMult * Math.PI / 180) * 46
                    let y = Math.sin(i * angleMult * Math.PI / 180) * 46
                    if (i === 0) {
                        zocPaths += `M ${x} ${y} `
                    }
                    else {
                        zocPaths += ` L ${x} ${y} `
                    }
                };
                zocPaths += ` Z `
                let zocPath = g.path(zocPaths).attr({
                    fill: "yellow",
                    stroke: "none",
                    strokeWidth: 2,
                    opacity: 0.5
                });
                let zocPath2 = g.path(zocPaths).attr({
                    fill: "none",
                    stroke: "red",
                    strokeWidth: 2,
                    opacity: 1
                });
                let msZocText = g.text(0, 0, "ZOC").attr({
                    "textAnchor": "middle",
                    "dominant-baseline": "central",
                    "fontSize": 25,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 1,
                })
                let zocGroup = g.group()
                zocGroup.attr({ opacity: 0 })
                zocGroup.add(zocPath, zocPath2, msZocText)
                zocGroup.transform('t 850, 349 s 0.5')
                let zocClone = zocGroup.clone(true);
                zocClone.transform('t 850, 349 s 0.5')
                registerTimer(() => {
                    zocGroup.animate({ width: 64, height: 64, transform: 't 917, 313', opacity: 1 }, 500, mina.easeout);
                    zocClone.animate({ width: 59, height: 59, transform: 't 783, 390', opacity: 1 }, 500, mina.easeout);
                }, 5000)
                sgZocGroup.value = g.group(zocGroup, zocClone)

                return { discrete: g, percentage: null }
            }
        }

        let page44 = {
            label: 'the Axis unit now cannot reach supply',
            pageInt: 44,
            delay: 0,
            duration: 25000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "44")
                let posX = 860
                let posY = 483
                textBox(g,
                    `The Axis unit now cannot reach General Supply.`,
                    posX, posY, 500, 15000)
                textBox(g,
                    `The Axis unit now cannot reach General Supply.
                         It gets an Emergency Supply marker.`,
                    posX, posY, 14500, 24000)
                let numberPositions = []
                numberPositions.push({ x: 1118, y: 274 }); // 1
                numberPositions.push({ x: 1051, y: 313 }); // 2
                numberPositions.push({ x: 984, y: 350 }); // 3
                numberPositions.push({ x: 917, y: 388 }); // 4
                numberPositions.push({ x: 851, y: 428 }); // 5
                let numbersGroups = []
                for (let i = 0; i < numberPositions.length; i++) {
                    let circleN = g.circle(numberPositions[i].x, numberPositions[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numberPositions[i].x, numberPositions[i].y, i + 1).attr({
                        "textAnchor": "middle",
                        "dominant-baseline": "central",
                        "fontSize": 45 * sgCrossBrowserFontSizeRatio.value,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "black",
                        opacity: 1,
                    })
                    //number1 = g.group(circle1, msTextN1)
                    let circleAndNumber = g.group(circleN, msTextN)
                    circleAndNumber.attr({
                        opacity: 0
                    })
                    numbersGroups.push(circleAndNumber)
                }
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 300);
                        }, i * 300);
                    }
                    // shake last supply hex
                    registerTimer(() => {
                        numbersGroups[numbersGroups.length - 1].animate({ transform: 't 2, 2 ' }, 100, mina.linear);
                        registerTimer(() => {
                            numbersGroups[numbersGroups.length - 1].animate({ transform: 't -4, -4 ' }, 100, mina.linear);
                            registerTimer(() => {
                                numbersGroups[numbersGroups.length - 1].animate({ transform: 't 2, 2 ' }, 100, mina.linear);
                                registerTimer(() => {
                                    numbersGroups[numbersGroups.length - 1].animate({ transform: 't -2, -2 ' }, 100, mina.linear);
                                    registerTimer(() => {
                                        numbersGroups[numbersGroups.length - 1].animate({ transform: 't 4, -4 ' }, 100, mina.linear);
                                        registerTimer(() => {
                                            numbersGroups[numbersGroups.length - 1].animate({ transform: 't -2, 2 ' }, 100, mina.linear);
                                            registerTimer(() => {
                                                numbersGroups[numbersGroups.length - 1].animate({ transform: 't 1, -1 ' }, 100, mina.linear);
                                            }, 100);
                                        }, 100);
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 100);
                    }, 2100);
                }, 4000);


                let numberPositions2 = []
                numberPositions2.push({ x: 1118, y: 274 }); // 1
                numberPositions2.push({ x: 1051, y: 313 }); // 2
                numberPositions2.push({ x: 984, y: 274 }); // 3
                numberPositions2.push({ x: 917, y: 233 }); // 4
                numberPositions2.push({ x: 851, y: 274 }); // 5
                let numbersGroups2 = []
                for (let i = 0; i < numberPositions2.length; i++) {
                    let circleN = g.circle(numberPositions2[i].x, numberPositions2[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numberPositions2[i].x, numberPositions2[i].y, i + 1).attr({
                        "textAnchor": "middle",
                        "dominant-baseline": "central",
                        "fontSize": 45 * sgCrossBrowserFontSizeRatio.value,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "black",
                        opacity: 1,
                    })
                    //number1 = g.group(circle1, msTextN1)
                    let circleAndNumber = g.group(circleN, msTextN)
                    circleAndNumber.attr({
                        opacity: 0
                    })
                    numbersGroups2.push(circleAndNumber)
                }
                registerTimer(() => {
                    for (let i = numbersGroups.length; i > 0; i--) {
                        let numGroup = numbersGroups[numbersGroups.length - i];
                        registerTimer(() => {
                            if (numGroup) {
                                numGroup.animate({ opacity: 0 }, 90);
                            }
                        }, i * 90);
                    }
                    registerTimer(() => {
                        for (let i = 0; i < numbersGroups2.length; i++) {
                            let numGroup = numbersGroups2[i];
                            registerTimer(() => {
                                if (numGroup) {
                                    numGroup.animate({ opacity: 1 }, 300);
                                }
                            }, i * 300);
                        }
                        // shake last supply hex
                        registerTimer(() => {
                            numbersGroups2[numbersGroups2.length - 1].animate({ transform: 't 2, 2 ' }, 100, mina.linear);
                            registerTimer(() => {
                                numbersGroups2[numbersGroups2.length - 1].animate({ transform: 't -4, -4 ' }, 100, mina.linear);
                                registerTimer(() => {
                                    numbersGroups2[numbersGroups2.length - 1].animate({ transform: 't 2, 2 ' }, 100, mina.linear);
                                    registerTimer(() => {
                                        numbersGroups2[numbersGroups2.length - 1].animate({ transform: 't -2, -2 ' }, 100, mina.linear);
                                        registerTimer(() => {
                                            numbersGroups2[numbersGroups2.length - 1].animate({ transform: 't 4, -4 ' }, 100, mina.linear);
                                            registerTimer(() => {
                                                numbersGroups2[numbersGroups2.length - 1].animate({ transform: 't -2, 2 ' }, 100, mina.linear);
                                                registerTimer(() => {
                                                    numbersGroups2[numbersGroups2.length - 1].animate({ transform: 't 1, -1 ' }, 100, mina.linear);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 2000);
                    }, 1000);
                }, 9000);


                registerTimer(() => {
                    if (sgZocGroup.value) {
                        sgZocGroup.value.animate({ opacity: 0 }, 500)
                    }
                }, 18500)
                registerTimer(() => {
                    if (sgZocGroup.value) {
                        sgZocGroup.value.remove()
                        sgZocGroup.value = null
                    }
                }, 19100)
                registerTimer(() => {
                    for (let i = numbersGroups2.length; i > 0; i--) {
                        let numGroup = numbersGroups2[numbersGroups2.length - i];
                        registerTimer(() => {
                            if (numGroup) {
                                numGroup.animate({ opacity: 0 }, 300);
                            }
                        }, i * 90);
                    }
                }, 18000);
                registerTimer(() => {
                    sgMudRoadIndicators.value.forEach(ind => {
                        if(ind) {
                            ind.animate({ opacity: 0 }, 500)
                        }
                    })
                }, 18000)
                registerTimer(() => {
                    sgMudRoadIndicators.value.forEach(ind => {
                        if(ind) {
                            ind.remove()
                        }
                    })
                    sgMudRoadIndicators.value = []
                }, 19500)
                // emergency supply
                sgEmergencySupplyMarker.value = g.image(emergencySupply, 1146, -64, 0, 0);
                sgEmergencySupplyMarker.value.attr({
                    'xlink:href': emergencySupply,
                    'width': "64",
                    'height': "64",
                    'opacity': 1
                });
                registerTimer(() => {
                    sgEmergencySupplyMarker.value.animate({ width: 64, height: 64, transform: 't 0, 337' }, 500, mina.easeout);
                }, 18500);

                return { discrete: g, percentage: null }
            }
        }

        let page45 = {
            label: 'Other supply rules...',
            pageInt: 45,
            delay: 0,
            duration: 28500,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "45")
                let posX = 160
                let posY = 330
                textBox(g,
                    `Other rules regarding Supply...`,
                    posX, posY, 500, 2500, 0, 76, 350)
                textBox(g,
                    `Other rules regarding Supply -
                     A LOC cannot cross a lake or major river hexside (unless frozen) unless
                     its across a non-destroyed bridge or a friendly Bridge or Ferry marker.`,
                    posX, posY, 1500, 16500, 0, 0, 350)
                let majorRiverGraphic = g.image(majorRiver, posX, posY + 5, 311, 110);
                majorRiverGraphic.attr({
                    'opacity': 0
                });
                registerTimer(() => {
                    majorRiverGraphic.animate({ opacity: 1 }, 500);
                }, 500);
                registerTimer(() => {
                    majorRiverGraphic.animate({ opacity: 0 }, 500);
                }, 15900);
                registerTimer(() => {
                    majorRiverGraphic.remove()
                }, 16400);
                posX += 69
                textBox(g,
                    `Other rules regarding Supply -
                     During Dry or Mud weather, a minor road allows the tracing of 
                     a LOC through a swamp hex during at a max LOC length of 5 hexes 
                     (otherwise a LOC cannot go through a swamp hex).`,
                    posX, posY, 16000, 27000, 0, 30, 280)

                let swampMinorRoadGraphic = g.image(swampMinorRoad, posX, posY + 5, 230, 194);
                swampMinorRoadGraphic.attr({
                    'opacity': 0
                });
                registerTimer(() => {
                    swampMinorRoadGraphic.animate({ opacity: 1 }, 500);
                }, 16000);
                registerTimer(() => {
                    swampMinorRoadGraphic.animate({ opacity: 0 }, 500);
                }, 27000);
                registerTimer(() => {
                    swampMinorRoadGraphic.remove()
                }, 28000);

                return { discrete: g, percentage: null }
            }
        }

        let page46 = {
            label: 'reached the end',
            pageInt: 45,
            delay: 0,
            duration: 6500,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "45")
                let posX = 160
                let posY = 330
                textBox(g,
                    `This animation is now restarting`,
                    posX, posY)

                return { discrete: g, percentage: null }
            }
        }

        const populateStoryBoard = () => {
            let _storyBoard = []
            _storyBoard.push(page1)
            _storyBoard.push(page1b)
             _storyBoard.push(page2)
            _storyBoard.push(page3)
            _storyBoard.push(page4)
             _storyBoard.push(page5)
            _storyBoard.push(page6)
            _storyBoard.push(page7)
            _storyBoard.push(page8)
            _storyBoard.push(page9)
            _storyBoard.push(page10)
            _storyBoard.push(page11)
            _storyBoard.push(page12)
            _storyBoard.push(page13)
            _storyBoard.push(page14)
            _storyBoard.push(page15)
            _storyBoard.push(page16)
            _storyBoard.push(page17)
            _storyBoard.push(page18)
            _storyBoard.push(page19)
            _storyBoard.push(page20)
            _storyBoard.push(page21)
            _storyBoard.push(page22)
            _storyBoard.push(page23)
            _storyBoard.push(page24)
            _storyBoard.push(page25)
            _storyBoard.push(page26)
            _storyBoard.push(page27)

            _storyBoard.push(page29)
            _storyBoard.push(page30)
            _storyBoard.push(page30b)
            _storyBoard.push(page31)
            _storyBoard.push(page32)
            _storyBoard.push(page33)
            _storyBoard.push(page34)
            _storyBoard.push(page35)
            _storyBoard.push(page36)
            _storyBoard.push(page37)
            _storyBoard.push(page38)
            _storyBoard.push(page39)
            _storyBoard.push(page40)
            _storyBoard.push(page41)
            _storyBoard.push(page42)
            _storyBoard.push(page43)
            _storyBoard.push(page44)
            _storyBoard.push(page45)
            _storyBoard.push(page46)
            return _storyBoard
        }
        sgStoryBoard.value = populateStoryBoard()
        sequence()
    }

    const displayZocs = (g, xShift, yShift) => {
        let zocGroup = g.group()
        let angleMult = 60
        let zocPaths = ``
        for (let i = 0; i < 7; i++) {
            let x = Math.cos(i * angleMult * Math.PI / 180) * 46
            let y = Math.sin(i * angleMult * Math.PI / 180) * 46
            if (i === 0) {
                zocPaths += `M ${x} ${y} `
            }
            else {
                zocPaths += ` L ${x} ${y} `
            }
        };
        zocPaths += ` Z `
        let zocPath = g.path(zocPaths).attr({
            fill: "none",
            stroke: "black",
            strokeWidth: 1,
            opacity: 0.5
        });
        zocGroup.add(zocPath)
        zocPath.transform(`t ${xShift}, ${yShift}`);
        zocPath.animate({ opacity: 1 }, 500);
        for (let i = 0; i < 6; i++) {
            registerTimer(() => {
                let x = Math.sin((i * (angleMult)) * Math.PI / 180) * 78
                let y = Math.cos((i * (angleMult)) * Math.PI / 180) * 78
                let zocClone = zocPath.clone(true);
                zocGroup.add(zocClone)
                zocClone.transform(`t ${xShift + x}, ${yShift + y}`);
                zocClone.attr({
                    fill: "yellow",
                    stroke: "black",
                    strokeWidth: 1,
                    opacity: 0.5
                })
                let msText = g.text(0, 0, "ZOC").attr({
                    "textAnchor": "middle",
                    "dominant-baseline": "central",
                    "fontSize": 25,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 1,
                })
                msText.transform(`t ${xShift + x}, ${yShift + y}`, 500);
                zocGroup.add(msText)
            }, i * 50);
        }

        return zocGroup
    }

    const sequence = async () => {
        while (sgStoryBoard.value.length > 0) {
            let _storyBoard = [...sgStoryBoard.value];
            let page = _storyBoard.shift()
            sgStoryBoard.value = _storyBoard
            if (page.async) {
                await runPage(page)
            }
            else {
                runPage(page)
            }
        }
        restartSequence()
    }

    const restartSequence = () => {
        sgStoryBoard.value = []
        if (sgLastPageGroup.value) {
            sgLastPageGroup.value.remove()
            sgLastPageGroup.value = null
        }
        if (sgLastPageGroup.value) {
            sgLastPageGroup.value.remove()
            sgLastPageGroup.value = null
        }
        if (sgAxisCombatUnit.value) {
            sgAxisCombatUnit.value.remove()
            sgAxisCombatUnit.value = null
        }
        if (sgSovietArmorUnit.value) {
            sgSovietArmorUnit.value.remove()
            sgSovietArmorUnit.value = null
        }
        if (sgSovietCombatUnit.value) {
            sgSovietCombatUnit.value.remove()
            sgSovietCombatUnit.value = null
        }
        if (sgAxisRailEndUnit.value) {
            sgAxisRailEndUnit.value.remove()
            sgAxisRailEndUnit.value = null
        }
        if (sgSovietRailBreak.value) {
            sgSovietRailBreak.value.remove()
            sgSovietRailBreak.value = null
        }
        if (sgSovietMdnoUnit.value) {
            sgSovietMdnoUnit.value.remove()
            sgSovietMdnoUnit.value = null
        }
        if (sgSovietInfantryUnit.value) {
            sgSovietInfantryUnit.value.remove()
            sgSovietInfantryUnit.value = null
        }
        if (sgSovietArmorUnit.value) {
            sgSovietArmorUnit.value.remove()
            sgSovietArmorUnit.value = null
        }
        if (sgZocGroup.value) {
            sgZocGroup.value.remove()
            sgZocGroup.value = null
        }
        if (sgSunGroup.value) {
            sgSunGroup.value.remove()
            sgSunGroup.value = null
        }
        if (sgSovietRailBreak.value) {
            sgSovietRailBreak.value.remove()
            sgSovietRailBreak.value = null
        }
        sgTimers.value = []
        sgMudRoadIndicators.value = []
        if (sgBackgroundImage.value) {
            sgBackgroundImage.value.remove()
            sgBackgroundImage.value = null
        }
        if (sgMudWeatherGroup.value) {
            sgMudWeatherGroup.value.remove()
            sgMudWeatherGroup.value = null
        }
        sgUseTextSize.value = null
        sgUseLineBreak.value = null
        if (sgEmergencySupplyMarker.value) {
            sgEmergencySupplyMarker.value.remove()
            sgEmergencySupplyMarker.value = null
        }
        if (sgSupplyCircle.value) {
            sgSupplyCircle.value.remove()
            sgSupplyCircle.value = null
        }
        sgShadowFilter.value = null
        setupStoryboard()
    }

    const runPage = async page => {
        return new Promise((resolve) => {

            registerTimer(() => {
                let result = null
                if (page.fn) {
                    result = page.fn();
                    if (result.discrete) {
                        sgDimensions.value = sgBackgroundImage.value.node.getBoundingClientRect();
                        result.discrete.transform(`s${sgDimensions.value.width / 1900}, ${sgDimensions.value.height / 852}, 0, 0`)
                    }
                }



                registerTimer(() => {
                    if (page.remove && result) {
                        if (result.discrete) {
                            result.discrete.animate({ opacity: 0 }, 100);
                            registerTimer(() => {
                                result.discrete.remove();
                            }, 100);
                        }
                        if (result.percentage) {
                            result.percentage.remove();
                        }
                    }
                    resolve(result);
                }, page.duration)


            }, page.delay)

        });

    }

    return (
        <div className="content">

            <div className="content-title">
                <div>SUPPLY<BsrLink page="9" rule="6.0" /></div>
                <div></div>
            </div>

            <div>
                <span>
                    There are two types of supply represented in the East Front Series.
                    They represent two different things.

                    <span className="spacer1rem" />
                    <div className="stand-out green">General Supply<BsrLink page="10" rule="6.32" /></div>


                    <div className="padded">
                        For a military unit to be in "General Supply" means that the unit has a steady stream of goods that are needed daily by
                        military units
                        in the field - items such as
                        food, medical supplies, blankets, shoes, coats, fuels, grease and oils, tools, replacement parts, etc etc.
                    </div>
                    <div className="padded">
                        Units need to be in General Supply to avoid various penalties, such as reduced mobility and combat abilities.
                    </div>
                    <div className="padded">
                        There are no counters or charts for representing General Supply.
                    </div>
                    <div className="padded">
                        Units are determined to have General Supply by being on a General Supply route
                        which is determined by counting hexes from the unit to a hex that is providing General Supply.
                    </div>
                    <div className="padded">
                        The supply route is usually traced
                        along a Line of Communications (LOC) then to a Railroad or a Road (not minor road), or a limited
                        combination of these.
                    </div>
                    <span className="spacer1rem" />
                    <div className="stand-out red">Attack Supply<BsrLink page="39" rule="15.2" /></div>
                    <div className="padded">
                        "Attack Supply" represents a concentration of items, identified by Supply units on the map, that have been positioned near the attacking unit(s)
                        when a major military operation is planned -
                        the Supply units represent such items as
                        ammunition, shells, rockets, extra fuel, replacement vehicles, etc. Although military units usually carry with them quantities
                        ammunition and other military supplies needed to perform in combat - for a
                        planned attack where the unit(s) is needed to perform at full capacity, they will need a surplus of these items,
                        since the military ordnance will be expended at a much faster rate during combat. And this "surplus" of combat supplies
                        is identified by where the attack Supply units are at. Air missions, however, never need Attack Supply.
                    </div>
                    <div className="padded">
                        In the EFS game system, <b><i>ground units can attack without Attack Supply</i></b>, but they will suffer
                        increased risk of losses, and also means that artillery support will probably not be provided.
                    </div>

                    <div className="padded">
                        Attack Supply is represented on the map by
                        Attack Supply counters that you need to move to be near the units that are fighting and that need to consume the Attack Supply.
                    </div>
                </span>
            </div>

            <div className="padded">
            </div>

            <span>
                <div className="subheader-image">
                    <div>General Supply<BsrLink page="10" rule="6.32" /></div>
                    <img className="barrels-image" src={barrels} alt="general supply barrels" />
                </div>

                <div className="padded-top">
                    General Supply for all units is checked during the Supply Status Phase.<BsrLink page="9" rule="6.11" />
                </div>
                <div className="padded">
                    General Supply is delivered to units by tracing a path of contiguous hexes from a unit to a supply source.<BsrLink page="9" rule="6.12" /> The route may consist of 3 different types that can connect to each other:
                </div>
            </span>

            <div className="padded">
                <div className="gray-box">
                    <div className="subsubheader">General Supply Route types<BsrLink page="9" rule="6.1" /></div>
                    <ul>
                        <li>a Railroad Net</li>
                        <li>a Road Net</li>
                        <li>a Line of Communications (LOC)</li>
                    </ul>
                    <div className="subsubheader">How they can connect:<BsrLink page="9" rule="6.12" /></div>
                    <ul>
                        <li>Supply source &#10137; Railroad Net &#10137; Road Net &#10137; LOC</li>
                        <li>Supply source &#10137; Railroad Net &#10137; LOC</li>
                        <li>Supply source &#10137; Road Net &#10137; LOC</li>
                        <li>Supply source &#10137; LOC</li>
                    </ul>

                </div>
            </div>
            <span className="spacer1rem" />
            <div className="rules-note">
                Although you can visualize a constant stream of trucks and wagons carrying supplies to units on the front lines, the
                actual tracing of a supply line is done by counting hexes from a hex adjacent to the unit to a hex on the General Supply
                route.
                You do not actually count the hex the unit is in - you start counting from an adjacent hex. That adjacent hex will be
                hex number 1 if you are tracing the hexes of a LOC. One exception - a unit can't reach across a hexside that has
                an enemy fortified belt hexside.
            </div>
            <span className="spacer1_5rem" />
            6.13 No component of a Supply Route can be traced:<BsrLink page="9" rule="6.13" />
            <ul className="spread-list">
                <li>Through a hex in an enemy ZOC unless that hex is occupied
                    by a friendly combat unit.
                </li>
                <li>
                    Across lake or major river hexsides (unless frozen) unless
                    across a non-destroyed bridge or a friendly Bridge or Ferry
                    marker.
                </li>
                <li>Into or through any number of swamp hexes in Dry or Mud
                    weather unless along a road or railroad. If the road or railroad
                    cannot be used to trace an LOC, the hex cannot be a part of
                    the LOC (the road, or railroad, must enter the swamp hex
                    from a hex in the LOC and exit into a hex in the same LOC).
                </li>
                <li>Into or through a hex with a non-destroyed enemy citadel,
                    fortified belt, strongpoint, or strongpoint under-construction.
                </li>
                <li>Across a non-destroyed enemy fortified line hexside.
                </li>
            </ul>
            <span className="spacer1rem" />
            <img className="" src={germanSupply} alt="German supply trucks" />
            <div className="subheader-rule" style={{ marginTop: '1rem' }}>
                <div>General Supply Route<BsrLink page="10" rule="6.1" /></div>
            </div>

            <div className="padded">
                A General Supply route is traced along a path of contiguous hexes from a ground unit to:
                <ul className="spread-list">
                    <li>a Supply Source.</li>
                    <li>a Line of Communications (LOC)<BsrLink page="10" rule="6.14" /> that connects (7 or 5 hexes max) to a Supply Source.</li>
                    <li>a Road Net<BsrLink page="10" rule="6.15" /> that connects (24 or 15 hexes max) to a Supply Source.</li>
                    <li>a Road Net<BsrLink page="10" rule="6.15" /> that connects (24 or 15 hexes max) to a railroad that connects to a Supply Source.</li>
                    <li>a Railroad Net<BsrLink page="10" rule="6.16" /> which connects to a Supply Source.</li>
                </ul>
            </div>
            <div className="subheader-rule" style={{ marginTop: '1rem' }}>
                <div>Line of Communications (LOC)<BsrLink page="10" rule="6.14" /></div>
            </div>
            <div className="padded">
                A Line of Communications (LOC) is the portion of a General Supply route that connects
                from a unit to a Supply Source, which can be the actual General Supply source hex,
                or via a Road Net or Railroad Net that connects to a General Supply Source. You can
                consider it as the "off road" portion that can cross most hexes to reach a hex
                that is providing General Supply. The LOC isn't required to follow a road or railroad.
            </div>
            <div className="padded">
                The length of the LOC is normally 7 hexes, but it is reduced to 5 hexes under these conditions:<BsrLink page="10" rule="6.14c" />
                <ul className="spread-list">
                    <li>The current weather is Mud.</li>
                    <li>The current weather is Dry and the LOC enters or crosses a hex that is under the Lingering Mud condition.</li>
                    <li>The LOC enters or crosses a marsh hex (unless along a regular road or railroad) in Dry Weather.</li>
                    <li>The LOC enters or crosses a swamp hex (unless along a regular road) in Dry or Mud Weather.</li>
                </ul>
            </div>

            <div>
                <div className="gray-box">
                    <div className="subsubheader">Lengths of supply routes:</div>
                    <ul>
                        <li>Railroad - any distance (For Axis, all railroad hexes used must be "converted" railroad hexes).<BsrLink page="10" rule="6.16" /></li>
                        <li>Main Road (or Motorway) - 21 hexes (not movement points - count only hexes). In Mud or Snow/Arctic this is reduced to 15 hexes.<BsrLink page="10" rule="6.15" /></li>
                        <li>LOC - 7 hexes (not movement points, count only hexes). In Mud or Snow/Arctic this is reduced to 5 hexes.<BsrLink page="10" rule="6.14b" /></li>
                        <li>LOC (additional restriction) - 5 hexes when tracing along a road or railroad in swamp hex during Dry weather.<BsrLink page="10" rule="6.14c" /></li>
                        <li>LOC (additional restriction) - 5 hexes when tracing through a marsh hex during Dry weather.<BsrLink page="10" rule="6.14c" /></li>
                        <li>LOC (additional restriction) - 5 hexes when tracing through a woods hex during Lingering Mud. If tracing along road or railroad in the woods hex, then this doesn't apply.<BsrLink page="10" rule="6.14c" /></li>
                    </ul>
                </div>
            </div>
            <div className="subheader-rule">
                <div>General Supply specific clarifications</div>
            </div>
            <div className="padded">
                <span>
                    The Railroad used in a supply trace has to be contiguous hexes of the same (or connecting) railroad.<BsrLink page="10" rule="6.16" /><br />
                    The Main Road (or Motorway) used in a supply trace has to be contiguous hexes of the same main road.<BsrLink page="10" rule="6.15" /><br />
                    The 7 hexes overland (LOC) has to be contiguous hexes.<BsrLink page="10" rule="6.11" /><br />
                    No "hopping" over hexes is allowed. No leaving a road to go around some obstruction (like an enemy unit) and getting back on the road. Any obstruction on a main road or railroad stops the use of that main road or railroad at the last hex before the obstruction. From there, the LOC goes out up to 7 (or 5) contiguous hexes.<br />
                    A General Supply path can not cross non-frozen lake/inland sea hexsides or unbridged major river. A General Supply path cannot enter a swamp hex during Dry or Mud turns unless the path is along a road or railroad that goes through the hex. A LOC can go along a railroad into a swamp hex during Dry or Mud turns.<br />
                    A General Supply path cannot enter a hex with a undestroyed enemy strongpoint or cross over a non-destroyed
                    fortified line hexside.<BsrLink page="10" rule="6.13" /><br />
                    The path from a Unit to General Supply can only be in this order: LOC -&gt; Railroad -&gt; Main Road or Motorway, with any of them being optional,
                    but you cannot trace along more than one path of each type.<BsrLink page="10" rule="6.12" /><br />
                    Armored trains and flotillas do not require General Supply.<BsrLink page="11" rule="6.37" /><BsrLink page="39" rule="15.22" /><br />
                    Supply rules do not apply to air units.
                </span>
            </div>
            <span className="spacer1rem" />
            <div>
                <div className="gray-box">
                    <div className="subsubheader">Summary of General Supply stoppers:</div>
                    <ul>
                        <li>Cannot go into a hex with an enemy unit in it.<BsrLink page="10" rule="6.13" /></li>
                        <li>Cannot go into a hex with an enemy ZOC in it, unless that hex also has a friendly combat unit in it.<BsrLink page="10" rule="6.13" /></li>
                        <li>Cannot go across a non-frozen lake/inland sea hexside.<BsrLink page="10" rule="6.13" /></li>
                        <li>Cannot go across an unbridged major river.<BsrLink page="10" rule="6.13" /></li>
                        <li>Cannot go into a swamp hex during Dry or Mud turns unless the supply can be traced along road or railroad that goes through the swamp hex(es).<BsrLink page="10" rule="6.13" /></li>
                        <li>Cannot go through an undestroyed enemy strongpoint (although it can go into it, supplying friendly units in it, but the path stops there).<BsrLink page="10" rule="6.13" /></li>
                        <li>Cannot go across undestroyed enemy fortified lines. (Friendly units on the "wrong" side of a fortified line, even if in the same hex as the fortified line, do not get supply through the fortified hexside).<BsrLink page="10" rule="6.13" /></li>
                        <li>Cannot go into a hex along a railroad with a rail cut marker or a converted railhead marker, on that railroad (multiple railroads may originate from a hex, some converted, some not).<BsrLink page="10" rule="6.16" /></li>
                    </ul>
                </div>
            </div>
            <span className="spacer2rem" />
            <svg id="supply_examples" className="supply-svg">
            </svg>
            <span>
                <div className="subheader-rule">
                    <div>Use of Attack Supply as General Supply<BsrLink page="10" rule="6.26" /></div>
                </div>
                <div className="padded">
                    There is one more way for units (and Strongpoints) to get General Supply - you can use Attack Supply as a source of General Supply.
                    <span className="spacer0_5rem" />
                    Using a Attack Supply counter for General Supply uses up that Attack Supply, or 1 point of a Dump, in the General Supply phase.
                    This can be done in up to 5 different hexes per Attack Supply counter or Dump, per turn.
                    <span className="spacer0_5rem" />
                    This procedure gives General Supply to friendly units that can trace 7 (or 5 as per LOC limitation) hexes, under the same conditions as tracing a LOC, to the Attack Supply.
                    The units are then considered in General Supply for 1 turn.
                    <span className="spacer0_5rem" />
                    This method of gaining General Supply does qualify for removing Emergency Supply markers or Out of Supply markers from units, as per regular
                    General Supply rules. <br />
                </div>
                <span className="spacer0_5rem" />
                <div className="rules-note">
                    Soviet forces will often use this tactic, since they are often cut off by advancing Axis units, and may have some friendly Attack Supply trapped with them. But you may find yourself, as the Axis player, forced to do this if for example a panzer division got cut off - or if you "planned" on a panzer division being cut off while involved in a deep thrust behind enemy lines.<br />
                    Note that using Attack Supply for General Supply does not give the unit(s) Attack Supply for combat - it only gives them General Supply for the turn.
                </div>
            </span>
            <span>
                <div className="subheader-rule">
                    <div>Effects of not being able to get General Supply</div>
                </div>
                <div className="padded">
                    Units that were in General Supply but are found in the General Supply phase to be unable to trace to General Supply are marked with a "Emergency Supply" marker.
                    <span className="spacer0_5rem" />
                    These units are still considered to be in General Supply. Units that have a "Emergency Supply" marker on them, and are found to still be unable to trace to General Supply during the Supply phase have the "Emergency Supply" marker flipped to "Out of Supply".
                    <span className="spacer0_5rem" />
                    Strongpoints also suffer from being Out of Supply, but they don't get the "Emergency Supply" marker.
                    <span className="spacer0_5rem" />
                    Units that are marked "Out of Supply" have the following negative effects:
                </div>
            </span>
            <div>
                <div className="gray-box">
                    <div className="subsubheader">Effects of being Out of Supply<BsrLink page="11" rule="6.35" /></div>
                    <ul>
                        <li>2 (two) Movement points are subtracted from its normal movement allowance (prior to any halving due to other rules).
                            Exceptions: Do not reduce the MA of cavalry, flotilla, or armored train units.</li>
                        <li>Out of Supply Axis motorized units are subject to Fuel Shortage.</li>
                        <li>Cannot conduct Railroad or Strategic movement.</li>
                        <li>The unit cannot conduct overrun.</li>
                        <li>The unit cannot fire defensively (if artillery). OOS artillery can still fire offensively if they are given Attack Supply.</li>
                        <li>A defending stack gives the attacker a -1 drm on the combat roll if any unit defending is OOS.</li>
                        <li>German panzer or German motorized divisions do not get the Divisional Integrity Bonus in an attack if any of its
                            member units participating in the attack are OOS, unless they are given Attack Supply for that attack.</li>
                        <li>Strongpoint markers go out of General Supply just like units - but when they go from "Emergency Supply" to OOS,
                            they are removed from the map.</li>
                        <li>Soviet units that are in the ZOC of an enemy unit and also in Emergency Supply or OOS suffer an additional die roll modifier on their
                            surrender roll.</li>
                        <li>Cannot do Unit Conversion.</li>
                        <li>Cannot receive replacements, except for Soviet units which can still absorb Zap units.</li>
                    </ul>
                </div>
            </div>
            <span className="spacer1_5rem" />
            <div className="padded image-left">
                <img src={sovietStrongpoint} alt="Soviet strongpoint" width="80" height="80" />
                <div>
                    Strongpoints that are unoccupied <b>and</b> not adjacent to a friendly combat unit <b>and</b> which are Out of Supply at the end of the Supply Status Phase are removed.
                    They do not get an "Emergency Supply" marker. Other types of fortifications are not affected.<BsrLink page="11" rule="6.36" />
                </div>
            </div>
            <span className="spacer1rem" />
            <span>
                <div className="subheader-image">
                    <div>Supply Units <BsrLink page="11" rule="6.4" /> and Attack Supply <BsrLink page="39" rule="15." /></div>
                    <img src={sovietCombatSupply} alt="supply counters" width="80" height="80" />
                    <img src={sovietDump} alt="Soviet dump" width="80" height="80" />
                </div>
                <span className="spacer1rem" />
                Attack Supply counters are represented by either the Mobile Supply counter (MSU)
                or by the Supply Dump counter. They provide combat Attack Supply to combat units
                (and could also supply General Supply, see above).<BsrLink page="11" rule="6.41" />
                <span className="spacer0_5rem" />
                They are not considered combat units. They cannot enter an enemy ZOC unless
                accompanied by combat units. They cannot be captured by the enemy. If an enemy
                unit enters a hex with only Supply unit(s), the supply units are returned
                to their side's stock. Supply units can retreat if stacked with
                friendly retreating combat units.<BsrLink page="11" rule="6.42" />
                <span className="spacer0_5rem" />
                When a Supply unit is removed for the map for any reason, it is returned to the
                owning player's stock.<BsrLink page="11" rule="6.43" />
                <span className="spacer0_5rem" />
                Supply counters do not need General Supply.<BsrLink page="11" rule="6.44" />
                <span className="spacer0_5rem" />
                The Scenario Rules specify how many Attack Supply points become available
                during the Reinforcement Phase. The player can decide whether they
                come onto the map as MSUs, or as Supply Dumps. A player cannot have
                more supply units on the map that specified by the scenario.<BsrLink page="11" rule="6.45" />
                <span className="spacer0_5rem" />
                A Mobile Supply counter can be moved as a normal combat unit, although it
                does have a green Movement Allowance, so they only move in their
                side's regular Movement Phase (unless activated by a HQ).<BsrLink page="11" rule="6.46" />
                <span className="spacer0_5rem" />
                A Supply Dump counter can be moved from a player's supply to the map via
                railroad or naval movement. Once a Supply Dump is placed on the map, it cannot move again,
                unless it's reduced to where a 1 supply point MSU is created by the reduction. The MSU created
                can then move in the movement phase.<BsrLink page="12" rule="6.48" />
                <span className="spacer0_5rem" />
            </span>
            <div>
                To use Attack Supply for a combat all units that are participating in the attack, including any artillery units, each unit must be able to trace a LOC (7 or 5 hexes, depending on the current General Supply LOC length <BsrLink page="39" rule="15.21" />) to the Attack Supply counter - either a Mobile Supply counter or a Supply Dump.
                You do not trace from the hex under attack - you trace from the participating attacking units, including any artillery.
                <span className="spacer0_5rem" />
                More than one
                ASP may be required (and spent) to bring all attacking units
                into Attack Supply, but no ASP can provide Attack Supply to
                more than one attack. <BsrLink page="39" rule="15.21" />
                <div className="rules-note">
                    To be efficient with Combat Supply, its important to try to position the Supply counters
                    so that it can reach all attacking units (including any artillery), so that you only need
                    to expend 1 supply point.
                </div>
                <span className="spacer0_5rem" />
                <div className="rules-note">
                    All combat units that are attacking a Defender Hex must have Attack Supply expended for their
                    attack, or else the attack is considered going ahead without Attack Supply. Therefore - if you
                    can only supply some of the units, but not others - you need to decide if the attack will
                    go ahead with no expenditure of Combat Supply, or perhaps to enable some
                    artillery to add their support.
                </div>
                <span className="spacer0_5rem" />
                Attacking artillery participating in combat need to have Attack Supply to use its support value <BsrLink page="39" rule="15.3" />.
                <span className="spacer0_5rem" />
                Defending artillery does not need Attack Supply. Attacking artillery can provide support, if they
                are given Attack Supply, even if no combat units that are attacking have Attack Supply - in this
                case, the combat units are considered to be attacking without Attack Supply, even though it has
                artillery support.<BsrLink page="39" rule="15.34" />
                <span className="spacer0_5rem" />
                After the Attack Supply point is consumed (by either removing the Mobile Supply counter, or flipping a Supply Dump back over to its
                Mobile Supply side), then the attack can proceed as a Combat Supplied attack.<br />
                If tracing to a dump, and more than one attack will be drawing on the dump, the player can wait until all the
                combats are done (after informing his opponent what he's/she's doing), then remove or reduce the dump (depending on how many supply points were drawn from it).<BsrLink page="39" rule="15.21" />
            </div>
            <span className="spacer0_5rem" />
            <div className="rules-note">
                Note that when the odds are 9-1 or greater, the expenditure of Attack Supply is usually not necessary.
            </div>
            <span className="spacer0_5rem" />
            <div className="padded">
                Attack Supply is <span className="b">not required to conduct combat</span>. However, units that attack
                without Attack Supply suffer the following negative effects. Remember - even if you have one unit attacking
                that does not have Attack Supply, the entire attack is considered to be undertaken without Attack Supply. You can omit
                units without Attack Supply from the combat, and use only those with Attack Supply, to avoid this situation.
            </div>
            <span className="spacer0_5rem" />
            <div className="gray-box">
                <div className="subsubheader">Effects of attacking without Attack Supply <BsrLink page="39" rule="15.22" />:</div>
                <ul>
                    <li>+2 die modifier on combat table roll.</li>
                    <li>Artillery cannot provide support.</li>
                    <li>German panzer or German motorized divisions do not get the Divisional Integrity Bonus in an attack if any of its
                        member units participating in the attack are OOS, unless they are given Attack Supply for that attack.</li>
                    <li>Results marked with * (asterisk) on the combat table cause additional losses to the attacker.<BsrLink page="43" rule="16.3" /></li>
                    <li>* (asterisk) results <b><i>still apply to the affected units regardless of their individual
                        combat supply status</i></b> - if the hex was attacked with at least one unit without
                        combat supply - then the attack is considered to have taken place without Combat Supply,
                        and the asterisk result applies to the group of counters that were attacking.<BsrLink page="43" rule="16.32a" /></li>
                </ul>
            </div>

            <ScrollToTopOnMount />

        </div>
    );
}

export default Supply;