const Img = require("./Img");
const root = document.getElementById("root");

const element = React.createElement(Img, {
  alt: "Image",
  src: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
});

ReactDOM.render(element, root);
