import webcamPainter from "./Images/webcam_painter.gif";
import photoBot from "./Images/photobot.gif";
import climateBots from "./Images/climatebots.gif";
import stocksPortfolio from "./Images/stocksportfolio.gif";
import tictactoe from "./Images/tic-tac-toe.gif";
import signLanguage from "./Images/sign-language.gif";
// import purplePurlers from "./Images/purplePurlers.gif";
import theShoppies from "./Images/theshoppiess.gif";
import shapes from "./Images/shapes.gif";
import sort from "./Images/sort.gif";

export const cardContents = [
	{
		header: theShoppies,
		title: "The Shoppies",
		details: "Built an application that allows users to nominate their favourite movies through the OMDB API.",
		source: "https://github.com/anjalig21/The-Shoppies",
		website: "https://theshopifyshoppies.web.app/"
	},
	{
		header: sort,
		title: "Sorting Visualizer",
		details: "Automated the visualization of various sorting algorithms in Python.",
		source: "https://github.com/anjalig21/Sorting-Visualizer",
	},
	{
		header: signLanguage,
		title: "ASL Detector",
		details: "Trained a model to be able to identify the American Sign Language letters.",
		source: "https://github.com/anjalig21/Sign-Language-Detection"
	},
	{
		header: photoBot,
		title: "Photo Bot",
		details: "A multi-purpose Discord Bot curated towards gaming communities.",
		source: "https://github.com/anjalig21/Photo-Bot",
	},
	{
		header: webcamPainter,
		title: "Webcam Painter",
		details: "An application that allows users to draw infront a webcam while they wave certain colour objects.",
		source: "https://github.com/anjalig21/Webcam-Painter",
	},
	{
		header: stocksPortfolio,
		title: "Stocks Portfolio",
		details: "Developed an application that allows users to manage their personal stock portfolios.",
		source: "https://github.com/anjalig21/Stocks-Portfolio",
		website: "https://stocks-portfolio-cd830.web.app/"
	},
	{
		header: tictactoe,
		title: "Tic Tac Toe",
		details: "An unbeatable tic tac toe game created with the minimax algorithm.",
		source: "https://github.com/anjalig21/Unbeatable-Tic-Tac-Toe",
		website: "https://anjalig21.github.io/Unbeatable-Tic-Tac-Toe/"
	},
	{
		header: climateBots,
		title: "Climate Bots",
		details: "A social networking platform for individuals to discuss climate change.",
		source: "https://github.com/anjalig21/Climate-Bots"
	},
	{
		header: shapes,
		title: "Shape Detection",
		details: "Developed an application that can detect and identify shapes from an image.",
		source: "https://github.com/anjalig21/Shape-Detection"
	},
	// {
	// 	header: purplePurlers,
	// 	title: "Purple Purlers",
	// 	details: `Founded a charity that collects blankets to donate to animal shelters accross the GTA.`,
	// 	website: "https://sites.google.com/view/purple-purlers"
	// },
];

// init for populating split arrays
const cardNumber = 3;
const cardNumberSmall = 2;
let firstSectionInit = [];
let secondSectionInit = [];
let thirdSectionInit = [];
let firstSmallSectionInit = [];
let secondSmallSectionInit = [];

// populate arrays for each section
for (let i = 0; i < cardContents.length; i++) {
	firstSectionInit.push(cardContents[i * cardNumber]);
	secondSectionInit.push(cardContents[i * cardNumber + 1]);
	thirdSectionInit.push(cardContents[i * cardNumber + 2]);

	if (i * cardNumber + cardNumber >= cardContents.length) {
		break;
	}
}
for (let i = 0; i < cardContents.length; i++) {
	firstSmallSectionInit.push(cardContents[i * cardNumberSmall]);
	secondSmallSectionInit.push(cardContents[i * cardNumberSmall + 1]);

	if (i * cardNumberSmall + cardNumberSmall >= cardContents.length) {
		break;
	}
}

// export arrays for each section
export const firstSectionCards = firstSectionInit;
export const secondSectionCards = secondSectionInit;
export const thirdSectionCards = thirdSectionInit;
export const firstSmallSectionCards = firstSmallSectionInit;
export const secondSmallSectionCards = secondSmallSectionInit;