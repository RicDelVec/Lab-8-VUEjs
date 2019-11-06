new Vue({
  el: "#app",
  data: {
    money:[
      { level: '15', amount: '1,000,000' },
      { level: '14', amount: '500,000' },
      { level: '13', amount: '250,000' },
      { level: '12', amount: '100,000' },
      { level: '11', amount: '50,000' },
      { level: '10', amount: '25,000' },
      { level: '9', amount: '16,000' },
      { level: '8', amount: '8,000' },
      { level: '7', amount: '4,000' },
      { level: '6', amount: '2,000' },
      { level: '5', amount: '1,000' },
      { level: '4', amount: '500' },
      { level: '3', amount: '300' },
      { level: '2', amount: '200' },
      { level: '1', amount: '100' },
    ],
    message: "",
    answer: []
  },
  created: async function() {
    // Inside an appropriate Vue lifecycle, use async/await/fetch to get 15 trivia questions in multiple choice format, from https://opentdb.com/api_config.php
    const response = await fetch(`https://opentdb.com/api.php?amount=15&type=multiple`)
    const data = await response.json()
    this.message = data.results[0].question
    this.answer.push({
      correct: data.results[0].correct_answer,
      incorrect: data.results[0].incorrect_answers
    })
  }
})