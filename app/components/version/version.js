'use strict';

angular.module('webconnect.version', [
  'webconnect.version.interpolate-filter',
  'webconnect.version.version-directive'
])

.value('version', '0.1');
