// middleware/authMiddleware.js

const predefinedUser = {
    email: 'admin@example.com',
    password: 'securepassword1',
  };
  
  const authMiddleware = (req, res, next) => {
    const { email, password } = req.body;
  
    if (email === predefinedUser.email && password === predefinedUser.password) {
      next();
    } else {
      res.status(403).send('Forbidden: Access denied');
    }
  };
  
  export default authMiddleware;
  