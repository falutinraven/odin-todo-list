export function elementCreator (type, classlist = [], textContent, attributes){
  const element = document.createElement(tag);

  classes.forEach(classInstance => {
      element.classList.add(classInstance);
  });

  if (textContent) {
      element.textContent = textContent;
  };

  if (attributes) {
      for (const key in attributes) {
          element.setAttribute(key, attributes[key]);
      }
  };
  return element;
}