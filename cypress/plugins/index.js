/// <reference types="cypress" />

const fs = require('fs-extra');
const path = require('path');
const { addMochawesomePlugin } = require('cypress-multi-reporters');



function getConfigurationByFile (file) {
  const pathToConfigFile = path.resolve('.', 'cypress/config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  addMochawesomePlugin(on);
  const file = config.env.configFile || 'stg'

  return getConfigurationByFile(file)
  
}