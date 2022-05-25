import axios from "axios";

// API Function

let apiGetUserList = null;
let apiGetChatRecord = null;
let apiGetUserNote = null;

const baseUrl = "mock/";
const instance = axios.create({
  baseURL: baseUrl,
});

apiGetUserList = async () => {
  try {
    const res = await instance.get("apiGetUserList.json");
    return res.data;
  } catch (e) {
    return e;
  }
};

apiGetChatRecord = async (chatroomId) => {
  try {
    if (!chatroomId) throw new Error("chatroomId can't be null");
    const res = await instance.get("apiGetChatRecord.json");
    return res.data.filter((item) => item.chatroomId === chatroomId);
  } catch (e) {
    return e;
  }
};

apiGetUserNote = async (userId) => {
  try {
    if (!userId) throw new Error("user");
    const res = await instance.get("apiGetUserNote.json");
    return res.data.filter((item) => item.userId === userId);
  } catch (e) {
    return e;
  }
};

export default {
  apiGetChatRecord,
  apiGetUserList,
  apiGetUserNote,
};
