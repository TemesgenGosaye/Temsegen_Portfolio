// Utility to get your Telegram Chat ID
// 1. Send any message to your bot in Telegram
// 2. Visit this URL in your browser: https://api.telegram.org/bot8624890864:AAGEI7Q9eVzrPMuxEo8JTQcDTVR6iz08UP8/getUpdates
// 3. Look for the "chat" -> "id" field in the response
// 4. Replace 'YOUR_CHAT_ID' in the Contact component with your actual chat ID

export const getTelegramChatId = async () => {
  try {
    const response = await fetch('https://api.telegram.org/bot8624890864:AAGEI7Q9eVzrPMuxEo8JTQcDTVR6iz08UP8/getUpdates');
    const data = await response.json();
    
    if (data.ok && data.result.length > 0) {
      const chatId = data.result[0].message.chat.id;
      console.log('Your Telegram Chat ID is:', chatId);
      return chatId;
    } else {
      console.log('No messages found. Send a message to your bot first!');
      return null;
    }
  } catch (error) {
    console.error('Error getting chat ID:', error);
    return null;
  }
};

// Instructions:
/*
1. Add your bot as a contact in Telegram
2. Send any message to your bot (like "hello")
3. Run the getTelegramChatId function or visit: 
   https://api.telegram.org/bot8624890864:AAGEI7Q9eVzrPMuxEo8JTQcDTVR6iz08UP8/getUpdates
4. Find your chat ID in the response and update the Contact component
*/
