const { MongoClient } = require('mongodb');

async function checkLatency(databaseUrl) {
  try {
    const client = new MongoClient(databaseUrl, { useUnifiedTopology: true });
    await client.connect();

    const startTime = Date.now();
    await client.db().command({ ping: 1 });
    const endTime = Date.now();
    const latency = endTime - startTime;
    await client.close();
    
    return latency;
  } catch (error) {
    console.error('Error checking latency:', error);
    throw error;
  }
}

module.exports = checkLatency;
