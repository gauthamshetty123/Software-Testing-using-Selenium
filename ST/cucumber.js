module.exports = {
    default: {
      format: ['@cucumber/pretty-formatter'],
      require: [
        './features/stepd-definition1/registrationstep.js',
        './features/step-definition2/loginStep.js',
        './features/step-definition3/addCart.js',

      ],
      paths: ['features/registration.feature', 'features/login.feature','features/cart.feature'],
      tags: '@registration or @login or @addCart'
    }
  };