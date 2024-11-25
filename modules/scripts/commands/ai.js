const fs = require ("fs");
const path = require("path") ;

module.exports.config = {
  name:"ai" ;
  description: "Interact with ChatGPT-4o",
  async run ({ api, event, send, args }){
    const prompt = args.join(" ");
    if (!prompt) return send(`Please enter your question! 

Example: ai what is love?`);
    send("Please wait... 🔎");
    try {
    const gpt = await axios.get(`https://joshweb.click/api/gpt-4o`, {
      params: {
        q: prompt,
        uid: event.sender.id
      }
    });
    if (!gpt || !gpt.data.status)
    throw new Error();
    send(`${gpt.data.result}

🤖 LeviAI By Bry`);
    } catch(err){
      send(err.message || err);
      return;
    }
  }
        }
      
