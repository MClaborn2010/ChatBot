'use client'
import React, { useState } from 'react';
import { OpenAI } from "langchain/llms/openai";

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    const llm = new OpenAI({
      openAIApiKey: "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",
      temperature: 0.9,
    });

    try {
      const response = await llm.predict(inputValue);
      setResult(response);
    } catch (error) {
      console.error(error);
      setResult('Error occurred while fetching data.');
    }
  };

  return (
    <div className='w-screen h-screen bg-green-200 flex flex-col items-center justify-center'>
      <div className='w-1/3 h-2/3 bg-white p-4 rounded shadow-md'>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your question..."
          className="w-full px-3 py-2 border rounded mb-4 text-black"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded"
        >
          Ask Question
        </button>
        <div className="mt-4 h-full">
          <strong>Response:</strong>
          <div className="border p-2 mt-2 text-black h-3/4 overflow-y-scroll">{result}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
