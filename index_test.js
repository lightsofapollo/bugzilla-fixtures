suite('index', function() {
  var props = ['Bug', 'SuggestedReviewer', 'Attachment', 'Flag'];
  var subject = require('./');

  props.forEach(function(key) {
    test(key, function() {
      assert.ok(subject[key].create, key + ' is a factory');
    });
  });
});
