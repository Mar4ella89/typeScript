let arrayG: Array<string | number> = []
arrayG = ['Marat', 34, '11']

// promise

const promiseG: Promise<string> = new Promise((resolve) => {
    setInterval(() => {
        resolve('Done!')
    }, 1000)
})

promiseG.then(data => {
    console.log(data)
})

// Generic function/method