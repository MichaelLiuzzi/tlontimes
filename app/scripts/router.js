Tlontimesyo.Router.map(function () {
  
  
  this.resource('articles', function(){
    this.resource('article', { path: '/:article_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });

  this.resource('article-template');
  this.resource('article-template-edit', {path: 'article-template/:article_id'}); 
  
});
