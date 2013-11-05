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
	./node_modules/.bin/mocha $(shell find . -name '*_test.js' -d 1)
	@for factory in $(factories); do      \
		echo ; \
		echo "bugzilla_fixture/$$factory :" ;\
		$(viewer) $$factory; \
	done

