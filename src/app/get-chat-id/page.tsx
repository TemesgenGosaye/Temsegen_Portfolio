"use client";

import { useState, useEffect } from "react";

export default function GetChatId() {
  const [chatId, setChatId] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getChatId = async () => {
    setLoading(true);
    setError("");
    
    try {
      const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
      if (!botToken) {
        throw new Error('Bot token not found in environment variables');
      }
      
      const response = await fetch(`https://api.telegram.org/bot${botToken}/getUpdates`);
      const data = await response.json();
      
      if (data.ok && data.result.length > 0) {
        const id = data.result[0].message.chat.id.toString();
        setChatId(id);
      } else {
        setError("No messages found. Please send a message to your bot first!");
      }
    } catch (err) {
      setError("Error fetching chat ID. Please check your bot token.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Get Telegram Chat ID
        </h1>
        
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h2 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Instructions:</h2>
            <ol className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-decimal list-inside">
              <li>Send any message to your new bot in Telegram</li>
              <li>Click the "Get My Chat ID" button below</li>
              <li>Copy your Chat ID and update the .env.local file</li>
            </ol>
          </div>

          <button
            onClick={getChatId}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50"
          >
            {loading ? "Getting Chat ID..." : "Get My Chat ID"}
          </button>

          {chatId && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                ✅ Your Chat ID:
              </h3>
              <div className="bg-white dark:bg-gray-700 border border-green-300 dark:border-green-600 rounded px-3 py-2 font-mono text-green-700 dark:text-green-300">
                {chatId}
              </div>
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                Copy this ID and replace 'YOUR_CHAT_ID' in the .env.local file!
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-1">
                ❌ Error:
              </h3>
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Bot Token: Hidden for security 🔒
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">
            Check .env.local file for configuration
          </p>
        </div>
      </div>
    </div>
  );
}
