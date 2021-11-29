const logError = (error, errorText = "") => {
  if (Object.prototype.hasOwnProperty.call(error, "response")) {
    console.error(
      "Status",
      error.response.status,
      error.response.statusText,
      ":",
      errorText,
    );
  } else {
    console.log(error);
  }
  if (window.Sentry) Sentry.captureException(error);
};
export default logError;
