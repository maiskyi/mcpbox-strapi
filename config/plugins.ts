export default ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: env("GCP_STORAGE_BUCKET_NAME"),
        publicFiles: true,
        serviceAccount: (() => {
          if (env("GCP_STORAGE_SERVICE_ACCOUNT_BASE64")) {
            return JSON.parse(
              Buffer.from(env("GCP_STORAGE_SERVICE_ACCOUNT_BASE64"), "base64").toString(
                "utf8"
              )
            );
          }
        })(),
      },
    },
  },
});
