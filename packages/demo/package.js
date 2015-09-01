
Package.describe({
  summary: 'Issue Demo',
  version: '0.0.1'
})

Package.onUse(function (api) {
  c = 'client'

  // Core Dependencies
  var coreDependencies = [
    'coffeescript',
    'meteor-platform',
    'reactive-var'
  ]

  api.use(coreDependencies)
  api.imply(coreDependencies)

  // Atmosphere Dependencies
  var atmosphereDependencies = [
    'kadira:blaze-layout@2.0.1',
    'kadira:flow-router@2.3.0',
    'manuel:viewmodel@1.9.7'
  ]

  api.use(atmosphereDependencies, c)

  // Views
  api.addFiles([

    // Login
    'views/login.html',
    'views/login.coffee'
  ], c)

  // Routing
  api.addFiles('routes.coffee', c)
})
