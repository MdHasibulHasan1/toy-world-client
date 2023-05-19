import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyToys = () => {
  const [selectedToy, setSelectedToy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [myToys, setMyToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch my toys data here
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, [user, isModalOpen]);

  const handleEditToy = (toy) => {
    setSelectedToy(toy);
    setIsModalOpen(true);
  };

  const handleUpdateToy = (updatedToy) => {
    fetch(`http://localhost:5000/updateToy/${updatedToy._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          toast.success("Edit successful!");
        }
        console.log(result);
      });

    console.log("Updated Toy:", updatedToy);
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });

        const remaining = myToys.filter((toy) => toy._id !== id);
        setMyToys(remaining);
      }
    });
  };

  return (
    <div>
      <div className="">
        <h1 className="text-center p-4">ALL My Toys</h1>
        <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full lg:w-10/12 mx-auto">
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Toy Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myToys?.map((toy, index) => (
                <tr className="" key={toy._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className="block rounded-full w-14"
                      src={toy.pictureUrl}
                      alt=""
                    />
                  </td>
                  <td>{toy.toyName}</td>
                  <td>{toy.quantity}</td>
                  <td>{toy.price}</td>
                  <td>
                    <button
                      className="btn btn-sm"
                      onClick={() => handleEditToy(toy)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(toy._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Toy</h2>
            <form>
              <div>
                <label className="block mb-2">Toy Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={selectedToy.toyName}
                  onChange={(e) =>
                    setSelectedToy({
                      ...selectedToy,
                      toyName: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block mb-2">Quantity</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={selectedToy.quantity}
                  onChange={(e) =>
                    setSelectedToy({
                      ...selectedToy,
                      quantity: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <label className="block mb-2">Price</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={selectedToy.price}
                  onChange={(e) =>
                    setSelectedToy({
                      ...selectedToy,
                      price: parseFloat(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <label className="block mb-2">Description</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                  value={selectedToy.description}
                  onChange={(e) =>
                    setSelectedToy({
                      ...selectedToy,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </form>
            <div className="flex justify-end mt-4">
              <button
                className="btn btn-primary mr-2"
                onClick={() => handleUpdateToy(selectedToy)}
              >
                Save Changes
              </button>
              <button className="btn btn-secondary" onClick={handleModalClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyToys;
