const errorHandler = (err, req, res, next) => {

    let error = { ...err };
    error.message = err.message;

    res.status(error.statusCode || 500).json({
        success: false,
        statusCode: error.statusCode,
        error: error.message || 'Server Error',
    });
}

module.exports = errorHandler;
