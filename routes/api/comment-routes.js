const router = require('express').Router();
const { 
    addComment, 
    removeComment,
    addReply,
    removeReply
 } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)

// PUT route to handle addNewReply()

module.exports = router;