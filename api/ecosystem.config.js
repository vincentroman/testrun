module.exports = {
  apps : [
      {
        name: "api",
        script: "node index.js",
        watch: true,
        env: {
            "PORT": 8080,//you can choose
            "NODE_ENV": "development"
        },
        env_production: {
            "PORT": 8000,//you can choose
            "NODE_ENV": "production",
        }
      }
  ]
}
