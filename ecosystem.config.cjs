module.exports = {
  apps: [
    {
      name: 'doner-menu',
      script: 'python3',
      args: '-m http.server 3000',
      cwd: '/home/user/webapp',
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
