## Embedding the widget

In order to install the widget you need two things: a) insert a "target element" into the page where you want it, b) add the javascript embed and initializing code anywhere after the target element.

```html
<div id="cop-action-widget"></div>
<script src='/cop-action-widget.js'></script>
<script>
  new ActWidget({target: document.getElementById("cop-action-widget")});
</script>
```

## Theming your widget

You can pass some theme properties into the widget like so:

```javascript
new ActWidget()
props: {
  theme: {
    color: '#663399',
    darkColor: 'darkGray'
  }
}
```
