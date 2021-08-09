## Embedding the widget

To install the widget you only need to do two things:

1. Insert a "target element" into the page where you want it
1. Add the javascript embed and initializing code anywhere after the target element.

```html
<div id="cop-action-widget"></div>
<script src="link-to-the-cop-action-widget.js"></script>
<script>
  new ActWidget({target: document.getElementById("cop-action-widget")});
</script>
```

Keep in mind that the script source link in the code example here is a
placeholder. For pre-launch testing purposes you can use
`https://michaelsnook.github.io/climate-action-widget/example/cop-action-widget.js`,
but this URL is subject to change and should not be relied upon for your public pages.

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

If you need more options than this, you can request themm by getting in touch with
the developer (file an issue? email me. tweet [@michaelsnook](https://twitter.com/michaelsnook).
Or you can write CSS on your own page to style the widget.
All the elements have specific selectors that should make this easy to do.

```css
#cop-action-widget {
  border-radius: 5px;
  border: 1px gray sold;
}
#cop-action-widget .button.button-solid {
  background: orange;
}
```

In the example above, the button color would not take, because the
widget's styles would be declared with more specificity, so to avoid over-using
the `!important` directive you may prefer to disable the widget's styles.
You can get rid of almost all of the widget's styles by passing
`noStyles` and/or `noLayout` along with the theme property.

```javascript
new ActWidget({
  target: document.getElementById("cop-action-widget"),
  props: {
    theme: {
      noStyles: true,
      noLayout: true
    }
  }
});
```

In general, we don't recommend this, as it makes you responsible for testing
and tweaking all of the look and feel and responsive functionality,
and because the widget is still being developed and the markup/classnames
are not guaranteed stable. But it is an option.

## Where to put your widget

The widget relatively simple and doesn't need much space, so the width of
its inner content is capped at 400px. It goes nicely on the right side of
a banner section or in a popup.
[See here for an example page embedding the widget](./example/index.html).
You can resize the page to see how the widget will look at different sizes.

Here's some sample code for how you might place the widget in a popup for visitors to your
site who aren't in your country and want to find a relevant partner organization:

```html
<a class="modal-overlay hidden">
  <div class="modal-container">
    <div class="cop-action-widget"></div>
  </div>
</a>

<a href="/your/own/page-or-tool">
  Click here to find an action near you or join up with a local group
</a>
<a href onClick="function() {$('.modal-overlay').removeClass('hidden')}">
  Not from Poland? Click here to find an action in your region
</a>
```
