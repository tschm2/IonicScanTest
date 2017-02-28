angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {

  $scope.chat = Chats.get($stateParams.chatId);

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };

    var input = new Uint8Array();
    var output = pako.deflate(input);

    // Get some base64 encoded binary data from the server. Imagine we got this:
    var b64Data     = 'H4sIAAAAAAAEAK1UzW7aQBB+lY2vsaNd24DNLQmhRQktIrSRWuWwtge8wl6j9bpNQLxNHqO3vFhn7TglAXKqhPF4Z3bmm29+NtZ5pVOrb/W6lFHqudQPOz3LtgYaD13Kug6jDgtmLOgzr+95p9TtU4oGowQNIt+bh91o7vjzwHV8CCMn5FHghDGN58E86PDQOBtDMntcgdVntSxinoPUpdX/ubHOV6uRLLVCb5LHKUkgJ1dlCbKN4fshY14TsvHi2dakaG4P8J/Z1Mbn3oAeqiJvgdMQf3Uqs2LnjIXWFm0nqoyji0dUDNQZ+VJoMlRcrm3zqkDOIUvw7rTgaDH5iuJsuZiWEr9GqFxqURiE36QwRN3Orq2tvWkAuwGjXtf/GDA9BNhzKDsA7lytNfnMZWmT8fMfGacgU141FB0CeJFhTYs4TVQVL4+AZKHb890PWKXHWP1PIC/TIoNSgxISjZag9oHutkaliDjLz2xipKRS2CnC6CoBSgOZgCoLCfKk7RqXscD3jqfnHqxBx2EMMzyQ3tUDz1cZkGuuMpvcPT/JhXjNbDR+Qz+oKhWLSi7+pTS+eZ9RBIJcQMLVHK1wCAscjHpAavg4AWLxW8RLyHZyYPslOthHL40/klNAa2ayeUU3FBDtku3sARMlWVck5w9nxMdXRvTz0yITyDgjMx5loJFwEFJCmtfl3UPv97oe83pH2P8QKyKdNWZFY0a392+r8X5THWqu2xihqTW8H1HjiGuBy8fqb6yLesmx0PfqsjM0vhTaxLjjWWIy1k0Rh19wYZkgoGvqPoFMUDBob15U46psdDd4A1vmqll7JszgptRjMLDqM97Q8FrRBp9rW995hjYBqwvSqN1WzVo1C2idxjSuvYwa1qf40en17tvxdlvBawW/FTqt0G2vMSR4i8SkOEAY4dRnpBcS5nrE75CuofhWKwDdtPYCu4TjfibMbLgfYoXHoRviUkV/+dLkDoq8sExEqcmvIidm6y+5WZrlKuOSRLAAYRjTJ9b2LyrDpWuFBgAA';
  console.log(b64Data);
    // Decode base64 (convert ascii to binary)
    var strData     = atob(b64Data);
  console.log(strData);
    // Convert binary string to character-number array
    var charData    = strData.split('').map(function(x){return x.charCodeAt(0);});
  console.log(charData);
    // Turn number array into byte-array
    var binData     = new Uint8Array(charData);
  console.log(binData);
    // Pako magic
    var data        = pako.inflate(binData);
  console.log(data);
    // Convert gunzipped byteArray back to ascii string:
    var strData     = String.fromCharCode.apply(null, new Uint16Array(data));

    console.log(strData);

    // Output to console
    //
    // Here you can do base64 encode, make xhr requests and so on.
    //

});
