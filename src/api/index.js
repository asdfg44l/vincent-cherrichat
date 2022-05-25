import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
// API Function

//GET
let apiGetUserList = null;
let apiGetUserById = null;
let apiGetChatRecord = null;
let apiGetUserNote = null;

//POST
let apiAddChatRecord = null
let apiAddUserNote = null

//DELETE

//Basic setting
const baseUrl = "mock/";
const instance = axios.create({
  baseURL: baseUrl,
});

//GET API
apiGetUserList = async () => {
  try {
    const res = await instance.get("apiGetUserList.json");
    return res.data;
  } catch (e) {
    return e;
  }
};
apiGetUserById = async(userId) => {
    try {
      const res = await instance.get("apiGetUserList.json")
      return res.data.filter(item => item.userId === userId)
    } catch(e) {
      return e
    }
}
apiGetChatRecord = async (chatroomId) => {
  try {
    if (!chatroomId) throw new Error("chatroomId can't be null");
    const res = await instance.get("apiGetChatRecord.json");
    const originData = res.data.filter((item) => item.chatroomId === chatroomId)
    let appendData = localStorage.getItem("cherri-append-chatrecord")

    appendData = appendData 
      ? JSON.parse(appendData).filter((item) => item.chatroomId === chatroomId) 
      : []
    return [...originData, ...appendData];
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

//POST API
apiAddChatRecord = async (params) => {
    params.id = uuidv4() //add id

    let appendData = localStorage.getItem("cherri-append-chatrecord")
    appendData = appendData 
      ? JSON.parse(appendData)
      : []
    appendData.push(params)

    localStorage.setItem("cherri-append-chatrecord", JSON.stringify(appendData))
}

export default {
  apiGetUserList,
  apiGetUserById,
  apiGetChatRecord,
  apiGetUserNote,
  apiAddChatRecord,
  apiAddUserNote
};
