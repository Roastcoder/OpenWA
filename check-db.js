const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://openwa:Roott%406378110608@187.77.187.120:4443/postgres'
});

async function run() {
  try {
    console.log('Connecting to external database...');
    await client.connect();
    console.log('Successfully connected!');
    const res = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public';");
    console.log('\nTables:');
    res.rows.forEach(row => console.log(`- ${row.table_name}`));
  } catch (err) {
    console.error('Connection error:', err.message);
  } finally {
    await client.end();
  }
}

run();
