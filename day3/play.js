// Callback function
const funA = (name, callback) => {
        console.log('Welcome in functionA ' + name);
        callback();
}

const funB = () => {
    console.log('Welcome in functionB');
}

funA('ram', funB);