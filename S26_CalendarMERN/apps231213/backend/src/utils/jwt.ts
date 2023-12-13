import jwt from "jsonwebtoken";

export const generateJwt = (uid: string, name: string) => {
  return new Promise((resolve, reject) => {
    const jwtPayload = {
      uid,
      name,
    };

    jwt.sign(
      jwtPayload,
      process.env.JWT_SECRET_KEY!,
      {
        expiresIn: "1y",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("Token couldn't be generated");
        }
        resolve(token);
      }
    );
  });
};
