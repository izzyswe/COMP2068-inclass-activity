// Function receives props object as parameter (naming it "props" is convention)
// Attribute names you pass become properties: <Entry title="..." /> → props.title

//props
//1.title --> content title ex.) Mount Fuji
//2.img --> location image
//3.country --> ex.) Japan
//4.mapUrl --> google map url
//5.date --> ex.) 12 Jan 2021 - 24 Jan 2021
//6.description --> ex.) Mount Fuji is the tallest mountain in Japan.....

//function to return Entry component with props (add props argument)
export default function Entry(){
  //add return () here  
    // Type the emmet shortcut div.card>div.card__img+div.card__content>div.card__content-location+div.card__content-info>h1+h2+p
    // it is saying the parent is div ">" means go inside the parent, create 2 divs inside the parent
    // inside the second child parent add 2 more divs
    // each div will have the following classNames: card, card__img, card__content (2 other already included)
}
