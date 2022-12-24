const defaultBaseURL = "https://www.google.co.il"

const setRouteWithParams = (URL: string, params: string): string => {
    return `${URL}?${params}`;
}

const setRoute = (URL: string): string => {
    return `${URL}`;
}

const routes = {
    search: setRouteWithParams("/search", "q=google+calculator")
}

const getBaseUrl = (): string => {
    let baseUrlArgIndex = process.argv.findIndex((arg) =>
        arg.startsWith("--baseUrl")
    );
    let baseUrl = "";

    if (baseUrlArgIndex != -1) baseUrl = process.argv[baseUrlArgIndex + 1];
    else baseUrl = defaultBaseURL;

    console.log(`This is the baseUrl the tests are going to use: ${baseUrl}`);
    return baseUrl;
};

export { getBaseUrl, routes }
