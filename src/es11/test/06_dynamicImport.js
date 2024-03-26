const button = document.getElementById('btn');

button.addEventListener('click', async () => {
    const module = await import('./module.js');
    console.log(module)
    module.fn(4)
})