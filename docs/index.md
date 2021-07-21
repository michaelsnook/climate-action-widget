## Embedding the widget

To install the widget you only need to do two things:

1. Insert a "target element" into the page where you want it
1. Add the javascript embed and initializing code anywhere after the target element.

```html
<div id="cop-action-widget"></div>
<script src='/cop-action-widget.js'></script>
<script>
  new ActWidget({target: document.getElementById("cop-action-widget")});
</script>
```

## Demo of the widget in action

Here's a live version of the widget below. You can use the menu to visit one
of the country org's home pages.

<div id="cop-action-widget"></div>
<script src='./example/cop-action-widget.js'></script>
<script>
  new ActWidget({
    target: document.getElementById("cop-action-widget")
  });
</script>

## Theming your widget

The widget is not an iframe so it will pick up your existing styles on the page,
but it also has some of its own, including a light CSS reset, some button styles
and colors.

The easiest way to bring the widget into alignment with your own branding is to
pass theme properties into the widget when you initialize it, like this:

```javascript
new ActWidget({
  target: document.getElementById("cop-action-widget"),
  props: {
    theme: {
      color: '#663399',
      darkColor: 'darkGray'
    }
  }
});
```

If you wish to disable the widget's styles altogether, you can get rid of
most of them by passing `noStyles` and `noLayout` along with the theme object.

```javascript
theme: {
  noStyles: true,
  noLayout: true
}
```

## Where to put your widget

The widget relatively simple and doesn't need much space, so the width of its inner content is capped at 400px. It goes nicely on the right side of a banner section or in a popup.
[See here for an example page embedding the widget](./example/index.html). You can resize the page to see how the widget will look at different sizes.

Here's some sample code for how you might place the widget in a popup for visitors to your
site who aren't in your country and want to find a relevant partner organization:

```html
<a class="modal-overlay hidden" onClick="function() {this.target.addClass('hidden')}">
  <div class="modal-container">
    <div class="cop-action-widget"></div>
  </div>
</a>

<a href="...">
  Click here to find an action near you or join up with a local group
</a>
<a href onClick="function() {$('.modal-overlay').removeClass('hidden')}">
  Not from Poland? Click here to find an action in your region
</a>
```
