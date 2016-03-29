[![Build Status](https://travis-ci.org/UpstateRuby/openworks-status-page.svg?branch=master)](https://travis-ci.org/UpstateRuby/openworks-status-page)

# Openworks-status-page

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone git@github.com:UpstateRuby/openworks-status-page.git` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server` will watch for file changes and rerun the test suite.

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

The app is deployed by building for production and committing the changes to the `gh-pages`
branch. **Be sure to fetch and pull `master` first!**

* `ember build --environment production`
* `git checkout gh-pages`
* `rm -rf assets && mv dist/* . && cp index.html 404.html`
* `git add .`
* `git commit -m "Deploying to gh-pages. \`date -u\`" && git push`

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

