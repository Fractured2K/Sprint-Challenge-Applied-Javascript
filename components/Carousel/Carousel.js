class Carousel {
    constructor(carousel) {
        // Select left and right buttons
        this.rightButton = carousel.querySelector('.right-button');
        this.leftButton = carousel.querySelector('.left-button');

        // Select all images and put them into an array.
        this.images = [...carousel.querySelectorAll('img')];

        // Set the current index of the image
        this.currentIndex = 0;
        // Get the last image index
        this.imagesLast = this.images.length - 1;
        // Display the first image by default
        this.images[this.currentIndex].style.display = 'block';

        // Create an array of two buttons that are listening to click events
        [this.rightButton, this.leftButton].forEach(direction => {
            direction.addEventListener('click', e => this.direction(e));
        })
    }

    direction(e) {
        // Iterate through each image setting the display property to none
        this.images.forEach(img => img.style.display = 'none');

        if (e.target === this.rightButton) {
            // check if the current index is the last in the `this.images` array
            // if it is set the current index to 0
            // if its not add 1 to the this.currentIndex counter
            this.currentIndex === this.imagesLast ? this.currentIndex = 0 : this.currentIndex++;
        } else {
            // If the current index is 0 set the current index to the last image indice
            // If not substract 1 from the counter
            this.currentIndex < 1 ? this.currentIndex = this.imagesLast : this.currentIndex--;
        }

        // Set the display property to block on the current this.images array index
        this.images[this.currentIndex].style.display = 'block'
    }

}

// Create an instance of carousel and pass in the selected carousel as a parameter
new Carousel(document.querySelector('.carousel'));
