// Store questions array and current state
const questions = [
    {
        question: "What is your approach to learning and knowledge?",
        options: [
            { text: "I learn to achieve success and recognition", guna: "rajas" },
           { text: "I seek knowledge for self-realization and to help others", guna: "sattva" },
            { text: "I find learning difficult and prefer entertainment", guna: "tamas" }
        ]
    },
   {
        question: "At what time do you wake up in morning?",
        options: [
            { text: "After 8am ", guna: "tamas" },
            { text: "4 AM - 6 AM", guna: "sattva" },
            { text: "6 am - 8 am ", guna: "rajas" }
          
        ]
    },
   {
        question: "What kind of book would you prefer reading?",
        options: [
           
            { text: " Self Development", guna: "rajas" },
            { text: "Fiction", guna: "tamas" },
           { text: "Spritual", guna: "sattva" }
        ]
    },
  {
        question: "How is you behaviour with your family",
        options: [
           
            { text: "Moody, get angry often", guna: "rajas" },
            { text: "Mostly Irritated , dull", guna: "tamas" },
          { text: "Calm composed and cheerful", guna: "sattva"}
        ]
    },
  {
        question: "What is the quality and duration of you sleep",
        options: [
            { text: "Calm and peaceful sleep of 6 hrs is enough for you", guna: "sattva" },
            { text: "You need more than 8 hrs of sleep, sometimes even face insomnia", guna: "tamas" },
          { text: "You get dreams quite often. Need 8 hrs of sleep", guna: "rajas" }
        ]
    },
  {
        question: "Which kind of colours you would prefer",
        options: [
            { text: "I prefer light shades like white baby pink", guna: "sattva" },
            { text: "I prefer colours like red and orange", guna: "rajas" },
            { text: "I prefer shades like black, dark blue", guna: "tamas" }
        ]
    },
  {
        question: "Rate your memorising ability",
        options: [
            { text: "Good can remember things in short period o time", guna: "sattva" },
            { text: "Moderate can remeber things with slight effort", guna: "rajas" },
            { text: "Weak find tought time to memeorise concpets and recall", guna: "tamas" }
        ]
    },
  {
        question: "How honest are you?",
        options: [
           
            { text: "Variable. Depends on the situaltion", guna: "rajas" },
            { text: "Lie quite often", guna: "tamas" },
           { text: "Always honest", guna: "sattva" },
        ]
    },
  {
        question: "Your love is...?",
        options: [
            { text: "Personal. You love yourself and your colse family members only", guna: "rajas" },
            { text: "You hardly love anybody except yourself", guna: "tamas" },
          { text: "Universal. For you all people are lovable", guna: "sattva" }
        ]
    },
  {
        question: "How easily do you forgive others?",
        options: [
           
            { text: "Need to make an effort to forgive others", guna: "rajas" },
           { text: "very easily", guna: "sattva" },
            { text: "Can't forgive. You ususally build gurdges against people", guna: "tamas" }
        ]
    },
  {
        question: "Hows your inclination towards cleanliness?",
        options: [
            { text: "Your room is always clean and tidy", guna: "sattva" },
            { text: "Sometimes clean, sometimes out of space", guna: "rajas" },
            { text: "Room is mostly shabby", guna: "tamas" }
        ]
    },
  {
        question: "What do you dwell in most if the time?",
        options: [
            { text: "In present moment", guna: "sattva" },
            { text: "In future, thinking about your goals etc.", guna: "rajas" },
            { text: "In past memories", guna: "tamas" }
        ]
    },
  {
        question: "I am mostly ",
        options: [
           
            { text: "Anxious, hyperactive", guna: "rajas" },
           { text: "Easy going", guna: "sattva" },
            { text: "In depressive state of mind", guna: "tamas" }
        ]
    },
    {
        question: "What is your natural response in critical situations or during tough times",
        options: [
            { text: "You remain calm and try to think wisely", guna: "sattva" },
            { text: " You are often keen to improve and fix ", guna: "rajas" },
            { text: "You will rather curse the situation you are in ", guna: "tamas" }
        ]
    },
    {
        question: "How do you typically handle stress?",
        options: [
           
            { text: "I become restless and try multiple solutions quickly", guna: "rajas" },
           { text: "I remain calm and seek peaceful solutions through meditation", guna: "sattva" },
            { text: "I feel overwhelmed and try to escape the situation", guna: "tamas" }
        ]
    },
    {
        question: "What kind of food do you prefer?",
        options: [
            
            { text: "Spicy, hot, and stimulating foods", guna: "rajas" },
            { text: "Heavy, stale, or processed foods", guna: "tamas" },
          { text: "Fresh, nutritious, and vegetarian food prepared with love", guna: "sattva" }
        ]
    },
    {
        question: "What music you would prefer listening to?",
        options: [
            { text: "Soothing", guna: "sattva" },
            { text: "Loud", guna: "rajas" },
            { text: "Sad", guna: "tamas" }
        ]
    },
    {
        question: "What motivates you to work?",
        options: [
            { text: "Duty and service without attachment to results", guna: "sattva" },
            { text: "Desire for success, wealth, and recognition", guna: "rajas" },
            { text: "External pressure or bare necessity", guna: "tamas" }
        ]
    },
    {
        question: "How do you view charity and giving?",
        options: [
            { text: "Give selflessly to worthy causes without expectation", guna: "sattva" },
            { text: "Give for recognition or future benefits", guna: "rajas" },
            { text: "Give reluctantly or avoid giving", guna: "tamas" }
        ]
    },
    {
        question: "How often do you get angry",
        options: [
             { text: "Sometimes", guna: "rajas" },
          { text: "Very rare", guna: "sattva" },
            { text: "Frequently", guna: "tamas" }
        ]
    },
    {
        question: "How do you make important decisions?",
        options: [
            { text: "Consider dharma (righteousness) and long-term benefit for all", guna: "sattva" },
            { text: "Focus on immediate benefits and results", guna: "rajas" },
            { text: "Procrastinate or let others decide", guna: "tamas" }
        ]
    },
    {
        question: "How do you react to success?",
        options: [
           { text: "With excitement and desire for more achievements", guna: "rajas" },
          { text: "With gratitude and remian humble", guna: "sattva" },     
            { text: "With brief satisfaction followed by inertia", guna: "tamas" }
        ]
    },
    {
        question: "How do people find your speech to be?",
        options: [
            { text: "Peaceful, soothing and calming", guna: "sattva" },
            { text: "Bit agressive or sharp", guna: "rajas" },
            { text: "Dull and low sounding", guna: "tamas" }
        ]
    },
    {
        question: "How do you view happiness?",
        options: [
            { text: "Inner peace and contentment through self-realization", guna: "sattva" },
            { text: "Through achievement and sensory pleasures", guna: "rajas" },
            { text: "Through escaping responsibilities or reality", guna: "tamas" }
        ]
    },
 
  {
        question: "Describe the way you work?",
        options: [
            { text: "Without being attached to the results", guna: "sattva" },
            { text: "No more please. want to realax", guna: "tamas" },
          { text: "Seeking results and rewards", guna: "rajas" }
        ]
    },

    {
        question: "What is your attitude towards worship or spiritual practices?",
        options: [
            { text: "Regular, devoted practice with focus on inner connection", guna: "sattva" },
            { text: "Occasional practice for specific gains or benefits", guna: "rajas" },
            { text: "Mechanical practice or avoidance of spiritual activities", guna: "tamas" }
        ]
    },
          {
        question: "Choose a song that resonates with you:",
        options: [
            { 
                text: "Sattva - Peaceful Meditation Music", 
                guna: "sattva", 
                audio: "https://drive.google.com/file/d/1P3kEkHmVxpyc7H-hkU2bkR5HCk0pRaCd/view?usp=drive_link"  // Update with actual audio path
            },
            { 
                text: "Rajas - Energetic Dance Music", 
                guna: "rajas", 
                audio: "Ek_Zindagi.mp3"   // Update with actual audio path
            },
            { 
                text: "Tamas - Melancholic Music", 
                guna: "tamas", 
                audio: ""   // Update with actual audio path
            }
        ]
          }
];


