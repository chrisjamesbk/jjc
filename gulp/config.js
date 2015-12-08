'use strict';

var src               = 'src';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var srcAssets         = 'src/_assets';
var developmentAssets = 'build/assets';
var productionAssets  = 'build/production/assets';

module.exports = {
  autoprefixer: {
    browsers: [
      'ie >= 9',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'ios >= 7',
      'android >= 4.4'
    ],
    cascade: true
  },

  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extensions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries:    './' + srcAssets + '/scripts/app.js',
      dest:       src + '/js',
      outputName: 'app.bundle.js'
    }, {
      entries:    './' + srcAssets + '/scripts/head.js',
      dest:       src + '/js',
      outputName: 'head.bundle.js'
    }]
  },

  browsersync: {
    development: {
      server: {
        baseDir: [src]
      },
      port: 9999,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/*'
      ]
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9998
    }
  },

  copy: {
    downloads: {
      src:  src + '/downloads/**/*',
      dest: production + '/downloads'
    }
  },

  delete: {
    src: [developmentAssets]
  },

  deploy: {
    src: production
  },

  images: {
    src:  srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },

  jekyll: {
    development: {
      src:    src,
      dest:   development,
      config: src + '/_config.yml'
    },
    production: {
      src:    src,
      dest:   production,
      config: src + '/_config.yml,' + src + '/_config.deploy.yml'
    }
  },

  jshint: {
    src: srcAssets + '/scripts/*.js'
  },

  optimize: {
    css: {
      src:  developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/'
    },
    dls: {
      src:  developmentAssets + '/dls/**/*',
      dest: productionAssets + '/dls/'
    },
    js: {
      src:  developmentAssets + '/js/**/*',
      dest: productionAssets + '/js/'
    },
    images: {
      src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: productionAssets + '/images/'
    }
  },

  replace: {
    images: {
      src: production + '/**/*.html',
      dest: production,
      origString: '../..',
      newString: '/'
    }
  },

  sass: {
    src:  srcAssets + '/scss/main.scss',
    dest: src + '/css',
    options: {
      includePaths: ['scss']
    }
  },

  sassR: {
    src:  srcAssets + '/scss/**/*.{sass,scss}',
    dest: src + '/css',
    options: {
      noCache: true,
      compass: true,
      bundleExec: true,
      sourcemap: true,
      sourcemapPath: '../../_assets/scss'
    }
  },

  watch: {
    jekyll: [
      src + '_config.yml',
      src + '_config.deploy.yml',
      src + '/_data/**/*.{json,yml,csv}',
      src + '/_includes/**/*.{html,xml}',
      src + '/_layouts/*.html',
      src + '/_plugins/*.rb',
      src + '/_posts/*.{markdown,md}',
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      src + '/code/**/*.js',
      src + '/*'
    ],
    sass:    srcAssets + '/scss/**/*.{sass,scss}',
    scripts: srcAssets + '/scripts/**/*.js',
    images:  srcAssets + '/images/**/*',
    icons:   srcAssets + '/icons/*.svg'
  }
};
