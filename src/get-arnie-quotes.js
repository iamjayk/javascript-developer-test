const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  return Promise.all(urls.map(async url => {
    const response = await httpGet(url);
    let parsedResponse = JSON.parse(response?.body ?? '{}');
    if (response?.status === 200) {
      return {
        "Arnie Quote": parsedResponse?.message
      }
    } else {
      return {
        "FAILURE": parsedResponse?.message
      }
    }
  }));
};

module.exports = {
  getArnieQuotes,
};
