
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.helloworld = function(req, res){
  res.render('helloworld', { title: 'Hello world' });
};
exports.userlist = function(db) {
		return function(req,res){

	var  collection = db.get('kdd')
	collection.find({},{},function(e,docs) {
			res.render('userlist',{ "userlist": docs });
                         };
	};
};
