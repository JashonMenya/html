# CSS Basics: An Introduction

CSS (Cascading Style Sheets) is a vital component of web development that controls the visual presentation of web pages. This guide aims to provide a fundamental understanding of CSS, its key concepts, and how it enhances the design and layout of web content.

## Table of Contents

- [What is CSS?](#what-is-css)
- [How CSS Works](#how-css-works)
- [Selectors and Declarations](#selectors-and-declarations)
- [Cascading Order](#cascading-order)
- [Selectors](#basic-selectors)


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


### Selectors
 selectors are a fundamental part of defining which HTML elements you want to style. Basic selectors are the simplest way to target elements for styling. There are five primary basic selectors:

#### 1. Element Selector

The element selector targets HTML elements by their name. For example, to style all `<h1>` elements on a page, you would use:

```css
h1 {
    font-size: 24px;
    color: #333;
}

This will apply the specified styles to all **<h1>* elements in your HTML document
```

#### 2. Class Selector
The class selector allows you to select elements with a specific class attribute. This is particularly useful when you want to apply the same styles to multiple elements. To style all elements with the class "button," you can use:

```css
.button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
}


This will apply the specified styles to all **<h1>* elements in your HTML document
```

Any element with the class "button" will receive these styles.

#### 3. ID Selector
The class selector allows you to select elements with a specific class attribute. This is particularly useful when you want to apply the same styles to multiple elements. To style all elements with the class "button," you can use:

```css
#header {
    background-color: #333;
    color: white;
    padding: 15px;
}
```
This style will only apply to the element with the id "header."

#### 4. Universal Selector
The universal selector * selects all elements on a page. Be cautious when using this selector, as it can affect the entire page. For example, to remove all default margin and padding from all elements:

```css
* {
    margin: 0;
    padding: 0;
}
```
This style will only apply to the element with the id "header."

#### 5. Attribute Selector
The attribute selector allows you to select elements based on their attributes. For instance, to select all a elements with a target="_blank" attribute (used for opening links in a new tab), you can use:


```css
a[target="_blank"] {
    text-decoration: underline;
}

```
This will underline text links that open in a new tab.

#### 6. Pseudo-Classes
Pseudo-classes are used to define special states or behaviors of elements that cannot be targeted using basic selectors. They are preceded by a colon : and typically target elements based on user interactions or element positions. Here are some common examples:

- `:hover`: *Styles applied when an element is hovered over by the mouse cursor.*
- `:active`: *Styles applied when an element is clicked or activated.*
- `:focus`: *Styles applied when an element is in focus (e.g., when selected with the keyboard).*
- `:first-child`: *Styles applied to the first child element of its parent.*
- `:nth-child(n)`: *Styles applied to elements that match a specific pattern within their parent.*

Examples
```css
button:hover {
    background-color: #ff5733;
    color: white;
}

a:active {
    color: #007bff;
}

input:focus {
    border-color: #4caf50;
}

li:first-child {
    font-weight: bold;
}

p:nth-child(odd) {
    background-color: #f2f2f2;
}
```

#### 7. Descendant Selectors
Descendant selectors allow you to select elements that are descendants of other elements. They are used to target nested elements and apply styles accordingly. For example, to style all p elements that are descendants of a div with the class "content":

```css
.content p {
    font-size: 16px;
    line-height: 1.5;
}
```
This will select all **p* elements within a **div* with the class "content."

Basic selectors, pseudo-classes, and descendant selectors provide you with a powerful set of tools for precisely targeting and styling elements in your web pages.

-----