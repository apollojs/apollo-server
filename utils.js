var $utils = {};

$define(global, {
  $utils: $utils
});

$utils.encodeRLE = function(str) {
  return str.replace(/([^0-9a-z])\1+/g, function(all, cap) {
    var replacement = all.length.toString(36) + cap;
    if (replacement.length < all.length)
      return replacement;
    return all;
  });
};

$utils.decodeRLE = function(str) {
  return str.replace(/([0-9a-z]+)([^0-9a-z])/g, function(all, count, cap) {
    return cap.repeat(parseInt(count, 36));
  });
};
