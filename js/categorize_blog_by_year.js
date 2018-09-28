$(function(){

  // Homepage | section.writing | article nav behavior
  // NOTE: this code is mad ghetto and in no wise to be held up as a standard of JavaScript brilliance; so sorry bout that; but It Works™

  // first, hide everything except 2015 posts be default
  // $(".article-item:not(.article-2016)").removeClass("show");

  // if visitor clicks on All, show all posts
  $("#articlesAllTrigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $(".article-item").addClass("show");
  });

  // if visitor clicks on 2018, show 2018 posts
  $("#articles2018Trigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $(".article-item").removeClass("show");
    $(".article-item.article-2018").addClass("show");
  });