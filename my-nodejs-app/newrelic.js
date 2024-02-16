// newrelic.js
"use strict";
require("dotenv").config();
exports.config = {
  app_name: ["My NodeJS App"],
  license_key: process.env.NEW_RELIC_LICENSE_KEY,
  logging: {
    level: "info",
  },
  distributed_tracing: {
    enabled: true,
  },
};
