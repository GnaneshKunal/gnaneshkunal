import React, {Component } from "react";

class ProjectsPage extends Component {

    render() {
      return (
        <div>
			<br />
            <h1>Projects</h1>



			<h2>Twitter Riots</h2>
			To analyze the twitter data of people belonging to a region using their tweets, location and using Natural Language Processing to predict any racist or opinion based riots and protests from tweets and trending hashtags.
			<br />
			<div >
				<img style={{'margin': '0px'}} src="https://icons.duckduckgo.com/ip3/help.github.com.ico" height="20" width="20" />
				<a style={{paddingLeft: '8px', color: 'black', textDecoration: 'none'}} href="https://github.com/gnaneshkunal/twitter-riots">
					Visit it at Github
				</a>
			</div>
			<br />

			<h2>Book Miner</h2>
			A spider which crawls the domain, goodreads.com to scrap the reviews and index the links to the reviews. And, a basic vertical search engine, indexed using Elastic search, we're are able to show the requested book with its details and reviews.
			<br />
			<div>
				<img style={{'margin': '0px'}} src="https://icons.duckduckgo.com/ip3/help.github.com.ico" height="20" width="20" />
				<a style={{paddingLeft: '8px', color: 'black', textDecoration: 'none'}} href="https://github.com/GnaneshKunal/book-miner">
					Visit it at Github
				</a>
			</div>
			<br />


			<h2>Books Analyzer</h2>
			Using Apache Spark we can analyze large datasets like book reviews to find certain patterns and extract some useful information.
			<br />
			<div>
				<img style={{'margin': '0px'}} src="https://icons.duckduckgo.com/ip3/help.github.com.ico" height="20" width="20" />
				<a style={{paddingLeft: '8px', color: 'black', textDecoration: 'none'}} href="https://github.com/GnaneshKunal/books-analyzer">
					Visit it at Github
				</a>
			</div>
			<br />

			<h2>Dict</h2>
			A command Line Dictionary.
			<br />
			<div>
				<img style={{'margin': '0px'}} src="https://icons.duckduckgo.com/ip3/help.github.com.ico" height="20" width="20" />
				<a style={{paddingLeft: '8px', color: 'black', textDecoration: 'none'}} href="https://github.com/GnaneshKunal/dict">
					Visit it at Github
				</a>
			</div>
			<br />



			<h2>Library Book Locator with book misplacement Detector</h2>
			Instead of manually going and searching for books, we can find the book using it's RFID by just going through the Books' row. The book will be notified once we come across it. While searching, all the books that are being misplaced will be detected automatically and notified to the librarian.
			<br />
			<div>
				<img style={{'margin': '0px'}} src="https://icons.duckduckgo.com/ip3/help.github.com.ico" height="20" width="20" />
				<a style={{paddingLeft: '8px', color: 'black', textDecoration: 'none'}} href="https://github.com/GnaneshKunal/libraryBookScanner">
					Visit it at Github
				</a>
			</div>
			<br />

			<h2>Checkout Logger</h2>
			A web App which takes the pictures of bills and processes them using Google Vision API and stores the data. This application allows the users to keep track of the day to day offline expenditures.
			<br />
			<div>
				<img style={{'margin': '0px'}} src="https://icons.duckduckgo.com/ip3/help.github.com.ico" height="20" width="20" />
				<a style={{paddingLeft: '8px', color: 'black', textDecoration: 'none'}} href="https://github.com/GnaneshKunal/CheckoutLogger">
					Visit it at Github
				</a>
			</div>
			<br />

			<h2>Socket Chat and Game Server</h2>
			Node.js TCP CHAT & TIC-TAC-TOE game Server(Includes Elgamal Encryption)
			<br />
			<div>
				<img style={{'margin': '0px'}} src="https://icons.duckduckgo.com/ip3/help.github.com.ico" height="20" width="20" />
				<a style={{paddingLeft: '8px', color: 'black', textDecoration: 'none'}} href="https://github.com/GnaneshKunal/node-chat-xo">
					Visit it at Github
				</a>
			</div>
			<br />

			<h2>Piggy Bank</h2>
			Basic CRUD App for Bank Management Systems using PHP and MYSQL.
			<br />
			<div>
				<img style={{'margin': '0px'}} src="https://icons.duckduckgo.com/ip3/help.github.com.ico" height="20" width="20" />
				<a style={{paddingLeft: '8px', color: 'black', textDecoration: 'none'}} href="https://github.com/GnaneshKunal/PIGGY-Bank">
					Visit it at Github
				</a>
			</div>
			<br />
        </div>
      );
    }
  }
  
  export default ProjectsPage;
