cascade = to fall or hang down, especially in large amounts or in stages

CSS is called "Cascading Style Sheets" because of the way styles are applied, or "cascade," down through the hierarchy of a webpage. The term cascading refers to the specific set of rules the browser follows to determine which styles to apply when multiple rules conflict.

This cascade is a powerful feature that allows you to define a general set of styles at a higher level (like a body or a container) and then override or add more specific styles to individual elements without having to rewrite everything. This ensures consistency and makes your code more efficient.

The Three Main Cascading Principles
The cascade is governed by three primary factors:

Order of Appearance: The last style rule defined in the stylesheet will override any earlier, conflicting rules with the same specificity.

Specificity: This is a scoring system that gives more specific selectors (like an ID) priority over less specific ones (like a class or a tag name).

Inheritance: Many CSS properties, like font-size and color, are passed down from a parent element to its child elements.

The browser evaluates these factors to decide which style ultimately wins and gets applied to an element.