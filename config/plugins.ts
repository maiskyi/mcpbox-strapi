export default ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: env("GCP_STORAGE_BUCKET_NAME"),
        publicFiles: true,
        serviceAccount: JSON.parse(
          Buffer.from(
            env("GCP_STORAGE_SERVICE_ACCOUNT_BASE64"),
            "base64"
          ).toString("utf-8")
        ),
      },
    },
  },
});
