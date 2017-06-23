(function() {
  'use strict';

  angular
    .module('mud', [])
    .controller('MudCtrl', function ($scope) {
      var self = this;
      self.$scope = $scope;
      $scope.formy = {
        code: '',
        msg: '...'
      };
      $scope.newsConfig = {
        behavior: 'scroll',
        direction: 'up',
        scrollamount: '1',
        message: $scope.formy.msg
      };

      $scope.zValid = function () {
        return $scope.formy.code !== 'kohana';
      };

      $scope.$watch('formy.msg', function (newVal, oldVal) {
        if (newVal !== oldVal) {
          $scope.newsConfig.message = newVal;
        }
      }, true);
    })
    .directive('themeSelect', function ($http) {

      function reCss (cssUrl) {
        var hh = document.getElementsByTagName('head')[0];
        var bsthemer = hh.querySelector('link[name="bs-themer"]');
        bsthemer.href = cssUrl;
        bsthemer.href = bsthemer.href.substr(0, bsthemer.href.indexOf('?')) + '?' + new Date().getTime();
  		}

      return {
        restrict: 'E',
        replace: true,
        scope: true,
        template: '<div class="btn-group">' +
            '<button type="button" class="btn-blue btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ selectedTheme }} <span class="caret"></span></button>' +
            '<ul class="dropdown-menu"><li ng-repeat="theme in themes"><a href="styles/{{ theme.cssMin }}.css?{{ initTime }}" ng-click="updateTheme($event)">{{ theme.name }}</a></li></ul>' +
            '<button type="button" class="btn btn-default btn-red" ng-click="showFormy()">Update Message</button>' +
          '</div>',
        link: function (scope, elem, attr) {
          scope.selectedTheme = 'Select theme  ';
          scope.initTime = new Date().getTime();
          scope.themes = [
            {
              name: 'Lumen',
              cssMin: 'bs-lumen.min'
            }, {
              name: 'Simplex',
              cssMin: 'bs-simplex.min'
            }, {
              name: 'Slate',
              cssMin: 'bs-slate.min'
            }, {
              name: 'Superhero',
              cssMin: 'bs-superhero.min'
            }
          ];
          scope.showFormy = function () {
            var el = $('.z-bottom-sheet');
            if (el.hasClass('showing')) {
              el.slideDown(300, function () {
                el.removeClass('showing');
              });
            } else {
              el.slideUp(300, function () {
                el.addClass('showing');
              });
            }
          };
          scope.updateTheme = function (ev) {
            reCss(ev.target.attributes.item('href').value);
            ev.preventDefault();
          };
        }
      }
    })
    .directive('scrollNews', function ($timeout) {
      return {
        restrict: 'E',
        template: '<marquee behavior="{{marConfig.scroll}}" direction="{{marConfig.direction}}" style="height:200px;" scrollamount="{{marConfig.scrollamount}}">{{ marConfig.message }}</marquee>',
        scope: {
          msgConfig: '='
        },
        replace: true,
        link: function (scope, elem, attr) {
          var opt = {
            scroll: 'scroll',
            direction: 'up',
            scrollamount: '2'
          };
          scope.marConfig = angular.extend({}, opt);
          var unwatch = scope.$watch('msgConfig', function (conf, zzz) {
            if (!angular.isUndefined(conf)) {
              unwatch();
              scope.marConfig = angular.extend(opt, conf);
              scope.$watch('msgConfig.message', function (newV, oldV) {
                if (newV !== oldV) {
                  scope.marConfig.message = newV;
                }
              }, true);
            }
          }, true);

        }
      };
    });


})();
