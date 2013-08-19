# grunt-combopage

> It's a tool for combo and min the html file, and it could minfiy the remotet css files and js files.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-combopage --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-combopage');
```

You can run the testcase. change you path to ./node_modeules/grunt-combopage/, and run grunt. You could see the result file ./test/test_new.html was created! The ./Gruntfile.js has the base function of this task, so you could use it as that. If you have any question, you can contact me at sina weibo: http://weibo.com/ginano
## The "combopage" task

### Overview
In your project's Gruntfile, add a section named `combopage` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  combopage: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.cssPath
Type: `String`
Default value: `'./'`

A string value that is used to as the merged CSS file, it an relative path of current path.
if you have set this value( the value is not empty string or null), all the style content but ignored will be merged to one file, and placed in the path as you set. If this value isn't contain the fileName  with extension '.css', the merged css  fileName will be the same as html file.

#### options.cssVersion
Type: `Boolean`
Default value: `false`

A Boolean value tell the task to add version number to the link import link, such as `'<link type="text/css" href="merge.js?v=201221212"/>`'.


#### options.jsPath
Type: `String`
Default value: `'./'`

A string value that is used to as the merged JS file, it an relative path of current path.
if you have set this value( the value is not empty string or null), all the js content but ignored will be merged to one file, and placed in the path as you set. If this value isn't contain the fileName  with extension '.js', the merged js  fileName will be the same as html file.

#### options.jsVersion
Type: `Boolean`
Default value: `false`

A Boolean value tell the task to add version number to the script import link, such as `'<script type="text/javascript" src="merge.js?v=201221212"></script>`'.


### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

##### the Gruntfile.js 
```js
grunt.initConfig({
  combopage: {
    options:{
      //cssPath:'output/index_all.css',
      //cssVersion:true,
      jsPath:'output/index_all.js',
      jsVersion:true
    },
    files: {
      'output/index.html': ['src/index.html'],
    },
  },
});
grunt.loadTasks('grunt-combopage');
grunt.registerTask('default', ['combopage']);

```
##### the src/index.html
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>grunt-combopage example</title>
  <link rel="profile" href="http://gmpg.org/xfn/11" />
  <link rel="stylesheet" type="text/css" media="all" href="http://www.ginano.net/wp-content/themes/twentyten/style.css" />
  <!--ignore this content, keep this status-->
  <link rel="stylesheet" type="text/css" media="all" ignore="true" href="http://www.ginano.net/wp-content/themes/twentyten/style.css" />
  <link rel="stylesheet" type="text/css"   href="../css/style.css" />
  <style type="text/css">
    .class{color:#fff;}
  </style>
  <script type="text/javascript" src="../js/jquery.js"></script>
  <!--ignore this content, keep this status-->
  <script type="text/javascript" src="http://www.ginano.net/js/underscore.js" ignore="true"></script>
  <script type="text/javascript" src="http://www.ginano.net/js/backbone.js"></script>
</head>
<body>
  <script type="text/javascript">
    var a=1;
  </script>
</body>
</html>
```

so, with above config, this file will create a new file output/index.html. And it will with one ignored css import and all other style content before '</head>`. Of course, it will with one ignored js file import and all other minified js content  in output/index_all.js, which could be imported before the end of body.

if you want to prove it, please try 'grunt' command!

just do it, and enjoy it!

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  combopage: {
    files: {
      'dest/default_options': ['src/testing'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
