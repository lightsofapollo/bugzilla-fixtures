bugzilla-fixtures
=================

Bugzilla fixtures for shepherd tests

## Factories

Factories are based on object-factory... The top level module exposes
the following factories:

  - Bug
  - Flag
  - Attachment
  - SuggestedReviewer

All factories follow the design in the [rest bugzilla
api](http://www.bugzilla.org/docs/tip/en/html/api/Bugzilla/WebService/Server/REST.html).


## Usage

```js
// single fixture
var Bug = require('bugzilla-fixtures/bug');

var myBug = Bug.create();
```

All the properties on the bug can be overridden and overrides are done
with a deep merge.

To best figure out how to use the factories you should actually read the
factory files and maybe use the object viewer (see `make test` for
output).
