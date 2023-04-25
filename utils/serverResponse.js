function sendJsonResponse({ code, msg, data = {}, response, status }) {
    return response.code(code).send({ statusCode: code, message: msg, data: data, status });
}

export function sendSuccessResponse({ code = 200, msg, data = {}, response }) {
    return sendJsonResponse({ response, code, msg, data, status: true });
}

export function sendErrorResponse({ code = 500, msg, data = {}, response }) {
    return sendJsonResponse({ response, code, msg, data, status: false });
}

export const sendResponse = sendJsonResponse;
