var Factory = require('object-factory');
var nextId = 1;


module.exports = new Factory({
  onbuild: function(props) {
    if (!props.creation_date) {
      props.creation_date = (new Date()).toISOString();
    }

    if (!props.modification_date) {
      props.modification_date = (new Date()).toISOString();
    }

    props.id = props.id || nextId++;
  },

  properties: {
    //creation_date : '2013-09-23T17:05:02Z',
    //id : 720568,
    //modification_date : '2013-10-08T21:30:47Z',
    name: 'review',
    setter: 'fake@email.com',
    status: '+',
    type_id: 4
  }
});
