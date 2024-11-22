# POPSICLE website

## ENV

EMAIL_CONTACT="contact.popsicle974@gmail.com"

EMAIL_WEBSITE="website.popsicle974@gmail.com"

EMAIL_WEBSITE_PASSWORD=\*\*\*\*\*\*

## DOCKER

Build your container: `docker build -t popsicle:latest .`

Run your container: `docker run --rm --name popsicle-website -d -p 3003:3000 popsicle:latest`
