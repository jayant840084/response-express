class Response {

    /**
     * @param req express request object
     * @param res express response object
     */
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    /**
     * @param data response data
     * @desc The request was successful without any errors
     */
    success(data = {}) {
        this.res.status(200).json({
            status: "200",
            resonse: data
        });
    }


    /**
     * @param data response data
     * @desc Request failed due to invalid or missing parameters
     */
    badRequest(data = {}) {
        this.res.status(400).json({
            status: "400",
            response: data
        });
    }


    /**
     * @param data response data
     * @desc Request failed due to invalid or missing API key
     */
    unauthorized(data = {}) {
        this.res.status(401).json({
            status: "401",
            response: data
        });
    }


    /**
     * @param data response data
     * @desc Parameters were valid but the request still failed
     */
    requestFailed(data = {}) {
        this.res.status(402).json({
            status: "402",
            response: data
        });
    }


    /**
     * @param data response data
     * @desc The requested resource doesn't exist
     */
    notFound(data = {}) {
        this.res.status(404).json({
            status: "401",
            response: data
        });
    }


    /**
     * @param data response data
     * @desc Too many requests hit the API too quickly
     */
    tooManyRequests(data = {}) {
        this.res.status(429).json({
            status: "429",
            response: data
        });
    }


    /**
     * @param data response data
     * @desc Some database error
     */
    databaseError(data = {}) {
        console.error(data);
        this.res.status(501).json({
            status: "429",
            response: "Database error"
        });
    }
}

module.exports = Response;
