// 332, 333 endpoints remove, create, login, 335 express validator, 336 custom middleware validator
/* Users routes:
    host/api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
  userLogin,
  userCreate,
  userRenewToken,
} = require("../controllers/auth");
const { fieldValidator } = require("../middlewares/fieldValidator");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.post(
  "/",
  [
    check("email", "no es una forma de email correcta").isEmail(),

    check("password", "el password debe ser de al menos 6 carácteres").isLength(
      { min: 6 }
    ),
    fieldValidator,
  ],
  userLogin
);

router.post(
  "/new",
  [
    check("name", "el nombre es obligatorio").not().isEmpty(),
    check("email", "no es una forma de email correcta").isEmail(),
    check("password", "el password debe ser de al menos 6 carácteres").isLength(
      { min: 6 }
    ),
    fieldValidator,
  ],
  userCreate
);

router.post("/renew", validarJWT, userRenewToken);

module.exports = router;
