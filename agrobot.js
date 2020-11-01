
function myFunction(){
  var chat= document.getElementById('chat')
  var input_value = document.getElementById('input').value
  document.getElementById('input').value = ''
  var response = document.createElement('p')
  var bot_response = document.createAttribute('class')
  bot_response.value = "bot_response"
  response.setAttributeNode(bot_response)
  display_person(chat,input_value)
  display_bot(input_value,chat,response)
}
function display_person(chat,input_value){
  var input = document.createElement('p')
  var user_response = document.createAttribute('class')
  user_response.value = "user_response"
  input.setAttributeNode(user_response)
  input.innerText = input_value
  chat.appendChild(input)
}
function display_bot(input_value,chat,response){
  if (input_value != ''){
      if (greet.includes(input_value.toLowerCase())){
          response.innerText = "Hello"
          chat.appendChild(response)
      }
      if (wishes.includes(input_value.toLowerCase())){
          response.innerText = "Good to see you in this time "
          chat.appendChild(response)
      }
      if (bye.includes(input_value.toLowerCase())){
          response.innerText = "See you soon!"
          chat.appendChild(response)
      }
      if (get_to_know_bot.includes(input_value.toLowerCase())){
          response.innerText = "I am doing well! Thanks for asking \n How are you ?"
          chat.appendChild(response)
      }
      if (get_to_know_user.includes(input_value.toLowerCase())){
          response.innerText = "That's cool!"
          chat.appendChild(response)
      }
      for (i = 0; i < soiltypes.length;i++){
          if (soiltypes[i] == input_value.toLowerCase() ){
              response.innerText =  `Properties of ${matter[i].soilname} are ${(matter[i].properties)} 
              Suitable crops for ${matter[i].soilname} are ${matter[i].crops}.
              `
              chat.appendChild(response)
          }
      }
  }
  else{
      response.innerText = "Sorry I didn't understand"
      chat.appendChild(response)
      
  }
}
