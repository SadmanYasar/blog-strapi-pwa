'use strict';

module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
    search: {
        enabled: true,
        config: {
            provider: 'algolia',
            providerOptions: {
                apiKey: env('ALGOLIA_PROVIDER_ADMIN_API_KEY'),
                applicationId: env('ALGOLIA_PROVIDER_APPLICATION_ID'),
            },
            contentTypes: [
                { name: 'api::article.article' },
                { name: 'api::category.category' },
            ],
        },
    },
    email: {
        provider: 'sendgrid',
        providerOptions: {
            apiKey: env('SENDGRID_API_KEY')
        },
        settings: {
            defaultFrom: env('DEFAULT_EMAIL'),
            defaultReplyTo: env('DEFAULT_EMAIL')
        }
    }
});