let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};

// *Note that you will need to download or create images to use to display face-up or 
//  face-down coins for the toHTML method. Create a folder directory named images in 
//  your repository to hold them.

// *Write a function called display20Flips that uses a loop to flip the coin 20 times. 
//  Each time the coin flips, display the result of each flip as a string on the page 
//  (make use of your toString() method)

// *Write a function called display20Images, again using a loop to flip the coin 20 
//  times…but this time instead of displaying the result as a string, display the 
//  result of each flip as an HTML IMG element on the page (make use of your toHTML() method).
