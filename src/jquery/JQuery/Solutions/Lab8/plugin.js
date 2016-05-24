/*
    Should change the background color of the row in the event it has a population 
    greater than 10,000,000
    
    Should accept an optional config to override the color 
*/
(function ($) { 
    
    var defaultConfig = { color:"red" }
    
    $.fn.bigState = function(size, config) { 
        var val = parseInt(size);
        if (!config)
            config = {};
        
        $.extend(true, config, defaultConfig);
        console.log(size);
        if (val && val >= 10000000)
            this.css("background", config.color);
      return this;  
    };
    
})(jQuery) 
