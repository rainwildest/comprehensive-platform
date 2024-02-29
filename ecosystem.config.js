module.exports = {
  apps: [
    {
      name: "YourAppNameHere",
      // exec_mode: "cluster",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      error_file: "./logs/app-err.log",
      out_file: "./logs/app-out.log",
      watch: false, // optional, adjust as needed
      env_dev: {
        NODE_ENV: "development"
      },
      env_prod: {
        NODE_ENV: "production"
      },
      exp_backoff_restart_delay: 1000, // optional, adjust as needed
      max_memory_restart: "400M" // optional, adjust as needed
    }
  ]
};
