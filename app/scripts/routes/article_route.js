Tlontimesyo.ArticleRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('article', params.article_id);
  }
});

