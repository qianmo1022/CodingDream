/**
 * @function 就地编辑
 * @params {id:string, parent:string, value:string}
 * 
 */
function EditInPlace(id,parent,value) {
    this.id = id
    this.parent = parent
    this.value = value || '这个家伙很懒，什么都没有留下'
    this.createElements() // 动态装配html结点
    this.attachEvents()
}
EditInPlace.prototype = {
    createElements: function() {
        this.containerElement = document.createElement('div')
        this.containerElement.id = this.id
        // 签名文字部分
        this.staticElement = document.createElement('span')
        this.staticElement.innerText = this.value
        this.containerElement.appendChild(this.staticElement)
        // 输入框部分
        this.fieldElement = document.createElement('input')
        this.fieldElement.type = 'text'
        this.fieldElement.value = this.value
        this.containerElement.appendChild(this.fieldElement)
        // save 确认
        this.saveButton = document.createElement('input')
        this.saveButton.type = 'button'
        this.saveButton.value = '保存'
        this.containerElement.appendChild(this.saveButton)
        // 取消按钮
        this.cancelButton = document.createElement('input')
        this.cancelButton.type = 'button'
        this.cancelButton.value = '取消'
        this.containerElement.appendChild(this.cancelButton)

        this.parent.appendChild(this.containerElement)
        this.convertToText()
    },

    convertToText: function() {
        this.staticElement.style.display = 'inline';
        this.fieldElement.style.display = 'none';
        this.saveButton.style.display = 'none';
        this.cancelButton.style.display = 'none';
    },
    convertToEdit: function() {
        this.staticElement.style.display = 'none';
        this.fieldElement.style.display = 'inline';
        this.saveButton.style.display = 'inline';
        this.cancelButton.style.display = 'inline';
    },
    attachEvents: function() {
        // // this
        // this.staticElement.addEventListener('click', () => {
        //     // 什么问题 this 丢失
        //     this.convertToEdit()
        // })
        // var that = this
        // this.staticElement.addEventListener('click', function() {
        //     // 什么问题 this 丢失
        //     that.convertToEdit()
        // })
        var that = this
        this.staticElement.addEventListener('click',
            this.convertToEdit.bind(this))
        this.cancelButton.addEventListener('click', 
            this.convertToText.bind(this))
        this.saveButton.addEventListener('click', function() {
            var val = that.fieldElement.value
            that.staticElement.innerText = val
            that.convertToText()
        })
    }

}