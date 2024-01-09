const Router = require('@koa/router')
const router = new Router()
const { findNoteListByType,findNoteDetailById } = require('../controllers/mysqlControl.js')

router.post('/findNoteListByType',async(ctx) => {
    const { note_type } = ctx.request.body
    try{
        const result = await findNoteListByType(note_type)
        ctx.body = {
            code: '8000',
            data: result,
            msg: 'success'
        }
    }catch(error){
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})
router.post('/findNoteDetailById',async(ctx) => {
    const { id } = ctx.request.body
    try{
        const result =  await findNoteDetailById(id)
        if (result.length) {
            ctx.body = {
                code: '8000',
                data: result[0],
                msg: 'success'
            }
        } else {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '查找失败'
            }
        }
    }catch(error){
       ctx.body = {
        code: '8005',
        data: error,
        msg: '服务器异常'
       }
    }
})

module.exports = router
