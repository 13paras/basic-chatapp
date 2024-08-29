import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }, // this means find the conversation where participants array contains both senderId and receiverId
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // to run concurrent promises we use Promise.all() method
    await Promise.all([conversation.save(), newMessage.save()]);

    // SOCKET IO FUNCTIONALITY
    const receiverSocketId = getReceiverSocketId(receiverId);
    console.log("receiverSocketId: ", receiverSocketId);
    if (receiverSocketId) {
      // io.to.emit() is used to send events to a specific client
      // io.emit() is used to send events to all the connected clients.
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.log("Error in sending message: ", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] }, // this means find the conversation where participants array contains both senderId and receiverId
    }).populate("messages"); // populate messages array with message objects

    if (!conversation) {
      return res.status(200).json({
        message: "Conversation not found",
      });
    }

    const messages = conversation.messages;

    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.log("Error in getting messages: ", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export { sendMessage, getMessages };
