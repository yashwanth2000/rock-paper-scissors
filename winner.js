const ruleBtn = document.querySelector(".rule_btn");
const ruleBox = document.querySelector(".rule-box");
const closeBtn = document.querySelector(".close_btn");

ruleBtn.addEventListener("click", () => {
  ruleBox.style.display =
    ruleBox.style.display == "none" || ruleBox.style.display == ""
      ? "block"
      : "none";
});

closeBtn.addEventListener("click", () => {
  ruleBox.style.display = "none";
});
