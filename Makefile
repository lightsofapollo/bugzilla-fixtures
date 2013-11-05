viewer=./node_modules/.bin/object-factory-viewer
factories=attachment \
					flag \
					suggested_reviewer \
					bug

default: test

node_modules: package.json
	npm install

.PHONY: test
test: node_modules
	./node_modules/.bin/mocha $(shell find . -depth 1 -name '*_test.js')
	@for factory in $(factories); do      \
		echo ; \
		echo "bugzilla_fixture/$$factory :" ;\
		$(viewer) $$factory; \
	done

