app.get('/profile/:name', (req, res) => {
    let data = {age: 21, job: 'careerdevs student'};
    res.render('profile', {person: req.params.name, data: data})
})