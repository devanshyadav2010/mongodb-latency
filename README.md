# MongoDB Latency

A simple npm package to check the latency of a MongoDB database connection in Node.js applications.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API](#api)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the package using npm:

```bash
npm install mongodb-latency
```

## Usage

Here's how you can use `mongodb-latency` in your Node.js application:

```javascript
const checkLatency = require('mongodb-latency');

// MongoDB database URL
const databaseUrl = 'mongodb://localhost:27017/mydatabase';

// Usage example
checkLatency(databaseUrl)
  .then((latency) => {
    console.log(`MongoDB Latency: ${latency}ms`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

## Features

- **Latency Measurement**: Measure the latency of a MongoDB database connection.
- **Easy Integration**: Simple and efficient integration into Node.js applications.
- **Error Handling**: Handle connection errors and command failures gracefully.

## API

### `checkLatency(databaseUrl: string): Promise<number>`

- `databaseUrl` (string): The MongoDB database URL to check latency for.
- Returns a `Promise` that resolves with the latency in milliseconds.

## Example

```javascript
const checkLatency = require('mongodb-latency');

const databaseUrl = 'mongodb://localhost:27017/mydatabase';

checkLatency(databaseUrl)
  .then((latency) => {
    console.log(`MongoDB Latency: ${latency}ms`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

## Contributing

Contributions are welcome! If you have any improvements or feature suggestions, feel free to open an issue or create a pull request.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request.

## License

This project is licensed under the MIT License.
