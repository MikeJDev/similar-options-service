module.exports = {
    apps: [{
      name: 'similar-options-service',
      script: 'server/index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-3-80-146-248.compute-1.amazonaws.com',
        key: '~/.ssh/componentKeyPair.pem',
        ref: 'origin/master',
        repo: 'git@github.com:the-home-repot/similar-options-service.git',
        path: '/home/ubuntu/similar-options-service',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }