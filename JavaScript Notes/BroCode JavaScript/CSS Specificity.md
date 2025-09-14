ID's have higher specificity than classes.

Cascading Style Sheet [[cascading]]

When you have a property like `background-color` defined in both an ID selector (`#myButton`) and a class selector (`.enabled`), the browser must decide which one to apply. The rule of thumb is that **ID selectors have a higher specificity** score than class selectors.

By removing `background-color` from the `#myButton` ID selector, you eliminated the conflict. Now, the properties from `#myButton` (like `font-size`, `border`, and `border-radius`) are applied, and the `background-color` from the `.enabled` class is also applied because it's the only rule defining that specific property. The browser effectively **merges** the styles from both selectors.