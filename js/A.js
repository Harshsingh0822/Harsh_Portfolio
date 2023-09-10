function generatePortfolioItem(imageSrc, title, category) {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = 'single-portfolio col-sm-2 all Mockup';
  

    const relativeDiv = document.createElement("div");
    relativeDiv.className = "relative";

    const thumbDiv = document.createElement("div");
    thumbDiv.className = "thumb";

    const overlayDiv = document.createElement("div");
    overlayDiv.className = "overlay overlay-bg";

    const img = document.createElement("img");
    img.className = "image img-fluid";
    img.src = imageSrc; // Image URL
    img.alt = title; // Alt text

    const aTag = document.createElement("a");
    aTag.href = imageSrc; // Image URL
    aTag.className = "img-pop-up";

    const middleDiv = document.createElement("div");
    middleDiv.className = "middle";

    const textDiv = document.createElement("div");
    textDiv.className = "text align-self-center d-flex";

    const imgPreview = document.createElement("img");
    imgPreview.src = "images/preview.png";
    imgPreview.alt = "";

    const pInnerDiv = document.createElement("div");
    pInnerDiv.className = "p-inner";

    const h4Tag = document.createElement("h4");
    h4Tag.textContent = title; // Item name

    const catDiv = document.createElement("div");
    catDiv.className = "cat";
    catDiv.textContent = category;

    textDiv.appendChild(imgPreview);
    middleDiv.appendChild(textDiv);
    aTag.appendChild(middleDiv);
    thumbDiv.appendChild(overlayDiv);
    thumbDiv.appendChild(img);
    relativeDiv.appendChild(thumbDiv);
    relativeDiv.appendChild(aTag);
    pInnerDiv.appendChild(h4Tag);
    pInnerDiv.appendChild(catDiv);
    portfolioItem.appendChild(relativeDiv);
    portfolioItem.appendChild(pInnerDiv);

    return portfolioItem;
}

// Use the function to generate 15 portfolio items with image URLs and names
const portfolioContainer = document.getElementById("portfolio-container");

const portfolioData = [
        { imageSrc: "images/Skills logo/C++_img.png", title: "C++", category: "Language and Framework" },
        { imageSrc: "images/Skills logo/CSS_img.png", title: "CSS", category: "Language and Framework" },
        { imageSrc: "images/Skills logo/HTML_img.png", title: "HTML", category: "Language and Framework" },
        { imageSrc: "images/Skills logo/javascript_img.png", title: "Javascript", category: "Language and Framework" },
        { imageSrc: "images/Skills logo/Rstudio_img.png", title: "R Studios", category: "Language and Framework" },
        { imageSrc: "images/Skills logo/SQL_img.png", title: "SQL", category: "Language and Framework" },
    { imageSrc: "images/Skills logo/Arena_img.jpeg", title: "Arena", category: "Software" },
    { imageSrc: "images/Skills logo/Canva_img.jpeg", title: "Canva", category: "Software" },
    { imageSrc: "images/Skills logo/Excell_img.png", title: "Excell", category: "Software" },
    { imageSrc: "images/Skills logo/Figma_img.png", title: "Figma", category: "Software" },
    { imageSrc: "images/Skills logo/Illust_img.png", title: "Adobe Illustrator", category: "Software" },
    { imageSrc: "images/Skills logo/MSTeams_img.jpeg", title: "MS Teams", category: "Software" },
    { imageSrc: "images/Skills logo/Powerpoint.png", title: "Powerpoint", category: "Software" },
    { imageSrc: "images/Skills logo/PS_img.png", title: "Adobe Photoshop", category: "Software" },
    { imageSrc: "images/Skills logo/VScode_img.jpeg", title: "Word", category: "Software" },
    { imageSrc: "images/Skills logo/XD_img.png", title: "Adobe XD", category: "Software" },
        { imageSrc: "images/Skills logo/Soft/audio-book.png", title: "Active Listening", category: "Soft Skills" },
        { imageSrc: "images/Skills logo/Soft/book.png", title: "Literature", category: "Soft Skills" },
        { imageSrc: "images/Skills logo/Soft/chat-box.png", title: "Communication", category: "Soft Skills" },
        { imageSrc: "images/Skills logo/Soft/competence.png", title: "Problem-Solving", category: "Soft Skills" },
        { imageSrc: "images/Skills logo/Soft/leader.png", title: "Leadership", category: "Soft Skills" },
        { imageSrc: "images/Skills logo/Soft/pen.png", title: "Writing Skills", category: "Soft Skills" },
        { imageSrc: "images/Skills logo/Soft/user.png", title: "Management", category: "Soft Skills" },
        { imageSrc: "images/Skills logo/Soft/pencil.png", title: "Sketching", category: "Soft Skills" },
    // Add more items with image URLs and names as needed
];

portfolioData.forEach((itemData) => {
    const item = generatePortfolioItem(itemData.imageSrc, itemData.title, itemData.category);
    portfolioContainer.appendChild(item);
});

  