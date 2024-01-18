const Router = require('@koa/router')
const router = new Router()
const { findNoteListByType,findNoteDetailById,notePublish } = require('../controllers/mysqlControl.js')
const { formateDate } = require('../config/utils.js')

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

// 发布笔记
router.post('/publish',async(ctx) => {
    const {note_content, title, head_img, note_type, nickname, userId } = ctx.request.body
    const c_time = formateDate(new Date())
    const m_time = formateDate(new Date())

    try {
        const result = await notePublish([note_content, title, head_img, note_type, nickname, userId, c_time, m_time])
        if (result.affectedRows) {
            ctx.body = {
                code: '8000',
                data: 'success',
                msg: '发布成功'
            }
        } else {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '发布失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})

module.exports = router
