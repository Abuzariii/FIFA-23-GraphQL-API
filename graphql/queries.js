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

const TopPlayersByClub = async (_, args) => {
  // Use _ as the first argument if it's not being used
  try {
    const query = `SELECT * FROM fifa WHERE "Club" = '${args.club}' ORDER BY "Overall" DESC;`;
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

const TopPlayersByNationality = async (_, args) => {
  // Use _ as the first argument if it's not being used
  try {
    const query = `SELECT * FROM fifa WHERE "Nationality" = '${args.nationality}' ORDER BY "Overall" DESC;`;
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

const PlayerByName = async (_, args) => {
  // Use _ as the first argument if it's not being used
  try {
    const query = `SELECT * FROM fifa WHERE unaccent("Name") ILIKE unaccent('%${args.name}%') ORDER BY "Overall" DESC;`;
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

const PlayerByPreferredFoot = async (_, args) => {
  // Use _ as the first argument if it's not being used
  try {
    const query = `SELECT * FROM fifa WHERE initcap("Preferred_Foot") ILIKE initcap('${args.foot}') ORDER BY "Overall" DESC;
`;
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

const PlayersByInternationalReputation = async (_, args) => {
  // Use _ as the first argument if it's not being used
  try {
    const query = `SELECT * FROM fifa ORDER BY "International_Reputation" DESC;`;
    const result = await pool.query(query);

    if (args.limit !== undefined && args.limit > 0) {
      return result.rows.slice(0, args.limit);
    }

    return result.rows;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const PlayersByWeakFootPerformance = async (_, args) => {
  // Use _ as the first argument if it's not being used
  try {
    const query = `SELECT * FROM fifa ORDER BY "Weak_Foot" DESC;`;
    const result = await pool.query(query);

    if (args.limit !== undefined && args.limit > 0) {
      return result.rows.slice(0, args.limit);
    }

    return result.rows;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

module.exports = {
  TopPlayers,
  TopPlayersByClub,
  TopPlayersByNationality,
  PlayerByName,
  PlayerByPreferredFoot,
  PlayersByInternationalReputation,
  PlayersByWeakFootPerformance,
};
