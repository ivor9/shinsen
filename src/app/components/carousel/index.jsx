'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const NextJsCarousel = () => {
  return (
      <div>

          <Carousel>
              <div>
                  <img
                      src=
"https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png"
                      alt="image1"
                  />

              </div>
              <div>
                  <img
                      src=
"https://media.geeksforgeeks.org/wp-content/uploads/20211213172225/2.png"
                      alt="image2"
                  />

              </div>
              <div>
                  <img
                      src=
"https://media.geeksforgeeks.org/wp-content/uploads/20211213172226/3.png"
                      alt="image3"
                  />

              </div>
              <div>
                  <img
                      src=
"https://media.geeksforgeeks.org/wp-content/uploads/20211213172227/4.png"
                      alt="image4"
                  />

              </div>
              <div>
                  <img
                      src=
"https://media.geeksforgeeks.org/wp-content/uploads/20211213172229/5.png"
                      alt="image5"
                  />

              </div>
          </Carousel>
      </div>
  );
};

export default NextJsCarousel;