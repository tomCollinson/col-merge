(function($) {

    $.columator = function(element, options) {

        var defaults = {
            col: ".col",
            colItem: ".colElm",
            breakpointLarge: 800,
            breakpointSmall: 480,
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            
            $(window).on("load resize", function(){
            
            if (viewportSize().width >= plugin.settings.breakpointLarge && $('.col2-item').length > 0) {

                colAdjust();

            } else if (viewportSize().width < plugin.settings.breakpointLarge && viewportSize().width >= plugin.settings.breakpointSmall) {

                colAdjust('collapse');
            }
            });
            
        }
        
        var colAdjust = function(changeType) {
        
          var col1 = $(plugin.settings.col).eq(0),
              col2 = $(plugin.settings.col).eq(1),
              col2Length = col2.find(plugin.settings.colItem).length,
              col3 = $(plugin.settings.col).eq(2),
              winWidth = $(window).width(),
              count = 0,
              i;
          
          if (changeType === "collapse") {
          
            for (i = 0; i < 2; i +=1) {
              
              col2.find(plugin.settings.colItem).each(function() {
                if (count === Math.round(col2Length / 2)) {
                  return;
                }
                $(this).addClass("col2-item").appendTo(col1);
                count += 1;
              });
            }
            
            // Refresh reference to col2 items
            col2.find(plugin.settings.colItem).each(function(){
              $(this).addClass("col2-item").prependTo(col3);
            });
            
            col2.hide();
          
          } else {
          
            col1.find(".col2-item").appendTo(col2);
            col3.find(".col2-item").appendTo(col2);
            col2.show();
          
          }
        
        }

        var viewportSize = function() {
        
             var e = window, a = 'inner';
      
            if (!('innerWidth' in window )) {
                a = 'client';
                e = document.documentElement || document.body;
            }
            
            return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
        }

        plugin.init();

    }

    $.fn.columator= function(options) {

        return this.each(function() {
            if (undefined == $(this).data('columator')) {
                var plugin = new $.columator(this, options);
                $(this).data('columator', plugin);
            }
        });

    }

})(jQuery);
