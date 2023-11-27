import app from "./app";
import { config } from "@tiger-wallet/config";
import { createServer } from "http";

export const server = async () => {
  try {
  } catch (err) {
    // eslint-disable-next-line
    console.error("Unable to connect to database");
    // Exit Process if there is no Database Connection
    process.exit(1);
  }

  const server = createServer(app);

  server.listen(config.API_PORT, () => {
    console.log(`Server running in ${config.API_PORT}`);
  });
};
