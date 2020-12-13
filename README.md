# wp-11ty

A very minimal example showing how to use [Eleventy](https://www.11ty.dev) as a static front-end for a WordPress website, using the WP [API](https://developer.wordpress.org/rest-api).

It displays a clickable list of posts from [Rolling Stone](https://wordpress.org/showcase/rolling-stone/), and generates a static page for each one.

## Why do this?

For smaller sites, you might prefer to fully convert your content to markdown and manage it fully with 11ty. For larger sites with non-technical users, that isn't practical.

Using the API lets you benefit from the developer experience and performance improvements of 11ty, but maintain a good experience for content authors.

## Developing

You need node.js and npm installed:

```
npm i
npm start
```

It should be on `localhost:8080`

Alternatively **[check it out on CodeSandbox right now](https://codesandbox.io/s/github/jhackett1/wp-11ty)**.

## Running it on the web

It's suitable for any static hosting, including Netlify, Vercel, S3, etc.
