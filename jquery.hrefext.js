;(function(window, document, $, undefined) {

    $.fn.hrefext = function(settingsOptions) {

		var elements = this,
			settings = {},
			settingsDefault = {
				classPrefix: 'icn',
				extensions: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'],
				wrapWord: false
			};
		
		settings = $.extend(settings, settingsDefault, settingsOptions);
		
		return (
			elements.each(function() {

				var link = $(this),
					linkClass = '',
					ext = /^.+\.([^.]+)$/.exec(link.attr('href'));

	            if (ext !== null) {
	                ext = ext[1];

	                if ($.inArray(ext, settings.extensions) !== -1) {
						linkClass = settings.classPrefix + ' ' + settings.classPrefix + '-' + ext;
						link.addClass(linkClass);

						if (settings.wrapWord) {

							var linkText = $.trim(link.html()),
	                			linkContexts = linkText.split(/\s/);

							linkClass += ' ' + settings.classPrefix + '-' + settings.wrapWord;

		                	if (settings.wrapWord == "front") {
								linkContexts[0] = '<span class="' + linkClass + '">' + linkContexts[0] + '</span>';
		                	} else if (settings.wrapWord == "end") {
		                		linkContexts[linkContexts.length - 1] = '<span class="' + linkClass + '">' + linkContexts[linkContexts.length - 1] + '</span>';
		                	}

		                	link.html(linkContexts.join(" "));

		                }
		            }
	            }

			})
		);

    };

}(window, document, jQuery));