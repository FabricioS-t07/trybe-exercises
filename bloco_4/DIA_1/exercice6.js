const pecaXadrez = "que";
const pecaXadrezLower = pecaXadrez.toLowerCase();

if (pecaXadrezLower == "king" || "queen" || "rook" || "bishop" || "knight" || "pawn") {
  switch (pecaXadrezLower){
    case "king":
      console.log("King -> +1 any direction ")
      break;
    case "queen":
      console.log("Queen -> all any direction")
      break;
    case "rook":
      console.log("Rook -> all forwards, backwards, left, or right")
      break;
    case "bishop":
      console.log("Bishop -> all diagonals")
      break;
    case "knight":
      console.log("Knight -> extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner")
      break;
    case "pawn":
      console.log("Pawn -> +1 any direction")
      break;
    default:
      console.log("Error não é uma peça de chess")
  }
}

