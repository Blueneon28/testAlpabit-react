import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { GlobalContext } from "../../utils/context";
import Layout from "../../components/Layout";

export default function AddContact() {
  let navigate = useNavigate();

  const { addContact, contacts } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: contacts.length + 1,
      name,
      number,
      email,
    };
    addContact(newContact);
    navigate("/");
  };
  return (
    <Layout>
      <h1 className="mb-6 text-xl font-bold">Add New Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="form-control w-full">
          <label>
            <span className="font-semibold text-lg">
              Name<span className="text-[#ff3b30]">*</span>
            </span>
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
            className="w-full rounded-lg py-2 px-4 my-2"
          />
        </div>
        <div className="form-control w-full">
          <label>
            <span className="font-semibold text-lg">
              Phone Number<span className="text-[#ff3b30]">*</span>
            </span>
          </label>
          <input
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder="Enter phone number"
            className="w-full rounded-lg py-2 px-4 my-2"
          />
        </div>
        <div className="form-control w-full">
          <label>
            <span className="font-semibold text-lg">
              Email<span className="text-[#ff3b30]">*</span>
            </span>
          </label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            className="w-full rounded-lg py-2 px-4 my-2"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="mx-auto mt-5 bg-[#4cd964] w-1/4 hover:bg-green-600 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
        <div className="text-center mt-4 text-[#5956d6]">
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </Layout>
  );
}
