Tlontimesyo.ArticleTemplateEditRoute = Ember.Route.extend({
	model: function(article){ 
		//EMBER WILL EXTRACT DYNAMIC SEGMENT I.E /: from url and pass to model hook.
		//return Ember.$.getJSON('articles/' + article.id);
		var id = article.article_id;
		return this.store.find('article', id);
		
		/*newArticle.then(function(value){
			return value; 

		}); 
		*/
    	

    	//return ('/#/articles/'+id);
  }

});