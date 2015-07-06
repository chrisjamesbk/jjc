Jessica James Consulting
====================================

## Environment

### Build System

The requirements to use the UIG build system are:

1. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll` (v 2.5.3)
2. [NodeJS](http://nodejs.org) - use the installer.
3. [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp` (mac users may need sudo)

### Local Installation

1. Clone this repo.
2. Inside the directory, run `sudo npm install`.
3. Develop in the `master` branch

### Usage

**Development Mode**

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc.

```shell
gulp
```

**Deploy with Gulp**

`gulp deploy` will run a build, and then push the contents of the `build/production` directory to the `gh-pages` branch of this repo.


## Structure & Naming Conventions

**Jekyll**

This site is built with Jekyll. Jekyll is a simple, static site generator. It converts a set of templates, with content in easily understandable YAML format into basic html pages. Documentation [here](http://jekyllrb.com/docs/home/).

Jekyll utilises the Liquid templating system. Liquid accepts dynamic markup based on page-specific variables. It means that one template can be used for multiple pages, with content passed in YAML format. Documentation [here](http://jekyllrb.com/docs/templates/) and [here](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers).

The build system compiles the Jekyll templates to static html when changes to templates are saved.

The root directory for this project is `src`. Any files and directories in `src` that are not prefixed with `_` are compiled. Any files and directories prefixed with `_` are partials, and as such are not part of the final build. The anomaly to this is the `_assets` directory. It is named thus so that jekyll does not try to compile it. Instead the files in here are either compiled by (css, js) or copied by the build system to the `build/assets` directory.

Each page has an `index.html` file. At the top of the file is a [YAML front matter](http://jekyllrb.com/docs/frontmatter/) block. This block contains all the page data. Below this block, the partial template includes are listed.

**Front Matter**

The only essential front matter variable is `layout`. This will ordinarily be set to `default`, and the option chosen corresponds to the layout files in the `_layouts` directory.

The formatting of the front matter is very important. Please be careful to match the indentation rules that are already established.

Page variables set by the front matter are available in the template files like so:

```markup
<h1>{{ page.title }}</h1>
```

