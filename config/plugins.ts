export default ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: env("GCP_STORAGE_BUCKET_NAME"),
        publicFiles: true,
        serviceAccount: env("GCP_SERVICE_ACCOUNT_BASE64")
          ? JSON.parse(
              Buffer.from(env("GCP_SERVICE_ACCOUNT_BASE64"), "base64").toString(
                "utf8"
              )
            )
          : (() => {
              throw new Error("GCP_SERVICE_ACCOUNT_BASE64 is not defined");
            })(),
      },
    },
  },
});
