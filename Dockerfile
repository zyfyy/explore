FROM node as builder
WORKDIR /app
ADD package.json yarn.lock ./
RUN yarn
ADD src gatsby-config.js ./
ENV GATSBY_API_KEY=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
RUN yarn build



FROM nginx
EXPOSE 80
COPY --from=builder /app/public /usr/share/nginx/html
