import React from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import german_aircraft_big from "../../../images/efs/overview/german_aircraft_big.jpg";
import german_artillery_big from "../../../images/efs/overview/german_artillery_big.jpg";
import german_infantry_division_big from "../../../images/efs/overview/german_infantry_division_big.jpg";
import german_panzer_division from "../../../images/efs/overview/german_panzer_division.jpg";
import german_supply_big from "../../../images/efs/overview/german_supply_big.jpg";
import italian_infantry_division from "../../../images/efs/overview/italian_infantry_division.gif";
import map_sample from "../../../images/efs/overview/map_sample.jpg";
import romanian_infantry_div from "../../../images/efs/overview/romanian_infantry_div.gif";
import slovak_infantry_div from "../../../images/efs/overview/slovak_infantry_div.gif";
import soviet_aircraft_big from "../../../images/efs/overview/soviet_aircraft_big.jpg";
import soviet_artillery_big from "../../../images/efs/overview/soviet_artillery_big.jpg";
import soviet_headquarters_big from "../../../images/efs/overview/soviet_headquarters_big.jpg";
import soviet_infantry_division_big from "../../../images/efs/overview/soviet_infantry_division_big.jpg";
import soviet_supply_big from "../../../images/efs/overview/soviet_supply_big.jpg";

import './Overview.scss';

