# use latest stable nginx as webserver
FROM nginx:stable

# copy the generated jekyll files into 
# the default deployment directory
COPY ./_site /usr/share/nginx/html

# expose port 80 by default
EXPOSE 80:80
