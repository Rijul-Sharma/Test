const axios = require('axios');

const recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
const recaptcha_secret = '6LcnRzUqAAAAADsiIfr9W1GS8Bum0tW_L9H8HJ-Y';
const recaptcha_response = req.body.recaptcha_response;

axios.post(recaptcha_url, null, {
    params: {
        secret: recaptcha_secret,
        response: recaptcha_response
    }
})
.then(response => {
    const data = response.data;
    if (data.success && data.score >= 0.5) {
        console.log("Not a Bot")
    } else {
        console.log("Bot detected")
    }
})
.catch(error => {
    console.error('Error verifying reCAPTCHA:', error);
});
