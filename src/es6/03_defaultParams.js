function newUser (name, age, country) {
    const name = name || 'jose';
    const age = age || '23';
    const country = country || '23';

    console.log('User: ',name, age, country)
}

newUser()
newUser('angel', 24, 'VE')

const newAdmin = (name = 'jose', age = '23', country = 'venezuela') => {
    console.log('Admin', name, age, country)
}

newAdmin()
newAdmin('angel', 24, 'VE')