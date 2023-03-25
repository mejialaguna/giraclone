import mongoose from "mongoose";

// 0 = disconnected,
// 1 = connected,
// 2 = connecting,
// 3 = disconnecting

const mongooConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongooConnection.isConnected) {
    console.log("connected");
    return;
  }

  if (mongooConnection.isConnected > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState;

    if (mongooConnection.isConnected === 1) {
      console.log("using previous connection");
    }
    return mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || "");
  mongooConnection.isConnected = 1;
  console.log("connected to mongoose", process.env.MONGO_URL);
};

export const disconnect = async () => {
  if (mongooConnection.isConnected === 0) return;

  await mongoose.disconnect();
  console.log("disconnecting");
};
