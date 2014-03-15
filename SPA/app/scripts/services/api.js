'use strict';

/**
 * api initializer factory
 */

angular.module('spaApp').factory('api', function ($http, $cookieStore, $rootScope) {
  var hasBeenConfigured = false;
  return {
    init: function (token) {
      // this is the token of the bank
      $http.defaults.headers.common['X-BANK-TOKEN'] = 3;
      $http.defaults.headers.common['X-AUTH-TOKEN'] = token || $cookieStore.get('token');

      console.log("Executes init & token = " + $cookieStore.get('token'));
    },
    config: function(){
      $rootScope.restAPIBaseUrl = "http://projects.anzen.com.mx:8081/Abanking-Core/rest";
      $rootScope.subscribeKey = "sub-c-74d472c2-894a-11e3-a56b-02ee2ddab7fe";
      $rootScope.publishKey = "pub-c-d49c709c-8d0c-40ed-aaa6-66cbc20683d0";
    }
  };
});