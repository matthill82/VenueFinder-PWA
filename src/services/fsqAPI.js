const foursquare = require("react-foursquare-es5-mod")({
  clientID: "ZGBKOARPPXMKZCY5J3CWRKXPIRPUO4YARAK0SYCWWYZGBNSA",
  clientSecret: "LL2MEHXG0TLIZ4VVXI4QECOJP5LIVUI0YDFBSG25K3RQMT1O"
});

const suggestCompletion = params => foursquare.venues.suggestCompletion(params);

export default suggestCompletion;
