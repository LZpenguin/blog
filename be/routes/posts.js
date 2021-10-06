const router = require('koa-router')()
const {Post} = require('../model/posts')
router.prefix('/posts')

//添加文章
router.post('/',async (ctx) => {
  let {title,author,content} = ctx.request.body;
  console.log(ctx.request.body)
  let post = {
    title: title,
    author: author,
    date: new Date().getFullYear() +'/'+ new Date().getMonth() +'/'+ new Date().getDate() +' '+ new Date().getHours() + ':' +new Date().getMinutes(),
    content: content
  }
  await Post.create(post).then((rel) => {
    if(rel) {
      ctx.body = {
        code: 200,
        msg: '文章添加成功',
        data: rel
      }
    }else {
      ctx.body = {
        code: 300,
        msg: '文章添加失败'
      }
    }
  }).catch((err) => {
    ctx.body = {
      code: 400,
      msg: '文章添加时出现异常',
    }
    console.error(err)
  })
})

//修改文章
router.put('/:id',async (ctx) => {
  let id = ctx.params.id;
  let {title,author,content} = ctx.request.body;
  await Post.findByIdAndUpdate({_id:id},{
    title: title,
    author: author,
    content: content
  }).then(rel => {
    ctx.body = {
      code: 200,
      msg: '文章更新成功',
      data: rel
    }
  }).catch(err => {
    ctx.body = {
      code: 400,
      msg: '文章更新失败'
    }
    console.error(err);
  })
})

//删除文章
router.delete('/:id',async (ctx) => {
  let id = ctx.params.id;
  let post = await Post.findOne({_id: id});
  await Post.findOneAndDelete({_id: id}).then(() => {
    ctx.body = {
      code: 200,
      msg: '删除成功',
      data: post
    }
  }).catch((err) => {
    ctx.body = {
      code: 400,
      msg: '删除失败'
    }
    console.error(err)
  })
})

//查询所有文章
router.get('/',async (ctx) => {
  var {key} = ctx.query;
  var data = null;
  if(key) {
    data = await Post.find({title:eval("/"+key+"/i")})
  }else {
    data = await Post.find();
  }
  ctx.body = {
    code: 200,
    data: data,
  }
})

//查询单篇文章
router.get('/:id',async (ctx) => {
  let id = ctx.params.id;
  let post = await Post.findOne({_id: id});
  ctx.body = {
    code: 200,
    data: post
  }
})

module.exports = router
