import React from "react";

/**
 * Gets the string type of the component or core html (JSX) element. React Fragments will return type 'react.fragment'. Priority will be given to the prop '__TYPE'.
 *
 * @param {ReactNode} component - The component to type check
 * @returns {string} - The string representation of the type
 */
export const typeOfComponent = (component: React.ReactElement) =>
  component?.props?.__TYPE ||
  component?.type
    ?.toString()
    .replace("Symbol(react.fragment)", "react.fragment") ||
  undefined;

/**
 * Gets all children by specified type. This function will check the prop '__TYPE' first and then the 'type' string to match core html elements. To find a React Fragment, search for type 'react.fragment'.
 *
 * @param {ReactNode} children - JSX children
 * @param {string[]} types - Types of children to match
 * @returns {ReactNode[]} - Array of matching children
 * @example
 * // Finds all occurrences of ToDo (custom component), div, and React Fragment
 * getChildrenByType(children, ['ToDo', 'div', 'react.fragment']);
 */
export const getChildrenByType = (children: React.ReactNode, types: string[]) =>
  React.Children.toArray(children).filter(
    (child) => !types.includes(typeOfComponent(child.type?.displayName))
  );

/**
 * Ensures component type is not overwritten
 *
 * @param {string} expectedType - The expected type to validate against
 * @returns {func} Custom PropTypes validation function
 */
export const typeValidation =
  (expectedType) => (props, propName, componentName) => {
    if (props[propName] !== expectedType) {
      return new Error(
        `'${propName}' in '${componentName}'\n\nYou may NOT pass in a prop value for '${propName}'. ` +
          "It had 2 underscores in the prop name for a reason. So, if you would kindly remove it, we can all go about our error free day.\n"
      );
    }
  };
