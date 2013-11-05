suite('attachment', function() {
  var Attachment = require('./attachment');

  test('base64 encoded data', function() {
    var input = { data: 'woot ✓' };
    var subject = Attachment.create(input);

    assert.equal(
      Buffer.byteLength(input.data),
      subject.size
    );

    assert.equal(
      input.data,
      new Buffer(subject.data, 'base64').toString()
    );
  });

  test('mapping of .flags', function() {
    var input = { flags: [{ status: '-' }] };
    var subject = Attachment.create(input);

    var firstFlag = subject.flags[0];
    assert(
      Object.keys(firstFlag).length > 1,
      'passes through factory'
    );
  });

});
