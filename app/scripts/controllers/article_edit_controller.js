Tlontimesyo.ArticleEditController = Ember.ObjectController.extend({
  needs: 'article',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.article.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('article',this.get('model'));
    }
  }
});

