/*global Ember*/
Tlontimesyo.Article = DS.Model.extend({
    articleTitle: DS.attr('string'),

    Author: DS.attr('string'),

    time: DS.attr('string'),

    articleText: DS.attr('string')
});

// probably should be mixed-in...
Tlontimesyo.Article.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Tlontimesyo.Article.FIXTURES = [
  
  {
    id: 0,
    
    articleTitle: 'foo',
    
    Author: 'foo',
    
    time: 'foo',
    
    articleText: 'foo'
    
  },
  
  {
    id: 1,
    
    articleTitle: 'foo',
    
    Author: 'foo',
    
    time: 'foo',
    
    articleText: 'foo'
    
  }
  
];
