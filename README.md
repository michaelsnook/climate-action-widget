# Climate Action Widget

This is a simple climate action widget build for Sunrise Project to embed
on their pages and for partners to embed on pages to help connect visitors
with organizations hosting actions in their country or region.

This repo also includes a docs folder with a Jekyll site for documenting
how to use/embed the widget, and an example/index.html showing a tiny
little example microsite.

## How to Embed and Theme the Widget

[Visit the documentation site for instructions on how to embed and theme the widget.](https://michaelsnook.github.io/climate-action-widget/)

## Developing the Embed

It's just svelte. So make sure you have recent NodeJS (I'm using 14) and
`npm i && npm run build`. This will compile the widget with rollup, meaning
the resulting package is all vanilla JS, with no framework to load.

Styles are currently all by-hand. It's very simple stuff.
