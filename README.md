# POPSICLE website

## ENV

EMAIL_CONTACT="contact.popsicle974@gmail.com"

EMAIL_WEBSITE="website.popsicle974@gmail.com"

EMAIL_WEBSITE_PASSWORD=\*\*\*\*\*\*

PROD_PATH="." for a local build
PROD_PATH="/app" for a build in a docker container

## DOCKER

Build your container: `docker build -t popsicle:latest .`

Run your container: `docker run --rm -v /home/debian/villien/popsicle-website/data:/app/data --name popsicle-website -d -p 3003:3000 popsicle:latest`
Run your container: `docker run --rm -v /home/bioeos/Documents/project_hub/popsicle-website/data:/app/data --name popsicle-website -d -p 3003:3000 popsicle:latest`
