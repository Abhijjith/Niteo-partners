(function($) {
    $.fn.fixHeight = function(settingsOptions) {
        var elements = this;
		
		var settings = {};

        var settingsDefault = {
            itemOffset: 4
        };
		
		settings = jQuery.extend(settings, settingsDefault, settingsOptions);

		var maxHeight = [];
		var itemCount = 0;
		var itemLength = elements.size();
		
		var rows = parseInt(itemLength / settings.itemOffset, 10);
		if (itemLength % settings.itemOffset > 0) {
			rows++;
		}
		
		for (var i = 0; i < rows; i++) { maxHeight.push(0); }
		
		var currentRow = 0;
		
		elements.each(function() {
			var el = $(this);
			
			var currentHeight = el.height();
			var currentIndex = el.index();
			var currentRow = parseInt(currentIndex / settings.itemOffset, 10);
			
			if (currentHeight > maxHeight[currentRow]) {
				maxHeight[currentRow] = currentHeight;
			}
		});

        return (
			elements.each(function() {
				var el = $(this);
				
				var currentIndex = el.index();
				var currentRow = parseInt(currentIndex / settings.itemOffset, 10);
				
				el.css("height", maxHeight[currentRow]);
			})
		);
    };
})(jQuery);
