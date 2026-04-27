import { useState } from "react";

export default function Register() {
  const [data, setData] = useState({});

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(data)
    });
    alert("تم التسجيل");
  };

  return (
    <div>
      <input placeholder="username" onChange={e => setData({...data, username: e.target.value})}/>
      <input placeholder="email" onChange={e => setData({...data, email: e.target.value})}/>
      <input placeholder="password" type="password" onChange={e => setData({...data, password: e.target.value})}/>
      <button onClick={handleSubmit}>تسجيل</button>
    </div>
  );
}
