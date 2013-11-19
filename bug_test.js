suite('bug', function() {
  var Bug = require('./bug');

  test('cc_detail expanding to bug user', function() {
    var subject = Bug.create({
      cc_detail: [{ email: 'xfoo' }]
    });

    var ccDetail = subject.cc_detail[0];
    assert.ok(Object.keys(ccDetail).length > 0);
  });
});
