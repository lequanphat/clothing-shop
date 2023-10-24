

class BlogController{
    create(req, res){
        res.send('create blog')
    }
    getBlogs(req, res){
        res.send('get blogs')
    }
    getById(req, res){
        res.send('get blog id')
    }
    update(req, res){
        res.send('update blog')
    }
    delete(req, res){
        res.send('delete blog')
    }
}

export default new BlogController();