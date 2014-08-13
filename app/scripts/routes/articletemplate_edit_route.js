Tlontimesyo.ArticleTemplateEditRoute = Ember.Route.extend({
	model: function(article){ 
		//EMBER WILL EXTRACT DYNAMIC SEGMENT I.E /: from url and pass to model hook.
		return (Ember.$.getJSON('articles/' + article.id));

	}
});