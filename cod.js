/****************************/
/* Фагементы полезного кода */
/****************************/

/* Изменения заголовка страницы title и генерация ссылки */

/* Функция, берет ссылку и добавляет к нему строку, парраметр итд (генерация ссылки) */
  function updateURL(param) {
    if (history.pushState) {
        var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        var newUrl = baseUrl + param;
        history.pushState(null, null, newUrl);
    }
    else {
        console.warn('History API не поддерживается');
    }
}
/* Считываем заголовок и меняем его*/
  let reset_str = true;
  let strconst = "Отзывы о ";
  let oldtitle =  document.title; 
  let tarr = oldtitle.split(' ');
  let tstr = tarr[0]+"е ";  
  tstr = tstr.toLowerCase();
  let strness = oldtitle.substr(oldtitle.indexOf(" ", 0)  ); 
 
 /* Обрабатываем событие нажатие на определенный участо кода*/
  /* И публикуем заголовок*/
  jQuery(document).ready(function($) {
        $("a[href^='#tab-reviews']").click(function(){
	 	    if (reset_str){
		      document.title = strconst+tstr+strness;
			   updateURL('#reviews');
			   reset_str = false;
	 
		    	     }
		});
		 $("a:not([href^='#tab-reviews'])").click(function(){
			  document.title = oldtitle;
				updateURL('');
				reset_str = true;
		  });		
		
    });