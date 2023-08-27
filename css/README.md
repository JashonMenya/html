# CSS Basics: An Introduction

CSS (Cascading Style Sheets) is a vital component of web development that controls the visual presentation of web pages. This guide aims to provide a fundamental understanding of CSS, its key concepts, and how it enhances the design and layout of web content.

## Table of Contents

- [What is CSS?](#what-is-css)
- [How CSS Works](#how-css-works)
- [Selectors and Declarations](#selectors-and-declarations)
- [Cascading Order](#cascading-order)


## What is CSS? <a name="what-is-css"></a>

CSS is a textual language that defines the visual appearance of web pages. It allows you to control how elements on a webpage are displayed, including their colors, fonts, spacing, and layout.

## How CSS Works <a name="how-css-works"></a>

Web browsers use CSS to interpret and apply styling to HTML elements. Each HTML element can be targeted using a **selector**, and a set of **declarations** define how the selected elements should look.

## Selectors and Declarations <a name="selectors-and-declarations"></a>

A **selector** specifies the HTML elements you want to style, and a **declaration** contains one or more property-value pairs separated by semicolons.

```css
selector {
    property: value;
    another-property: another-value;
}
```

## Cascading Order <a name="cascading-order"></a>

CSS rules follow a **cascading** order, which refers to the process of determining how conflicting styles are applied to elements. This order ensures that styles from different sources are combined and applied in a logical manner. The cascading order is crucial for maintaining consistency and managing conflicts in styling.

### Sources of Styles

Styles can come from various sources, including:

1. **User Agent Stylesheets**: These are the default styles applied by the browser to HTML elements.
2. **Author Stylesheets**: These are the styles provided by the web page's author using CSS.
3. **User Stylesheets**: Users can apply their own styles to web pages using browser extensions or settings.
4. **Importance**: Styles can be marked as important, giving them higher precedence.

### Specificity and Inheritance

When multiple conflicting styles target the same element, the specificity of the selectors and inheritance play a role in determining which style takes precedence. Specificity is calculated based on the number of IDs, classes, and elements in the selector. The more specific a selector is, the higher its specificity.

### Order of Application

The following order of application helps resolve conflicts:

1. **Importance**: Styles marked with `!important` have the highest precedence.
2. **Specificity**: More specific selectors take precedence over less specific ones.
3. **Source Order**: If specificity is equal, the style defined later in the stylesheet takes precedence.

### Example

Consider this example:

```css
p {
    color: blue;
}

p {
    color: red;
}
```

Even though both rules target the same element, the second rule will override the first due to the order of application.