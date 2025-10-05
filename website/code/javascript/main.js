const feImage = document.querySelector('feImage');
fetch("https://raw.githubusercontent.com/IMightBeInDebt/html-liquid-glass-thing/refs/heads/main/map.png")
    .then((Response) => {
        return Response.blob();
    })
    .then((blob) => {
        const objURL = URL.createObjectURL(blob);
        feImage.setAttribute("href", objURL);
    });