export function authMiddleware (roles: string[]) {
  return (req, res, next) => {
    console.log('this is my authMiddleware');
    console.log(`roles = ${roles}`);
    const isAuthorized = req.session.user && roles.includes(req.session.user.role.role);
    console.log(`the whole thing is: ${roles.includes(req.session.user.role.role)}`)
    console.log(`first component of isAuthorized ${req.session.user} second component ${req.session.user.role.role}`);
    console.log(`this is isAuthorized Value: ${isAuthorized}`);
    if (isAuthorized) {
      next();
    } else {
      res.sendStatus(403);
    }
  };
}