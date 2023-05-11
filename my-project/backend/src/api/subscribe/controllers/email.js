module.exports = {
    send: async (ctx) => {
        let options = ctx.request.body;

        await strapi.plugins.email.services.email.send({
            to: options.to,
            from: "sadmanyasarsayem@proton.me",
            replyTo: "sadmanyasarsayem@proton.me",
            subject: options.subject,
            text: options.html
        });

        ctx.send('Email sent!');
    }
};