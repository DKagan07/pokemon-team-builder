.PHONY: build-docker-images
build-docker-images: build-frontend-docker-image build-backend-docker-image
	@echo "Building all docker images"

.PHONY: build-frontend-docker-image
build-frontend-docker-image:
	@echo "Building frontend docker image"
	docker build -t pokefrontend:latest -f "frontend/Dockerfile" frontend

.PHONY: build-backend-docker-image
build-backend-docker-image:
	@echo "Building backend docker image"
	docker build -t pokebackend:latest -f "backend/Dockerfile" backend
