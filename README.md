colMerge
=========

##colMerge

A small jQuery plugin to handle the issue of moving between 3 and 2 columns in responsive web design. 

colMerge looks at the width of the window and will divide or build the middle of 3 columns depending on the large and small breakpoints. Items in the 2nd column will be divided in half and placed at the bottom of column 1 and the top of column 3. This is reversed if the window is resized and exceeds the large breakpoint that you've specified.

##Getting Started

Include jQuery and the plugin, then select the containing element of the three columns.
You then need to provide values for the options shown below. If no values are provided the defaults are used.

```html
<script src="jquery.js"></script>
<script src="jquery.colMerge.js"></script>
<script>
$(document).ready(function(){
      $('.columns-3').colMerge({
        col: ".col",
        colItem: ".colElm",
        breakpointLarge: 800,
        breakpointSmall: 480
      });
    });
</script>
```

##CSS

No CSS is required for the plugin to work, however you should use media queries to change the width of columns at the breakpoints you supplied as options from 33% on desktop to 50% on smaller devices and 100% on mobile for the full effect.


