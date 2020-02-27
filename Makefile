.PHONY: deploy
deploy:
	./deploy.sh

.PHONY: build
build:
	yarn build

.PHONY: run
run:
	yarn dev