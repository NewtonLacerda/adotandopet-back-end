'use strict'

class RulesStore {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      name: 'required|string',
      slug: 'required|string',
      description: 'required|string'
    }
  }
}

module.exports = RulesStore
