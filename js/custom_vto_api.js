window.onload = function() {
  var params = {
    apiKey: 'IauAb2wC06ZDl86CgANlCOPqlrZHk34x6eSOlUo9'
  };
  
  
  fitmixInstance = FitMix.createWidget('my-fitmix-container', params, onFitMixReady);
  
  function onFitMixReady(liveCompatible) {
    fitmixInstance.setPupillaryDistance(59);
    fitmixInstance.setUserInfo({gender : 'm'});
  }
};
