import React, {Component } from "react";
import Terminal from 'terminal-in-react';
// import { Scrollbars } from 'react-custom-scrollbars';
import { css } from 'glamor';

const hideScrollbar = css({ 'overflow': !'hidden' });

class AboutPage extends Component {
    showMsg = m => m
    render() {
      return (
        <div>
        {/* <Scrollbars
        autoHeight
        autoHeightMin={100}
        autoHeightMax={200}> */}
            <center>
            <Terminal
            descriptions={{
                'hostname': 'Displays hostname',
                'whoami': 'Displays full name',
                showmsg: 'shows a message',
                alert: 'alert', popup: 'alert',
                'moreinfo': 'short description about me',
                'projects': 'Displays my projects',
                'certifications': 'Displays my certifications'
            }}
            class={hideScrollbar}
            color='black'
            backgroundColor='white'
            prompt="black"
            style={{ 
                fontWeight: "bold", fontSize: "1em",
                overflowX: 'hidden', overflow: 'hidden'
            }}
            commands={{
                'hostname': () => this.showMsg('monster'),
                'whoami': () => this.showMsg('Gnanesh Kunal'),
                "moreinfo": () => this.showMsg(moreinfo),
                "projects": () => this.showMsg(projects),
                'certifications': () => this.showMsg(certifications)
            }}
            msg='Type Help!'
            promptSymbol="[gnanesh@monster ~]$ "
            allowTabs={false}
            hideTopBar={true}
            showActions={false}
            />
            </center>
        {/* </Scrollbars> */}
        </div>
      );
    }
  }
  
  export default AboutPage;

  const moreinfo = `I'm skilled at Web Development and Data Engineering.\nI use C for systems, JavaScript and PHP for the web, scala for Big Data and python for Data science.`
  const projects = `
                  Twitter Riots
              Aug 2017 - Nov 2017
      https://github.com/GnaneshKunal/twitter-riots
  To analyze the twitter data of people belonging to a region using their tweets,location and using Natural Language Processing to predict any racist or opinion based riots and protests from tweets and trending hash tags.
  
                  book-miner
              Jul 2017 - Nov 2017
      https://github.com/GnaneshKunal/book-miner
  A spider which crawls the domain, goodreads.com to scrap the reviews and index the links to the reviews. And, a basic vertical search engine, indexed using Elastic search, we're are able to show the requested book with its details and reviews.
  
                  books-analyzer
              Sep 2017 - Nov 2017
      https://github.com/GnaneshKunal/books-analyzer
  Using Apache Spark we can analyze large datasets like book reviews to find certain patterns and extract some useful information.
  
                  dict
              Jun 2017 - Jul 2017
      https://github.com/GnaneshKunal/dict
  A command Line Dictionary.
  
                  Library Book Locator with book misplacement Detector
              Feb 2017 - Jun 2017
      https://github.com/GnaneshKunal/libraryBookScanner
  Instead of manually going around looking for books we can easily get that particular books RFID tag. The librarian gets notified if a book is misplaced from its original location.
  
                  Socket Chat and Game Server.
              Feb 2017 - May 2017
      https://github.com/GnaneshKunal/node-chat-xo
  Node.js TCP CHAT &amp;&amp; TIC-TAC-TOE game Server
  
                  Checkout Logger
              Feb 2017 - May 2017
      https://github.com/GnaneshKunal/CheckoutLogger
  A web App which takes the pictures of bills and processes them using Google Vision API and stores the data. This application allows the users to keep in track of the day to day offline expenditures.
  
                  Piggy Bank
              Aug 2016 - Nov 2016
      https://github.com/GnaneshKunal/PIGGY-Bank
  Basic CRUD App for Bank Management Systems using PHP and MYSQL.
  `;
  
  const certifications = `
              Certifications (Coursera):
              Functional Programming in Scala
              Big Data (Due)
              Machine Learnig
              Cryptography
  `;  

  export const query = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
