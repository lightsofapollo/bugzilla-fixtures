var Factory = require('object-factory');
var nextId = 1000;

/*
Private bug user type since "user" is different and outside consumers won't need
this outside of bugs themselves.
*/
var BugUser = new Factory({
  properties: {
    email: 'coolemail@email.com',
    id: 1,
    name: 'cool@email.com',
    real_name: 'Cool Name'
  }
});


module.exports = new Factory({
  onbuild: function(props) {
    props.cc_detail = props.cc_detail.map(BugUser.create, BugUser);

    props.creation_time =
      props.creation_time || (new Date()).toISOString();

    props.last_change_time =
      props.last_change_time || (new Date()).toISOString();

    props.id = props.id || nextId++;
  },

  properties: {
    alias: null,
    assigned_to: 'some@email.com',
    assigned_to_detail: BugUser,
    blocks: [],
    cc: [],
    cc_detail: [],
    classification: 'Client Software',
    component: 'Gaia::E-Mail',
    //creation_time: '2013-09-12T12:57:00Z',
    creator: 'some@email.com',
    creator_detail: BugUser,
    depends_on: [],
    dupe_of: null,
    flags: [],
    groups: [],
    //id: 915639,
    is_cc_accessible: true,
    is_confirmed: true,
    is_creator_accessible: true,
    is_open: false,
    keywords: [],
    //last_change_time: '2013-10-01T17:43:11Z',
    op_sys: 'Mac OS X',
    platform: 'x86',
    priority: '--',
    product: 'Firefox OS',
    qa_contact: '',
    resolution: 'FIXED',
    see_also: [],
    severity: 'normal',
    status: 'NEW',
    summary: 'My amazing summary',
    target_milestone: '---',
    url: '',
    version: 'unspecified',
    whiteboard: ''
  }
});
