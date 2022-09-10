import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../utils/context";
import Layout from "../components/Layout";

import { MdAdd, MdEdit, MdDelete } from "react-icons/md";

function Home() {
  const { contacts, removeContact } = useContext(GlobalContext);
  return (
    <Layout>
      {contacts.length > 0 ? (
        <>
          {contacts.map((contact) => (
            <div
              className="flex items-center bg-[#007aff] mb-10 shadow rounded-xl"
              key={contact.id}
            >
              <div className="flex-auto text-left px-4 py-2 m-2 w-9/12">
                <p className="leading-none text-xl font-bold">{contact.name}</p>
                <p className="text-lg">{contact.number}</p>
                <span className="inline-block text-lg font-semibold mt-1">
                  {contact.email}
                </span>
              </div>
              <div className="flex-auto text-right px-4 py-2 m-2 w-1/4 mx-auto">
                <Link to={`/editContact/${contact.id}`} title="Edit Contact">
                  <div className="bg-[#ff9500] hover:bg-yellow-600 font-semibold mr-3 p-2 rounded-full inline-flex items-center">
                    <MdEdit size={30} />
                  </div>
                </Link>
                <button
                  onClick={() => removeContact(contact.id)}
                  className="bg-[#ff3b30] hover:bg-red-600 font-semibold p-2 rounded-full inline-flex items-center"
                  title="Delete Contact"
                >
                  <MdDelete size={30} />
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-center py-5 font-bold text-3xl">No data.</p>
      )}

      <div
        className="fixed z-30 right-8 bottom-8 w-16 h-16 rounded-full bg-[#007aff] hover:bg-blue-600"
        title="Add Contact"
      >
        <Link
          to="/addContact"
          className="w-full h-full flex items-center justify-center"
        >
          <MdAdd size={50} />
        </Link>
      </div>
    </Layout>
  );
}

export default Home;
