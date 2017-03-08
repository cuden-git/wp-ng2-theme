<?php
show_admin_bar(false);
add_theme_support( 'menus' );
function theme_enqueue_styles(){
            wp_enqueue_style( 'bootstrap-styles', get_stylesheet_directory_uri().'/css/bootstrap.min.css' );
            wp_enqueue_style( 'custom-styles', get_stylesheet_directory_uri().'/css/main.css' );
            // wp_enqueue_style( 'Jago-fonts', 'https://cloud.typography.com/6285112/668304/css/fonts.css' );
            // wp_enqueue_style( 'Jago-font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' );
            // wp_enqueue_style( 'Asap-font', 'https://fonts.googleapis.com/css?family=Asap:400,400italic,700,700italic' );
        
            // wp_enqueue_script( 'bootstrap-js', get_stylesheet_directory_uri().'/js/bootstrap.min.js', array('jquery'), '1.0.0', true );
            wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri().'/js/main.js', array(), '1.0.0');
            //wp_enqueue_script( 'test-js', get_stylesheet_directory_uri().'/js/tester.js', array(), '1.0.0', true );
            wp_localize_script( 'custom-js', 'wpJsVars', array('ajaxUrl' => admin_url( 'admin-ajax.php' ),'sitePath' => get_bloginfo('template_url'),'wc_placeholder' => plugins_url().'/woocommerce/assets/images/placeholder.png'));
           
            // wp_enqueue_script('jquery-ui', get_stylesheet_directory_uri().'/js/jquery-ui.min.js', array('jquery'), '1.11.4',true);
     
    }
	add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

// function ajax_site_nav($amount=12,$offset=12) { // loads more products
//     $amount = (isset($_GET['amount']) ? $_GET['amount'] : $amount );
//     $offset = (isset($_GET['offset']) ? $_GET['offset'] : $offset );
//     $current_posts = (isset($_GET['current_posts']) ? $_GET['current_posts'] : '' );
//     if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) { 
// 	    $nav_items = wp_get_nav_menu_items('main_nav');
       
//         echo json_encode($nav_items);
//         foreach($nav_items as $item){

//         }
//     }
//     die();
// }
// add_action( 'wp_ajax_nopriv_ajax_site_nav', 'ajax_site_nav' );
// add_action( 'wp_ajax_ajax_site_nav', 'ajax_site_nav' );


function ajax_site_nav() {
    global $post;
        
    $nav_items = wp_get_nav_menu_items('main_nav');
    // print_r($nav_items);
    // exit();
    $top_nav_arr = array();
    $sub_nav_arr = array();
    $full_nav = array();
    $custom_nav = array();
    foreach ($nav_items as $item) {

        $post_obj = get_post($item->object_id);
        $post_template = get_field('ng_template',$item->object_id);

        if ($item->menu_item_parent == 0) {
                $top_nav_arr[$item->ID] = array('url' => $item->url, 'title' => $item->title, 'object_id'=>$item->object_id, 'slug' => $post_obj->post_name, 'ng_template' => $post_template);
        } else {
                $sub_nav_arr[$item->menu_item_parent][$item->ID] = array('url' => $item->url, 'title' => $item->title, 'object_id'=>$item->object_id, "slug" => $post_obj->post_name);
        }
        if(!empty($item->description)){
            //echo('description = '.$item->description.' / '.$item->title);
            $fnc_cb =  $item->description;
            // nav_dropmenu($fnc_cb($parent_item));
            //  $sub_nav_arr[$item->menu_item_parent][$item->ID] = array('url' => $item->url, 'title' => $item->title);
            $custom_nav[$item->ID] = $fnc_cb($item->ID);
        }
    }
    
    $i = 0;
    foreach ($top_nav_arr as $key => $val) {
        $full_nav[$i]['top'] = array('postId'=> $top_nav_arr[$key]['object_id'],'url' => $top_nav_arr[$key]['url'],'title' => $top_nav_arr[$key]['title'],'slug' => $top_nav_arr[$key]['slug'],'ngTemplate' => $top_nav_arr[$key]['ng_template']);
        $nav_img = get_nav_img($top_nav_arr[$key]['object_id']);

        if (array_key_exists($key,$sub_nav_arr)) { 
            $full_nav[$i]['subNav'] = sub_nav($sub_nav_arr,$key);
        }
        if (array_key_exists($key,$custom_nav)) { 
            $full_nav[$i]['customNav'] = $custom_nav[$key];
        }
        if(!empty($nav_img)){
            $full_nav[$i]['navImg']['src'] = $nav_img['src'];
            $full_nav[$i]['navImg']['alt'] = $nav_img['alt'];
        }
        ++$i;
    }
   // print_r($full_nav);
   // print_r($top_nav_arr);
   echo json_encode($full_nav);
   die();
}
function sub_nav($arr,$key) {
    $sub_nav_arr = $arr[$key];
    $total_sub_nav = array();
    foreach ($sub_nav_arr as $k => $v) { 
        $total_sub_nav[] = array('post_id' => $sub_nav_arr[$k]['object_id'],'url'=>$sub_nav_arr[$k]['url'],'title'=>$sub_nav_arr[$k]['title']);
        if(array_key_exists($k,$arr)){
            $total_sub_nav[] = sub_nav($arr,$k);
        }
    }
    return $total_sub_nav;
}
add_action( 'wp_ajax_nopriv_ajax_site_nav', 'ajax_site_nav' );
add_action( 'wp_ajax_ajax_site_nav', 'ajax_site_nav' );

