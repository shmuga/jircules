export function parseURI(url) {
  let parser = document.createElement('a');
  parser.href = url;
  const parsedUrl = {
    protocol: parser.protocol.replace(':', ''),
    host: parser.hostname,
  };
  parser = null;
  return parsedUrl;
}

