const { beforeEach, test, expect, afterEach } = require("@jest/globals");
const { createModal } = require("../javascript/modal.js");

describe("modal functionality", () => {
  beforeEach(() => {
    document.body.innerHTML = `
       <nav> 
        <a href="#" class="nav-healthy-recipes" > Healthy recipes   </a>
       </nav>
     `;
  });

  afterEach(() => {
    document.body.innerHTML = ``;
  });

  //   first test w
  test("should add modal and overlay to the DOM", () => {
    const triggerElement = document.querySelector(".nav-healthy-recipes");
    const contentHtml = `<p> Test Content </p>`;
    createModal(triggerElement, contentHtml);
    expect(document.querySelector(".overlay")).not.toBeNull();
    expect(document.querySelector(".modal-card")).not.toBeNull();
  });

  test("modal/overlay should have hidden class by default", () => {
    const triggerElement = document.querySelector(".nav-healthy-recipes");
    const contentHtml = `<p> Test Content </p>`;
    createModal(triggerElement, contentHtml);
    const modalCard = document.querySelector(".modal-card");
    const overlay = document.querySelector(".overlay");
    expect(modalCard.classList.contains("hidden")).toBe(true);
    expect(overlay.classList.contains("hidden")).toBe(true);
  });

  test("clicking the trigger element should show the modal and overlay", () => {
    const triggerElement = document.querySelector(".nav-healthy-recipes");
    const contentHtml = `<p>Test Content</p>`;
    createModal(triggerElement, contentHtml);

    triggerElement.click();

    const overlay = document.querySelector(".overlay");
    const modalCard = document.querySelector(".modal-card");

    expect(overlay.classList.contains("hidden")).toBe(false);
    expect(modalCard.classList.contains("hidden")).toBe(false);
  });

  test("clicking the overlay should close the modal window", () => {
    const triggerElement = document.querySelector(".nav-healthy-recipes");
    const contentHtml = `<p>Test Content</p>`;
    createModal(triggerElement, contentHtml);
    triggerElement.click();

    const overlay = document.querySelector(".overlay");
    overlay.click();
    const modalCard = document.querySelector(".modal-card");
    expect(overlay.classList.contains("hidden")).toBe(true);
    expect(modalCard.classList.contains("hidden")).toBe(true);
  });

  test("clicking the close button should close the window", () => {
    const triggerElement = document.querySelector(".nav-healthy-recipes");
    const contentHtml = `
      <div class="modal-card-header">
        <button class="close-modal-card">&times;</button>
      </div>`;
    createModal(triggerElement, contentHtml);
    triggerElement.click();
    const modalCard = document.querySelector(".modal-card");
    const overlay = document.querySelector(".overlay");
    const closeButton = document.querySelector(".close-modal-card");
    closeButton.click();

    expect(overlay.classList.contains("hidden")).toBe(true);
    expect(modalCard.classList.contains("hidden")).toBe(true);
  });

  test("check that modal window should contain the correct content", () => {
    const triggerElement = document.querySelector(".nav-healthy-recipes");
    const contentHTML = `<p> Recipes content check </p>`;
    createModal(triggerElement, contentHTML);
    triggerElement.click();
    const modalCard = document.querySelector(".modal-card");
    expect(modalCard.innerHTML).toContain("Recipes content check");
  });
});
