function Form({onClick}) {
  return (  

    <div>
      <form >
      <label>Texto: 
      <input type="text" id="input-id" />
      </label>
      <button type="submit" onClick={onClick}>Click</button>
      </form>
    </div>

  );
}


export default Form;