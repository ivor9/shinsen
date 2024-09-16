'use client'
import React from "react";
import styles from './style.module.scss';
import Nav from '../components/nav';
import Mobilenav from '../components/mobilenav';
import Image from 'next/image';
import Footer from '../components/footer';
import { useEffect } from 'react';
import { translate } from '../components/anim.js';
import { AnimatePresence, whileInView, motion } from "framer-motion"

export default function Drinks () {
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
      <Mobilenav />
      <Nav />
      <motion.div className={styles.container}
        initial={{y: 0,
          opacity: 0}}
        whileInView="enter"
        variants={translate}
      >

        <a href="/menu" className={styles.drinkbutton}>
          <p><span>←</span>Menu</p>
        </a>
        
        <div className={styles.newmenu}>

          <div className={styles.category}>
            <p className={styles.title}>SPECIALTY DRINKS</p>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>THE AMELIA</p><p className={styles.price}>18</p>
              </div>
              <p className={styles.menudesc}>tequila, passion fruit, ginger bitters, cucumber, and lime

              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>LYCHEE MARTINI</p><p className={styles.price}>18</p>
              </div>
              <p className={styles.menudesc}>vodka, lychee, elderflower syrup, and lemon
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>COSMO CLOUD</p><p className={styles.price}>22</p>
              </div>
              <p className={styles.menudesc}>sake, fresh soju, vodka, simple syrup, cranberry and lime juices,
              topped with citrus smoke bubble
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>FIG WHISKEY SOUR</p><p className={styles.price}>6</p>
              </div>

              <p className={styles.menudesc}>marinated seaweed with sesame chili
              </p>

            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>FIG WHISKEY SOUR</p><p className={styles.price}>18</p>
              </div>

              <p className={styles.menudesc}>marinated seaweed with sesame chili
              </p>
              
            </div>


            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>ZEN GARDEN COOLER</p><p className={styles.price}>18</p>
              </div>

              <p className={styles.menudesc}>gin, yuzu extract, shiso leaf, cucumber, simple syrup, and prosecco
              </p>
              
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>SMOKED SHINSEN OLD FASHIONED</p><p className={styles.price}>20</p>
              </div>

              <p className={styles.menudesc}>Woodford bourbon, angostura bitters, Luxardo, antica vermouth,
              smoked table side
              </p>
              
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>DÉJÀ VU</p><p className={styles.price}>18</p>
              </div>

              <p className={styles.menudesc}>strawberry gin, lemon juice, pineapple juice, fresh strawberry,
              topped with prosecco
              </p>
              
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>SHINSEN PIÑA COLADA</p><p className={styles.price}>17</p>
              </div>

              <p className={styles.menudesc}>coconut rum, lychee juice, lemon juice, splash of cranberry juice
              </p>
              
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>NIKKA & BAILEYS</p><p className={styles.price}>26</p>
              </div>

              <p className={styles.menudesc}>Nikka coffey Japanese whiskey, baileys liquor and orange zest
              </p>
              
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>VIOLET EYES</p><p className={styles.price}>22</p>
              </div>

              <p className={styles.menudesc}>coconut rum, lavender syrup, lemon juice, egg white*and orange bitters
              </p>
              
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>ELECTRIC PETAL PUNCH</p><p className={styles.price}>22</p>
              </div>

              <p className={styles.menudesc}>gin, elderflower tonic, grapefruit juice, topped with rosemary
              and a buzz button flower
              </p>
              
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>POM POM</p><p className={styles.price}>18</p>
              </div>

              <p className={styles.menudesc}>coconut rum, lime juice, pomegranate pure, topped with club soda
              </p>
              
            </div>
          </div>

          <div className={styles.category}>

            <div className={styles.titlewrap}>
              <p className={styles.title}>WHITE wines</p>
              <p>glass / bottle</p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>HOUSE WHITE</p><p className={styles.price}>10 / -</p>
              </div>
              <p className={styles.menudesc}>
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>BRIAN CARTER ORIANA</p><p className={styles.price}>12 / 25</p>
              </div>
              <p className={styles.menudesc}>Yakima Valley, WA
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>BRIAN CARTER ABRACADABRA ROSE </p><p className={styles.price}>12 / 25</p>
              </div>
              <p className={styles.menudesc}>Yakima Valley, WA
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>ROMBAUER CHARDONNAY</p><p className={styles.price}>22 / 78</p>
              </div>

              <p className={styles.menudesc}>Carneros, Napa Valley, CA
              </p>

            </div>

          </div>

          <div className={styles.category}>

            <div className={styles.titlewrap}>
              <p className={styles.title}>red wines</p>
              <p>glass / bottle</p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>HOUSE RED</p><p className={styles.price}>10 / -</p>
              </div>
              <p className={styles.menudesc}>
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>BRIAN CARTER TUTTOROSSO</p><p className={styles.price}>15 / 45</p>
              </div>
              <p className={styles.menudesc}>Yakima Valley, WA
              </p>
            </div>

          </div>        
          
          <div className={styles.category}>

            <p className={styles.title}>SAKE SERVED HOT</p>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>HAKUTSURU EXCELLENT TOKKURI</p><p className={styles.price}>10</p>
              </div>
              <p className={styles.menudesc}>
              well-matured, full body taste and mellow reverberation
              </p>
            </div>

          </div>                

          <div className={styles.category}>
            <div className={styles.titlewrap2}>
              <p className={styles.title}>SAKE SERVED CHILLED</p>
              <p>3 oz glass / 10 oz Tokkuri / 720 ml bottle unless listed otherwise</p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>RIHAKU WONDERING POET</p><p className={styles.price}>13 / 30 / 65
                </p>
              </div>
              <p className={styles.menudesc}>medium bodied, fruity and floral
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>JOTO JUNMAI GINJO</p><p className={styles.price}>10 / 25 / 52</p>
              </div>
              <p className={styles.menudesc}>fruity, light, and floral
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>TYKU JUNMAI PREMIUM <span class="lowercase">(300 ml)</span></p><p className={styles.price}>6 / 12 / 25</p>
              </div>
              <p className={styles.menudesc}>fresh and balanced taste with subtle pear notes
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>HAKUTSURU SUPERIOR JUNMAI GINJO</p><p className={styles.price}>10 / 18 / 38</p>
              </div>

              <p className={styles.menudesc}>flowery fragrant sake with silky well-balanced smoothness
              </p>

            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>TOZAI BLOSSOM OF PEACE PLUM SAKE</p><p className={styles.price}>7 / 16 / 35</p>
              </div>

              <p className={styles.menudesc}>medium-bodied with a rich, sweet aroma
              and subtle plum flavors
              </p>
              
            </div>


            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>YOSHINOGAWA WINTER WARRIOR PREMIUM</p><p className={styles.price}>10 / 18 / 40</p>
              </div>

              <p className={styles.menudesc}>full-bodied smooth, with fresh herbal finish
              </p>
              
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>JOTO YUZU <span class="lowercase">(500 ml)</span></p><p className={styles.price}>8 / - / 35</p>
              </div>

              <p className={styles.menudesc}>full-bodied smooth, with fresh herbal finish
              </p>
              
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>HAKUTSURU SHO-UNE JUNMAI DAIGINJO </p><p className={styles.price}>10 / 22 / 48</p>
              </div>

              <p className={styles.menudesc}>full-bodied, dry, with fruity scents and velvety smoothness
              </p>
              
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>TOZAI LIVING JEWEL</p><p className={styles.price}>7 / 15 / 35
                </p>
              </div>

              <p className={styles.menudesc}>with citrus and Asian pear aromas, with clean and smooth finish
              </p>
              
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>TOZAI SNOW MAIDEN</p><p className={styles.price}>7 / 15 / 35</p>
              </div>

              <p className={styles.menudesc}>unfiltered, medium-bodied and floral, honeydew melon
              and pumpkin hits
              </p>
              
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>

                <p className={styles.menuitem}>MOMOKAWA DIAMOND JUNMAI GINJO</p><p className={styles.price}>7 / 15 / 35</p>
              </div>

              <p className={styles.menudesc}>mellow and smooth with apple, melon and tropical fruits accents
              </p>
              
            </div>
            
          </div>

          <div className={styles.category}>

            <div className={styles.titlewrap}>
              <p className={styles.title}>MOCKTAILS</p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>THE AMELIA ZERO PROOF</p><p className={styles.price}>12</p>
              </div>
              <p className={styles.menudesc}>passion fruit, ginger bitters, cucumber, and lime
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>BLUEBERRY LEMONADE</p><p className={styles.price}>12</p>
              </div>
              <p className={styles.menudesc}>blueberry pure, lemon, club soda
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>LAVENDER LEMON DROP</p><p className={styles.price}>12</p>
              </div>
              <p className={styles.menudesc}>lavender, lemon, club soda
              </p>
            </div>

            <div className={styles.itemwrap}>
              <div className={styles.line}></div>
              <div className={styles.itemandprice}>
                <p className={styles.menuitem}>BLUSHING GEISHA</p><p className={styles.price}>12</p>
              </div>
              <p className={styles.menudesc}>pomegranate pure, lime juice, topped with club soda
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