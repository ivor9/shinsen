'use client'
import React from "react";
import styles from './style.module.scss';
import Announcement from '../components/announcement';
import Nav from '../components/nav';
import Mobilenav from '../components/mobilenav';
import Image from 'next/image';
import Footer from '../components/footer';
import { useEffect } from 'react';
import { translate } from '../components/anim.js';
import { AnimatePresence, whileInView, motion } from "framer-motion"

export default function Menu () {
  useEffect ( () => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotivescroll = new LocomotiveScroll();
      }
    ) ()

  }, [])

  return (
    <main>
      <Announcement />
      <Mobilenav />
      <Nav />
      <motion.div className={styles.container}
        initial={{y: 0,
          opacity: 0}}
        whileInView="enter"
        variants={translate}
      >
        <a href="/drinks" className={styles.drinkbutton}>
          <p>Sake & specialty drinks<span>→</span></p>
        </a>
        
        <div className={styles.newmenu}>

          <div className={styles.category}>
            <p className={styles.title}>appetizers</p>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>miso soup</p><p className={styles.price}>6</p>
              </div>
              <p className={styles.menudesc}>traditional Japanese miso soup with green onion and organic tofu
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>edamame</p><p className={styles.price}>6</p>
              </div>
              <p className={styles.menudesc}>steamed organic soybeans with kosher salt and sesame seeds</p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>SUNOMONO SALAD</p><p className={styles.price}>6</p>
              </div>
              <p className={styles.menudesc}>lightly cured cucumber, sweet vinegar dressing, and sesame seeds
              add red crab* +7
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>WAKAME SALAD</p><p className={styles.price}>6</p>
              </div>
              <p className={styles.menudesc}>marinated seaweed with sesame chili
              </p>
            </div>



          </div>

          <div className={styles.category}>
            <p className={styles.title}>raw bar</p>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>HAMACHI CARPACCIO SPECIAL</p><p className={styles.price}>24</p>
              </div>
              <p className={styles.menudesc}>traditional Japanese miso soup with green onion and organic tofu
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>TUNA CARPACCIO SPECIAL</p><p className={styles.price}>26</p>
              </div>
              <p className={styles.menudesc}>steamed organic soybeans with kosher salt and sesame seeds</p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>CHIRASHI BOWL</p><p className={styles.price}>35</p>
              </div>
              <p className={styles.menudesc}>assorted sashimi over seasoned rice, with soy glaze *choice of sashimi are subject to change*
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>CHEF’S CHOICE SASHIMI 15pc</p><p className={styles.price}>Market price: 42</p>
              </div>
              <p className={styles.menudesc}>assorted sashimi platter *choice of sashimi are subject to change*
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>FRESH WASABI
                </p><p className={styles.price}>6</p>
              </div>
              <p className={styles.menudesc}>marinated seaweed with sesame chili
              </p>
            </div>



          </div>

          <div className={styles.category}>
            <p className={styles.title}>nigiri <span>(2pc)</span> / sashimi <span>(5pc)</span></p>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>KING SALMON</p><p className={styles.price}>13/23</p>
              </div>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>KING SALMON TORO</p><p className={styles.price}>15/27</p>
              </div>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>BIG EYE TUNA</p><p className={styles.price}>12/22</p>
              </div>
              <p className={styles.menudesc}>assorted sashimi over seasoned rice, with soy glaze *choice of sashimi are subject to change*
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>BIG EYE TUNA CHUTORO</p><p className={styles.price}>15/26</p>
              </div>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>BLUEFIN OTORO
                </p><p className={styles.price}>20/35</p>
              </div>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>HAMACHI/YELLOWTAIL
                </p><p className={styles.price}>12/18</p>
              </div>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>HAMACHI TORO
                </p><p className={styles.price}>14/22 </p>
              </div>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>BLUEFIN OTORO
                </p><p className={styles.price}>20/35</p>
              </div>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>UNAGI (eel)
                </p><p className={styles.price}>12/20</p>
              </div>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>SABA/MACKEREL
                </p><p className={styles.price}>8/14</p>
              </div>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>KANI (crab)
                </p><p className={styles.price}>8/16</p>
              </div>
            </div>


            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>
                  KANPACHI
                </p><p className={styles.price}>
                  8/16
                  </p>
              </div>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>
                UNI (Sea urchin)
                </p><p className={styles.price}>
                22/38
                  </p>
              </div>
                <p className={styles.menudesc}>
                imported from Hokkaido, Japan                
                </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>
                HOTATE (SCALLOP)
                </p><p className={styles.price}>
                15/26
                  </p>
              </div>
              <p className={styles.menudesc}>
              imported from Hokkaido, Japan                
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>
                IKURA/SALMON ROE
                </p><p className={styles.price}>
                10/18
                  </p>
              </div>
                <p className={styles.menudesc}>
                Add quail egg +3
                </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>
                TOBIKO/FLYING FISH ROE
                </p><p className={styles.price}>
                8/16
                  </p>
              </div>
                <p className={styles.menudesc}>
                Add quail egg +3
                </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>
                EBI/BLACK TIGER PRAWN
                </p><p className={styles.price}>
                8/16
                  </p>
              </div>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>
                TAMAGO
                </p><p className={styles.price}>
                6/12
                  </p>
              </div>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>
                INARI/TOFU RICE POCKET
                </p><p className={styles.price}>
                8
                  </p>
              </div>
            </div>

          </div>

          <div className={styles.category}>
            <p className={styles.title}>signature rolls</p>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>WATERFRONT ROLL</p><p className={styles.price}>25</p>
              </div>
              <p className={styles.menudesc}>spicy salmon, avocado, cucumber, topped with seared king salmon,
              tobiko, and microgreens
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>GREEN DRAGON ROLL</p><p className={styles.price}>23</p>
              </div>
              <p className={styles.menudesc}>real crab, cucumber, topped with avocado, unagi, black tobiko,
sesame, and fig sauce
</p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>RAINBOW ROLL</p><p className={styles.price}>24</p>
              </div>
              <p className={styles.menudesc}>real crab, avocado, cucumber, topped with tuna, yellowtail,
              king salmon, tobiko, and scallions
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>GEISHA ROLL</p><p className={styles.price}>24</p>
              </div>
              <p className={styles.menudesc}>spicy tuna, cucumber, avocado, topped with seared tuna,
shishito cilantro sauce, and microgreens

              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>SAMURAI ROLL
                </p><p className={styles.price}>24</p>
              </div>
              <p className={styles.menudesc}>red tuna, cucumber, avocado, topped with yellowtail, chili crisp,
              and microgreens
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>CATERPILLAR ROLL
                </p><p className={styles.price}>20</p>
              </div>
              <p className={styles.menudesc}>eel, cucumber, topped with avocado and eel sauce
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>MILLER ROLL
                </p><p className={styles.price}>26</p>
              </div>
              <p className={styles.menudesc}>shrimp, avocado, cucumber, real crab, topped with seared Hamachi,
              tobiko, and truffle oil
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>SCALLOP ROLL
                </p><p className={styles.price}>24</p>
              </div>
              <p className={styles.menudesc}>tiger prawns, avocado, cucumber, topped with seared Hokkaido scallops,
              yuzu kosho aioli, jalapeño, and microgreens
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>MR. SAKAI ROLL
                </p><p className={styles.price}>24</p>
              </div>
              <p className={styles.menudesc}>real crab, avocado, cucumber, topped with seared salmon,
kewpie mayo, and ponzu sauce

              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>VEGGIE ROLL
                </p><p className={styles.price}>18</p>
              </div>
              <p className={styles.menudesc}>oven roasted red and yellow bell peppers, asparagus, topped with
              avocado, roasted eggplant, sesame seed, fig sauce, and microgreens
              </p>
            </div>

          </div>

          <div className={styles.category}>
            <p className={styles.title}>temaki / hand rolls</p>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>VEGGIE TEMAKI</p><p className={styles.price}>6</p>
              </div>
              <p className={styles.menudesc}>Japanese cucumber, avocado, yamagobo, microgreens, and sesame seeds
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>UNAGI TEMAKI</p><p className={styles.price}>8</p>
              </div>
              <p className={styles.menudesc}>freshwater eel with avocado and sesame seeds</p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>KANI TEMAKI</p><p className={styles.price}>9</p>
              </div>
              <p className={styles.menudesc}>real crab, cucumber, avocado, microgreens, and tobiko
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>SAKE TEMAKI</p><p className={styles.price}>9</p>
              </div>
              <p className={styles.menudesc}>king salmon, cucumber, microgreens, and tobiko
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>TUNA TEMAKI
                </p><p className={styles.price}>8</p>
              </div>
              <p className={styles.menudesc}>tuna, cucumber, microgreens, and tobiko
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>HAMACHI TEMAKI
                </p><p className={styles.price}>8</p>
              </div>
              <p className={styles.menudesc}>yellowtail, shiso, cucumber, tobiko, and microgreens
              </p>
            </div>

          </div>

          <div className={styles.category}>
            <p className={styles.title}>HOSOMAKI / cLASSIC ROLLS</p>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>CALIFORNIA ROLL</p><p className={styles.price}>16</p>
              </div>
              <p className={styles.menudesc}>real crab mix, avocado, cucumber, topped with tobiko and sesame
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>SPICY SALMON ROLL</p><p className={styles.price}>16</p>
              </div>
              <p className={styles.menudesc}>spicy king salmon, avocado, cucumber, topped with tobiko and
              microgreens</p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>SPICY TUNA ROLL</p><p className={styles.price}>15</p>
              </div>
              <p className={styles.menudesc}>spicy tuna, cucumber, avocado, and tobiko
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>SALMON FUTOMAKI ROLL</p><p className={styles.price}>16</p>
              </div>
              <p className={styles.menudesc}>king salmon, avocado, cucumber, and tobiko
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>TORO HOSOMAKI ROLL
                </p><p className={styles.price}>16</p>
              </div>
              <p className={styles.menudesc}>bluefin tuna toro with green onion
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>NEGI HAMA
                </p><p className={styles.price}>15</p>
              </div>
              <p className={styles.menudesc}>yellowtail with green onion
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>GARDEN ROLL
                </p><p className={styles.price}>14</p>
              </div>
              <p className={styles.menudesc}>avocado, cucumber, yamagobo, topped with sesame and microgreens
              </p>
            </div>

          </div>

          <div className={styles.category}>
            <p className={styles.title}>kitchen</p>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>PLAIN UDON SOUP</p><p className={styles.price}>14</p>
              </div>
              <p className={styles.menudesc}>udon noodles with house udon broth

              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>VEGETABLE UDON SOUP</p><p className={styles.price}>16</p>
              </div>
              <p className={styles.menudesc}>udon noodles with sliced shiitake, kamaboko, green onions and yuzu
              with house udon broth</p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>CHICKEN UDON SOUP</p><p className={styles.price}>18</p>
              </div>
              <p className={styles.menudesc}>udon noodles, grilled chicken, green onion, with house udon broth
              add egg +2
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>SALMON SHIOYAKI</p><p className={styles.price}>24</p>
              </div>
              <p className={styles.menudesc}>flake salt steam broiled king salmon filet, with rice and vegetables
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>SALMON TERIYAKI*
                </p><p className={styles.price}>25</p>
              </div>
              <p className={styles.menudesc}>steam broiled king salmon with house teriyaki sauce,
with rice and vegetables

              </p>
            </div>


          </div>

          <div className={styles.category}>
            <p className={styles.title}>beverages</p>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>ASAHI</p><p className={styles.price}>7</p>
              </div>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>SAPPORO</p><p className={styles.price}>7</p>
              </div>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>CRAFT BEER SELECTION</p><p className={styles.price}>8</p>
              </div>
              <p className={styles.menudesc}>select craft beers from Heathen Brewery selection
& Loowit Brewery selection

              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>SALMON SHIOYAKI</p><p className={styles.price}>24</p>
              </div>
              <p className={styles.menudesc}>flake salt steam broiled king salmon filet, with rice and vegetables
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>SALMON TERIYAKI*
                </p><p className={styles.price}>25</p>
              </div>
              <p className={styles.menudesc}>steam broiled king salmon with house teriyaki sauce,
with rice and vegetables

              </p>
            </div>


          </div>

          <div className={styles.category}>
            <p className={styles.title}>WEEKLY DESSERT</p>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>SOFT DRINKS</p><p className={styles.price}>13</p>
              </div>

            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>MOCHI ICE CREAM</p><p className={styles.price}>10</p>
              </div>
              <p className={styles.menudesc}>three mochi ice cream of your choice with whipped cream and berries
              </p>
            </div>

          </div>

          <div className={styles.category}>
            <p className={styles.title}>AFTER DINNER DRINKS</p>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>CHOCOLATE MARTINI</p><p className={styles.price}>18</p>
              </div>
              <p className={styles.menudesc}>vodka, creme de cacao, Godiva chocolate liqueur
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>ESPRESSO MARTINI</p><p className={styles.price}>18</p>
              </div>
              <p className={styles.menudesc}>vodka, espresso liqueur, cold brew
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>DESSERT WINE</p><p className={styles.price}>12</p>
              </div>
              <p className={styles.menudesc}>port wine, 
              please ask your server for our current selection
              </p>
            </div>

          </div>

        </div>

        {/* <div className={styles.menuwrap}>

          <motion.div className={styles.menutext}

          >
            <div className={styles.menu}>Menu</div>
            <div className={styles.desc}>Items are subject
            to change due to season & availability</div>
          </motion.div>
          
          <div className={styles.menusec}>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu1.png`}
                  fill={true}
                  alt="image"
                />
            </div>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu2.png`}
                  fill={true}
                  alt="image"
                />
            </div>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu3.png`}
                  fill={true}
                  alt="image"
                />
            </div>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu4.png`}
                  fill={true}
                  alt="image"
                />
            </div>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu5.png`}
                  fill={true}
                  alt="image"
                />
            </div>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu6.png`}
                  fill={true}
                  alt="image"
                />
            </div>
          </div>
        </div> */}
      
      </motion.div>
      <Footer />
    </main>
  )
}