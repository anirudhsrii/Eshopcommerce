import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized access' });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            req.user = { userId: tokenDecode.id }; // Set `req.user` with `userId`
            next();
        } else {
            return res.status(401).json({ success: false, message: 'Unauthorized access' });
        }
    } catch (error) {
        console.error('Error in authUser:', error.message);
        res.status(401).json({ success: false, message: error.message });
    }
};

export default authUser;