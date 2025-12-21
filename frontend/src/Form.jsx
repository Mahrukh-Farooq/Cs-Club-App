function AddEventForm({ addEvent }) {
    const [form, setForm] = useState({
      title: "",
      date: "",
      location: "",
      description: ""
    });
  
    function handleSubmit(e) {
      e.preventDefault();
      addEvent(form);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" onChange={(e)=>setForm({...form, title: e.target.value})}/>
       
        <button type="submit">Add Event</button>
      </form>
    );
  }
  