const Overview = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div className={props.language === 'en' ? '' : 'block-hidden'}>OVERVIEW</div>
                <div className={props.language === 'fr' ? '' : 'block-hidden'}>APERÇU</div>
                <div className={props.language === 'ru' ? '' : 'block-hidden'}>OVERVIEW ru</div>
                <div></div>
            </div>


            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    The East Front Series game system simulates warfare on the Eastern Front, 1941. Units represented as counters are divisions, brigades, regiments, companies, batteries, and groups of planes. The map scale is 5 miles to the hex. A turn represents 2 days. The sequence of play is assymetrical, meaning the Axis order of phases during a turn is different than the Soviet order of phases. Specifically the Axis player gets to move all its units then do combat, the normal "wargame" order of things. But for the Soviets, they move their motorized units, with a very limited ability to move a few non-motorized units with their motorized units, before doing combat. This causes the Soviet abilities to wage war to be handicapped, and neatly inserts the command control problems the Soviets experienced into the game, without the need for artificial "idiot rules". The Soviets in 1941 had so much difficulty in coordinating their armor with their infantry in attacks that often the armor went into the attack without infantry support, and often Soviet units involved in a desperate defence would get no reserves sent to them, even when ample troops were nearby. The rigid Soviet command structure meant that directives from above were to be obeyed, despite the realities on the ground. The Germans, of course, were indoctrinated through their military training to show initiative, and showed great flexibility in battle, with excellent coordination between the various elements of their armed forces.
                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Le système de jeu East Front Series simule les combats sur le Front de l'Est en 1941. Les unitès représentèes par des pions sont des divisions, des règiments, des compagnies, des batteries, et des groupes d'avions. L'èchelle de la carte est 7,5km pour un hex. Un tour reprèsente 2 jours. La sèquence de jeu est assymètrique, ce qui veut dire que l'ordre des phases Allemandes est diffèrent de l'ordre des phases Soviétiques. Plus prècisèment, les Allemands peuvent dèplacer toutes leurs unitès puis combattre, l'ordre des choses normales du "wargame". Mais, pour les Soviétiques, ils dèplacent d'abord leurs unitès motorisèes, avec une capacitè a dèplacer en mème temps quelques unitès non motorisèes, avant de combattre. Ceci diminue sèrieusement les capacitès Soviétiques pour engager le combat, et pose de faèon nette les problèmes de contrèle de commandement dans le jeu que les Soviétiques ont pu expèrimenter, sans avoir besoin de "stupides règles" artificielles. En 1941 les Soviétiques avaient tellement de difficultès è coordonner leurs blindès et leur infanterie en attaque si bien que souvent les blindès attaquaient sans le soutien d'infanterie, et bien souvent les unitès Soviétiques engagèes dans une dèfense dèsespèrèe ne recevaient pas de rèserves, mème quand un grand nombre de troupes se trouvait è proximitè. La structure de commandement Soviétique très rigide impliquait que les directives supèrieurs devaient ètre suivies, en dèpit des rèalitès du terrain. Les Allemands, bien sèr, ètaient endoctrinès par leur entraènement militaire pour faire preuve d'initiative, et ètaient très flexibles au combat, avec une excellente coordination entre les divers èlèments de leurs forces armèes.
                </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>

            <div className="spacer1rem" />
            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="title_img_comment_box">
                    <div className="title">GERMAN PANZER DIVISION</div>
                    <div className="image"><img src={german_panzer_division} alt="German panzer division" /></div>
                    <div className="comment">

                        A typical German panzer division consists of one panzer regiment,<br />
                        two motorized infantry regiments, and a recon battalion.

                </div>
                </div>
            </div>

            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="title_img_comment_box">
                    <div className="title">PANZER DIVISION ALLEMANDE</div>
                    <div className="image"><img src={german_panzer_division} alt="German panzer division" /></div>
                    <div className="comment">

                        Une Panzer division Allemande typique est composèe d'un règiment de panzers,<br />
                        de deux règiments d'infanterie motorisèe, et un bataillon de reconnaissance.
                </div>
                </div>
            </div>

            <div className="spacer1rem" />
            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    In this game system, the panzer division is king. Often a panzer division gets the dual combat benefits of "divisional integrity" and "combined arms", which makes them very combat effective. Add into the mix engineers and air support, and panzer divisions can pretty much chew into any defense the Soviets can put up. But the main problem for the Axis player is that there are not enough panzer divisions, and with the lack of time the Axis has to accomplish their objectives, combined with the problems of getting enough Attack Supply to the front, the Axis player is often forced to put his precious panzer divisions into dangerous situations. How well the Axis player balances the need for victory points with risk to his panzer divisions is what gives this game system its excitement level
                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Dans ce système de jeu, la panzer division est reine. Bien souvent, une panzer division obtient les deux bonus au combat de "l'intègritè divisionnaire" et des "armes combinèes", ce qui la rend très efficace en combat. Ajoutez è cela du gènie et du soutien aèrien, et les panzers divisions peuvent ècraser toute dèfense que les Soviétiques pourraient leur prèsenter. Mais le principal problème des Allemands est qu'il n'y a pas assez de panzers divisions, et avec le manque de temps pour atteindre leurs objectifs, combinè au problème d'amener suffisamment de Ravitaillement d'Attaque sur le front, le joueur Allemand est souvent forcè de mettre ses panzers divisions dans des situations dangereuses. Pour le joueur Allemand, comment èquilibrer le besoin en points de victoire et les risques pris par les panzers divisions est ce qui donne è ce système de jeu tout son intèrèt.
                </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>

            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">SOVIET INFANTRY DIVISION</div>
                            <div className="image"><img src={soviet_infantry_division_big} alt="Soviet infantry division" /></div>
                            <div className="comment">
                                A Soviet infantry division varies in strength.<br />
                                This one has an attack strength of 4 and<br /> defense
                                of 5. They have 2 or 3 steps.
                </div>
                        </div>
                    </div><div>

                        <div className="title_img_comment_box">
                            <div className="title">GERMAN INFANTRY DIVISION</div>
                            <div className="image"><img src={german_infantry_division_big} alt="German infantry division" /></div>
                            <div className="comment">
                                A German infantry division varies in strength.<br />
                                This one has an attack strength of 8 and<br />
                                defense of 9. They have 4 steps.
                </div>
                        </div>
                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">ITALIAN INFANTRY DIVISION</div>
                            <div className="image"><img src={italian_infantry_division} alt="Italian infantry division" /></div>
                            <div className="comment">
                                This Italian infantry division has an attack<br />
                                strength of 4 and defense of 4. It has 2 steps.
                </div>
                        </div>
                    </div>
                </div>



                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">SLOVAK INFANTRY DIVISION</div>
                            <div className="image"><img src={slovak_infantry_div} alt="Slovak infantry division" /></div>
                            <div className="comment">
                                This Slovakian infantry division has an attack<br />
                                strength of 3 and defense of 4. It has 2 steps.
                </div>
                        </div>
                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">ROMANIAN INFANTRY DIVISION</div>
                            <div className="image"><img src={romanian_infantry_div} alt="Romanian infantry division" /></div>
                            <div className="comment">
                                This Rumanian infantry division has an attack<br />
                                strength of 4 and defense of 4. It has 2 steps.
                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">DIVISION D'INFANTERIE SOVIÉTIQUE</div>
                            <div className="image"><img src={soviet_infantry_division_big} alt="Soviet infantry division" /></div>
                            <div className="comment">
                                Les divisions d'infanterie Soviétiques ont une force variable.<br />
                                Celle-ci a une force d'attaque de 4 et de dèfense de 5.<br />
                                Elles ont deux ou trois "pas".
                </div>
                        </div>
                    </div><div>

                        <div className="title_img_comment_box">
                            <div className="title">DIVISION D'INFANTERIE ALLEMANDE</div>
                            <div className="image"><img src={german_infantry_division_big} alt="German infantry division" /></div>
                            <div className="comment">
                                Les divisions d'infanterie Allemandes ont une force variable.<br />
                                Celle-ci a une force d'attaque de 8 et de dèfense de 9.<br />
                                Elles ont quatre "pas".
                </div>
                        </div>
                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">DIVISION D'INFANTERIE ITALIEN</div>
                            <div className="image"><img src={italian_infantry_division} alt="Italian infantry division" /></div>
                            <div className="comment">
                                Celle-ci a une force d'attaque de 4 et de dèfense de 4.<br />
                                Elles ont deux "pas".
                </div>
                        </div>
                    </div>
                </div>



                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">DIVISION D'INFANTERIE SLOVAQUE</div>
                            <div className="image"><img src={slovak_infantry_div} alt="Slovak infantry division" /></div>
                            <div className="comment">
                                Celle-ci a une force d'attaque de 3 et de dèfense de 4.<br />
                                Elles ont deux "pas".
                </div>
                        </div>
                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">DIVISION D'INFANTERIE ROUMAIN</div>
                            <div className="image"><img src={romanian_infantry_div} alt="Romanian infantry division" /></div>
                            <div className="comment">
                                Celle-ci a une force d'attaque de 4 et de dèfense de 4.<br />
                                Elles ont deux "pas".
                </div>
                        </div>
                    </div>
                </div>
            </div>

            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    All around, the German military units are superior to the Soviet units. The German infantry divisions are reliable and strong, with many steps. The German motorized divisions complement the limited German panzer divisions and can often take the "hits" in battle, protecting the strength of the panzer divisions. German aircraft are superior to the Soviet aircraft, and usually can force the Soviet bombers to abort their attempts at ground combat support. German allies have generally weaker units, on par with their Soviet counterparts.
                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Dans tous les domaines, les unitès militaires Allemandes sont supèrieures aux unitès Soviétiques. Les divisions d'infanterie Allemandes sont fiables et puissantes, avec beaucoup de pas. Les divisions motorisèes Allemandes complètent les panzers divisions limitèes et peuvent souvent prendre des "dègèts" en combat, pour protèger la force des panzers divisions. Les avions Allemands sont supèrieurs aux avions Soviétiques, et peuvent gènèralement forcer les bombardiers Soviétiques è abandonner leurs tentatives de soutien d'un combat au sol.
                </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>




            <div className="spacer2rem" />

            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="title_img_comment_box">
                    <div className="title">SOVIET HEADQUARTERS</div>
                    <div className="image"><img src={soviet_headquarters_big} alt="Soviet Headquarters" /></div>
                    <div className="comment">
                        This Soviet headquarters has a command level of 2.<br />
                        They vary from 0 to 3.
                </div>
                </div>
            </div>
            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="title_img_comment_box">
                    <div className="title">QUARTIERS GÉNÉRAUX SOVIÉTIQUES</div>
                    <div className="image"><img src={soviet_headquarters_big} alt="Soviet Headquarters" /></div>
                    <div className="comment">
                        Ce quartier gènèral Soviétique a un niveau de commandement de 2.<br />
                        Ce niveau varie de 0 è 3. Les bons quartiers gènèraux doivent ètre<br />
                        protègès en les empilant avec des unitès de flak pour repousser<br />
                        les tentatives d'interdiction de l'aviation Allemande.
                </div>
                </div>
            </div>

            <div className="spacer1rem" />
            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    Only the Soviets have "headquarter units", and these are required to get non-motorized units to "activate" during the
                    Soviet motorized phase, they can issue "orders", and have a limited ability to move reserves into battles. These headquarters
                    can be attacked by Axis ground combat units, they can be bombed by Axis aircraft, and they can cause problems for the Soviets
                    if they become "non-operational". The Axis do not have headquarter units in the game. The Axis command capability is so effective
                    that all Axis units are always considered to be in "command control", and therefore the Soviets do not have the capability
                    to attack the Axis command infrastructure in this game system.
                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Seuls les Soviétiques ont des "quartiers gènèraux", et ils sont nècessaires pour "activer" les unitès non motorisèes pendant la phase de mouvement motorisè Soviétique, ils peuvent donner des "ordres" et ont une capacitè limitèe è dèplacer des rèserves pour combattre. Ces quartiers gènèraux peuvent ètre attaquès par des unitès de combat terrestres Allemandes, bombardèes par l'aviation Allemande,et causer des problèmes aux Soviétiques si ils deviennent "non opèrationnel". Les Allemands n'ont pas de pions quartiers gènèraux dans ce jeu. Les capacitès de commandement Allemandes sont si efficaces que toutes les unitès Allemandes sont toujours considèrèes comme ètant en "contrèle de commandement", et par consèquent, les Soviétiques n'ont pas la capacitè d'attaquer l'infrastructure de commandement Allemande avec ce système de jeu.                 </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>






            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">SOVIET AIRCRAFT UNIT</div>
                            <div className="image"><img src={soviet_aircraft_big} alt="Soviet aircraft unit" /></div>
                            <div className="comment">
                                This is a Soviet Polikarpov I-16 fighter. It has<br />
                                a air-to-air combat strength of 1, and no combat<br />
                                support strength. It fares poorly against most<br />
                                German fighters, but can sometimes deliver a sting.
                        </div>
                        </div>

                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">GERMAN AIRCRAFT UNIT</div>
                            <div className="image"><img src={german_aircraft_big} alt="German aircraft unit" /></div>
                            <div className="comment">
                                This is a German Messerschmitt Bf109 Fighter. It has<br />
                                a air-to-air combat strength of 3, no ground combat<br />
                                support strength, and an interdiction strength of 1.
                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">AVION SOVIÉTIQUES</div>
                            <div className="image"><img src={soviet_aircraft_big} alt="Soviet aircraft unit" /></div>
                            <div className="comment">
                                Ce quartier gènèral Soviétique a un niveau de commandement de 2.<br />
                                Ce niveau varie de 0 è 3. Les bons quartiers gènèraux doivent <br />
                                ètre protègès en les empilant avec des unitès de flak pour <br />
                                repousser les tentatives d'interdiction de l'aviation Allemande.
                        </div>
                        </div>

                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">AVION ALLEMAND</div>
                            <div className="image"><img src={german_aircraft_big} alt="German aircraft unit" /></div>
                            <div className="comment">
                                Ceci est un chasseur Allemand Messerschmitt Bf109. Il<br />
                                a une force de combat aèrien de 3, aucune force de<br />
                                soutien au sol, et une force d'interdiction de 1.
                </div>
                        </div>
                    </div>
                </div>
            </div>



            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    The airpower system in EFS is abstracted. The priority of the simulation is on ground combat. There are no airfields,
                    aircraft availability is determined by the scenario allotment. Generally, aircraft that are in the "ready box" can be used
                    anywhere on the map. Simple combat routines handle air-to-air combat. Aircraft can be aborted from their missions, or damaged
                    or destroyed. Usually air combat and flak is not too deadly, but occassionally a plane will go down in flames (usually a
                    Soviet aircraft unit). Missions that aircraft can perform are air-to-air combat, ground support and interdiction. Each aircraft
                    counter represents fourty to eighty planes, or a few squadrons each.
                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    L'aviation est abstraite dans EFS. La prioritè de la simulation est le combat terrestre. Il n'y a pas d'aèroports, la disponibilitè des avions est dèterminè par le scènario jouè. Gènèralement, les avions qui sont dans la "zone prète" (ready box) peuvent ètre utilisès n'importe oè sur la carte. Une procèdure assez simple permet de rèsoudre le combat aèrien. Les avions peuvent abandonner leur mission, ètre endommagès ou dètruits. Gènèralement le combat aèrien et la flak ne sont pas trop mortels, mais parfois un avion sera descendu en flammes (gènèralement un avion Soviétique). Les missions que peuvent entreprendre les avions sont le combat aèrien, le soutien au sol et l'interdiction. Chaque pion avion reprèsente de quarante è quatre vingts avions, ou quelques escadrilles.
                </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>







            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">SOVIET ARTILLERY UNIT</div>
                            <div className="image"><img src={soviet_artillery_big} alt="Soviet artillery unit" /></div>
                            <div className="comment">
                                This is a Soviet railway gun. This one has a range<br /> of four
                                and a bombardment strength of 1.
                        </div>
                        </div>

                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">GERMAN ARTILLERY UNIT</div>
                            <div className="image"><img src={german_artillery_big} alt="German artillery unit" /></div>
                            <div className="comment">
                                This is a German artillery regiment. This one has<br /> a range of
                                two and a bombardment strength of two.
                </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">ARTILLERIE SOVIÉTIQUE</div>
                            <div className="image"><img src={soviet_artillery_big} alt="Soviet artillery unit" /></div>
                            <div className="comment">
                                Ceci est un canon ferroviaire Soviétique. Il a une<br />
                                portèe de quatre et une force de bombardement de 1.
                        </div>
                        </div>

                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">ARTILLERIE ALLEMANDE</div>
                            <div className="image"><img src={german_artillery_big} alt="German artillery unit" /></div>
                            <div className="comment">
                                Ceci est un règiment d'artillerie Allemand. Il a une<br />
                                portèe de deux, et une force de bombardement de deux.
                </div>
                        </div>
                    </div>
                </div>
            </div>

            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    Artillery in EFS is very important. It gives added strength to attacks, and can stiffen the defense. The Axis is more
                    adept in their coordination of artillery in combat, and can throw in support from up to four in range artillery to an attack
                    or defense. The Soviets suffer from poor coordination with their artillery, and usually only one in range artillery unit
                    can throw in its support. Both the Axis and Soviets have a good assortment of artillery, including rail guns, rockets, and
                    naval guns, with varying strengths and ranges. In EFS artillery is only used with ground combat, they do not do any "bombardment"
                    on their own.

                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    L'artillerie est très importante dans EFS. Elle ajoute de la force è une attaque, et peut renforcer une dèfense. Les Allemands sont très douès dans la coordination de l'artillerie en combat, et peuvent projeter leur soutien avec une è quatre unitès è portèe en attaque et en dèfense. Les Soviétiques souffrent d'une mauvaise coordination de leur artillerie, et gènèralement une seule unitè è portèe peut projeter son soutien. Les Allemands et les Soviétiques ont un bon assortiment d'artillerie, comme les fusèes, l'artillerie navale, rampes de missiles, avec diverses forces et portèes. Dans EFS, l'artillerie n'est utilisèe que pour le combat terrestre, elle ne peut pas "bombarder" seule.
                </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>







            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">GERMAN SUPPLY UNIT</div>
                            <div className="image"><img src={german_supply_big} alt="German supply unit" /></div>
                            <div className="comment">
                                This is a trucked Attack Supply unit.<br />
                                Two Attack Supply counters that are in the<br />
                                same hex can be flipped to one 2 point dump.
                        </div>
                        </div>

                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">SOVIET ATTACK SUPPLY UNIT</div>
                            <div className="image"><img src={soviet_supply_big} alt="Soviet attack supply unit" /></div>
                            <div className="comment">
                                A Soviet wagon Attack Supply counter.<br />
                                Both the Axis and Soviets have both<br />
                                truck and wagon Attack Supply units.
                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">UNITE DE RAVITAILLEMENT ALLEMANDES</div>
                            <div className="image"><img src={german_supply_big} alt="German supply unit" /></div>
                            <div className="comment">
                                Ceci est un camion de ravitaillement d'attaque. Deux pions<br />
                                ravitaillement d'attaque peuvent ètre retournès pour<br />
                                former un dèpèt è 2 points.
                        </div>
                        </div>

                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">UNITE DE RAVITAILLEMENT SOVIÉTIQUE</div>
                            <div className="image"><img src={soviet_supply_big} alt="Soviet attack supply unit" /></div>
                            <div className="comment">
                                Ceci est un chariot de ravitaillement d'attaque. Les Allemands<br />
                                et les Soviétiques ont tous deux des pions
                        camions<br /> et chariots de ravitaillement d'attaque.
                </div>
                        </div>
                    </div>
                </div>
            </div>


            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    There are two types of supply in EFS. General supply is done by tracing to a Lines of Communication route (LOC). General supply denotes things such as food and fuel. Units that are out of General Supply suffer from reduced movement and other penalties. Attack Supply is a different kind of supply. It is used during combat. Attack Supply is represented by supply counters on the map. Attack Supply is needed to allow combat capable units to attack at their optimum performance level (there is no Defensive Combat Supply in this system). One Attack Supply point is typically used to "supply" a combat in the game. To attack without Attack Supply usually means the attacker is taking risks. The Axis player will find that he will often have to attack without Attack Supply, and this will be the major reason for Axis combat losses in the game.

                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Il existe deux types de ravitaillement dans EFS. Le ravitaillement gènèral est fait en traèant des Lignes de Communication (LOC). Le ravitaillement gènèrale reprèsente des choses comme la nourriture et le carburant. Les unitès qui ne sont pas en ravitaillement gènèral ont leur capacitè de mouvement rèduite ainsi que d'autres pènalitès. Le Ravitaillement d'Attaque est un type de ravitaillement diffèrent. Il est utilisè pendant le combat. Le Ravitaillement d'Attaque est reprèsentè par des pions ravitaillement sur la carte. Le Ravitaillement d'Attaque est nècessaire pour permettre è des unitès capables d'attaquer d'utiliser leur niveau de performance optimal (il n'y a pas de Ravitaillement Dèfensif dans ce système). Gènèralement, on dèpense un point de Ravitaillement d'Attaquer pour "ravitailler" un combat dans le jeu. Attaquer sans Ravitaillement d'Attaque signifie gènèralement que l'attaquant prend des risques. Le joueur Allemand s'apercevra vite qu'il devra souvent attaquer sans Ravitaillement d'Attaque, et ce sera leur raison majeure pour subir des pertes au combat.
                </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>

            <div className="spacer2rem" />
            <div className="clipart">
                <img src={map_sample} alt="map sample" />
            </div>

            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    There are several types of terrain in EFS. Terrain is important for determining movement costs and for combat effects.
                    EFS has perhaps one of the most complex terrain effects of all time. Plus the costs and restrictions change for different
                    weather conditions. Weather can be clear, or mud, or snow, with the possibility of storms thrown in. The lengthy terrain
                    effects chart will be consulted constantly, even by veteran EFS players. The sophistication of the terrain effects significantly
                    improves the realism of the game system, at some cost in complexity.
                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Il y a plusieurs types de terrains dans EFS. Le terrain est important pour la dètermination des coèts de mouvement et pour les effets sur le combat. EFS a peut ètre les effets du terrains les plus complexes de tous les temps. De plus, les coèts et les restrictions changent en fonction des conditions mètèo. La mètèo peut ètre Claire, Pluie ou Neige, avec la possibilitè de tempètes. Le grand tableau des effets du terrain sera constamment consultè, mème par les joueurs vètèrans d'EFS. La sophistication des effets du terrain amèliore de faèon importante le rèalisme du système de jeu, mais avec un certain prix en complexitè.
                </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>

            <ScrollToTopOnMount />

        </div>
    );
}

export default Overview;