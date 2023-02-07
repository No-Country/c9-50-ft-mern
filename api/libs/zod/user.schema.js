const { z } = require( 'zod ');

const loginUserSchema = z.object({
    email: z.tring().email(),
    password: z.string().min(8)
});

module.exports = loginUserSchema;