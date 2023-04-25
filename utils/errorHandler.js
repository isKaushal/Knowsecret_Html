export class CustomError extends Error {
    constructor({ name = "", status = false, msg = "", error, code = 500 }) {
        super(msg);
        this.status = status;
        this.msg = msg;
        this.name = name;
        this.error = error;
        this.code = code;

        Error.captureStackTrace(this);
    }
}

export async function errorHandler(error, req, res) {
    console.log(error);

    if (error instanceof CustomError && error.name === "AuthError") {
        return res.redirect("/error");
    }

    return res.send({ statusCode: 500, message: "Internal server error", status: false });
}
