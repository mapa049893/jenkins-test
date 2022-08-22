var request = require('request');
const express = require('express');
const app = express();

var v1Url = 'https://uataws.paynearby.in:8080/';
var v2Url = 'https://uataws.paynearby.in:8080/';
var v3Url = 'https://uataws.paynearby.in:8080/';
var v4Url = 'https://uataws.paynearby.in:8080/';

exports.externalAPIGETV1 = (req, res, next) => {
  console.log(req.url);
  const routeReq=(req.url.split('/').splice(2)).join('/');
  console.log(routeReq);
  request.get({
    "headers": { "content-type": "application/json" },
    "url": v1Url + routeReq,
    "body": req.body,
    json: true
  }).pipe(res);
};

exports.externalAPIPOSTV1 = (req, res, next) => {
  console.log(req.url);
  const routeReq=(req.url.split('/').splice(2)).join('/');
  console.log(routeReq);
  request.post({
    "headers": { "content-type": "application/json" },
    "url": v1Url + routeReq,
    "body": req.body,
    json: true
  }).pipe(res);
};

exports.externalAPIGETV2 = (req, res, next) => {
  console.log(req.url);
  const routeReq=(req.url.split('/').splice(2)).join('/');
  console.log(routeReq);
  request.get({
    "headers": { "content-type": "application/json" },
    "url": v2Url + routeReq,
    "body": req.body,
    json: true
  }).pipe(res);

};

exports.externalAPIPOSTV2 = (req, res, next) => {
  console.log(req.url);
  const routeReq=(req.url.split('/').splice(2)).join('/');
  console.log(routeReq);
  request.post({
    "headers": { "content-type": "application/json" },
    "url": v2Url + routeReq,
    "body": req.body,
    json: true
  }).pipe(res);
};

exports.externalAPIGETV3 = (req, res, next) => {
  console.log(req.url);
  const routeReq=(req.url.split('/').splice(2)).join('/');
  console.log(routeReq);
  request.get({
    "headers": { "content-type": "application/json" },
    "url": v3Url + routeReq,
    "body": req.body,
    json: true
  }).pipe(res);

};

exports.externalAPIPOSTV3 = (req, res, next) => {
  console.log(req.url);
  const routeReq=(req.url.split('/').splice(2)).join('/');
  console.log(routeReq);
  request.post({
    "headers": { "content-type": "application/json" },
    "url": v3Url + routeReq,
    "body": req.body,
    json: true
  }).pipe(res);
};

exports.externalAPIGETV4 = (req, res, next) => {
  console.log(req.url);
  const routeReq=(req.url.split('/').splice(2)).join('/');
  console.log(routeReq);
  request.get({
    "headers": { "content-type": "application/json" },
    "url": v4Url + routeReq,
    "body": req.body,
    json: true
  }).pipe(res);

};

exports.externalAPIPOSTV4 = (req, res, next) => {
  console.log(req.url);
  const routeReq=(req.url.split('/').splice(2)).join('/');
  console.log(routeReq);
  request.post({
    "headers": { "content-type": "application/json" },
    "url": v4Url + routeReq,
    "body": req.body,
    json: true
  }).pipe(res);
};




