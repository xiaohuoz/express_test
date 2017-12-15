var React = require('react');
var ReactDOMServer  = require('react-dom/server');
var express = require('express');
var router = express.Router();
var { Input } = require('antd');
import { default as InputString } from '../src/front/Input.jsx';

/* GET users listing. */

console.log(InputString);

router.get('/', function(req, res, next) {
  res.send(ReactDOMServer.renderToString(<InputString />));
});

module.exports = router;
