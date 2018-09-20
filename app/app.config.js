apps : [
      {
        name: "app",
        script: "./bin/www",
        watch: true,
        log_date_format: YYYY-MM-DD HH:mm Z
        env_production: {
            "NODE_ENV": "production",
            export JWT_SECRET=anythingSecret
       export DB_USERNAME=cabin
       export DB_HOST=localhost
       export DB_PASSWORD=v11nc3ntnwaokoriE
       export DB_PORT=3306
       export MAPBOX_ACCESS_TOKEN=pk.eyJ1IjoidmluY2VudHJvbWFuIiwiYSI6ImNqajl6NXJqcDBrYTAzcG52YXMzcm44OHcifQ.ky4hoj$
       export S3_KEY=AKIAJGBO2EKCO5T2C5YA
       export S3_SECRET=VALUE
       export S3_BUCKET=monarch1465
       export STREAM_APP_ID=36862
       export STREAM_KEY=dcchynh56kvg
       export STREAM_SECRET=9ms8fqz5aehhuz66jpegzq8jbnv7b62tap2evxrtd589gfh2s3uuywknugpmhh7u
       export ALGOLIA_APP_ID=6XSECYQ7BC
       export ALGOLIA_SEARCH_ONLY_KEY=5812150a15d11df409d41b0ac4ba112f
       export ALGOLIA_API_KEY=703e24786c4303be18b5e582895e00cd
       export KEEN_PROJECT_ID=5b22ad96c9e77c0001525049 
       export KEEN_WRITE_KEY=EDD44DF116ED44C98125E38DE6983A0F268C7D1A59440B9AE0046AE1693FE2BDD1D5B546554F6856C5C65$
       export KEEN_READ_KEY=AA43E8615F443900F00741BBD42D3866220AF9EB9B066BB75B3EA7B0D02046C3BC26A8DCB396BE1F333D05$
       export IMGIX_BASE_URL=https://react-example-app.imgix.net/uploads
       export API_URL=https://trendit.pro:8000
        }
      }
  ]
}
