import { myCache } from "../app.js";
import { Message } from "../models/message.model.js";
import { User } from "../models/user.model.js";

const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    let filteredUsers;

    // -------> This is to find all the users to whom the loggedIn user has sent messages
    /* const users = await Message.find({
      senderId: { $all: [id] },
    }).populate("receiverId"); */

    // -------> This is to find all the existing users in our db except the loggedIn user
    if (myCache.has("users")) {
      filteredUsers = JSON.parse(myCache.get("users"));
    } else {
      filteredUsers = await User.find({
        _id: { $ne: loggedInUser },
      }).select("-password");

      myCache.set("users", JSON.stringify(filteredUsers));
    }

    res.status(200).json({
      success: true,
      message: "Users for sidebar",
      filteredUsers,
    });
  } catch (error) {
    console.log("Error getting users for sidebar: ", error.message);
    res.status(400).json({
      success: false,
      message: "Error getting users for sidebar",
    });
  }
};

export { getUsersForSideBar };
