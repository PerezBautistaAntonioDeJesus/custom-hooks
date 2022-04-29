# useForm Hook

### use the hook
```
 const modelForm = {
     name: 'Bruce B.',
     email: 'hulk@gmail.com'
 }
 const [ values, handleInputChange, handleReset ] = useForm( modelForm );
 const { name, email } = values;
```

### handle sumbit
```
const handleSubmit = (e) => {
        e.preventDefault();

        
        doingSomething( { name: name, email: email })

        // reset the form with the initial state
        handleReset();
    };
```

##  html component
```
 <>
    <h4>Example useForm Hook</h4>
    <hr/>
    <form onSubmit={handleSubmit}>
        <input
            type='text'
            name='name'
            className='form-control'
            onChange={ handleInputChange }
            value={ name }
            placeholder='aprender ...'
            autoComplete='off' />

        <button
            type='submit'
            className='btn btn-outline-primary mt-2 btn-block'>
            Agregar
        </button>

    </form>
 </>
```
