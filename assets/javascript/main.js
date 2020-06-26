/* 1. Randomly set your coin object's "state" property to be either 
    0 or 1: use "this.state" to access the "state" property on this object.*/
let coin = {
    state: 0,
    flip: function() {
        // this.state with Math.random here.(REC. 2020-06-26 13-26-37 @ 3:48)
    },


/* 2. Return the string "Heads" or "Tails", depending on whether
    "this.state" is 0 or 1. */
    toString: function() {
        // if/else here.(REC. 2020-06-26 13-26-37 @ 9:47)
    },


/* 3. Set the properties of this image element to show either face-up
    or face-down, depending on whether this.state is 0 or 1.*/
    toHTML: function() {
        let image = document.createElement('img');
            // if/else image.srv here.(REC. 2020-06-26 13-26-37 @ 9:47)
        return image;
    }
};

// *Write a function called display20Flips that uses a loop to flip the coin 20 times. 
//  Each time the coin flips, display the result of each flip as a string on the page 
//  (make use of your toString() method)
function display20Flips () {
    for (let index = 20; index < display20Flips.length; index += 1) {
        // Return result of each flip.(REC. 2020-06-26 13-26-37 @ 11:42)
     }
}

// *Write a function called display20Images, again using a loop to flip the coin 20 
//  times…but this time instead of displaying the result as a string, display the 
//  result of each flip as an HTML IMG element on the page (make use of your toHTML() method).
function display20Images () {
    for (let index = 20; index < display20Images.length; index += 1) {
        // Return image of the result of each flip.(REC. 2020-06-26 13-26-37 @ 11:42)
        // assets/images/coin_heads.png - coin_tails.png
     }
}

// *Finished product should look something like this:(REC. 2020-06-26 13-26-37 @ 16:32)

// *Create a refresh button and append to HTML.(Not needed, but Alec used one.)

// *Check out math.round on W3Schools.(May help with the math.random.)

// *Note that you will need to download or create images to use to display face-up or 
//  face-down coins for the toHTML method. Create a folder directory named images in 
//  your repository to hold them.
