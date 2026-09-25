const block = document.getElementById("designCreditsBlock");
const text = document.getElementById("designCreditsText");
const aboutMenu = document.getElementById("aboutMenu");

export function showDesignCredits(value) {
  const credits = typeof value === "string" ? value.trim() : "";
  if (!block || !text || !aboutMenu) return;
  text.textContent = credits;
  block.hidden = credits.length === 0;
  aboutMenu.classList.toggle("has-design-credits", credits.length > 0);
}
