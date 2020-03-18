// pm2 start ecosystem.config.js --only admin
module.exports = {
  apps: [
    {
      name: 'tecbartar-site',
      script: 'npm',
      args: 'run start'
    }
  ]
}
