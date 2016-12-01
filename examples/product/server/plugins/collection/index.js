"use strict";

const data = require("./data");

exports.register = (server, options, next) => {
  const getCollection = (request, reply) => {
    reply({data: data});
  };

  server.route({
    method: "GET",
    path: "/collection",
    handler: (request, reply) => getCollection(request, reply)
  });

  next();
};

exports.register.attributes = {
  name: "collection",
  version: "0.0.1"
};
