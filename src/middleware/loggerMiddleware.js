export default function loggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const accessToken = req.headers.authorization || "No Access Token";

  console.log(
    `[${timestamp}] ${method}: ${url}, AccessToken: "${accessToken}"`
  );

  next();
}
