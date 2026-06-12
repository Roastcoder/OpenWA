FROM traefik:v3.0

# Embed config files directly into the image
COPY traefik.yml /etc/traefik/traefik.yml
COPY dynamic.yml /etc/traefik/dynamic.yml

# Explicitly point Traefik at the config file to prevent
# Docker from auto-creating /etc/traefik/traefik.yml as a directory
CMD ["traefik", "--configFile=/etc/traefik/traefik.yml"]
