const pool = require("../models/db");

const TopPlayers = async (_, args) => {
  // Use _ as the first argument if it's not being used
  try {
    const query = `SELECT * FROM fifa ORDER BY "Overall" DESC`;
    const result = await pool.query(query);

    if (args.limit !== undefined && args.limit > 0) {
      return result.rows.slice(0, args.limit); // Return the specified number of players
    }

    return result.rows; // Return all players if no limit is provided
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

module.exports = { TopPlayers };
