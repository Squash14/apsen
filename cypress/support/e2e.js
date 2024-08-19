import './commands/api_commands';
import './commands/gui_commands';
import '@bahmutov/cy-api/support';
import 'cypress-plugin-api';
import 'cypress-mochawesome-reporter/register';
import failOnConsoleError from 'cypress-fail-on-console-error';
failOnConsoleError();
