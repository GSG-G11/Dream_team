/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const createElement = (
  tagName,
  className,
  textNode,
  attribute,
  attributeValue,
) => {
  const variable = document.createElement(tagName);
  variable.className = className;
  variable.setAttribute(attribute, attributeValue);
  variable.appendChild(document.createTextNode(textNode));
  return variable;
};
