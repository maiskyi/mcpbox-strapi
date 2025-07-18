export default ({ env }) => {
  return {
    upload: {
      config: {
        provider:
          "@strapi-community/strapi-provider-upload-google-cloud-storage",
        providerOptions: {
          bucketName: env("GCP_STORAGE_BUCKET_NAME"),
          publicFiles: true,
          serviceAccount: env.json("GCP_STORAGE_SERVICE_ACCOUNT"),
        },
      },
    },
  };
};
