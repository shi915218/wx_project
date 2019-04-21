const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function initDataProxy (){
  console.log(this)
  Object.keys(this.data).forEach(key=> {
    var me = this;
    Object.defineProperty(me, key, {
        configurable: false,
        enumerable: true,
        get: function proxyGetter() {
            return me.data[key];
        },
        set: function proxySetter(newVal) {
            me.data[key] = newVal;
        }
    });
  });
}
module.exports = {
  formatTime: formatTime,
  initDataProxy:initDataProxy
}
