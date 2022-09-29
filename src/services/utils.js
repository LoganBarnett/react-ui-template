/**
 * Utilities for interacting with services.
 */

/**
 * Thrown when a non-successful status code is in a response for fetchOrReject.
 */
class RequestFailureError extends Error {
  constructor(res, message) {
    super(message);
    this.res = res;
  }
}

/**
 * Fetch a resource. For non-successful responses, reject the promise.
 *
 * All args passed through to fetch, so see fetch for argument documentation.
 */
export const fetchOrReject = async (...args) => {
  const res = await fetch(...args)
  if(res.status >= 400) {
    throw new RequestFailureError(
      res,
      `Error requesting ${res.url} (${res.status}): ${res.body}`,
    );
  } else {
    return res;
  }
}
