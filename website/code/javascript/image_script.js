    const images = [
        '../../carplaybackrounds/1.jpg',
        '../../carplaybackrounds/2.jpg',
        '../../carplaybackrounds/3.jpg',
        '../../carplaybackrounds/4.jpg',
        '../../carplaybackrounds/5.jpg',
        '../../carplaybackrounds/6.jpg'
    ];

    function changeBackgroundImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        document.head.style.bdrop = `url('${images[randomIndex]}')`;
    }

    // Call the function on page load
    changeBackgroundImage();