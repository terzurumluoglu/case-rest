const userService = require('../services/user.service');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

// @desc   Get All Users
// @route  GET /user
// @access Public
const getAllUsers = asyncHandler(async (req, res, next) => {

    const users = await userService.getAllUsers();

    res.status(200).send({
        success: true,
        data: {
            users
        }
    })
});

// @desc   Get User by Id
// @route  GET /user
// @access Public
const getUserById = asyncHandler(async (req, res, next) => {

    const { id } = req.params;

    const user = await userService.getUserById(+id);

    if (!user) {
        return next(new ErrorResponse(`User not found id of ${id}`, 404));
    }

    res.status(200).send({
        success: true,
        data: {
            user
        }
    })
});

module.exports = { getAllUsers, getUserById };
