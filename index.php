<?php
require_once('../../../wp-load.php');
//echo 'here';
//print_r(get_posts());
//ajax_carousel();
//ajax_post_meta();
?>
<?php //require get_template_directory()."/app/index.html"; ?>
<html>
  <head>
    <base href="<?php bloginfo('template_url') ?>/">
    <title>NG - Brookside</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head() ?>
   <!-- <link rel="stylesheet" href="styles.css"> -->
    <!-- 1. Load libraries -->
     <!-- Polyfill(s) for older browsers -->
    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <!-- 2. Configure SystemJS -->
    <script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
  </head>
  <!-- 3. Display the application -->
  <body>
    <my-app>Loading...</my-app>
  </body>
</html>