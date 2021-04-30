#This code is from the back-end of AlanAI IDE, putting it here for showcasing my code.

// Questions
intent('What does this app do?', "What is this project?", reply('This is a smart programming journal. You can use it to track your programming progress and find useful resources.'));

intent("What can I do with this application?", "What can I do here?", reply("You can submit journal entries, write notes, look up books, and chat with your friends."))

intent('How do I use the programming journal', "How do I use the programming journal", reply("Enter your project name, programming language used, the error you encountered and your solution if you have one. If you want a suggestion, leave the solution input blank and then click the analyse button."))

intent('How do I use the notes section', 'How do I create notes', reply("Click the notes section on the left side of the screen, and then click new note to start taking notes. You can also tell me to bring you there by saying Show me my notes."))

intent('How do I use the resource section', reply("Click on the resource section on the left side of the screen, then enter your required book in the search bar and then click enter or search. You can also tell me to bring you there by saying Bring me to the resource section."))

// Commands
intent("Bring me to the resource section", "Show me the resource section", "Bring me to the home screen", (p) => {
p.play({command: 'navigationResource'});
});

intent("Bring me to the journal section", "Show me my journal", "Show me the journal section", (p) => {
p.play({command: 'navigationJournal'});
});

intent("Bring me to the notes section", "Show me my notes", "Show me the notes section", (p) => {
p.play({command: 'navigationNotes'});
});

intent("Bring me to the general chat", "Show me the general chat", (p) => {
p.play({command: 'generalNavigation'});
});
