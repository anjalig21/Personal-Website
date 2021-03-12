import webcamPainter from "./Images/webcam_painter.gif";
import photoBot from "./Images/photobot.gif";
import climateBots from "./Images/climatebots.gif";
import shapeDetect from "./Images/shapes.gif";
import tictactoe from "./Images/tic-tac-toe.gif";
import signLanguage from "./Images/sign-language.gif"
import purplePurlers from "./Images/purplePurlers.gif"

export const cardContents = [
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
		header: shapeDetect,
		title: "Shape Detection",
		details: "Developed an application that can detect and identify shapes from an image.",
		source: "https://github.com/anjalig21/Shape-Detection"
	},
	// {
	// 	header: purplePurlers,
	// 	title: "Purple Purlers",
	// 	details: `Charity that collects blankets from the community to donate to animal shelters accross the GTA.
	// 						To date, 1200+ blankets and over $6000 have been raised.`,
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