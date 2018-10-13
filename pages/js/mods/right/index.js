require('./index.scss');
var tpl1 = require('./index1.tpl');
var tpl2 = require('./index2.tpl');
var tpl3 = require('./index3.tpl');

function right(dom , type,id) {
    this.init(dom , type,id);
}
right.prototype = {
    init : function(dom , type,id){
       $('.right').remove();
       if(type== 'type1') {
            dom.append(tpl1({
              data:id
            }));
       }else if(type == 'type2'){
            dom.append(tpl2());
       }else {
            dom.append(tpl3());
       }
       $('.right').addClass('rightIn');
       $('.container').addClass('width1130');
    }
}
module.exports = right;