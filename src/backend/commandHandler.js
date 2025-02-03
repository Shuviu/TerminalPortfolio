import { call as call_cat } from './commands/cat.js'

// Universal handling of commands
export function callCommand(input, currentView, updateView){
    // Split input into command and value
    const inputSplit = input.split(' ')
    const command = inputSplit[0]
    let value = ' '
    if (inputSplit.length > 1) {
        value = inputSplit[1]
    }

    // call each command individually
    switch (command) {
        case 'cat':
            updateView([...currentView, call_cat(value)])
            break;
        case 'clear':
            updateView([currentView[0]])
            break;
        default:
            break;
    }
}