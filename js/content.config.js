nt={}
nt.options = {
  'location': 'Remote: Birmingham AL',
  // 'slogan': 'Explore your world.',
  'founder-image': 'nomadtax/pino-3.jpg'
}

selectors = {
  '#location':    nt.options['location'],
  // '.site-slogan': nt.options['slogan'],
  'img.founder':  { 'src': nt.options['founder-image']},
  'a.founder':    { 'href': nt.options['founder-image']}
}


$.each(selectors, function(key,value){
  if (typeof value == "string"){
    $(key).append(value)
  } else {
    $.each(value, function(k,v){
      $(key).attr(k,v)
    });
  }
});


