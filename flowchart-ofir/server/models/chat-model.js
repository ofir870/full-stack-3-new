
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chats = new Schema(
    {

        userId: { type: String, required: true ,unique: true },
        chatsLikes: { type: Array  },
        eventLikes: { type: Array  },
        feedLikes: { type: Array  },
        isnewEvent: { type: Array  },
        isNewChat: { type: Array  },
        isNewShopping: { type: Array  },
        chatMessagesHistory: { type: Array  },
        isBlocked: { type: Boolean, required: true },
        isActive: { type: Boolean, required: true }
        
    
    },
    
    { timestamps: true },


)

module.exports = mongoose.model('chats', chats)