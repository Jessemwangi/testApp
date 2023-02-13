const { Router } = require( "express" );
const indexFeed = require( "../controller/indexController" );

const router = Router()

router.get('/api/all', indexFeed)

module.exports = router;
