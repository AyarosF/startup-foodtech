$(document).ready(function() {

 $('.tabs li').click(function(){
   var tab_id = $(this).attr('data-tab');
// quand on clicke sur un élément de la liste .tabs, on récupère le data-tab attribute et on l'assigne à la variable tab_id.
   $('ul.tabs li').removeClass('current');
   $('.tab-content').removeClass('current');
// on remove la classe 'current' pour tous les éléments de la liste et pour tous les éléments de la div tab-content elements

   $(this).addClass('current');
   $("#"+tab_id).addClass('current');
   $(this.hash).fadeIn("slow")
// on add la classe 'current' à l'élement de la liste qui a été clické et à la div ayant le data-tab id récupéré.
 });
 });
