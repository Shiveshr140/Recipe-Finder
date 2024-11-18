const main = document.querySelector(".main");
const defaultMainHeader = document.createElement("div");
defaultMainHeader.classList.add("default-main-header");
main.appendChild(defaultMainHeader);

defaultMainHeader.innerHTML = `
  <h1> What Can You Cook With… </h1>
  <p> Got a lonely tomato, a handful of spinach, or a few eggs lying around? Our "Ingredient Matcher" 
     helps you whip up delicious recipes with what you already have in your kitchen. Just pick your ingredients, 
     and we’ll suggest meals that make the most out of your pantry—no waste, only tasty creations!
  </p>

`;

const defaultMainBody = document.createElement("div");
defaultMainBody.classList.add("default-main-body");
main.appendChild(defaultMainBody);

defaultMainBody.innerHTML = `
   <div class="default-main-body-img"> 
    <div class="default-main-body-img-first">
      <img src="./style/assets/cooking-image.jpg" /> 
      <p class="image-caption-below">Cooking magic starts with simple ingredients!</p>
    </div>
    <div class="image-caption-right">
    <p class="tip-header">🍅 Did You Know?</p>
    <p class="tip-content">Avocados are packed with healthy fats that keep your heart healthy and your skin glowing. 
        Tomatoes are rich in antioxidants like lycopene, which helps reduce the risk of heart disease 
        and gives them their vibrant red color. Spinach is an iron powerhouse, providing essential nutrients 
        for energy and vitality. Capsicums, or bell peppers, 

    </p>
  </div>
   </div>
`;
