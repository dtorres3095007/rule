const TYPE_LIST = 'TYPE_LIST'

const changeTypeList = (typeList) => {
  return {
    type: TYPE_LIST,
    typeList,
  }
}


module.exports = {
  changeTypeList,
  TYPE_LIST,
}
