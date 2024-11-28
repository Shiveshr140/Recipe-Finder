const { beforeEach, test, expect } = require("@jest/globals");
const { createHeaderContent, inputFocus } = require("../javascript/header");

describe("createHeaderContent()", () => {
  beforeEach(() => {
    // Set up the HTML before each test
    document.body.innerHTML = `<div class="header"></div>`;
  });

  test("should create header content with correct HTML structure", () => {
    createHeaderContent();

    const header = document.querySelector(".header");
    // Make sure the header element exists
    expect(header).not.toBeNull();

    // Check if the expected elements are in the header
    expect(header.innerHTML).toContain('<div class="header-info">');
    expect(header.innerHTML).toContain(" Find Your Perfect Recipe");
    expect(header.innerHTML).toContain(
      "Explore thousands of delicious recipes"
    );
    expect(header.querySelector(".search")).not.toBeNull();
    expect(header.querySelector(".logo-link").textContent).toContain(
      "Ingreedy"
    );
  });

  test("check for nav links", () => {
    createHeaderContent();
    const header = document.querySelector(".header");

    const healthyRecipesLink = header.querySelector(".nav-healthy-recipies");
    const seasonalLink = header.querySelector(".nav-seasonal");
    const ingredientsLink = header.querySelector(".nav-ingredients");

    expect(header).not.toBeNull();
    expect(healthyRecipesLink).not.toBeNull();
    expect(seasonalLink).not.toBeNull();
    expect(ingredientsLink).not.toBeNull();
  });
});

// test("button click flow ", () => {
//   // render the app
//   render(<App />); // find the element

//   const buttonElement = screen.getByRole("button", { name: /blue/i }); // check initial color

//   expect(buttonElement).toHaveClass("red"); // click the button

//   fireEvent.click(buttonElement); // check the text

//   expect(buttonElement).toHaveTextContent(/red/i); // check the color

//   expect(buttonElement).toHaveClass("blue"); // test style //// expect(buttonElement).toHaveStyle({ "background-color": "blue" });    // this will fail // expect(buttonElement).toHaveStyle({ "background-color": "rgb(0, 0, 255)" });
// });
