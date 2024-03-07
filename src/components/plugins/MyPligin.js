import User from "../User.vue";

export default {
  install: (app, option) => {
    app.component("User", User);
  },
};
