var Hobby = require('../models/hobby');

module.exports = {
    index, 
    create,
    show,
    delete: deleteHobby,
    update
}

function index(req, res) {
    Hobby.find({}, function(err, hobby){
        res.render('hobbies/index', {hobby, title: "Hobbies Page"});
    })
  }

function create(req, res) {
    var hobby = new Hobby(req.body);
    hobby.save(function(err) {
      if (err) return res.render('/');
      res.redirect('/hobbies');
    });
  }

  function show(req, res) {
    Hobby.findById(req.params.id, function(err, hobby) {
        res.render('hobbies/show', { title: 'Hobby Details Page', hobby });
    });
  }

  function deleteHobby(req, res){
    Hobby.findByIdAndDelete(req.params.id, function(err){
      res.redirect('/hobbies');
    });
}

function update(req, res){
    Hobby.findByIdAndUpdate(req.params.id, req.body, (err)=> {
        res.redirect(`/hobbies/${req.params.id}`)
    })
  }
  