let currentQuestion = 0;
let scores = {
    sattva: 0,
    rajas: 0,
    tamas: 0
};
let currentAudio = null; // Track currently playing audio

// Function to handle audio playback
function handleAudioPlay(audioElement) {
    // Stop any currently playing audio
    if (currentAudio && currentAudio !== audioElement) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = audioElement;
}
// Add event listeners when the document loads
document.addEventListener('DOMContentLoaded', function() {
    // Get necessary DOM elements
    const personalInfo = document.getElementById('personal-info');
    const questionsSection = document.getElementById('questions-section');
    const startButton = document.getElementById('start-assessment');
    
    // Add click handler for start button
    startButton.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const place = document.getElementById('place').value;
        const birthdate = document.getElementById('birthdate').value;

        // Validate inputs
        if (!name || !place || !birthdate) {
            alert('Please fill in all fields before proceeding.');
            return;
        }

        // Hide personal info and show questions
        personalInfo.classList.add('hidden');
        questionsSection.classList.remove('hidden');
        
        // Display first question
        displayQuestion();
    });
});

// Function to display current question
function displayQuestion() {
    if (currentQuestion >= questions.length) {
        // Stop any playing audio before showing results
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        showResults();
        return;
    }

    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestion];

    const questionHTML = `
        <div class="question-box">
            <h3 class="question-number">Question ${currentQuestion + 1} of ${questions.length}</h3>
            <p class="question-text">${question.question}</p>
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <label class="option">
                        <input type="radio" name="question${currentQuestion}" value="${option.guna}">
                        <span class="option-text">${option.text}</span>
                        ${option.audio ? `
                            <audio id="audio-${currentQuestion}-${index}" onplay="handleAudioPlay(this)">
                                <source src="${option.audio}" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <button type="button" class="audio-button" onclick="event.preventDefault(); document.getElementById('audio-${currentQuestion}-${index}').play()">
                                Play Audio Sample
                            </button>
                        ` : ''}
                    </label>
                `).join('')}
            </div>
            <button type="button" class="next-button" onclick="nextQuestion()">Next Question</button>
        </div>
    `;

    questionContainer.innerHTML = questionHTML;
    updateProgressBar();
}

// Function to handle "Next" button click
function nextQuestion() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestion}"]:checked`);
    
    if (!selectedOption) {
        alert('Please select an answer before proceeding.');
        return;
    }

    // Stop any playing audio before moving to next question
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    scores[selectedOption.value]++;
    currentQuestion++;
    displayQuestion();
}

// Function to update progress bar
function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const progress = (currentQuestion / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// Function to show results
function showResults() {
    const questionsSection = document.getElementById('questions-section');
    const resultsSection = document.getElementById('results-section');
    const total = scores.sattva + scores.rajas + scores.tamas;

    const sattvaPct = Math.round((scores.sattva / total) * 100);
    const rajasPct = Math.round((scores.rajas / total) * 100);
    const tamasPct = Math.round((scores.tamas / total) * 100);

    let dominant = 'sattva';
    if (scores.rajas > scores.sattva && scores.rajas > scores.tamas) {
        dominant = 'rajas';
    } else if (scores.tamas > scores.sattva && scores.tamas > scores.rajas) {
        dominant = 'tamas';
    }

    document.querySelector('#sattva-score .score-value').textContent = `${sattvaPct}%`;
    document.querySelector('#rajas-score .score-value').textContent = `${rajasPct}%`;
    document.querySelector('#tamas-score .score-value').textContent = `${tamasPct}%`;
    
    questionsSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
};
