var Factory = require('object-factory');

var nextId = 1;

module.exports = new Factory({
  onbuild: function(props) {
    if (!props.id) props.id = nextId++;
  },

  properties: {
    email: 'fake@gmail.com',
    name: 'User Name',
    review_count: 0
  }
});
