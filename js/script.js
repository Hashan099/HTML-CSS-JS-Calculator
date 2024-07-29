document.addEventListener("DOMContentLoaded", () => {
  const displayarea = document.querySelector(".calculator__output");

  document.addEventListener("click", (event) => {
    if (event.target.matches(".calculator__key")) {
      const userinput = event.target.value;
      displayarea.textContent += userinput;
    } else if (event.target.matches("[data-clearbtn]")) {
      displayarea.textContent = "";
    } else if (event.target.matches("[data-answer-btn]")) {
      const input = displayarea.textContent;

      const regex = /^[\d+\-*/.() ]+$/;
      
      if (regex.test(input)) {
        try {
          const output = eval(input);
          displayarea.textContent = parseFloat(output);
        } catch (error) {
          displayarea.textContent = "Error";
        }
      } else {
        displayarea.textContent = "Error";
      }
    }
  });
});
