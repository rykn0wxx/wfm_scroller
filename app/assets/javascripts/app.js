(function (root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {

		define(['jQuery', 'exports'], function ($, exports) {
			root.rykn0wxx = factory(root, exports, $);
		});

	} else if (typeof exports !== 'undefined') {
		var jQuery = window.jQuery;
		if (jQuery === undefined) {
			try {
				jQuery = require('jQuery');
			} catch (err) {
				if (!jQuery) throw new Error('jQuery dependency not found');
			}
		}

		factory(root, exports, jQuery);

	} else {

		root.rykn0wxx = factory(root, {}, (root.jQuery || root.Zepto || root.ender || root.$));

	}

} (this, function (root, rykn0wxx, $) {
  'use strict';

  var AppAdmin = function (el, opts) {
    this.$element = $(el);
    this.options = $.extend({}, AppAdmin.DEFAULTS, opts);
  };

  AppAdmin.DEFAULTS = {};

  AppAdmin.prototype.nestedHelpers = function () {
    $(document).on('click', 'form.app-form .add_field', function (event) {
      var time = new Date().getTime();
      var regexp = new RegExp($(this).data('id'), 'g');
      $('form.app-form .form-assoc').append($(this).data('fields').replace(regexp, time));
      event.preventDefault();
      return false;
    });
    $(document).on('click', 'form.app-form .remove_field', function (event) {
      $(this).prev('input[type=hidden]').val('1');
      $(this).closest('.form-inputs').hide('linear');
      event.preventDefault();
    });
    $(document).on('click', 'form.app-form .btn-cancel', function (event) {
      Turbolinks.clearCache();
    });
  };

  function _init (data) {
    'use strict';

    data.nestedHelpers();
  }

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('mudhead');
      var options = typeof option === 'object' && option;
      if (!data) {
        $this.data('mudhead', (data = new AppAdmin(this, options)))
      }
      _init(data);
    });
	}

  var old = $.fn.rykn0wxx;
  $.fn.rykn0wxx = Plugin;
  $.fn.rykn0wxx.Constructor = AppAdmin;
  $.fn.rykn0wxx.noConflict = function () {
    $.fn.rykn0wxx = old;
    return this;
  };

  $(document)
    .on('turbolinks:load', function (ev) {
      var $ryk = $('.rykn0wxx');
      var kk = $ryk.find('meta[name="kohana"]');
      if ($ryk.data('mudhead')) {
        $ryk.data('mudhead', null)
      }
      Plugin.call($ryk, {
        controller: {
          action: kk.attr('action'),
          name: kk.attr('controller')
        }
      });
      ev.preventDefault();
    });


}));
