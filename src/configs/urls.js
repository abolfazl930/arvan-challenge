import enums from "../enums";

const common = {};

const development = {
  endPointAdmin: "http://api.koroo.ir/api/blog/"
};

const production = {
  endPointAdmin: "http://api.koroo.ir/api/blog/"
};

export default {
  ...common,
  ...(process.env.APP_ENV === enums.APP_ENV_PRODUCTION
    ? production
    : development)
};
