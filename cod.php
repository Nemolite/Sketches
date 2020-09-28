<?php
/****************************/
/* Фагементы полезного кода */
/****************************/


/* Меняем title чрезе хук SEO заголовков плагина Yoast (WP) */

add_filter('wpseo_title', 'new_title_filter', 10 );

function new_title_filter($title) {
	// Проверяем страница ли товара
	if ( is_product() ) {
	 $title =  'Это страница товара';
	
      }
     else {
	 $title =  'Это любая другая страница';
       }

	return $title;
}

?>






		