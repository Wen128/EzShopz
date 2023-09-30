import React from 'react';
import { ChatList } from './ChatList';

function ChatContainer() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="h-[500px] w-3/5 border-2 flex rounded-2xl shadow-xl">
        <div className="w-1/3 p-3 shadow-lg border-r-2">
          {ChatList.map((index) => (
            <div className="flex items-center hover:bg-gray-100 p-2">
              <img
                src={index.img}
                alt="profilePicture"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div className="truncate w-3/5 mr-5">
                <p className="font-medium">{index.name}</p>
                <p className="truncate text-gray-500">{index.text}</p>
              </div>
              <div className="flex items-end">
                <div className="flex flex-col items-end justify-end h-12">
                  {index.unread === 0 ? (
                    <></>
                  ) : (
                    <p className="text-xs mb-1 border-2 px-1 py-[2px] rounded-[4px] bg-green-500 text-white border-green-500">
                      {index.unread === 0 ? <></> : index.unread}
                    </p>
                  )}

                  <p className="text-gray-500 text-sm">{index.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-2/3 p-3 bg-gray-100 shadow-lg flex justify-center items-center">
          <p className="text-gray-500">Select Chat to Start Conversation!</p>
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;
