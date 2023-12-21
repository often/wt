# Usage
First, you want to include these in your HTML `<head>`:

```html
<link rel='stylesheet' href='https://often.github.io/wt/css/wt.min.css' />
<script type='module'>
   import { WT } from 'https://often.github.io/wt/js/wt.min.js'
   
   const wt = WT({
      element: document.querySelector('.wt'),
      commands: {
         foo() { return 'bar' },
         bar() { return 'foo' }
      },
      help: true,
      clear: true,
      autofocus: true,
      banner: 'Welcome...'
   })
   wt.print('to wt!')
   wt.commands.hello = () => 'world'
   const world = () => 'hello'
   wt.addCommand(world)
   wt.addCommands({
      time() { return Date() },
      isAwesome(who) { return who === 'wt' ? 'yes' : 'no' }
   })
</script>
```
The stylesheet is optional, but highly recommended if you do not look forward to styling the terminal yourself. Once included though, you are able to control the terminal colors and other by using [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). These are the default values:
```css
.wt {
  --color-scheme: dark;
  --font-size: 16px;
  --font-family: 'Inconsolata', monospace;
  --text-color: #fff;
  --bg-color: #000;
  --padding: 10px;
  --input-width: 100%;
  --input-border: none;
  --input-outline: none;
  --input-box-sizing: border-box;
  --input-placeholder-color: #ccc;
  --output-max-height: 500px;
  --output-margin: 0 0 5px 0;
  --output-overflow: auto;
  --selection-text-color: #000;
  --selection-bg-color: #fff;
}
```
Feel free to customize it to your liking. Or, leave the defaults, if you like them.

Now, let's continue. If you pay attention to the HTML above, inside the `<script>` tag, and inside the `WT` function object, the `element` property has it's value set to `document.querySelector('.wt')`. This selects the first element that contains the `wt` class, and that is where we will initialize **wt**, in this case. To finalize this usage guide, add this to your HTML `<body>`:
```html
<div class='wt'></div>
```
Voilà! You may now play around and do whatever you want with the terminal.

To read the API documentation, [click here](API.md).

If you want to support this project, [click here](SUPPORT.md).

Happy **wt**'ing!
