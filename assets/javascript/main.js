/* 1. Randomly set your coin object's "state" property to be either 
    0 or 1: use "this.state" to access the "state" property on this object.*/

// this.state with Math.random here.(REC. 2020-06-26 13-26-37 @ 3:48)
// *Check out math.round on W3Schools.(May help with the math.random.)

let coin = {
    state: 0,
    flip: function () {
        // this.state = Math.floor (Math.random () * 2);
        this.state = Math.round (Math.random ()); // https://www.w3schools.com/js/js_random.asp
        // console.log (this.state);
        return this.state;
    },


/* 2. Return the string "Heads" or "Tails", depending on whether
    "this.state" is 0 or 1. */

// if/else here.(REC. 2020-06-26 13-26-37 @ 9:47)

    toString: function () {
        if (this.state === 0) {
        // console.log ('Heads Text');
        return 'Heads Flipped.';

        } else {
            // console.log ('Tails Text');
            return 'Tails Flipped.';
            }
    },


/* 3. Set the properties of this image element to show either face-up
    or face-down, depending on whether this.state is 0 or 1.*/

// if/else image.srv here.(REC. 2020-06-26 13-26-37 @ 9:47)
// ./assets/images/coin_heads.png - coin_tails.png
   
    toHTML: function () {
        let image = document.createElement ('img');
        if (this.state === 0) {
        // console.log ('Heads Image');
        image.src = './assets/images/coin_heads.png';

        } else {
            // console.log ('Tails Image');
            image.src = './assets/images/coin_tails.png';
            }
        return image;
        }
};


// *4. Write a function called display20Flips that uses a loop to flip the coin 20 times. 
//  Each time the coin flips, display the result of each flip as a string on the page 
//  (make use of your toString() method)

// Return result of each flip.(REC. 2020-06-26 13-26-37 @ 11:42)
// Appending the DOM.(REC. 2020-06-26 14-44-56)

const bodyElement = document.querySelector ('body');
const mainElement = document.createElement ('main');
mainElement.className = 'main';
const listElement = document.createElement ('ol');
listElement.className = 'list';
bodyElement.append (mainElement);
mainElement.append (listElement);

function display20Flips () {
    for (let index = 0; index < 20; index += 1) {
        let textFlips = document.createElement ('li');
        listElement.append (textFlips);
        textFlips.append (coin.toString ());
        coin.flip ();
    }
}
display20Flips ();


// *5. Write a function called display20Images, again using a loop to flip the coin 20 
//  times…but this time instead of displaying the result as a string, display the 
//  result of each flip as an HTML IMG element on the page (make use of your toHTML() method).

// Return image of the result of each flip.(REC. 2020-06-26 13-26-37 @ 11:42)
// Appending the DOM.(REC. 2020-06-26 14-44-56)

function display20Images () {
    for (let index = 0; index < 20; index += 1) {
        coin.toHTML ();
        mainElement.append (coin.toHTML ());
        coin.flip ();
    }
}
display20Images ();


// *6. Create a refresh button and append to DOM.(Not needed, but Alec used one.)

const buttonElement = document.createElement ('button');
buttonElement.className = 'button';
mainElement.append (buttonElement);
buttonElement.append ('Reset Button');

buttonElement.addEventListener ("click", function () {
    // console.log ('Reset Button Clicked.');
    location.reload (); // https://www.w3schools.com/jsref/met_loc_reload.asp
})


// *Finished product should look something like this:(REC. 2020-06-26 13-26-37 @ 16:32)

// *Note that you will need to download or create images to use to display face-up or 
//  face-down coins for the toHTML method. Create a folder directory named images in 
//  your repository to hold them.
