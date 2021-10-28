build:
	docker-compose build

install:
	docker-compose run --rm web bash -c "bundle install"

up:
	docker-compose up -d

down:
	docker-compose down

start-bash:
	docker-compose run --rm --service-ports web /bin/bash

test:
	docker-compose run --rm web bash -c  'bundle exec rake test'

lint:
	docker-compose run --rm web bash -c  'bundle exec rubocop'

lint-fix:
	docker-compose run --rm web bash -c 'bundle exec rubocop -a'

js-lint:
	docker-compose run --rm web bash -c 'yarn lint'

js-lint-fix:
	docker-compose run --rm web bash -c 'yarn lint --fix'

.PHONY: all test clean