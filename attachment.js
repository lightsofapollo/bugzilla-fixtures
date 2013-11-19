var Factory = require('object-factory'),
    Flag = require('./flag');

module.exports = new Factory({
  onbuild: function(props) {
    // new empty array each time
    props.flags = props.flags || [];

    // run flags through the factory
    props.flags = props.flags.map(Flag.create, Flag);

    props.creation_time =
      props.creation_time || (new Date()).toISOString();

    props.modification_date =
      props.modification_date || (new Date()).toISOString();

    // base64 encode data and compute size
    if (props.data) {
      // size is byte size
      props.size = Buffer.byteLength(props.data);
      props.data = new Buffer(props.data).toString('base64');
    }
  },

  properties: {
    attacher: 'test@email.com',
    bug_id: 1,
    content_type: 'text/plain',
    //creation_time: '2013-10-23T16:20:00Z',
    creator: 'test@email.com',
    /**
    Base64 encoded data

    @type String
    @property data
    */
    data: 'i will be base 64 encoded',
    description: 'I am an attachment I live to serve!',
    file_name: 'file_name.html',
    id: 1,
    is_obsolete: 0,
    is_patch: 0,
    is_private: 0,
    //last_change_time: '2013-10-23T16:20:13Z',
    /**
    Size of data (underlying data not the base64 encoded data)
    @type Number
    @property size
    */
    //size: 54,
    summary: 'staging-mozilla-b2g:master PR#3'
  }
})
