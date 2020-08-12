import React, { Component } from 'react';
import "./ProjectInfo.css"

class Bento extends Component {
  render() {
    return (
          <div className="projectContext">
           <div className="projectInfoWrapper">
            <div className="projectTitle">Bento</div>
            <h2>What is Bento?</h2>
            <h3>Have you ever opened your fridge, just to close it and repeat the cycle 2 minutes later? This is a real problem. 
                You find yourself a week later mass cleaning out your fridge. We've ALL been there. My teammates and I thought 
                that it would be great if there were a way to proactively keep track of the things in our fridge while having the 
                freedom to explore new recipes.</h3>
            <h3>Bento allows you to search through a database of recipes... the catch is, you search by the ingredients available to
                 you, instead of the name of the recipe. This functionality allows for more exploration in the kitchen and less food
                  waste. Instead of looking up a recipe to buy the necessary ingredients (which always results in leftovers btw), 
                  Bento challenges that tradition by forcing you to find recipes according to the ingredients you already have at home. 
                  Clean up your fridge and enjoy a delicious meal in one!</h3>
            <div className="youtubeVideo" >
              <iframe className="iFrame" title="Bento Demo Video" src="https://www.youtube.com/embed/wUnngAqSp7g" frameBorder="0"/>
            </div>
            <h2><a href="https://github.com/kiminlee2000225/bento" rel="noopener noreferrer" target="_blank" className="projectLink">GitHub</a></h2>
            <h2>Tools used</h2>
            <h3>React, Python, BeautifulSoup, JavaScript, HTML, CSS</h3>
            <h2>What I did</h2>
            <h3>Bento was built over a weekend during HackBeanpot 2020. I first tried to find a place to gather our data, ultimately deciding 
                upon AllRecipes with Python. For about 10-15 hours, I programmed my computer to web-scrape AllRecipes with BeautifulSoup,
                 collecting around 30,000 recipes total for our website. I stored all of our information in a JSON file, and built our framework 
                 so that we could directly access each section of any recipe that we needed. </h3>
            <h3>I worked with a lot of front-end, designing the UI/UX and implementing them through React. We put a lot of focus on user experience, 
                attempting to make the website aesthetically pleasing and easy to browse. I utilized various tools such as Blueprint and Pose 
                to apply smooth animations to Bento. </h3>
            <h3>I am extremely proud that in the short amount of time that we had, our team was able to build an aesthetically pleasing, functional 
                website - a viable product to say the least. For the complications that we ran into, we found ways to "hack" them, and 
                continued strong throughout our entire process. We are also very proud of our team. Since the beginning, we were able to effectively
                 brainstorm and divvy up the work so that all of us were working on something.</h3>
            <h2>Challenges / Improvements</h2>
            <h3>As first time hackers, we did not know what to expect from the event nor from the product. We can conclusively say that we learned a 
                lot about web development during the creation of our product, especially from how the final product was pieced together by the front
                 and back end, on different screens/languages/APIs.</h3>
            <h3>As our team had initially planned to use tinyDB, we found that it did not support sophisticated search queries, making certain 
                implementations difficult for us to handle. We had to create a special lambda function to satisfy our needs in defining the 
                specifications for searching through and receiving results. Because we were also working with a relatively big data set, tinyDB did
                 give us a few problems in the speed department.</h3>
            <h3 className="lastParagraph">We do believe that there is a lot of hope for Bento in the near future. We have so many ideas on how to improve our current product by refining the search qualities, adding more information into our dataset, making the user experience 
            speedier and more seamless. Aside from that, we also see Bento growing with future technologies to come. We are thinking of optimizations so 
            that Bento could potentially track the hierarchy of importance amongst ingredients in the user's fridge-the closeness to expiration being the 
            determining factor.</h3>
            </div>
          </div>
    )
  }
}

export default Bento;