function nav_menu_projects(){
    //$parent_item = get_menu_item($args['menu_name'],$parent_id);
    $args = array(
        'posts_per_page' => 5,
        'category_name' => 'project'
    );
    $projects = get_posts($args);
    $menu_arr = array();
    foreach($projects as $project){
        $project_url = get_permalink($project->ID);
        $menu_arr[] = array('url' => $project_url, 'title' => $project->post_title);
    }
    return $menu_arr;
}

function get_nav_img($post_ID){
    $nav_img = get_field('nav_img',$post_ID);
    if( !empty($nav_img) ){ 
        return array('src' => $nav_img['url'], 'alt' => $nav_img['alt']);
    }
}

function ajax_site_vars(){
    $site_vars = array(
        'tel' => TEL_NUMBER,
        'email' => CONTACT_EMAIL,
        'address' => OFFICE_ADDRESS
    );
   echo json_encode($site_vars);
   die();
}
add_action( 'wp_ajax_nopriv_ajax_site_vars', 'ajax_site_vars' );
add_action( 'wp_ajax_ajax_site_vars', 'ajax_site_vars' );

function ajax_page_content(){
    $page_obj = get_post($_GET['post_id']);
    echo json_encode(array('post_title'=>$page_obj->post_title, 'post_content'=>$page_obj->post_content));
    die();
}
add_action( 'wp_ajax_nopriv_ajax_page_content', 'ajax_page_content' );
add_action( 'wp_ajax_ajax_page_content', 'ajax_page_content' );


/* carousel */
 function ajax_carousel(){
    // echo json_encode(array('post_title'=>'testuba', 'post_content'=>'test luba'));
    // wp_die();
     $carousel_id = 234;//$_GET['carouselId'];
     $show_mobile_alt = (isset($_GET['showMobileAlt']))? $_GET['showMobileAlt'] : false ;
     $slider = unserialize(get_post_meta ( $carousel_id, 'slider_data',true));
     $index = 0;
     //print_r($slider);

     //implode(' ',$classes);

     foreach($slider as $key=>$val){ 
        $img_src = wp_get_attachment_image_src ( $key, 'full');
        // $slide_link_btn = (!empty($slider[$key]['url']))? '<span class="btnSlab">VIEW MORE</span>' : '' ;
         $slider[$key]['src'] = $img_src[0];
         $slider_arr[] = array(
             'id' => $slider[$key]['id'],
             'src' => $img_src[0],
             'text' => $slider[$key]['text'],
             'title' => $slider[$key]['title'],
             'url' => $slider[$key]['url'],
        );
        // if($index == 0){ 
		//  	$classes = 'item active';
			// if($showMobileAlt){
			// 	if($slider[$key]['url']){
			// 		$mobile_img['url'] = $slider[$key]['url'];
			// 	}else{
			// 		$mobile_img['url'] = '#';
			// 	}
			// 	$mobile_img['title'] = $slider[$key]['title'];
			// 	$mobile_img['src'] = $img_src[0];
			// 	$mobile_img['text'] = $slider[$key]['text'];
			// }
		// }else{ 
		// 	$classes = 'item'; 
		// }

        ++$index;
     }
    //       print_r($slider);
    //  exit();
   echo json_encode($slider_arr);
      die();
 }
add_action( 'wp_ajax_nopriv_ajax_carousel', 'ajax_carousel' );
add_action( 'wp_ajax_ajax_carousel', 'ajax_carousel' );

 /* Post meta data */
 function ajax_post_meta(){
    $temp_var = (isset($_GET['metaKey']))? json_decode(stripslashes($_GET['metaKey'])) : null;
    $temp_arr = array('test_var'=>$temp_var);
    echo '<h1> temp_vars = '.stripslashes($_GET['metaKey']).'</h1>';
    print_r($temp_var);
    echo'her;';
    foreach($temp_var as $key=>$val){
        echo '<h1>'.get_field($val).'</h1>';
    }
  //  echo(json_encode($temp_arr));
   // echo(json_encode(array('bebo'=>'rebo')));
    die();
 }
add_action( 'wp_ajax_nopriv_ajax_post_meta', 'ajax_post_meta' );
add_action( 'wp_ajax_ajax_post_meta', 'ajax_post_meta' );
?>