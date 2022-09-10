import { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { GlobalContext } from "../../utils/context";
import Layout from "../../components/Layout";

export default function EditContact() {
  let navigate = useNavigate();
  let { id } = useParams();

  const { editContact, contacts } = useContext(GlobalContext);

  const [selectedContact, setSelectedContact] = useState({
    id: null,
    name: "",
    number: "",
    email: "",
  });

  const currentContactId = id;

  useEffect(() => {
    const contactId = currentContactId;
    const selectedContact = contacts.find(
      (currentcontactTraversal) =>
        currentcontactTraversal.id === parseInt(contactId)
    );
    setSelectedContact(selectedContact);
  }, [currentContactId, contacts]);

  const onSubmit = (e) => {
    e.preventDefault();
    editContact(selectedContact);
    navigate("/");
  };

  const handleOnChange = (contactKey, newValue) =>
    setSelectedContact({ ...selectedContact, [contactKey]: newValue });

  if (!selectedContact || !selectedContact.id) {
    return <p>Invalid contact ID.</p>;
  }
  return (
    <Layout>
      <h1 className="mb-6 text-xl font-bold">Edit Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="form-control w-full">
          <label>
            <span className="font-semibold text-lg">
              Name<span className="text-red-600">*</span>
            </span>
          </label>
          <input
            required
            value={selectedContact.name}
            onChange={(e) => handleOnChange("name", e.target.value)}
            type="text"
            placeholder="Enter name"
            className="w-full rounded-lg py-2 px-4 my-2"
          />
        </div>
        <div className="form-control w-full">
          <label>
            <span className="font-semibold text-lg">
              Phone Number<span className="text-red-600">*</span>
            </span>
          </label>
          <input
            required
            value={selectedContact.number}
            onChange={(e) => handleOnChange("number", e.target.value)}
            type="number"
            placeholder="Enter phone number"
            className="w-full rounded-lg py-2 px-4 my-2"
          />
        </div>
        <div className="form-control w-full">
          <label>
            <span className="font-semibold text-lg">
              Email<span className="text-red-600">*</span>
            </span>
          </label>
          <input
            required
            value={selectedContact.email}
            onChange={(e) => handleOnChange("email", e.target.value)}
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
            Update
          </button>
        </div>
        <div className="text-center mt-4 text-[#5956d6]">
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </Layout>
  );
}
